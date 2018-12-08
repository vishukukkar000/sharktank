package com.sharktank.constants;

import java.util.Collection;
import java.util.regex.Pattern;

public class HDFCConstants {

	public static final String COMMA = ",";
	public static final String BASE_PATH="basepath";
	public static final String HDFC_RESOURCE_PROPERTIES = "hdfcResource";
	public static final CharSequence DOT = ".";
	public static final String SPACE = " ";
	public static final String BLANK = "";
	public static final String LAC = "Lac";
	public static final String ONE = "1";
	public static final String HTML_CONTENT_TYPE_TEXT_JAVASCRIPT = "text/javascript";
	public static final String CHECK_NUMERIC_REG_EXP = "^[-+]?[0-9]*\\.?[0-9]+$";
	public static final String CHAR_SET_ALL_NON_INT = "[^0-9]";
	public static final int ZERO = 0;
	public static final String YOU_TUBE_IMAGE_URL = "http://i2.ytimg.com/vi/YouTubeVideoId/default.jpg";
	public static final String YOU_TUBE_VIDEO_ID= "YouTubeVideoId";
	public static final String WWW = "www";
	public static String HTTP = "http:";
	public static final String HUNDRED = "100";
	public static final String CR = "Cr";
	//public static final String BASE_URL = "https://www.cardekho.com/getIPhoneFeedsDispatchAction.do";
	public static final String BASE_URL = "https://www.cardekho.com/getIPhoneFeedsDispatchAction.do";
	public static final String QUESTION_MARK = "?";
	public static final String BITLY_LINK_ACESS_TOKEN = "1812742b79ecef9dd5610f181b7028fc258c33ff";
	public static final String AMPERSAND = "&";
	
//	public static final String BUYER_SELLER_API = "http://testing.cardekho.com:8085/mobicar/usedcardetails/fetchSellerDetails/usedcarid/";
	public static final String BUYER_SELLER_API = "https://www.cardekho.com/usedcardetails/fetchSellerDetails/usedcarid/";
	public static final String POST = "POST";
	public static final String X_USER_AGENT = "X-User-Agent";

	public static final String DOLLAR = "$";

	public static final String Q_PARAM = "q=";

	//public static final String EID_PARAM = "utm_source";

	public static final String P_PARAM = "p=";

	public static final String APOSTROPHE = "'";

	public static final String APOSTROPHE_COLON = "&apos;";

	public static final String AMPERSAND_COLON = "&amp;";

	public static final String NEW_LINE = "\n";

	public static final String UNDER_SCORE = "_";

	public static final String PLUS = "+";

	public static final String EXCLAMATION_MARK = "!";

	public static final String CAR_FINANCE_URL = "/car-finance";

