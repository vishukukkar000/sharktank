package com.sharktank.dto;

import java.util.List;

public class CompanyDto {
	private Integer id;
	private Integer season;
	private Integer series;
	private String name;
	private boolean deal;
	private String industry;
	private String gender;
	private Integer amount;
	private Double equity;
	private Double valuation;
	private String notes;
	private Double investmentSum;
	private List<InvestmentDto> investmentDto;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getSeason() {
		return season;
	}
	public void setSeason(Integer season) {
		this.season = season;
	}
	public Integer getSeries() {
		return series;
	}
	public void setSeries(Integer series) {
		this.series = series;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isDeal() {
		return deal;
	}
	public void setDeal(boolean deal) {
		this.deal = deal;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public Double getEquity() {
		return equity;
	}
	public void setEquity(Double equity) {
		this.equity = equity;
	}
	public Double getValuation() {
		return valuation;
	}
	public void setValuation(Double valuation) {
		this.valuation = valuation;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public List<InvestmentDto> getInvestmentDto() {
		return investmentDto;
	}
	public void setInvestmentDto(List<InvestmentDto> investmentDto) {
		this.investmentDto = investmentDto;
	}
	@Override
	public String toString() {
		return "CompanyDto [id=" + id + ", season=" + season + ", series=" + series + ", name=" + name + ", deal="
				+ deal + ", industry=" + industry + ", gender=" + gender + ", amount=" + amount + ", equity=" + equity
				+ ", valuation=" + valuation + ", notes=" + notes + ", investmentDto=" + investmentDto + "]";
	}
	public Double getInvestmentSum() {
		return investmentSum;
	}
	public void setInvestmentSum(Double investmentSum) {
		this.investmentSum = investmentSum;
	}
	
}
