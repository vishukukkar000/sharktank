package com.sharktank.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.annotation.PostConstruct;

import org.dozer.DozerBeanMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.sharktank.dao.SharkTankDao;
import com.sharktank.dto.CompanyDto;
import com.sharktank.dto.InvestmentDto;
import com.sharktank.dto.UAMFilterDto;
import com.sharktank.entity.Company;
import com.sharktank.entity.CompanyInvestor;
import com.sharktank.service.SharkTankService;

@Service
@Transactional
public class SharkTankServiceImpl implements SharkTankService{

	@Autowired SharkTankDao sharkTankDao;
	private static final Logger logger = LoggerFactory.getLogger(SharkTankServiceImpl.class);
	LoadingCache<Integer, CompanyDto> companyListCache = null;
	LoadingCache<String, Object> vgMasterLists  = null;
	@Autowired
	@Qualifier("dozerBeanMapperBean")
	DozerBeanMapper mapper;
	@PostConstruct
	public void init(){
		
		companyListCache = CacheBuilder.newBuilder().expireAfterAccess(1, TimeUnit.DAYS).build( new CacheLoader<Integer, CompanyDto>() {
			@Override
			public CompanyDto load(Integer id) throws Exception {
				try {
				Company company =sharkTankDao.fetchCompanyDetails(id);
				if(null != company) {
					return mapCompany(company);
				}
				}
				catch(Exception e) {
					e.printStackTrace();
				}
				return new CompanyDto();
			}

			
		});
		
		
		 vgMasterLists = CacheBuilder.newBuilder().expireAfterAccess(1, TimeUnit.DAYS).build(new CacheLoader<String, Object>(){

			@Override
			public Object load(String key) throws Exception {
				if(null != key){
					if(key.equalsIgnoreCase("investors")){
						return sharkTankDao.fetchDistinctInvestors();
					}
					else if(key.equalsIgnoreCase("seasons")){
						return sharkTankDao.fetchDistinctSeasons();
					}
				}

				return null;
			}

		});
		
	}
	private CompanyDto mapCompany(Company company) {

		CompanyDto companyDto = mapper.map(company, CompanyDto.class);
		Set<CompanyInvestor> investors = company.getCompanyInvestors();
		if(null != investors && !investors.isEmpty()) {
			List<InvestmentDto> investorsDto = new ArrayList<InvestmentDto>();
			for (CompanyInvestor companyInvestor : investors) {
				InvestmentDto dto = new InvestmentDto();
				dto.setInvestment(companyInvestor.getInvestment());
				dto.setInvestor(companyInvestor.getInvestor().getName());
				investorsDto.add(dto);
			}
			companyDto.setInvestmentDto(investorsDto);
		}
		return companyDto;
		
	}
	@Override
	public List<CompanyDto> fetchCompanyList(UAMFilterDto uamFilter, int startLimit, int maxResult) {
		try{
			List<CompanyDto> users= new ArrayList<CompanyDto>();
			List<Company> userList = null;
			if(null != uamFilter){			
				if(null != uamFilter.getInvestorSearch() && !uamFilter.getInvestorSearch().isEmpty()){
					userList = sharkTankDao.UAMfilterInvestor(uamFilter.getInvestorSearch(),startLimit,maxResult);					
				}
				else if(null != uamFilter.getInvestmentAmt() && !uamFilter.getInvestmentAmt().isEmpty()){					
					users = sharkTankDao.UAMfilterInvestmentAmt(uamFilter.getInvestmentAmt(),startLimit,maxResult);
					return users;
				}
				else if(null != uamFilter.getGenderSearch() && !uamFilter.getGenderSearch().isEmpty()){					
					userList = sharkTankDao.UAMfilterGender(uamFilter.getGenderSearch(),startLimit,maxResult);
				}
				else if(null != uamFilter.getSeasonSearch() && !uamFilter.getSeasonSearch().isEmpty()){					
					userList = sharkTankDao.UAMfilterSeason(uamFilter.getSeasonSearch(),startLimit,maxResult);
				}
				else{
					userList = sharkTankDao.fetchCompany(startLimit,maxResult);
				}
							
			}
			else{
				userList = sharkTankDao.fetchCompany(startLimit,maxResult);
			}
			if(null != userList && !userList.isEmpty()){
				for (Company company : userList) {
					CompanyDto dto = mapCompany(company);
					users.add(dto);
				}
			}
			return users;
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public int fetchTotalCompanyCounts() {
		try{
			return sharkTankDao.fetchTotalCompanyCounts();
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return 0;
	}
	@Override
	public List<String> fetchDistinctInvestors() {
		List<String> ifPresent = null;
		try{
			ifPresent = (List<String>) vgMasterLists.get("investors");
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return ifPresent;
	}
	@Override
	public List<Integer> fetchDistinctSeasons() {
		List<Integer> ifPresent = null;
		try{
			ifPresent =(List<Integer>) vgMasterLists.get("seasons");
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return ifPresent;
	}
	@Override
	public int fetchTotalCompanyCounts(UAMFilterDto uamFilter) {
		return sharkTankDao.fetchTotalCompanyCounts(uamFilter);
	}
	@Override
	public CompanyDto fetchCompanyDetail(String company) {
		CompanyDto ifPresent = null;
		try{
			ifPresent =(CompanyDto) companyListCache.get(Integer.parseInt(company));
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return ifPresent;
	}

	
}