	public static final String[] NOT_ALLOWED_APIS_FOR_CARDEKHO = {
		"uploadUsedCar",
		"uploadFreeListingUsedCar",
		"updateRightPriceTagInUsedCar",
		"updateAppDownloadCount",
		"makeUsedCarPremium",
		"saveEditedUsedCarDetail",
		"saveFeedback",
		"saveManageInventoryFeedsData",
		"saveChatWithExpertData"
	};
	public static final String COMPANY = "company";
	public static final String QUESTION = "Question";
	public static final String ANSWER = "Answer";
	public static final String FAQ = "FAQ";
	public static final String LEAD_ID = "leadid";
	public static final String COMPANY_NAME = "company_name";
	public static String NULL = "Null";
	public static final String CONTENT_TYPE_PDF = "application/pdf";
	public static final String HYFUN = "-";
	public static final String COMPARE_URL_AND="-and-";
	public static final String PDF = "pdf";
	public static final String ENGINE_FOUND_NULL_ON_ONROADPRICE_FOR_ = "Engine Found null on OnRoadPrice for ";
	public static final String SMTP = "smtp";
	public static final String JAIPUR = "Jaipur";
	public static final String REGISTRATIONCITY = "registrationcity";
	public static final String PASSWORDSTATUS = "passwordStatus";
	public static final String PAN = "pan";
	public static final String CAR_LOADER_SERVICE_INITIALIZATION = "Car Loader Service initialization";
	public static final String ROI_MINVALUE = "ROI minvalue";
	public static final String EMI_MAXVALUE = "emi maxvalue";
	public static final String VARIANTLIST = "variantList";
	public static final String CONTEXT_LISTENER_CAR_INITIALIZED = "Context Listener Car Initialized";
	public static final String OFFER = "offer";
	public static final String ISTOLOGHTTPREQUEST = "istologhttprequest";
	public static final String DATA = "data";
	public static final String LIFETIMETAX = "lifetimetax";
	public static final String GZIP = "gzip";
	public static final String FAILURE = "failure";
	public static final String DISCOUNTOFFER = "discountOffer";
	public static final String DEPRECATION = "deprecation";
	public static final String _IN_ = " in ";
	public static final String SAVEFEEDBACK = "saveFeedback";
	public static final String GETCARVARIANTDETAILBYCARMODELNAME = "getCarVariantDetailByCarModelName";
	public static final String LONGURL = "longUrl";
	public static final String KILOMETERS = "kilometers";
	public static final String WRONG_STRING_FOUND_OF_ = "Wrong string found of ";
	public static final String NUMBERFORMATEXCEPTION_FOR_STRING_ = "NumberFormatException for String ";
	public static final String MODEL = "model";
	public static final String CAMPAIGNSERVICE = "campaignService";
	public static final String BRAND = "brand";
	public static final String VARIANTTYPE = "variantType";
	public static final String MONTHS = "months";
	public static final String USERID = "userId";	
	public static final String USERNAME = "username";
	public static final String DESIGNATION = "designation";
	public static final String REPORTING_MANAGER = "reporting_manager";
	public static final String STAFF_TYPE = "staff_type";
	public static final String E_CODE = "e_code";
	public static final String LOCATION = "location";
	public static final String HUB = "hub";
	public static final String STATE = "state";
	public static final String REGION = "region";
	public static final String ASM = "asm";
	public static final String RSM = "rsm";
	public static final String ZSM = "zsm";
	public static final String CONTACT_DETAILS = "contact_details";
	public static final String SUP_CONTACT_DETAILS = "sup_contact_details";
	public static final String ANDRIOD_DEVICE = "andriod_device";
	public static final String ANDRIOD_VERSION = "andriod_version";	
	public static final String GET = "GET";
	public static final String MODELNAME = "ModelName";
	public static final String ON_ROAD_PRICE = "On Road Price";
	public static final String VARIANTNAME = "variantname";
	public static final String OFFERLIST = "offerList";
	public static final String IPHONE = "iPhone";
	public static final String IS_CALL_BACK_FROM_DEALER = "is call back from dealer";
	public static final String _FOR_BEST_CAR_LOAN_OFFERS_CONTACT_HDFC_BANK = " For best Car Loan offers contact HDFC Bank";
	public static final String COLOR = "color";
	public static final String QUALIFICATION = "qualification";
	public static final String EXCHANGECARVALUE = "exchangecarvalue";
	public static final String CITY = "city";
	public static final String ERROR_OCCURED_IN_METHOD_ADDUSERTRACKINGINFORMATION = "error occured in method addUserTrackingInformation";
	public static final String DOB = "dob";
	public static final String ERROR_WHILE_POSTING_DATA_TO_URL_ = "Error while posting data to Url ";
	public static final String N = "n";
	public static final String SUCCESS = "success";
	public static final String Y = "y";
	public static final String BROCHURE = "brochure";
	public static final String MOBILENO = "mobileno";
	public static final String CARDETAILS = "cardetails";
	public static final String NAME = "NAME";
	public static final String FILENAME = "fileName";
	public static final String RAJA_PARK = "raja park";
	public static final String OFFICIALDETAILSMODEL = "officialDetailsModel";
	public static final String VARIANT = "VARIANT";
	public static final String UPDATERIGHTPRICETAGINUSEDCAR = "updateRightPriceTagInUsedCar";
	public static final String EXCEPTION_IN_CALCULATING_ONROADPRICE_OF_ = "Exception in calculating onroadprice of ";
	public static final String GETBROCHURESFROMMODELNAME = "getBrochuresFromModelName";
	public static final String UPDATEAPPDOWNLOADCOUNT = "updateAppDownloadCount";
	public static final String NUMBER_FORMATE_EXEPTION_IN_ON_ROAD_PRICE_FOR_ = "Number Formate Exeption in On Road Price for ";
	public static final String MOBILE = "mobile";
	public static final String IPHONEFEEDSSERVICE = "iphonefeedsService";
	public static final String CARMODELNAME = "carmodelname";
	public static final String VARIENT = "varient";
	//public static final String _ = " ";
	public static final String HDFCRESOURCE = "hdfcResource";
	public static final String TXT = "txt";
	public static final String AUTHTOKEN = "authToken";
	public static final String SEX = "sex";
	public static final String COMPANYLIST = "companyList";
	public static final String TOTALBROCHURECOUNT = "totalBrochureCount";
	public static final String ENGINE_FOUND_NULL_ON_ONROADPRICE_FOR_HIMACHAL_PRADESH_OF__ = "Engine found null on OnRoadPrice for Himachal Pradesh of  ";
	public static final String YOUTUBEVIDEOID = "YouTubeVideoId";
	public static final String RED = "Red";
	public static final String RESIDENTIALDETAILS = "residentialDetails";
	public static final String MESSAGE = "message";
	public static final String AUTHENTICATEKEY = "authenticateKey";
	public static final String BROCHUREITEMLIST = "brochureItemList";
	public static final String MALFORMED_URL_EXCEPTION_OCCUR_HAS_OCCURRED_DURING_PROCESSING_OF_ = "malformed URL Exception occur has occurred during processing of ";
	public static final String COULD_NOT_ADD_COMPLETE_APP_DETAILS = "could not add complete app details";
	public static final String PERSONALDETAILS = "personalDetails";
	public static final String ERROR_OCCURED = "Error Occured";
	public static final String ORP = "orp";
	public static final String LOANPERIOD_MAXVALUE = "loanperiod maxvalue";
	public static final String CUSTOMER_COMPLETE_APP_DETAILS = "Customer complete App Details";
	public static final String EXPECTEDPRICE = "expectedprice";
	public static final String CARVARIANTID = "carVariantId";
	public static final String SAVEEDITEDUSEDCARDETAIL = "saveEditedUsedCarDetail";
	public static final String MODELYEAR = "modelyear";
	public static final String CARNAME = "CarName";
	public static final String PROCESSING_FEES = "Processing Fees";
	public static final String TENURE = "Tenure";
	public static final String INDIVIDUAL = "Individual";
	public static final String CARVARIANTSLIST = "carVariantsList";
	public static final String REGISTRATIONNO = "registrationno";
	public static final String NETVALUE = "netValue";
	public static final String FILEPATH = "filepath";
	public static final String EMI = "emi";
	public static final String SESSIONSTATUS = "sessionstatus";
	public static final String FUEL_OBJECT_NOT_FOUND_FOR_ = "Fuel object not found for ";
	public static final String ONROADPRICE = "OnRoadprice";
	public static final String STATUS = "status";
	public static final String ROI_MAXVALUE = "ROI maxvalue";
	public static final String EMI_MINVALUE = "emi minvalue";
	public static final String BROCHURE_NOT_AVAILABLE_FOR_GIVEN_MODEL = "brochure not available for given model";
	public static final String LEADID = "leadid";
	public static final String SAVEMANAGEINVENTORYFEEDSDATA = "saveManageInventoryFeedsData";
	public static final String SPECIFICATION_FOUND_NULL_ON_ONROADPRICE_FOR_ = "Specification Found null on OnRoadPrice for ";
	public static final String UPLOADFREELISTINGUSEDCAR = "uploadFreeListingUsedCar";
	public static final String FIRSTNAME = "firstname";
	public static final String TOKEN = "token";
	public static final String ERROR_OCCURED_ = "Error Occured ";
	public static final String OEMNAME = "oemName";
	public static final String TRUE = "true";
	public static final String EXCHANGEVALUE = "exchangevalue";
	public static final String VISHNU = "vishnu";
	public static final String NOOFOWNERS = "noofowners";
	public static final String BASEPATH = "basepath";
	public static final String LOANPERIOD_MINVALUE = "loanperiod minvalue";
	public static final String PINCODE = "pincode";
	public static final String BROCHURESET = "brochureSet";
	public static final String BGCOLOR = "bgcolor";
	public static final String MAKEUSEDCARPREMIUM = "makeUsedCarPremium";
	public static final String CITYNAME = "cityname";
	public static final String MODELMONTH = "modelmonth";
	public static final String PARAMETER = "parameter";
	public static final String GSON = "Gson";
	public static final String URL = "url";
	public static final String DOWNPAYMENT = "downPayment";
	public static final String API_NOT_ALLOWED = "Api not allowed";
	public static final String OFFERDETAILS = "offerDetails";
	public static final String DELHI = "Delhi";
	public static final String EMAIL = "email";
	public static final String ROI_DEFAULT = "ROI default";
	public static final String EMAILID = "emailid";
	public static final String AREA = "area";
	public static final String FALSE = "false";
	public static final String SAVECHATWITHEXPERTDATA = "saveChatWithExpertData";
	public static final String NOT_VALID_FEEDS_REQUEST_FROM_IP_ = "Not Valid Feeds Request from ip ";
	public static final String UPLOADUSEDCAR = "uploadUsedCar";
	public static final String COMPLETEAPP = "completeapp";
	public static final String ERROR_WHILE_PUTTING_TOKEN_IN_DATA = "error while putting token in data";
	public static final String CARLOADERSERVICE = "carLoaderService";
	public static final String ROI = "ROI";
	public static final String THERE_IS_AN_ERROR_IN_THE_UNDERLYING_PROTOCOLDURING_PROCESSING_OF_ = "there is an error in the underlying protocolduring processing of ";
	public static final String LOANAMOUNT = "loanAmount";
	public static final String FORMAT = "format";
	public static final String broschureMessage = " Thank you for contacting us. You can download your brochure from %BITLY_URL%. For best Car Loan offers contact HDFC Bank Ltd.";
	public static final String BITLY_URL_PLACE_HOLDER = "BITLY_URL";
	public static final String PROCESSING_FEES_CLASS1 = "processing.fees.class1";
	public static final String PROCESSING_FEES_CLASS2 = "processing.fees.class2";
	public static final String PROCESSING_FEES_CLASS3 = "processing.fees.class3";
	public static final String PROCESSING_FEES_CLASS4 = "processing.fees.class4";
	public static final String PROCESSING_FEES_CLASS5 = "processing.fees.class5";
	public static final String ROI_MIN_VALUE = "ROI.minvalue";
	public static final String ROI_MAX_VALUE = "ROI.maxvalue";
	public static final String ROI_DEFAULT_VALUE = "ROI.default";
	public static final String LOAN_PERIOD_MAX_VALUE = "loanperiod.maxvalue";
	public static final String LOAN_PERIOD_MIN_VALUE = "loanperiod.minvalue";
	public static final String RATE = "rate";
	public static final String HDFC_DESCRIPTION = "offer_description";
	public static final String CATEGORY_NAME = "category_name";
	public static final String CATEGORY_ID = "category_Id";
	public static final String SEGMENT = "segment";
	public static final String TIER_NAME = "tier_name";
	public static final String TIER_ID = "tier_Id";
	public static final String MAX_LTV = "max_ltv";
	public static final String MAX_LTV2 = "max_ltv2";
	public static final String LOAN_TENURE_IN_MONTHS = "loan_tenure_in_months";
	public static final String LOAN_TENURE_2_IN_MONTHS = "loan_tenure2_in_months";
	public static final String PROCESSINGFEES = "processing_fees";
	public static final String FORE_CLOSURE_CHARGES = "fore_closure_charges";
	public static final String RATE_OF_INTEREST = "rate_of_interest";
	public static final String DEFAULT_PROCESSING_FEES = "default.processing.fees";
	public static final String BITLY_API_USER = "bitly.api.user";
	public static final String BITLY_API_KEY = "bitly.api.key";
	public static final String BROCHURE_EMAIL_SUBJECT = "HDFC Vahan Gyan: Cars Comparision";
	public static final String COMPANY_CODE = "company_code";
	public static final String EMAIL_CHECK_PATTREN = "^[a-zA-Z0-9]{1,}[a-zA-Z0-9._-]{0,}@[a-zA-Z0-9]{2,}[a-zA-Z0-9.-]{0,}\\.[a-zA-Z]{2,5}$";
	public static final String DOT_STRING = ".";
	public static final String INVALID_EMAIL_ERROR_MESSAGE = "Email-Id entered is not Proper";
	public static final String INVALID_MOBILE_NUMBER_ERROR_MESSAGE = "Mobile Number entered is not Proper";
	public static final String PASSWORD = "password";
	public static final String INVALID_DOT_BEFORE_AT_SIGN_IN_EMAIL_ID = ".@";
	public static final String ERROR_COMPLETEAPP_LOAN_CRITERIA="error.completeApp.loan.criteria";
	public static final String ERROR_LOGIN_INCORRECT_PASSWORD ="error.login.incorrect.password";
	public static final String ERROR_LOGIN_UNREGISTERED_USER="error.login.unregistered.user";
	public static final String ERROR_COMPLETEAPP_EMAIL_INVALID="error.completeApp.email.invalid";
	public static final String ERROR_COMPLETEAPP_MOBILE_INVALID="error.completeApp.mobile.invalid";
	public static final String ERROR_COMPLETEAPP_PERSONAL_DETAILS_INVALID="error.completeApp.personal.details.invalid";
	public static final String OFFER_UNAVAILABLE = "offer.unavailable";
	public static final String OFFER_AVAILABLE = "offer.available";
	public static final String OEM = "oem_name";
	public static final String VARIANT_NAME = "car_variant_id";
	public static final String MODEL_NAME = "car_model_name";
	public static final String DISPLAY_CAR_NAME = "display_car_name";
	public static final String PERCENTAGE = "%";
	public static final String START_LIMIT = "start_limit";
	public static final String END_LIMIT = "end_limit";
	public static final String DISPLAY_CAR_VARIANTID = "display_car_variant_id";
	public static final String IMAGE_URL = "image_url";
	public static final String CAR_MODEL_RATING = "model_rating";
	public static final int ONE_INT = 1;
	public static final int NEG_ONE_INT = -1;
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_FOR_TWO_CARS = "compare.car.brochure.message.for.two.cars";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_FOR_THREE_CARS = "compare.car.brochure.message.for.three.cars";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_FOR_FOUR_CARS = "compare.car.brochure.message.for.four.cars";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_WITHOUT_CONTACT_DETAILS_FOR_TWO_CARS = "compare.car.brochure.message.without.contactDetails.for.two.cars";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_WITHOUT_CONTACT_DETAILS_FOR_THREE_CARS = "compare.car.brochure.message.without.contactDetails.for.three.cars";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_WITHOUT_CONTACT_DETAILS_FOR_FOUR_CARS = "compare.car.brochure.message.without.contactDetails.for.four.cars";
	public static final String COMPARE_CAR_BROCHURE_SMS_FOR_TWO_CARS = "compare.car.brochure.sms.for.two.cars";
	public static final String COMPARE_CAR_BROCHURE_SMS_FOR_THREE_CARS = "compare.car.brochure.sms.for.three.cars";
	public static final String COMPARE_CAR_BROCHURE_SMS_FOR_FOUR_CARS = "compare.car.brochure.sms.for.four.cars";
	public static final String EMPLOYEE_ID = "emp_id";
	public static final String EMPLOYEE_EMAIL_ID = "email_id";
	public static final String PASSWORD_SENT_YOUR_EMAIL = "password.sent.your.email";
	public static final String INVALID_REGISTERED_USER = "invalid.registered.user";
	public static final String INVALID_REGISTERED_USER_MOBILE = "invalid.registered.user.mobile";
	public static final String INVALID_REGISTERED_USER_EMAIL = "invalid.registered.user.email";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_FOR_ONE_CARS = "compare.car.brochure.message.for.one.car";
	public static final String COMPARE_CAR_BROCHURE_MESSAGE_WITHOUT_CONTACT_DETAILS_FOR_ONE_CARS = "compare.car.brochure.message.without.contactDetails.for.one.car";
	public static final String COMPARE_CAR_BROCHURE_SMS_FOR_ONE_CARS = "compare.car.brochure.sms.for.one.car";
	public static final String NOT_AVAILABLE = "NA";
	public static final String HDFC_CARDEKHO_BASEURL = "https://www.cardekho.com/";
	public static final String CARDEKHO_AJAXCALLACTION = "ajaxCallAction.do";
	public static final String CARDEKHO_BASEURL = "https://www.cardekho.com/";
	public static final String SEARCH_TYPE = "searchType";
	public static final String RUPEES_SIGN = "Rs";
	public static final String GAADI_API_FOR_CAR_VALUATION = "http://hdfcbankpreowned.gaadi.com/themes/hdfc_used_car/ajax/api_hdfc_detail.php?";
	public static final String FILE_HEADER_CAR_SEARCH = "zsm,rsm,asm,username,e_code,location,region,state,created_on,oemname,carmodelname,carvariantname,city,on_road_price,custmer_mail,employee_mail,custmer_no,custmer_name";
	public static final String CAR_SEARCH_FILE_NAME = "Car_Search_Detail_Report.csv";
	public static final String BROCHURE_DOWNLOAD_FILE_NAME = "Brochure_Download_Detail_Report.csv";
	public static final String FILE_HEADER_BROUCHRE_DOWNLOAD = "zsm,rsm,asm,username,user_id,send_mode,created_on,generated_url";
	public static final String FILE_HEADER_LOGIN_COUNT = "zsm,rsm,asm,username,e_code,location,region,state,timestamp,andriod_version,login_count";
	public static final String LOGIN_COUNT_FILE_NAME = "Login_Count_Detail_Report.csv";
	public static final String INSTALL_COUNT_FILE_NAME = "Install_Count_Detail_Report.csv";
	public static final String FILE_HEADER_INSTALL_COUNT = "zsm,rsm,asm,username,e_code,location,region,state,timestamp,andriod_version,instal_count";
	public static final String APIHITS_FILE_NAME = "APIHits_Detail_Report.csv";
	public static final String FILE_HEADER_APIHITS = "zsm,rsm,asm,username,e_code,location,region,state,timestamp,andriod_version,typeofevent";
	public static final String NO_PROCESSING_FEES = "0";
	public static final String INVALID_RESPONSE_FROM_GAADI = "null";
	public static final String HDFC_NOT_AVAILABLE = "Not Available";
	public static final String TERMS_ANDS_CONDITION = "*T&C's Apply";
	public static final String MINIUM_LOAN_AMOUNT_VALUE = "min.loan.amount";
	public static final String DEFAULT_MAX_LTV = "default.max.ltv";
	public static final String DEFAULT_MIN_LTV = "default.min.ltv";
	public static final String SENDER_EMAIL_ID = "sender.username";
	public static final String SENDER_PASSWORD = "sender.password";
	public static final String GAADI_OFFER_RANGE3_TENURE = "gaadi.offer.range3.tenure";
	public static final String GAADI_OFFER_RANGE2_TENURE = "gaadi.offer.range2.tenure";
	public static final String GAADI_OFFER_RANGE1_TENURE = "gaadi.offer.range1.tenure";
	public static final String GAADI_OFFER_NOT_AVAILABLE = "1";
	public static final String FINANCE_GADDI_COM_CALCULATE_LOAN_OFFER_URL = "finance.gaadi.com.calculate.loan.offer.url";
	public static final String GAADI_OFFER_URL = "gaadi.offer.url";
	public static final String SELF_EMPLOYED_BUSINESS = "For Self Employed Business";
	public static final String SELF_EMPLOYED_PROFESSIONAL = "For Self Employed Professional";
	public static final String OFFER_ROI_LIMIT = "offer.roi.limit";
	public static final String OFFER_TENURE_LIMIT = "offer.tenure.limit";
	public static final String OFFER_LOAN_LIMIT = "offer.loan.limit";
	public static final String URL_GET_IPHONE_FEEDS_DISPATCH_ACTION = "/getIPhoneFeedsDispatchAction.do";
	public static final String CRONE_SCHEDULER_CONFIGRATION_FILE = "";
	public static final String HDFC_REPORT_CRONSCHEDULE_TRIGGER_NAME = "hdfc.cron.trigger.name";
	public static final String HDFC_REPORT_CRON_EXPRESSION = "hdfc.cron.expression";
	public static final String CRON_GROUP = "cron.group";
	public static final String HDFC_REPORT_MAIL_RECIPIANTS = "hdfc.report.mail.recipiants";
	public static final String VAHAN_GYAN_GMAIL_DOT_COM = "vahan_gyan@gmail.com";
	public static final String HDFC_REPORT_SUBJECT = "Hdfc Vahan Gyaan usage Report";
	public static final String HDFC_REPORT_MESSAGE = "Daily activity on HDFC app <br/><br/> Total car search count : @TOTALCARSEARCH_COUNT <br/> Unique car search count : @UNIQUECARSEARCH_COUNT";

