/**
 * 
 */
package com.sharktank.constants;

/**
 * @author vishu
 *
 */
public enum LeadDocumentMasterEnum {
	RC(1,"RC Copy",2,"https://hdfc.cardekho.com/hdfc/images/rc_copy.png","https://hdfc.cardekho.com/hdfc/images/tick.png"),
	INSURANCE(2,"Insurance Copy",2,"https://hdfc.cardekho.com/hdfc/images/insurance_copy.png","https://hdfc.cardekho.com/hdfc/images/tick.png"),
	INVOICE(3,"Invoice Copy",2,"https://hdfc.cardekho.com/hdfc/images/invoice_copy.png","https://hdfc.cardekho.com/hdfc/images/tick.png"),
	CHEQUE(4,"CHEQUE",1,"https://hdfc.cardekho.com/hdfc/images/invoice_copy.png","https://hdfc.cardekho.com/hdfc/images/tick.png"),
	CUSTOM_TASK_DOC(5,"Custom Task Doc",1,"https://hdfc.cardekho.com/hdfc/images/invoice_copy.png","https://hdfc.cardekho.com/hdfc/images/tick.png");
	LeadDocumentMasterEnum(int id,String name,int count,String icon_pending,String icon_success){
		this.id=id;
		this.name=name;
		this.count=count;
		this.icon_pending= icon_pending;
		this.icon_success= icon_success;
	}

	private final int id;
	private final String name;
	private final int count;
	private String icon_success;
	private String icon_pending;
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public int getCount() {
		return count;
	}
	public String getIcon_success() {
		return icon_success;
	}
	public void setIcon_success(String icon_success) {
		this.icon_success = icon_success;
	}
	public String getIcon_pending() {
		return icon_pending;
	}
	public void setIcon_pending(String icon_pending) {
		this.icon_pending = icon_pending;
	}


}
