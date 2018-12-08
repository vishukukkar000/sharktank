package com.sharktank.constants;

public enum LeadDocumentStatusEnum {
	PENDING(0),
	SUBMITTED(1),
	APPROVED(2),
	NOT_APPLICABLE(3),
	REJECTED(4),
	FORECLOSED(5),
	UNDER_REVIEW(6);
	
	private int val;
	LeadDocumentStatusEnum(int val){
		this.val=val;
	}
	public int getVal() {
		return val;
	}
	public void setVal(int val) {
		this.val = val;
	}
	
	

}