	public static final String MOBILE_NUMBER = "mobile_number";
	public static final String GAADI_SEND_SMS_API = "gaadi.send.sms.api";
	public static final String HDFC_VAHAN_GYAN_SOURCE = "HDFC Vahan Gyan";
	public static final String PASSWORD_SENT_YOUR_SMS = "password.sent.sms.msg";
	public static final String SMS_SEND_FORGOT_PASSWORD = "sms.send.forget.password";
	public static final String DEAR = "Dear ";
	public static final String FORGOT_PASSWORD_MESSAGE_IN_MAIL = "forgot.password.mail.msg";
	public static final String GAADI_API_RESPONSE_SUCCESS = "1";
	public static final String LOGIN_CREDENTIAL = "login.credential";
	public static final String FORGOT_PASSWORD_FAILED = "forgot.password.failed";
	public static final String GAADI_API_FOR_MAIL_SENDING = "http://financedemo.gaadi.com/lms/api/send_mail.php";
	public static final String GAADI_API_KEY_FOR_MAIL_SENDING = "gaadi.api.for.mail.sending";
	public static final String HDFC_VAHAN_GYAN = "hdfc.vahan.gyan";
	public static final String SENDER_MAIL_NAME = "sender.mail.name";
	public static final String VARIANT_TYPE = "variant.type";
	public static final String GUPSHUP_SMS_USER_NAME = "gupshup.username";
	public static final String GUPSHUP_SMS_PASSWORD = "gupshup.password";
	public static final String ENTERPRISE_PASSWORD_GUPSHUP_URL = "http://enterprise.smsgupshup.com/GatewayAPI/rest?";
	public static final String SEND_SMS_URL = "send.sms.url";
	public static final String SMS_URL_NOT_AVAILABLE = "NotAvailable";
	public static final String SEND_MESSAGE_METHOD_NAME = "SendMessage";
	public static final String TEXT = "TEXT";
	public static final String AUTH_SCHEME_PLAIN = "plain";
	public static final String VERSION = "1.1";
	public static final String SENDER_ID = "VahanG";
	public static final String SMS_FORMAT = "text";
	public static final String OVERRIDE_DND = "True";
	public static final String SEND_TO = "send_to";
	public static final String MESSAGE_STRING = "msg";
	public static final String SEMD_SMS_URL = "sendsmsurl";
	public static final String SMS = "SMS";
	public static final String COMPLETE_APP = "Complete App";
	public static final String FORGET_PASSWORD = "Forget Password";
	public static final String NEW_DELHI = "New Delhi";
	public static final String PRIVILEGED_USER = "privileged_user";
	public static final String YES = "YES";
	public static final String SEARCH_DETAIL_COUNT_FILE_NAME = "serch_detail_count.xls";
	public static final double DOUBLE_ZERO = 0.0;
	public static final String ENCRYPTED = "encrypted";
	public static String TMP_FILE_PATH = "/tmp/";
	public static String l2EMAILFLAG="l2.email.send";
	public static String l2INTERNALTESTING_FLAG="l2.internal.testing.flag";
	
	
	public static final String DEVICEID = "device_id";
	public static final String GCMID = "gcm_id";
	public static final String REQUEST_IS_NOT_PROPER = "request is not proper";
	public static final String ERROR_AUTHENTICATE_KEY="You Are Not Authenticate User";
	public static final String GCM_USER_EMAIL_ID = "user_email_id";
	public static final String NOTIFICATION_MESSAGE = "notificationMessage";
	public static final String EVENT_TAG_NAME = "event_tag_name";
	public static final String SOURCE = "source";
	public static final String USER_MOBILE_NUMBER = "user_mobile_number";
	public static final String PHONE_MODEL = "phone_model";
	public static final String ANDROID_VERSION = "android_ver";
	public static final String APP_VERSION = "app_version";
	public static final String GOOGLE_SERVER_KEY_OF_VAHAN_GYAN = "google.server.key";
	public static final String SUCCESS_FAILURE_MAP = "SuccessFailureMap";
	public static final String WRONG_FILE_FORMAT_ALERT = "Please insert correct file format";
	public static final String PUSHWOOSH_SERVICE_BASE_URL = "https://cp.pushwoosh.com/json/1.3/";
	public static final String SUCCESSFULLY = "OK";
	public static final String CONTENT = "content";
	public static final String CAR_NEWS_ID = "news_id";
	public static final String GENERIC_EMAIL_ID = "genericemailid";
	public static final int FEEDBACK_INSERTION_SUCCESS=1;
	public static final int FEEDBACK_INSERTION_FAILURE=-1;
	public static final String SAVE_FEEDBACK_MESSAGE_SUCCESS_KEY="save.feedback.message.success";
	public static final String SAVE_FEEDBACK_MESSAGE_ERROR_KEY="save.feedback.message.error";
	public static final String THREAD_CONTROLLER = "threadcontroller";
	public static final String CRON_INITIALIZER = "cron.initializer";
	public static final String CRON_INITIALIZER_USER_INFORMATION = "cron.initializer.user.information";
	public static final String CRON_ENABLED = "1";
	public static final String FORGET_PASSWORD_AND_RECEIVE_PASSWORD_IN_REG_EMAI = "forget.password.and.receive.password.in.reg.email";
	public static final String HTML_FILE_NOT_FOUND = "html file not found :";
	public static final String NOT_ELIGIBLE_FOR_OFFERS = "0-1";
	public static final String ELIGIBLE_FOR_OFFERS = "3";
	public static final String TWO = "2";
	public static final String NOT_RETRIEVING_RANGE = "0";	
	public static final int APP_VERSION_SECURITY_CHECK_THRESHOLD = 103;
	public static final int APP_VERSION_SECURITY_CHECK_APPLIED = 104;
	public static final String GENERATE_TO_ALL = "generateToAll";
	public static final String GENERATE_NOTIFICATION_TO_ALL = "generateNotificationToAll";
	public static final String EVENT_MESSAGE = "eventResource";
	
