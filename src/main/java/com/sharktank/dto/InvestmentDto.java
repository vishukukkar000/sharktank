package com.sharktank.dto;

public class InvestmentDto {
	private String investor;
	private double investment;
	public String getInvestor() {
		return investor;
	}
	public void setInvestor(String investor) {
		this.investor = investor;
	}
	public double getInvestment() {
		return investment;
	}
	public void setInvestment(double investment) {
		this.investment = investment;
	}
	@Override
	public String toString() {
		return "InvestmentDto [investor=" + investor + ", investment=" + investment + "]";
	}

}
