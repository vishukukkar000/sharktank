package com.sharktank.dto;

public class UAMFilterDto {
	private String investorSearch;
	private String investmentAmt;
	private String genderSearch;
	private String seasonSearch;
	public String getInvestorSearch() {
		return investorSearch;
	}
	public void setInvestorSearch(String investorSearch) {
		this.investorSearch = investorSearch;
	}
	public String getInvestmentAmt() {
		return investmentAmt;
	}
	public void setInvestmentAmt(String investmentAmt) {
		this.investmentAmt = investmentAmt;
	}
	public String getGenderSearch() {
		return genderSearch;
	}
	public void setGenderSearch(String genderSearch) {
		this.genderSearch = genderSearch;
	}
	public String getSeasonSearch() {
		return seasonSearch;
	}
	public void setSeasonSearch(String seasonSearch) {
		this.seasonSearch = seasonSearch;
	}
	@Override
	public String toString() {
		return "UAMFilterDto [investorSearch=" + investorSearch + ", investmentAmt=" + investmentAmt + ", genderSearch="
				+ genderSearch + ", seasonSearch=" + seasonSearch + "]";
	}

}