	public static final String ASM_MAIL_ID = "asm_mailid";
	public static final String RSM_MAIL_ID = "rsm_mailid";
	public static final String ZSM_MAIL_ID = "zsm_mailid";
	public static final String AUTHENTICATION_TOKEN = "pushwoosh.auth.token";
	public static final String PUSHWOOSH_APPLICATION_CODE = "pushwoosh.application.code";
	public static final String VAHAN_GYAN_ANDROID = "vahan.gyan.android";
	public static final String BIKE_DEKHO_BASE_URL = "http://www.bikedekho.com/getIPhoneFeedsDispatchAction.do";
	public static final String CHECK_NOTIFICATION_PROCESS = "notification.process";
	public static final String ON_NOTIFICATION_BY_GCM_ID = "0";
	public static final String ON_NOTIFICATION_BY_PUSHWOOSH = "1";
	public static final String NO_OF_BADGE = "no_Of_Badge";
	public static final String UDID = "udID";
	public static final String IS_DELIVERD = "isdeliverd";
	public static final String LEAD_ID_CM = "lead_id";
	public static final String GCM_USER_ID = "user_Id";
	public static final String ISACTIVE = "isactive";
	public static final String AUTHENTICATE_KEY = "authenticateKey";
	public static final String FEEDS_AUTHENTICATE_KEY_VALUE = "14@89cardekho66feeds";
	public static final String USER_NAME = "UserName";
	public static final String EMAIL_ID = "EmailId";
	public static final String MOBILE_NO = "MobileNo";
	public static final String BUYING_TIME = "BuyingTime";
	public static final String LEADTYPE = "LeadType";
	public static final String VAHAN_GYAN_IPHONE = "vahan.gyan.iphone";
	public static final String EVENT_TYPE_ID = "event_type_id";
	public static final String EVENT_OBJECT_ID = "event_object_id";
	public static final String EVENT_DESCRIPTION = "event_description";
	public static final String MESSAGE_TITLE = "message_title";
	public static final String ANDROID_UNDERSCROE_VERSION = "android_version";
	public static final String APP_UNDERSCORE_VERSION = "app_version";
	public static final String PHONE_UNDERSCORE_MODEL = "phone_model";
	public static final String NOTIFICATIONMESSAGE = "notification_message";
	public static final String REQUEST_FORM = "requestFrom";
	public static final String URL_HEADER = "url_header";
	public static final String UTF_8 = "UTF-8";
	public static final String NOTIFICATION_MESSAGE_COMPLETE_APP = "notification.message.complete.app";
	public static final String GENERIC_MESSAGE = "GENERIC_MESSAGE";
	public static final String USERNAME_FOR_MESSAGE = "USERNAME";
	public static final String CONDITIONMODEL = "model";
	/**
	 * List of Possible Patterns to avoid Cross-site scripting attack.
	 */
	public static final Pattern[] PATTERNS_FOR_CROSS_SITE_SCRIPTING = new Pattern[] {
        // Script fragments
        Pattern.compile("<script>(.*?)</script>" , Pattern.CASE_INSENSITIVE) ,
        // src='...'
        Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'" , Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL) ,
        Pattern.compile("src[\r\n]*=[\r\n]*\\\"(.*?)\\\"" , Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL) ,
        // lonely script tags
        Pattern.compile("</script>" , Pattern.CASE_INSENSITIVE),
        Pattern.compile("<script(.*?)>" , Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL) ,
        // eval(...)
        Pattern.compile("eval\\((.*?)\\)" , Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL) ,
        // expression(...)
        Pattern.compile("expression\\((.*?)\\)" , Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL) ,
        // javascript:...
        Pattern.compile("javascript:" , Pattern.CASE_INSENSITIVE) ,
        // vbscript:...
        Pattern.compile("vbscript:", Pattern.CASE_INSENSITIVE),
        // onload(...)=...
        Pattern.compile("onload(.*?)=" , Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL) ,
        // Avoid anything between HTML comment tags
        Pattern.compile("<!--(.*?)-->" , Pattern.CASE_INSENSITIVE),
        // Avoid anything between JSP comment tags
        Pattern.compile("<%--(.*?)--%>" , Pattern.CASE_INSENSITIVE),
        // img fragments
        Pattern.compile("<img(.*?)>" , Pattern.CASE_INSENSITIVE),
        // body fragments
        Pattern.compile("<body(.*?)>" , Pattern.CASE_INSENSITIVE),
        // iframe fragments
        Pattern.compile("<iframe(.*?)>" , Pattern.CASE_INSENSITIVE),
        // input fragments
        Pattern.compile("<input(.*?)>" , Pattern.CASE_INSENSITIVE),
        // link fragments
        Pattern.compile("<link(.*?)>" , Pattern.CASE_INSENSITIVE),
        // table fragments
        Pattern.compile("<table(.*?)>" , Pattern.CASE_INSENSITIVE),
        // div fragments
        Pattern.compile("<div(.*?)>" , Pattern.CASE_INSENSITIVE),
        // object fragments
        Pattern.compile("<object(.*?)>" , Pattern.CASE_INSENSITIVE),
        // embed fragments
        Pattern.compile("<embed(.*?)>" , Pattern.CASE_INSENSITIVE),
        // td fragments
        Pattern.compile("<td(.*?)>" , Pattern.CASE_INSENSITIVE),
        // base fragments
        Pattern.compile("<base(.*?)>" , Pattern.CASE_INSENSITIVE),
        // meta fragments
        Pattern.compile("<meta(.*?)>" , Pattern.CASE_INSENSITIVE),
        // xss fragments
        Pattern.compile("<xss(.*?)>" , Pattern.CASE_INSENSITIVE),
        // img open fragments
        Pattern.compile("<img(.*?)" , Pattern.CASE_INSENSITIVE),
       // body open fragments
        Pattern.compile("<body(.*?)" , Pattern.CASE_INSENSITIVE),
        // iframe open fragments
        Pattern.compile("<iframe(.*?)" , Pattern.CASE_INSENSITIVE),
        // input open fragments
        Pattern.compile("<input(.*?)" , Pattern.CASE_INSENSITIVE),
        // link open fragments
        Pattern.compile("<link(.*?)" , Pattern.CASE_INSENSITIVE),
        // table open fragments
        Pattern.compile("<table(.*?)" , Pattern.CASE_INSENSITIVE),
        // div open fragments
        Pattern.compile("<div(.*?)" , Pattern.CASE_INSENSITIVE),
        // object open fragments
        Pattern.compile("<object(.*?)" , Pattern.CASE_INSENSITIVE),
        // embed open fragments
        Pattern.compile("<embed(.*?)" , Pattern.CASE_INSENSITIVE),
        // td open fragments
        Pattern.compile("<td(.*?)" , Pattern.CASE_INSENSITIVE),
        // base open fragments
        Pattern.compile("<base(.*?)" , Pattern.CASE_INSENSITIVE),
        // meta open fragments
        Pattern.compile("<meta(.*?)" , Pattern.CASE_INSENSITIVE),
        // anchor open fragments
        Pattern.compile("<(a|b|div|span|p|h|br|hr)(.*?)" , Pattern.CASE_INSENSITIVE),
        // xss open fragments
        Pattern.compile("<xss(.*?)" , Pattern.CASE_INSENSITIVE),
        // <any>
        Pattern.compile("<[a-z|A-Z|0-9|~!@#$%^&*]*>" , Pattern.CASE_INSENSITIVE),
        // Select 
        Pattern.compile("(.*?)select(.*?)" , Pattern.CASE_INSENSITIVE),
        // drop
        Pattern.compile("(.*?)drop(.*?)" , Pattern.CASE_INSENSITIVE),
        // insert
        Pattern.compile("(.*?)insert(.*?)" , Pattern.CASE_INSENSITIVE),
        // delete
        Pattern.compile("(.*?)delete(.*?)" , Pattern.CASE_INSENSITIVE),
        // http
        //Pattern.compile("(.*?)http(.*?)" , Pattern.CASE_INSENSITIVE),
        // html
        Pattern.compile("<html(.*?)" , Pattern.CASE_INSENSITIVE)
    };
	public static final String URL_GET_EVENTS_FEEDS_DISPATCH_ACTION = "/getEventFeedsDispatchAction.do";
	public static final String URL_GET_BIKE_FEEDS_DISPATCH_ACTION = "/getBikeFeedsDispatchAction.do";
	public static final String VEHICLE_TYPE = "vehicle_type";
	public static final String TILD_SIGN = "~";
	public static final String READ_RECEIPT = "READ_RECEIPT";
	public static final String MOBILENUM = "MOBILENUM";
	public static final String SUGGESTIONS_ARRAY = "suggestions_array";
	public static final String SEARCH_STRING = "search_string";
	public static final String WAP_URL = "wap_url";
	public static final String ACCEPT_URL = "accept_url";
	public static final String EVENT_TAG = "event_tag";
	public static final String APPOINTMENT_DATE = "appointment_date";
	public static final String APPOINTMENT_TIME = "appointment_time";
	public static final String ADDRESS = "address";
	public static final String PIN_CODE = "pin_code";
	public static final String APPLICANT_ID = "applicant_id";
	public static final String APPLICANT_NAME = "applicant_name";
	public static final String APPLICANT_MOBILE = "applicant_mobile";
	public static final String VEHICLE_MAKE = "vehicle_make";
	public static final String VEHICLE_MODEL = "vehicle_model";
	public static final String VEHICLE_VARIANT = "vehicle_variant";
	public static final String START_LMS_THREAD = "start.thread.lms.notification";
	public static final String ACKNOWLEDGEMENT_NOTIFICATION_MESSAGE = "acknowledgement.message";
	public static final String FOLLOWUP_NOTIFICATION_MESSAGE = "followup.message";
	public static final String ACCEPT = "Accept";
	public static final String REMINDER = "REMINDER";
	public static final String UPDATE = "UPDATE";
	public static final String USER_NAME_MESSAGE = "USER_NAME";
	public static final String ACKNOWLEDGEMENT_TYPE = "ACKNOWLEDGEMENT_TYPE";
	public static final String DATE_TIME = "DATE_AND_TIME";
	public static final String APPLICANT_ID_MESSAGE = "APPLICANT_ID";
	public static final String ACKNOWLEDGEMENT = "ACKNOWLEDGEMENT";
	public static final String ESCALATION_ACKNOWLEDGEMENT = "ESCALATION_ACKNOWLEDGEMENT";
	public static final String FOLLOW_UP = "FOLLOW_UP";
	public static final String ESCALATION_FOR_FOLLOW_UP = "ESCALATION_FOR_FOLLOW_UP";
	public static final String APPOINTMENT_ID = "appointment_id";
	public static final String ERROR_CODE = "error_code";
	//Error Codes
	public static final String ERROR_CODE_FOR_APPOINTMENT_ID_ALREADY_EXISTED = "100";
	public static final String ERROR_CODE_FOR_MISSING_EMP_CODE = "101";
	public static final String ERROR_CODE_FOR_MISSING_WAP_URL = "102";
	public static final String ERROR_CODE_FOR_MISSING_EVENT_TAG_NAME = "103";
	public static final String ERROR_CODE_FOR_MISSING_APPOINTMENT_ID = "104";
	public static final String ERROR_CODE_FOR_MISSING_APPLICANT_NAME = "105";
	public static final String ERROR_CODE_FOR_IMPROPER_EVENT_TAG_NAME = "106";
	public static final String ERROR_CODE_FOR_IMPROPER_APPLICANT_MOBILE = "107";
	//Error Messages
	public static final String ERROR_MESSAGE_FOR_APPOINTMENT_ID_ALREADY_EXISTED = "This Appointment Id is already Assign to ";
	public static final String ERROR_MESSAGE_FOR_MISSING_EMP_CODE = "Employee Code is Missing.";
	public static final String ERROR_MESSAGE_FOR_MISSING_WAP_URL = "Wap url is Missing.";
	public static final String ERROR_MESSAGE_FOR_MISSING_EVENT_TAG_NAME = "Event Tag Name is Missing.";
	public static final String ERROR_MESSAGE_FOR_MISSING_APPOINTMENT_ID = "Appointment Id is Missing.";
	public static final String ERROR_MESSAGE_FOR_MISSING_APPLICANT_NAME = "Applicant Name is Missing.";
	public static final String ERROR_MESSAGE_FOR_IMPROPER_EVENT_TAG_NAME = "Improper Event Tag Name";
	public static final String ERROR_MESSAGE_FOR_MISSING_APPLICANT_MOBILE = "Applicant Mobile Number is Missing.";
	public static final String ASSIGN = "Assign";
	public static final String[] LMS_EVENT_TAG_NAMES = {
		"ACKNOWLEDGEMENT",
		"ESCALATION_ACKNOWLEDGEMENT",
		"FOLLOW_UP",
		"ESCALATION_FOR_FOLLOW_UP",
	};
	public static final String FORCEFULLY_NOTIFICATION_DISPLAY = "fd";
	public static final String ID = "id";
	public static final String LMS_NOTIFICATION_MESSAGE = "msg";
	public static final String LMS_EVENT_TAG_NAME = "e";
	public static final String LMS_ITEMS_ARRAY = "lms";
	public static final String ACTIONONE = "act1";
	public static final String SEND_DATE = "send_date";
	public static final String CURRENT_DATE = "now";
	public static final String LMS_IMAGE_URL = "img_url";
	public static final String LMS_NOTIFICATION_TITLE = "title";
	public static final String WAP_URL_MAIN_TYPE = "main_type";
	public static final String WAP_URL_MAIN_event = "main_event";
	public static final String LMS_ACT1_ACCEPT_URL = "act1_event";
	public static final String LMS_ACT1_TYPE = "act1_type";
	public static final String COMPARE_CAR = "comparecar";
	public static final String FOLLOWUP_TYPE = "FOLLOWUP_TYPE";
	public static final String HDFC = "hdfc";
	public static final String SLASH = "/";

