package com.sharktank.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sharktank.dao.SharkTankDao;
import com.sharktank.dto.CompanyDto;
import com.sharktank.dto.UAMFilterDto;
import com.sharktank.entity.Company;
import com.sharktank.entity.CompanyInvestor;
import com.sharktank.entity.Investor;


@Repository
public class SharkTankDaoImpl implements SharkTankDao{
	private static final Logger logger = LoggerFactory.getLogger(com.sharktank.dao.impl.SharkTankDaoImpl.class);
	@Autowired
	SessionFactory sessionFactory;
	@Override
	public Company fetchCompanyDetails(Integer id) {
		try {
			if(null != id) {
				Session session= sessionFactory.getCurrentSession();
				Criteria criteria=session.createCriteria(Company.class);
				criteria.add(Restrictions.eq("id", id));
				return (Company) criteria.uniqueResult();
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Company> UAMfilterInvestor(String investorSearch, int startLimit, int maxResult) {
		try {
			if(null != investorSearch) {
				Session session= sessionFactory.getCurrentSession();
				Criteria criteria=session.createCriteria(CompanyInvestor.class);
				criteria.createAlias("investor", "investor");
				criteria.add(Restrictions.eq("investor.name", investorSearch.trim()));
				criteria.setProjection(Projections.projectionList().add(Projections.distinct(Projections.property("company"))));
				criteria.setFirstResult(startLimit);
				criteria.setMaxResults(maxResult);
				return criteria.list();
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}		return null;
	}

	@Override
	public List<Company> UAMfilterGender(String genderSearch, int startLimit, int maxResult) {
		try {
			if(null != genderSearch) {
				Session session= sessionFactory.getCurrentSession();
				Criteria criteria=session.createCriteria(Company.class);
				criteria.add(Restrictions.eq("gender", genderSearch.trim()));
				criteria.setFirstResult(startLimit);
				criteria.setMaxResults(maxResult);
				return criteria.list();
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}		
		return null;	
	}

	@Override
	public List<Company> UAMfilterSeason(String seasonSearch, int startLimit, int maxResult) {
		try {
			if(null != seasonSearch) {
				Session session= sessionFactory.getCurrentSession();
				Criteria criteria=session.createCriteria(Company.class);
				criteria.add(Restrictions.eq("season", Integer.parseInt(seasonSearch.trim())));
				criteria.setFirstResult(startLimit);
				criteria.setMaxResults(maxResult);
				return criteria.list();
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Company> fetchCompany(int startLimit, int maxResult) {
		try {
			Session session= sessionFactory.getCurrentSession();
			Criteria criteria=session.createCriteria(Company.class);
			criteria.setFirstResult(startLimit);
			criteria.setMaxResults(maxResult);
			return criteria.list();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<String> fetchDistinctInvestors() {
		try {
			Session session= sessionFactory.getCurrentSession();
			Criteria criteria=session.createCriteria(Investor.class);
			criteria.setProjection(Projections.projectionList().add(Projections.distinct(Projections.property("name"))));
			return criteria.list();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Integer> fetchDistinctSeasons() {
		try {
			Session session= sessionFactory.getCurrentSession();
			Criteria criteria=session.createCriteria(Company.class);
			criteria.setProjection(Projections.projectionList().add(Projections.distinct(Projections.property("season"))));
			return criteria.list();
		}
		catch(Exception e) {
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public List<CompanyDto> UAMfilterInvestmentAmt(String investmentAmt, int startLimit, int maxResult) {
		try {
			Session session= sessionFactory.getCurrentSession();
			Criteria criteria=session.createCriteria(CompanyInvestor.class);
			criteria.createAlias("company", "company");
			ProjectionList projectionList = Projections.projectionList();
			projectionList.add(Projections.property("company.id"), "id");
			projectionList.add(Projections.property("company.season"), "season");
			projectionList.add(Projections.property("company.noInSeries"), "series");
			projectionList.add(Projections.property("company.name"), "name");
			projectionList.add(Projections.property("company.deal"), "deal");
			projectionList.add(Projections.property("company.industry"), "industry");
			projectionList.add(Projections.property("company.gender"), "gender");
			projectionList.add(Projections.property("company.equity"), "equity");
			projectionList.add(Projections.property("company.valuation"), "valuation");
			projectionList.add(Projections.property("company.notes"), "notes");
			projectionList.add(Projections.alias(Projections.sqlGroupProjection("sum({alias}.investment) as investmentSum ", "company_id having investmentSum ="+investmentAmt , new String[]{"investmentSum"}, new org.hibernate.type.Type[]{StandardBasicTypes.INTEGER}),"amount"));
			criteria.setProjection(projectionList);
			criteria.setFirstResult(startLimit);
			criteria.setMaxResults(maxResult);
			return criteria.setResultTransformer(Transformers.aliasToBean(CompanyDto.class)).list();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int fetchTotalCompanyCounts() {
		Session session= sessionFactory.getCurrentSession();
		Criteria criteria=session.createCriteria(Company.class);
		criteria.setProjection(Projections.rowCount());
		return ((Long) criteria.uniqueResult()).intValue();
	}

	@Override
	public int fetchTotalCompanyCounts(UAMFilterDto uamFilter) {try{
		Session session= sessionFactory.getCurrentSession();
		Criteria criteria=null;
		
		if(null != uamFilter){			
			if(null != uamFilter.getGenderSearch() && !uamFilter.getGenderSearch().isEmpty()){
				criteria = session.createCriteria(Company.class);
				criteria.add(Restrictions.eq("gender", uamFilter.getGenderSearch().trim()));			
			}
			
			else if(null != uamFilter.getSeasonSearch() && !uamFilter.getSeasonSearch().isEmpty()){	
				criteria = session.createCriteria(Company.class);
				criteria.add(Restrictions.eq("season", Integer.parseInt(uamFilter.getSeasonSearch().trim())));
			}
			else if(null != uamFilter.getInvestorSearch() && !uamFilter.getInvestorSearch().isEmpty()){		
				criteria=session.createCriteria(CompanyInvestor.class);
				criteria.createAlias("investor", "investor");
				criteria.add(Restrictions.eq("investor.name", uamFilter.getInvestorSearch().trim()));
			}
			else if(null != uamFilter.getInvestmentAmt() && !uamFilter.getInvestmentAmt().isEmpty()){	
				criteria=session.createCriteria(CompanyInvestor.class);
				criteria.createAlias("company", "company");
				ProjectionList projectionList = Projections.projectionList();
				projectionList.add(Projections.property("company.id"), "id");
				projectionList.add(Projections.alias(Projections.sqlGroupProjection("sum(investment)  investmentSum ", "company_id having sum(investment) ="+uamFilter.getInvestmentAmt() , new String[]{"investmentSum"}, new org.hibernate.type.Type[]{StandardBasicTypes.INTEGER}),"amount"));
				criteria.setProjection(projectionList);
				return criteria.setResultTransformer(Transformers.aliasToBean(CompanyDto.class)).list().size();
			}
			else {
				return fetchTotalCompanyCounts();
			}
			
		}
		criteria.setProjection(Projections.rowCount());
		Long result = (Long) criteria.uniqueResult();
		return  result.intValue();
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return 0;
	}



}	




