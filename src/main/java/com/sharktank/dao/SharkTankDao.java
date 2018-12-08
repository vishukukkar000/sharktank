package com.sharktank.dao;

import java.util.List;

import com.sharktank.dto.CompanyDto;
import com.sharktank.dto.UAMFilterDto;
import com.sharktank.entity.Company;

public interface SharkTankDao {

	Company fetchCompanyDetails(Integer id);

	List<Company> UAMfilterInvestor(String investorSearch, int startLimit, int maxResult);

	List<Company> UAMfilterGender(String genderSearch, int startLimit, int maxResult);

	List<Company> UAMfilterSeason(String seasonSearch, int startLimit, int maxResult);

	List<Company> fetchCompany(int startLimit, int maxResult);

	List<String> fetchDistinctInvestors();

	List<Integer> fetchDistinctSeasons();

	List<CompanyDto> UAMfilterInvestmentAmt(String investmentAmt, int startLimit, int maxResult);

	int fetchTotalCompanyCounts();

	int fetchTotalCompanyCounts(UAMFilterDto uamFilter);
	
}