	public static final String HDFC_APP_NAME = "hdfc";
	public static final String TOMCAT_WEBAPPS_DIRECTORY_PATH = "tomcat.webapps.directory.path";
	public static final String CAR_VARIANTID = "CarVariantId";
	public static final String OEM_ID = "oem";
	public static final String CAR_NAMEID = "CarName";
	public static final String OEM_USEDID = "oemName";
	public static final String BRAND_USEDID = "Brand";
	public static final String CAR_BRANCH_DAP_URL = "car.branch.dap.url";
	public static final String CAR_MOBILE_CRM_URL = "car.mobile.crm.url";
	public static final String INDIAN_TIME_ZONE = "Asia/Calcutta";
	public static final String NEXT_APPOINTMENT_DATE = "next_appointment_date";
	public static final String NEXT_APPOINTMENT_TIME = "next_appointment_time";
	public static final String CARVARIANTNAME = "carvariantname";
	public static final String ACTION_ONE = "action1";
	public static final String ACTION_FOUR = "action4";
	public static final String ACTION_THREE = "action3";
	public static final String ACTION_TWO = "action2";
	public static final String ACTION_ASSIGN_ONE = "action_assign1";
	public static final String ACTION_ASSIGN_FOUR = "action_assign4";
	public static final String ACTION_ASSIGN_THREE = "action_assign3";
	public static final String ACTION_ASSIGN_TWO = "action_assign2";
	public static final String ERROR_CODE_FOR_APPOINTMENT_ID_ALREADY_EXIST_IN_DATABASE = "This Appointment Id is already existed.";
	public static final String ADD_QUICK_LEAD_SECTION = "addQuickLeadSection";
	public static final String FINANCE_KNOWLEDGE_BANK_SECTION = "financeKnowledgeBankSection";
	public static final String ON_ROAD_PRICE_SECTION = "onRoadPriceSection";
	public static final String LOAN_MAXIMIZER_SECTION = "loanMaximizerSection";
	public static final String EXCHANGE_CAR_SECTION = "exchangeCarSection";
	public static final String USED_CAR_SECTION = "usedCarSection";
	public static final String COMPARE_CAR_SECTION = "compareCarSection";
	public static final String NEW_CAR_SECTION = "newCarSection";
	public static final String DEALER_MANUFACTURER_SECTION = "dealerManuFacturerSection";
	public static final String CUSTOMER_PITCH_SECTION = "customerPitchSection";
	public static final String HDFC_PRODUCT_OF_THE_MONTH = "hdfcProductOfTheMonth";
	public static final String PAGE_SECTION_NAME = "pageSectionName";
	public static final String OFFERS_LANDING_PAGE = "offersLandingPage";
	public static final String OFFERS_LANDING_BIKE_PAGE = "offersBikeLandingPage";
	public static final String OFFERS_BIKE_FESTIVAL_PAGE = "offersBikeFestivalPage";
	public static final String FAQ_LIST_PAGE = "faqListPage";
	public static final String VIDEOS_PLAYBACK_PAGE = "videosPlayBackPage";
	public static final String INDEXPAGE = "indexPageLoaded";
	public static final String HOMEPAGE = "homePageLoaded";
	public static final String TOKENID = "tokenId";
	public static final String BROWSERTOKEN = "browserToken";
	public static final String BROWSER = "browser";
	public static final String VAHANGYANAPP = "VahanGyanApp";
	public static final String STATIC_SERVER_DIRECTORY_PATH= "static.server.directory.path";
	public static final String STATIC_SERVER_URL = "static.server.url";
	public static final String REPORTING_MANAGER_EMAIL_ID = "reporting_manager_email_id";
	public static final String REPORTING_MANAGER_EMP_CODE = "reporting_manager_e_code";
	public static final String INDIAN_LOCALE = "en-IN";
	public static final String ASIA_KOLKATA_TIME_ZONE = "Asia/Kolkata";
	public static final String DOWNLOAD_BROCHURE_TABLE_ID = "id";
	public static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";
	public static final String TIME_FORMAT_HMS = "hh:mm:ss";
	public static final boolean IS_LMS_NOTIFICATION = true;
	public static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";
	public static final String WARNING = "warning";
	
