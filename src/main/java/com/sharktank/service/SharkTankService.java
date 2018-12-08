package com.sharktank.service;

import java.util.List;

import com.sharktank.dto.CompanyDto;
import com.sharktank.dto.UAMFilterDto;

public interface SharkTankService {

	List<CompanyDto> fetchCompanyList(UAMFilterDto object, int i, int j);

	int fetchTotalCompanyCounts();

	List<String> fetchDistinctInvestors();

	List<Integer> fetchDistinctSeasons();

	int fetchTotalCompanyCounts(UAMFilterDto uamFilter);

	CompanyDto fetchCompanyDetail(String company);
	
}