	public static final String EXCEPTION_OCCUR = "Exception Occur On HDFC Vahan Gyan";
	public static final String JAVAX_JSP_EXCEPTION = "javax.servlet.jsp.jspException";
	public static final String JAVAX_SERVLET_FORWARD_URI = "javax.servlet.forward.request_uri";
	public static final String ERROR_PAGE = "errorpages";
	public static final String RECEIVER_MAIL_ID = "manish.sonava@girnarsoft.com";
	public static final String HTML_CONTENT_TYPE_TEXT_HTML = "text/html";
	public static final String VAHAN_GYAN = "HDFC Vahan Gyan";
	public static final String ERRORS_TRACK = "ERRORS TRACK ";
	public static final String SESSION_ID="SessionId";
	public static final String BR_Tag = "<br />";
	public static final String TD_TAG = "td";
	public static final String TR_TAG = "tr";
	public static final String TABLE_TAG = "table";
	public static final String TABLE_STYLE = "align=left width=145 valign=top";
	public static final String TABLE_TR_TD_STYLE = "border=1 cellpadding=1 cellspacing=15";
	public static final String URL_FOR_EXCEPTION = "Url for Exception is";
	public static final String TIME_OF_EXCEPTION = "Time of Exception is";
	public static final String EXCEPTION = "Exception";
	public static final String SOMETHING_WENT_WRONG = "Something went wrong.";
	public static final String FORCE_LOGIN_STATUS = "y";
	public static final String FORCE_LOGIN = "force_login";
	public static final String DEVICE_ID = "device_Id";
	public static final String BUYER_AND_SELLER = "buyer-Seller";
	public static final String LIFE_INSURANCE_PRATE = "lifeInsurance-Prate";
	public static final String MESSAGE_SUCCESS_SELLER_BUYER = "msg.success.seller.buyer";
	public static final String MESSAGE_ERROR_SELLER_BUYER = "msg.error.seller.buyer";
	public static final String USERID_LOWER_CASE = "userid";
	public static final String EMAILID_LOWER_CASE = "emailid";
	public static final String MODE = "mode";
	public static final String VARIANT_LIST = "variant_list";
	public static final String SLASH_N = "\n";
	public static final String TINY_URL = "tiny_url";
	public static final String SUBJECT = "subject";
	public static final String CAR = "car";
	public static final String WITH_CONTACT_DETAILS = "WITH_CONTACT_DETAILS";
	public static final String WITHOUT_CONTACT_DETAILS = "WITHOUT_CONTACT_DETAILS";
	public static final String CONTACT_DETAILS_SUPERVISOR = "CONTACT_DETAILS_SUPERVISOR";
	public static final String LOGIN_NAME = "LOGIN_NAME";
	public static final String LOGIN_SUPERVISOR_NAME = "LOGIN_SUPERVISOR_NAME";
	public static final String SMS_OR_WHATSAPP = "SMS_OR_WHATSAPP";
	public static final String DOWNLOAD_BROSCHURE_LINK = "download_broschure_link";
	public static final String OFFERTITLE = "OfferTitle";
	public static final String OFFERKEY_VALUE = "OfferKeyValue";
	public static final String DOT_CSV = ".csv";
	public static final String FEEDBACKSTATUS = "feedbackStatus";
	public static final String USERMESSAGE = "userMessage";
	public static final String LASTSCREEN = "lastscreen";
	public static final String HDFC_OEM = "oem";
	public static final String FEEDBACK_TYPE = "feedbackType";
	public static final String VIDEO_LIST = "videoList";
	public static final String YEAR = "year";
	public static final String MAKE = "make";
	public static final String E_TYPE = "etype";
	public static final String MODEL_YEAR = "modelYear";
	public static final String CAR_MODEL_NAME = "modelName";
	public static final String CAR_VARIANT_ID = "CarVariantId";
	public static final String EVALUATION_TYPE = "evaluationType";
	public static final String CARPRICE = "CarPrice";
	public static final String RECORD = "record";
	public static final String OFFER_LISTING_PAGE = "offerListingPage";
	public static final String PDF_IS_NOT_AVAILABLE_FOR_AVAILABLE_CARS = "PDF is not available for the Selected Cars.";
	public static final String CAR1 = "car1";
	public static final String CAR2 = "car2";
	public static final String CAR3 = "car3";
	public static final String CAR4 = "car4";
	public static final int ONE_LAC = 100000;
	public static final int APP_VERSION_SECURITY_CHECK_THRESHOLD_FOR_DEVICE_ID = 105;
	public static final String ONLY_OEM = "oem";
	public static final String CAR_DISCOUNTS_OEM_LIST = "carDiscountsOemList";
	public static final String modelName = "modelName";
	public static final String EXPIRED = "expired";
	public static final String GET_DISCOUNT_OFFERS_SEARCH_RESULT = "getDiscountOffersSearchResult";
	public static final String FIRST_API_TIME = "first_api_time";
	public static final String LAST_API_TIME = "last_api_time";
	public static final String FORWARD_TO_REWARD = "rewardSection";
	public static final String AMOUNT = "amount";
	public static final String AGE = "age";
	public static final String PROPERTY_SERVICE_TAX = "service.tax";
	public static final String BASIC_PREMIUM = "basic_premium";
	public static final String TAXES = "taxes";
	public static final String HDFC_LIFE_INSURANCE_DETAILS = "HDFC Life Insurance Details";
	public static final String SERVICE_TAX = "service_tax";
	public static final String SUMASSURED = "sumassured";
	public static final String TOTAL_PREMIUM = "total_premium";
	public static final String LIFE_INSURANCE_MAIL = "life.insurance.mail";
	public static final String MSG_SUCCESS_LIFE_INSURANCE = "msg.success.life.insurance";
	public static final String MSG_SUCCESS_LIFE_INSURANCE_ALREADY = "msg.success.life.insurance.already";
	public static final String MIN_TENURE = "min.tenure";
	public static final String EMIAL_ID ="email_id";
	public static final String DEFAULT_TIMESTAMP = "1900-01-01 00:00:00";
	public static final String LEAD_NAME = "lead_name";
	public static final String LEAD_DESC = "lead_desc";
	public static final String TIME = "time";
	public static final String LEAD_TYPE = "lead_type";
	public static final String IS_ADVANCED = "is_advanced";
	public static final String GOOGLE_MAP_API ="http://maps.googleapis.com/maps/api/geocode/json?latlng=%LATITUDE%,%LONGITUDE%&sensor=true";
	public static final String RESULTS = "results";
	public static final String ADDRESS_COMPONENTS = "address_components";
	public static final String TYPES = "types";
	public static final String LOCALITY = "locality";
	public static final String LONG_NAME = "long_name";
	public static final String AMORTIZATION_CONTENT_DATA = "<br/><tr><br/><td>%MONTHS%</td><br/><td>%EMI%</td><br/><td>%PRINCIPLE%</td><br/><td>%INTEREST%</td><br/><td>%OUT_STANDING%</td><br/></tr><br/>%DATA%";
	public static final String FORCE_UPDATE = "force_update";
	public static final String FORCE_URL = "force_url";
	public static final String PROPERTY_KEY_APP_VERSION = "app.version";
	public static final String PROPERTY_KEY_FORCE_UPDATE = "app.force.update";
	public static final String PROPERTY_KEY_FORCE_UPDATE_URL = "app.download.url";
	public static final String PROPERTY_KEY_EMI_LTA = "EMI.LTA";
	public static final String PROPERTY_KEY_EMI_BASE_RATE = "EMI.base.rate";
	public static final String PROPERTY_KEY_EMI_BASE_TENURE = "EMI.base.tenure";
	public static final String EMI_LTA = "emi_lta";
	public static final String EMI_BASE_RATE = "emi_base_rate";
	public static final String EMI_BASE_TENURE = "emi_base_tenure";
	public static final String VEHICLE_EMI = "vehicle_emi";
	public static final String BIKE_SCHEME = "bikeScheme";
	public static final String NULL_TILD = "null~";
	public static final String RESPONSE_CACHE_DIR_PATH ="response.cache.dir";
	public static final String CACHE_EXPIRE_TIME = "cache.expire.time";
	public static final String PROPERTY_KEY_RESPONSE_SARV_SURKSHA = "response.sarvsurksha";
	public static final String DOWNPAYMET_LTA_SAL = "downpayment_lta_sal";
	public static final String DOWNPAYMET_LTA__WITHOUT_SAL = "downpayment_lta_with_out_sal";
	public static final String LEAD_MOBILE_NUMBER = "lead_mobile_number";
	public static final String PROPERTY_KEY_USED_CAR_RATE = "used.car.rate";
	public static final String PROPERTY_KEY_USED_MAX_YEAR_RATE = "used.car.max.year";
	public static final String FOR_USER_ACKNOWLEDGEMENT_NOT_AVAILABLE = "For this user Acknowledgement is not available";

	
	public static final String LEAD_DETAIL = "leaddetails";
	public static final String TYPE = "type";
	public static final String NO_OF_DEPENDENTS = "no_of_dependents";
	public static final String SALERIED_CUSTOMER = "salaried_customer";
	public static final String PROFESSIONAL_DETAIL = "professional_detail";
	public static final String MONTHLY_INCOME = "monthly_income";
	public static final String WORK_EXPERIENCE = "work_experience";
	public static final String LOAN_DETAIL = "loan_detail";
	public static final String ACCOUNT_HOLDER = "account_holder";
	public static final String ACCOUNT_HOLDER_ID = "account_holder_id";
	public static final String PAYING_EMI = "paying_emi";
	public static final String RESIDENTIAL_DETAIL = "residential_detail";
	public static final String RESIDENTIAL_TYPE = "residence_type";
	public static final String LIVING_YEAR = "living_year";
	public static final String USER_DETAIL = "userdetail";
	public static final String ADD_DATE = "added_on";
	public static final String CREATED_ON = "created_on";
	public static final String ALREADY_HDFC_CUSTOMER = "already_hdfc_customer";
	public static final String HDFC_BANK_ACCOUNT_NUMBER = "hdfc_bank_account_number";
	public static final String RESIDENTIAL_CITY = "residential_city";
	public static final String TOTAL_WORK_EXPERIENCE = "total_work_experience";
	public static final String YEAR_AT_CURRENT_RESIDENCE = "years_at_current_residence";
	public static final String YYYY_MM_DD = "yyyy-mm-dd";
	public static final String VEHICLE_LEAD_ID = "vehicle_lead_id";
	public static final String TASK_ID = "task_id";
	public static final String UPDATED_ON = "updated_on";
	public static final String VEHICLE_MODELNAME = "modelName";
	public static final String PRIORITY = "priority";
	public static final String CATEGORY = "category";
	public static final String QUOTATION_ID = "quotationId";
	public static final String QUOTATION_STATUS = "quotation_status";
	public static final String SCHEDULE_ON = "scheduled_on";
	public static final String COMPLETED_ON = "completed_on";
	public static final String LAED_PROGRESS = "lead_progress";
	public static final String LAED_HISTORY = "lead_history";
	public static final String LOAN_AMOUNT = "loan_amount";
	public static final String DOWN_PAYMENT = "down_payment";
	public static final String OFFER_DETAIL = "offer_detail";
	public static final String STEPUPDATA = "stepUpData";
	public static final String EXECUTIVE_EMAIL_ID = "executiveEmailId";
	public static final String CLIENT_EMAIL = "clientEmail";
	public static final String CAR_VARIANT ="carVariant";
	public static final String CAR_MODEL ="carModel";
	public static final String CLIENT_NAME = "clientName";
	public static final String CLIENT_MOBILE = "clientMobile";
	public static final String LOAN_APPLIED = "Loan Applied";
	public static final String LOAN_AMOUNT_HIDDEN = "loanAmountHidden";
	public static final String RATE_HIDDEN = "rateHidden";
	public static final String TENURE_HIDDEN = "tenureHidden";
	public static final String LOAN_APPLIED_SUCCESS = "loan_applied_success";
	public static final String PENDING = "Pending";
	public static final String CREATE_LEAD="createLead";
	public static final String MESSAGE_ERROR_CREATE_LEAD="some error occurred in creating lead";
	public static final String APPROVED = "approved";
	public static final String BIKE = "bike";
	public static final String AMORTIZATION_TYPE = "amortization_type";
	public static final String SARV_SURAKSHA_AMT = "sarv_suraksha_amt";
	public static final String BULLETDATA = "bulletData";
	public static final String LOAN_APPROVED = "Loan Approved";
	public static final String NOT_SUBMITTED = "Not Submitted";
	public static final String RETURNVALUE = "returnValue";
	public static final String AVAILABLE_OFFERS="availableOffers";
	public static final String SEND_EXCEPTION_EMAIL_IDS = "send.exception.email.ids";
	public static final String EMAIL_SEND_ON = "send.email.on";
	public static final String TASK_TYPE = "task_type";
	public static final String TASK_STATUS = "task_status";
	public static final String DATE_AND_TIME = "date_time";
	public static final String QUOTATION_DETAIL_ID = "Quotation_Detail_Id";
	public static final String SENT_ON = "sentOn";
	public static final String STEP_UP_COUNT = "stepUp_Count";
	public static final String STEP_UP_1 = "stepUp_1";
	public static final String STEP_UP_2 = "stepUp_2";
	public static final String STEP_UP_3 = "stepUp_3";
	public static final String ADVANCED_EMI = "advance_EMI";
	public static final String STEP_UP_1_MONTH = "stepUp_1_Month";
	public static final String STEP_UP_2_MONTH = "stepUp_2_Month";
	public static final String STEP_UP_3_MONTH = "stepUp_3_Month";
	public static final String SERV_SURAKSHA_AMOUNT = "servSurksha_Amount";
	public static final String MESSAGE_ERROR_QUOTATION_ID = "Error Occured in Quotation Id";
	public static final String BY_EMI_RESPONSE = "by.emi.response";
	public static final String NAME_ = "Name";
	public static final String EMAIL_ = "Email";
	public static final String MOBILE_ = "Mobile";
	public static final String APPLICATION_CONTEXT_DOT_XML = "applicationContext.xml";
	public static final String LOGIN_REQUEST = "loginRequest";
	public static final String FORGOT_PASSWORD = "forgotPassword";
	public static final String USER_AGENT = "User-Agent";
	public static final String[] BROWSE_USER_AGENT = {"Safari", "Android", "Mozilla","bitlybot","WhatsApp"};
	public static final String INVALID_REQUEST = "Invalid request.";
	public static final String DUPLICATE_DEVICEID = "Duplicate DeviceId.";
	public static final String LEAD_USERNAME = "lead_username";
	public static final String SLASH_HDFC = "/hdfc";
	public static final String LAT = "lat";
	public static final String LONG = "long";
	public static final String GETOEM_FEEDS_WITHSTATUS = "getOemFeedsWithStatus";
	public static final String GET_MODEL_FEEDS_WITH_STATUS = "getModelFeedsWithStatus";
	public static final String EXCHANGECARID = "exchangeCarId";
	public static final String EXCHANGEPRICE = "exchangePrice";
	public static final String RTO = "rto";
	public static final String INSURANCE = "insurance";
	public static final String OTHERS = "others";
	public static final String HANDLEING_CHARGES = "handlingCharges";
	public static final String EXSHOWROOMPRICE = "exShowRoomPrice";
	public static final String HDFC_HYPHEN_BANK_HTML = "HDFC-Bank.html";
	public static final String PIPE = "|";
	public static final String OR = "or";
	public static final String TWELVE = "12";
	public static final String TEN_POINT_TWO = "10.2";
	public static final String DATE = "date";
	public static final String APPOINTMENT = "Appointment";
	public static final int ONE_TWO = 2;
	public static final String DD_SPACE_MMM_SPACE_YYYY = "dd MMM yyyy";
	public static final int APP_VERSION_FOR_ADD_LEAD = 107;
	public static final String CROSS_SELL = "crossSell";
	public static final String INSPECTION_STATUS = "inspection_status";
	public static final String HDFC_OFFERS_LIST = "HDFC_offers_List";
	public static final String ON_SPACE_ROAD_SPACE_PRICE = "On Road Price";
	public static final String HDFCSPECIALOFFERS = "hdfcSpecialOffers";
	public static final String HDFC_QUAIFIER = "hdfc_qualifier";
	public static final String HDFC_SPECIAL_OFFERS = "hdfc_special_offers";
	public static final String ERROR = "error";
	public static final String ERRORMSG = "errormsg";
	public static final String OFFERON = "OfferOn";
	public static final String QUOTATIONDETAIL_ID = "quotationdetail_id";
	public static final String UPTO_36_MONTH = "upto_36_month";
	public static final String UP37_TO_60_MONTH = "37_60_month";
	public static final String UP61_TO_80_MONTH = "61_80_month";
	public static final String RULE_ENGINE = "Rule Engine";
	public static final String MAX_LTA = "max_lta";
	public static final int EIGHTY_MONTH = 80;
	public static final String START_RANGE = "start_range";
	public static final String END_RANGE = "end_range";
	public static final String MAXLTA = "maxLta";
	public static final String EMI_CALCULATOR = "EMI Calculator";
	public static final String AUTO_NEWS = "Auto News";
	public static final String DATE_TIME_FORMAT ="YYYY-MM-dd HH:mm:ss";
	public static final String AUTONEWS_CAR_COUNT = "autonews_car_count";
	public static final String AUTONEWS_BIKE_COUNT = "autonews_bike_count";
	public static final String RESET_AUTO_NEWS_COUNT = "reset_auto_news_count";
	public static final String UPDATED_TIME_CAR = "updated_time_car";
	public static final String UPDATED_TIME_BIKE = "updated_time_bike";
	public static final String GETAUTONEWSWITHSTATUS_CAR = "getAutoNewsWithStatus_car";
	public static final String GETAUTONEWSWITHSTATUS_BIKE =  "getAutoNewsWithStatus_bike";
	public static final String NOTIFICATION_FLAG = "Notification_Flag";
	public static final String NOTIFICATION_COUNT = "noti_history_count";
	public static final String URL_HEADER_TAG = "url_header_tag";
	public static final String UNREAD_NOTIFICATION = "UnRead Notification";
	public static final String READ_NOTIFICATION = "Read Notification";
	public static final String GCMNOTIFICATION_ITEMS = "gcmNotificationItems";
	public static final String EVENTTAGNAME = "eventTagName";
	public static final String VEHICLENAME = "vehicleName";
	public static final String YYYY_MM_DD_SPACE_HH_MM_SS = "yyyy-MM-dd HH:mm:ss";
	public static final String OFFER_DESCRIPTION = "offer_description";
	public static final String DEALER = "dealer";
	public static final String MANUFACTURER = "manufacturer";
	public static final String FINANCE_BIKE_COUNT = "finance_knw_bike_count";
	public static final String FINANCE_CAR_COUNT = "finance_knw_car_count";
	public static final String MMM_DD_YYYY= "MMM dd, yyyy";
	public static final String ZERO_STRING = "0";
	public static final String USEDETAIL = "user_detail";
	public static final String RESET_CAR_COUNT = "reset_car_count";
	public static final String RESET_BIKE_COUNT = "reset_bike_count";
	public static final String NEW = "New";
	public static final String RESET_FIN_CAR_COUNT = "reset_fin_car_count";
	public static final String RESET_FIN_BIKE_COUNT = "reset_fin_bike_count";
	public static final String BIKE_OFFERS = "bikeOffers";
	public static final String BIKE_BRANCH_DAP_URL = "bike.branch.dap.url";
	public static final String BIKE_MOBILE_CRM_URL = "bike.mobile.crm.url";
	public static final String MESSAGE_SUCCESS_SELLER_BUYER_BIKE = "msg.success.seller.buyer.bike";
	public static final String SALARIED_CUSTOMER = "salaried_customer";
	public static final String NO = "no";
	public static final String VARIANT_ID = "VariantId";
	public static final String ISDELIVERD = "isDelivered";
	public static final String IS_READ = "is_read";
	public static final String NOTIFICATION_COUNT_BADGE = "notification_badge_count";
	public static final String TEST_DRIVE_ERROR = "Some error occured in scheduling test drive. Please try again!";
	public static final String CREDIT_CARDS = "creditCards";
	public static final String TEST_DRIVE_ID = "test_drive_id";
	public static final String TEST_DRIVE_UPDATE_ERROR = "Some error occurred in updating test drive status";
	public static final String TEST_DRIVE_API = "http://hdfcbank.preownedcar.autoinspekt.com/api/testdriveleadsapi.jsp?";
	public static final String DEALER_ADDRESS = "dealer_address";
	public static final String TESTDRIVE_LEADS = "TESTDRIVE-LEADS";
	public static final String RESPONSE = "RESPONSE";
	public static final String LMS_ID = "LMS-ID";
	public static final String QUOTATION_SENT = "Quotation Sent";
	public static final String VAHANGYANIPHONE = "vahan_gyan_iPhone";
	public static final String REQUESTFORM = "request_from";
	public static final int APP_VERSION_FOR_IPHONE_USER = 105;
	public static final String WINTER_CARNIVAL = "winter_carnival";
	public static final String SPECIAL_PERSONAL_LOAN = "specialPersonalLoan";
	public static final String CC_BIG_SAVINGS = "ccBigSavings";
	public static final String REASON_CAR_LOAN = "reasonCarLoan";
	public static final String INVALID_APP_VERSION_FOR_IPHONE_USER = "invalid.app.version.iphone.user";
	public static final String BIG_OFFERS = "bigOffer";
	public static final String ONROADPRICEDATA = "onRoadPrice";
	public static final String FILTER_TYPE = "filter_type";
	public static final String FILTER_NAME = "filter_name";
	public static final String PROGRESS_STATUS = "progress_status";
	public static final String FROM = "from";
	public static final String TO = "to";
	public static final String VEHICLE_MODEL_NAME = "vehicle_model_name";
	public static final String STARTLIMIT = "startLimit";
	public static final String ENDLIMIT = "endLimit";
	public static final String BRACES_OPEN_CLOSE = "{}";
	public static final String VERSION_MESSAGE = "version_message";
	public static final String PROPERTY_KEY_VERSION_MESSAGE = "version.message";
	public static final String DEALER_FOR = "dealer_for";
	public static final String MESSAGE_ERROR_DEALERSHIP = "Some error occurred in fetching dealers list. Please try again later!";
	public static final String SNO = "sno";
	public static final String DEALERSHIP_CODE = "dealership_code";
	public static final String DEALERSHIP_NAME = "Dealership_name";
	public static final String CONTACT_NUMBER = "contact_number_one";
	public static final String DEALERS = "dealers";
	public static final String AMORTIZATION_CHART = "Amortization Chart";
	public static final String TAKE_STEP_DOWN = "Step Down";
	
	public static final String LMS_STATUS_KEY = "lms.status.key";
	public static final String LMS_PROGRESS_STATUS_KEY = "task.progress.key";
	public static final String FILTER_NAME_KEY = "filter.key";
	public static final String TASK_PROGRESS = "task_progress";
	public static final String FILTER_KEY = "filter_key";
	public static final String STATUS_ = "Status";
	public static final String DATE_ = "Date";
	public static final String DEFAULT_DATE_FORMAT_IN_DB = "1900-01-01";
	public static final String INTERNAL_APPOINTMENT_ID = "internal_appointment_id";
	public static final String ADD_LEAD = "Add Lead";
	public static final String EMI_AMOUNT = "emiAmount";
	public static final String ALL_LEAD_DETAIL = "all_lead_detail";
	public static final String DEALER_NOT_AVAILABLE_FOR_SELECTED_BRAND_AND_CITY = "Dealer's not available for selected brand and city.";
	
	public static final String INTERNAL_EMAIL_IDS = "internal.emailId";
	public static final String L2_NOTIFICATION_DETAILS = "L2 Notification Detail :";
	public static final String TIME_OF_LMS_REQUEST = "Time of LMS Request :";
	public static final String FUNDED_OPTION = "funded_option";
	public static final String SUM_ASSURED_TYPE = "sum_assured_type";
	public static final String FUNDED = "Funded";
	public static final String NON_FUNDED = "Non Funded";
	public static final String MESSAGE_SUCCESS_COMPLETE_APP = "complete.app.success";
	public static final String TESTDRIVE = "Test Drive";
	public static final String VEHICLEID = "vehicleId";
	public static final long THIRTY_MINUTES = 30;
	public static final String MEDICAL_UNDER = "medical_under";
	public static final String MODEL_MESSAGE = "MODEL_MESSAGE";
	public static final String FEEDBACK_MESSAGE = "FEEDBACK_MESSAGE";
	public static final String NEWS_MESSAGE= "NEWS_MESSAGE";
	public static final String VIDEO_MESSAGE = "VIDEO_MESSAGE";
	public static final String UPDATE_PRIORITY = "update_priority";
	public static final String TASK_HISTORY = "task_history";
	public static final String ERROR_CODE_FOR_ACKNOWLEDGEMENT_NOT_AVAILABLE = "108";
	public static final String ERROR_CODE_FOR_MISSING_MOBILE_NUMBER = "107";
	public static final String ERROR_CODE_FOR_REQUEST_IS_NOT_PROPER = "109";
	public static final String ERROR_CODE_FOR_ACKNOWLEDGEMENT_NOT_AVAILABLE_EVENT_TAG_NAME = "110";
	public static final String MODEL_LINK_REWRITE = "modellink_rewriter";
	public static final String QUOTATION = "Quotation";
	public static final String OFFER_MESSAGE = "OFFER_MESSAGE";
	public static final String VERSIONTAG = "version";
public static final String ERROR_CODE_FOR_FAILURE = "111";
	public static final String PROPERTY_KEY_FAQ_CAR_BADGE = "faq.car.badge";
	public static final String PROPERTY_KEY_FAQ_BIKE_BADGE = "faq.bike.badge";
	public static final String USER_DOES_NOT_EXIST = "The emp code entered doesn't exist in database";
	public static final String TESTDRIVEFUTURERANGE = "testdrive.date.range";
	public static final String BROCHURE_EMAIL_SUBJECT_SINGLE_VARIANT ="HDFC Vahan Gyan: Car Info";
	public static final String EMI_CHART = "emiChart";
	public static final String LMS_TIME_RANGE = "lms.time.range";
	public static final String DIRECT_BROWSER_MESSAGE = "DIRECT_BROWSER_MESSAGE";
	public static final String TOP_CORPORATE_PAGE = "topCorporate";
	public static final String UPLOAD_DOCUMENT = "uploadDocument";
	public static final String LOCAL_ROOT_PATH = "image.local.root.path";
	public static final String REMOTE_ROOT_PATH = "image.remote.root.path";
	public static final String REMOTE_SERVER_PASSWORD = "remote.server.password";
	public static final String REMOTE_SERVER_USERNAME = "remote.server.username";
	public static final String REMOTE_SERVER_IP = "remote.server.ip";
	public static final String PERSONALLEADID = "personalLeadId";
	public static final String DOCUMENTTYPE = "documentType";
	public static final String FILES = "files";
	public static final String COMMA_SPACE = ", ";
	public static final String IMAGE_INPUTSTREAM = "imageInputStream";
	public static final String GETPHOTO = "getPhoto";
	public static final String STATIC_SERVER_DIRECTORY_PATH_UPLOAD = "static.server.directory.path.document.upload";
	public static final String STATUS_CODE = "status_code";
	public static final String VAHAN_GYAN_BLOG_BASEPATH = "blogBasePath";
	public static final String SHADOW_EMP_CODE = "gir_emp_nandan";
	public static final int BLOG_IMAGE_WIDTH = 320;
	public static final int BLOG_IMAGE_HEIGHT = 224;
	public static final String COMPLETEBLOG = "completeBlog";
	public static final String BLOG_DETAIL = "blogDetail";
	public static final int BLOG_PREVIEW_LIMIT = 200;
	public static final String URL_GET_BLOG_FEEDS_DISPATCH_ACTION = "/getBlogFeedsDispatchAction.do";
	public static final String ALREADY_LIKED = "501";
	public static final String ALREADY_DISLIKED = "502";
	public static final String YOUTUBE_LINK = "youtube-link";
	public static final String SYMBOL_FOR_REPORTING_MANAGER = "$";
	public static final String LMS_THREAD_CONTROLLER = "lms.thread.controller";
	public static final String CURRENT_TIME = "current_time";
	public static final String THREE_HOURS_EARLIER = "three_hours_earlier";
	public static final String HALF_HOUR_EARLIER = "half_hour_earlier";
	public static final String NOTIFICATION_TYPE = "notification_type";
	public static final int APP_VERSION_IPHONE_CHECK_THRESHOLD_109 = 109;
	public static final String SHADOW_L2_FLAG = "lms.shadow.l2.flag";
	public static final String ANDROID = "android";
	public static final String DEVICE_TYPE = "device_type";
	public static final String KMS = "kms";
	public static final String KILOMETER = "kilometer";
	public static final String METHOD = "method";
	public static final String TRUEPRICEDATA = "truPriceData";
	public static final String COLOUR = "colour";
	public static final String OUTPUT = "output";
	public static final String BETA_USED_CAR_EVALUATION = "http://beta.evaluation.gaadi.com/truprice/serviceNew.php?";
	public static final String BACK_BUTTON = "backButton";
	public static final String PROPERTY_BANNER_DATA_CAR = "banner.car";
	public static final String BANNER_BIKE = "banner_bike";
	public static final String BANNER_CAR = "banner_car";
	public static final String PROPERTY_LATEST_APK = "latest.apk";
	public static final String ERGO_IDV_FW_INPUT="ergo.idv.fw.input";
	public static final String ERGO_DATE_FORMAT="dd/MM/yyyy";
	public static final String ERGO_API_IDV_URL= "ergo.api.idv.url";
	public static final String ERGO_PREMIUM_FW_INPUT = "ergo.api.premium.input";
	public static final String ERGO_API_PREMIUM_URL="ergo.api.premium.url";
	public static final String LOGIN_BLOG_URL = "login.blog";
	public static final String CREATE_NEW_POST_URL = "create.new.post.blog";
	public static final String BLOG_NOTIFICATION = "BLOG_NOTIFICATION";
	public static final String POST_PUBLISHED = "new.blog.post.published.header";
	public static final String POST_PUBLISHED_MESSAGE = "new.blog.post.published.message";
	public static final String POST_REVIEW = "new.blog.post.review.header";
	public static final String POST_REVIEW_MESSAGE = "new.blog.post.review.message";
	public static final String REVIEW_POSTS_URL = "review.all.post.blog";
	public static final String POST_TRASH = "new.blog.post.trashed.header";
	public static final String POST_TRASH_MESSAGE = "new.blog.post.trashed.message";
	public static final String BLOG_NOTIFICATION_GENERIC = "BLOG_NOTIFICATION_GENERIC";
	public static final String POST_COMMENT = "new.blog.post.comment.header";
	public static final String POST_COMMENT_MESSAGE = "new.blog.post.comment.message";
	public static final String POST_COMMENT_FOR_AUTHOR ="new.blog.post.comment.author.header";
	public static final String POST_COMMENT_MESSAGE_FOR_AUTHOR = "new.blog.post.comment.author.message";
	public static final int LEAD_CREATED_BY_OTHER_CODE = 101;
	public static final String LEAD_ASSIGNED_TO_SOMEONE_ELSE = "Lead already assigned to #EMPLOYEE#.";
	public static final String TESTDRIVE_REQUESTED = "Test Drive Requested";
	public static final String FEEL_THE_CAR_API = "https://www.cardekho.com/newcar/ftc/ModelName/";
	public static final String RECOMMEDED_CARS_WITH_FTC = "https://www.cardekho.com/newcar/recommendedcarswithftc/ModelName/";
	public static final String LEAD_EXISTENT = "leadExistent";
	public static final String SELF = "Self";
	public static final String LEAD_STATUS = "lead_status";
	public static final String LEAD_STATUS_KEY = "lead.status.key";
	public static final String LMS = "LMS";
	public static final String PRIORITY_STATUS_KEY = "lms.priority.key";
	public static final String REASSIGNING_UNDER_YOU="Reassigning it under you!";
	public static final String REASSIGNMENT_NOT_DONE="Reassignment cannot be done as loan application submitted !";
	public static final String NOT_COMPLETED = "Not Completed";
	public static final String COMPLETED = "Completed";
	public static final String STATIC_SERVER_DIRECTORY_PATH_PROFILE_UPLOAD = "static.server.directory.path.document.profile.upload";
	public static final String TEAM_COUNT_DATA = "team_count";
	public static final String SELF_COUNT_DATA = "self_count";
	public static final String IS_SENIOR = "isSenior";
	public static final String ADD_VEHICLE_LMS = "Add Vehicle LMS";
	public static final String REJECTED = "Rejected";
	public static final String TEST_DRIVE = "test_drive";
	public static final String FREQUENT_FEATURES="frequent.features";
	public static final String VAHANGYAN_IMAGES_PATH="vahangyanimagespath";
	public static final String TASK_NAME = "task_name";
	public static final int BDR = 0;
	public static final int SM = 1;
	public static final int ASM_INT = 2;
	public static final String NORMAL = "NORMAL";
	public static final String TYPE_VAL = "type_val";
	public static final int REASSIGNED_INT = 0;
	public static final int TASK_BASED_INT = 1;
	public static final int PRIORITY_BASED_INT = 2;
	public static final int TODAY_LEADS_INT = 3;
	public static final String LOS_PAGE = "losPage";
	public static final String SUMMER_DHAMAAL = "summerDhamaal";
	public static final String ZIP_DRIVE = "zipDrive";
	public static final String PROPERTY_NEW_CAR_TOP_BANNER = "carTop.banner";
	public static final String MOBILE_CRM_MANUAL = "mobile.crm.manual";
	public static final String PUSHWOOSH_BUNCH_SIZE = "pushwoosh.bunch.size";
	public static final String DETAIL_NEWS_HTML="auto.news.detail.html";
	public static final String AUTO_NEWS_DETAIL = "autoNewsDetail";
	public static final String MOBILE_CRM = "mobile-crm";
	public static final String PROPERTY_BACKGROUND_IMG = "background.image";
	public static final String PROPERTY_BACKGROUND_API_INTERVAL = "background.api.time.interval";
	public static final String HIERARCHY = "hierarchy";
	public static final String NOTIFICATION_MESSAGE_EMI_CAL = "notification.message.emi.calculator";
	public static final String NOTIFICATION_MESSAGE_CREDENTIAL_MAIL = "notification.message.credential.mail";
	public static final String TEST_DRIVE_API_BIKE = "http://autolms.com/servlet/TestdriveBike";
	public static final String TEST_DRIVE_BIKE = "test-drive-bike";
	public static final String TESTDRIVE_STATUS = "TestDrive Status";
	public static final String LEADID_ = "Leadid";
	public static final String TESTRIDE_REQUESTED = "Test Ride Requested";
	public static final String TESTRIDE = "Test Ride";
	public static final String MONSOON_OFFER = "monsoonOffer";
	public static final String NCB_VALUES = "ncb";
	public static final String PAYZAPP_WSDL_URL = "payzapp_wsdl_url";
	public static final int DISPOSITION_ACTIVITY = 1;
	public static final int TASK_ACTIVITY = 0;
	public static final String PAYZAPP_LINK_REQUEST = "payzapp.send.link.request";
	public static final String PAYZAPP_LINK = "payzapp.request.link";
	public static final String KARGIL_OFFER = "kargilOffer";
	public static final String INSURANCE_TAX = "insuranceTax";
	public static final String INSURANCE_SERVER_SYNC = "insurance.leads.server.sync.time";
	public static final String INSURANCE_LEAD_DAYS_INTERVAL = "insurance.leads.days.interval";
	public static final String LEAD_DOES_NOT_EXIST = "Error! LeadId does not exist in the system";
	public static final String CHANGES_SENT_FOR_APPROVAL = "Request has been sent to TPP SM for approval. Payment can be initiated only after approval.";
	public static final String REQUEST_ALREADY_UNDER_PROCESS = "Request for approval is still pending for this lead.Cannot generate another request";
	public static final String TPP_E_CODE = "tpp_e_code";
	public static final String TASKS = "Tasks";
	//public static final String SLASH = "/";
	public static final String DOC_PENDING_FOR_APPROVAL = "Document Pending For Approval";
	
	public static final String CONFIG_DATA = ".config.data";
	
}