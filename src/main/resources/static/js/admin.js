var reassignPopUpList = [];
$(function() {
		Dropzone.autoDiscover = false;
	//	$('#offerDate').daterangepicker({locale: {format: 'DD/MM/YYYY'}});
		/*$('aside.main-sidebar a').click(function() {
			showTargetDiv($(this).data("target-id"));
			changeBreadcrumbText($(this).data("target-text"));
			dateRangepickerInit($(this).data("target-id"));
			//$('#addUserInfo').find('form').attr('id');
			resetForm($('#'+$(this).data("target-id")).find('form').attr('id'));
		});*/
	});
	
	
	var mouse_is_inside = false;
	$(document).ready(function(){
	    $('.userlogin-info').hover(function(){ 
	        mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });

	    $("body").mouseup(function(){ 
	        if(! mouse_is_inside) $('.userlogin-bottom').hide();
	    });
	});

	function showTargetDiv(tableId) {
		//alert(tableId);
		$('.showdiv').addClass('hidden');
		$('#' + tableId).removeClass('hidden');
		tabOnClickCallFunction(tableId);
	    $( "#csv-download-link" ).addClass( "hidden" );
	    $('#excel-download-link').addClass('hidden');
	    $('#editUserInfo').hide();
	    $('#fetchDetails').removeClass('hidden');
	    $('#pdd-status-excel-download-link').addClass('hidden');
	    
	}
	
	function tabOnClickCallFunction(tableId){
		var switchCase = tableId;
		switch (switchCase) { 
		case 'blDailyReport': 
			$('#blReportingList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#loadBlDailyReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');  
			break;
		case 'blTargetReport': 
			$('#blReportingList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#loadBlTargetReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');  
			break;
		case 'generateNotifications': 
			//getOemName();
			$('#submitgenerateNotifications .form-group').addClass('hidden');
			fetchDepartmentList();
			fetchCityList();
			fetchDesignationList();
			//$('#submitgenerateNotifications .form-group:first').removeClass('hidden');
			$('#submitgenerateNotifications .col-md-6:last').addClass('hidden');
			break;
		case 'scheduleNotifications': 
			//getOemName();
			$('#scheduleNotifications .form-group').addClass('hidden');
			$('#schedulerRadio').click();
			fetchDepartmentListDup();
			fetchCityListDup();
			fetchDesignationListDup();
			//$('#submitgenerateNotifications .form-group:first').removeClass('hidden');
			$('#scheduleNotifications .col-md-6:last').addClass('hidden');
			//$('#schNotificationDate').datetimepicker();
			initDateTimePicker();
			break;
		case 'editUserInfo': 
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');
			$('#UAMeditUser').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');  			
			fetchDepartmentList();
			getBranchList();
			if(undefined != $('#empCode').val() && '' != $('#empCode').val()){
				$('#fetchDetailsDBtn').click();
			}
			else{
				$('#editUserBasicDiv').show();
			}
			break;
		case 'addUserInfo': 
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMaddUser').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');  
			//}
			fetchDepartmentList();
			 getBranchList();
			break;
		case 'editOffer': 
			getOffersTitle();
			break;
		case 'showDatabaseDump': 
			fetchDatabaseList();
			break;
		case 'showPDDReportDiv':
			$('#showPDDReportDiv .form-group').addClass('hidden');
			$('#singleReportRadio').prop('checked','true');
			fetchSingleReportDates();
			break;
		case 'showPDDStatusImport':
			$('#pdd-status-excel-download-link').attr('href','');
			$('#pdd-status-excel-download-link').addClass('hidden');
			$('#pddStatusSubmit').removeClass('hidden');
			break;
		case 'showInsuranceStatusImport':
			$('#insurance-status-excel-download-link').attr('href','');
			$('#insurance-status-excel-download-link').addClass('hidden');
			$('#submitInsStatusBtn').removeClass('hidden');
			break;
		case 'setTargetReport':
			$.validator.addMethod("regex", function(value, element, regexpr) {          
			     return regexpr.test(value);
			   }, "Please enter a valid Report Name.");
			//fetchAssignTarget();
			fetchAssignTOReport();
			fetchAssignBYReport();
			break;
		case 'generateReport':
			//fetchGenerateReportRegionList();
			fetchGenerateReportCreatorList();
			break;
		case 'showeLearningDiv' :
			$('#eLearning-report-download-link').attr('href','');
			$('#eLearning-status-excel-download-link').addClass('hidden');
			
			$("#eLearningReportDateTag").AnyPicker("destroy");
			$("#eLearningReportDateTag").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "yyyy-MM-dd", 
				viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
				onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues); }});
			break;
		case 'eLearningCertificate':
			eLearningCertificateModule();
			break;
		case 'showPDDReassignment':
			$('#pdd-reassignment-download-link').attr('href','');
			$('#downloadButtonDiv').addClass('hidden');
			$('#buttonDiv').removeClass('hidden');
			$('input[name="reasgnType"]').on('click',function(){
				if($('#rc3').is(':checked')){
					$(".loscode").show('slow');
				}
				else{
					$(".loscode").hide('slow');
				}
			});
			break;
		case 'reportNotifications' :
			$('#notiText').off('keypress');
			$('#notiText').on('keypress', function (event) {
			    var regex = new RegExp("^[a-zA-Z0-9]+$");
			    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
			    if (!regex.test(key)) {
			       event.preventDefault();
			       return false;
			    }
			});
			$('#singleReportDate').addClass('hidden');
			$('#textReport').addClass('hidden');
			$('#reportFooter').addClass('hidden');
			$('#notification-report-download-link').attr('href','');
			$('#notification-report-download-link').addClass('hidden');
			$('#singleReportRadio').click();
			break;
		case 'dailyReportsDiv':
			fetchReportCreatorData();
			break;
		case 'uamDashboard':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMdashboard').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'UAMApprovalReq':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMApprovalReq').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'UAMCredential':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMCredential').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'UAMActivity':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMActivity').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'PasswordPolicy':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMPasswordPolicy').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'vgConfigData':
			//if($('.menu--subitens__opened').length > 0){
			$('#others').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#vgConfigData').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'UAMVGUserBase':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMVGUserBase').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddRICOperations':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#pddRICOperations').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'dealerPayrollFileUpload':
			$('#dealerPayrollList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#dealerFileUpload').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			break;
		case 'DSA_History':
			$('#dealerPayrollList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#dsaHistory').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			break;
		case 'fileUploadedForMe':
			$('#dealerPayrollList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#fileUploadedForMe').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			break;
		// pdd
		case 'pddFreshLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#PDDFreshLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddClosureReport':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#PDDClosureReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'PDDLeadReassign':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#PDDLeadReassign').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//} 
			break;
		case 'PDDReport':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#PDDReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddRICUpload':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#pddRICUpload').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddMatchProcess':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#pddMatchProcess').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddMatchResult':
			//if($('.menu--subitens__opened').length > 0){
			$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#pddMatchResult').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddApprovedRejected':
			//if($('.menu--subitens__opened').length > 0){
				$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
				if($('#status').val() == 1)
					$('#pddApprovedRecords').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
				else
					$('#pddRejectedRecords').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'pddRICMatchReport':
			//if($('.menu--subitens__opened').length > 0){
				$('#pddList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
				if($('#status').val() == 1)
					$('#pddRICMatchReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
				else
					$('#pddRICMatchReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
				break;
		//Insurance
		case 'insuranceFreshLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#insuranceFreshLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;	
		case 'insurancePolicyIssue':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#insurancePolicyIssue').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'insuranceReport':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#insuranceReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'insuranceLeadReassign':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#insuranceLeadReassign').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'unAssignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#unAssignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'assignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#assignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
			
		case 'selfAssignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#selfAssignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'getLeadsByEcode':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#getLeadsByEcode').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'premiumPendingLeads':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#premiumPendingLeads').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'premiumApprovedLeads':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#premiumApprovedLeads').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'premiumRejectLeads':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#premiumRejectLeads').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'freshAssignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#freshAssignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'pendingAssignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#pendingAssignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'completedAssignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#completedAssignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'lostAssignInsuranceLead':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#lostAssignInsuranceLead').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
			
		case 'manageTeamDashBoard':
			//if($('.menu--subitens__opened').length > 0){
			$('#insuranceList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#manageTeamDashBoard').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		//E-Learning
		case 'elearningCertificate':
			//if($('.menu--subitens__opened').length > 0){
			$('#eLearningList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#elearningCertificate').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'elearningReport':
			//if($('.menu--subitens__opened').length > 0){
			$('#eLearningList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#elearningReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;	
		case 'notificationSendNow':
			//if($('.menu--subitens__opened').length > 0){
			$('#notificationList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#notificationSendNow').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'customNotification':
			//if($('.menu--subitens__opened').length > 0){
			$('#notificationList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#customNotication').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');	
			//}
			break;
		case 'PasswordPolicyApproval':
			//if($('.menu--subitens__opened').length > 0){
			$('#uamList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#UAMPasswordPolicyApproval').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
			break;
		case 'notificationReport':
			//if($('.menu--subitens__opened').length > 0){
			$('#notificationList').addClass('navactive').addClass('menu--subitens__opened').siblings().removeClass('navactive').removeClass('menu--subitens__opened');  
			$('#notificationReport').addClass('sub_menu--link__active').siblings().removeClass('sub_menu--link__active');
			//}
		default:
		}
	}
	
	function fetchDatabaseList(){
		$('#tableNamesDiv').addClass('hidden');
		$('#dumpTypeDiv').addClass('hidden');
		$('#submitDumpDiv').addClass('hidden');
		$('#submitDumpBtn').removeClass('hidden');
		$('#dump-download-link').addClass('hidden');
		$.ajax({
			url: "/AdminModule/fetchDatabaseList",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				console.log(data);
				$.map(data,function(item){
					$('#dbName').append('<option value="'+item+'">'+item+'</option>');
				});
				fetchDBTables();
				$('#dBListDiv').removeClass('hidden');
			}
		});
	}
	function fetchDBTables(){
		$('#tableNamesDiv').addClass('hidden');
		$('#submitDumpDiv').addClass('hidden');
		$('#submitDumpBtn').removeClass('hidden');
		$('#dump-download-link').addClass('hidden');
		
		$.ajax({
			url: "/AdminModule/fetchDBTables",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			data:"database="+$('#dbName option:selected').val(),
			success:function(data){
				console.log(data);
				$('#tableName').empty();
				$.map(data,function(item){
					$('#tableName').append('<option value="'+item+'">'+item+'</option>');
				});
				$('#dumpTypeDiv').removeClass('hidden');
			}
		});
	}
	function showHideTableList(el){
		if(undefined != el && undefined != el.value){
			if(el.value == '0'){
				$('#tableNamesDiv').addClass('hidden');
				
			}
			else if(el.value == '1'){
				$('#tableNamesDiv').removeClass('hidden');
				
			}
			$('#dumpTypeValue').val(el.value);
			$('#submitDumpDiv').removeClass('hidden');
	
		}	
	}
	function fetchDepartmentList(){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/fetchDepartmentList",
			type: 'POST',
			async:false,
			//dataType: 'JSON',
			success:function(data){
				//console.log(data);
				if($('#departmentTag').length>0){
					$('#departmentTag').empty().append('<option selected value="">--Search or Type Department Name--</option>');
					$.map(data,function(item){
						$('#departmentTag').append('<option value="'+item.id+'">'+item.name+'</option>');
					});
					$('#departmentType').removeClass('hidden');
				}
				/*if($('#editdepartment').length>0){
					$('#editdepartment').empty().append('<option selected value="">--Search or Type Department Name--</option>');
					$.map(data,function(item){
						$('#editdepartment').append('<option value="'+item.id+'">'+item.name+'</option>');
					});
					
				}*/
			}
		});
	}
	
	function getBranchList(){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/getBranchMaster",
			type: 'POST',
			async:false,
			success:function(data){
				if($('#branchlist').length>0){
				$('#branchlist').empty().append('<option selected value="">--Search or Type Branch--</option>');
				$.map(data,function(item){
					$('#branchlist').append('<option value="'+item.id+'">'+item.name +'</option>');
				});
				$('#departmentType').removeClass('hidden');
				}
				
				if($('#branchNameEdit').length>0){
					$('#branchNameEdit').empty().append('<option selected value="">--Search or Type Branch--</option>');
					$.map(data,function(item){
						$('#branchNameEdit').append('<option value="'+item.id+'">'+item.name +'</option>');
					});
				}
			}
		});
	}
	
	function fetchDepartmentListDup(){
		$.ajax({
			url: "/AdminModule/fetchDepartmentList",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				console.log(data);
				$.map(data,function(item){
					$('#departmentTag1').append('<option value="'+item+'">'+item+'</option>');
				});
				$('#departmentType1').removeClass('hidden');
			}
		});
	}
	function fetchCityList(){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/fetchCityList",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				$('#cityTag').empty().append('<option selected value="all">Select City</option>');
				$.map(data,function(item){
					$('#cityTag').append('<option value="'+item+'">'+item+'</option>');
				});
				$('#cityType').removeClass('hidden');
			}
		});
	}
	function fetchCityListDup(){
		$.ajax({
			url: "/AdminModule/fetchCityList",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				$.map(data,function(item){
					$('#cityTag1').append('<option value="'+item+'">'+item+'</option>');
				});
				$('#cityType1').removeClass('hidden');
			}
		});
	}
	function fetchDesignationList(){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/fetchDesignationList",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				$('#designationTag').empty().append('<option selected value="all">Select Designation</option>');
				$.map(data,function(item){
					$('#designationTag').append('<option value="'+item+'">'+item+'</option>');
				});	
	
				$('#designationType').removeClass('hidden');
				//$('#version').removeClass('hidden');
				$('#dTypeDiv').removeClass('hidden');
			}
		});
	}
	function fetchDesignationListDup(){
		$.ajax({
			url: "/AdminModule/fetchDesignationList",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				$.map(data,function(item){
					$('#designationTag1').append('<option value="'+item+'">'+item+'</option>');
				});	
	
				$('#designationType1').removeClass('hidden');
				//$('#version').removeClass('hidden');
				$('#dTypeDivDup').removeClass('hidden');
			}
		});
	}
	function dateRangepickerInit(tableId){
		$('#'+tableId).find('.daterange').each(function( index ) {
			$(this).daterangepicker({locale: {format: 'DD/MM/YYYY'}})
		});
	}
	
	function changeBreadcrumbText(text) {
		$('ol.breadcrumb li.active').text(text);
	}
	
	function checkAllFormFieldIsEmpty(formParentDivID) {
		var isEmpty = false;
		var isEmptyId;
		var returnStatusAndId = [];
		$("#" + formParentDivID + " " + "form input").each(function() {
			removeInputWithError(this.id);
			if ($("#" + this.id).attr('type') != 'hidden') {
				if ($.trim(this.value).length === 0) {
					isEmpty = true;
					isEmptyId = this.id;
					returnStatusAndId.push(this.id);
					returnStatusAndId.push(isEmpty);
					return false;
				}
			}
		});
		return returnStatusAndId;
	}
	
	function checkAllFormSelectEmpty(formParentDivID) {
		var isEmpty = false;
		var isEmptyId;
		var returnStatusAndId = [];
		$("#" + formParentDivID + " " + "form select").each(function() {
			removeInputWithError(this.id);
			if ($("#" + this.id).val() == 'na') {
				isEmpty = true;
				isEmptyId = this.id;
				returnStatusAndId.push(this.id);
				returnStatusAndId.push(isEmpty);
				return false;
			}
		});
		return returnStatusAndId;
	}
	
	function addInputWithError(inputId) {
		//$('#' + inputId).parent().addClass('has-error');
		$('#' + inputId).closest('.form-group').find('label').parent().addClass('has-error');
	}
	
	function removeInputWithError(inputId) {
		//$('#' + inputId).parent().removeClass('has-error');
		$('#' + inputId).closest('.form-group').find('label').parent().removeClass('has-error');
	}
	
	function modalAlertForFormInput(inputId) {
		//$('#myModal p').text("Please Enter " + $('#' + inputId).parent().find('label').text().replace(/\*/g, ''));
	//	$('#myModal p').text("Please Enter " + $('#' + inputId).closest('.form-group').children('label').text().replace(/\*/g, ''));
	//	$('#myModal').appendTo("body").modal('show');
		swal('Warning', "Please Enter " + $('#' + inputId).closest('.form-group').find('label').text().replace(/\*/g, ''), 'warning');
	}
	
	function ajaxFormSubmit(formID) {
		$('#' + formID).ajaxSubmit();
		return false;
	}
	
	function checkCustomFormFieldIsEmpty(formParentDivID, validateFormIdInArray) {
		var isEmpty = false;
		var isEmptyId;
		var returnStatusAndId = [];
		$("#" + formParentDivID + " " + "form input").each(function() {
			if ($("#" + this.id).attr('type') != 'hidden') {
				removeInputWithError(this.id);
				var formdata = this;
				$.each(validateFormIdInArray, function(index, value) {
					if (value == formdata.id) {
						if ($.trim(formdata.value).length === 0) {
							isEmpty = true;
							isEmptyId = formdata.id;
							returnStatusAndId.push(formdata.id);
							returnStatusAndId.push(isEmpty);
							return false;
						}
					}
				});
			}
		});
		$("#" + formParentDivID + " " + "form select").each(function() {
			if ($("#" + this.id).attr('type') != 'hidden') {
				removeInputWithError(this.id);
				var formdata = this;
				$.each(validateFormIdInArray, function(index, value) {
					if (value == formdata.id) {
						if ($.trim(formdata.value).length === 0) {
							isEmpty = true;
							isEmptyId = formdata.id;
							returnStatusAndId.push(formdata.id);
							returnStatusAndId.push(isEmpty);
							return false;
						}
					}
				});
			}
		});
		return returnStatusAndId;
	}
	
	function findMandatoryFormInputs(formParentDivID) {
		var formId = [];
		$("#" + formParentDivID + " " + "form input").each(function() {
			removeInputWithError(this.id);
	
			//if ($("#" + this.id).attr('type') != 'hidden' && $('#' + this.id).parent().find('label').text().search(/\*/g) != -1 && $("#" + this.id).val().trim() == '') {
			if ($("#" + this.id).attr('type') != 'hidden' && $('#' + this.id).closest('.form-group').find('label').text().search(/\*/g) != -1 && $("#" + this.id).val().trim() == '') {
				formId.push(this.id);
				//if ($('#' + this.id).parent().find('label').text().search(/\*/g) != -1 && $.trim(this.id.value).length === 0) {
	
				//}
			}
		});
		$("#" + formParentDivID + " " + "form select").each(function() {
			removeInputWithError(this.id);
	
			//if ($("#" + this.id).attr('type') != 'hidden' && $('#' + this.id).parent().find('label').text().search(/\*/g) != -1 && $("#" + this.id).val().trim() == '') {
			if ($("#" + this.id).attr('type') != 'hidden' && $('#' + this.id).closest('.form-group').find('label').text().search(/\*/g) != -1 && $("#" + this.id).val().trim() == '') {
				formId.push(this.id);
				//if ($('#' + this.id).parent().find('label').text().search(/\*/g) != -1 && $.trim(this.id.value).length === 0) {
	
				//}
			}
		});
		return formId;
	}
	
	function checkCustomFormFieldTextAreaIsEmpty(formParentDivID, validateFormIdInArray) {
		var isEmpty = false;
		var isEmptyId;
		var returnStatusAndId = [];
		$("#" + formParentDivID + " " + "form textarea").each(function() {
			if ($("#" + this.id).attr('type') != 'hidden') {
				removeInputWithError(this.id);
				var formdata = this;
				$.each(validateFormIdInArray, function(index, value) {
					if (value == formdata.id) {
						if ($.trim(formdata.value).length === 0) {
							isEmpty = true;
							isEmptyId = formdata.id;
							returnStatusAndId.push(formdata.id);
							returnStatusAndId.push(isEmpty);
							return false;
						}
					}
				});
			}
		});
		return returnStatusAndId;
	}
	
	function findMandatoryFormInputsTextArea(formParentDivID) {
		var formId = [];
		$("#" + formParentDivID + " " + "form textarea").each(function() {
			removeInputWithError(this.id);
	
			//if ($("#" + this.id).attr('type') != 'hidden' && $('#' + this.id).parent().find('label').text().search(/\*/g) != -1 && $("#" + this.id).val().trim() == '') {
			if ($("#" + this.id).attr('type') != 'hidden' && $('#' + this.id).closest('.form-group').find('label').text().search(/\*/g) != -1 && $("#" + this.id).val().trim() == '') {
				formId.push(this.id);
				//if ($('#' + this.id).parent().find('label').text().search(/\*/g) != -1 && $.trim(this.id.value).length === 0) {
	
				//}
			}
		});
		return formId;
	}
	
	function checkCustomSelectFieldIsEmpty(formParentDivID, validateFormIdInArray) {
		var isEmpty = false;
		var isEmptyId;
		var returnStatusAndId = [];
		$("#" + formParentDivID + " " + "form select").each(function() {
			removeInputWithError(this.id);
			if (!$("#" + this.id).is('[disabled=disabled]') && $("#" + this.id).val() == 'na') {
				//if ($("#" + this.id).val() == 'na') {
				var formdata = this;
				$.each(validateFormIdInArray, function(index, value) {
					if (value == formdata.id) {
						if ($("#" + formdata.id).val() == 'na') {
							isEmpty = true;
							isEmptyId = formdata.id;
							returnStatusAndId.push(formdata.id);
							returnStatusAndId.push(isEmpty);
							return false;
						}
					}
				});
			}
		});
		return returnStatusAndId;
	}
	
	function findMandatorySelectInputs(formParentDivID) {
		var formId = [];
		$("#" + formParentDivID + " " + "form select").each(function() {
			if (!$("#" + this.id).is('[disabled=disabled]') && $("#" + this.id).val() == 'na') {
				//if ($("#" + this.id).val() == 'na') {
				if ($('#' + this.id).closest('.form-group').find('label').text().search(/\*/g) != -1) {  
					//if ($('#' + this.id).parent().find('label').text().search(/\*/g) != -1) {
					formId.push(this.id);
				}
			}
		})
		return formId;
	}
	/*1) To show alert as Warning type pass warning in messageType
	  2) To show alert as Sucess type pass success in messageType
	  3) To show alert as Danger type pass danger in messageType
	
	 */
	function modalAlertToShowCustomMessage(messageText, messageType) {
		/*$('#myModal :eq(1)').removeClass().addClass('modal modal-' + messageType).find('p').text(messageText);
		$('#myModal').modal('show');*/
		if(messageType == 'success')
			swal('Success', messageText, messageType);
		else if(messageType == 'warning')
			swal('Warning', messageText, messageType);
		else if(messageType == 'error')
			swal('Error', messageText, messageType);
		else
			swal(messageType, messageText, messageType);
	}
	
	function resetForm(formId) {
		$('#' + formId).resetForm();
	}
	
	function resetFormPddReassign(formId) {
		$('#' + formId).resetForm();
		
		$("#rc1").prop("checked", true);
		$("#rc3").prop("checked", true);
		hideShow(null);
	}
	
	function onlyNumbers(event) {
		if (event.which != 8 && event.which !== 0 && (event.which < 48 || event.which > 57)) {
			return false;
		}
	}
	
	function validateEmailId(emailId) {
		var is = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return is.test(emailId);
	}
	
	// Bulk Employee Ajax request here
	function submitBulkImport(formParentDivID) {
	
	    var status = checkCustomFormFieldIsEmpty(formParentDivID, findMandatoryFormInputs(formParentDivID));
	
	    addInputWithError(status[0]);
	
	    if (status[1]) {
	        modalAlertForFormInput(status[0]);
	        return false;
	    }
	
		if (confirm("Are You Sure You Want Add CVS Information!")) {
	//		$('#submitBulkImport').ajaxSubmit({
	//			contentType: 'application/x-www-form-urlencoded',
	//			enctype: 'multipart/form-data',
	//			processData: false,  // tell jQuery not to process the data
	//			contentType: false,  // tell jQuery not to process the data
	//			success: submitBulkImportResponse
	//		});
			
			var file = document.getElementById('file').files[0]
			var key = "vahangyan";
			// Uses different reader for all files
			var reader = new FileReader();
	
			reader.onload = function() {
				
				var salt = CryptoJS.lib.WordArray.random(128/8);
				var iv = CryptoJS.lib.WordArray.random(128/8);
	//			console.log('salt  '+ salt );
	//			console.log('iv  '+ iv );
				
				// To construct our multipart form data request,
				// We need a separator to define each part of the request
				var boundary = "blob";
				
				var data = AESFileEncryption(key, salt, iv, file, reader, boundary, "file");
	
				$.ajax({
					headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
					url: "/AdminModule/bulkImport",
					type: 'POST',
					processData: false,  // tell jQuery not to process the data
					contentType: false,  // tell jQuery not to process the data
					data:data,
					success:function(response){
	
						resetForm('submitBulkImport');
	
						if(response=='SUCCESS')
						{
							$( "#csv-download-link" ).addClass( "hidden" );
							modalAlertToShowCustomMessage('CSV has been processed successfully', 'success');
						}
						else{
							var download = document.getElementById('csv-download-link');
							download.setAttribute('href', response);
							download.setAttribute('download', 'Error-Log.csv');
							$( "#csv-download-link" ).removeClass( "hidden" );
							modalAlertToShowCustomMessage('Error log generated. Please go through download link for more detail.', 'warning');
	
						}
					}, 
					error: function(jqXHR, textStatus, errorThrown) {
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);
	
					}
				});
			}
	
			reader.readAsDataURL(file);
		}
		else {
			modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');
		}
	}
	
	//Builk Employee Response here
	//function submitBulkImportResponse(content) {
	//
	//	resetForm('submitBulkImport');
	//
	//	if(content=='SUCCESS')
	//	{
	//		$( "#csv-download-link" ).addClass( "hidden" );
	//		modalAlertToShowCustomMessage('CSV has been processed successfully', 'success');
	//	}
	//	else{
	//		var download = document.getElementById('csv-download-link');
	//		download.setAttribute('href', content);
	//		download.setAttribute('download', 'Error-Log.csv');
	//		$( "#csv-download-link" ).removeClass( "hidden" );
	//		modalAlertToShowCustomMessage('Error log generated. Please go through download link for more detail.', 'warning');
	//
	//	}
	//
	//}
	
	
	function addUserInformation(formParentDivID) {
		var status = checkCustomFormFieldIsEmpty(formParentDivID, findMandatoryFormInputs(formParentDivID));
		addInputWithError(status[0]);
		if (status[1]) {
			modalAlertForFormInput(status[0]);
			return false;
		}
		
		/*if($('input[name="isLearningAvlbl"][value="1"]').is(':checked')){
			if($('#dept_broad_category').val() == undefined || $('#dept_broad_category').val() == ''){
				modalAlertToShowCustomMessage("Please select department broad category for Elearning", 'warning');
				return false;
			}
		}*/
		
		if ($('#emailId').val() == "" || validateEmailId($('#emailId').val())) {
			//if (confirm("Are You Sure You Want Add User Information!")) {				
				SubForm($('#submitaddUserInfo'),addUserInformationResponse)
			//}
		} else {
			modalAlertToShowCustomMessage("Enter Proper Email Id", 'warning');
			return false;
		}
		
		/*if($('#departmentTag').val() == undefined || $('#departmentTag').val() == 'all'){
			modalAlertToShowCustomMessage("Please select department name", 'warning');
			return false;
		}
		if($('#branchlist').val() == undefined || $('#branchlist').val() == 'all'){
			modalAlertToShowCustomMessage("Please select branch name", 'warning');
			return false;
	    }	*/	
	}
	
	function addUserInformationResponse(data) {
		
		//var data = $.parseJSON(response);
		if (data.status == "success") {
			modalAlertToShowCustomMessage(data.message, 'success');
			resetForm('submitaddUserInfo');
		} else if (data.status == "failure") {
			modalAlertToShowCustomMessage(data.message, 'error');
		}
	}
	
	function adminLoginValidate() {
		if ($('#emailId').val() !=='' && !validateEmailId($('#emailId').val())) {
			modalAlertToShowCustomMessage("Enter Proper Email ID", 'warning');
			return false;
		} else if ($('#emailId').val() === '') {
			modalAlertToShowCustomMessage('Please Enter Email ID', 'error');
			return false;
		} else if ($('#password').val() === '') {
			modalAlertToShowCustomMessage('Please Enter Password', 'error');
			return false;
		} else {
			$('#Setlogin').submit();
		}
	}
	
	
	function getDropdown(targetId){
		var target = $('#'+targetId.id).val();
		$('#'+targetId.id).parent().nextAll().find('input[type=text]').val('');
		$('#notificationEmailOrEmployeeCode,#notificationUrl').val('');
		$('#carFields select').each(function( index ) {
			$(this).attr("disabled", true).prop('selectedIndex',0);
		});
		$('#carFields').addClass('hidden');
		if (target == 'MODEL_MESSAGE') {
			$('#carFields select').each(function( index ) {
				$(this).attr("disabled", false);
			});
			$('#carFields').removeClass('hidden');
			$('#notificationUrl').removeClass('hidden').parent().removeClass('hidden').end().attr('type','text');
	
		} else if(target  == 'GENERIC_MESSAGE' ){
			$('#notificationUrl').addClass('hidden').parent().addClass('hidden').end().attr('type','hidden');
	
		} else if ( target == 'OFFER_MESSAGE') {
			$('#notificationUrl').removeClass('hidden').parent().removeClass('hidden').end().attr('type','text');
	
		}
	
	}
	
	/*function sendGenerateNotifications(formParentDivID) {
		function sendGenerateNotifications(formParentDivID, notificationType) {
	
		if (notificationType == 'NA') {
	        $('#generateNotificationType').val('');
	    } else {
	        $('#generateNotificationType').val('generateNotificationToAll');
	    }
		var status = checkCustomFormFieldIsEmpty(formParentDivID, findMandatoryFormInputs(formParentDivID));
		//var statusSelect = checkAllFormSelectEmpty(formParentDivID);
		var statusSelect = checkCustomSelectFieldIsEmpty(formParentDivID,findMandatorySelectInputs(formParentDivID));
		addInputWithError(status[0]);
		if (status[1]) {
			modalAlertForFormInput(status[0]);
			return false;
		}
		addInputWithError(statusSelect[0]);
		if (!$.isEmptyObject(statusSelect)) {
			modalAlertForFormInput(statusSelect[0]);
			return false;
		}
		if ($('#notificationEventTag').val() == 'MODEL_MESSAGE' && $('#notificationModel').val() == 'na') {
			modalAlertToShowCustomMessage('Please Select Model', 'error');
			return false;
		}
		if ($('#notificationEventTag').val() == 'VIDEO_MESSAGE'){
			$('#notificationUrl').val("https://hdfc.cardekho.com/hdfc/videoPlayBack.html?videoURL="+$('#videoName option:selected').val()+"&videoTitle="+$('#videoName option:selected').text());
		}
		$('#notificationurlheader').val($('#notificationMessageTitle').val());
		if (confirm("Are You Sure You Want Generate Notifications!")) {
			$('#submitgenerateNotifications').ajaxSubmit({
				//dataType: 'json',
				contentType: 'application/x-www-form-urlencoded',
				success: generateNotificationsResponse
			});
		}
	}*/
	
/*	function sendGenerateNotifications(formParentDivID) {
		var status= validateNotificationPanel();
		if(status !="")
		{
			modalAlertToShowCustomMessage(status, 'warning')
			return false;
		}
		$('#notificationurlheader').val($('#notificationMessageTitle').val());
		if (confirm("Are You Sure You Want Generate Notifications!")) {
			
			var target = $('input[name="optradio"]:checked').val();	
			var eCode= $('#notificationEmailOrEmployeeCode').val();
			var datetime='';
			if($("#schedule").hasClass("active")){
				datetime = $('#datetimepicker').val();
			}else{
				datetime='';
			}
			var deviceType = $('#dTypeDiv div ul').find('li.active').find('a').attr('href');
			deviceType = deviceType.substring(1);
			var vehiclType= $('#optradio1').val();
			alert("1");
			var notificationEventTagValue=$('#notificationEventTag').val();
			var notificationEventTagText='';
			var notificationMessageTitle =$('#notificationMessageTitle').val();
			var notificationMessage =$('#notificationMessage').val();
			var notificationImgUrl =$('#notificationImgUrl').val();
			var department = $('#departmentTag').val();
			var city = $('#cityTag').val();
			var designation = $('#designationTag').val();
			var optType='';
			var oemType='';
			var modelType='';
			if(notificationEventTagValue == '1') {
				notificationEventTagText = "NEWS_MESSAGE";
				if(vehiclType == '1')
					optType = $('#carNewsType').val();
				else if(vehiclType == '2')
					optType = $('#bikeNewsType').val();
			}
			else if(notificationEventTagValue == '3'  || notificationEventTagValue == '8') {
				if(notificationEventTagValue == '3')
					notificationEventTagText = "OFFER_MESSAGE";
				else if (notificationEventTagValue == '8')
					notificationEventTagText = "DIRECT_BROWSER_MESSAGE";
				
				optType = $('#notificationUrl').val();	
			}
			else if(notificationEventTagValue == '4'){
				notificationEventTagText = "MODEL_MESSAGE";
				optType = $('#notificationUrl').val();	
				oemType = $('#notificationOem').val();
				modelType = $('#notificationModel').val();
			}
			else if(notificationEventTagValue == '6')
			{
				notificationEventTagText = "FEEDBACK_MESSAGE";
				if(vehiclType == '1')
					optType = $('#feedbackCar').val();
				else if(vehiclType == '2')
					optType = $('#feedbackBike').val();
			}
			else if(notificationEventTagValue == '7')
			{
				notificationEventTagText = "VIDEO_MESSAGE";
				optType = $('#videoName').val();
			}
			var sendNotificationTo = $('#filterPanel div ul').find('li.active').find('a').attr('href');
			sendNotificationTo = sendNotificationTo.substring(1);
			
			var data= {
					"audienceType":target,
					"eCode":eCode,
					"datetime":datetime,
					"deviceType":deviceType,
					"vehiclType":vehiclType,
					"notificationEventTagValue":notificationEventTagValue,
					"notificationEventTagText":notificationEventTagText,
					"notificationMessageTitle":notificationMessageTitle,
					"notificationMessage":notificationMessage,
					"notificationImgUrl":notificationImgUrl,
					"department":department,
					"city":city,
					"designation":designation,
					"optType":optType,
					"oemType":oemType,
					"modelType":modelType,
					"sendNotificationTo":sendNotificationTo
				};
			$.ajax({
				url: "/AdminModule/sendNotification",
				headers: { 
				      'Accept': 'application/json',
				     'Content-Type': 'application/json' 
				},
				type: 'POST',
				data:JSON.stringify(data),		
				async:false,
				dataType: 'JSON',
				success:function(data){
					console.log('data:: '+data);
				}
			});
		}
	}
*/	
	function sendGenerateNotifications(formParentDivID) {
		var status= validateNotificationPanel();
		if(status !="")
		{
			modalAlertToShowCustomMessage(status, 'warning')
			return false;
		}
		$('#notificationurlheader').val($('#notificationMessageTitle').val());
		if (confirm("Are You Sure You Want Generate Notifications!")) {
			
			var target = $('input[name="optradio"]:checked').val();	
			var eCode= $('#notificationEmailOrEmployeeCode').val();
			//return;
			var datetime='';
			if($("#schedule").hasClass("active")){
				datetime = $('#datetimepicker').val();
			}else{
				datetime='';
			}
			var deviceType1 = $('#dTypeDiv div ul').find('li.active').find('a').attr('href');
			deviceType1 = deviceType1.substring(1);
			var deviceType="";
			if(null !=deviceType1 && deviceType1 !="" && deviceType1 !="all"){
				if(deviceType1!="android"){
					deviceType=1;
				}else{
					deviceType=3;
				}
			}else{
				deviceType=deviceType1;
			}
			
			var deviceVersion = "";
			 
			if(deviceType !="all" && (deviceVersion == null || deviceVersion == undefined || deviceVersion == ""))
			{
				var deviceVersion = $('input[name="versionName"]:checked').val();
			}
			
			var vehiclType= $('#optradio1').val();
			var notificationEventTag=$('#notificationEventTag').val();
			var notificationMessageTitle =$('#notificationMessageTitle').val();
			var notificationMessage =$('#notificationMessage').val();
			var notificationImgUrl =$('#notificationImgUrl').val();
			var department = $('#departmentTag').val();
			var city = $('#cityTag').val();
			var designation = $('#designationTag').val();
			var optType='';
			var oemType='';
			var modelType='';
			var headerTitle='';
			/*if(notificationEventTag == "NEWS_MESSAGE") {*/
			if(notificationEventTag == "1") {
				if(vehiclType == '1')
					optType = $('#carNewsType').val();
				else if(vehiclType == '2')
					optType = $('#bikeNewsType').val();
			}
			/*else if(notificationEventTag == "OFFER_MESSAGE"  || notificationEventTag == "DIRECT_BROWSER_MESSAGE") {*/
			else if(notificationEventTag == "3"  || notificationEventTag == "8") {
				optType = $('#notificationUrl').val();	
				headerTitle=$('#headerTitle').val();	
			}
			/*else if(notificationEventTag == "MODEL_MESSAGE"){*/
			else if(notificationEventTag == "4"){
				//optType = $('#notificationUrl').val();	
				//oemType = $('#notificationOem').val();
				//modelType = $('#notificationModel').val();
				optType = $('#researchKeyVal').val();
			}
			/*else if(notificationEventTag == "FEEDBACK_MESSAGE")*/
			else if(notificationEventTag == "6")
			{
				if(vehiclType == '1')
					optType = $('#feedbackCar').val();
				else if(vehiclType == '2')
					optType = $('#feedbackBike').val();
			}
			/*else if(notificationEventTag == "VIDEO_MESSAGE")*/
			else if(notificationEventTag == "7")
			{
				optType = $('#videoKey').val();
			}
			var sendNotificationTo = $('#filterPanel div ul').find('li.active').find('a').attr('href');
			sendNotificationTo = sendNotificationTo.substring(1);
			var data= {
					"audienceType":target,
					"eCode":eCode,
					"datetime":datetime,
					"deviceType":deviceType,
					"vehiclType":vehiclType,
					"notificationEventTag":notificationEventTag,
					"notificationMessageTitle":notificationMessageTitle,
					"notificationMessage":notificationMessage,
					"notificationImgUrl":notificationImgUrl,
					"department":department,
					"city":city,
					"designation":designation,
					"optType":optType,
					"oemType":oemType,
					"modelType":modelType,
					"sendNotificationTo":sendNotificationTo,
					"deviceVersion":deviceVersion,
					"headerTitle":headerTitle
				};
			$.ajax({
				url: "/AdminModule/sendNotification",
				headers: { 
				      'Accept': 'application/json',
				     'Content-Type': 'application/json' ,
				     'X-CSRF-TOKEN':$('#csrfToken').val()
				},
				type: 'POST',
				data:JSON.stringify(data),		
				async:false,
				dataType: 'JSON',
				success:function(response){
					//console.log('data:: '+data);
					if(undefined != response){
					if( response.status != undefined && response.status.code==201){
						modalAlertToShowCustomMessage("Notification Sent Successfully", 'success');
					}
					else
						modalAlertToShowCustomMessage("Some Error Occurred.Please try again!", 'warning');
					}
				}
			});
		}
	}

	function validateNotificationPanel()
	{
		var target = $('input[name="optradio"]:checked').val();	
		var eCode= $('#notificationEmailOrEmployeeCode').val();
		var vehiclType= $('#optradio1').val();
		var deviceVersion = $('input[name="versionName"]:checked').val();	
		
		var deviceType = $('#dTypeDiv div ul').find('li.active').find('a').attr('href');
		deviceType = deviceType.substring(1);
		
		
		
		/*var appVersion=[] ;
		$('input.app:checkbox:checked').each(function () {
			appVersion.push($(this).val());
	    	});*/

		//alert("2");
		var notificationEventTag=$('#notificationEventTag').val();
		var notificationMessageTitle =$('#notificationMessageTitle').val();
		var notificationMessage =$('#notificationMessage').val();
		var notificationImgUrl =$('#notificationImgUrl').val();
		var department = $('#departmentTag').val();
		var city = $('#cityTag').val();
		var designation = $('#designationTag').val();
		
		
		if(deviceType !="all" && (deviceVersion == null || deviceVersion == undefined || deviceVersion == ""))
		{
			return "Please select Device version";
		}
		/*alert(deviceType+"-"+deviceVersion);
		return;*/
		
		if(target == null || target == undefined || target == "")
		{
			return "Please select Audience Type";
		}
		if(target!="All" && (eCode == null || eCode == undefined || eCode ==  ""))
		{
			return "Please Enter Ecode";
		}
		
		if($("#schedule").hasClass("active")){
			
			var date = $('#datetimepicker').val();
			if(date == '')
				return "Please select date and time";
				
		}
		
		/*if(appVersion.length==0)
		{
			return "Please select any app version";
				
		}*/
		
		if(notificationEventTag== null || notificationEventTag == undefined )
		{
			return "Please select notification type";
				
		}
		else
		{
			if(notificationMessageTitle == "")
				return "Please enter message title";
			if(notificationMessage == "")
				return "Please enter message";
			/*if(notificationImgUrl == "")	
				return "Please enter image url";*/
			
			/*if(notificationEventTag == "NEWS_MESSAGE")*/
			if(notificationEventTag == "1")
			{
				if(vehiclType == '1' && $('#carNewsType').val()=='na')
					return "Please select car news";
				else if(vehiclType == '2' && $('#bikeNewsType').val()=='na')
					return "Please select bike news";
					
			}
			/*else if(notificationEventTag == "OFFER_MESSAGE"  || notificationEventTag == "DIRECT_BROWSER_MESSAGE")*/
			else if(notificationEventTag == "3"  || notificationEventTag == "8")
			{
				if($('#notificationUrl').val()  == "")	
					return "Please enter Html URL";
				
				if($('#headerTitle').val()  == "")	
					return "Please enter Header Title";
			}
			else if(notificationEventTag == "4")
			{
				
				if($('#researchKeyVal').val()  == "")	
					return "Please enter Research Key";
				
				/*if($('#notificationOem').val()  == "na")	
					return "Please select OEM Name";
				
				if($('#notificationModel').val()  == "na")	
					return "Please select Modal ";*/
			}
			else if(notificationEventTag == "6")
			{
				if(vehiclType == '1' && $('#feedbackCar').val()=='na')
					return "Please select Feedback Type Model";
				else if(vehiclType == '2' && $('#feedbackBike').val()=='na')
					return "Please select Feedback Type Model";
			}
			else if(notificationEventTag == "7")
			{
				if($('#videoKey').val()  == "")	
					return "Please Enter Video Key";
			}
		}
		
		//alert("specific ---- >>> "+$("#specific").hasClass("active"));
		if($("#specific").hasClass("active")){
			if(department == "all" && city == "all" && designation == "all")	
				return "Please select One of these options Department/City/Designation otherWise choose All";
		}
		else{
			$('#departmentTag').val('all');
		}
		return "";
	}
	
	function scheduleNotifications(formParentDivID) {
		/*function sendGenerateNotifications(formParentDivID, notificationType) {*/
	
		/*if (notificationType == 'NA') {
	        $('#generateNotificationType').val('');
	    } else {
	        $('#generateNotificationType').val('generateNotificationToAll');
	    }*/
		var status = checkCustomFormFieldIsEmpty(formParentDivID, findMandatoryFormInputs(formParentDivID));
		//var statusSelect = checkAllFormSelectEmpty(formParentDivID);
		var statusSelect = checkCustomSelectFieldIsEmpty(formParentDivID,findMandatorySelectInputs(formParentDivID));
		addInputWithError(status[0]);
		if (status[1]) {
			modalAlertForFormInput(status[0]);
			return false;
		}
		addInputWithError(statusSelect[0]);
		if (!$.isEmptyObject(statusSelect)) {
			modalAlertForFormInput(statusSelect[0]);
			return false;
		}
		if ($('#notificationEventTag1').val() == 'MODEL_MESSAGE' && $('#notificationModel1').val() == 'na') {
			modalAlertToShowCustomMessage('Please Select Model', 'error');
			return false;
		}
		if ($('#notificationEventTag1').val() == 'VIDEO_MESSAGE'){
			$('#notificationUrl1').val("https://hdfc.cardekho.com/hdfc/videoPlayBack.html?videoURL="+$('#videoName option:selected').val()+"&videoTitle="+$('#videoName option:selected').text());
		}
		$('#notificationurlheader1').val($('#notificationMessageTitle1').val());
		if (confirm("Are You Sure You Want To Schedule Notifications!")) {
			$('#submitScheduleNotifications').ajaxSubmit({
				//dataType: 'json',
				contentType: 'application/x-www-form-urlencoded',
				success: scheduleNotificationsResponse
			});
		}
	}
	function hideShowSearch(){
		// #submitgenerateNotifications
		var target = $('input[name="optradio"]:checked').val();

		if (target == 'Single') {
			$('#eCodeDiv').show();
			$('#notificationEmailOrEmployeeCode').val('');
			$('#filterPanel').hide();
			
		} else if (target == 'Multiple') {
			//$('#notificationEmailOrEmployeeCode').removeClass('hidden').parent().find('button').removeClass('hidden').end().parent().removeClass('hidden');
			$('#eCodeDiv').show();
			$('#notificationEmailOrEmployeeCode').val('');
			$('#filterPanel').hide();
		} else if (target == 'All') {
			$('#eCodeDiv').hide();
			$('#notificationEmailOrEmployeeCode').val('');
			$('#filterPanel').show();
		}
	}
	function hideShowSearchDup(target){
		// #submitgenerateNotifications
		var target = $('#scheduleNotifications input[name="optradio"]:checked').val()
		if (target == 'Single') {
			$('#notificationEmailOrEmployeeCode1').parent().find('button').attr('disabled', false);
			//$('#notificationEmailOrEmployeeCode').removeClass('hidden').parent().find('button').removeClass('hidden').end().parent().removeClass('hidden');
			$('#notificationEmailOrEmployeeCode1').attr('type','text').parent().find('button').removeClass('hidden').end().parent().removeClass('hidden');
			$('#generateNotificationType1').val('');
		} else if (target == 'Multiple') {
			//$('#notificationEmailOrEmployeeCode').removeClass('hidden').parent().find('button').removeClass('hidden').end().parent().removeClass('hidden');
			$('#notificationEmailOrEmployeeCode1').attr('type','text').parent().find('button').removeClass('hidden').end().parent().removeClass('hidden');
			$('#notificationEmailOrEmployeeCode1').parent().find('button').attr('disabled', true);
			$('#generateNotificationType1').val('');
		} else if (target == 'All') {
			//$('#notificationEmailOrEmployeeCode').attr('type','hidden').parent().find('button').addClass('hidden').end().parent().addClass('hidden');
			$('#notificationEmailOrEmployeeCode1').attr('type','hidden').parent().find('button').addClass('hidden').end().parent().addClass('hidden');
			$('#notificationEmailOrEmployeeCode1').parent().find('button').attr('disabled', true);
			$('#generateNotificationType1').val('generateNotificationToAll');
		}
	}
	function generateNotificationsResponse(data) {
	
	
		if (data == 'success') {
			modalAlertToShowCustomMessage('Generic Notification Generated Successfully', 'success');
		}
	    else if (data == 'success-all') {
	        modalAlertToShowCustomMessage('Generic Notifications Generated Successfully', 'success');
	    }
	    else{
	        modalAlertToShowCustomMessage('Failure occurred in sending notification.', 'warning');
	    }
	
	    resetForm('submitgenerateNotifications');
	}
	
	function scheduleNotificationsResponse(data) {
	
	
	    if (data == 'success' || data == 'success-all') {
			modalAlertToShowCustomMessage('Notifications Scheduled Successfully', 'success');
		}
	    else{
	        modalAlertToShowCustomMessage('Failure occurred in scheduling notification.', 'warning');
	    }
	
	    resetForm('submitScheduleNotifications');
	}
	
	function getUserDetails(targetId,tableId) {
		//var tableId = 'generateNotificationsList';
		//var tableId = targetId;
		if ($('#' + targetId).val() !== '') {
			var table = $("#"+tableId).DataTable({
				"language": {
					"zeroRecords": "No Data Available",
					"infoEmpty":"No Data Available"
				},
				"responsive": true,
				"bDestroy": true,
				"bPaginate": true,
				"bSort": true,
				"bInfo": true,
				"bAutoWidth": false,
				"bJQueryUI": true,
				ajax: {
					url: "/AdminModule/showUserDetails",
					type: "POST",
					dataType: 'json',
					dataSrc: "",
					contentType: 'application/x-www-form-urlencoded',
					data: function(d) {
						d.genericemailid = $('#' + targetId).val();
					}
				},
				columns: [{
					data: "contact_details"
				}, {
					data: "e_code"
				}, {
					data: "user_email_id"
				}, {
					data: "asm"
				}],
				error: function() {
					alert("error");
				}
			});
			$('#'+tableId).parent().parent().parent().parent().parent().parent().removeClass('hidden');
		} else {
			modalAlertToShowCustomMessage("Please Select Email Id Or Employee Code ", 'warning');
			return false;
		}
	}
	
	function getOemForBike(targetId){
		//var parameter ='device_id='+$('#storedeviceId').val()+'&token='+$('#storeToken').val();
		var response = makeAjaxCall('getOemType',"");
		$('#'+targetId).empty().append('<option selected value="na">Select Oem</option>');
		var oemResp = $.parseJSON(response).data;
		$.map(oemResp,function(item){
			$('#'+targetId).append('<option value="'+item.slug+'" >'+item.name+'</option>');
		});
	}
	
	
	function getModelForBike(targetId,finalTarget){
		//var parameter = "oemName="+$('#notificationOem').val().trim();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var parameter = "oemName="+$('#'+targetId.id).val();
		var response = makeAjaxCall('getModelType',parameter);    
		$('#'+finalTarget.id).empty().append('<option selected value="na">Select Model</option>');
		var resp = $.parseJSON(response).data;
		$.map(resp,function(item){
			$('#'+finalTarget.id).append('<option value="/'+item.brandSlug+'/'+item.slug+'" >'+item.brandName+' - '+item.name+'</option>');
		});
	
	}
	
	function getVarientForBike(targetId,model,variant){
		//var parameter = "modelName="+$('#notificationModel').val().trim();
		var parameter = "modelName="+$('#'+model).val().split(",")[0].trim()+'&device_id='+$('#storedeviceId').val()+'&token='+$('#storeToken').val();
		var response = makeAjaxCall('getVarientType',parameter);    
		$('#'+variant).empty().append('<option selected value="na">Select Varient</option>');
		$.each($.parseJSON(response).data.variantsList, function(i, item) {
			$('#'+variant).append('<option value="'+item.variantLinkRewrite+'" >'+item.variantsname+'</option>');
	
		});
	
	}
	
	/*function getemailId(){
		if ($('#storedeviceId').val() == '' && $('#storeToken').val() == ''){
			var parameter ="e_code="+ $('#hiddenEcode').val().trim();
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			var response = makeAjaxCall('getEmailIdOrToken',parameter); 
			var data=jQuery.parseJSON( response );
			//$('#storedeviceId').val(data.device_id);
			//$('#storeToken').val(data.token);
			
			$('#storedeviceId').val('8b78b6ee67f393da');
			$('#storeToken').val('tokentesting74');
		}
	}*/
	/*function getemailIdDup(){
		if ($('#storedeviceId1').val() == '' && $('#storeToken1').val() == ''){
			var parameter ="e_code="+ $('#hiddenEcode1').val().trim();
			var response = makeAjaxCall('getEmailIdOrToken',parameter); 
			$.each($.parseJSON(response), function(i, item) {
				$('#storedeviceId1').val(item.device_id);
				$('#storeToken1').val(item.token);
			});  
		}
	}*/
	/*var eventTagTypeResponse=undefined;
	function getEventTagForBike(targetId){
		var checkedVal = 0;
		$('#bikeNewsMessage').hide();
		$('#filterPanel').hide();
		$('#carNewsMessage').hide();
		$('#footer').hide();
		$('#carFields').hide();
		$('#optradio1').val('1');
		$('#carFeedback').hide();
		$('#bikeFeedback').hide();
		$('#videoListDiv').hide();
		$("#vehicleTypeRadio1").click(function() {
			checkedVal = 1;
			$('#optradio1').val('1');
		});
		$("#vehicleTypeRadio2").click(function() {
			checkedVal = 2;
			$('#optradio1').val('2');
		});
		if(checkedVal == undefined ||checkedVal == 1 || checkedVal == "1"){
			$('#vehicleType').val('1');
		}
		else{
			$('#vehicleType').val('2');
		}
		if (eventTagTypeResponse == undefined){
			alert("caling");
			eventTagTypeResponse = makeAjaxCall('getEventTagType',null); 
			
		}
		alert("4");
			if(undefined != eventTagTypeResponse){
			$('#notificationEventTag').empty().append('<option selected value="na">Select Event Tag</option>');
			$.map($.parseJSON(eventTagTypeResponse),function(item){
				if(undefined != item && item != "READ_RECEIPT")
					$('#notificationEventTag').append('<option value="'+item.eventId+'">'+item.eventTagName+'</option>');
			});	
			}
		$('#eventTagType').show();
	}*/
	var eventTagTypeResponse=undefined;
	function getEventTagForBike(targetId){
		var checkedVal = 0;
		$('#notificationMessageTitle').val('');
		$('#notificationMessage').val('');
		$('#notificationImgUrl').val('');
		
		$('#bikeNewsMessage').hide();
		$('#filterPanel').hide();
		$('#carNewsMessage').hide();
		$('#footer').hide();
		$('#carFields').hide();
		$('#optradio1').val('1');
		$('#carFeedback').hide();
		$('#bikeFeedback').hide();
		$('#videoListDiv').hide();
		
		$('#notificationMessageTitle').val('');
		$('#notificationMessage').val('');
		$('#notificationImgUrl').val('');
		
		
		$("#vehicleTypeRadio1").click(function() {
			checkedVal = 1;
			$('#optradio1').val('1');
		});
		$("#vehicleTypeRadio2").click(function() {
			checkedVal = 2;
			$('#optradio1').val('2');
		});
		if(checkedVal == undefined ||checkedVal == 1 || checkedVal == "1"){
			$('#vehicleType').val('1');
		}
		else{
			$('#vehicleType').val('2');
		}
		if (eventTagTypeResponse == undefined){
			eventTagTypeResponse = makeAjaxCall('getEventTagType',null); 
			
		}
			if(undefined != eventTagTypeResponse){
			$('#notificationEventTag').empty().append('<option selected value="na">Select Event Tag</option>');
			$.map($.parseJSON(eventTagTypeResponse),function(item){
				if(undefined != item && item != ""){
					var res = item.split("~");
					$('#notificationEventTag').append('<option value='+res[1]+'>'+res[0]+'</option>');
				/*	$('#notificationEventTag').append('<option value="1">NEWS_MESSAGE</option>');
				$('#notificationEventTag').append('<option value="2">GENERIC_MESSAGE</option>');
				$('#notificationEventTag').append('<option value="3">OFFER_MESSAGE</option>');
				$('#notificationEventTag').append('<option value="4">Research_MESSAGE</option>');
				$('#notificationEventTag').append('<option value="7">video_MESSAGE</option>');*/
			}
				
			});	
			}
		$('#eventTagType').show();
	}
	var eventTagTypeResponseDup=undefined;
	function getEventTagForBikeDup(targetId){
		var checkedVal = $('#scheduleNotifications input[name="optradio1"]:checked').val();
		var appVersion = $('#scheduleNotifications input[name="version1"]:checked').val();
		if(appVersion == "all")
			appVersion = "106";
		if(checkedVal == 1 || checkedVal == "1")
			$('#vehicleType1').val('1');
		else
			$('#vehicleType1').val('2');
		if (eventTagTypeResponse == undefined){
			var parameter ='device_id='+$('#storedeviceId1').val()+'&token='+$('#storeToken1').val();
			eventTagTypeResponseDup = makeAjaxCall('getEventTagType',parameter); 
		}
			if(undefined != eventTagTypeResponseDup){
			$('#notificationEventTag1').empty().append('<option selected value="na">Select Event Tag</option>');
			$.map($.parseJSON($.parseJSON(eventTagTypeResponseDup).data), function(item) {
				if(undefined != item.event_tag_name && item.event_tag_name != "READ_RECEIPT" && ((parseInt(appVersion)>= 107)||(parseInt(appVersion) == parseInt(item.app_version))))
				$('#notificationEventTag1').append('<option value="'+item.eventId+'" >'+item.eventTagName+'</option>');
	
			});
		
			}
		$('#scheduleNotifications #eventTagType1').removeClass('hidden');
	}
	function getAutoNewsForCar(targetId){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('getAutoNewsForCar',""); 
		$('#'+targetId).empty().append('<option selected value="na">Select Car News</option>');
		var auto_news = $.parseJSON(response).data;
		//$.each(auto_news["Auto News"], function(i, item) {
			$.map(auto_news.items,function(item){
				$('#'+targetId).append('<option value="'+item.url+'" >'+item.title+'</option>');
			});
		//});
	}
	
	function getAutoNewsForBike(targetId){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('getAutoNewsForBike',""); 
		$('#'+targetId).empty().append('<option selected value="na">Select Bike News</option>');
		var auto_news = $.parseJSON(response).data;
		//$.each(auto_news["Auto News"], function(i, item) {
			$.map(auto_news.items,function(item){
				$('#'+targetId).append('<option value="'+item.url+'" >'+item.title+'</option>');
			});
		//});
	}
	
	function displaymessage() {
		$("select").each(function() { this.selectedIndex = 0 });
	}
	
	function CarBikechecked(){
		var checkedFeedback = $('#submitgenerateNotifications input[name="optradio1"]:checked').val()
		if(checkedFeedback == '1')
			$('#feedbackCar').val('1');
		else
			$('#feedbackBike').val('2');
	}
	
	function getBikeDropdown(targetId){
		var target = $('#'+targetId.id).val();
		$('#notificationMessageTitle').val('');
		$('#notificationMessage').val('');
		$('#notificationImgUrl').val('');
		$('#'+targetId.id).parent().nextAll().find('input[type=text]').val('');
		$('#notificationUrl').val('');
		$('#headerTitle').val('');
		$('#carFields select').each(function( index ) {
			$(this).attr("disabled", true).prop('selectedIndex',0);
		});
		
		var MODEL_MESSAGE = $('#'+targetId.id).text().trim();
		var GENERIC_MESSAGE = $('#'+targetId.id).text().trim();
		var FEEDBACK_MESSAGE = $('#'+targetId.id).text().trim();
		var OFFER_MESSAGE = $('#'+targetId.id).text().trim();
		var VEDIO_MESSAGE = $('#'+targetId.id).text().trim();
		var NEWS_MESSAGE = $('#'+targetId.id).text().trim();
		$('#carFields').hide();
		$('#bikeFeedback').hide();
		$('#carFeedback').hide();
		$('#carNewsMessage').hide();
		$('#bikeNewsMessage').hide();
		$('#videoListDiv').hide();
		var checkedFeedback = $('#optradio1').val();
		if(target == '6'){//FEEDBACK_MESSAGE
			if(checkedFeedback == '1')
			{
				$('#bikeFeedback').hide();
				$('#carFeedback').show();
			}
			else
			{
				$('#carFeedback').hide();
				$('#bikeFeedback').show();
			}
			$('#notificationUrlDiv').hide();
			$('#notificationUrlDivTitle').hide();
			$('#notificationImgUrlDiv').show();
			$('#researchKey').hide();
			$('#Notification select').each(function( index ) {
				$(this).attr("disabled", false);
			});
		}
		else if (target == '4') {//MODEL_MESSAGE
			if(checkedFeedback == '1')
			{
				//if($('#notificationOem option').length <= 1)
				//getOemName('notificationOem');
			}
			else
			{
				//if($('#notificationOem option').length <= 1)
				//getOemForBike('notificationOem');
			}
			/*$('#carFields select').each(function( index ) {
				$(this).attr("disabled", false);
			});*/
			$('#bikeFeedback').hide();
			//$('#carFields .form-group').show();
			//$('#carFields').show();
			$('#notificationUrlDiv').hide();
			$('#notificationUrlDivTitle').hide();
			$('#notificationImgUrlDiv').show();
			$('#carFeedback').hide();
			$('#researchKey').show();
		} else if(target  == '2' ){//GENERIC_MESSAGE
			$('#bikeFeedback').hide();
			$('#notificationUrlDiv').hide();
			$('#notificationUrlDivTitle').hide();
			$('#notificationImgUrlDiv').show();
			$('#carFeedback').hide();
			$('#researchKey').hide();
		} else if ( target == '3') {//OFFER_MESSAGE
			$('#bikeFeedback').hide();
			$('#notificationUrlDiv').show();
			$('#notificationUrlDivTitle').show();
			$('#notificationImgUrlDiv').show();
			$('#carFeedback').hide();
			$('#researchKey').hide();
		}else if ( target == '7') {//VIDEO_MESSAGE
			$('#bikeFeedback').hide();
			$('#notificationUrlDiv').hide();
			$('#notificationUrlDivTitle').hide();
			$('#notificationImgUrlDiv').show();
			$('#carFeedback').hide();
			$('#researchKey').hide();
			/*if($('#videoName option').length <= 1){
				fetchVideoList('videoName');
			}*/
			$('#videoListDiv').show();
		}else if(target == '1'){//NEWS_MESSAGE
			//var checkedFeedback = $('#submitgenerateNotifications input[name="optradio1"]:checked').val()
			
			if(checkedFeedback == '1')
			{
				$('#bikeNewsMessage').hide();
				$('#carNewsMessage').show();
			}
			else
			{
				$('#carNewsMessage').hide();
				$('#bikeNewsMessage').show();
			}
	
			if(checkedFeedback == '1'){
				if($('#carNewsType option').length <=1)
				getAutoNewsForCar('carNewsType');
			}
			else{
				if($('#bikeNewsType option').length <=1)
				getAutoNewsForBike('bikeNewsType');
			}
			$('#notificationUrlDiv').hide();
			$('#notificationUrlDivTitle').hide();
			$('#notificationImgUrlDiv').show();
			$('#bikeFeedback').hide();
			$('#carFeedback').hide();
			$('#researchKey').hide();
		}
		else if(target == '8'){//DIRECT_BROWSER_MESSAGE
			$('#bikeFeedback').hide();
			$('#notificationUrlDiv').show();
			$('#notificationUrlDivTitle').show();
			$('#notificationUrl').show();
			$('#notificationImgUrl').show();
			$('#carFeedback').hide();
			$('#researchKey').hide();
		}
		$('#messageDetailDiv').show();
		$('#messageTitleDiv').show();
		//$('#filterPanel').show();
		$('#footer').show();

	}
	
	function getBikeDropdownDup(targetId){
		var target = $('#'+targetId.id).val();
		$('#'+targetId.id).parent().nextAll().find('input[type=text]').val('');
		$('#notificationEmailOrEmployeeCode1,#notificationUrl1').val('');
		$('#carFields1 select').each(function( index ) {
			$(this).attr("disabled", true).prop('selectedIndex',0);
		});
		var MODEL_MESSAGE = $('#'+targetId.id).val().trim();
		var GENERIC_MESSAGE = $('#'+targetId.id).val().trim();
		var FEEDBACK_MESSAGE = $('#'+targetId.id).val().trim();
		var OFFER_MESSAGE = $('#'+targetId.id).val().trim();
		var VEDIO_MESSAGE = $('#'+targetId.id).val().trim();
		var NEWS_MESSAGE = $('#'+targetId.id).val().trim();
		$('#carFields1').addClass('hidden');
		$('#bikeFeedback1').addClass('hidden');
		$('#carFeedback1').addClass('hidden');
		$('#carNewsMessage1').addClass('hidden');
		$('#bikeNewsMessage1').addClass('hidden');
		$('#videoListDiv1').addClass('hidden');
		var checkedFeedback = $('#scheduleNotifications input[name="optradio1"]:checked').val()
		if(target == 'FEEDBACK_MESSAGE'){
			if(checkedFeedback == '1')
			{
				$('#bikeFeedback1').addClass('hidden');
				$('#carFeedback1').removeClass('hidden');
			}
			else
			{
				$('#carFeedback1').addClass('hidden');
				$('#bikeFeedback1').removeClass('hidden');
			}
			$('#notificationUrl1').addClass('hidden').parent().addClass('hidden').end().attr('type','hidden');
			$('#Notification select').each(function( index ) {
				$(this).attr("disabled", false);
			});
		}
		else if (target == 'MODEL_MESSAGE') {
			if(checkedFeedback == '1')
			{
				//if($('#notificationOem option').length <= 1)
				getOemName('notificationOem1');
			}
			else
			{
				//if($('#notificationOem option').length <= 1)
				getOemForBike('notificationOem1');
			}
			$('#carFields1 select').each(function( index ) {
				$(this).attr("disabled", false);
			});
			$('#bikeFeedback1').addClass('hidden');
			$('#carFields1 .form-group').removeClass('hidden');
			$('#carFields1').removeClass('hidden');
			$('#notificationUrl1').removeClass('hidden').parent().removeClass('hidden').end().attr('type','text');
			$('#carFeedback1').addClass('hidden');
		} else if(target  == 'GENERIC_MESSAGE' ){
			$('#bikeFeedback1').addClass('hidden');
			$('#notificationUrl1').addClass('hidden').parent().addClass('hidden').end().attr('type','hidden');
			$('#carFeedback1').addClass('hidden');
		} else if ( target == 'OFFER_MESSAGE') {
			$('#bikeFeedback1').addClass('hidden');
			$('#notificationUrl1').removeClass('hidden').parent().removeClass('hidden').end().attr('type','text');
			$('#carFeedback1').addClass('hidden');
		}else if ( target == 'VIDEO_MESSAGE') {
			$('#bikeFeedback1').addClass('hidden');
			$('#notificationUrl1').addClass('hidden').parent().addClass('hidden').end().attr('type','hidden');
			$('#carFeedback1').addClass('hidden');
			if($('#videoName1 option').length <= 1){
				fetchVideoList('videoName1');
			}
			$('#videoListDiv').removeClass('hidden');
		}else if(target == 'NEWS_MESSAGE'){
			//var checkedFeedback = $('#submitgenerateNotifications input[name="optradio1"]:checked').val()
			if(checkedFeedback == '1')
			{
				$('#bikeNewsMessage1').addClass('hidden');
				$('#carNewsMessage1').removeClass('hidden');
			}
			else
			{
				$('#carNewsMessage1').addClass('hidden');
				$('#bikeNewsMessage1').removeClass('hidden');
			}
	
			if(checkedFeedback == '1'){
				if($('#carNewsType1 option').length <=1)
				getAutoNewsForCar('carNewsType1');
			}
			else{
				if($('#bikeNewsType1 option').length <=1)
				getAutoNewsForBike('bikeNewsType');
			}
			$('#notificationUrl1').addClass('hidden').parent().addClass('hidden').end().attr('type','hidden');
			$('#bikeFeedback1').addClass('hidden');
			$('#carFeedback1').addClass('hidden');
		}
		else if(target == 'DIRECT_BROWSER_MESSAGE'){
			$('#bikeFeedback1').addClass('hidden');
			$('#notificationUrl1').removeClass('hidden').parent().removeClass('hidden').end().attr('type','text');
			$('#carFeedback1').addClass('hidden');
		}
		$('#scheduleNotifications .col-md-6:last .form-group:first ').removeClass('hidden');
		$('#scheduleNotifications #messageDetailDiv1').removeClass('hidden');
	$('#scheduleNotifications #messageTitleDiv1').removeClass('hidden');
		$('#scheduleNotifications .col-md-6:last').removeClass('hidden');
	}
	function changeForModel(targetId,oem,model){
		var target = $('#'+targetId).val();
		if(target == '1')
		{
			getModelName(oem,model); 
		}
		else
		{
			getModelForBike(oem,model);
		}
	}
	
	function changeForVarient(targetId,model,variant){
		var target = $('#'+targetId).val();
		if(target == '1')
		{
			getVariantName(model,variant);
		}
		else
		{
			getVarientForBike(model,variant);
		}
	}
	
	function getOemName(id){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('getOemName',"");
		$('#'+id).empty().append('<option selected value="na">Select Oem</option>');
		var oemResp = $.parseJSON(response).data;
		$.map(oemResp,function(item){
			$('#'+id).append('<option value="'+item.slug+'" >'+item.name+'</option>');
		});
	}
	function fetchVideoList(el){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('getVideoList',"");
		$('#'+el).empty().append('<option selected value="na">Select Video</option>');
		var vidResp = $.parseJSON(response);
		$.map(vidResp,function(item){
			$('#'+el).append('<option value="'+item.videoUrl+'" >'+item.videoTitle+'</option>');
		});
	}
	function getModelName(oem,model){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var parameter = "oemName="+$('#'+oem.id).val();
		var response = makeAjaxCall('getModelName',parameter);
		$('#'+model.id).empty().append('<option selected value="na">Select Model</option>');
		var resp = $.parseJSON(response).data;
		$.map(resp,function(item){
			$('#'+model.id).append('<option value="'+item.modelUrl+'" >'+item.brandName+' - '+item.name+'</option>');
		});
	}
	
	function getVariantName(model,variant){
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/getVariantName",
			type: 'POST',
			dataType: 'JSON',
			async: false,
			data:"modelName="+$('#'+model.id).val(),
			contentType: 'application/x-www-form-urlencoded',
			complete: function(data) {
				$('#'+variant.id).empty().append('<option selected value="na">Select Variant</option>');
				$.each(data.responseJSON, function(i, item) {
					$('#'+variant.id).append('<option value="'+item.variantName+'" >'+item.variantName+'</option>');
				});
			}
		});
	}
	
	
	function fillCarDropDown(url,parentId,targetId,parameter,itemType){
		$.ajax({
			url: "/AdminModule/"+url,
			type: 'POST',
			dataType: 'JSON',
			async: false,
			data:parameter+"="+$('#'+parentId).val(),
			contentType: 'application/x-www-form-urlencoded',
			complete: function(data) {
				$('#'+targetId).empty();
				$.each(data.responseJSON, function(i, item) {
					$('#'+targetId).append('<option value="'+item[itemType]+'" >'+item[itemType]+'</option>');
				});
	
			}
		});
	
	}
	
	function makeAjaxCall(url,parameters){
		var responseData ;
		$('#wait').show();
		$.ajax({
			headers : {
				//'Accept' : 'application/json',
				//'Content-Type' : 'application/json',
				'X-CSRF-TOKEN' : $('#csrfToken').val()
			},
			url: "/AdminModule/"+url,
			type: 'POST',
			dataType: 'JSON',
			async: false,
			data:parameters,
			contentType: 'application/x-www-form-urlencoded',
			complete: function(data) {
				if (!$.isEmptyObject(data)) {
					responseData =  data.responseText;
				}	
				$('#wait').hide();
			}
		});
		return responseData;
	
	}
	
	function addOffers(formParentDivID) {
		$('#offers').val(JSON.stringify(tableToJSON));
		if (confirm("Are You Sure You Want Add Offer!")) {
			$('#offerEngine').ajaxSubmit({
				dataType: 'json',
				contentType: 'application/x-www-form-urlencoded',
				success: addOffersResponse
			});
		}
	
	}
	
	function addOffersResponse(data){
		if (data.status == "success") {
			modalAlertToShowCustomMessage('Offer Added Successfully', 'success');
			resetForm('offerEngine');
			$( '#frameDemo' ).attr( 'src', function ( i, val ) { return val; });
			flag = 0;tableToJSON.length = 0;
		}
	
	}
	
	var glodalResponseData;
	function getOffersTitle() {
		var responseData = makeAjaxCall('getOfferTitle', '');
		glodalResponseData = $.parseJSON(responseData);
		$('#selectOffers').empty().append('<option selected value="na">Select Offer Title</option>');
		$.each($.parseJSON(responseData), function(i, item) {
			$('#selectOffers').append('<option value="' + item.id + '" >' + item.first_offer_title + '</option>');
		});
	}
	
	function getOffers(tableId) {
		if ($('#selectOffers').val() != 'na') {
			$.each(glodalResponseData, function(i, item) {
				if (item.first_offer_title == $.trim($('#selectOffers option:selected').text())) {
					$('#offerDateRange').daterangepicker({locale: {format: 'DD/MM/YYYY'},startDate: new Date(item.start_date),endDate: new Date(item.end_date)});
				}
			});
			var table = $("#" + tableId).DataTable({
				oLanguage: {
					sEmptyTable: "No data available",
				},
				"bDestroy": true,
				"bPaginate": true,
				"bLengthChange": false,
				"bFilter": true,
				"bSort": true,
				"bInfo": true,
				"bAutoWidth": false,
				"bJQueryUI": true,
				ajax: {
					url: "/AdminModule/getOfferList",
					type: "POST",
					dataType: 'json',
					dataSrc: "",
					contentType: 'application/x-www-form-urlencoded',
					data: function(d) {
						d.id = $('#selectOffers').val();
					}
				},
				columns: [{
					data: "offer_key"
				}, {
					data: "offer_value"
				}, {
					defaultContent: "<div class='text-center'><div class='btn-group'><button class='btn btn-info information' data-trigger='hover' id='edit' data-placement='left' href='#offerModal' data-toggle='modal' title='Edit Offer'><i class='fa fa-edit'></i></button></div></div>"
				}],
				error: function() {
					alert("error");
				}
			});
			$('#' + tableId).unbind("click");
			$('#' + tableId).on("click", "button", function() {
				var response = table.row($(this).parents("tr")).data();
				$('#offerKeyModal').val(response.offer_key);
				$('#offerValueModal').val(response.offer_value);
				$('#currentOfferId').val(response.id);
			});
			$('#' + tableId).parent().parent().parent().parent().parent().parent().removeClass('hidden');
		} else {
			modalAlertToShowCustomMessage("Please Select Offer Title ", 'warning');
			return false;
		}
	}
	
	function updateOfferDate(targetId){
		if ($('#'+targetId).val() !== '') {
			var parameter = 'id='+$('#selectOffers').val()+'&date='+$('#'+targetId).val();
			var response = makeAjaxCall('updateOfferDate',parameter);
			if ($.parseJSON(response).status == 'success') {
				modalAlertToShowCustomMessage('Offer Date Updated', 'success');
			};
	
		}
	}
	
	function updateOffer(){
		if (confirm("Are You Sure You Want Update Offer!")) {
			$('#offerModal').modal('hide');
			$('#modalUpdateOffer').ajaxSubmit({
				dataType: 'json',
				contentType: 'application/x-www-form-urlencoded',
				success: updateOfferResponse
			});
		}
	
	}
	
	function updateOfferResponse(data){
		if (data.status == "success") {
			getOffers('offerList');
			modalAlertToShowCustomMessage('Offer Updated Successfully', 'success');
	
		}
	
	}
	
	function collapse() {
		$('.collapse').off();
		$('.collapse').on('shown.bs.collapse', function() {
			uploadImages();
		}).on('hidden.bs.collapse', function() {
		});
	}
	
	function uploadImages(){
		var paratosend = "";
		var dropzoneinitId = "";
		var uploadImageType = "";
		if ($('#collapse1').is(':visible')) {
			uploadImageType = "comparesponsoredkit";
			paratosend = $('#sponserModelName option:selected').val();
			dropzoneinitId = "my-dropzone";
		}
	
		$('div #addOfferUpload').dropzone({
			addRemoveLinks: true,
			maxFiles: 1,
			url: "/AdminModule/save",
			init: function() {
				var myAwesomeDropzone = this;
				this.on("success", function(file, response) {
					uploadImagesResponse(response);
				});
				this.on("error", function(files, response) {
					alert("Error");
				});
			}
		});
	}
	
	function uploadImagesResponse(data){
	
		if (data.status == "success") {
			modalAlertToShowCustomMessage('Image Uploaded Successfully', 'success');
	
		}
	
	}
	
	var flag = 0;
	var tableToJSON  = [];
	function offerPreview(formParentDivID){
		$('#offerSave').prop('disabled', true);
		var status = findMandatoryFormInputs(formParentDivID);
		var statusSelect = findMandatorySelectInputs(formParentDivID);
		addInputWithError(status[0]);
		if (!$.isEmptyObject(status[0])) {
			modalAlertForFormInput(status[0]);
			return false;
		}
		addInputWithError(statusSelect[0]);
		if (!$.isEmptyObject(statusSelect)) {
			modalAlertForFormInput(statusSelect[0]);
			return false;
		}
		if ($('#offerDescription').val() == '') {
			addInputWithError('offerDescription');
			modalAlertToShowCustomMessage('Please Enter Offers Description ', 'error');
			return false;
		};
		var tabledata ;
		item = {}
		$('#frameDemo').contents().find("div #firstOfferTitle").text($('#offerTitle').val());
		$('#frameDemo').contents().find("#secondOfferTitle").empty().append('<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-icon-carat-u ui-btn-icon-right ui-btn-inherit">'+$('#secondOfferTitle').val()+'<span class="ui-collapsible-heading-status"> click to collapse contents</span></a>');
		$('#frameDemo').contents().find("#descriptionOfferTitle").text($('#offerDescription').val());
	
		if(flag === 0){
			tabledata = '<tr><td width="21%" align="left" valign="middle">'+$('#column0').val()+'</td><td width="79%" align="left" valign="middle">'+$('#column1').val()+'</td></tr>';
			$('#frameDemo').contents().find("#offerTable").empty().append(tabledata);
			flag = 1;
			item ["offerKey"] = $('#column0').val();
			item ["offerValue"] = $('#column1').val();
	
			tableToJSON.push(item);
		}else{
			$('#frameDemo').contents().find("#offerTable").append('<tr><td width="21%" align="left" valign="middle">'+$('#column0').val()+'</td><td width="79%" align="left" valign="middle">'+$('#column1').val()+'</td></tr>');
			item ["offerKey"] = $('#column0').val();
			item ["offerValue"] = $('#column1').val();
			tableToJSON.push(item);
		}
		item = {}
		item [$('#column0').val()] = $('#column0').val();
		$('#column0').val('');
		$('#column1').val('');
		$('#offerSave').prop('disabled', false);
	
	}
	
	function changeVehicleAndNotificationType(divId,el){
		if(undefined != el && undefined != el.value){
			 var arr = [];
			$('#'+divId+' input.app:checkbox:checked').each(function () {
				arr.push($(this).val());
		    });
			if(arr.length==0){
				$('#vehical').hide();
				$('#eventTagType').hide();
				$('#notification').hide();
				$('#filterPanel').hide(); 	
				$('#carFields').hide();
				$('#footer').hide();
				$('#optradio1').val('');
				
			}	
			else if($.inArray('106', arr) == -1)	{		
				$('#vehical').show();
				$('#vehicleTypeRadio2').show();
				$('#notification').show();
				getemailId();getEventTagForBike('1');
				
			}
			else{
				$('#vehical').show();
				$('#vehicleTypeRadio2').hide();
				$('#notification').show();
				getemailId();getEventTagForBike('1');
			}
		
			
			$('#appType').val(el.value);
			$('#vehicleType').val("1");
			//$('#submitgenerateNotifications #vehical').removeClass('hidden');
	
		}
	}
	
	/*function changeVehicleAndNotificationType(divId,el){
		if(undefined != el && undefined != el.value){
			
			$('#'+divId+' input.docType:checkbox:checked').each(function () {
				arr.push($(this).val());
		    });
			
			alert(arr);
			
			if(el.value == '106' || el.value=='all'){
				$('#vehical').show();
				$('#vehicleTypeRadio2').attr('disabled','disabled');
				
			}
			else if(el.value == '107' ||el.value == '200'){
				$('#vehical').show();
				$('#vehicleTypeRadio2').attr('disabled','false');
				
			}
			//$('#appType').val(el.value);
			$('#vehicleTypeRadio1').click();
			//$('#vehicleType').val("1");
			//$('#submitgenerateNotifications #vehical').removeClass('hidden');
	
		}
	}*/
	function changeVehicleAndNotificationTypeDup(el){
		if(undefined != el && undefined != el.value){
			if(el.value == '106' || el.value=='all'){
				$('#vehical1 #vehicleTypeRadio4').attr('disabled','disabled');
				
			}
			else if(el.value == '107'){
				$('#vehical1 #vehicleTypeRadio4').removeAttr('disabled');
				
			}
			$('#appType1').val(el.value);
			$('#vehical1 #vehicleTypeRadio3').click();
			$('#vehicleType1').val("1");
			$('#scheduleNotifications #vehical1').removeClass('hidden');
	
		}
	}
	
	function submitDumpDBRequest(formParentDivID) {
	
	    var status = checkCustomFormFieldIsEmpty(formParentDivID, findMandatoryFormInputs(formParentDivID));
	
	    addInputWithError(status[0]);
	
	    if (status[1]) {
	        modalAlertForFormInput(status[0]);
	        return false;
	    }
	
	            $('#submitDataBaseDump').ajaxSubmit({
	               // contentType: 'application/x-www-form-urlencoded',
	                //processData: false,  // tell jQuery not to process the data
	               // contentType: false,  // tell jQuery not to process the data
	                success: submitDumpDBResponse
	            });
	   
	}
	function submitDumpDBResponse(content) {
	
	   // resetForm('submitDataBaseDump');
	
	    if(content==null || content=="")
	    {
	        $( "#dump-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage("Something went wrong.Please try again.", 'warning');
	    }
	    else{
	        var download = document.getElementById('dump-download-link');
	        download.setAttribute('href', content);
	        download.setAttribute('download', 'dump.sql');
	        $('#submitDumpBtn').addClass('hidden');
	        $( "#dump-download-link" ).removeClass( "hidden" );
	        modalAlertToShowCustomMessage('Dump Generated Successfully.Please click on Download button', 'success');
	    }
	
	}
	function submitCredentialRequest(formParentDivID) {
	$('#loaderImg').show();
	$('#credentialMailerForm').ajaxSubmit({
	    // contentType: 'application/x-www-form-urlencoded',
	     //processData: false,  // tell jQuery not to process the data
	    // contentType: false,  // tell jQuery not to process the data
	     success: submitCredentialMailerResponse
	 });
	
	}
	
	
	function submitCredentialMailerResponse(content) {
	
		   // resetForm('submitDataBaseDump');
		$('#loaderImg').hide();
		    if(content==null || content=="")
		    {
		        modalAlertToShowCustomMessage("Something went wrong.Please try again.", 'warning');
		    }
		    else{
		        modalAlertToShowCustomMessage('Mail sent successfully', 'success');
		    }
	
	}
	
	function submitInsuranceImport(formParentDivID) {
	
		if($("#file-1")[0].files.length < 1){
			modalAlertToShowCustomMessage("Please upload excel file", 'warning');
			return false;
		}
		
		swal({
	        title: "Are you sure?",
	        text: "You are uploading insurance fresh leads datasheet.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {
		        
		    	if (isConfirm) {
		    		
//				$('#wait').show();
		    		var sock = new SockJS('/AdminModule/greeting');
		    		var stompClient = Stomp.over(sock);
		    		//Callback function to be called when stomp client is connected to server
		    		var connectCallback = function() {
		    		  stompClient.subscribe('/topic/insurance-lead-import-progress', renderProgress);
		    		}; 
		    		 
		    		
		    		
		    		// Callback function to be called when stomp client could not connect to server
		    		var errorCallback = function(error) {
		    		  alert(error.headers.message);
		    		};
		    		 
		    		
		    		// Connect to server via websocket
		    		stompClient.connect("",connectCallback, errorCallback);
			
				var file = document.getElementById('file-1').files[0]
			var key = "vahangyan";
			// Uses different reader for all files
			var reader = new FileReader();
	
			reader.onload = function() {
				
				var salt = CryptoJS.lib.WordArray.random(128/8);
				var iv = CryptoJS.lib.WordArray.random(128/8);
	//			console.log('salt  '+ salt );
	//			console.log('iv  '+ iv );
				
				// To construct our multipart form data request,
				// We need a separator to define each part of the request
				var boundary = "blob";
				
				var data = AESFileEncryption(key, salt, iv, file, reader, boundary, "file1");
				$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
				$.ajax({
					headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
					url: "/AdminModule/insuranceImport",
					type: 'POST',
					processData: false,  // tell jQuery not to process the data
					contentType: false,  // tell jQuery not to process the data
					data:data,
					success:function(response){
						$('#wait').hide();
						$("#loaderid").html(0);
						stompClient.disconnect();
						resetForm('submitInsuranceImport');
						if(response == null || response == ""){
							$( "#insurance-excel-download-link").hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
						
						}
						else if(response.indexOf('SUCCESS') != -1)
						{
							$( "#insurance-excel-download-link").hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
						}
						else if(response.indexOf('FAILURE') != -1)
						{
							$( "#insurance-excel-download-link").hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Oops some error occurred. Please do not enter blank excel file', 'warning');
						}
						else{
							var download = document.getElementById('insurance-error-excel-download-link');
							var arrayData= response.split("~");
							download.setAttribute('href', arrayData[3]);
							console.log(arrayData[3]);
							download.setAttribute('download', 'LogFile.xlsx');
							$('#submitInsuranceImportBtn').hide();
							$( "#insurance-excel-download-link" ).show();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
									'. Please go through download link for more detail.', 'warning');
	
						}
					}, 
					error: function(jqXHR, textStatus, errorThrown) {
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);
	
					}
				});
			}
	
			reader.readAsDataURL(file);
		}
		}/*,
	    function() {
	    	modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');
	      }*/
	    );	    	
	}
	
	function submitCustomNotificationImport(formParentDivID) {
	
		if($("#file-1")[0].files.length < 1){
			modalAlertToShowCustomMessage("Please upload excel file", 'warning');
			return false;
		}
		
		swal({
	        title: "Are you sure?",
	        text: "You Want Send Custom Notifications.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {

			if (isConfirm) {

				$('#wait').show();

				var formData = new FormData();
				var file = document.getElementById('file-1').files[0]
				formData.append('file',file );
		    	$.ajax({
						headers : {
							'X-CSRF-TOKEN' : $('#csrfToken').val(),'Content-Type': undefined
						},
						url : "/AdminModule/sendCustomNotifications",
						type : 'POST',
						async : false,
						processData : false, // tell jQuery not to process the data
						contentType : false, // tell jQuery not to process the data
						data : formData,
						success : function(response) {
							$('#wait').hide();
							resetForm('submitCustomNotification');
							console.log(response);
							if(response == null || response == ""){
								$( "#customNot-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
							}
							else if(response.indexOf('SUCCESS') != -1)
							{
								$( "#customNot-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Notification Excel file has been processed successfully', 'success');
							}
							else if(response.indexOf('FAILURE') != -1)
							{
								$( "#customNot-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Oops Some error occurred. Please do not upload blank excel file', 'warning');
							}
							else{
								var download = document.getElementById('custNot-error-excel-download-link');
								var arrayData= response.split("~");
								download.setAttribute('href', arrayData[3]);	
								console.log(arrayData[3]);
								download.setAttribute('download', 'LogFile.xlsx');
								$('#submitCustNotBtn').hide();
								$( "#customNot-excel-download-link" ).show();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
										'. Please go through download link for more detail.', 'warning');
		
							}
						}
					});
				
			}

	    });
	}
	
	function submitCustomNotificationImportResponse(content) {
		$('#wait').hide();
	    resetForm('submitCustomNotification');
	    
	    
	    if(content == null || content == ""){
	    	 modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
	    }
	    else if(content.indexOf('SUCCESS') != -1)
	    {
	        $( "#notification-excel-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
	    }
	    else{
	        var download = document.getElementById('notification-excel-download-link');
	        var arrayData= content.split("~");
	        download.setAttribute('href', arrayData[3]);
	        download.setAttribute('download', 'LogFile.xlsx');
	        $( "#notification-excel-download-link" ).removeClass( "hidden" );
	        modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Notifications Sent successfully: '+arrayData[2]+
	        		'. Please go through download link for more detail.', 'warning');
	
	    }
	
	}
	function submitInsuranceImportResponse(content) {
		$('#showInsuranceImport #loaderImg').hide();
	    resetForm('submitInsuranceImport');
	    if(content == null || content == ""){
	    	 modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
	    }
	    else if(content.indexOf('SUCCESS') != -1)
	    {
	        $( "#excel-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
	    }
	    else{
	        var download = document.getElementById('excel-download-link');
	        var arrayData= content.split("~");
	        download.setAttribute('href', arrayData[3]);
	        download.setAttribute('download', 'LogFile.xlsx');
	        $( "#excel-download-link" ).removeClass( "hidden" );
	        modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
	        		'. Please go through download link for more detail.', 'warning');
	
	    }
	
	}
	
	function submitInsuranceStatusImport(formParentDivID) {
	
		if($("#file-1")[0].files.length < 1){
			modalAlertToShowCustomMessage("Please upload excel file", 'warning');
			return false;
		}
		
		swal({
	        title: "Are you sure?",
	        text: "You are uploading insurance policy issued datasheet.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {
		 if (isConfirm) {
				$('#wait').show();
	
			var file = document.getElementById('file-1').files[0]
			var key = "vahangyan";
			// Uses different reader for all files
			var reader = new FileReader();
	
			reader.onload = function() {
				
				var salt = CryptoJS.lib.WordArray.random(128/8);
				var iv = CryptoJS.lib.WordArray.random(128/8);
	//			console.log('salt  '+ salt );
	//			console.log('iv  '+ iv );
				
				// To construct our multipart form data request,
				// We need a separator to define each part of the request
				var boundary = "blob";
				
				var data = AESFileEncryption(key, salt, iv, file, reader, boundary, "insuranceStatusFile");
				$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
				$.ajax({
					headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
					url: "/AdminModule/insurancePolicyStatusUpload",
					type: 'POST',
					processData: false,  // tell jQuery not to process the data
					contentType: false,  // tell jQuery not to process the data
					data:data,
					success:function(response){
						$('#wait').hide();
						resetForm('submitInsuranceStatusImport');
						if(response == null || response == ""){
							$( "#insurance-status-excel-download-link" ).hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
						}
						else if(response.indexOf('SUCCESS') != -1)
						{
							$( "#insurance-status-excel-download-link" ).hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
						}
						else if(response.indexOf('FAILURE') != -1)
						{
							$( "#insurance-status-excel-download-link" ).hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Some error occurred.Please do not enter blank excel file', 'warning');
						}
						else{
							var download = document.getElementById('insurance-error-excel-download-link');
							var arrayData= response.split("~");
							download.setAttribute('href', arrayData[3]);
							console.log(arrayData[3]);
							download.setAttribute('download', 'LogFile.xlsx');
							$('#submitInsStatusBtn').hide();
							$( "#insurance-status-excel-download-link" ).show();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
									'. Please go through download link for more detail.', 'warning');
	
						}
					}, 
					error: function(jqXHR, textStatus, errorThrown) {
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);
	
					}
				});
			}
	
			reader.readAsDataURL(file);
		 }
	    }/*,
	    function() {
	    	modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');
	      }*/
	    );
	}
	
	function submitInsuranceStatusImportResponse(content) {
		$('#showInsuranceStatusImport #loaderImg').hide();
	    resetForm('submitInsuranceStatusImport');
	    if(content == null || content == ""){
	    	 modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
	    }
	    else if(content.indexOf('SUCCESS') != -1)
	    {
	        $( "#insurance-status-excel-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
	    }
	    else{
	        var download = document.getElementById('insurance-status-excel-download-link');
	        var arrayData= content.split("~");
	        download.setAttribute('href', arrayData[3]);
	        download.setAttribute('download', 'LogFile.xlsx');
	        $('#submitInsStatusBtn').addClass('hidden');
	        $( "#insurance-status-excel-download-link" ).removeClass( "hidden" );
	        modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
	        		'. Please go through download link for more detail.', 'warning');
	
	    }
	
	}
	function AESFileEncryption(key, salt, iv, file, fileReaderObj, boundary, formDataName){
	
		var key128Bits100Iterations = CryptoJS.PBKDF2(key, salt, { keySize: 128/32, iterations: 100 });
		console.log( 'key128Bits100Iterations '+ key128Bits100Iterations);
		var encryptedData = CryptoJS.AES.encrypt(fileReaderObj.result.match(/,(.*)$/)[1], key128Bits100Iterations, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
	
		// Store our body request in a string.
		var data = "";
	
		// Start a new part in our body's request
		data += "--" + boundary + "\r\n";
	
		// Describe it as form data
		data += 'content-disposition: form-data; '
			// Define the name of the form data
			+ 'name="' + formDataName + '"; '
			// Provide the real name of the file
			+ 'filename="'     + file.name + '"\r\n';
		// And the MIME type of the file
		data += 'Content-Type: ' + file.type + '\r\n';
	
		// There's a blank line between the metadata and the data
		data += '\r\n';
	
		// Append the binary data to our body's request
		data += encryptedData + '\r\n';
	
		// Once we are done, "close" the body's request
		data += "--" + boundary + "--";
	
		return data;
	}
	
	function editUserInformation(formParentDivID) {
		if($('#editreportingManagerEcode').val() == $('#editemployeeCode').val()){
			modalAlertToShowCustomMessage("Employee Code cannot be same as Reporting manager Ecode", 'warning');
			return false;
		}	
		
		var status = checkCustomFormFieldIsEmpty(formParentDivID, findMandatoryFormInputs(formParentDivID));
		addInputWithError(status[0]);
		if (status[1]) {
			modalAlertForFormInput(status[0]);
			return false;
		}
		
		/*if($('#departmentTag').val() == undefined || $('#departmentTag').val() == 'all'){
				modalAlertToShowCustomMessage("Please select department name", 'warning');
				return false;
		}
		if($('#branchlist').val() == undefined || $('#branchlist').val() == 'all'){
			modalAlertToShowCustomMessage("Please select branch name", 'warning');
			return false;
	    }*/
		
		/*if($('input[name="isLearningAvlbl"][value="1"]').is(':checked')){
			if($('#editdept_broad_category').val() == undefined || $('#editdept_broad_category').val() == ''){
				modalAlertToShowCustomMessage("Please select department broad category for Elearning", 'warning');
				return false;
			}
		}*/
		if ($('#editemailId').val() == '' || validateEmailId($('#editemailId').val())) {
			if (confirm("Are You Sure You Want Update User Information!")) {				
				SubForm($('#submiteditUserInfo'),editUserInformationResponse)
			}
		} else {
			modalAlertToShowCustomMessage("Enter Proper Email Id", 'warning');
		}
	}
	function approveRejectUserInformation(formParentDivID,approvalFlag,callbackMethod) {
		if($('#editreportingManagerEcode').val() == $('#editemployeeCode').val()){
			modalAlertToShowCustomMessage("Employee Code cannot be same as Reporting manager Ecode", 'warning');
			return false;
		}
		if ($('#editemailId').val() == '' || validateEmailId($('#editemailId').val())) {
			
			var text='';
			if(approvalFlag == 1){
				text='Approve ';
				if($('#approvalFlag').val() == 1){
					text+='Addition Of ';
				}
				else if($('#approvalFlag').val() == 4){
					text+='Updation Of ';
				}
				if (confirm("Are You Sure You Want to "+text+"User!")) {
					if($('#approvalFlag').val() == 1){
						if(approvalFlag == 1){
							$('#approvalFlag').val(2);
						}
						else{
							$('#approvalFlag').val(3);
						}
					}
					else if($('#approvalFlag').val() == 4){
						if(approvalFlag == 1){
							$('#approvalFlag').val(5);
						}
						else{
							$('#approvalFlag').val(6);
						}
					}
					if(callbackMethod != undefined && callbackMethod =='viewUAMApprovalRequests')
					SubForm($("#"+formParentDivID),viewUAMApprovalRequests);
					else
						SubForm($("#"+formParentDivID),editUserInformationResponse);
				}
			}
			else{
				text='Reject ';
				if($('#approvalFlag').val() == 1){
					text+='Addition Of ';
				}
				else if($('#approvalFlag').val() == 4){
					text+='Updation Of ';
				}
				text = "Are You Sure You Want to "+text+"User!";
				$('#hiddenFormId').val($("#"+formParentDivID).attr('id'));
				$('#reject').modal('show');
				$('#modelText').text(text);
			}
			
			
			/*var text='';
			if(approvalFlag == 1){
				text='Approve ';
			}
			else{
				text='Reject ';
			}
			if($('#approvalFlag').val() == 1){
				text+='Addition Of ';
			}
			else if($('#approvalFlag').val() == 4){
				text+='Updation Of ';
			}
			if (confirm("Are You Sure You Want to "+text+"User!")) {
				if($('#approvalFlag').val() == 1){

					if(approvalFlag == 1){
						$('#approvalFlag').val(2);
					}
					else{
						$('#approvalFlag').val(3);
					}
				}
				else if($('#approvalFlag').val() == 4){

					if(approvalFlag == 1){
						$('#approvalFlag').val(5);
					}
					else{
						$('#approvalFlag').val(6);
					}
				}

				$('#submiteditUserInfo').ajaxSubmit({
					clearForm:true,
					dataType: 'json',
					contentType: 'application/x-www-form-urlencoded',
					success: editUserInformationResponse
				});
				return false;
				if(callbackMethod != undefined && callbackMethod =='viewUAMApprovalRequests')
				SubForm($("#"+formParentDivID),viewUAMApprovalRequests);
				else
					SubForm($("#"+formParentDivID),editUserInformationResponse);
			}*/
		} else {
			modalAlertToShowCustomMessage("Enter Proper Email Id", 'warning');
		}
	}
	
	function submitRejectUserInfo2(approvalFlag){
		
		if($.trim($('#rejectRemark').val())==''){
			alert('Please enter reason of rejection!');
			$('#rejectRemark').val('');
			return;
		}
		
		if($('#hiddenFormId').val() != '' && $('#rejectRemark').val() != ''){
		var form = $('#'+ $('#hiddenFormId').val());
		$(form.find('input[name="rejectRemark"]')).val($('#rejectRemark').val());
		if(form.find('input[name="approvalFlag"]').val() == 1){
				form.find('input[name="approvalFlag"]').val(3);
		}
		else if(form.find('input[name="approvalFlag"]').val() == 4){
				form.find('input[name="approvalFlag"]').val(6);
		}
		$('#hiddenFormId').val('');
		SubForm(form,editUserInformationResponse);
		}
	}
	
		function approveRejectUserInfoDirect(obj,approvalFlag) {
				var text='';
				if(approvalFlag == 1){
					text='Approve ';
					if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 1){
						text+='Addition Of ';
					}
					else if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 4){
						text+='Updation Of ';
					}
					if (confirm("Are You Sure You Want to "+text+"User!")) {
						if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 1){

							if(approvalFlag == 1){
								$(obj).parents('form').find('input[name="approvalFlag"]').val(2);
							}
							else{
								$(obj).parents('form').find('input[name="approvalFlag"]').val(3);
							}
						}
						else if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 4){

							if(approvalFlag == 1){
								$(obj).parents('form').find('input[name="approvalFlag"]').val(5);
							}
							else{
								$(obj).parents('form').find('input[name="approvalFlag"]').val(6);
							}
						}
						SubForm($(obj).parents('form'),editUserInformationResponse);
					}
					
					
				}
				else{
					text='Reject ';
					if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 1){
						text+='Addition Of ';
					}
					else if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 4){
						text+='Updation Of ';
					}
					
					text = "Are You Sure You Want to "+text+"User!";
					$('#hiddenFormId').val($(obj).parents('form').attr('id'));
					$('#reject').modal('show');
					$('#modelText').text(text);
					
				}
				
		}
		
		function submitRejectUserInfo(approvalFlag){
			
			if($.trim($('#rejectRemark').val())==''){
				alert('Please enter reason of rejection!');
				$('#rejectRemark').val('');
				return;
			}
			
			if($('#hiddenFormId').val() != '' && $('#rejectRemark').val() != ''){
			var form = $('#'+ $('#hiddenFormId').val());
			$(form.find('input[name="rejectRemark"]')).val($('#rejectRemark').val());
			if(form.find('input[name="approvalFlag"]').val() == 1){
					form.find('input[name="approvalFlag"]').val(3);
			}
			else if(form.find('input[name="approvalFlag"]').val() == 4){
					form.find('input[name="approvalFlag"]').val(6);
			}
			$('#hiddenFormId').val('');
			SubForm(form,editUserInformationResponse);
			}
		}
	
	/*function approveRejectUserInfoDirect(obj,approvalFlag) {
		var text='';
		if(approvalFlag == 1){
			text='Approve ';
		}
		else{
			text='Reject ';
		}
		if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 1){
			text+='Addition Of ';
		}
		else if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 4){
			text+='Updation Of ';
		}
		if (confirm("Are You Sure You Want to "+text+"User!")) {
			if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 1){

				if(approvalFlag == 1){
					$(obj).parents('form').find('input[name="approvalFlag"]').val(2);
				}
				else{
					$(obj).parents('form').find('input[name="approvalFlag"]').val(3);
				}
			}
			else if($(obj).parents('form').find('input[name="approvalFlag"]').val() == 4){

				if(approvalFlag == 1){
					$(obj).parents('form').find('input[name="approvalFlag"]').val(5);
				}
				else{
					$(obj).parents('form').find('input[name="approvalFlag"]').val(6);
				}
			}

			$('#submiteditUserInfo').ajaxSubmit({
					clearForm:true,
					dataType: 'json',
					contentType: 'application/x-www-form-urlencoded',
					success: editUserInformationResponse
				});
				return false;
			SubForm($(obj).parents('form'),editUserInformationResponse);
		}
		}*/
	
	
	function editUserInformationResponse(data) {
		if (data.status_code == 101 || data.status_code==201) {
			modalAlertToShowCustomMessage(data.message, 'warning');
		} else if (data.status_code == 200) {
			//modalAlertToShowCustomMessage(data.message, 'success');
			resetForm('submiteditUserInfo');
			swal(
					{
						title : "Edit User",
						text : data.message,
						type : "success",
					}).then(function() {
						location.reload();
						
			});
			
		} 
		
	}
	
	function fetchUserInformation(){
		if($.trim($('#empCode').val()) != ''){
			$.ajax({
				url: "/AdminModule/fetchUserInformation",
				type: 'POST',
				//async:false,
				//dataType: 'JSON',
				data:{
					e_code:$('#empCode').val(),
					_csrf:$('#csrfToken').val()
					
				},
				success:function(response){
					if(null != response && undefined != response && response != ''){
					var data= $.parseJSON(response);
					//console.log("user information=="+data);				
					$('#editemailId').val(data.emailId);
					$('#edituserName').val(data.userName);
					$('#editemployeeCode').val(data.employeeCode);
					$('#editmobileNo').val(data.contactDetails);
					$('#editpassword').val(data.password);
					$('#editreportingManager').val(data.reportingManager);
					$('#editdesignation').val(data.designation);
					$('#editdepartment').val(data.department);
					$('#editdepartment_name').val(data.department_name);
					$('#editlocation').val(data.location);
					$('#hiddenLocation').val(data.location);
					$('#editHub').val(data.hub);
					$('#editstate').val(data.state);
					$('#hiddenState').val(data.state);
					$('#editregion').val(data.region);
					$('#editreportingManagerEcode').val(data.reporting_manager_ecode);
					$('#editsupervisorDet').val(data.supervisorContactDetails);
					$('#editalternateEmail').val(data.alternateEmail);
					$('#editrole').val(data.role);
					$('#hiddenRole').val(data.role);
					$('#branchCodeEdit').val(data.branchCode);
					$('#branchNameEdit').val(data.branchName);
					$('#editdept_broad_category').val(data.deptBroadCategory);	
					$('#hdfcUserId').val(data.hdfcUserId);
					
					// Set isELearing flag
					if(data.isLearningAvlbl==true){
						$('input[name="isLearningAvlbl"][value="1"]').prop('checked', true);
					}
					else{
						$('input[name="isLearningAvlbl"][value="0"]').prop('checked', true);
					}					
					
					$('#failedAttempts').val(data.failedAttempts);
					$('#hiddenPassword').val(data.password);
					$('#approvalFlag').val(data.approvalFlag);
					 $('select[name="subState"] option[value="'+data.subState+'"]').prop('selected','selected');
				/*	 $('select[name="isDelete"] option[value="'+data.isActive+'"]').prop('selected','selected');
					 $('select[name="isDormant"] option[value="'+data.isActive+'"]').prop('selected','selected');*/
					/*$('#container').removeClass('off');
					$('#deleteContainer').removeClass('off');*/
				//	$('#lockedContainer').removeClass('off');
					/*if(data.isActive == false){
						$('#container').addClass('off');						
					}
					else if(data.isActive == true){
						$('#container').removeClass('off');						
					}*/
					/*if(data.failedAttempts > 5){
						$('#lockedContainer').addClass('on');						
					}*/
					
					$('#editUserBasicDiv').hide();
					if($('#empCode').val() == $('#eCodeHomePage').val() || $('#authorityVal').val()== 'UAM_CHECKER'){
						$('#approveBtn').hide();
						$('#rejectBtn').hide();
						$('#submitEditBtn').show();
					}
					$('#editUserInfo').show('slow');
					
					
					//enable/disable fields.
					if(data.subState!=1){
						/*$('#editemailId').attr("disabled", "disabled"); 
						$('#edituserName').attr("disabled", "disabled"); 
						$('#editemployeeCode').attr("disabled", "disabled"); 
						$('#editmobileNo').attr("disabled", "disabled"); 
						$('#editpassword').attr("disabled", "disabled"); 
						$('#editreportingManager').val(data.reportingManager);
						$('#editdesignation').attr("disabled", "disabled"); 
						$('#editdepartment').val(data.department);
						$('#editdepartment_name').val(data.department_name);
						$('#editlocation').prop('disabled', 'disabled');
						$('#editHub').attr("disabled", "disabled"); 
						$('#editstate').val(data.state);defualt disable
						$('#editregion').attr("disabled", "disabled"); 
						$('#editreportingManagerEcode').attr("disabled", "disabled"); 
						$('#editsupervisorDet').attr("disabled", "disabled"); 
						$('#editalternateEmail').attr("disabled", "disabled"); 
						$('#editrole').prop('disabled', 'disabled');
						$('#branchCodeEdit').val(data.branchCode);
						$('#branchNameEdit').val(data.branchName);
						$('#editdept_broad_category').val(data.deptBroadCategory);	
						$('#hdfcUserId').attr("disabled", "disabled"); 
						$('#departmentTag').prop('disabled', 'disabled');
						$('#branchlist').prop('disabled', 'disabled');
						$('input[name=isLearningAvlbl]').attr("disabled",true);*/
						
						$('#editemailId').attr('readonly', true); 
						$('#edituserName').attr('readonly', true); 
						$('#editemployeeCode').attr('readonly', true); 
						$('#editmobileNo').attr('readonly', true); 
						$('#editpassword').attr('readonly', true); 
						$('#editreportingManager').val(data.reportingManager);
						$('#editdesignation').attr('readonly', true); 
						$('#editdepartment').val(data.department);
						$('#editdepartment_name').val(data.department_name);
						$('#editlocation').prop('disabled', 'disabled');
						$('#editHub').attr('readonly', true); 
						/*$('#editstate').val(data.state);*//*defualt disable*/
						$('#editregion').attr('readonly', true); 
						$('#editreportingManagerEcode').attr('readonly', true); 
						$('#editsupervisorDet').attr('readonly', true); 
						$('#editalternateEmail').attr('readonly', true); 
						$('#editrole').prop('disabled', 'disabled');
						$('#branchCodeEdit').val(data.branchCode);
						$('#branchNameEdit').val(data.branchName);
						$('#editdept_broad_category').val(data.deptBroadCategory);	
						$('#hdfcUserId').attr('readonly', true); 
						$('#departmentTag').prop('disabled', 'disabled');
						$('#branchlist').prop('disabled', 'disabled');
						$('input[name=isLearningAvlbl]').attr('disabled', true);
						
					}
					
					
					}
					else{
						modalAlertToShowCustomMessage("User Does Not Exist in the system", 'warning');
					}
					
					console.log(data);
					
					// Set Department name										
					if(data.departmentId == undefined || data.departmentId=="" || data.departmentId==null){
						$('#departmentTag').val("");
						$('#hiddenDepartmentId').val("");
					}
					else{
						$('#departmentTag').val(data.departmentId);	
						$('#hiddenDepartmentId').val(data.departmentId);
					}
					
					// Set branch name				
					if(data.branchId == undefined || data.branchId=="" || data.branchId==null){
						$('#branchlist').val("");
						$('#hiddenBranchId').val();
					}
					else{
						$('#branchlist').val(data.branchId);
						$('#hiddenBranchId').val(data.branchId);
					}					
				}
			});
		}
		else{
			$('#empCode').val('');
			modalAlertToShowCustomMessage("Please enter employee code", 'warning');
		}
	}

	function submitPDDImport(formParentDivID) {
		
		//alert($("#file-1")[0].files.length);
		
		if($("#file-1")[0].files.length < 1){
			modalAlertToShowCustomMessage("Please upload excel file", 'warning');
			return false;
		}
		
		swal({
	        title: "Are you sure?",
	        text: "You are uploading PDD fresh leads datasheet.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {
		        
		    	if (isConfirm) {
		    		
		    		/* var startUrl = "/AdminModule/pddImport";
		    		   var pollUrl = "/AdminModule/progressBar";
		    		   var poll = new Poll();
		    		   poll.start(startUrl,pollUrl);*/

		    		
		    		var sock = new SockJS('/AdminModule/greeting');
		    		var stompClient = Stomp.over(sock);
		    		
		    		
		    		//Callback function to be called when stomp client is connected to server
		    		var connectCallback = function() {
		    			 	
		    		  stompClient.subscribe('/topic/pdd-lead-import-progress', renderProgress);
		    		};
		    		// Callback function to be called when stomp client could not connect to server
		    		var errorCallback = function(error) {
		    		  alert(error.headers.message);
		    		};
		    		 
		    		// Connect to server via websocket
		    		stompClient.connect("", connectCallback, errorCallback); 
				   // $('#wait').show();
		    		
				var file = document.getElementById('file-1').files[0]
				var key = "vahangyan";
				// Uses different reader for all files
				var reader = new FileReader();
		
				reader.onload = function() {
					
					var salt = CryptoJS.lib.WordArray.random(128/8);
					var iv = CryptoJS.lib.WordArray.random(128/8);
		//			console.log('salt  '+ salt );
		//			console.log('iv  '+ iv );
					
					// To construct our multipart form data request,
					// We need a separator to define each part of the request
					var boundary = "blob";
					
					var data = AESFileEncryption(key, salt, iv, file, reader, boundary, "pddFile");
					$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
					$.ajax({
						headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
						url: "/AdminModule/pddImport",
						type: 'POST',
						processData: false,  // tell jQuery not to process the data
						contentType: false,  // tell jQuery not to process the data
						data:data,
						success:function(response){
							$('#wait').hide();
							$("#loaderid").html(0);
							stompClient.disconnect();
							resetForm('submitPDDImport');
							console.log(response);
							if(response == null || response == ""){
								$( "#pdd-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
							}
							else if(response.indexOf('header-mismatch') != -1){
								$( "#pdd-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Headers Mismatch! Ensure Header Row is same as sample file', 'warning');
							}
							else if(response.indexOf('SUCCESS') != -1)
							{
//								progress();
								$( "#pdd-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
							}
							else if(response.indexOf('FAILURE') != -1)
							{
								$( "#pdd-excel-download-link" ).hide();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Some error occurred. Please do not upload blank excel file And Ensure Header Row is same as sample file', 'warning');
							}
							else if(response.indexOf('WARNING') != -1){
								var download = document.getElementById('pdd-error-excel-download-link');
								var arrayData= response.split("~");
								download.setAttribute('href', arrayData[3]);	
								console.log(arrayData[3]);
								download.setAttribute('download', 'LogFile.xlsx');
								$('#submitPDDImportBtn').hide();
								$( "#pdd-excel-download-link" ).show();
								$("#fileLabel").html('Upload file customer data (.xlsx)');
								modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
										'. Please go through download link for more detail.', 'warning');
		
							}
						}, 
						error: function(jqXHR, textStatus, errorThrown) {
							console.log('jqXHR:');
							console.log(jqXHR);
							console.log('textStatus:');
							console.log(textStatus);
							console.log('errorThrown:');
							console.log(errorThrown);
		
						}
					});
				}
		
				reader.readAsDataURL(file);
		    	}
	    });
		
	}

	function renderProgress(frame) {
		var data = JSON.parse(frame.body);
		$('#wait').show();
		$("#loaderid").html(data);
//		alert(data);
	}

    function progress(){
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
//		headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
		url: "/AdminModule/progressBar",
		type: 'GET',
		processData: false,  // tell jQuery not to process the data
		contentType: false,  // tell jQuery not to process the data
		data:{},
		success:function(response){
			if(response!=undefined && response!=0 && response<11){
				 var id = setInterval(frame, 0.5);
				  function frame() {
					  alert(response);
					  console.log("processdata:::"+response);
					  progress();
				  }
			}else{
				alert("100%");
				
			}
		}, 
		error: function(jqXHR, textStatus, errorThrown) {
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);

		}
	});
}


	function submitPDDImportResponse(content) {
		$('#showPDDImport #loaderImg').hide();
	    resetForm('submitPDDImport');
	    if(content == null || content == ""){
	    	 modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
	    }
	    else if(content.indexOf('SUCCESS') != -1)
	    {
	        $( "#pdd-excel-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
	    }
	    else{
	        var download = document.getElementById('pdd-excel-download-link');
	        var arrayData= content.split("~");
	        download.setAttribute('href', arrayData[3]);
	        download.setAttribute('download', 'LogFile.xlsx');
	        $('#submitPDDImportBtn').addClass('hidden');
	        $( "#pdd-excel-download-link" ).removeClass( "hidden" );
	        modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
	        		'. Please go through download link for more detail.', 'warning');
	}
	
	}
	
	function submitPDDReport(formParentDivID) {
	    
	    var dateSelected="";
	    var eCodeSelected="";
	    var parameter;
	    var target = $('input[name="reportTyperadio"]:checked').val();
	    var activity = $('input[name="activity"]:checked').val();
	    var arr = [];
	    if(target == 'Single'){
	    		
	    	eCodeSelected='';
	    	dateSelected= $('#reportDateTag option:selected').val();
	    	if(dateSelected == null || typeof dateSelected === "undefined" || dateSelected =='')
	    	{
	    		 modalAlertToShowCustomMessage("Date not selected", 'warning');
	    		 return false;
	    	}
	    }
	    else if(target == 'Multiple'){
	    	eCodeSelected='';
	    	var formDate=$('#dateReportFrom').val();
	    	var toDate =$('#dateReportTo').val();
	    	
	    	if(formDate==null || formDate=='')
	    	{
	    		 modalAlertToShowCustomMessage("From Date not selected", 'warning');
	    		 return false;
	    	}
	    	
	    	if(toDate==null || toDate=='')
	    	{
	    		 modalAlertToShowCustomMessage("To Date not selected", 'warning');
	    		 return false;
	    	}
	    	
	    	
	    	if(new Date(formDate) > new Date(toDate))
	    	{
	    		 modalAlertToShowCustomMessage("To Date greater than from date", 'warning');
	    		 return false;
	    	}	
	    	
	    	
	    	dateSelected= formDate+"~"+toDate;
	    }
	    else if(target == 'Ecode'){
	    	dateSelected='';
	    	eCodeSelected=$('#eCodeTag').val();
	    	
	    	if(eCodeSelected == null || typeof eCodeSelected === "undefined" || eCodeSelected =='')
	    	{
	    		 modalAlertToShowCustomMessage("ECode not selected", 'warning');
	    		 return false;
	    	}
	    	
	    }
	    
	    $('input.docType:checkbox:checked').each(function () {
	           arr.push($(this).val());
	    });
	    
	    if(arr.length==0)
	    {
	    	 modalAlertToShowCustomMessage("Document type not selected", 'warning');
    		 return false;
	    }
	    	    
	    
	   // parameter = 'date='+$('#showPDDReportDiv .date > .form-control').val();
	    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	    parameter = 'date='+dateSelected+'&e_code='+eCodeSelected+'&activity='+activity+"&docType="+arr;
	    $('#wait').show();
		var response = makeAjaxCall('pddReport',parameter);
		if(null != response && response != ""){
			var download = document.getElementById('pdd-report-download-link');
			download.setAttribute('href', response);
			download.setAttribute('download', 'LogFile.xlsx');
			$( "#downloadButton" ).show();
			$('#wait').hide();
			modalAlertToShowCustomMessage("Report successfully generated. Please click on download button.", 'success');
		}
		else{
			$('#wait').hide();
			 modalAlertToShowCustomMessage("No data found.", 'warning');	
		}
	}
	
	
	function submitInsuranceReport(formParentDivID) {

		var dateSelected="";
		var eCodeSelected="";
		var parameter;
		$( "#downloadButton" ).hide();
		var reportDate=$('#dateReport').val();

		if(reportDate==null || reportDate=='')
		{
			modalAlertToShowCustomMessage("Date not selected", 'warning');
			return false;
		}
	    parameter = 'date='+reportDate;
	    $('#wait').show();
	    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('insuranceReport',parameter);
		if(null != response && response != ""){
			$('#wait').hide();
			var download = document.getElementById('insurance-report-download-link');
			download.setAttribute('href', response);
			download.setAttribute('download', 'LogFile.xlsx');
			$( "#downloadButton" ).show();
			
			modalAlertToShowCustomMessage("Report successfully generated. Please click on download report button.", 'success');
		}
		else{
			$('#wait').hide();
			 modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');	
		}
	}
	
	
	function submitPDDReportResponse(content) {
	
	    resetForm('submitPDDImport');
	    $( "#pdd-excel-download-link" ).hide();
	    if(content == null || content == ""){
	    	 modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
	    }
	    else if(content.indexOf('SUCCESS') != -1)
	    {
	        $( "#pdd-excel-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
	    }
	    else{
	        var download = document.getElementById('pdd-excel-download-link');
	        var arrayData= content.split("~");
	        download.setAttribute('href', arrayData[3]);
	        download.setAttribute('download', 'LogFile.xlsx');
	        $( "#pdd-excel-download-link" ).show();
	        modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
	        		'. Please go through download link for more detail.', 'warning');
	
	    }
	
	}
	
	function submitPDDStatusImport(formParentDivID) {
	
		if($("#file-1")[0].files.length < 1){
			modalAlertToShowCustomMessage("Please upload excel file", 'warning');
			return false;
		}
		
		swal({
	        title: "Are you sure?",
	        text: "You are uploading PDD closure leads datasheet.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
	    }).then(function(isConfirm) {
	        
	    	if (isConfirm) {   
			$('#wait').show();
	    		var sock = new SockJS('/AdminModule/greeting');
	    		var stompClient = Stomp.over(sock);
	    		//Callback function to be called when stomp client is connected to server
	    		var connectCallback = function() {
	    		  stompClient.subscribe('/topic/pdd-lead-closure-progress', renderProgress);
	    		}; 
	    		// Callback function to be called when stomp client could not connect to server
	    		var errorCallback = function(error) {
	    		  alert(error.headers.message);
	    		};
	    		// Connect to server via websocket
	    		stompClient.connect("",connectCallback, errorCallback);
	 
			var file = document.getElementById('file-1').files[0]
			var key = "vahangyan";
			// Uses different reader for all files
			var reader = new FileReader();
	
			reader.onload = function() {
				
				var salt = CryptoJS.lib.WordArray.random(128/8);
				var iv = CryptoJS.lib.WordArray.random(128/8);
	//			console.log('salt  '+ salt );
	//			console.log('iv  '+ iv );
				
				// To construct our multipart form data request,
				// We need a separator to define each part of the request
				var boundary = "blob";
				
				var data = AESFileEncryption(key, salt, iv, file, reader, boundary, "pddStatusFile");
				$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
				$.ajax({
					headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
					url: "/AdminModule/pddStatusUpload",
					type: 'POST',
					processData: false,  // tell jQuery not to process the data
					contentType: false,  // tell jQuery not to process the data
					data:data,
					success:function(response){
						$('#wait').hide();
						$("#loaderid").html(0);
						stompClient.disconnect();
						resetForm('submitPDDStatusImport');
						if(response == null || response == ""){
							$( "#pdd-excel-download-link" ).hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
						}
						else if(response == 'header-mismatch'){
							  modalAlertToShowCustomMessage('Column Headers do not match with sample file. Please use sample file for reference', 'warning'); 
						  }
						else if(response.indexOf('SUCCESS') != -1)
						{
							$( "#pdd-excel-downlod-link" ).hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
						}
						else if(response.indexOf('FAILURE') != -1)
						{
							$( "#pdd-excel-download-link" ).hide();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Oops Some error occurred. Please do not enter blank excel file', 'warning');
						}
						else{
							var download = document.getElementById('pdd-error-excel-download-link');
							var arrayData= response.split("~");
							download.setAttribute('href', arrayData[3]);
							download.setAttribute('download', 'LogFile.xlsx');
							$('#submitPDDImportBtn').hide();
							$( "#pdd-excel-download-link" ).show();
							$("#fileLabel").html('Upload file customer data (.xlsx)');
							modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
									'. Please go through download link for more detail.', 'warning');
	
						}
					}, 
					error: function(jqXHR, textStatus, errorThrown) {
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);
	
					}
				});
			}
	
			reader.readAsDataURL(file);
	    	}
	    }/*,
	    function() {
	    	modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');
	      }*/
	    );
	}
	
	function submitPDDStatusImportResponse(content) {
		$('#showPDDStatusImport #loaderImg').hide();
	    resetForm('submitPDDStatusImport');
	    if(content == null || content == ""){
	    	 modalAlertToShowCustomMessage('Some error occurred.Please enter valid excel file', 'warning');
	    }
	    else if(content.indexOf('SUCCESS') != -1)
	    {
	        $( "#pdd-status-excel-download-link" ).addClass( "hidden" );
	        modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
	    }
	    else{
	        var download = document.getElementById('pdd-status-excel-download-link');
	        var arrayData= content.split("~");
	        download.setAttribute('href', arrayData[3]);
	        download.setAttribute('download', 'LogFile.xlsx');
	        $('#pddStatusSubmit').addClass('hidden');
	        $( "#pdd-status-excel-download-link" ).removeClass( "hidden" );
	        modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
	        		'. Please go through download link for more detail.', 'warning');
	
	    }
	
	}
	
	function showReportType(){
		var target = $('input[name="reportTyperadio"]:checked').val();
		$('#singleReportDate').hide();
		$('#multipleReportDate').hide();
		$('#eCodeReport').hide();
		$('#reportFooter').hide();
		$('#pdd-report-download-link').attr('href','');
		$('#downloadButton').hide();
		$('#submitPddReport').show();
		$('#dateReportFrom').val('');
		$('#dateReportTo').val('');
		
		if (target == 'Single') {
			$('#singleReportDate').show();
			$('#reportFooter').show();
			fetchSingleReportDates();
		}
		else if(target == 'Multiple'){
			$('.input-daterange input').each(function() {
				$(this).datepicker("clearDates");
			});
			$('#multipleReportDate').show();
			$('#reportFooter').show();
		}
		else if(target == 'Ecode'){
			fetchPDDReportEcode();
	
		}
		
	}
	
	function fetchSingleReportDates(){
        $('#wait').show();
 		$.ajax({
 			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()}, 
 			type:'POST', 
 			url:"/AdminModule/fetchSingleReportDates",
 			success:function(data){
				//console.log(data);
				$('#wait').hide();
				$('#reportDateTag').html('');
				if(null != data && undefined != data){
				$.map(data,function(item){
					$('#reportDateTag').append('<option value="'+item+'">'+item+'</option>');
				});
				}
				$('#singleReportDate').show();
				$('#reportFooter').show();
			}
 		});
	}
	var eCodes="";
	function fetchPDDReportEcode(){
		if(eCodes!=""){
			$('#eCodeTag').append(eCodes);
			$('#eCodeReport').show();
			$('#reportFooter').show();
	    }	
		else{	
			$('#wait').show();
	 		$.ajax({
	 			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()}, 
	 			type:'POST', 
	 			url:"/AdminModule/fetchPDDReportEcode",
	 			success:function(data){
	 				$('#wait').hide();
					//console.log(data);
					$('#eCodeTag').html('');
					$.map(data,function(item){
						eCodes=eCodes+'<option value="'+item+'">'+item+'</option>';
					});
					$('#eCodeTag').append(eCodes);
					$('#eCodeReport').show();
					$('#reportFooter').show();
				}
	 		});
		}
		
	}
	
	function fetchBranchMaster(code,name){
		$.ajax({
			url: "/AdminModule/fetchBranchMaster",
			type: 'POST',
			data:{
				_csrf:$('#csrfToken').val()
			},		
			async:false,
			//dataType: 'JSON',
			success:function(data){
				//console.log(data);
				var htmlCode="";
				var htmlName="";
				$.map(data,function(item){
					htmlCode += '<option value="'+item.branchCode+'" code="'+item.branchCode+'_'+item.branchName+'">'+item.branchCode+'</option>';
					htmlName += '<option value="'+item.branchName+'" code="'+item.branchCode+'_'+item.branchName+'">'+item.branchName+'</option>';
				});
				  $('#'+code).append(htmlCode);
				  $('#'+name).append(htmlName);
			}
		});
	}
	function changeBranchName(el,branchName){
		var arrayData= $(el).find(':selected').attr('code').split("_");
		if(undefined != arrayData){
			$('#'+branchName).val(arrayData[1]);
		}
	}
	function changeBranchCode(el,branchCode){
		var arrayData= $(el).find(':selected').attr('code').split("_");
		if(undefined != arrayData){
			$('#'+branchCode).val(arrayData[0]);
		}
	}
	
	function initDateTimePicker(){
		var dt = new Date();
		var nextdate=dt.getDate()+1;
		var selected=new Date(dt.getFullYear(), dt.getMonth(), nextdate, 8, 0, 0, 0);
		var range = new Date(selected.getFullYear(),selected.getMonth()+1,selected.getDate(),19,0,0,0);
		$("#datenotification").AnyPicker(
				{
					mode: "datetime",
	
					dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
					//inputDateTimeFormat: "dd/MM/yyyy hh:mm AA",
					 minValue: selected,
					 maxValue:range,
					selectedDate:selected, 
					//inputChangeEvent: "onChange",
					onInit: function()
					{
						oAP1 = this;
						console.log("maxValue : " + oAP1.setting.maxValue);
						console.log("minValue : " + oAP1.setting.minValue);
						console.log("selectedValue : " + oAP1.setting.selectedDate);
					},
	
					onSetOutput: function(sOutput, oSelectedValues)
					{
						console.log("Changed Value : " +oSelectedValues.date);
						var cDate = oSelectedValues.date;
						var cHours =cDate.getHours();
						if((cHours>= 8 && cHours<19) || (cHours==19 && cDate.getMinutes() == 0)){
						console.log('ok time');
						}
						else{
		               	modalAlertToShowCustomMessage('Please select time in business hours( 08:00 hrs to 19:00 hrs)','warning');
							this.setSelectedDate(selected);
						}
					}
					//maxValue: new Date(2016, 0, 19, 19, 0, 0, 0)
					
					
				});
	}
	//========================== mass mailer =====================================
	
	//mass mailer file upload Ajax request here
	function submitMassMailerFileUpload(formParentDivID) {
	
		if(document.getElementById('resourceFile').files[0]
		&& document.getElementById('dataFile').files[0]){
			if (confirm("Are You Sure You Want to upload mass mailer Information!")) {
				$('#submitMassMailerFileUpload').ajaxSubmit({
					contentType: 'application/x-www-form-urlencoded',
					enctype: 'multipart/form-data',
					processData: false,  // tell jQuery not to process the data
					contentType: false,  // tell jQuery not to process the data
					success: submitMassMailerFileUploadResponse
				});
			}
			else {
				modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');
			}
		}else{
			modalAlertToShowCustomMessage("Please select both files.", 'warning');
		}
	
	}
	
	//mass mailer file upload Response here
	function submitMassMailerFileUploadResponse(content) {
	
		resetForm('submitMassMailerFileUpload');
	
		var responseArray = content.split("#");
		if(responseArray[0]=='SUCCESS')
		{
			var fieldNameArray = responseArray[1].split("~");
			var submit = document.getElementById("submit");
			submit.setAttribute("onclick", "sendMassMailer('"+responseArray[1]+"')");
			var keyDataField = document.getElementById("keyDataField");
			var valueDataField = document.getElementById("valueDataField");
			while (keyDataField.hasChildNodes()) {
				keyDataField.removeChild(keyDataField.lastChild);
			}
			while (valueDataField.hasChildNodes()) {
				valueDataField.removeChild(valueDataField.lastChild);
			}
			$.each(fieldNameArray, function(i, item) {			
				var keyElement = document.createElement('div');
				keyElement.setAttribute("class", "col-lg-12 inputbox");
				keyElement.innerHTML = '<input type="text" id="keyDataField'+(i+1)+'" name="keyDataField'+(i+1)+'" value="'+item+'" placeholder="Key#'+(i+1)+'" readonly="readonly">';
	
				var valueElement = document.createElement('div');
				valueElement.setAttribute("class", "col-lg-12 inputbox");
				valueElement.innerHTML = '<input type="text" id="valueDataField'+(i+1)+'" name="valueDataField'+(i+1)+'" placeholder="value#'+(i+1)+'">';
	
				keyDataField.appendChild(keyElement);
				valueDataField.appendChild(valueElement);
			});
			modalAlertToShowCustomMessage('File has been uploaded successfully.', 'success');
		}
		else{
	//		var download = document.getElementById('csv-download-link');
	//		download.setAttribute('href', content);
	//		download.setAttribute('download', 'Error-Log.csv');
	//		$( "#csv-download-link" ).removeClass( "hidden" );
			modalAlertToShowCustomMessage('Server encountered problem. Please try again.', 'warning');
	
		}
	
	}
	
	function getMassMailerPreview(){
		$.ajax({
			url: "/AdminModule/massMailerPreview",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				console.log(data);
				var responseArray = data.split("#");
				var preview = document.getElementById('previewIframe');
				preview.setAttribute('src', responseArray[1]);
			}
		});
	}
	
	function sendMassMailer(fieldNames){
		var fieldNameArray = fieldNames.split("~");
		var fieldData = '';
		$.each(fieldNameArray, function(i, item) {
			fieldData = fieldData + item + '~' + $('#valueDataField'+(i+1)).val() + '#'
		});
		fieldData = fieldData.substring(0, (fieldData.length-1));
		$.ajax({
			url: "/AdminModule/sendMassMailer",
			type: 'POST',
			data:"data="+fieldData,
			success:function(data){
				if(data=='SUCCESS'){
					modalAlertToShowCustomMessage('Mass mailer sending event initiated successfully.', 'success');
					var keyDataField = document.getElementById("keyDataField");
					var valueDataField = document.getElementById("valueDataField");
					while (keyDataField.hasChildNodes()) {
						keyDataField.removeChild(keyDataField.lastChild);
					}
					while (valueDataField.hasChildNodes()) {
						valueDataField.removeChild(valueDataField.lastChild);
					}
				}else{
					modalAlertToShowCustomMessage('Please upload file.', 'warning');
				}
	
			}
		});
	}
	
	function fetchAssignTOReport(){
		$('#reportAssignedToMsg').hide();
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#hiddenEcode').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/reportAssignedTO", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				// 	console.log(result);
				if(undefined != result && undefined != result.data) {
					$('#reportAssignedToDiv').html('');
					$('#reportAssignedToDiv').append('<tr><td width="70%"><div class="table-heading">Report Name</div></td><td width="20%"><div class="table-heading">Cut off Time</div></td>' +
							'<td width="10%" class="icontap2 table-heading">View</td></tr>');
					
					$.map(result.data.assignReport,function(item){
					    var res = item.reportName.replace(/'/g, "\\'");
						$('#reportAssignedToDiv').append('<tr><td>'+item.reportName+'</td><td><i class="fa fa-clock-o" aria-hidden="true"></i> '+item.cutOffTime+'</td><td class="icontap"><a id="'+item.reportId+'"onclick="fetchCompleteReportDetails('+item.reportId+', false)"><i class="fa fa-angle-right" aria-hidden="true"></i></a></td></tr>');
					});
					
					$('#reportAssignedToList').append('<label class="col-sm-12 top7"><div class="table-heading">Report Name</div></label>');
					$.map(result.data.assignReport,function(item) {
						$('#reportAssignedToList').append('<label class="col-sm-12 top7" id='+item.reportId+'><a id="'+item.reportId+'"onclick="fetchCompleteReportDetails('+item.reportId+', false)">'+item.reportName+'</a></label>');
					});
				} else {
					$('#reportAssignedToMsg').show();
				}
			}
		});
	}
	
	function fetchAssignBYReport(){
		$('#reportAssignedByMsg').hide();
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#hiddenEcode').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/reportAssignedBY", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				//	console.log(result);
				if(undefined != result && undefined != result.data && undefined != result.data.assignReport){
					$('#reportAssignedByDiv').html('');
					$('#reportAssignedByDiv').append('<tr><td width="70%"><div class="table-heading">Report Name</div></td><td width="20%"><div class="table-heading">Cut off Time</div></td>' +
							'<td width="5%" class="icontap2">Edit</td>'+
							'<td width="5%" class="icontap">View</td></tr>');
					
					$.map(result.data.assignReport,function(item){
					    var res = item.reportName.replace(/'/g, "\\'");
					    
						//$('#reportAssignedByDiv').append('<label class="col-sm-12 top7"><a id="'+item.reportId+'"onclick="fetchCompleteReportDetails('+item.reportId+', true)">'+item.reportName+'</a></label>');
						$('#reportAssignedByDiv').append('<tr><td width="70%">'+item.reportName+'</td><td width="20%"><i class="fa fa-clock-o" aria-hidden="true"></i> '+item.cutOffTime+'</td>' +
								'<td width="5%" class="icontap2"><a href="#" id="'+item.reportId+'"onclick=\"editCreateReportData(\''+item.cutOffTime+'\',\''+res+'\','+item.reportId+')\"><i class="fa fa-pencil" aria-hidden="true"></i></a></td>'+
								'<td width="5%" class="icontap"><a href="#" id="'+item.reportId+'"onclick="fetchCompleteReportDetails('+item.reportId+', true)"><i class="fa fa-angle-right" aria-hidden="true"></i></a></td></tr>');
					});
				}
				else{
					$('#reportAssignedByMsg').show();
				}
			}
		});
		fetchReferenceReportEmpList();
	}
	
	function editCreateReportData(cutOffTime, reportName, reportId) {
		$('#createReportId').addClass('hidden');
		$('#editReportId').removeClass('hidden');
		$('#createButtonReportId').addClass('hidden');
		$('#editButtonReportId').removeClass('hidden');
		
		$('#setTargetReport').addClass('hidden');
		$('#createReportDiv').removeClass('hidden');
		
		$('#baseReportId').val(reportId);
		$('#reportName').val(reportName);
		$('#cutOfTime').val(cutOffTime);
		$("#cutOfTime").AnyPicker("destroy");
		$("#cutOfTime").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "hh:mm AA", 
			viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
			onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues); }});
	}
	
	function fetchRegionList(){
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#hiddenEcode').val(), type:'region'};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/getTargetList", dataType: "json", data:JSON.stringify(finalData), async:false, 
			success:function(result){
	//			console.log(result);
				if(undefined != result && undefined != result.data){
					$('#regionListLebel').removeClass('hidden');
					$('#regionListDiv').html('');
					var optionList = '';
					$.map(result.data.object,function(item){
	//					console.log(item);
						optionList += '<option value="'+item+'">'+item+'</option>';
					});
					$('#regionListDiv').append('<select id="regionList" required class="custome-select">' + optionList + '</select>');
	
					$( '#regionList' ).off('change');
					$( '#regionList' ).on('change', function() {
						fetchRegionWiseEmpList();
					});
					$( '#regionList option:first').attr('selected','selected');
					$( '#regionList' ).trigger('change');
	
					//$('#regionList').searchableSelect();
					//	$('#regionList').searchableSelect();
				}else{
					$('#regionListLebel').addClass('hidden');
				}
			}
		});
	}
	
	function fetchRegionWiseEmpList(){
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#hiddenEcode').val(), region:$('#regionList').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/getTargetEmpList", dataType: "json", data:JSON.stringify(finalData), async:false, 
			success:function(result){
	//			console.log(result);
				if(undefined != result && undefined != result.data){
					$('#empListLebel').removeClass('hidden');
					$('#empListDiv').html('');
					var optionList = '';
					$.map(result.data.empList,function(item){
						//console.log(item);
						optionList = optionList + '<option value="'+item.empCode+'">'+item.name+' - '+item.empCode+'</option>';
					});
					$('#empListDiv').append('<select required id="empList" class="custome-select">' + optionList + '</select>');
					
					$( '#empList' ).off('change');
					$( '#empList' ).on('change', function() {
						fetchReportMonths();
					});
					$('#empList option:first').attr('selected','selected');
					$('#empList').trigger('change');
					//$('#empList').searchableSelect();
					//	$('#empList').searchableSelect();
				} else {
					//$('#empListLebel').addClass('hidden');
					$('#empListDiv').html('');
					//var optionList = '<option></option>';
					$('#empListDiv').append('<select required id="empList" class="custome-select">' + optionList + '</select>');
					//$('#empList').searchableSelect();
					$('#empList option:first').attr('selected','selected');
					$('#empList').trigger('change');
				}
			}
		});
	}
	
	function fetchReferenceReportEmpList(){
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#hiddenEcode').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/reportAssignedTO", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
	//			console.log(result);
				if(undefined != result && undefined != result.data){
					$('#referenceReportlabel').removeClass('hidden');
					$('#referenceReportDiv').html('');
					var optionList = '<option selected value=0>Select Report</option>';
					$.map(result.data.assignReport,function(item){
						//console.log(item);
						optionList = optionList + '<option value="'+item.reportId+'">'+item.reportName+'</option>';
					});
					$('#referenceReportDiv').append('<select required id="referenceReportId" class="custome-select">' + optionList + '</select>');
					//$('#referenceReportId').searchableSelect();
				}else{
					$('#referenceReportlabel').addClass('hidden');
				}
			}
		});
	}
	
	function fetchReportMonths(){
		$('#fetchPreviousMonthDataDiv').hide();
		$('#fetchLastMonthTargetId').hide();
		resetForm('targetDetailFormId');
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {reportId:$('#newReportId').val(), region:$('#regionList').val(), empCode:$('#empList').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/getReportMonth", dataType: "json", data:JSON.stringify(finalData), async:false, 
			success:function(result){
				//	console.log(result);
				if(undefined != result && undefined != result.data){
					$('#targetMonthsLi').removeClass('hidden');
					$('#targetMonthsButton').removeClass('hidden');
					$('#targetMonths').html('');
					var optionList = '';
					$.map(result.data.month,function(item){
						optionList = optionList + '<option value="'+item+'">'+item+'</option>';
					});
					$('#targetMonths').append('<select required id="targetSelectMonth" class="custome-select">' + optionList + '</select>');
					//$('#targetSelectMonth').searchableSelect();
				}else{
					$('#targetMonthsLi').addClass('hidden');
					$('#targetMonthsButton').addClass('hidden');
				}
			}
		});
	}
	
	function fetchCompleteReportDetails(el, flag){
	//	var reportId = $(el).attr('id');
		$('#newReportId').val(el);
		var reportId = el;
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {reportId:parseInt(reportId)};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/completeTargetReport", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				console.log(result);
				if (undefined != result && undefined != result.data && result.data.regionWiseData.length != 0){
					$('#regionWiseDiv').html('');
					$('#completeCreateReportNameTargetId').html(result.data.reportName);
					
					$.map(result.data.regionWiseData,function(item){
						$('#completeCreateReportNameTargetId').html(item.reportName);
						/*var html ='<div class="collapse-new"><div class="deta-list"><ul><li>'+item.region+'</li>'+ 
						'<li>&nbsp;</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.nomTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.uomTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.adcTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.bcsTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.totalDisbursement+' cr.</li></ul></div>'+
						'<span class="collapse-heading"></span><div class="collapse-iner">';*/
						var html = '<tr><td data-th="Region">'+item.region+'</td><td data-th="Month">&nbsp;</td><td data-th="NOM">'+item.nomTotalDisbursement+
						'cr.</td><td data-th="UOM">'+item.uomTotalDisbursement+'cr.</td><td data-th="ADC">'+item.adcTotalDisbursement+
						'cr.</td><td data-th="BCS">'+item.bcsTotalDisbursement+'cr.</td><td data-th="Total">'+item.totalDisbursement+
						'cr.</td><td data-th="Achieved %">&nbsp;</td></tr>';
						
						$.map(item.assignedTargetData,function(item1){
							/*html+='<div class="deta-list collapsemater"><ul><li><i class="fa fa-user" aria-hidden="true"></i>'+
							'<span>'+item1.name+'</span></li>'+
							'<li>'+item1.month+'</li><li>'+
							'<i class="fa fa-inr" aria-hidden="true"></i>'+item1.nomDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.uomDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.adcDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.bcsDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.totalDisbursement+' cr.</li>'+
							'<li></li>';
							if(flag) {
								html+='<span class="editicon"><a href="#" onclick="fetchCompleteTargetDetails('+item1.targetId+')"><i class="fa fa-pencil" aria-hidden="true"></i>'+
								'</a></span>';
							}
							html+='</ul></div>';*/
							html += '<tr><td data-th="Region">'+item1.name+'</td><td data-th="Month">&nbsp;</td><td data-th="NOM">'+item1.nomDisbursement+
							'cr.</td><td data-th="UOM">'+item1.uomDisbursement+'cr.</td><td data-th="ADC">'+item1.adcDisbursement+
							'cr.</td><td data-th="BCS">'+item1.bcsDisbursement+'cr.</td><td data-th="Total">'+item1.totalDisbursement+
							'cr.</td><td data-th="Achieved %">&nbsp;</td></tr>';
						});
						html+="</div></div>";
						$('#regionWiseDiv').append(html);
					});
					/*$('#regionWiseDiv').append('<div class="unit-show" style="background-color:#d0ddf2; font-weight:600;"><div class="deta-list"><ul><li>Grand Total</li><li>&nbsp;</li>'+
	                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandNomDisbursement+' cr.</li>'+
	                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandUomDisbursement+' cr.</li>'+
	                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandAdcDisbursement+' cr.</li>'+
	                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandBcsDisbursement+' cr.</li>'+
	                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandDisbursement+' cr.</li></ul></div></div>');*/
					$('#regionWiseDiv').append('<tr><th data-th="Region">Grand Total</th><th data-th="Month">&nbsp;</th><th data-th="NOM">'+result.data.grandNomDisbursement+
							'cr.</th><th data-th="UOM">'+result.data.grandUomDisbursement+'cr.</th><th data-th="ADC">'+result.data.grandAdcDisbursement+
							'cr.</th><th data-th="BCS">'+result.data.grandBcsDisbursement+'cr.</th><th data-th="Total">'+result.data.grandDisbursement+
							'cr.</th><th data-th="Achieved %">&nbsp;</th></tr>');
					
					$('#completeTargetDiv .collapse-heading').addClass('fechado');
					var $active = null;
					$('#completeTargetDiv .collapse-heading').off('click');
					$('#completeTargetDiv .collapse-heading').on('click',function(){
	
						if ($active !== null){
							$active.next().slideToggle("fast");
							$active.removeClass('aberto');
							$active.addClass('fechado');
						} 
	
						$active = $(this);
						$active.addClass('aberto');
						$next = $active.next();
	
						if ($next.is(":hidden")){
							$next.slideToggle("fast");
						}else{
							$active.removeClass('aberto');
							$active.addClass('fechado');
							$active = null;     
						}
	
					});
					$('#setTargetReport').addClass('hidden');
					$('#completeTargetDiv').removeClass('hidden');
					if (!flag) {
						$('#completeCreateTargetId').addClass('hidden');
					} else {
						$('#completeCreateTargetId').removeClass('hidden');
					}
	
				} else {
					completeCreateTarget();
				}
			} 
		});
		dataModelPopup();
	}
	
	function fetchCompleteTargetDetails(targetEl) {
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {targetId:targetEl};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/getTargetReport", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				console.log(result);
				if(undefined != result && undefined != result.data) {
					fetchRegionList();
					//fetchRegionWiseEmpList();
					fetchReportMonths();
					
					$('#cutOffTimeDetailId').html(result.data.cutOffTime);
					$('#reportNameDetailId').html(result.data.reportName);
					
					$('#editTargetReportId').val(targetEl);
	
					$('#completeTargetDiv').addClass('hidden');
	
					$('#createTargetDiv').removeClass('hidden');
					$('#fetchTotalTargetDiv').addClass('hidden');
					
					$("#regionList option[value='"+ result.data.region +"']").attr("selected", "selected");
					//$('#regionList').searchableSelect();
					$('#regionList').trigger('change');
					
					$("#empList option[value='"+ result.data.empCode +"']").attr("selected", "selected");
					$( '#empList' ).trigger('change');
					//$('#empList').val(result.data.empName);
	
					$('#fetchTargetMonth').val(result.data.month +" "+result.data.year);
					$("#fetchTargetMonth").AnyPicker("destroy");
					$("#fetchTargetMonth").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "MMM yyyy", 
						viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
						onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);} });
	
					$('#targetNOMUnits').val(result.data.nomUnits);
					$('#targetNOMDis').val(result.data.nomDisbursement);
	
					$('#targetUOMUnits').val(result.data.uomUnits);
					$('#targetUOMDis').val(result.data.uomDisbursement);
	
					$('#targetADCUnits').val(result.data.adcUnits);
					$('#targetADCDis').val(result.data.adcDisbursement);
	
					$('#targetBCSUnits').val(result.data.bcsUnits);
					$('#targetBCSDis').val(result.data.bcsDisbursement);
					
					$('#createTargetButtonId').addClass('hidden');
					$('#editTargetButtonId').removeClass('hidden');
					$('#createTargetId').addClass('hidden');
					$('#editTargetId').removeClass('hidden');
				} 
			}
		});
	}
	
	function fetchAssignTarget(){
		var d = new Date(); 
		var curr_date = d.getDate(); 
		var curr_month = d.getMonth()+1; 
		var curr_year = d.getFullYear();
	
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {month:curr_month, reportId:$('#newReportId').val(), year:curr_year, empCode:$('#hiddenEcode').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val() 
			}, type:'POST', url:"/AdminModule/fetchTarget", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				console.log(result);
				if(undefined != result && undefined != result.data) {
					//$('#completeTargetDiv').removeClass('hidden');
	
					$('#targetMonth').html(result.data.month);
					$('#targetNom').html(result.data.nomUnits);
					$('#targetNomCr').html(result.data.nomDisbursement);
					$('#targetUom').html(result.data.uomUnits);
					$('#targetUomCr').html(result.data.uomDisbursement);
					$('#adcUnits').html(result.data.adcUnits);
					$('#adcCr').html(result.data.adcDisbursement);
					$('#BcsUnits').html(result.data.bcsUnits);
					$('#BcsCr').html(result.data.bcsDisbursement);
				} else {
					$('#fetchTotalTargetDiv').addClass('hidden');
				}
			}
		});
	}
	
	function fetchLastMonthAssignTarget(flag){
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {month:$('#targetSelectMonth').val().split(", ")[0], reportId:$('#newReportId').val(), year:$('#targetSelectMonth').val().split(", ")[1], empCode:$('#empList').val(), region:$('#regionList').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val() 
			}, type:'POST', url:"/AdminModule/fetchTarget", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				console.log(result);
				if(undefined != result && undefined != result.data) {
					$('#targetDiv').removeClass('hidden');
					if (flag) {
						$('#fetchPreviousMonthDataDiv').html('');
						var html ='<ul><li><span>Nom</span><div class="trg-count"><i class="fa fa-inr" aria-hidden="true"></i> '+result.data.nomDisbursement+' </div> <small>Cr.</small></li>'+
						'<li><span>uom</span><div class="trg-count"><i class="fa fa-inr" aria-hidden="true"></i> '+result.data.uomDisbursement+' </div> <small>Cr.</small></li>'+
						'<li><span>adc</span><div class="trg-count"><i class="fa fa-inr" aria-hidden="true"></i> '+result.data.adcDisbursement+' </div> <small>Cr.</small></li>'+
						'<li><span>bcs</span><div class="trg-count"><i class="fa fa-inr" aria-hidden="true"></i> '+result.data.bcsDisbursement+' </div> <small>Cr.</small></li></ul>'+
						'<div class="copycode"><a onclick="fetchLastMonthAssignTarget('+false+')"><i class="fa fa-clone" aria-hidden="true"></i>Copy same target for below month</a> <div class="showdiv hidden" id="showtickCopyId"><span class="tickcopy"><img src="images/tick.svg" th:src="@{images/tick.svg}" width="25px"></span></div></div>';
						$('#fetchPreviousMonthDataDiv').append(html);
					} else {
						var nomAmount = result.data.nomDisbursement;
						nomAmount = nomAmount.replace(/\,/g,'');
						nomAmount = Number(nomAmount);
							
						var uomAmount = result.data.uomDisbursement;
						uomAmount = uomAmount.replace(/\,/g,'');
						uomAmount = Number(uomAmount);
						
						var adcAmount = result.data.adcDisbursement;
						adcAmount = adcAmount.replace(/\,/g,'');
						adcAmount = Number(adcAmount);
						
						var bcsAmount = result.data.bcsDisbursement;
						bcsAmount = bcsAmount.replace(/\,/g,'');
						bcsAmount = Number(bcsAmount);
							
						$('#fetchTargetMonth').val(result.data.month +" "+result.data.year);
	
						$('#targetNOMUnits').val(result.data.nomUnits);
						$('#targetNOMDis').val(nomAmount);
	
						$('#targetUOMUnits').val(result.data.uomUnits);
						$('#targetUOMDis').val(uomAmount);
	
						$('#targetADCUnits').val(result.data.adcUnits);
						$('#targetADCDis').val(adcAmount);
	
						$('#targetBCSUnits').val(result.data.bcsUnits);
						$('#targetBCSDis').val(bcsAmount);
						
						$('#showtickCopyId').removeClass('hidden');
					}
				} else {
					$('#fetchTotalTargetDiv').addClass('hidden');
				}
			}
		});
	}
	
	function createReport() {
		$('#createReportId').removeClass('hidden');
		$('#editReportId').addClass('hidden');
		$('#createButtonReportId').removeClass('hidden');
		$('#editButtonReportId').addClass('hidden');
		
		
		$('#setTargetReport').addClass('hidden');
		$('#createReportDiv').removeClass('hidden');
		$("#cutOfTime").AnyPicker("destroy");
		$("#cutOfTime").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "hh:mm AA", 
			viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
			onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues); }});
		
		resetForm('reportFormId');
	}
	
	function editReport() {
		var form = $( "#reportFormId" );
		form.validate({rules: { reportName: {required: true, regex: /^[a-zA-Z][a-zA-Z0-9-_\':. ]{1,100}$/ }}});
		if (form.valid())  {
			if (undefined != $('#cutOfTime').val() && undefined != $('#reportName').val() && '' != $('#cutOfTime').val() && '' != $('#reportName').val()) {
				var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
				var data = {cutoffTime:$('#cutOfTime').val(), reportName:$('#reportName').val(), reportid:$('#referenceReportId').val(), empCode:$('#hiddenEcode').val(), id:$('#baseReportId').val()};
				var finalData = {info:info, data:data};
				$.ajax({
					headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
					}, type:'POST', url:"/AdminModule/createReport", dataType: "json", data:JSON.stringify(finalData),
					success:function(result){
						if (undefined != result.data.reportId && '' != result.data.reportId)  {
							$('#setTargetReport').removeClass('hidden');
							$('#createReport').addClass('hidden');
							$('#createReportDiv').addClass('hidden');
							
							fetchAssignTOReport();
							fetchAssignBYReport();
						}
					}
				});
			}}
	}
	
	function createNewReport() {
		var form = $( "#reportFormId" );
		form.validate({rules: { reportName: {required: true, regex: /^[a-zA-Z][a-zA-Z0-9-_\':. ]{1,100}$/ }}});
		if (form.valid())  {
			if (undefined != $('#cutOfTime').val() && undefined != $('#reportName').val() && '' != $('#cutOfTime').val() && '' != $('#reportName').val()) {
				var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
				var data = {cutoffTime:$('#cutOfTime').val(), reportName:$('#reportName').val(), reportid:$('#referenceReportId').val(), empCode:$('#hiddenEcode').val(), id:0};
				var finalData = {info:info, data:data};
				$.ajax({
					headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
					}, type:'POST', url:"/AdminModule/createReport", dataType: "json", data:JSON.stringify(finalData),
					success:function(result){
						if (undefined != result.data.reportId && '' != result.data.reportId)  {
							$('#newReportId').val(result.data.reportId);
							$('#setTargetReport').addClass('hidden');
							$('#createReportDiv').removeClass('hidden');
							$('#createReportDiv').addClass('hidden');
	
							fetchAssignTarget();
							$('#setTargetReport').addClass('hidden');
							$('#createReportDiv').addClass('hidden');
							$('#createTargetDiv').removeClass('hidden');
							$('#completeTargetDiv').addClass('hidden');
							$("#fetchTargetMonth").AnyPicker("destroy");
							$("#fetchTargetMonth").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "MMM yyyy", 
								viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
								onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);} });
	
							fetchRegionList();
							//fetchRegionWiseEmpList();
							fetchReportMonths();
							
							//$('#regionList').searchableSelect();
							$('#regionList').trigger('change');
							
							$('#cutOffTimeDetailId').html($('#cutOfTime').val());
							$('#reportNameDetailId').html($('#reportName').val());
							
							$('#createTargetButtonId').removeClass('hidden');
							$('#editTargetButtonId').addClass('hidden');
							$('#createTargetId').removeClass('hidden');
							$('#editTargetId').addClass('hidden');
						}
					}
				});
			}}
	}
	
	function completeCreateTarget() {
		resetForm('targetDetailFormId');
		
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {reportId:$('#newReportId').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/getBaseReportDetail", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				if (undefined != result.data)  {
					
					$('#cutOffTimeDetailId').html(result.data.cutOffTime);
					$('#reportNameDetailId').html(result.data.reportName);
					
					$('#newReportId').val();
					$('#setTargetReport').addClass('hidden');
					$('#createReportDiv').removeClass('hidden');
					$('#createReportDiv').addClass('hidden');
	
					fetchAssignTarget();
					$('#setTargetReport').addClass('hidden');
					$('#createReportDiv').addClass('hidden');
					$('#createTargetDiv').removeClass('hidden');
					$('#completeTargetDiv').addClass('hidden');
					$("#fetchTargetMonth").AnyPicker("destroy");
					$("#fetchTargetMonth").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "MMM yyyy",
						viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
						onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);} });
	
					fetchRegionList();
					//$('#regionList').searchableSelect();
					$('#regionList').trigger('change');
					//fetchRegionWiseEmpList();
					fetchReportMonths();
					
					$('#createTargetButtonId').removeClass('hidden');
					$('#editTargetButtonId').addClass('hidden');
					$('#createTargetId').removeClass('hidden');
					$('#editTargetId').addClass('hidden');
				}
			}
		});
	}
	
	function createTarget() {
		createNewReport();
		dataModelPopup();
	}
	
	function cancelReport(){
		$('#setTargetReport').removeClass('hidden');
		$('#createReport').addClass('hidden');
		$('#createReportDiv').addClass('hidden');
	}
	
	function cancelTarget(){
		$('#createTargetDiv').addClass('hidden');
		$('#setTargetReport').removeClass('hidden');
	}
	
	function submitTarget(){
		var form = $( "#targetDetailFormId" );
		var validate=form.validate();
		if (validate.form())  {
	
			var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
			var data = {bcsDisbursement:$('#targetBCSDis').val(), bcsUnits:$('#targetBCSUnits').val(), 
					adcDisbursement:$('#targetADCDis').val(),  adcUnits:$('#targetADCUnits').val(), 
					uomDisbursement:$('#targetUOMDis').val(), uomUnits:$('#targetUOMUnits').val(), 
					nomDisbursement:$('#targetNOMDis').val(), nomUnits:$('#targetNOMUnits').val(), 
					month:$('#fetchTargetMonth').val().split(" ")[0], 
					year:$('#fetchTargetMonth').val().split(" ")[1], 
					assignedEmpCode:$('#empList').val(), 
					region:$('#regionList').val(), 
					reportId:$('#newReportId').val(), 
					targetId:$('#editTargetReportId').val(),
					empCode:$('#hiddenEcode').val()};
	
			var finalData = {info:info, data:data};
			$.ajax({
				headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
				}, type:'POST', url:"/AdminModule/createTargetReport", dataType: "json", data:JSON.stringify(finalData),
				success:function(result){
					if (undefined != result.data.id && '' != result.data.id)  {
						$('#completeTargetDiv').removeClass('hidden');
						$('#createTargetDiv').addClass('hidden');
	
						fetchCompleteReportDetails($('#newReportId').val(), true);
					}
				}
			});
		}
	}
	
	function fetchGenerateReportRegionList(eCode) {
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		//var data = {empCode:$('#hiddenEcode').val()};
		var data = {empCode:eCode};
		var finalData = {info:info, data:data};
		var optionList = '';
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'  , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', 
			async:false,
			url:"/AdminModule/assignedReportList", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
	//			console.log(result);
				if(undefined != result && undefined != result.data){
					
					$.map(result.data.assignReport,function(item){
						optionList += '<option value="'+item.reportId+'">'+item.reportName+'</option>';
					});
					
				}
			}
		});
		$('#generateReportRegionListDiv').html('<select id="generateReportRegionList" required>' + optionList + '</select>');
		$('#generateReportRegionList').searchableSelect();
		$('#generateReportTypeDIV').html("<select id='generateReportTypeId' required><option value=''>Select User Role</option><option value='1'>Compiled Report</option><option value='2'>Date wise Report</option></select>");
		$('#generateReportTypeId').searchableSelect();
		$("#generateReportMonthId").AnyPicker("destroy");
		$("#generateReportMonthId").AnyPicker({mode: "datetime", showComponentLabel: true, dateTimeFormat: "yyyy-MM-dd", 
			viewSections:{header: [],contentTop: [],contentBottom: [],footer: ["cancelButton", "setButton"]},
			onChange: function(iRow, iComp, oSelectedValues){ console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues); }});
	}
	
	function generateCompiledDetail() {
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#hiddenEcode').val(), date:$('#generateReportMonthId').val(), 
				reportType:$('#generateReportTypeId').val(), reportId:$('#generateReportRegionList').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/getCompiledReport", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				console.log(result);
				if (undefined != result && undefined != result.data){
					$('#generateReportNotFoundId').addClass('hidden');
					$('#generateReport').addClass('hidden');
					$('#generateCompleteReport').removeClass('hidden');
					$('#generateCompiledReportDiv').html('');
					$('#generateCompiledReportDiv').html('<tr><th data-th="Region">Region</th><th data-th="Month">Month</th><th data-th="NOM">NOM</th><th data-th="UOM">UOM</th><th data-th="ADC">ADC</th><th data-th="BCS">BCS</th><th data-th="Total">Total</th><th data-th="Achieved %">Achieved %</th></tr>');
					var html = '';
					var grandTotal = result.data.total;
					var grandNomDisbursement = result.data.nomDisbursement;
					var grandUomDisbursement = result.data.uomDisbursement;
					var grandAdcDisbursement =result.data.adcDisbursement;
					var grandBcsDisbursement = result.data.bcsDisbursement;
					//html += '<ul>'; 
					console.log(result.data.compiledDisbursementReport);
					$.map(result.data.compiledDisbursementReport, function(item){
						
						/*grandTotal += parseFloat(item.total);
						grandNomDisbursement += parseFloat(item.nomDisbursement);
						grandUomDisbursement += parseFloat(item.uomDisbursement);
						grandAdcDisbursement += parseFloat(item.adcDisbursement);
						grandBcsDisbursement += parseFloat(item.bcsDisbursement);*/
						/*html += '<ul><li>'+item.region+'</li><li>'+item.date+'</li><li><i class="fa fa-inr" aria-hidden="true"></i> '+item.nomDisbursement+''+
						'cr.</li><li><i class="fa fa-inr" aria-hidden="true"></i> '+item.uomDisbursement+'cr.</li><li><i class="fa fa-inr" aria-hidden="true"></i> '+item.adcDisbursement+''+
						'cr.</li><li><i class="fa fa-inr" aria-hidden="true"></i> '+item.bcsDisbursement+'cr.</li><li><i class="fa fa-inr" aria-hidden="true"></i> '+item.total+'cr.</li><li>'+item.acheivedPerc+'%</li></ul>';*/
						
						html += '<tr><td data-th="Region">'+item.region+'</td><td data-th="Month">'+item.date+'</td><td data-th="NOM">'+item.nomDisbursement+
						'cr.</td><td data-th="UOM">'+item.uomDisbursement+'cr.</td><td data-th="ADC">'+item.adcDisbursement+
						'cr.</td><td data-th="BCS">'+item.bcsDisbursement+'cr.</td><td data-th="Total">'+item.total+
						'cr.</td><td data-th="Achieved %">'+item.acheivedPerc+'%</td></tr>';
						
					});
					//html += '</ul>';
					
					$('#generateCompiledReportDiv').append(html);
					/*$('#generateCompiledReportDiv').append('<div class="unit-show" style="background-color:#d0ddf2; font-weight:600;"><div class="deta-list">'+
							'<ul><li>Grand Total</li><li>&nbsp;</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+grandNomDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+grandUomDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+grandAdcDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+grandBcsDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+grandTotal+' cr.</li></ul></div></div>');*/
					
					$('#generateCompiledReportDiv').append('<tr><th data-th="Region">Grand Total</th><th>&nbsp;</th>'+
			                '<th data-th="NOM"><i class="fa fa-inr" aria-hidden="true"></i>'+grandNomDisbursement+' cr.</th>'+
			                '<th data-th="UOM"><i class="fa fa-inr" aria-hidden="true"></i>'+grandUomDisbursement+' cr.</th>'+
			                '<th data-th="ADC"><i class="fa fa-inr" aria-hidden="true"></i>'+grandAdcDisbursement+' cr.</th>'+
			                '<th data-th="BCS"><i class="fa fa-inr" aria-hidden="true"></i>'+grandBcsDisbursement+' cr.</th>'+
			                '<th data-th="Total"><i class="fa fa-inr" aria-hidden="true"></i>'+grandTotal+' cr.</th></tr>');
				} else {
					$('#generateReportNotFoundId').removeClass('hidden');
				}
			} 
		});
	}
	
	function cancelGenerateCompiledDetail() {
		$('#generateReport').addClass('hidden');
	}
	
	function dataModelPopup() {
		$('#addNewEmployeeFRId').removeClass('hidden');
		
		var Modal = (function() {
			var modalOpen = $('.data-modal-open'),
			modalClose = $('.data-modal-close');
			// modalWrapper = $('.data-modal-wrapper');
			//console.log(modalOpen);
			return {
				init: function() {
					this.abrir();
					this.fechar();
				},
	
				abrir: function() {
					/* modalOpen.onclick = function(e) {
			            e.preventDefault;
			              modalWrapper.classList.add("modal-opened");
			          }*/
					$.each(modalOpen,function(e){
						$(this).click(function(){
							e.preventDefault;
							$('#'+$(this).attr('popup')).addClass("modal-opened");
							//console.log($('#'+$(this).attr('popup')));
						});
					});
				},
	
				fechar: function() {
					/* modalClose.onclick = function(e) {
			              e.preventDefault;
			              modalWrapper.classList.remove("modal-opened");
			            }*/
					$.each(modalClose,function(e){
						$(this).click(function(){  
							e.preventDefault;
							// console.log( $(this).parents('.modal-wrapper'));
							$(this).parents('.modal-wrapper').removeClass("modal-opened");
						});
					});
				}
			}
		}());
		Modal.init();
		
		$(".creatform").click(function(){
			$(".showform").slideToggle('slow');
		});
	
		$(".gettarget").click(function(){
			$(".target-amount").slideDown('slow');
		});
	}
	
	function searchReportEmployee() {
		if (undefined != $('#searchedEmpId').val()) {
			var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
			var data = {empCode:$('#searchedEmpId').val(), loginEmpCode:$('#hiddenEcode').val()};
			var finalData = {info:info, data:data};
			$.ajax({
				headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
				}, type:'POST', url:"/AdminModule/searchEmpDetail", dataType: "json", data:JSON.stringify(finalData),async:false,
				success:function(result){
					console.log(result);
					
					fetchDepartmentList();
					getBranchList();

					if (undefined != result && undefined != result.data){
						
						$('#searchedEmpName').val(result.data.name);
	
						$('#searchedEmpCode').val(result.data.empCode);
						$('#searchedEmpDesig').val(result.data.designation);
	
						$('#searchedEmpEmail').val(result.data.email);
						$('#searchedEmpMobile').val(result.data.mobile);
	
						//$('#searchedEmpDept').val(result.data.department);
						
						
						
						$('#searchedEmpCity').val(result.data.city);
	
						$('#searchedEmpRMId').val(result.data.reportingManaer);
						$('#searchedEmpRMEcode').val(result.data.reportingManagerEmp);
						
						/*$('#searchedEmpBREcode').val(result.data.branchCode);
						$('#searchedEmpBRName').val(result.data.branchName);*/
						
						// Set Department name										
						if(result.data.departmentId == undefined || result.data.departmentId=="" || result.data.departmentId==null){
							$('#departmentTag').val("all");	
						}
						else{
							$('#departmentTag').val(result.data.departmentId);						
						}
						// Set branch name				
						if(result.data.branchId == undefined || result.data.branchId=="" || result.data.branchId==null){
							$('#branchlist').val("all");					
						}
						else{
							$('#branchlist').val(result.data.branchId);
						}
						
						$('#addReportEmpButtonId').removeClass('hidden');
						$('#createReportEmpButtonId').addClass('hidden');
						
						//$('#createNewUserButtonId').addClass('hidden');
						$('#searchedEmpDetailNotFoundId').addClass('hidden');
						$(".showCheckDetailform").slideToggle('slow');
					} else {
						$('#searchedEmpDetailNotFoundId').removeClass('hidden');
						$('#createEmpDetailNotFoundId').removeClass('hidden');
						
						$('#createReportEmpButtonId').removeClass('hidden');
						//$('#createNewUserButtonId').removeClass('hidden');
						$('#searchedEmpDetailEnteredId').addClass('hidden');
						$(".showCheckDetailform").slideToggle('slow');
						
						$('#addReportEmpButtonId').addClass('hidden');
						$('#createReportEmpButtonId').removeClass('hidden');
						$('#addEmpDetailEnteredId').addClass('hidden');
						
						resetForm('createNewUserFromReportId');
					} 
				} 
			});
		}
	}
	
	function addReportInEmployee() {
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {name:null, empCode:$('#searchedEmpCode').val(), 
				designation:null,  email:null, 
				mobile:null, department:null, 
				city:null, reportingManager:null, 
				reportingManagerEmp:null, 
				branchCode:null,
				branchName:null,
				loginEmpCode:$('#hiddenEcode').val(), 
				region:$('#regionList').val(),
				reportId:$('#newReportId').val(),
				branchId: $("#branchlist option:selected").val(),
				departmentId: $("#departmentTag option:selected").val()};
	
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/createRequestUser", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				if (undefined != result.data)  {
					$('#addReportEmpButtonId').removeClass('hidden');
					$('#createReportEmpButtonId').addClass('hidden');
					$('#addEmpDetailEnteredId').removeClass('hidden');
					
					$('#searchedEmpMessageId').html(result.data.msg);
					
					$(".showCheckDetailform").slideToggle('slow');
					fetchRegionList();
				}
			}
		});
	}
	
	function CreateNewUserInReport() {
		var form = $( "#createNewUserFromReportId" );
		var validate=form.validate();
		if (validate.form())  {
			var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
			var data = {name:$('#searchedEmpName').val(), empCode:$('#searchedEmpCode').val(), 
					designation:$('#searchedEmpDesig').val(),  email:$('#searchedEmpEmail').val(), 
					mobile:$('#searchedEmpMobile').val(), department:$('#searchedEmpDept').val(), 
					city:$('#searchedEmpCity').val(), reportingManager:$('#searchedEmpRMId').val(), 
					reportingManagerEmp:$('#searchedEmpRMEcode').val(), 
					branchCode:$('#searchedEmpBREcode').val(),
					branchName:$('#searchedEmpBRName').val(), 
					region:$('#regionList').val(),
					reportId:0};
	
			var finalData = {info:info, data:data};
			$.ajax({
				headers: {'Accept': 'application/json', 'Content-Type': 'application/json' 
				}, type:'POST', url:"/AdminModule/createRequestUser", dataType: "json", data:JSON.stringify(finalData),
				success:function(result){
					if (undefined != result.data)  {
						//$('#addNewEmployeeFRId').addClass('hidden');
						$('#searchedEmpDetailNotFoundId').addClass('hidden');
						$('#searchedEmpDetailEnteredId').removeClass('hidden');
						$(".showform").slideToggle('slow');
						resetForm('createNewUserFromReportId');
					}
				}
			});
		}
	}
	
	function generateExcel() {
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {eCode:$('#hiddenEcode').val(), date:$('#generateReportMonthId').val(), type:$('#generateReportTypeId').val(),  reportId:$('#generateReportRegionList').val()};
	
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/downCompleteReport", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				var typeInt = parseInt($('#generateReportTypeId').val());
				console.log(typeInt);
				if (undefined != result.data)  {
					var data1 = {eCode:result.data.encEcode, date:$('#generateReportMonthId').val(), 
							reportId:result.data.encReportId, type:typeInt};
					var finalData1 = {data:data1};
					var generateDate = $('#generateReportMonthId').val();
					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
						var a;
						if (xhttp.readyState === 4 && xhttp.status === 200) {
							// Trick for making downloadable link
							a = document.createElement('a');
							//console.log(xhttp);
							a.href = xhttp.response;
							if(typeInt == 1)
								a.download = "compiled_"+generateDate+"_"+formatDate(new Date())+".zip";
							else
								a.download = "date_"+generateDate+"_"+formatDate(new Date())+".zip";
							a.style.display = 'none';
							document.body.appendChild(a);
							a.click();
						}
					};
					// Post data to URL which handles post request
					xhttp.open("POST", "/DailyReportingNew/frontEndWeb/generateExcel");
					xhttp.setRequestHeader("Content-Type", "application/json");
					// You should set responseType as blob for binary responses
					//xhttp.responseType = 'blob';
					xhttp.send(JSON.stringify(finalData1));
				} 
			}
		});
	}
	
	function formatDate(date) {
		var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();
	
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
	
		return [year, month, day].join('-');
	}
	
	function showeLearningReportType(){
		var target = $('input[name="reportTyperadio"]:checked').val();
		$('#singleeLearningReportDate').hide();
		$('#multipleeLearningReportDate').hide();
		$('#reportFooter').hide();
		$('#eLearning-report-download-link').attr('href','');
		$('#downloadButton').hide();
		$('#submiteLearningReport').show();
		$('#dateReportFrom').val('');
		$('#dateReportTo').val('');
		$('#bydate').val('');
		$('#categoryTag').html('');
		if (target == 'Single') {
			$('#singleeLearningReportDate').show();
			$('#reportFooter').show();
			$('#categoryeLearningReport').hide();
		}
		else if(target == 'Multiple'){
			$('.input-daterange input').each(function() {
				$(this).datepicker("clearDates");
			});
			
			$('#multipleeLearningReportDate').show();
			$('#reportFooter').show();
			$('#singleeLearningReportDate').hide();
			$('#categoryeLearningReport').hide();
		}
		else if(target == 'category'){
			fetcheLearningReportCategory();
		}
	}
	
	/*function fetchSingleReportDates(){
		$.ajax({
			url: "/AdminModule/fetchSingleReportDates",
			type: 'POST',
			//async:false,
			//dataType: 'JSON',
			success:function(data){
				//console.log(data);
				$('#reportDateTag').html('');
				$.map(data,function(item){
					$('#reportDateTag').append('<option value="'+item+'">'+item+'</option>');
				});
				$('#singleReportDate').removeClass('hidden');
				$('#reportFooter').removeClass('hidden');
			}
		});
	}*/
	
	var category="";
	function fetcheLearningReportCategory(){
		if(category!=""){
			$('#categoryTag').append(category);
			$('#categoryeLearningReport').show();
			$('#reportFooter').show();
		}	
		else{		

			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$('#wait').show();
			$.ajax({
				url: "/AdminModule/fetcheLearningReportCat",
				type: 'POST',
				//async:false,
				//dataType: 'JSON',
				success:function(data){
					$('#wait').hide();
					$('#categoryTag').html('');
					$.map(data,function(item){
						category=category+'<option value="'+item+'">'+item+'</option>';
					});
					$('#categoryTag').append(category);
					$('#categoryeLearningReport').show();
					$('#reportFooter').show();
				}
			});
		}	
	}
	
	function submiteLearningReport() {

		var dateSelected="";
		var categorySelected="";
		var parameter;
		$("#elearning-excel-download-link" ).hide();
		var target = $('input[name="reportTyperadio"]:checked').val();

		if(target == 'Single'){
			categorySelected='';
			dateSelected= $('#bydate').val();
			
			if(dateSelected == null || typeof dateSelected === "undefined" || dateSelected =='')
	    	{
	    		 modalAlertToShowCustomMessage("Date not selected", 'warning');
	    		 return false;
	    	}
		}
		else if(target == 'Multiple'){
			categorySelected='';
			
			var formDate=$('#dateReportFrom').val();
	    	var toDate =$('#dateReportTo').val();
	    	
	    	if(formDate==null || formDate=='')
	    	{
	    		 modalAlertToShowCustomMessage("From Date not selected", 'warning');
	    		 return false;
	    	}
	    	
	    	if(toDate==null || toDate=='')
	    	{
	    		 modalAlertToShowCustomMessage("To Date not selected", 'warning');
	    		 return false;
	    	}
	    	
	    	
	    	if(new Date(formDate) > new Date(toDate))
	    	{
	    		 modalAlertToShowCustomMessage("To Date greater than from date", 'warning');
	    		 return false;
	    	}	
	    	
	    	dateSelected= formDate+"~"+toDate;
			
		}
		else if(target == 'category'){
			dateSelected='';
			categorySelected=$('#categoryTag').val();
			
			if(categorySelected == null || typeof categorySelected === "undefined" || categorySelected =='')
	    	{
	    		 modalAlertToShowCustomMessage("Category not selected", 'warning');
	    		 return false;
	    	}
			
		}
		parameter = 'date='+dateSelected+'&category='+categorySelected;
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('eLearningReport', parameter);
		if(null != response && response != ""){
			resetForm('showELearningReportDiv');
			var download = document.getElementById('eLearning-report-download-link');
			download.setAttribute('href', response);
			download.setAttribute('download', 'LogFile.xlsx');
			$("#elearning-excel-download-link" ).show();
			modalAlertToShowCustomMessage("Report successfully generated. Please click on download button.", 'success');
		}
		else{
			modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');	
		}
	}
	
	
	function getELearningCertificate() {
		var ecode = $.trim($('#eLearningCertificateEcode').val());
		var moduleId = $('#eLearningCertificateModule').val();
		var moduleValue = $("#eLearningCertificateModule option:selected").text();
		if (ecode !='' && moduleId != '' && moduleValue!= '' && moduleValue !== 'Select Module') {
			var parameter ='ecode='+ecode+'&moduleName='+encodeURIComponent(moduleValue)+'&moduleId='+moduleId;
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			var response = makeAjaxCall("getELearningCertificate",parameter);
			if(response!=null && response!=""){
				resetForm('eLearningCertificate');
				window.open(response);
			}
			else
			    modalAlertToShowCustomMessage("Please Enter Valid Ecode", 'warning');
		}else {
			modalAlertToShowCustomMessage("Please Select All Fields", 'warning');
		}
	}
	
	function eLearningCertificateModule() {
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall("getELearningModule",null);
		$.each($.parseJSON(response), function(i, item) {
			$('#eLearningCertificateModule').append('<option value="'+item.id+'">'+item.name+'</option>');
		});
	}
	function checkDec(el){
		 var ex = /^[0-9]+\.?[0-9]*$/;
		 if(ex.test(el.value)==false){
		   el.value = el.value.substring(0,el.value.length - 1);
		  }
		}
	function submitPDDReassignment(formParentDivID) {
	
		$( "#downloadButtonDiv" ).hide();
		var reasgnType= $('input[name="reasgnType"]:checked').val();
		var eCodeType= $('input[name="eCodeType"]:checked').val();
		if(((reasgnType=='los' && $.trim($('#losCode').val())!='') || (reasgnType!='los' && $.trim($('#losCode').val())=='') ) && $.trim($('#currentCode').val())!='' && $.trim($('#newCode').val())!='')
		{
			swal({
		        title: "Are you sure?",
		        text: "Do you want to reassign leads?",
		        type: "warning",
		        showCancelButton: true,
		        confirmButtonColor: '#DD6B55',
		        confirmButtonText: 'Yes, I am sure!',
		        cancelButtonText: "No, cancel it!",
		        closeOnConfirm: true,
		        closeOnCancel: false
			}).then(function(isConfirm) {
				
				$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
				$('#wait').show();
				SubForm($('#reassignForm'),submitPDDReassignmentResponse)
			});
		}
		else{
			modalAlertToShowCustomMessage("Please enter values in all fields.", 'warning');
		}			
		 
	}
	function submitPDDReassignmentResponse(response) {
	 		//alert("hello");
		$('#wait').hide();
		var data = JSON.parse(response);
		//alert(data.status);
		if (data.status == "success") {
			resetFormPddReassign('reassignForm');
			var download = document.getElementById('pdd-reassignment-download-link');
			download.setAttribute('href', data.url);
			download.setAttribute('download', 'LogFile.xlsx');
			$( "#downloadButtonDiv" ).show();
			modalAlertToShowCustomMessage('Lead reassigned. Please click on download button for details.', 'success');
	
		} else {
			modalAlertToShowCustomMessage(data.status, 'error');
		}
	
	
	}
	
	function hideShow(id)
	{
		if(id!=null && undefined != id ){
			
			var target= $('input[name="reportType"]:checked').val();
			if(target=='dateRange')
				$('#dateRangeDiv').show();
			else
				$('#dateRangeDiv').hide();
		}
		else
		{	
			var losCode=$('#losCode').val();

			if(losCode!=null && losCode!='')
				$('#losCode').val('');

			var target= $('input[name="reasgnType"]:checked').val();
			if(target=="los"){
				$('#losCodeDiv').show();
			}
			else{
				$('#losCodeDiv').hide();
			}

		} 
	}
	
	function submitNotificationReport(formParentDivID) {
	
	    var dateSelected="";
	    var textSelected="";
	    var parameter;
	    var target = $('input[name="reportTyperadio"]:checked').val();
	    if(target == 'Single'){
	    	textSelected='';
	    	dateSelected= $('#reportDateTagNotification').val();
	    	
	    }
	    else if(target == 'Text'){
	    	dateSelected='';
	    	textSelected=$('#notiText').val();
	    }
	   // parameter = 'date='+$('#showPDDReportDiv .date > .form-control').val();
	    parameter = 'date='+dateSelected+'&text='+textSelected;
	    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		var response = makeAjaxCall('notificationReport',parameter);
		
		if(null != response && response != "" && response == "No Record Found")
			modalAlertToShowCustomMessage("No Records found For selected criteria.Please try again.", 'warning');
		else if(null != response && response != ""){
			var download = document.getElementById('notification-report-download-link');
			download.setAttribute('href', response);
			download.setAttribute('download', 'LogFile.xlsx');
			$( "#downloadButton" ).show();
			modalAlertToShowCustomMessage("Report successfully generated. Please click on download button.", 'success');
		}
		else{
			 modalAlertToShowCustomMessage("No Report Generated For selected criteria.Please try again.", 'warning');	
		}
	       
	}
	function showNotificationReportType(){
		var target = $('input[name="reportTyperadio"]:checked').val();
		$('#reportDate').hide();
		$('#notificationText').hide();
		$('#notification-report-download-link').attr('href','');
		$('#notification-report-download-link').addClass('hidden');
		$('#submitNotificationReport').show();
		if (target == 'Single') {
			$('#reportDateTagNotification').val('');
			$('#reportDate').show();
		}
		else if(target == 'Text'){
			$('#notiText').val('');
			$('#notificationText').show();
		}
		
	}
	
	function fetchReportCreatorData(){
		var html="";
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {eCode:$('#hiddenEcode').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
			url: "/AdminModule/fetchReportCreatorEcodes",
			type: 'POST',
			dataType: "json",
			data:JSON.stringify(finalData),
			async:false,
			//dataType: 'JSON',
			success:function(response){
				console.log("response:: "+response);
				if(undefined != response && undefined != response.data && undefined != response.data.userInfo && response.data.userInfo.length> 0){
					$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');
				$.map(response.data.userInfo,function(item){
					var length =0;
					
					var info1 = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
					var data1 = {empCode:item.eCode};
					var finalData1 = {info:info1, data:data1};
					$.ajax({
						headers: {'Accept': 'application/json', 'Content-Type': 'application/json' 
						}, type:'POST', url:"/AdminModule/reportAssignedBY", dataType: "json", data:JSON.stringify(finalData1),
						async:false,
						success:function(result){
							var newHtml='';
							if(undefined != result && undefined != result.data && undefined != result.data.assignReport){
								length = result.data.assignReport.length;
							}
							html+='<div class="unit-show"> <div class="collapse-new report-list"><div class="deta-list member-bg"><ul><li>'+item.userName+'</li><li>&nbsp;</li><li>E-Code : '+item.eCode+'</li><li>No of Reports : '+length+'</li></ul></div><span class="collapse-heading"></span> <div class="collapse-iner">';
							if(undefined != result && undefined != result.data && undefined != result.data.assignReport){
								
								var i=0;
								//var classCss='blue';
								$.map(result.data.assignReport,function(item){
									
									/*if(i%3 == 1){
										classCss ='yellow';
									}
									else if(i%3 == 2){
										classCss ='purpel';
									}*/
								    var res = item.reportName.replace(/'/g, "\\'");
								    newHtml+='<div class="deta-list"><ul><li>'+item.reportName+'</li>'
								        +'<li>'+item.createdOn+'</li><li>Cut of Time : '+item.cutOffTime+'</li><li></li><span class="view-sec"><a id="'+item.reportId+'"onclick="fetchCompleteReportDetailsForSenior('+item.reportId+')">View <i class="fa fa-eye" aria-hidden="true"></i></a></span></ul></div>';
								    i=i+1;
								});
								
								}
							else{
								newHtml+='<div class="deta-list">No Reports Available</div>';
							}
							newHtml+='</div></div></div>';
							if(undefined != newHtml)
							html+=newHtml;
							
						}
					});
				});
				$('#dailyReportsDiv #mylist').append(html);
				$('#dailyReportsDiv .collapse-heading').addClass('fechado');
				var $active = null;
				$('#dailyReportsDiv .collapse-heading').off('click');
				$('#dailyReportsDiv .collapse-heading').on('click',function(){
	
				  if ($active !== null){
				    $active.next().slideToggle("fast");
				    $active.removeClass('aberto');
				    $active.addClass('fechado');
				  } 
				  
				  $active = $(this);
				  $active.addClass('aberto');
				  $next = $active.next();
				  
				  if ($next.is(":hidden")){
				    $next.slideToggle("fast");
				  }else{
				    $active.removeClass('aberto');
				    $active.addClass('fechado');
				    $active = null;     
				  }
				  
				});
				$('#dailyReportsDiv #mylist').pageMe({
			          pagerSelector:'#dailyReportsDiv #myPager',
			          activeColor: 'blue',
			          prevText:'Prev',
			          nextText:'Next',
			          showPrevNext:true,
			          hidePageNumbers:false,
			          perPage:6
			        });
			
			}
			}
		});
	}
	function fetchCompleteReportDetailsForSenior(el){
	//	var reportId = $(el).attr('id');
		var reportId = el;
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {reportId:parseInt(reportId)};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/completeTargetReport", dataType: "json", data:JSON.stringify(finalData),
			success:function(result){
				console.log(result);
				
					$('#regionWiseDiv').html('');
					$('#completeCreateReportNameTargetId').html(result.data.reportName);
					if (undefined != result && undefined != result.data && result.data.regionWiseData.length != 0){
					$.map(result.data.regionWiseData,function(item){
						$('#completeCreateReportNameTargetId').html(item.reportName);
						var html ='<div class="collapse-new"><div class="deta-list"><ul><li>'+item.region+'</li>'+ 
						'<li>&nbsp;</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.nomTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.uomTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.adcTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.bcsTotalDisbursement+' cr.</li>'+
						'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item.totalDisbursement+' cr.</li></ul></div>'+
						'<span class="collapse-heading"></span><div class="collapse-iner">';

						$.map(item.assignedTargetData,function(item1){
							html+='<div class="deta-list collapsemater"><ul><li><i class="fa fa-user" aria-hidden="true"></i>'+
							'<span>'+item1.name+'</span></li>'+
							'<li>'+item1.month+'</li><li>'+
							'<i class="fa fa-inr" aria-hidden="true"></i>'+item1.nomDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.uomDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.adcDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.bcsDisbursement+' cr.</li>'+
							'<li><i class="fa fa-inr" aria-hidden="true"></i>'+item1.totalDisbursement+' cr.</li>'+
							'<li></li>';
							html+='</ul></div>';
						});
						//html+="</div></div>";
						$('#regionWiseDiv').append(html);
					});
					
	
			} 
					$('#regionWiseDiv').append('<div class="unit-show" style="background-color:#d0ddf2; font-weight:600;"><div class="deta-list"><ul><li>Grand Total</li><li>&nbsp;</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandNomDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandUomDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandAdcDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandBcsDisbursement+' cr.</li>'+
			                '<li><i class="fa fa-inr" aria-hidden="true"></i>'+result.data.grandDisbursement+' cr.</li></ul></div></div>');
					
							
							$('#completeTargetDiv .collapse-heading').addClass('fechado');
							var $active = null;
							$('#completeTargetDiv .collapse-heading').off('click');
							$('#completeTargetDiv .collapse-heading').on('click',function(){
			
								if ($active !== null){
									$active.next().slideToggle("fast");
									$active.removeClass('aberto');
									$active.addClass('fechado');
								} 
			
								$active = $(this);
								$active.addClass('aberto');
								$next = $active.next();
			
								if ($next.is(":hidden")){
									$next.slideToggle("fast");
								}else{
									$active.removeClass('aberto');
									$active.addClass('fechado');
									$active = null;     
								}
			
							});
							$('#setTargetReport').addClass('hidden');
							$('#dailyReportsDiv').addClass('hidden');
							$('#completeCreateTargetId').addClass('hidden');
							$('#completeTargetDiv').removeClass('hidden');
			}
		});
	}
	
	function fetchGenerateReportCreatorList() {
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {eCode:$('#hiddenEcode').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
			}, type:'POST', url:"/AdminModule/fetchReportCreatorEcodes", dataType: "json", data:JSON.stringify(finalData),async:false,
			success:function(response){
				//console.log(response);
				if(undefined != response && undefined != response.data && undefined != response.data.userInfo && response.data.userInfo.length> 0){
					$('#generateReportCreatorDiv').html('');
					var optionList = '';
					$.map(response.data.userInfo,function(item){
						optionList += '<option value="'+item.employeeCode+'">'+item.userName+'</option>';
					});
					$('#generateReportCreatorDiv').append('<select id="generateReportEcodeList" class="custome-select" required>' + optionList + '</select>');
					$( '#generateReportEcodeList' ).off('change');
					$( '#generateReportEcodeList' ).on('change', function() {
						fetchGenerateReportRegionList(this.value);
					});
					$( '#generateReportEcodeList option:first').attr('selected','selected');
					$( '#generateReportEcodeList' ).trigger('change');
					//$('#generateReportCreatorDiv').searchableSelect();
				}
			}
		});
	}
	
	function searchDailyReport(){
		if(undefined != $('#searchByTxt').val()){
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {empCode:$('#searchByTxt').val()};
		var finalData = {info:info, data:data};
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' 
			}, type:'POST', url:"/AdminModule/reportAssignedBY", dataType: "json", data:JSON.stringify(finalData),
			async:false,
			success:function(result){
				var newHtml='';
				var html='';
				$('#dailyReportsDiv #mylist').html('');
				$('#dailyReportsDiv #myPager').html('');
				$('#dailyReportsDiv #total_reg').html('');
				if(undefined != result && undefined != result.data){
					var length=0;
					if(undefined != result.data.assignReport && result.data.assignReport.length>0){
						length=result.data.assignReport.length;
					}
					html+='<div class="unit-show"> <div class="collapse-new report-list"><div class="deta-list member-bg"><ul><li>'+result.data.username+'</li><li>&nbsp;</li><li>E-Code : '+result.data.eCode+'</li><li>No of Reports : '+length+'</li></ul></div><span class="collapse-heading"></span> <div class="collapse-iner">';
					if(undefined != result.data.assignReport && result.data.assignReport.length>0){
						var i=0;
						//var classCss='blue';
						$.map(result.data.assignReport,function(item){
							
							/*if(i%3 == 1){
								classCss ='yellow';
							}
							else if(i%3 == 2){
								classCss ='purpel';
							}*/
							var res = item.reportName.replace(/'/g, "\\'");
							newHtml+='<div class="deta-list"><ul><li>'+item.reportName+'</li>'
							+'<li>'+item.createdOn+'</li><li>Cut of Time : '+item.cutOffTime+'</li><li></li><span class="view-sec"><a id="'+item.reportId+'"onclick="fetchCompleteReportDetailsForSenior('+item.reportId+')">View <i class="fa fa-eye" aria-hidden="true"></i></a></span></ul></div>';
							i=i+1;
						});
	
					}
					else{
						newHtml+='<div class="deta-list">No Reports Available</div>';
					}
					newHtml+='</div></div></div>';
					if(undefined != newHtml)
						html+=newHtml;
	
					$('#dailyReportsDiv #mylist').append(html);
					$('#dailyReportsDiv .collapse-heading').addClass('fechado');
					var $active = null;
					$('#dailyReportsDiv .collapse-heading').off('click');
					$('#dailyReportsDiv .collapse-heading').on('click',function(){
	
						if ($active !== null){
							$active.next().slideToggle("fast");
							$active.removeClass('aberto');
							$active.addClass('fechado');
						} 
	
						$active = $(this);
						$active.addClass('aberto');
						$next = $active.next();
	
						if ($next.is(":hidden")){
							$next.slideToggle("fast");
						}else{
							$active.removeClass('aberto');
							$active.addClass('fechado');
							$active = null;     
						}
	
					});
					$('#dailyReportsDiv #mylist').pageMe({
						pagerSelector:'#dailyReportsDiv #myPager',
						activeColor: 'blue',
						prevText:'Prev',
						nextText:'Next',
						showPrevNext:true,
						hidePageNumbers:false,
						perPage:6
					});
				}
				else{
					searchByReportName();
				}
				}
			});
		}
		else{
			fetchReportCreatorData();
		}
	}
	
	function searchByReportName(){
		var info = {appVersion:'', serverSyncTime:'', deviceId:'', sessionId:''};
		var data = {reportName:$('#searchByTxt').val()};
		var finalData = {info:info, data:data};
		var html='';
		$.ajax({
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' 
			}, type:'POST', url:"/AdminModule/searchReportBasisName", dataType: "json", data:JSON.stringify(finalData),
			success:function(response){
	//			console.log(result);
				$('#dailyReportsDiv #mylist').html('');
				$('#dailyReportsDiv #myPager').html('');
				$('#dailyReportsDiv #total_reg').html('');
				if(undefined != response && undefined != response.data && undefined != response.data.seniorReportViews && response.data.seniorReportViews.length> 0){
	
					
				$.map(response.data.seniorReportViews,function(item){
					var length=0;
					if(undefined != item.reports){
						length=item.reports.length;
					}
					html+='<div class="unit-show"> <div class="collapse-new report-list"><div class="deta-list member-bg"><ul><li>'+item.username+'</li><li>&nbsp;</li><li>E-Code : '+item.eCode+'</li><li>No of Reports : '+length+'</li></ul></div><span class="collapse-heading"></span> <div class="collapse-iner">';
					var newHtml='';
					if(undefined != item.reports){
								
								var i=0;
								//var classCss='blue';
								$.map(item.reports,function(item1){
								/*	if(i%3 == 1){
										classCss ='yellow';
									}
									else if(i%3 == 2){
										classCss ='purpel';
									}*/
								    var res = item1.reportName.replace(/'/g, "\\'");
								    newHtml+='<div class="deta-list"><ul><li>'+item1.reportName+'</li>'
								        +'<li>'+item1.created_on+'</li><li>Cut of Time : '+item1.cutOffTime+'</li><li></li><span class="view-sec"><a id="'+item1.reportId+'"onclick="fetchCompleteReportDetailsForSenior('+item1.reportId+')">View <i class="fa fa-eye" aria-hidden="true"></i></a></span></ul></div>';
								    i=i+1;
								});
								
								}
							else{
								newHtml+='<div class="deta-list">No Reports Available</div>';
							}
							newHtml+='</div></div></div>';
							if(undefined != newHtml)
							html+=newHtml;
				});		
				$('#dailyReportsDiv #mylist').append(html);
				$('#dailyReportsDiv .collapse-heading').addClass('fechado');
				var $active = null;
				$('#dailyReportsDiv .collapse-heading').off('click');
				$('#dailyReportsDiv .collapse-heading').on('click',function(){
	
				  if ($active !== null){
				    $active.next().slideToggle("fast");
				    $active.removeClass('aberto');
				    $active.addClass('fechado');
				  } 
				  
				  $active = $(this);
				  $active.addClass('aberto');
				  $next = $active.next();
				  
				  if ($next.is(":hidden")){
				    $next.slideToggle("fast");
				  }else{
				    $active.removeClass('aberto');
				    $active.addClass('fechado');
				    $active = null;     
				  }
				  
				});
				$('#dailyReportsDiv #mylist').pageMe({
			          pagerSelector:'#dailyReportsDiv #myPager',
			          activeColor: 'blue',
			          prevText:'Prev',
			          nextText:'Next',
			          showPrevNext:true,
			          hidePageNumbers:false,
			          perPage:6
			        });
			
			
				}
				else{
					html+='<div class="unit-show"> No Data Available';
					$('#dailyReportsDiv #mylist').append(html);
				}
			}
		});
	}
	function SubForm(e,clickHandler){
	   // e.preventDefault();
	    var url=$(e).closest('form').attr('action'),
	        data=$(e).closest('form').serialize();
	    $.ajax({
	        url:url,
	        type:'post',
	        data:data,
	        success:function(response){
	        	clickHandler.call(this,response);
	           }
	        });
	 }
	function onContainerClick (event) {
		  if(event.classList.contains('off')) {
		    event.classList.remove('off');		  
		  } else {
		    event.classList.add('off');		   
		  }
		  if($('#lockedContainer').hasClass('off')){
			  $('input[name="failedAttempts"]').val(6);
			//  $('input[name="isActive"]').val(2);
		  }
		  else{
			  $('input[name="failedAttempts"]').val(0);
			  $('input[name="isActive"]').val(true);
		  }
		  /*if($('#container').hasClass('off')){
			  $('input[name="isActive"]').val(false);
		  }
		  else{
			  $('input[name="isActive"]').val(true);
		  }
		  if($('#deleteContainer').hasClass('off')){
			  $('input[name="isDelete"]').val(true);
		  }
		  else{
			  $('input[name="isDelete"]').val(false);
		  }*/
		  
	}
	function filterRequests(type){
		if(type == 1){
			
		}
		else if(type == 2){
			
		}
	}
	
	function viewEditDetail(el){
		window.location = "/AdminModule/editUserDetail?e_code="+$(el).parents('form').find('input[name="employeeCode"]').val()+"&_csrf="+$('#csrfToken').val();
		
	}
	function viewUAMApprovalRequests(data){
		if (data.status_code == 101 || data.status_code==201) {
			modalAlertToShowCustomMessage(data.message, 'warning');
		} else if (data.status_code == 200) {
			//window.location = "/AdminModule/uamApprovalRequests?_csrf="+$('#csrfToken').val();
			resetForm('submiteditUserInfo');
			swal(
					{
						title : "Edit User",
						text : data.message,
						type : "success",
					}).then(function() {
						//location.reload();
						window.location = "/AdminModule/uamApprovalRequests?_csrf="+$('#csrfToken').val();
						
			});
		}
	}
	function saveComment(el){
		var leadid= $(el).attr('leadid');
		var comment = $(el).parent().siblings().find('input[type="text"]').val();
		if(undefined != leadid && undefined != comment && comment != ''){
			$.ajax({
				url:"/AdminModule/saveComment",
				  data:{
					  "comment":comment,
					  "leadid":leadid,
					  "_csrf":$('#csrfToken').val(),
				  },
				  type: 'POST',
				  success:function(response){
					  if (response.status_code == 101 || response.status_code==201) {
							modalAlertToShowCustomMessage(response.message, 'warning');
						} else if (response.status_code == 200) {
							//modalAlertToShowCustomMessage(response.message, 'success');
							//showAlertAndCallFunction("PDD RIC Operations",response.message,"success",location.reload());
							swal(
									{
										title : "PDD RIC Operations",
										text : response.message,
										type : "success",
									}).then(function() {
										location.reload();
										
							});
						}
				  }
			});
		}
		else{
			modalAlertToShowCustomMessage('Please enter a comment', 'warning');
		}
	}
	function updateVehicleNumber(el){
		var leadid= $(el).attr('leadid');
		var rcNo = $(el).parents('.button-box').siblings().find('input[name="vehicleNo"]').val();
		if(undefined != leadid && undefined != rcNo){
			/*var regex = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/i;
			var regex1 = /^[A-Z]{2}[0-9]{1,2}(?:[A-Z])?(?:[A-Z]*)?[0-9]{4}$/i;
			if(regex.test(rcNo) ||regex1.test(rcNo) ){*/
			$.ajax({
				url:"/AdminModule/updateVehicleNumber",
				  data:{
					  "rcNo":rcNo,
					  "leadid":leadid,
					  "_csrf":$('#csrfToken').val(),
				  },
				  type: 'POST',
				  success:function(response){
					  if (response.status_code == 101 || response.status_code==201) {
							modalAlertToShowCustomMessage(response.message, 'warning');
						} else if (response.status_code == 200) {
							modalAlertToShowCustomMessage(response.message, 'success');
							if(rcNo != ''){
							$(el).parent('span').hide();
							$(el).parents('.button-box').siblings().find('input[name="vehicleNo"]').addClass('dissable');
							$(el).parent().siblings('.editbtn').show();
							$(el).parent().siblings('.uploadbtn').hide();
						//	$(el).parent().siblings('.rcno-action').show();
							}
						}
				  }
			});
			/*}
			else{
				modalAlertToShowCustomMessage('Please enter a valid vehicle number', 'warning');
			}*/
		}
		else{
			modalAlertToShowCustomMessage('Please enter a vehicle number', 'warning');
		}
	}
	function editVehicleNumber(el){
		$(el).parent('span').hide();
		$(el).parents('.button-box').siblings().find('input[name="vehicleNo"]').removeClass('dissable');
		$(el).parent().siblings('.rcno-action').hide();
		$(el).parent().siblings('.savebtn').show();
		$(el).parent().siblings('.uploadbtn').show();
	}
	
	function showModal(el){
		var imgList=$(el).attr('imglist');
		var leadid= $(el).attr('leadId');
		var type= $(el).attr('type');
		var imgType = 1;
		if(undefined != leadid && leadid != ''){
			$('#myModal1 #carouselIndicator').html('');
			$('#myModal1 #carouselInner').html('');
			$('#myModal1 #carouselThumbnail').html('');
			if(null != imgList && undefined != imgList){
				$('#myModal1 #modalTitle').html($(el).siblings('a').attr('type'));
				$('#myModal1 #modalDownload').attr('href',$(el).siblings('a').attr('href'));
				if(type == '1'){
					$('#approveRejectDiv').html('<div class=rejectbtn><a id=rejectBtn aria-hidden=true><i aria-hidden=true class="fa fa-times"></i> Reject</a></div><div class=Approval><a id=approveBtn><i aria-hidden=true class="fa fa-check"></i> Approve</a></div>');
					$('#rejectBtn').off('click');
					$('#rejectBtn').on('click',function(item){
						rejectApproveDoc(leadid,$(el).siblings('a').attr('type'),1);
					});
					$('#approveBtn').off('click');
					$('#approveBtn').on('click',function(item){
						rejectApproveDoc(leadid,$(el).siblings('a').attr('type'),2);
					});
				}
				else if(type == '2' ){
					$('#approveRejectDiv').html('<div class=Approval><a><i aria-hidden=true class="fa fa-check"></i> Approved</a></div>');
				}
				else if(type == '4'){
					$('#approveRejectDiv').html('<div class=rejectbtn><a aria-hidden=true><i aria-hidden=true class="fa fa-times"></i> Rejected</a></div>');
					imgType=0;
				}
				var carousalIndicator = '';
				var carousalInner='';
				var carouselThumbnail='';
				var index=0;
				$.map($.parseJSON(imgList),function(item){
					if(imgType == item.isActive){
						if(index == 0){
							carousalIndicator+='<li data-target="#carousel-example-generic" data-slide-to="'+index+'" class="active"></li>';
							carousalInner+='<div class="item active srle"><img src="'+item.imageUrl+'" alt="'+index+'.jpg" class="img-responsive"></div>';

						}
						else{
							carousalIndicator+='<li data-target="#carousel-example-generic" data-slide-to="'+index+'"></li>';
							carousalInner+='<div class="item"><img src="'+item.imageUrl+'" alt="'+index+'.jpg" class="img-responsive"></div>';
						}
						carouselThumbnail+='<li><img src="'+item.imageUrl+'" alt="'+index+'.jpg"></li>';
						index++;
					}
				});
				if(undefined != carousalInner && carousalInner != ''){
				$('#myModal1 #carouselIndicator').html(carousalIndicator);
				$('#myModal1 #carouselInner').html(carousalInner);
				$('#myModal1 #carouselThumbnail').html(carouselThumbnail);
				}
				else{
					$('#myModal1 #carouselInner').html('No Preview available');
				}
				$('#myModal1').modal('show');
			}
			
		}
	}
	
	function rejectApproveDoc(leadid,type,flag){
		if(flag == 2){
			$('#approveReject #confirmTitle').html('Approve Documents');
			if(type =='all'){
				$('#approveReject #confirmText').html('Are you sure you want to approve all documents?');
			}
			else{
				$('#approveReject #confirmText').html('Are you sure you want to approve the document?');
			}
		}
		else if(flag == 1){
			$('#approveReject #confirmTitle').html('Reject Documents');
			if(type =='all'){
				$('#approveReject #confirmText').html('Are you sure you want to reject all documents?');
			}
			else{
				$('#approveReject #confirmText').html('Are you sure you want to reject the document?');
			}
		}
		else if(flag == 6){
			
			$('#approveReject #confirmTitle').html('ForeClose Lead');
			$('#approveReject #confirmText').html('Are you sure you want to foreclose the lead?');
			
		}
		$('#confirmYes').off('click');
		$('#confirmYes').on('click',function(item){
			if(flag == 2){
				rejectApproveDocFinal(leadid,type,flag);
			}
			else if(flag == 1 || flag == 6){
				$('#approveReject').modal('hide');
				if(flag == 1)
					$('#rejectRemark #rejectTitle').html('Reject Document');
				else 
					$('#rejectRemark #rejectTitle').html('ForeClose Lead');
				$('#rejectRemark input[type="button"][value="Yes"]').off('click');
				$('#rejectRemark input[type="button"][value="Yes"]').on('click',function(){
					if($('#remarkText').val() != undefined && $('#remarkText').val()!= ''){
						rejectApproveDocFinal(leadid,type,flag,$('#remarkText').val());
					}
				});
				$('#rejectRemark input[type="button"][value="No"]').off('click');
				$('#rejectRemark input[type="button"][value="No"]').on('click',function(){
					$('#rejectRemark').modal('hide');
				});
				$('#rejectRemark').modal('show');
				
			}
		});
		$('#confirmNo').off('click');
		$('#confirmNo').on('click',function(item){
			$('#approveReject').modal('hide');
		});
		$('#myModal1').modal('hide');
		$('#approveReject').modal('show');
		
	}
	function rejectApproveDocFinal(leadid,type,flag,remark){
		if(undefined != leadid && undefined != type){
			$.ajax({
				url:"/AdminModule/rejectApproveDoc",
				  data:{
					  "leadid":leadid,
					  "type":type,		
					  "opType":flag,
					  "remark":remark,
					  "_csrf":$('#csrfToken').val(),
				  },
				  type: 'POST',
				  success:function(response){
					  $('#myModal1').modal('hide');
					  $('#approveReject').modal('hide');
					  $('#rejectRemark').modal('hide');
					  if (response.status_code == 101 || response.status_code==201) {
							modalAlertToShowCustomMessage(response.message, 'warning');
						} else if (response.status_code == 200) {
							//modalAlertToShowCustomMessage(response.message, 'success');
							swal(
									{
										title : "PDD RIC Operations",
										text : response.message,
										type : "success",
									}).then(function() {
										location.reload();
										
							});
							//showAlertAndCallFunction("PDD RIC Operations",response.message,"success",location.reload());
						}
				  }
			})
	}
	}
	function clickOnFilter(el){
		$('.reset-btn input[type="button"]').attr("disabled", "disabled");
		$(el).parent().siblings('input[type="button"][value="Filter"]').click();
		$('.reset-btn input[type="button"]').removeAttr("disabled");
	}
	/*function showAlertAndCallFunction(title,message,type,callFunc){
		swal(
				{
					title : title,
					text : message,
					type : type,
				}).then(function() {
					//location.reload();
					callFunc.call(this,response);
					
		});
	}*/
	function setFileLabel(aId,divId,submitButtonId){ 
		
		var fileName= $("#file-1").val().replace(/.*[\/\\]/, '');
		$("#fileLabel").html(fileName);
		$(submitButtonId).show();
		var download = document.getElementById(aId);
		if(undefined != download && download.length > 0){
		download.setAttribute('href', '#');
		$( divId ).hide();	
		}
		 
	}
	
	function uploadPDFFile() {
			var formData = new FormData();
			var uploadFiles=[];
			var captions=[];
			var elements = document.getElementsByClassName('inputfile');
			
			if($("#file-1")[0].files.length > 0){
					 	var ext = $('#file-1').val().split('.').pop().toLowerCase();
						if($.inArray(ext, ['pdf']) == -1) {
							modalAlertToShowCustomMessage("Only PDF files are allowed", 'warning');
							return;
						}
				        formData.append('file', elements[0].files[0]);
			}
			else{
				modalAlertToShowCustomMessage("Please upload pdf file", 'warning');
				return;
			}
				
			
			$("#pdfUpload").submit();
	}
	
	function saveVehicleDetails() {
	     
		var dto=$('#vehicleDetailsDto').val();
			
	    swal({
	        title: "Are you sure?",
	        text: "You want to save Vehicle Details.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {
		        
		    	if (isConfirm) {
		    		$('#wait').show();
				$.ajax({
					url: "/AdminModule/saveVehicleDetails",
					type: 'POST',
					data:{
						  "vehicleDetailsDto":dto,
						  "_csrf":$('#csrfToken').val(),
					},
					success:function(response){ 
						  if(response==null || undefined == response)
							  modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'warning');
						  else if (response.status == 'failure') {
							modalAlertToShowCustomMessage(response.message, 'warning');
						} else if (response.status == 'success') {
							//modalAlertToShowCustomMessage(response.message, 'success');
							swal(
									{
										title : "PDD RIC Operations",
										text : response.message,
										type : "success",
									}).then(function() {
										$('#cancelHref').get(0).click();
										
							});
							//showAlertAndCallFunction("PDD RIC Operations",response.message,"success",location.reload());
						}
						  $('#wait').hide();
					}, 
					error: function(jqXHR, textStatus, errorThrown) {
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);
						
					}
				});
				 
				 
		
				 
		    	}
	    });
	    
	}
	
	function showUploadmodal(el)
	{
		var leadid= $(el).attr('leadid');
		$('#uploadRC').modal('show');
		$('#leadIdUpload').val(leadid);
	}
	
	function submitPddRicBulkUpload()
	{
		if($("#file-1")[0].files.length < 1){
			modalAlertToShowCustomMessage("Please upload zip file", 'warning');
			return false;
		}
		
		var ext = $('#file-1').val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['zip','gz']) == -1) {
			modalAlertToShowCustomMessage("Only ZIP/GZIP files are allowed", 'warning');
			return;
		}
		
		swal({
	        title: "Are you sure?",
	        text: "You want to upload vehicle details zip file.",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {

				$('#wait').show();

				var formData = new FormData();
				var file = document.getElementById('file-1').files[0]
				formData.append('file',file );
		    	$.ajax({
						headers : {
							'X-CSRF-TOKEN' : $('#csrfToken').val(),'Content-Type': undefined
						},
						url : "/AdminModule/pddRicBulkUpload",
						type : 'POST',
					//	async : false,
						processData : false, // tell jQuery not to process the data
						contentType : false, // tell jQuery not to process the data
						data : formData,
						success : function(response) {
							$('#wait').hide();
							resetForm('submitCustomNotification');
							console.log(response);
							if(response==null || undefined == response){
								$( "#pddUpload-excel-download-link" ).hide();
								$("#fileLabel").html('Upload RC Copy Bulk Data File(.zip)');
								modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid zip file. Use sample file for reference', 'warning');
							}
							else if(response.status == 'success')
							{
								var download = document.getElementById('pddUpload-error-excel-download-link');
								download.setAttribute('href', response.zipUrl);	
								console.log(response.zipUrl);
								download.setAttribute('download', 'LogFile.zip');
								$( "#pddUpload-excel-download-link" ).show();
								$("#fileLabel").html('Upload RC Copy Bulk Data File(.zip)');
								modalAlertToShowCustomMessage('Zip file has been processed successfully', 'success');
							}
							else if(response.status == 'failure')
							{
								$( "#pddUpload-excel-download-link" ).hide();
								$("#fileLabel").html('Upload RC Copy Bulk Data File(.zip)');
								modalAlertToShowCustomMessage(response.message, 'warning');
							}
							
						}
					});
			
	    });
	}
	
	function showHideAppVersion(id)
	{
		if(id == 'all')
		{
			$('#all').show();
			$('#android').hide();
			$('#ios').hide();
			$('#dType').val('all');
			
		}			 
		else if (id == 'android'){
			$('#all').hide();
			$('#android').show();
			$('#ios').hide();
			$('#dType').val('3');
		}
		else if (id == 'ios'){
			$('#all').hide();
			$('#android').hide();
			$('#ios').show();
			$('#dType').val('1');
		}
	}
	
	

	
	  function fatchLeadDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  var totalItems="";
		  var totalcount="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		           // alert( "it is true" );
		        }
		}   
		    //alert(checkedValue);
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/unAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  checkedValue:checkedValue,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	            if ($.isEmptyObject(data)) {
	            	//alert("if");
	                console.log("no responseJSON found");
	                document.getElementById('total_reg').innerHTML="";
	                $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){
                    	 totalcount = item.count;
                    	 totalItems= item.totalCount;
                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div><div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span> "+
								" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><span class='act-dct checkbox-btn checkbtn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
								" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Assign</span></label><div class='right-arrow'><a  href='/AdminModule/unassignLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></span></div></li>";
                        if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
							$('#total_reg').val(item.totalCount);
                        
                        if(item.totalCount=='1')
                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
                        else
                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
                       // alert(item.totalCount);
						 
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                    if (flag) {
	                       //totalcount = responseData.count;
	                    	if (totalcount == 0 || totalcount == ''){
	                    		totalcount = 0;
	        	                $('#myPager').unbind('page');
	      					  $('#myPager').hide();
	      					document.getElementById('total_reg').innerHTML="";
	      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	      					document.getElementById('selectAllSpanId').style.display='none';
	                    	}else{
	                    		document.getElementById('selectAllSpanId').style.display='block';
	                    	}

	                        //alert("totl---"+totalcount);
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                       /* if (totalcount < 6) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                        else   $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                    */}
	                    $('#myDiv').append(htmlFragment);
/*	                    $('.reassignCheck').off('click');
	                    $(".reassignCheck").on('click',function (item) {
	         	    	   if($(this).attr('id') == 'checkAll')
	         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	         	    	  $('.assign_fixbox').slideToggle('slow');
	         	    	});*/
	                    
	                	$(".reassignCheck").off('click');
	                	$(".reassignCheck").on('click',function (item) {
	                		   if($(this).attr('id') == 'checkAll')
	                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	                		  $('.assign_fixbox').slideDown('slow');
	                		  var checkbox= $(".reassignCheck");
	                		  var statusHide=false;
	                		  $.each(checkbox,function(index,value){
	                		    var ckVal=value.checked;
	                		    if(ckVal)
	                		      statusHide=true;
	                		  });
	                		  if(!statusHide){
	                		    $('.assign_fixbox').slideUp('slow');
	                		  }
	                		});
	                    
	                    
	                    //alert("XVv");
	                   // return;
	                    $('#wait').hide();
	                    
	                    
	                    $('#myPager').bootpag({
							total:(parseInt(Math.ceil(totalItems/5))),
							page:1,
							maxVisible: 10,
							
						}).on("page", function(event, num){
							//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
							//alert("num-"+num);
							fatchLeadDetailsListByPagination((num-1)*5,5,true)
							//alert("else")
						});
							
	                }
	            }
	        }
    
	       	
	        });
	     // alert("2");
	}

	  
	  function fatchLeadDetailsListByPagination(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		            //cbarray[i].checked = false;
		           // alert( "it is true" );
		        }
		}   
		    //alert(checkedValue);
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/unAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  checkedValue:checkedValue,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){
                    	 totalcount = item.count;
 /*                       htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div><div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span> "+
								" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a  href='/AdminModule/unassignLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><span class='act-dct checkbox-btn checkbtn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
								" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Assign</span></label></span></div></li>";
*/
                         htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div><div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span> "+
							" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span></div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><span class='act-dct checkbox-btn checkbtn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
							" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Assign</span></label><div class='right-arrow'><a  href='/AdminModule/unassignLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></span></div></li>";
	 
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                    if (flag) {
	                       totalcount = responseData.count;
	                        //alert("totl---"+totalcount);
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                       /* if (totalcount < 6) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                        else   $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                    */}
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
/*	                    $('.reassignCheck').off('click');
	                    $(".reassignCheck").on('click',function (item) {
	         	    	   if($(this).attr('id') == 'checkAll')
	         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	         	    	  $('.assign_fixbox').slideToggle('slow');
	         	    	});*/
	                	$(".reassignCheck").off('click');
	                	$(".reassignCheck").on('click',function (item) {
	                		   if($(this).attr('id') == 'checkAll')
	                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	                		  $('.assign_fixbox').slideDown('slow');
	                		  var checkbox= $(".reassignCheck");
	                		  var statusHide=false;
	                		  $.each(checkbox,function(index,value){
	                		    var ckVal=value.checked;
	                		    if(ckVal)
	                		      statusHide=true;
	                		  });
	                		  if(!statusHide){
	                		    $('.assign_fixbox').slideUp('slow');
	                		  }
	                		});
	                }
	            }
	        }
    
	       	
	        });
	     // alert("2");
	}


	
/*	  function fatchLeadDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		    for(var i = 0; i < cbarray.length; i++){

		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		        	 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";

		            cbarray[i].checked = false;
		            alert( "it is true" );
		        }
		}   
		  
		    alert(checkedValue);
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/unAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){
                    	 totalcount = item.count;
                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div><div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><select class='assign-second'><option value=" + item.los + " " +
                        		" >" + item.los + "</option></select></div><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span> "+
								" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' >" + item.premium + "<img src='images/rupee.svg' width='15'>" +
								" </span><div class='right-arrow'><a  href='/AdminModule/unassignLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><span class='act-dct checkbox-btn checkbtn'><input value='value-1' id='checkItem' name='rc2' " +
								" type='checkbox'><label for='checkItem' onclick=''><span>Assign</span></label></span></div></li>";
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    if (flag) {
	                    	
	                       // totalcount = responseData.count;
	                        //alert("totl---"+totalcount);
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                        if (totalcount < 6) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                        else   $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                    }
	                   
	                    $('#myDiv').append(htmlFragment);
	                }
	            }
	        }
    
	       	
	        });
	     // alert("2");
	}
*/
	  
	  
	  function fatchAssignLeadDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var htmlFragment = "";
		  $('#wait').show();
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/assignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div> <a href='#'><img src='images/pencil.svg' width='25'></a><div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span> "+
								" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a href='assign-detail.html'><img src='images/right-arrow.svg' width='12'></a></div>" +
								" <div > <span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span> <span class='payzappBtn'><a href='https://www.hdfcbank.com/htdocs/common/PayZapp/index.html'>PayZaap Link</a></span> </div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span><span class='assign-second' " +
								"  ></span></div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='status'><span class='sts-heading'>Status - </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div><div class='status'>" +
								" <span class='sts-heading'>Assign to - </span><span class='sts-result'>" + item.assignee + "</span> "+
								"  </div><span class='act-dct checkbox-btn checkbtn'><input value='value-1' id='checkItem' name='rc2' " +
								" type='checkbox' class='reassignCheck'><label for='checkItem' onclick=''><span>Assign</span></label></span></div></li>";
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                    if (flag) {
	                        //totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                    }
	                   
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                }
	            }
	        }
    
	       	
	        });
	     // alert("2");
	}

	  function leadHistory(losNum) {
		  //alert("history");
		  var htmlFragment = "";
		  $('#wait').show();
		  var dataRequest={
				  "losNum":losNum
			  }
	      $.ajax({
			  //headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	//url: "/AdminModule/selfAssignInsuranceLead1",
		       // type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		    	url: "/AdminModule/selfAssignLeadHistory",
		        type: 'POST',
		        data: {
		        	losNum:losNum,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
		        	$('#historyData').empty();
		            if ($.isEmptyObject(data)) {
		            	$('#wait').hide();
		                console.log("no responseJSON found");
		                $('#historyData').append("No History Found.");
		               // modalAlertToShowCustomMessage('Oops no Histroy Found.', 'error');
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                        htmlFragment += "<li> <div class='task-status'><img src='images/flag.svg' width='16'> " + item.oldDisPostion + " >>" +
						                        		" " + item.currentDisPostion + "</div><div class='small-text'>Last Activity - " + item.lastDoneActivity + "</div>			<div class='small-text'>Last Login - " + item.empName + "</div>" +
						                        		"<div class='small-text'>" + item.lastLogin + "</div></li>";
	                    });
				if (undefined != responseData && ''!=responseData) {
		                    $('#historyData li').remove();
/*		                    if (flag) {
		                       // totalcount = responseData.count;
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                    }*/
		                   
		                    $('#historyData').append(htmlFragment);
		                    
		                }/*else{
		                	modalAlertToShowCustomMessage('Oops some error occurred.', 'error');
		                }*/
				else{
					 $('#historyData').append("No History Found.");
				}
				$('#wait').hide();
		            }
		        }
		        });
		}
	  
	  function calculateApprovalPremiumByPage(){
		  var losNum = document.getElementById("losNumber").value; 
		  calculateApprovalPremium(losNum);
	  }
	  function submitupdateStatusByPage(){
		  var losNum = document.getElementById("losNumber").value; 
		  document.getElementById('editUserLosNumber').value=losNum; 
		  submitupdateStatus();
	  }
	  function calculatePremiumByPage() {
		  var losNum = document.getElementById("losNumber").value; 
		  calculatePremium(losNum);  
	  }
	  function payzappLinkSendByPage() {
		  var losNum = document.getElementById("losNumber").value; 
		 // alert(losNum);
		  //return;
		  payzappLinkSend(losNum);  
	  }
	  function calculatePremium(losNum) {
		  //alert(losNum);
		  
		  document.getElementById('calculateApprovalTab').style.display='none';
		  
			document.getElementById("idvAmount").value="";
			document.getElementById("hiddenIdvAmount").value="";
			document.getElementById("basicPrem").value="";
			document.getElementById("totalTaxes").value="";
			document.getElementById("depCovPrice").innerHTML="";
			document.getElementById("totalAmount").innerHTML="";
			document.getElementById("discountValue").value="";
			document.getElementById("totalAmount").innerHTML="";
			document.getElementById("calculateShareId").value="";
			document.getElementById("hiddenCalculateMobNum").value="";
			var prevNcbVal="";
		  var htmlFragment = "";
		  var ncbVal="";
		  var firstCheck="";
		  $('#wait').show();
		  var dataRequest={
				  "losNum":losNum
			  }
	      $.ajax({
			  //headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	//url: "/AdminModule/selfAssignInsuranceLead1",
		       // type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		    	url: "/AdminModule/calculatePremium",
		        type: 'POST',
		        data: {
		        	losNum:losNum,
					  _csrf:$('#csrfToken').val()
		        },
				success:function(data){
					$('#wait').hide();
					console.log(data);
					/*$('#depCovNameList').empty().append('<option selected value="all">Select DepCover Name</option>');*/
					$('#depCovNameList').empty().append('');
					//var abc=data.insuranceSegmentDepCoverJoin;
					$.map(data,function(item){
						var chacekname=item.depCapName;
						//alert(item.ncb+"---"+item.zeroDep);
						if(item.zeroDep){
							//alert("open dep cap");
							     // $(".dep-amount").slideToggle('slow');
							 document.getElementById("depCapDiv").style.display = "block";
							      $('#checkDepCap').prop('checked', true);
						}
						//alert("in-"+item.ncb);
						if(null != item.ncb &&  0 < parseInt(item.ncb)  ){
							//alert("ncb");
						      //$(".nbc-amount").slideToggle('slow');
							document.getElementById("ncbValDiv").style.display = "block";
						     /* $('#checkNcb').prop('checked', true);*/
							 $('#checkNcb').prop('checked', false);
						      prevNcbVal=item.ncb;
						     // $('#ncbValue').val(item.ncb);
						     // alert(item.ncb);
					}
						if(null !=item.ncbValues)
							ncbVal=item.ncbValues;
						if(chacekname!=null){
							$('#depCovNameList').append('<option value="'+item.depCapId+'" code="'+item.depCapName+'_'+item.depCapId+'"> '+item.depCapName+'</option>');
						}
						/*
						for(var i = 0; i < res.length; i++){
							$('#ncbValue').append('<option value='+res[i]+'>' +res[i]+'</option>');
						}
						*/
						if(item.idvAmount!=null){
							//alert(item.idvAmount);
							document.getElementById("idvAmount").value=item.idvAmount;
							
							document.getElementById("hiddenIdvAmount").value=item.idvAmount;
							
							document.getElementById("basicPrem").value=item.basicPremium;
							document.getElementById("totalTaxes").value=item.taxAmount;
							document.getElementById("losNumberValue").value=losNum;
							document.getElementById("tariff").value=item.tariff;
							document.getElementById("paAmount").value=item.pa;
							document.getElementById("tpAmount").value=item.tp;
							document.getElementById("depCovPrice").innerHTML=item.zeroDepAmt;
							document.getElementById("discountValue").value=item.discountAmount;
							document.getElementById("totalAmount").innerHTML="<img src='images/rupee.svg' width='15'>"+inrFormat(item.premium);
							document.getElementById("calculateShareId").value=item.mobNum;
							document.getElementById("hiddenCalculateMobNum").value=item.mobNum;
							document.getElementById("hiddentotalAmount").value=item.premium;
							
							//document.getElementById("totalAmount1").innerHTML=item.premium;
						}
						if(firstCheck == ""){
							firstCheck=item.depCapId;
						}
						//alert(item.ncb+"---");
/*						if(null != item.ncb){
						     // $(".nbc-amount").slideToggle('slow');
							//alert("in");
						      $('#ncbValue').val(item.ncb);
						      prevNcbVal=item.ncb;
						     // alert(item.ncb);
					}*/
						
					});
					$('#depCovNameList').val(firstCheck);
					var res = ncbVal.split(",");
					$('#ncbValue').html('');
					for(var i = 0; i < res.length; i++){
						//alert("apend");
						$('#ncbValue').append('<option value='+res[i]+'>' +res[i]+'</option>');
					}
					//alert(prevNcbVal);
					if(null != prevNcbVal &&  0 < parseInt(prevNcbVal)){
						$('#ncbValue').val(prevNcbVal);
					}else{
						$('#ncbValue').val('0');
					}
					//$('#ncbValue').val(item.ncb);
				}
/*		        success: function(data) {
		        	console.log(data);
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                        htmlFragment += "";
	                    });
				if (undefined != responseData) {
					$.map(data,function(item){
						$('#depCovNameList').append('<option value="'+item.id+'">'+item.insuranceDepCoverMaster.name +'</option>');
					});
		                   // $('#depCovNameList').append(htmlFragment);
		                }
		            }
		        }*/
		        });
		     // document.getElementById("").value=item.depCapId;
		}
	  
	  
	  function fatchSelfDetailsList(startLimit,endLimit,flag) {
		//  alert(endLimit+"-ecode--"+startLimit);
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  var totalItems="";
		  var totalcount="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){

		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}   
		    //alert("first-"+checkedValue);
		   // return;
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/selfAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	       /* data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  checkedValue:checkedValue,
				  _csrf:$('#csrfToken').val()
	        },*/
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
			/*	$('#dailyReportsDiv #mylist').html('');
				$('#dailyReportsDiv #myPager').html('');
				$('#dailyReportsDiv #total_reg').html('');*/
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                $('#myPager').unbind('page');
					  $('#myPager').hide();
					  document.getElementById('total_reg').innerHTML="";
					  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	 totalItems= item.totalCount;
                    	 //alert(item.roleType);
                    	/* */
                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "" ;
                        if(item.currentDispositionId != "15" && item.roleType!="1" ){		
                        	 htmlFragment +="<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a>" ;
                        }
                        htmlFragment +=		"</div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>   "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div>" +
								
								" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>Assign to - </span><span class='sts-result'>" + item.assignee + "</span></div> "+
								" <div class='data_list'><span class='sts-heading'>Status -  </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div> "+
								"  <div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> </div> "+
								
								
								
								"<div class='col-lg-3 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span>" ;
								
								if((item.currentDispositionId != "15" && item.currentDispositionId != "10" ) && item.roleType!="1" ){
									// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
									 htmlFragment +=	"<div class='' data-toggle='modal' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div>";
								}else{
									 htmlFragment +=	"<div class='' data-toggle='modal'  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

								}
								 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'><span class='act-dct checkbox-btn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
								" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Reassign</span></label></span>" +
/*								" <div class='assigne-name'>  <span class='sts-heading'>Assign to - </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
*/								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
								if((item.currentDispositionId != "15" && item.currentDispositionId != "10" )&& item.roleType!="1" ){		
									htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
							  }
							if(item.roleType=="13" && item.approvalFlag=="1" && item.roleType!="1" ){
								 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
								"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
							}
							htmlFragment +="<div class='right-arrow'><a href='/AdminModule/losDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>";

							 htmlFragment +="</div></div></li>";
							 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
									$('#total_reg').val(item.totalCount);
							// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
		                      if(item.totalCount=='1')
		                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
		                        else
		                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
		  
							 
							 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
							 
							// alert("total-"+item.totalCount);
			                    
                    });
                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
*/			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                    //alert(totalcount);
	                    if (flag) {
	                    	 //totalcount = responseData.count;
	                    	if (totalcount == 0 || totalcount == ''){
	                    		totalcount = 0;
	        	                $('#myPager').unbind('page');
	      					  $('#myPager').hide();
	      					document.getElementById('total_reg').innerHTML="";
	      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	      					document.getElementById('selectAllSpanId').style.display='none';
	                    	}else{
	                    		document.getElementById('selectAllSpanId').style.display='block';
	                    	}
	                    	/*
	                        totalcount = responseData.count;
	                    	//alert(totalcount);
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
	                        if ($('#fromPage').html() == $('#pageRange').html()) 
	                        	{
	                        	//alert("inner");
	                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                        	}
	                   // alert("end");
	                    */}
	                    
	                    //alert($('#total_reg').val());
	                    
	                    $('#myPager').bootpag({
							total:(parseInt(Math.ceil(totalItems/5))),
							page:1,
							maxVisible: 10,
							
						}).on("page", function(event, num){
							//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
							//alert("num-"+num);
							fatchSelfDetailsListByPagination((num-1)*5,5,true)
							//alert("else")
						});
							
	                   
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
/*	                    $('.reassignCheck').off('click');
	                    $(".reassignCheck").on('click',function (item) {
	                    	alert("cjek");
	         	    	   if($(this).attr('id') == 'checkAll')
	         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	         	    	  $('.assign_fixbox').slideToggle('slow');
	         	    	});*/
	                	$(".reassignCheck").off('click');
	                	$(".reassignCheck").on('click',function (item) {
	                		   if($(this).attr('id') == 'checkAll')
	                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	                		  $('.assign_fixbox').slideDown('slow');
	                		  var checkbox= $(".reassignCheck");
	                		  var statusHide=false;
	                		  $.each(checkbox,function(index,value){
	                		    var ckVal=value.checked;
	                		    if(ckVal)
	                		      statusHide=true;
	                		  });
	                		  if(!statusHide){
	                		    $('.assign_fixbox').slideUp('slow');
	                		  }
	                		});
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                }
	            }
	        }
	        });
	      //alert("2");
	}
	  
	  function fatchSelfDetailsListByPagination(startLimit,endLimit,flag) {
		 // alert(endLimit+"-fatchSelfDetailsListByPagination--"+startLimit);
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){

		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		        	 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";

		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}   
		  //  alert(checkedValue);
		   // return;
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/selfAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  /*checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
			/*	$('#dailyReportsDiv #mylist').html('');
				$('#dailyReportsDiv #myPager').html('');
				$('#dailyReportsDiv #total_reg').html('');*/
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                $('#myPager').unbind('page');
					  $('#myPager').hide();
					  document.getElementById('total_reg').innerHTML="";
					  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	 //alert(item.roleType);
                    	/* */
  /*                      htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>   "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a href='/AdminModule/losDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div><div class='col-lg-12'>" +
								" <span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'><span class='act-dct checkbox-btn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
								" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Reassign</span></label></span>" +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span> "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
							if(item.roleType=="13"){
								 htmlFragment +="  <div class='rejectbtn'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
								"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
							}
							 htmlFragment +="</div></div></li>";
	*/						 
                    	 
/*                         htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>   "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class='right-arrow'><a href='/AdminModule/losDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>" ;
							
							if(item.currentDispositionId != "15"){
								// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
								 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";

							}
							 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'><span class='act-dct checkbox-btn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
							" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Reassign</span></label></span>" +
							" <div class='assigne-name'>  <span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
							if(item.currentDispositionId != "15"){		
								htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
						  }
						if(item.roleType=="13" && item.approvalFlag=="1"){
							 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
							"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
						}
						 htmlFragment +="</div></div></li>";

                    	 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
									$('#total_reg').val(item.totalCount);
							// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
                         if(item.totalCount=='1')
                         	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
                         else
                         	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
*/
                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>   "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div>" +
							
							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div> "+
							" <div class='data_list'><span class='sts-heading'>Status -  </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div> "+
							"  <div class='data_list'><span class='sts-heading'> TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> </div> "+
							
							
							
							"<div class='col-lg-3 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span>" ;
/*							
							if(item.currentDispositionId != "15" && item.roleType!="1" ){
								// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
								 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
							}*/
/*							if(item.currentDispositionId != "15" && item.roleType!="1" ){
								// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
								 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn'>PayZapp Link</span></div>";
							}else{
								 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

							}*/
							
							if((item.currentDispositionId != "15"  && item.currentDispositionId != "10" ) && item.roleType!="1" ){
								// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
								 htmlFragment +=	"<div class='' data-toggle='modal' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div>";
							}else{
								 htmlFragment +=	"<div class='' data-toggle='modal'  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

							}
							 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'><span class='act-dct checkbox-btn'><input value='" + item.los + "' id='" + item.los + "' name='reassignBox' " +
							" type='checkbox' class='reassignCheck'><label for='" + item.los + "' onclick=''><span>Reassign</span></label></span>" +
/*								" <div class='assigne-name'>  <span class='sts-heading'>Assign to -   </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
*/								" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
							if((item.currentDispositionId != "15" && item.currentDispositionId != "10" ) && item.roleType!="1" ){		
								htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
						  }
						if(item.roleType=="13" && item.approvalFlag=="1" && item.roleType!="1" ){
							 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
							"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
						}
						htmlFragment +="<div class='right-arrow'><a href='/AdminModule/losDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>";

						htmlFragment +="</div></div></li>";
						 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
								$('#total_reg').val(item.totalCount);
						// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
	                      if(item.totalCount=='1')
	                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
	                        else
	                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";

							 
							 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
							 
							 //alert("total-"+$('#total_reg').val);
			                    
                    });
                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
*/			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                    	 totalcount = responseData.count;
	                    	/*
	                        totalcount = responseData.count;
	                    	//alert(totalcount);
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
	                        if ($('#fromPage').html() == $('#pageRange').html()) 
	                        	{
	                        	//alert("inner");
	                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                        	}
	                   // alert("end");
	                    */}
	                    
	                   // alert($('#total_reg').val());
	                    
	                  /*  $('#myPager').bootpag({
							total:(parseInt(Math.ceil($('#total_reg').val()/5))),
							page:1,
							maxVisible: 10,
							
						}).on("page", function(event, num){
							//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
							//alert("num-"+num);
							fatchSelfDetailsList((num-1)*5,5,true)
							//alert("else")
						});*/
							
	                   
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                  /*  $('.reassignCheck').off('click');
	                    $(".reassignCheck").on('click',function (item) {
	         	    	   if($(this).attr('id') == 'checkAll')
	         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	         	    	  $('.assign_fixbox').slideToggle('slow');
	         	    	});*/
	                	$(".reassignCheck").off('click');
	                	$(".reassignCheck").on('click',function (item) {
	                		   if($(this).attr('id') == 'checkAll')
	                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
	                		  $('.assign_fixbox').slideDown('slow');
	                		  var checkbox= $(".reassignCheck");
	                		  var statusHide=false;
	                		  $.each(checkbox,function(index,value){
	                		    var ckVal=value.checked;
	                		    if(ckVal)
	                		      statusHide=true;
	                		  });
	                		  if(!statusHide){
	                		    $('.assign_fixbox').slideUp('slow');
	                		  }
	                		});
	                }
	            }
	        }
	        });
	      //alert("2");
	}

	  
	  function sendPayzappLink(losNum) {
		 // alert("hello");
		 // var checkedValue = $('.checkPayzappLink').val();
		  var  checkPayzappLink= document.getElementById("checkPayzappLink").checked;
		  //alert(checkPayzappLink);
		  var htmlFragment = "";
		  //var  checkPayzappLink= document.getElementById("checkPayzappLink").checked;
		  var  checkDepCap= document.getElementById("checkDepCap").checked;
		  var  checkNcb= document.getElementById("checkNcb").checked;
		  //var losNum = document.getElementById("losNumber").value; 
		  var losNum = document.getElementById("losNumberValue").value; 
		 // var depCovPrice=document.getElementById('depCovPrice').innerHTML;
		  var idvAmount=document.getElementById("idvAmount").value; 
		  var basicPremium=document.getElementById("basicPrem").value; 
		  var totalTaxes=document.getElementById("totalTaxes").value; 
		  var ncbValue=document.getElementById("ncbValue").value; 
		  var discountValue=document.getElementById("discountValue").value; 
		  var tariff=document.getElementById("tariff").value; 
		  var depCovId=document.getElementById("depCovNameList").value;
		  var calculateShareId=document.getElementById("calculateShareId").value;
		  
		  if(null != checkPayzappLink && true==checkPayzappLink){
			  //alert("if");
			  var  calculayePayzappList= document.getElementById("calculayePayzappList").value;	
			  if(null != calculayePayzappList && "Mobile Number" ==calculayePayzappList){
				  var mobNum=document.getElementById("calculateShareId").value;
				  if (/^[6789]\d{9}$/.test(mobNum)) {
					    // value is ok, use it
					} else {
						 modalAlertToShowCustomMessage('Please Enter Correct 10 Digit Mobile Number', 'error');
						  return;
					}
			  }
			  else{  
				  var emailId=document.getElementById("calculateShareId").value;
					  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					  if(emailId=="" || emailId==null){
						  modalAlertToShowCustomMessage('Please enter email ID', 'error');
						  return;
					  }
				        if (reg.test(emailId) == false) 
				        {
				        	modalAlertToShowCustomMessage('Please Enter Correct Email Id ', 'error');
							  return;
				        }
			  } 

		  }
		  //alert("return");
		  //return;
/*		  var dataRequest={
			  "losNum":losNum,
			  "depCap":depCap,
			  "idv":idv,
			  "basicPremium":basicPremium,
			  "tax":tax,
			  "ncb":ncb,
			  "discount":discount,
			  "checkPayzappLink":checkPayzappLink
		  }*/
		 // alert("-"+losNum);
		  $('#wait').show();
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/sendPayzappLink",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        		losNum:losNum,
	        		depCovId:depCovId,
				  idvAmount:idvAmount,
				  basicPremium:basicPremium,
				  totalTaxes:totalTaxes,
				  ncbValue:ncbValue,
				  checkPayzappLink:checkPayzappLink,
				  checkDepCap:checkDepCap,
				  checkNcb:checkNcb,
				  discountValue:discountValue,
				  tariff:tariff,
				  calculateShareId:calculateShareId,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	        	  $('#wait').hide();
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                modalAlertToShowCustomMessage('Oops some error occurred.', 'error');
	            } else {
	            	 if (data == "approvalIspending") {
	         			modalAlertToShowCustomMessage("Request sent for approval to TPPSM. You will be able to make any changes only after approval.", 'error');
	         		}else if(data == "nopreviouspolicy") {
	        			modalAlertToShowCustomMessage('Please enter Previous Policy Number.', 'error');
	        		}else if(data == "idvMisMatch") {
	        			modalAlertToShowCustomMessage('Please Do not Increment or Decrement IDV Value more then 10% Percent.', 'error');
	        		}else if(data == "idvMisMatchSecond") {
	        			modalAlertToShowCustomMessage('Please Do not Increment or Decrement IDV Value more then 25% Percent.', 'error');
	        		}	      
	            	 
	            	 else if (data != "") {
	         			//modalAlertToShowCustomMessage(data, 'success');
	         			//location.reload();
	         			swal(
								{
									title : data,
									text : "",
									type : "success",
								}).then(function() {
									location.reload();
									
						});

	         			
	         			
	         		}
	            }
	        }
	        });
	     // alert("2");
	}
	  function fetchUAMCityList(city, state){
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				url: "/AdminModule/fetchUAMCityList",
				type: 'POST',
				//async:false,
				//dataType: 'JSON',
				success:function(data){
					var htmlCity="";
					var htmlState="";
					$.each(data, function(i, item) {
						htmlCity += '<option value="'+i+'" code="'+i+'_'+data[i]+'">'+i+'</option>';
						htmlState += '<option value="'+data[i]+'" code="'+i+'_'+data[i]+'">'+data[i]+'</option>';
					});
					$('#'+city).append(htmlCity);
					$('#'+state).append(htmlState);
				}
			});
		}
	  
	  function changeStateName(el,stateList){
		  	$('#hiddenState').val('');
		  	$('#hiddenLocation').val('');
			var arrayData= $(el).find(':selected').attr('code').split("_");
			if(undefined != arrayData){
				$('#'+stateList).val(arrayData[1]);
				$('#hiddenState').val(arrayData[1]);
				$('#hiddenLocation').val(arrayData[0]);
			}
		}
	  
	  function changeRoleName(el,roleList){
		  	$('#hiddenRole').val('');
			//var arrayData= $(el).find(':selected').attr('code').split("_");
		  	var arrayData= $(el).find(':selected').val();
			if(undefined != arrayData){
				$('#'+roleList).val(arrayData);
				$('#hiddenRole').val(arrayData);
				/*$('#'+roleList).val(arrayData[1]);
				$('#hiddenRole').val(arrayData[1]);*/
			}
		}
	  function changeDepartmentName(el,deptList){
		  	$('#hiddenDepartmentId').val('');
			//var arrayData= $(el).find(':selected').attr('code').split("_");
		  	var arrayData= $(el).find(':selected').val();
			if(undefined != arrayData){
				$('#'+deptList).val(arrayData);
				$('#hiddenDepartmentId').val(arrayData);
				/*$('#'+deptList).val(arrayData[1]);
				$('#hiddenDepartmentId').val(arrayData[1]);*/
			}
		}
	  function changeBranchName(el,branchList){
		  	$('#hiddenBranchId').val('');
			//var arrayData= $(el).find(':selected').attr('code').split("_");
		  	var arrayData= $(el).find(':selected').val();
			if(undefined != arrayData){
				$('#'+branchList).val(arrayData);
				$('#hiddenBranchId').val(arrayData);
				/*$('#'+branchList).val(arrayData[1]);
				$('#hiddenBranchId').val(arrayData[1]);*/
			}
		}
	  
	  
	 /* function payzappLinkSend(losNum) {*/
	  function payzappLinkSend() {
		  var losNum = document.getElementById("editUserLosNumber").value; 
		  var emailId=document.getElementById('payzappEmailId').value;
		  var mobNum=document.getElementById("payzappMobNum").value;
		  /*alert(losNum);
		  alert(emailId);
		  alert(mobNum);
		  return;*/
/*		  if("" ==mobNum && "" ==emailId){
			  modalAlertToShowCustomMessage('Please Enter Either Mobile Number or Email Id ', 'error');
			  return;

		  }*/
		  if(null != mobNum && "" !=mobNum){
			  if (/^[6789]\d{9}$/.test(mobNum)) {
				    // value is ok, use it
				} else {
					 modalAlertToShowCustomMessage('Please Enter Correct 10 Digit Mobile Number ', 'error');
					  return;
				}
		  }
		  if(null != emailId && "" !=emailId){  
				  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		
			        if (reg.test(emailId) == false) 
			        {
			        	modalAlertToShowCustomMessage('Please Enter Correct Email Id ', 'error');
						  return;
			        }
		  } 
		  
		  if("" ==mobNum && "" ==emailId){
			  modalAlertToShowCustomMessage('Please Enter Mobile No. or Email Id ', 'error');  
			  return;
		  }
		  
		  $('#wait').show();
		  var htmlFragment = "";
		  var dataRequest={
			  "losNum":losNum,
			  "emailId":emailId,
			  "mobNum":mobNum
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/payzappLinkSend",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 losNum:losNum,
				  emailId:emailId,
				  mobNum:mobNum,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	$('#wait').hide();
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = data;
	                //alert(responseData);
/*                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                        htmlFragment += " ";
                    });*/
			if (undefined != responseData) {
                if (responseData == "success") {
        			//modalAlertToShowCustomMessage('PayzApp Linkkkk Sent successfully!', 'success',location.reload());
                	swal(
							{
								title : "PayzApp Link Sent successfully!",
								text : "",
								type : "success",
							}).then(function() {
								location.reload();
								
					});
        			//showAlertAndCallFunction("PayzApp RIC Operations",response.message,"success",location.reload());
        			
        			
        			
        			
        			//location.reload();
        			
        		} else if (responseData == "failure") {
        			modalAlertToShowCustomMessage(' Payment can be initiated only after approval', 'error');
        		}else if (responseData == "approvalPending") {
        			modalAlertToShowCustomMessage(' Payment can be initiated only after approval.', 'error');
        		}else if(responseData == "nopreviouspolicy") {
        			modalAlertToShowCustomMessage(' Please enter Previous Policy Number.', 'error');
        		}
			}
	            }
	        }
	        });
	     // alert("2");
	}
		/*function changeCityName(el,cityList){
			var arrayData= $(el).find(':selected').attr('code').split("_");
			if(undefined != arrayData){
				$('#'+cityList).val(arrayData[0]);
			}
		}*/
	  
	  function isLastFivePassword(el){
		  
		  console.log('el:: '+el);
		  
		  var e_code = $("input[name=employeeCode]").val();
		  var password = $(el).val();
		  var hiddenPassword = $('#hiddenPassword').val();
		  if(hiddenPassword!=password){
			  $('#wait').show();
			  var dataRequest={
					  "e_code":e_code,
					  "password":password
				  }
				$.ajax({
					type:'POST', 
					url: "/AdminModule/isLastFivePassword", 
					data: {
						e_code:e_code,
						password:password,
						_csrf:$('#csrfToken').val()
			        },
					//async:false,
					//dataType: 'JSON',
					success:function(data){
						$('#wait').hide();
						if(data==true){
							modalAlertToShowCustomMessage("You cannot set your last 10 password. Please try again.", 'warning');
							$('#editpassword').val(hiddenPassword);
						}
					}
				});
		  }
		  
		  
	  }
	  
	  function showHidePassword(ID){
		  var x = document.getElementById(ID);
		  var t = document.getElementsByClassName("pass-showhide"); 
		    if (x.type === "password") {
		        x.type = "text";
		        $(".pass-showhide").text("Hide");
		    } else {
		        x.type = "password";
		        $(".pass-showhide").text("Show");
		    }
	  }
	  function changepayzappShareId(value){
		//alert(value);  
		if(null !=value && "" !=value){
			if(value=="Mobile Number"){
				var mobnum=document.getElementById("hiddenCalculateMobNum").value;
				document.getElementById("calculateShareId").value=mobnum;
			}else{
				document.getElementById("calculateShareId").value="";
			}
		}
	  }
	  function changeDepVal(val){
/*		  var val=$(el).find(':selected').attr('code').split("_");
		  //alert(val[1]);
		  document.getElementById("depCovPrice").innerHTML=val[1];*/
			 // alert("1");
			 // var checkedValue = $('.checkPayzappLink').val();
			  var  checkDepCap= document.getElementById("checkDepCap").checked;
			  var  checkNcb= document.getElementById("checkNcb").checked;
			  var losNum = document.getElementById("losNumber").value; 
			 // var depCovPrice=document.getElementById('depCovPrice').innerHTML;
			  var idvAmount=document.getElementById("idvAmount").value; 
			  var basicPremium=document.getElementById("basicPrem").value; 
			  var totalTaxes=document.getElementById("totalTaxes").value; 
			  var ncbValue=document.getElementById("ncbValue").value; 
			  var discountValue=document.getElementById("discountValue").value; 
			  var tariff=document.getElementById("tariff").value; 
			  var tp=document.getElementById("tpAmount").value; 
			  var pa=document.getElementById("paAmount").value; 
			  var zeroDepMul=val;
			 // alert(checkPayzappLink);
			//  alert(checkDepCap);alert(checkPayzappLink);alert(losNum);alert(depCovPrice);alert(idvAmount);alert(basicPrem);alert(totalTaxes);alert(ncbValue);alert(discountValue);
			//  alert(depCovPrice);
			  var htmlFragment = "";
			/*  var dataRequest={
				  "losNum":losNum,
				  "depCovPrice":depCovPrice,
				  "idvAmount":idvAmount,
				  "basicPremium":basicPremium,
				  "totalTaxes":totalTaxes,
				  "ncb":ncb,
				 
				  "checkPayzappLink":checkPayzappLink,
				  "checkDepCap":checkDepCap,
				  "checkNcb":checkNcb,
				  "discountValue":discountValue
			  }*/
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/calculateDepCapAmount",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
					  idvAmount:idvAmount,
					  basicPremium:basicPremium,
					  totalTaxes:totalTaxes,
					  ncbValue:ncbValue,
					  zeroDepMul:zeroDepMul,
					  checkDepCap:checkDepCap,
					  checkNcb:checkNcb,
					  discountValue:discountValue,
					  checkDepCap:checkDepCap,
					  tariff:tariff,
					  tp:tp,
					  pa:pa,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	//alert("3")
		        	console.log(data);
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		                var responseData = JSON.parse(data);
		                console.log(responseData);
		               // alert(responseData.zeroDepAmt);
	                    	document.getElementById("depCovPrice").innerHTML=(responseData.zeroDepAmt).toFixed(0);
	                    	//$('#basicPrem').val(item.basicPremium);
				if (undefined != responseData) {
					//alert(responseData);
		                }
		            }
		        }
		        });
		     // alert("2");
	  }
	  function submitFinnoneImport(el,divName,fileLabel){
		  //alert($("#file-1")[0].files.length);

		  if($('#'+divName+' input[type="file"]')[0].files.length < 1){
			  modalAlertToShowCustomMessage("Please upload excel file", 'warning');
			  return false;
		  }
		  
		  $('#wait').show();
		  var file = $('#'+divName+' input[type="file"]')[0].files[0]
		  var key = "vahangyan";
		  // Uses different reader for all files
		  var reader = new FileReader();

		  reader.onload = function() {

			  var salt = CryptoJS.lib.WordArray.random(128/8);
			  var iv = CryptoJS.lib.WordArray.random(128/8);
			  //			console.log('salt  '+ salt );
			  //			console.log('iv  '+ iv );

			  // To construct our multipart form data request,
			  // We need a separator to define each part of the request
			  var boundary = "blob";

			  var data = AESFileEncryption(key, salt, iv, file, reader, boundary, "pddFile");
			  $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			  $.ajax({
				  headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
				  url: "/AdminModule/pddUploadFinnoneFile?fileType="+$(el).attr('id'),
				  type: 'POST',
				  processData: false,  // tell jQuery not to process the data
				  contentType: false,  // tell jQuery not to process the data
				  data:data,
				  success:function(response){
					  $('#wait').hide();
					  if(response == null || response == ""){
						//  $(fileLabel).html('Upload file customer data (.xlsx)');
						  modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
					  }
					  else if(response == 'header-mismatch'){
						  modalAlertToShowCustomMessage('Column Headers do not match with sample file. Please use sample file for reference', 'warning'); 
					  }
					  else
					  {
						  var temp = response.split("~");
						  if(undefined != temp && temp.length>0){
							  $(el).val(temp[0]);
							  // $(fileLabel).html('Upload file customer data (.xlsx)');
							  modalAlertToShowCustomMessage('Excel file has been uploaded successfully with record count '+temp[1], 'success');
							  if($('#vgFile').val() != undefined && $('#vgFile').val() != '' && $('#finnoneFile').val() != undefined && $('#finnoneFile').val() != '' ){
								  $('#matchProcessBtn').removeClass('dissable-btn');
							  }
							  else{
								  $('#matchProcessBtn').addClass('dissable-btn');
							  }
						  }
						  else{
							  modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning'); 
						  }
					  }
				  }, 
				  error: function(jqXHR, textStatus, errorThrown) {
					  console.log('jqXHR:');
					  console.log(jqXHR);
					  console.log('textStatus:');
					  console.log(textStatus);
					  console.log('errorThrown:');
					  console.log(errorThrown);

				  }
			  });
		  }

		  reader.readAsDataURL(file);

	  }
	  function resetPDDMatchFiles(){
		  $('#finnoneFile').val('');
		  $('#vgFile').val('');
		  $('#fileLabel1').html('Upload file customer data (.xlsx)');
		  $('#fileLabel2').html('Upload file customer data (.xlsx)');
		  $('#matchProcessBtn').addClass('dissable-btn');
	  }
	  var matchedRecords="";
	  function startMatchProcess(){
		  if($('#vgFile').val() == undefined || $('#vgFile').val() == ''){
			  modalAlertToShowCustomMessage('Please upload Vahangyan file to continue', 'warning');
			  return;
		  }
		  if($('#finnoneFile').val() == undefined || $('#finnoneFile').val() == ''){
			  modalAlertToShowCustomMessage('Please upload Finnone file to continue', 'warning');
			  return;
		  }
		  $('#wait').show();
		  var data={
				  vgFile:$('#vgFile').val(),
				  finnoneFile:$('#finnoneFile').val()
		  };
		  $.ajax({
			  type:'POST', 
			  headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()},
			  url: "/AdminModule/startMatchProcess", 
			  data:JSON.stringify(data),
			  success:function(response){
				  $('#wait').hide();
				  if(undefined != response && response!= ''){
					 // var response=$.parseJSON(responseData);
					  if(undefined != response.status && response.status.code == 101){
						  modalAlertToShowCustomMessage(response.status.message, 'warning');
					  }
					  else if(response.data == undefined ){
						  modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel files. Use sample files for reference', 'warning');
					  }
					  else{
						  $('#match-process #totalProcessed').html(response.data.totalProcessed);
						  $('#match-process #matched').html(response.data.matched);
						  $('#match-process #partialMatched').html(response.data.partiallyMatched);
						  $('#match-process #rejected').html(response.data.rejected);
						  $('#match-process #alreadyApproved').html(response.data.alreadyApproved);
						  $('#match-process #downloadApproved').hide();
						  if(response.data.alreadyApproved > 0){
						  $('#match-process #downloadApproved a').attr('href',response.data.alreadyApprovedFileUrl);
						  $('#match-process #downloadApproved').show();
						  }
						  matchedRecords = response;
						  $('#match-process').modal({
			                  backdrop: 'static',
			                  keyboard: true, 
			                  show: true
			          });
					  }
				  }
				  else
					  modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel files. Use sample files for reference', 'warning');
			  }
		  
		  });
	  }
	  function viewMatchedRecords(){
		  $('#match-process').modal('hide');
		  resetPDDMatchFiles();
		  if(matchedRecords != "" && undefined != matchedRecords.data && matchedRecords.data.bulkSlot != undefined){
			 /* $.ajax({
					  type:'POST', 
					  headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()},
					  url: "/AdminModule/viewMatchResults", 
					  data:JSON.stringify(matchedRecords),
					  success:function(){
						  
					  }
			  });*/
			//  $('#matchProcessRequestBean').val(JSON.stringify(matchedRecords.data));
			  $('#bulkSlot').val(matchedRecords.data.bulkSlot)
			  $('#submitPDDMatchForm').submit();
		  }
		  else
			  modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel files. Use sample files for reference', 'warning'); 
	  }
	  function showMatchDetail(el){
		  $('.reassignCheck').prop('checked',false);
		  var temp = $('.result-tab li.active a').attr('href');
		  if(undefined == temp || temp == '')
			  temp = '#matchDiv';
		  var selectedIndex=$(temp+' .line').index($(el).parents('.line'));
		  var comparison=$(el).attr('comparisonString');
		  var agreementNumber=$(el).attr('agreementNumber');
		  var status=$(el).attr('status');
		  var pdfUrl=$(el).attr('pdfUrl');
		  $('#match-process #dataMatch').html('');
		  $('#match-process #agreementNumber').html(agreementNumber);
		  $('#match-process #viewPDF').attr('href',pdfUrl);
		  $('#match-process input[name="rc1"]').prop('checked',false);
		  $('#match-process .remark-text textarea').val('');
		  $('.remark-text').addClass('dissable');
		  $('#match-process #finalSubmit').hide();
		  if($('.result-tab li.active var').html() <=50)
			  $('#countTracker').html((selectedIndex+1)+"/"+$('.result-tab li.active var').html());
		  else
		   $('#countTracker').html((selectedIndex+1)+"/50");
		  $('#rowIndex').val(selectedIndex);
		  var maxIndex = $(temp+' .line').length -1 ;
		   if(undefined == maxIndex || maxIndex < 0)
			   maxIndex=0;
		   if(maxIndex == 0){
			   $('.left-slide').hide();
			   $('.right-slide').hide();
			   $('#match-process #finalSubmit').show();
		   }
		   else if(selectedIndex <=0){
			   $('.left-slide').hide();
			   $('.right-slide').show();
		   }
		   else if(selectedIndex >=maxIndex){
			   $('.left-slide').show();
			   $('.right-slide').hide();
		   }
		   else{
			   $('.left-slide').show();
			   $('.right-slide').show();
		   }
		  if(undefined != comparison){
			  var html="";
			  var remarks="";
			  $.map($.parseJSON(comparison),function(item){
				  html+='<div class="row"><label class="col-xs-12 col-lg-3 col-sm-3 col-md-3 form-group">'+item.fieldName+'</label><div class="col-xs-6 col-lg-3 col-sm-3 col-md-3 form-group">';
				  if(item.finnoneVal== undefined)
					  item.finnoneVal="";
				  html+='<input type="text" name="" disabled="disabled" value="'+item.finnoneVal+'"/> </div><div class="col-xs-6 col-lg-3 col-sm-3 col-md-3 form-group">';
				  if(item.vgVal== undefined)
					  item.vgVal="";
				  html+='<input type="text" name="" disabled="disabled" value="'+item.vgVal+'"/> </div><div class="col-xs-5 col-lg-2 col-sm-2 col-md-2 form-group remark-text">';
				  html+=item.message+'</div>';
				  if(item.percentMatch != undefined && item.percentMatch == 1.0){
					 html+='<img src="images/check.svg" width="20"></div></div>';
				  }
				  else if(item.percentMatch != undefined && item.percentMatch < 0.75){
					  //remarks+=item.fieldName+":- ";
					  if(remarks != '')
						  remarks+="|";
					  remarks+=item.message;
					 html+='<img src="images/cancel.svg" width="20"></div></div>';
				  }
				  else{
					//  remarks+=item.fieldName+":- ";
					//  remarks+=item.message+" | ";
					  html+='<img src="images/warning.svg" width="20"></div></div>'; 
				  }
			  });
			  if(status == 0)
				  $('#approveRejectDiv').show();
			  else 
				  $('#approveRejectDiv').hide();
			  $('#match-process #hiddenRemarks').val(remarks);
			  $('#match-process #dataMatch').html(html);
			  $('#match-process').modal({
                  backdrop: 'static',
                  keyboard: true, 
                  show: true
          });
		  }
	  }
	  function setFileLabelCustom(labelId,divId,submitButtonId){ 
			
			var fileName= $("#"+divId+" input[type='file']").val().replace(/.*[\/\\]/, '');
			$(labelId).html(fileName);
			$(submitButtonId).show();
			
			 
		}
	  
	  function approveReject(type,isFromSlide,isRemarksMandatory){
		  if(isFromSlide && $('#match-process input[name="rc1"]:checked').length ==0 ){
			  modalAlertToShowCustomMessage('Please approve OR reject the record', 'warning');
			  return;
		  }
		  if(isFromSlide == false && ($('#agreementNumber').html() == undefined || $('#agreementNumber').html()== '')){
			  modalAlertToShowCustomMessage('Please select agreement numbers', 'warning');
			  return;
		  }
		  $('#checkedTab').val($('.result-tab li.active').attr('id'));
		  var csrfVal = $('#csrfToken').val();
		  if(isRemarksMandatory && type == 2 && ($('#remarks').val() == undefined || $('#remarks').val() =='' )){
			  modalAlertToShowCustomMessage('Remarks is mandatory', 'warning');
			  return;
		  }
		  var approveReject=[];
		  if(isFromSlide){
				  //check if agreement number is already present in array update it else add it
				 var prevAgreementNo= $('#match-process #agreementNumber').html();
				 var isFound = false;
				 if(undefined != approvedRejectedData && approvedRejectedData.length>0){
					 for(var i in approvedRejectedData){
						 if(approvedRejectedData[i].agreementNumber == prevAgreementNo){
							 approvedRejectedData[i].status = $('#match-process input[name="rc1"]:checked').val();
							 approvedRejectedData[i].remarks = $('#match-process .remark-text textarea').val();
								isFound = true;
								//break;
						 }
					 }
				/*$.map(approvedRejectedData,function(item){
					if(item.agreementNumber == prevAgreementNo){
						item.status = $('#match-process input[name="rc1"]:checked').val();
						item.remarks = $('#match-process .remark-text textarea').html();
						isFound = true;
						//break;
					}
				});*/
				 }
				 if(!isFound){
					 var data={"agreementNumber":prevAgreementNo,"status":$('#match-process input[name="rc1"]:checked').val(),"remarks":$('#match-process .remark-text textarea').val()};
					 approvedRejectedData.push(data);
				 }
			  approveReject=approvedRejectedData;
		  }
		  else{
			  var temp = $('#agreementNumber').html().split(",");
			  $.each(temp,function(i,val){
				  var d = {"agreementNumber":val,"status":type,"remarks":$('#remarks').val()};
				  approveReject.push(d);
			  });
		  }
		  var data={"approveReject":approveReject};
		  $.ajax({
			  type:'POST', 
			  headers: {'X-CSRF-TOKEN':$('#csrfToken').val()},
			  url: "/AdminModule/approveRejectPDDMatchData",
			  contentType: 'application/json',
			  data:JSON.stringify(data),
			  success:function(response){
				  // console.log(response);
				  $('.reassignCheck').prop('checked',false);
				  if(undefined != response){
					  var res = $.parseJSON(response);
					  if(res.code == 100){
						  if(isFromSlide){
							  modalAlertToShowCustomMessage('Response Submitted Successfully', 'success');
						  }
						  else{
						  if(type==1){
							  modalAlertToShowCustomMessage('Match Approved Successfully', 'success');
						  }
						  else{
							  modalAlertToShowCustomMessage('Match Rejected Successfully', 'success');
						  }
						  }
						 $('#submitPDDMatchForm').submit();
					  }
					  else{
						  modalAlertToShowCustomMessage('Oops some error occurred. Please try again!', 'warning'); 
					  }
				  }
				  else{
					  modalAlertToShowCustomMessage('Oops some error occurred. Please try again!', 'warning'); 
				  }
			  }
		  
		  });
	  }
	  function approveAllMatched(status,systemStatus){
		  $.ajax({
			  type:'POST', 
			//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()},
			  url: "/AdminModule/approveAllMatched", 
			  data:{
				  "_csrf":$('#csrfToken').val(),
				  "bulkSlot": $('#bulkSlot').val(),
				  "status":status,
				  "systemStatus":systemStatus
			  },
			  success:function(response){
				  if(undefined != response){
					  var res = $.parseJSON(response);
					  if(res.code == 100){
							  modalAlertToShowCustomMessage('All records Approved Successfully', 'success');
							  $('#submitPDDMatchForm').submit();
					  }
					  else{
						  modalAlertToShowCustomMessage('Oops some error occurred. Please try again!', 'warning'); 
					  }
				  }
				  else{
					  modalAlertToShowCustomMessage('Oops some error occurred. Please try again!', 'warning'); 
				  }
			  }
		  
		  });
	  }
	  function searchUserForCurrentECode(){
		  var userEcode=$('#userEcode').val();
		  var searchText = $('#searchText').val();
		  var totalCount;
		  if(undefined!=searchText && $.trim(searchText)!=''){
			  //alert('searchText:: '+searchText+', userEcode:: '+userEcode);
			  $('#wait').show();
			  var dataRequest={
					  "userEcode":userEcode,
					  "searchText":searchText
				  }
				$.ajax({
					type:'POST', 
					url: "/AdminModule/searchUserForCurrentECode", 
					data: {
						userEcode:userEcode,
						searchText:searchText,
						_csrf:$('#csrfToken').val()
			        },
					//async:false,
					//dataType: 'JSON',
					success:function(response){
						$('#wait').hide();
						var totalItems=0;
						if(response == null || response == ""){
						  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
						} else {
							console.log('searchUserForCurrentECode response: '+response);
							var html="";
							$('#myDiv').html('');
							$.map(response,function(item){
							  
								console.log('item.username:: '+item.username);
								totalItems=totalItems+1;
								totalCount=totalItems;
								html+='<li>';
								html+='<div class="inner-userpic">';
								html+='<img src="images/login-user.svg">';
								html+='</div>';
								html+='<div class="num-off-act">';
								html+='<p>'+item.username+'</p> <span>'+item.ecode+'</span>';
								html+='</div>';
								html+='<div class="right-assign">';
								html+='<div class="button">';
								/*html+='<a href='th:href='@{/insuranceStatusUpload}' href='AdminModule/insuranceStatusUpload''>Assign - <span>'+item.assignCount+'</span></a>';
								html+='</div>';
								html+='<div class="button">';
								html+='<a href="#">Unassign - <span>'+item.unassignCount+'</span></a>';
								html+='</div>';
								html+='<div class="button">';
								html+='<a href="manage-team1.html">Team - <span>'+item.teamCount+'</span></a>';
								html+='</div>';
								html+='</div>';
								html+='</li>';*/
								 if(item.assignCount>0){
									 html+='<a href="/AdminModule/tppsmSelfAssignInsuranceLead?ecode='+item.ecode+'">Assign - <span>'+item.assignCount+'</span></a>';
									 }else{
										 html+='<a href="#">Assign - <span>'+item.assignCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='<div class="button">';
									 if(item.unassignCount>0){
										 html+='<a href="/AdminModule/tppsmUnAssignInsuranceLead?ecode='+item.ecode+'">Unassign - <span>'+item.unassignCount+'</span></a>';
									 }else{
										 html+='<a href="#">Unassign - <span>'+item.unassignCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='<div class="button">';
									 if(item.teamCount>0){
									 html+='<a href="#" onclick="searchUserForThisECode(\''+item.username+'\',\''+item.ecode+'\')">Team - <span>'+item.teamCount+'</span></a>';
									 }else{
										 html+='<a href="#">Team - <span>'+item.teamCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='</div>';
									 html+='</li>';
									// totalCount=item.teamCount;
								
							});
							$('#myDiv').html(html);
							
							
							
							//alert(totalItems);
							$('#myPager').empty();
		                    $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								//fatchFreshDetailsListByPagination((num-1)*5,5,true)
								//alert("else in js");
							});
		                    
		                    
							//document.getElementById('total_reg').innerHTML=totalCount+" Entries In Total";
		                      if(totalCount=='1')
		                        	document.getElementById('total_reg').innerHTML=totalCount+" Entry In Total";
		                        else
		                        	document.getElementById('total_reg').innerHTML=totalCount+" Entries In Total";
							
						}
					}
				});
		  }else{
			  $('#searchText').val('');
			  modalAlertToShowCustomMessage("Please provide Username or Ecode.", 'warning');
		  }
		  
	  }

	  
	  function getLeadsByEcode(){
		  var userEcode=$('#searchText').val();
		  var searchText = $('#searchText').val();
		  if(undefined!=searchText && $.trim(searchText)!=''){
			  //alert('searchText:: '+searchText+', userEcode:: '+userEcode);
			  $('#wait').show();
			  var dataRequest={
					  "userEcode":userEcode,
					  "searchText":searchText
				  }
				$.ajax({
					type:'POST', 
					url: "/AdminModule/getLeadsByEcodeByAjax", 
					data: {
						userEcode:userEcode,
						searchText:searchText,
						_csrf:$('#csrfToken').val()
			        },
					//async:false,
					//dataType: 'JSON',
					success:function(response){
						$('#wait').hide();
						var totalItems=0;
						if(response == null || response == ""){
						  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
						} else {
							console.log('searchUserForCurrentECode response: '+response);
							var html="";
							$('#myDiv').html('');
							$.map(response,function(item){
								console.log('item.username:: '+item.username);
								totalItems=totalItems+1;
								html+='<li>';
								html+='<div class="inner-userpic">';
								html+='<img src="images/login-user.svg">';
								html+='</div>';
								html+='<div class="num-off-act">';
								html+='<p>'+item.username+'</p> <span>'+item.ecode+'</span>';
								html+='</div>';
								html+='<div class="right-assign">';
								html+='<div class="button">';
								/*html+='<a href='th:href='@{/insuranceStatusUpload}' href='AdminModule/insuranceStatusUpload''>Assign - <span>'+item.assignCount+'</span></a>';
								html+='</div>';
								html+='<div class="button">';
								html+='<a href="#">Unassign - <span>'+item.unassignCount+'</span></a>';
								html+='</div>';
								html+='<div class="button">';
								html+='<a href="manage-team1.html">Team - <span>'+item.teamCount+'</span></a>';
								html+='</div>';
								html+='</div>';
								html+='</li>';*/
								 if(item.assignCount>0){
									 html+='<a href="/AdminModule/selfAssignInsuranceLeadBySuperAdmin?ecode='+item.ecode+'">Assign - <span>'+item.assignCount+'</span></a>';
									 }else{
										 html+='<a href="#">Assign - <span>'+item.assignCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='<div class="button">';
									 if(item.unassignCount>0){
										 html+='<a href="/AdminModule/unAssignInsuranceLeadBySuperAdmin?ecode='+item.ecode+'">Unassign - <span>'+item.unassignCount+'</span></a>';
									 }else{
										 html+='<a href="#">Unassign - <span>'+item.unassignCount+'</span></a>';
									 }
									 html+='</div>';
									/* html+='<div class="button">';*/
									 /*if(item.teamCount>0){
									 html+='<a href="#" onclick="searchUserForThisECode(\''+item.ecode+'\')">Team - <span>'+item.teamCount+'</span></a>';
									 }else{
										 html+='<a href="#">Team - <span>'+item.teamCount+'</span></a>';
									 }*/
									/* html+='</div>';*/
									 html+='</div>';
									 html+='</li>';
								
							});
							$('#myDiv').html(html);
						}
					}
				});
		  }else{
			  $('#searchText').val('');
			  modalAlertToShowCustomMessage("Please provide Username or Ecode.", 'warning');
		  }
		  
	  }

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  function searchUserForThisECode(username,e_code){
			  $('#wait').show();
			  var totalCount="";
			  var totalItems="";
			  var dataRequest={
					  "e_code":e_code,
				  }
				$.ajax({
					type:'POST', 
					url: "/AdminModule/searchUserForThisECode", 
					data: {
						e_code:e_code,
						_csrf:$('#csrfToken').val()
			        },
					//async:false,
					//dataType: 'JSON',
					success:function(response){
						$('#wait').hide();
						if(response == null || response == ""){
							  //$('#myPager').unbind('page');
							  //$('#myPager').hide();
							  //document.getElementById('total_reg').innerHTML="";
							  //$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
						  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
						} else {
							//console.log('searchUserForThisECode response: '+response);
							 // $('#myPager').unbind('page');
							//  $('#myPager').hide();
							totalCount = 0;
							
							//navFunction();
							var prevUserName = $('#userName').val();
							var prevUserEcode = $('#userEcode').val();
							navFunction2(username,e_code,prevUserName,prevUserEcode);
							
							
							var html="";
							$('#myDiv').html('');
							$.map(response,function(item){
							  
								//console.log('item.username:: '+item.username);
								totalCount = totalCount + 1;
								totalItems=totalCount;
								html+='<li>';
								html+='<div class="inner-userpic">';
								html+='<img src="images/login-user.svg">';
								html+='</div>';
								html+='<div class="num-off-act">';
								html+='<p id="un">'+item.username+'</p> <span id="ec">'+item.ecode+'</span>';
								html+='</div>';
								html+='<div class="right-assign">';
								html+='<div class="button">';
								 if(item.assignCount>0){
									 html+='<a href="/AdminModule/tppsmSelfAssignInsuranceLead?ecode='+item.ecode+'">Assign - <span>'+item.assignCount+'</span></a>';
									 }else{
										 html+='<a href="#">Assign - <span>'+item.assignCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='<div class="button">';
									 if(item.unassignCount>0){
										 html+='<a href="/AdminModule/tppsmUnAssignInsuranceLead?ecode='+item.ecode+'" >Unassign - <span>'+item.unassignCount+'</span></a>';
									 }else{
										 html+='<a href="#">Unassign - <span>'+item.unassignCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='<div class="button">';
									 if(item.teamCount>0){
									 html+='<a href="#" onclick="searchUserForThisECode(\''+item.username+'\',\''+item.ecode+'\')">Team - <span>'+item.teamCount+'</span></a>';
									 }else{
										 html+='<a href="#">Team - <span>'+item.teamCount+'</span></a>';
									 }
									 html+='</div>';
									 html+='</div>';
									 html+='</li>';
									 //totalCount=item.teamCount;
				                     /* if(item.totalCount>='1')
				                        	document.getElementById('total_reg').innerHTML=totalCount+" Entry In Total";
				                        else
				                        	document.getElementById('total_reg').innerHTML=totalCount+" Entries In Total";*/
				  

								
							});
							//alert("---"+totalItems);
							$('#myDiv').html(html);
							//alert(totalItems);
							$('#myPager').empty();
		                    $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								//fatchFreshDetailsListByPagination((num-1)*5,5,true)
								//alert("else in js");
							});
							
							
							
							$('#userEcode').val(e_code);
							//alert(totalCount);
							//$('#total_reg').val(totalCount);
							//document.getElementById('total_reg').innerHTML=totalCount+" Entries In Total";
		                      if(totalItems=='1')
		                        	document.getElementById('total_reg').innerHTML=totalItems+" Entry In Total";
		                        else
		                        	document.getElementById('total_reg').innerHTML=totalItems+" Entries In Total";
		  
							
							
						}
						
					}
				});
	  }
	  
	  function navFunction2(username,e_code,prevUserName,prevUserEcode){
		  var html = $('#ol').html();

		  if(html.indexOf(e_code) != -1){
			  //$('a[code='+e_code+']').next().remove();
			  var newNav = $('a[code='+e_code+']').closest('li').text();
			  $('a[code='+e_code+']').closest('li').nextAll().remove(); //remove all child element
			  $('a[code='+e_code+']').closest('li').remove(); //remove current html and replace by below one
			  
			  $('#ol').append($.parseHTML('<li class="current"><em>'+newNav+'</em></li>'));
			  
		  }else{
			  //alert(e_code + " not found");
			  var html2 = html.replace(/class="current"/g, "");
		  	  html2 = html2.replace(/<em>/g, "<a href=\"#\" onclick=\"searchUserForThisECode(\'"+prevUserName+"\',\'"+prevUserEcode+"\')\" code=\""+prevUserEcode+"\">");
		  	  html2 = html2.replace(/<\/em>/g, "</a>");
		  	  //alert(html2);
		  	  
		  	  $bc = $('<ol id="ol" class="cd-breadcrumb custom-separator"></ol>');
		  	  $bc.prepend('', '<li class="current"><em>'+username +' ('+e_code+')'+'</em></li>');
		  	  $('#nav').html($bc.prepend(html2));
		  }
		  return false;
	  }
	  function downloadBatchOutput(){
		  var finalData = {"batch":$('#bulkSlot').val(),"fromDate":$('#fromDate').val(),"toDate":$('#toDate').val()};

		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			  var a;
			  if (xhttp.readyState === 4 && xhttp.status === 200) {
				  // Trick for making downloadable link
				  a = document.createElement('a');
				  //console.log(xhttp);
				  a.href = xhttp.response;
				  a.download = "pdd_ric_match_"+formatDate(new Date())+".zip";
				  a.style.display = 'none';
				  document.body.appendChild(a);
				  a.click();
			  }
		  };
		  // Post data to URL which handles post request
		  xhttp.open("POST", "/AdminModule/pddRICFinnoneUploadReport");
		  xhttp.setRequestHeader("Content-Type", "application/json");
		  xhttp.setRequestHeader("X-CSRF-TOKEN", $('#csrfToken').val());
		  // You should set responseType as blob for binary responses
		  //xhttp.responseType = 'blob';
		  xhttp.send(JSON.stringify(finalData));
	  }
	  
	  function rejectPasswordPoliciesPopUp(){
		  $('#reject').modal('show');
	  }
	  
	  function rejectPasswordPolicies(){
		  //if (confirm("Are You Sure You Want to Reject!")) {				
				//alert('Yes');
		  
		  if($.trim($('#rejectRemark').val())==''){
				alert('Please enter reason of rejection!');
				$('#rejectRemark').val('');
				return;
			}else{
				$('#wait').show();
				var rejectRemark = $('#rejectRemark').val();
				var dataRequest={
						  "rejectRemark":rejectRemark,
					  }
				$.ajax({
					type:'POST', 
					url: "/AdminModule/rejectPasswordPolicies", 
					data: {
						rejectRemark: rejectRemark,
						_csrf:$('#csrfToken').val()
					},
					//async:false,
					//dataType: 'JSON',
					success:function(data){
						$('#wait').hide();
						if(data==true){
							window.location = "/AdminModule/passwordPolicyApproval?_csrf="+$('#csrfToken').val();
						}
					}
				});
			}
		  		
			//}
	  }
	  
	  function approvePasswordPolicies(){
		  if (confirm("Are You Sure You Want to Approve!")) {				
				//alert('Yes');
			  $('#wait').show();
			  	$.ajax({
					type:'POST', 
					url: "/AdminModule/approvePasswordPolicies", 
					data: {
						_csrf:$('#csrfToken').val()
			        },
					//async:false,
					//dataType: 'JSON',
					success:function(data){
						$('#wait').hide();
						if(data==true){
							window.location = "/AdminModule/passwordPolicyApproval?_csrf="+$('#csrfToken').val();
						}
					}
				});
			}
	  }
	  
	  function downloadComparisonReport(){
		  if(undefined == $('#bulkSlot').val() || '' == $('#bulkSlot').val()){
			  modalAlertToShowCustomMessage('Please select batch.', 'warning');
		  }
		  else{
		  var finalData = {"batch":$('#bulkSlot').val()};
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			  var a;
			  if (xhttp.readyState === 4 && xhttp.status === 200) {
				  if(undefined != xhttp.response && xhttp.response != ''){
				  // Trick for making downloadable link
				  a = document.createElement('a');
				  //console.log(xhttp);
				  a.href = xhttp.response;
				  a.download = "pdd_ric_match_"+formatDate(new Date())+".xlsx";
				  a.style.display = 'none';
				  document.body.appendChild(a);
				  a.click();
				  }
				  else{
					  modalAlertToShowCustomMessage('Data not available', 'warning');
				  }
			  }
		  };
		  // Post data to URL which handles post request
		  xhttp.open("POST", "/AdminModule/pddRICMatchReport");
		  xhttp.setRequestHeader("Content-Type", "application/json");
		  xhttp.setRequestHeader("X-CSRF-TOKEN", $('#csrfToken').val());
		  // You should set responseType as blob for binary responses
		  //xhttp.responseType = 'blob';
		  xhttp.send(JSON.stringify(finalData));
		  }
	  }
	  var approvedRejectedData=[];
	  function slide(type,status){
		  if($('#match-process input[name="rc1"]:checked').length ==0 && status==undefined){
			  modalAlertToShowCustomMessage('Please approve OR reject the record', 'warning');
			  return;
		  }
		  else{
			  //check if agreement number is already present in array update it else add it
			 var prevAgreementNo= $('#match-process #agreementNumber').html();
			 var isFound = false;
			 if(undefined != approvedRejectedData && approvedRejectedData.length>0){
				 for(var i in approvedRejectedData){
					 if(approvedRejectedData[i].agreementNumber == prevAgreementNo){
						 approvedRejectedData[i].status = $('#match-process input[name="rc1"]:checked').val();
						 approvedRejectedData[i].remarks = $('#match-process .remark-text textarea').val();
							isFound = true;
							//break;
					 }
				 }
			/*$.map(approvedRejectedData,function(item){
				if(item.agreementNumber == prevAgreementNo){
					item.status = $('#match-process input[name="rc1"]:checked').val();
					item.remarks = $('#match-process .remark-text textarea').html();
					isFound = true;
					//break;
				}
			});*/
			 }
			 if(!isFound){
				 var data={"agreementNumber":prevAgreementNo,"status":$('#match-process input[name="rc1"]:checked').val(),"remarks":$('#match-process .remark-text textarea').val()};
				 approvedRejectedData.push(data);
			 }
			 $('#match-process input[name="rc1"]').prop('checked',false).trigger('change');
			 $('#match-process .remark-text textarea').val('')
			 $('#match-process #finalSubmit').hide();
		   var index = $('#rowIndex').val();
		   var temp = $('.result-tab li.active a').attr('href');
			  if(undefined == temp || temp == '')
				  temp = '#matchDiv';
		   var maxIndex = $(temp+' .line').length -1;
		   if(undefined == maxIndex || maxIndex < 0)
			   maxIndex=0;
		   if(type == 0){
			   //right
			  index= parseInt(index)+1;
		   }
		   else{
			 //left
				index= parseInt(index)-1;
		   }
		   if(maxIndex == 0){
			   $('.left-slide').hide();
			   $('.right-slide').hide();
			   $('#match-process #finalSubmit').show();
		   }
		   else if(index <=0){
			   $('.left-slide').hide();
			   $('.right-slide').show();
		   }
		   else if(index >=maxIndex){
			   $('.left-slide').show();
			   $('.right-slide').hide();
			   $('#match-process #finalSubmit').show();
		   }
		   else{
			   $('.left-slide').show();
			   $('.right-slide').show();
		   }
		   var el =$(temp+' .line:eq('+index+') .right-arrow a');
		   if(type == 0){
			   $('#comparisonData').effect('slide',{direction: 'right'}); 
		   }
		   else{
			   $('#comparisonData').effect('slide',{direction: 'left'}); 
		   }
		   
		   if($('.result-tab li.active var').html() <= 50)
			   $('#countTracker').html((index+1)+"/"+$('.result-tab li.active var').html())
		 else 
			 $('#countTracker').html((index+1)+"/50");
		   var comparison=$(el).attr('comparisonString');
			  var agreementNumber=$(el).attr('agreementNumber');
			  var status=$(el).attr('status');
			  var pdfUrl=$(el).attr('pdfUrl');
			  $('#match-process #dataMatch').html('');
			  $('#match-process #agreementNumber').html(agreementNumber);
			  $('#match-process #viewPDF').attr('href',pdfUrl)
			   $('#rowIndex').val(index);
			  if(undefined != approvedRejectedData && approvedRejectedData.length>0){
				  for(var i in approvedRejectedData){
					  if(approvedRejectedData[i].agreementNumber == agreementNumber){
							 $('#match-process input[name="rc1"][value="'+approvedRejectedData[i].status+'"]').prop('checked','checked').trigger('change');
							 $('#match-process .remark-text textarea').val(approvedRejectedData[i].remarks);
							//break;
						}
				  }
					
					 }
			  if(undefined != comparison){
				  var html="";
				  var remarks="";
				  $.map($.parseJSON(comparison),function(item){
					  html+='<div class="row"><label class="col-xs-12 col-lg-3 col-sm-3 col-md-3 form-group">'+item.fieldName+'</label><div class="col-xs-6 col-lg-3 col-sm-3 col-md-3 form-group">';
					//  remarks+=item.fieldName+":- ";
					  if(item.finnoneVal== undefined)
						  item.finnoneVal="";
					  html+='<input type="text" name="" disabled="disabled" value="'+item.finnoneVal+'"/> </div><div class="col-xs-6 col-lg-3 col-sm-3 col-md-3 form-group">';
					  if(item.vgVal== undefined)
						  item.vgVal="";
					  html+='<input type="text" name="" disabled="disabled" value="'+item.vgVal+'"/> </div><div class="col-xs-5 col-lg-2 col-sm-2 col-md-2 form-group remark-text">';
					  html+=item.message+'</div>';
					//  remarks+=item.message+"\n";
					  if(item.percentMatch != undefined && item.percentMatch == 1.0){
						 html+='<img src="images/check.svg" width="20"></div></div>';
					  }
					  else if(item.percentMatch != undefined && item.percentMatch < 0.75){
						  if(remarks != '')
							  remarks+="|";
						  remarks+=item.message;
						 html+='<img src="images/cancel.svg" width="20"></div></div>';
					  }
					  else{
						 /* remarks+=item.fieldName+":- ";
						  remarks+=item.message+"\n";*/
						  html+='<img src="images/warning.svg" width="20"></div></div>'; 
					  }
				  });
				  if(status == 0)
					  $('#approveRejectDiv').show();
				  else 
					  $('#approveRejectDiv').hide();
				  $('#match-process #hiddenRemarks').val(remarks);
				  $('#match-process #dataMatch').html(html);
			  }
		  }
	   }
	  
	  function checkMinMax(){
		  var minLength = $('#minLength').val();
		  var maxLength = $('#maxLength').val();
		  
		  if(parseInt(minLength)<1 || parseInt(minLength)>99){
			  modalAlertToShowCustomMessage('Minimum Length should range between 1 to 99.', 'warning');
			  $('#minLength').val('');
			  return true;
		  }
		  
		  if(parseInt(maxLength)<1 || parseInt(maxLength)>99){
			  modalAlertToShowCustomMessage('Maximum Length should range between 1 to 99.', 'warning');
			  $('#maxLength').val('');
			  return true;
		  }
		  
		  if(parseInt(minLength) > parseInt(maxLength)){
			  modalAlertToShowCustomMessage('Minimum Length cannot be greater than Maximun Length.', 'warning');
			  $('#minLength').val('');
			  $('#maxLength').val('');
			  return true;
		  }
	  }
	  
	  function checkMaxWrongAttempt(){
		  var maxWrongLength = $('#maxWrongLength').val();
		  if(parseInt(maxWrongLength)<1 || parseInt(maxWrongLength)>99){
			  modalAlertToShowCustomMessage('Wrong Attempt should range between 1 to 99.', 'warning');
			  $('#maxWrongLength').val('');
			  return true;
		  }
	  }
       function calculatePremiumAmount() {
		 // alert("1");
		 // var checkedValue = $('.checkPayzappLink').val();
    	  
		  var  checkPayzappLink= document.getElementById("checkPayzappLink").checked;
		  var  checkDepCap= document.getElementById("checkDepCap").checked;
		  var  checkNcb= document.getElementById("checkNcb").checked;
		  var losNum = document.getElementById("losNumber").value; 
		//  var depCovPrice=document.getElementById('depCovPrice').innerHTML;
		  var depCovId=document.getElementById("depCovNameList").value; 
		  //alert(depCovId);
		  var idvAmount=document.getElementById("idvAmount").value; 
		  var basicPremium=document.getElementById("basicPrem").value; 
		  var totalTaxes=document.getElementById("totalTaxes").value; 
		  var ncbValue=document.getElementById("ncbValue").value; 
		  var discountValue=document.getElementById("discountValue").value; 
		  var tariff=document.getElementById("tariff").value; 
		  var tp=document.getElementById("tpAmount").value; 
		  var pa=document.getElementById("paAmount").value; 
		  var prevAmount=document.getElementById("hiddentotalAmount").value; 
		  //alert(prevAmount);
		  var finalAmount12=prevAmount;
      	var percentage=69;
      	var isAllow=(prevAmount/100)*percentage;
      	//finalAmount123=prevAmount+isAllow;
      	if(discountValue<=isAllow){
      		//alert("ok");
      	}else{
      		 modalAlertToShowCustomMessage('Maximum discount value exceeded.', 'error');
      		 document.getElementById('calculateApprovalTab').style.display='none';
      		return;
      	}
      
      	 document.getElementById('calculateApprovalTab').style.display='block';
		 // return;
		 // alert("2"+tariff);
		 // alert(checkPayzappLink);
		//  alert(checkDepCap);alert(checkPayzappLink);alert(losNum);alert(depCovPrice);alert(idvAmount);alert(basicPrem);alert(totalTaxes);alert(ncbValue);alert(discountValue);
		//  alert(depCovPrice);
		  var htmlFragment = "";
		/*  var dataRequest={
			  "losNum":losNum,
			  "depCovPrice":depCovPrice,
			  "idvAmount":idvAmount,
			  "basicPremium":basicPremium,
			  "totalTaxes":totalTaxes,
			  "ncb":ncb,
			 
			  "checkPayzappLink":checkPayzappLink,
			  "checkDepCap":checkDepCap,
			  "checkNcb":checkNcb,
			  "discountValue":discountValue
		  }*/
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/calculatePremiumAmount",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	depCovId:depCovId,
				  idvAmount:idvAmount,
				  basicPremium:basicPremium,
				  totalTaxes:totalTaxes,
				  ncbValue:ncbValue,
				  checkPayzappLink:checkPayzappLink,
				  checkDepCap:checkDepCap,
				  checkNcb:checkNcb,
				  discountValue:discountValue,
				  tariff:tariff,
				  tp:tp,
				  pa:pa,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    	document.getElementById("basicPrem").value=responseData.basicPremium;
                    	document.getElementById("totalTaxes").value=(responseData.taxes).toFixed(0);
                    	//document.getElementById("totalAmount").innerHTML=responseData.premium;
                    	
                    	
                    	
                    	document.getElementById("totalAmount").innerHTML="<img src='images/rupee.svg' width='15'>"+inrFormat(responseData.premium);
                    	//$('#basicPrem').val(item.basicPremium);
			if (undefined != responseData) {
				//alert(responseData);
	                }
	            }
	          }
	        });
	     // alert("2");
	}
	  //losNum
	  function policyUpload() {
		  var leadTaskId = document.getElementById("leadTaskId").value;
		  var losNum = document.getElementById("editUserLosNumber").value;
		  var file = document.getElementById('file').files[0];
		  	//alert(losNum+"-"+leadTaskId);
		  //return;
		  if(null == file || ""==file){
			  modalAlertToShowCustomMessage('Please Select The Files', 'error');
			  return;
			  
		  }
		  /*var reader = new FileReader();
			reader.onload = function() {
			//	var salt = CryptoJS.lib.WordArray.random(128/8);
			//	var iv = CryptoJS.lib.WordArray.random(128/8);
	//			console.log('salt  '+ salt );
	//			console.log('iv  '+ iv );
				// To construct our multipart form data request,
				// We need a separator to define each part of the request
				var boundary = "blob";
				var boundary1 = "text";
//		  var file = document.getElementById('file').files[0]
	//		var boundary = "blob";
		//	alert("helo"+file);				
				var data = "";
				var formDataName="pddFile";
				var losDataName="losNum";
				var type="text/html";
			// Start a new part in our body's request
			data += "--" + boundary + "\r\n";
			// Describe it as form data
			data += 'content-disposition: form-data; '
				// Define the name of the form data
				+ 'name="' + formDataName + '"; '
				// Provide the real name of the file
				+ 'filename="'     + file.name + '"\r\n';
			// And the MIME type of the file
			data += 'Content-Type: ' + file.type + '\r\n';
		
			// There's a blank line between the metadata and the data
			data += '\r\n';
		
			// Append the binary data to our body's request
			data += reader.result.match(/,(.*)$/)[1] + '\r\n';
		
			// Once we are done, "close" the body's request
			data += "--" + boundary + "--";
			//Content-Type: text/html
			data += '\r\n';
			data += "--" + boundary + "\r\n";
			data += 'content-disposition: form-data; '
				// Define the name of the form data
				+ 'name="' + losDataName + '"; '
				data += '\r\n';
			data += 'Content-Type: ' + type + '\r\n';
			data += '\r\n';
			data += losNum+ '\r\n';
			data += "--" + boundary + "--";

				alert(data);
				console.log(data);
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary},
				url: "/AdminModule/uploadDoc",
				type: 'POST',
				processData: false,  // tell jQuery not to process the data
				contentType: false,  // tell jQuery not to process the data
				data:data,
				success:function(response){
/*		  var htmlFragment = "";
		  var dataRequest={
				  "losNum":losNum
			  }
	      $.ajax({
		    	url: "/AdminModule/uploadDoc",
		        type: 'POST',
		        data: {
		        	losNum:losNum,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {*/
		        	/*console.log(data);
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    
	                    });
				if (undefined != responseData) {
		                  }
		            }
		        }
		        });
			}
			reader.readAsDataURL(file);*/
		  $('#wait').show();
		  	var formData = new FormData();
			//var file = document.getElementById('file-1').files[0]
			formData.append('pddFile',file );
			formData.append('leadTaskId',leadTaskId);
			formData.append('losNum',losNum);
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				headers: {'Content-Type': undefined},
				url: "/AdminModule/uploadDoc",
				type: 'POST',
				processData: false,  // tell jQuery not to process the data
				contentType: false,  // tell jQuery not to process the data
				data:formData,
				success:function(data){
					console.log(data);
					 $('#wait').hide();
					if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
		            }
					if(data=="Success"){
		            	 modalAlertToShowCustomMessage('Document Uploaded successfully!', 'success');
		            	 $('#policy_upload').modal('hide');
		            }else{
		            	 modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');	
		            }
				}
			});
		}
	  function shareQuot() {
		 
		  //alert("1");
		 // return;
			  var losNum = document.getElementById("editUserLosNumber").value; 
			  var emailId=document.getElementById('emailId').value;
			  var mobNum=document.getElementById("mobNum").value; 
			  if("" == emailId && "" ==mobNum){
				  modalAlertToShowCustomMessage('Please Enter Mobile No or Email Id', 'error');
				  return;
			  }
			  if(null != mobNum && "" !=mobNum){
				  if (/^[6789]\d{9}$/.test(mobNum)) {
					    // value is ok, use it
					} else {
						 modalAlertToShowCustomMessage('Please Enter Correct 10 Digit Mobile Number Mobile ', 'error');
						  return;
					}
			  }
			  if(null != emailId && "" !=emailId){  
				 
					  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			
				        if (reg.test(emailId) == false) 
				        {
				        	modalAlertToShowCustomMessage('Please Enter Correct Email Id ', 'error');
							  return;
				        }
			  } 
			  $('#wait').show();
			  var htmlFragment = "";
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/shareQuot",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	losNum:losNum,
		        	emailId:emailId,
		        	mobNum:mobNum,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        //	alert("11");
		        	  $('#wait').hide();
		        	//  alert("1");
		        	  
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
		            } else {
		                var responseData = data;
				          if ("success" == responseData) {
				        	  modalAlertToShowCustomMessage('Quotation is shared successfully!', 'success');
				        	  $('#share_quotation').modal('hide');
				        	  
				          }else if ("approvalispending" == responseData) {
				        	  modalAlertToShowCustomMessage('Request sent for approval to TPPSM. You will be able to make any changes only after approval.', 'error');
				          }else{
				        	  modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
				          }
		            }
		        }
		        });
		     
		     // alert("2");
		}
	  function shareQuotByPage() {
		  var losNum = document.getElementById("losNumber").value; 
		  var emailId=document.getElementById('emailId').value;
		  var mobNum=document.getElementById("mobNum").value; 
		  if("" == emailId && "" ==mobNum){
			  modalAlertToShowCustomMessage('Please Enter Mobile No or Email Id', 'error');
			  return;
		  }
		  if(null != mobNum && "" !=mobNum){
			  if (/^[6789]\d{9}$/.test(mobNum)) {
				    // value is ok, use it
				} else {
					 modalAlertToShowCustomMessage('Please Enter Correct 10 Digit Mobile Number Mobile ', 'error');
					  return;
				}
		  }
		  if(null != emailId && "" !=emailId){  
			 
				  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		
			        if (reg.test(emailId) == false) 
			        {
			        	modalAlertToShowCustomMessage('Please Enter Correct Email Id ', 'error');
						  return;
			        }
		  }
		  var htmlFragment = "";
		  $('#wait').show();
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/shareQuot",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	losNum:losNum,
	        	emailId:emailId,
	        	mobNum:mobNum,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	 $('#wait').hide();
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
	            } else {
	                var responseData = data;
/*			          if ("success" == responseData) {
			        	  modalAlertToShowCustomMessage('Quotation Share successfully!', 'success');
			          }else{
			        	  modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
			          }*/
	                if ("success" == responseData) {
			        	  modalAlertToShowCustomMessage('Quotation is shared successfully!', 'success');
			        	  $('#share_quotation').modal('hide');
			        	  
			          }else if ("approvalispending" == responseData) {
			        	  modalAlertToShowCustomMessage('Request sent for approval to TPPSM. You will be able to make any changes only after approval.', 'error');
			          }else{
			        	  modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
			          }
	            }
	        }
	        });
	     
	     // alert("2");
	}
	  function submitupdateStatus(){
		  var losNum = document.getElementById('editUserLosNumber').value; 
		  var remarkValue=document.getElementById('remarkValue').value;
		  if(null ==remarkValue || ""==remarkValue){
			  modalAlertToShowCustomMessage('Please Enter Remarks Value', 'error');
			  return;
		  }
		  var radios = document.getElementsByName('rc200');
		  for (var i = 0, length = radios.length; i < length; i++) {
		      if (radios[i].checked) {
		    	  if(null !=remarkValue && ""!=remarkValue)
		    		  remarkValue += "~"+ radios[i].value;
		    	  else
		    		  remarkValue += radios[i].value;
		          // only one radio can be logically checked, don't check the rest
		          break;
		      }
		  }
		 // var htmlFragment = "";
		  //alert(remarkValue);
		 // return;
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/submitupdateStatus",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	losNum:losNum,
	        	remarkValue:remarkValue,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
	            } else {		               
	            	var responseData = data;
		          if ("success" == responseData) {
		        	 // modalAlertToShowCustomMessage('The status has been updated successfully.!', 'success');
		        	  $('#warning-lead').modal('hide');
		        	 // location.reload();
	         			swal(
								{
									title : "Lead is marked as Los.",
									text : "",
									imageUrl: 'images/warning.svg',
									imageWidth: 80,
									type : "",
								}).then(function() {
									location.reload();
									
						});
		        	  
		        	  
		        	  
		        	  
		          }
		          else if("approvalispending" == responseData){
		        	  modalAlertToShowCustomMessage('Request sent for approval to TPPSM. You will be able to make any changes only after approval.', 'error');
		          }
		          else{
		        	  modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
		          }
		        }
	        }
	        });
	  }
	  function leadHistoryPage(){
		 //// alert("1");
		  var losNum = document.getElementById('losNumber').value; 
		 // alert(losNum);
		  var htmlFragment = "";
		  
		  $('#wait').show();
		  var dataRequest={
				  "losNum":losNum
			  }
	      $.ajax({
			  //headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	//url: "/AdminModule/selfAssignInsuranceLead1",
		       // type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		    	url: "/AdminModule/selfAssignLeadHistory",
		        type: 'POST',
		        data: {
		        	losNum:losNum,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
		        	$('#wait').hide();
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                        htmlFragment += "<li> <div class='task-status'><img src='images/flag.svg' width='16'> " + item.oldDisPostion + " >>" +
/*						                        		" " + item.currentDisPostion + "</div><div class='small-text'>Last Login - " + item.empName + "</div>" +
*/						    						                        		" " + item.currentDisPostion + "</div><div class='small-text'>Last Activity - " + item.lastDoneActivity + "</div>			<div class='small-text'>Last Login - " + item.empName + "</div>" +
                    		
	                        "<div class='small-text'>" + item.lastLogin + "</div></li>";
	                    });
				if (undefined != responseData) {
		                    $('#historyData li').remove();
/*		                    if (flag) {
		                       // totalcount = responseData.count;
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                    }*/
		                    $('#historyData').append(htmlFragment);
		                }
				else{
					 $('#historyData').append("No History Found.");
				}
		            }
		        }
		        });
	  }
	  function updateUserDetail(){
		  var previousInsurer=document.getElementById('prevInsurerId').value;
		  var previousPolicy=document.getElementById('previousPolicy').value;
		  var expiryDate=document.getElementById('expiryDate').value;
		  var losNum = document.getElementById('editUserLosNumber').value; 
		  if(null==previousPolicy || ""==previousPolicy){
			  modalAlertToShowCustomMessage('Please Enter Previous Policy Number', 'error');  
			  return;
		  }
		  //alert(losNum);
		 // return;
		  $('#wait').show();
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/updateUserDetail",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	losNum:losNum,
		        	previousInsurer:previousInsurer,
		        	previousPolicy:previousPolicy,
		        	expiryDate:expiryDate,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	//alert("3"+data);
		        	$('#wait').hide();
		        	console.log(data);
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		               // var responseData = JSON.parse(data);
	                    	//$('#basicPrem').val(item.basicPremium);
						if ("Success" == data) {
									//modalAlertToShowCustomMessage('The status is updated successfully', 'success');
									$('#edit_user').modal('hide');
									//location.reload();
				         			swal(
											{
												title : "Previous policy details are update successfully.",
												text : "",
												type : "success",
											}).then(function() {
												location.reload();
												
									});
									
									
									
				                }else{
				        	  modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
				          }
		          }
		        }
		     });
	  }
	  function fatchFreshDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  var totalItems="";
		  var totalcount="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		            //cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/freshAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				 // checkedValue:checkedValue,
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                document.getElementById('total_reg').innerHTML="";
	                $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	 totalItems=item.totalCount;
                    	/* */
                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span></div></div>" +
                        		
                        		
								
								" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span></div> "+
								" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
								"  <div class='data_list'><span class='sts-heading'></span><span class='sts-result green'></span> </div> </div> "+
								
                        		
								" <div class='col-lg-3 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span>" +
								
								 	"<div class='col-lg-12'  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div></div> "+

								
								
								/*" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +*/
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'> " +
								" " +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div> "+
								" <div class='selft-btn' data-toggle='modal'  data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
								" <div class='right-arrow'><a href='/AdminModule/freshLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
                        if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
							$('#total_reg').val(item.totalCount);
                        
                        if(item.totalCount=='1')
                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
                        else
                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
  
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                    	if (totalcount == 0 || totalcount == ''){
	                    		totalcount = 0;
	        	                $('#myPager').unbind('page');
	      					  $('#myPager').hide();
	      					document.getElementById('total_reg').innerHTML="";
	      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	                    	}

	                        //totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                    $('#myPager').bootpag({
							total:(parseInt(Math.ceil(totalItems/5))),
							page:1,
							maxVisible: 10,
							
						}).on("page", function(event, num){
							//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
							//alert("num-"+num);
							fatchFreshDetailsListByPagination((num-1)*5,5,true)
							//alert("else")
						});
	                }
	            }
	        }
	        });
	     // alert("2");
	}

	  function fatchFreshDetailsListByPagination(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/freshAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				 /* checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	/* */
  /*                      htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "  <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a href='/AdminModule/freshLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div><div class='col-lg-12'>" +
								" <span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'> " +
								" " +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
								" </div></div></li>";
    */
 /*                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class='right-arrow'><a href='/AdminModule/freshLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>" +
							
							 	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div></div> "+

							
							
							" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'> " +
							" " +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div> "+
							" <div class='selft-btn' data-toggle='modal'  data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
							" </div></div></li>";
*/
 /*                   	 
                         htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span>" +
							
							 	"<div class='col-lg-12' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div></div> "+

							
							
							" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'> " +
							" " +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div> "+
							" <div class='selft-btn' data-toggle='modal'  data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
							" <div class='right-arrow'><a href='/AdminModule/freshLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
*/
                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span></div></div>" +
                 		
                 		
							
							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span></div> "+
							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
							"  <div class='data_list'><span class='sts-heading'></span><span class='sts-result green'></span> </div> </div> "+
							
                 		
							" <div class='col-lg-3 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span>" +
							
							 	"<div class='col-lg-12'  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div></div> "+

							
							
							/*" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +*/
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'> " +
							" " +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div> "+
							" <div class='selft-btn' data-toggle='modal'  data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
							" <div class='right-arrow'><a href='/AdminModule/freshLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";

                    	 });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                        totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                }
	            }
	        }
	        });
	     // alert("2");
	}

	  function fatchPendingDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  var totalItems="";
		  var totalcount="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/pendingAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  /*checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	                document.getElementById('total_reg').innerHTML="";
	                $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	 totalItems=item.totalCount;
                    	/* */
                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div>" +
								" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading '>Status - </span><span class='sts-result yellow'>" + item.status + "</span></div> "+
								"  "+
								" <div class='data_list'><span class='sts-heading'>TPPSM -  </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div></div> "+
								
								
								
								"<div class='col-lg-3 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span> " +
								
								
								
							 	"<div class=''  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div></div> "+

								/*" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
								*/
								
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'>     <div class='selft_left'> " +
								/*" <div class='selft_left'><div class='assigne-name border-none'><span class='sts-heading'>Status - </span><span class='sts-result'>" + item.status + "</span> </div> </div>" +*/
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' data-backdrop='static' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
								" <div class='right-arrow'><a href='/AdminModule/pendingLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
                    //    document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
	                    if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
							$('#total_reg').val(item.totalCount);
	                      if(item.totalCount=='1')
	                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
	                        else
	                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
	  
	                    
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                        //totalcount = responseData.count;
	                    	if (totalcount == 0 || totalcount == ''){
	                    		totalcount = 0;
	        	                $('#myPager').unbind('page');
	      					  $('#myPager').hide();
	      					document.getElementById('total_reg').innerHTML="";
	      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	                    	}

	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                   /* if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
							$('#total_reg').val(item.totalCount);
	                    document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
*/

	                    $('#myPager').bootpag({
							total:(parseInt(Math.ceil(totalItems/5))),
							page:1,
							maxVisible: 10,
							
						}).on("page", function(event, num){
							//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
							//alert("num-"+num);
							fatchPendingDetailsListBypagination((num-1)*5,5,true)
							//alert("else")
						});
	                }
	            }
	        }
	        });
	     // alert("2");
	}
	  function fatchPendingDetailsListBypagination(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/pendingAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  /*checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	/* */
 /*                       htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a href='/AdminModule/pendingLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div><div class='col-lg-12'>" +
								" <span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'> " +
								" " +
								
								" </div><div class='checkbar'>   <div class='selft_left'><div class='assigne-name border-none'><span class='sts-heading'>Status - </span><span class='sts-result'>" + item.status + "</span> </div> </div>  <div class='selft_left'> " +
								" " +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
								" </div></div></li>";
*/                   
/*                         htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class='right-arrow'><a href='/AdminModule/pendingLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div> " +
							
							
						 	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div></div> "+

							" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
							
							
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'>   <div class='selft_left'><div class='assigne-name border-none'><span class='sts-heading'>Status - </span><span class='sts-result'>" + item.status + "</span> </div> </div>  <div class='selft_left'> " +
							" " +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' data-backdrop='static' onclick='editUserLosNumberValue(" + item.los + ")' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
							" </div></div></li>";
*/	 
/*                    	 
                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div>" +
							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading '>Status - </span><span class='sts-result yellow'>" + item.status + "</span></div> "+
							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result green'></span> </div> </div> "+
							
							
							
							"<div class='col-lg-3 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span> " +
							
							
							
						 	"<div class='' data-toggle='modal'  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div></div> "+

							" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
							
							
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'>     <div class='selft_left'> " +
							" <div class='selft_left'><div class='assigne-name border-none'><span class='sts-heading'>Status - </span><span class='sts-result'>" + item.status + "</span> </div> </div>" +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' data-backdrop='static' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
							" <div class='right-arrow'><a href='/AdminModule/pendingLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
*/
                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + " <a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'><img src='images/pencil.svg' width='25'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div>" +
							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading '>Status - </span><span class='sts-result yellow'>" + item.status + "</span></div> "+
							"  "+
							" <div class='data_list'><span class='sts-heading'>TPPSM -  </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div></div> "+
							
							
							
							"<div class='col-lg-3 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span> " +
							
							
							
						 	"<div class=''  onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span><span class='payzappBtn' data-target='#share_payzapp' data-toggle='modal' >PayZapp Link</span></div></div> "+

							/*" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
							*/
							
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'>     <div class='selft_left'> " +
							/*" <div class='selft_left'><div class='assigne-name border-none'><span class='sts-heading'>Status - </span><span class='sts-result'>" + item.status + "</span> </div> </div>" +*/
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div><div class='selft-btn' data-toggle='modal' data-target='#policy_upload' data-backdrop='static' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-keyboard='false'>Policy Upload</div>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
							" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' onclick='editUserLosNumberValue(" + item.los + ");getNotValue(" + item.los + ")' value='Update Status' data-backdrop='static' data-keyboard='false'> "+
							" <div class='right-arrow'><a href='/AdminModule/pendingLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";

                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                        totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                }
	            }
	        }
	        });
	     // alert("2");
	}

	  
	  function fatchCompletedDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  var totalcount="";
		  $('#wait').hide();
		  var totalItems="";
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		        	//alert(cbarray[i].id+"-"+cbarray[i].value);
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		            //cbarray[i].checked = false;
		            //alert(cbarray[i].id+ "it is true" );
		        }
		}
		   // return;
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/completedAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				 /* checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	 totalItems=item.totalCount;
                    	/*<span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span> */
                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span> <div class='assign-second' >" + item.los + "</div>" +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span></div></div>" +
                        		
                        		
                         		
    							
    							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span></div> "+
    							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
    							"  <div class='data_list'><span class='sts-heading'></span><span class='sts-result green'></span> </div> </div> "+
    							
                        		
                        		
								" <div class='col-lg-3 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class=''  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>" +
								" </div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'><span class='act-dct ><input value='value-1' id='checkItem123' name='rc2123' type='checkbox'><label for='checkItem123' onclick=''></label> " +
								" </span>" +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div>" +
								/*"<div class='selft-btn' onclick='editUserLosNumberValue(" + item.los + ")' data-toggle='modal' data-target='#policy_upload' '>Policy Upload</div> " +*/
								"<div class='right-arrow'><a href='/AdminModule/completedLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div> "+
								" </div></div></li>";
	                       if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
								$('#total_reg').val(item.totalCount);
	                       //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
	                       if(item.totalCount=='1')
	                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
	                        else
	                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
	  
	                      // alert(item.totalCount);
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                    	if (totalcount == 0 || totalcount == ''){
	                    		totalcount = 0;
	        	                $('#myPager').unbind('page');
	      					  $('#myPager').hide();
	      					document.getElementById('total_reg').innerHTML="";
	      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	                    	}

	                        //totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	      
	                       	$('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchCompletedDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});
	                }
	            }
	        }
	        });
	     // alert("2");
	}
	  
	  function fatchCompletedDetailsListByPagination(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		            //cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/completedAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				  /*checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	/* */
 /*                       htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span> <div class='assign-second' >" + item.los + "</div>" +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a href='/AdminModule/completedLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div><div class='col-lg-12'>" +
								" <span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'><span class='act-dct ><input value='value-1' id='checkItem' name='rc2123' " +
								" type='checkbox'><label for='checkItem' onclick=''></label></span>" +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div><div class='selft-btn' onclick='editUserLosNumberValue(" + item.los + ")' data-toggle='modal' data-target='#policy_upload' '>Policy Upload</div>" +
								" " +
								" "+
								" </div></div></li>";
*/
 /*                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span> <div class='assign-second' >" + item.los + "</div>" +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class=''  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>" +
							" </div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'><span class='act-dct ><input value='value-1' id='checkItem123' name='rc2123' type='checkbox'><label for='checkItem123' onclick=''></label> " +
							" </span>" +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div>" +
							" " +
							" <div class='right-arrow'><a href='/AdminModule/completedLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>"+
							" </div></div></li>";
*/	 
                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span> <div class='assign-second' >" + item.los + "</div>" +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span></div></div>" +
                 		
                 		
                  		
							
							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span></div> "+
							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
							"  <div class='data_list'><span class='sts-heading'></span><span class='sts-result green'></span> </div> </div> "+
							
                 		
                 		
							" <div class='col-lg-3 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class=''  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>" +
							" </div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'><span class='act-dct ><input value='value-1' id='checkItem123' name='rc2123' type='checkbox'><label for='checkItem123' onclick=''></label> " +
							" </span>" +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div>" +
							/*"<div class='selft-btn' onclick='editUserLosNumberValue(" + item.los + ")' data-toggle='modal' data-target='#policy_upload' '>Policy Upload</div> " +*/
							"<div class='right-arrow'><a href='/AdminModule/completedLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div> "+
							" </div></div></li>";

                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                        totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                }
	            }
	        }
	        });
	     // alert("2");
	}

	  
	  function fatchLostDetailsList(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  var totalItems="";
		  var totalcount="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/lostAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				 /* checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	 totalItems=item.totalCount;
                    	/* <span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span>*/
                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span></div></div>" +
                        		
                        		
                         		
    							
    							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span></div> "+
    							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
    							"  <div class='data_list'><span class='sts-heading'></span><span class='sts-result green'></span> </div> </div> "+
    							
                        		
                        		
								" <div class='col-lg-3 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class=''  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>" +
								" </div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'><span class='act-dct '> " +
								" <label for='checkItem' onclick=''></label></span>" +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div> " +
								" <div class='right-arrow'><a href='/AdminModule/lostLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
                        if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
							$('#total_reg').val(item.totalCount);
                        //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
                        if(item.totalCount=='1')
                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
                        else
                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
  
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                        //totalcount = responseData.count;
	                    	if (totalcount == 0 || totalcount == ''){
	                    		totalcount = 0;
	        	                $('#myPager').unbind('page');
	      					  $('#myPager').hide();
	      					document.getElementById('total_reg').innerHTML="";
	      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
	                    	}

	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                       


	                       	$('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchLostDetailsListBypagination((num-1)*5,5,true)
								//alert("else")
							});
	                }
	            }
	        }
	        });
	     // alert("2");
	}

	  function fatchLostDetailsListBypagination(startLimit,endLimit,flag) {
		  //alert("1");
		  var cbarray = document.getElementsByName("rc2"); 
		  var checkedValue="";
		  $('#wait').show();
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		                  checkedValue += cbarray[i].value;
		                  checkedValue +="~";
		           // cbarray[i].checked = false;
		          //  alert( "it is true" );
		        }
		}
		  var htmlFragment = "";
		  var dataRequest={
			  "startLimit":startLimit,
			  "endLimit":endLimit
		  }
		  var searchValue=document.getElementById('searchBox').value;
		  if(null!=searchValue){
		  }
	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/lostAssignInsuranceLead1",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	 startLimit:startLimit,
				  endLimit:endLimit,
				  searchValue:searchValue,
				 /* checkedValue:checkedValue,*/
				  obj:JSON.stringify(obj),
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	                console.log("no responseJSON found");
	            } else {
	                var responseData = JSON.parse(data);
                    $.map(responseData, function(item){ 
                    	 totalcount = item.count;
                    	/* */
 /*                       htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div><div class='col-lg-6 text-right'> "+
								" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span><div class='right-arrow'><a href='/AdminModule/lostLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div><div class='col-lg-12'>" +
								" <span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZaap Link</a></span></div></div>" +
								" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'><span class='act-dct '> " +
								" <label for='checkItem' onclick=''></label></span>" +
								" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div> " +
								" </div></div></li>";
*/
 /*                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span>" +
							" </div></div><div class='col-lg-6 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class=''  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>" +
							" </div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'><span class='act-dct '> " +
							" <label for='checkItem' onclick=''></label></span>" +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div> " +
							"<div class='right-arrow'><a href='/AdminModule/lostLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div> </div></div></li>";
	 
*/
                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name'>" + item.customerName + "</div> <div class='data_list'><span class='assign-fisrt' >" +
                 		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                 		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                 		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                 		" <span class='assign-fisrt'>Address </span>  <input type='hidden' id='tariff' name='tariff' value=" + item.tariff + "> "+
                 		" <span class='assign-second'>" + item.address + " </span></div></div>" +
                 		
                 		
                  		
							
							" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span></div> "+
							" <div class='data_list'><span class='sts-heading'> </span><span class='sts-result yellow'></span></div> "+
							"  <div class='data_list'><span class='sts-heading'></span><span class='sts-result green'></span> </div> </div> "+
							
                 		
                 		
							" <div class='col-lg-3 text-right'> "+
							" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
							" </span><div class=''  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>" +
							" </div>" +
							" <div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
							" <span class='vehicle-name' >" + item.vehicle + "</span> " +
							"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
							" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
							" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
							" Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
							" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
							" </div><div class='checkbar'><div class='selft_left'><span class='act-dct '> " +
							" <label for='checkItem' onclick=''></label></span>" +
							" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+
							" </div><div class='self_right'>" +
							" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")'>History</div> " +
							" <div class='right-arrow'><a href='/AdminModule/lostLosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
	 
                    });
			if (undefined != responseData) {
	                    $('#myDiv li').remove();
	                    $('#myDiv').empty();
	                   // alert(flag);
	                    if (flag) {
	                        totalcount = responseData.count;
	                        if (totalcount == 0) $('#fromPage').html("0");
	                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
	                       // alert("q");
	                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
	                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
	                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
	                        if ($('#fromPage').html() == $('#pageRange').html()) $('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
	                   // alert("end");
	                    }
	                    $('#myDiv').append(htmlFragment);
	                    $('#wait').hide();
	                }
	            }
	        }
	        });
	     // alert("2");
	}

	  function resetCheckBox(){
		  var cbarray = document.getElementsByName("rc2");
		    for(var i = 0; i < cbarray.length; i++){
		        if( cbarray[i].checked == false ){
		            //cbarray[i].checked = true;
		            //alert( "it is false" );
		        }else{ 
		            cbarray[i].checked = false;
		            //alert( "it is true" );
		        }
		}   
		    obj=[];
		    obj = {"taskStatusFilter": [], "CityStatusFilter": [], "branchStatusFilter": [], "approvalStatusFilter": [],
					"modelYearStatusFilter": [], "expirtDateStatusFilter": []};
		    document.getElementById('searchPatternVal').value="";
		    document.getElementById('searchBranchPatternVal').value="";
		    
		   // alert("done");
	  }
	  
	  function getCityVal(){
		  $('#wait').show();
		  var searchPatternVal = document.getElementById('searchPatternVal').value; 
		  var ecode=document.getElementById("eCodeHomePage").value;
			 // alert(searchPatternVal);
			  var htmlFragment = "";
			  var dataRequest={
					  "searchPatternVal":searchPatternVal
				  }
		      $.ajax({
			    	url: "/AdminModule/getCityVal",
			        type: 'POST',
			        data: {
			        	searchPatternVal:searchPatternVal,
			        	ecode:ecode,
						  _csrf:$('#csrfToken').val()
			        },
			        success: function(data) {
			        	console.log(data);
			            if ($.isEmptyObject(data)) {
			                console.log("no responseJSON found");
			            } else {
			                var responseData = JSON.parse(data);
		                    $.map(responseData, function(item){ 
		                    	 htmlFragment += "<li><span class='act-dct checkbox-btn'><input  type='checkbox' class='act-dct checkbox-btn' name='rc2' id='" + item.cityName + "' value='" + item.cityName + "' onchange='addSearchFilter(this.value)'> "+
		                    	"  <label for='" + item.cityName + "'><span>" + item.cityName + "</span></label></span></li>";
		                    });
					if (undefined != responseData) {
						$('#cityListDetail li').remove();
						//falert(htmlFragment);
			                    $('#cityListDetail').append(htmlFragment);
			                    
			                }
					 $('#wait').hide();
			            }
			        }
			        });
	  }
	  function getBranchVal(){
		  $('#wait').show();
		  var searchPatternVal = document.getElementById('searchBranchPatternVal').value; 
		  var ecode=document.getElementById("eCodeHomePage").value;
			  var htmlFragment = "";
			  var dataRequest={
					  "searchPatternVal":searchPatternVal
				  }
		      $.ajax({
			    	url: "/AdminModule/getBranchVal",
			        type: 'POST',
			        data: {
			        	searchPatternVal:searchPatternVal,
			        	ecode:ecode,
						  _csrf:$('#csrfToken').val()
			        },
			        success: function(data) {
			        	console.log(data);
			            if ($.isEmptyObject(data)) {
			                console.log("no responseJSON found");
			            } else {
			                var responseData = JSON.parse(data);
		                    $.map(responseData, function(item){ 
		                    	 htmlFragment += "<li> <span class='act-dct checkbox-btn'><input  type='checkbox' class='act-dct checkbox-btn' id='" + item + "' name='rc2' value='" + item + "' onchange='addSearchFilter(this.value)'> "+
		                    	"  <label for='" + item + "'><span>" + item + "</span></label></span></li>";
		                    });
					if (undefined != responseData) {
						$('#branchListDetial li').remove();
			                    $('#branchListDetial').append(htmlFragment);
			                }
			            }
			            $('#wait').hide();
			        }
			        });
	  }
	function searchUnassignTaskForThisECode(ecode){
		  var dataRequest={
		  "ecode":ecode,
		  }
		 $.ajax({
		 type:'POST', 
		 url: "/AdminModule/unAssignInsuranceLead", 
		 data: {
			 ecode:ecode,
		 _csrf:$('#csrfToken').val()
		        },
		 //async:false,
		 //dataType: 'JSON',
		 success:function(response){
		 }
		 });
	  }
  function searchAssignTaskForThisECode(ecode){
	 // alert(ecode);
		  var dataRequest={
		  "ecode":ecode,
		  }
		 $.ajax({
		 type:'POST', 
		 url: "/AdminModule/selfAssignInsuranceLead", 
		 data: {
			 ecode:ecode,
		 _csrf:$('#csrfToken').val()
		        },
		 //async:false,
		 //dataType: 'JSON',
		 success:function(response){
		 }
		 });
	  }
/*	  function searchSelfAssignInsuranceLead(){
		  var searchBox=document.getElementById('searchBox').value;
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/updateUserDetail",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	searchBox:searchBox,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	//alert("3")
		        	console.log(data);
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		                var responseData = JSON.parse(data);
	                     
	                    	//alert(item.basicPremium);
	                    	
	                    	
	                    	//$('#basicPrem').val(item.basicPremium);
	                   
				if (undefined != responseData) {
					//alert(responseData);
					
					modalAlertToShowCustomMessage('successfully Update the Status', 'success');
		                   
		                }
		            }
		        }
	    
		       	
		        });

	  }
*/
 function editUserLosNumberValue(val){
	 document.getElementById("editUserLosNumber").value=val;
	 document.getElementById('remarkValue').value="";
	 document.getElementById('uploadFiles').value="";
	 var cbarray = document.getElementsByName("rc2");
	    for(var i = 0; i < cbarray.length; i++){
	        if( cbarray[i].checked == false ){
	            //cbarray[i].checked = true;
	            //alert( "it is false" );
	        }else{ 
	            cbarray[i].checked = false;
	            //alert( "it is true" );
	        }
	}   
 }
 function editPolicyDetail(val){
	 document.getElementById("editUserLosNumber").value=val;
		document.getElementById("expiryDate").value="";
		document.getElementById("previousPolicy").value="";
		document.getElementById("prevInsurerId").value="";
		 $('#wait').show();
	  var dataRequest={
			  "val":val,
			  }
			 $.ajax({
			 type:'POST', 
			 url: "/AdminModule/editPolicyDetail", 
			 data: {
				 val:val,
			 _csrf:$('#csrfToken').val()
			        },
			 //async:false,
			 //dataType: 'JSON',
			 success:function(data){
				 $('#wait').hide();
				 var htmlCity="";
				 //alert(data);
				 /*$.map(data,function(item){*/
						//var oemResp = $.parseJSON(response);
	                var responseData =  $.parseJSON(data);
	                //alert(responseData.previousInsurerList);
                    $.map(responseData.previousInsurerList, function(item){ 
							$('#prevInsurerId').append('<option value="'+item+'" >'+item+'</option>');
						});
						/*$('#prevInsurerId').append('<option value="'+item.prevInsurersList+'"> '+item.prevInsurersList+'</option>');*/
						document.getElementById("expiryDate").value=responseData.expiryDate;
						document.getElementById("previousPolicy").value=responseData.previousPolicy;
						document.getElementById("prevInsurerId").value=responseData.previousInsurer;
					/*});*/
					//$('#'+).append(htmlCity);
			 }
			 });
 }
		 function quotationShare(val){
			 document.getElementById("editUserLosNumber").value=val;
			 document.getElementById("mobNum").value="";
			 document.getElementById("emailId").value="";
			 $('#wait').show();
			  var dataRequest={
					  "val":val,
					  }
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/quotationShare", 
					 data: {
						 val:val,
					 _csrf:$('#csrfToken').val()
					        },
					 //async:false,
					 //dataType: 'JSON',
					 success:function(data){
						 $('#wait').hide();
						 document.getElementById("mobNum").value=data;
					 }
				})
		 }				
		 
		 function sendPayzappShare(val){
			 document.getElementById("editUserLosNumber").value=val;
			 document.getElementById("payzappMobNum").value="";
			 document.getElementById("payzappEmailId").value="";
			 $('#wait').show();
			 
			 
			  var dataRequest={
					  "val":val,
					  }
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/quotationShare", 
					 data: {
						 val:val,
					 _csrf:$('#csrfToken').val()
					        },
					 //async:false,
					 //dataType: 'JSON',
					 success:function(data){
						 $('#wait').hide();
						 document.getElementById("payzappMobNum").value=data;
					 }
				})
		 }				 
	
		 
		 function updateApprovalStatus(type){
			// alert(val);
			 // var  checkPayzappLink= "false";
			 // var  checkDepCap= document.getElementById("checkDepCap1").checked;
			  var  checkNcb= document.getElementById("checkNcb").checked;
			  var losNum = document.getElementById("losNumberValue").value; 
			//  var depCovPrice=document.getElementById('depCovPrice').innerHTML;
			 // var depCovId=document.getElementById("depCovNameList1").value; 
			  //alert(depCovId);
			  var idvAmount=document.getElementById("idvAmount1").value; 
			 // var basicPremium=document.getElementById("basicPrem1").value; 
			  //var totalTaxes=document.getElementById("totalTaxes1").value; 
			  //var ncbValue=document.getElementById("ncbValue1").value; 
			  var discountValue=document.getElementById("discountValue1").value;
			  var ncbValue=document.getElementById("ncbValue").value; 
			  
			  
			  var prevAmount=document.getElementById("hiddentotalAmount").value;
			  var finalAmount12=prevAmount;
		      	var percentage=69;
		      	var isAllow=(prevAmount/100)*percentage;
		      	//finalAmount123=prevAmount+isAllow;
		      	if(discountValue<=isAllow){
		      		//alert("ok");
		      	}else{
		      		 modalAlertToShowCustomMessage('Maximum discount value exceeded.', 'error');
		      		 document.getElementById('calculateApprovalTab').style.display='none';
		      		return;
		      	}
		      
		      	 $('#wait').show();
			 // var tariff=document.getElementById("tariff1").value; 
			  ////var tp=document.getElementById("tpAmount1").value; 
			 // var pa=document.getElementById("paAmount1").value; 
			  //alert("fdgf");
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/updateApprovalStatus", 
					 data: {
						 losNum:losNum,
						 type:type,
							  idvAmount:idvAmount,
							  ncbValue:ncbValue,
							  checkNcb:checkNcb,
							  discountValue:discountValue,
					 _csrf:$('#csrfToken').val()
					        },
					 //async:false,
					 //dataType: 'JSON',
					 success:function(data){
				        	console.log(data);
				        	//alert(data);
				        	 $('#wait').hide();
				            if ($.isEmptyObject(data)) {
				                console.log("no responseJSON found");
				            } else {
				            	//alert(data="ApprovedByTPPSM");
				            	if(data="ApprovedByTPPSM"){
				            		// modalAlertToShowCustomMessage('Successfully Aprroved By TPPSM', 'success');
				            		// location.reload();
				            		swal(
											{
												title : "Successfully Approved by TPPSM!!",
												text : "",
												type : "success",
											}).then(function() {
												location.reload();
												
									});
				            		
				            		
						          }else{
						        	  modalAlertToShowCustomMessage('Rejected By TPPSM!', 'error');
				            	}
				            }
					 }
					 });
		 }
		 function updateRejectStatusByPage(losNum,type){
				// alert(losNum);
					  var losNum = document.getElementById("losNumber").value; 
					  updateRejectStatus(losNum,'reject');
		 }
		 function updateRejectStatus(losNum,type){
			 
				swal({
			        title: "Are you sure?",
			        text: "You Want to Reject This Leads!.",
			        type: "warning",
			        showCancelButton: true,
			        confirmButtonColor: '#DD6B55',
			        confirmButtonText: 'Yes, I am sure!',
			        cancelButtonText: "No, cancel it!",
			        closeOnConfirm: true,
			        closeOnCancel: false
			    }).then(function(isConfirm) {
			    	if (isConfirm) {   
				/*if (confirm("Are You Sure You Want Reject This Leads!")) {*/
				 // var  checkPayzappLink= "false";
				 // var  checkDepCap= document.getElementById("checkDepCap1").checked;
				 /* var  checkNcb= document.getElementById("checkNcb1").checked;
				 var losNum = document.getElementById("losNumberValue").value; */
				//  var depCovPrice=document.getElementById('depCovPrice').innerHTML;
				 // var depCovId=document.getElementById("depCovNameList1").value; 
				  //alert(depCovId);
				 // var idvAmount=document.getElementById("idvAmount1").value; 
				  ///var basicPremium=document.getElementById("basicPrem1").value; 
				 // var totalTaxes=document.getElementById("totalTaxes1").value; 
				  /*var ncbValue=document.getElementById("ncbValue1").value; 
				  var discountValue=document.getElementById("discountValue1").value; */
				  //var tariff=document.getElementById("tariff1").value; 
				 // var tp=document.getElementById("tpAmount1").value; 
				 // var pa=document.getElementById("paAmount1").value; 
					// var losNum = document.getElementById("losNumberValue").value;
					 //alert(losNum);
					// return;
						 $.ajax({
						 type:'POST', 
						 url: "/AdminModule/updateApprovalStatus", 
						 data: {
							 losNum:losNum,
							 type:type,
								 /* idvAmount:idvAmount,
								  ncbValue:ncbValue,
								  checkNcb:checkNcb,
								  discountValue:discountValue,*/
						 _csrf:$('#csrfToken').val()
						        },
						 //async:false,
						 //dataType: 'JSON',
						 success:function(data){
					        	console.log(data);
					        	////alert(data);
					        	//alert(data="RejectedByTPPSM");
					            if ($.isEmptyObject(data)) {
					                console.log("no responseJSON found");
					            } else if(data="RejectedByTPPSM") {
					            	//alert(data="ApprovedByTPPSM");
							        	 // modalAlertToShowCustomMessage('Rejected By TPPSM!', 'success');
							        	 // location.reload();
				            		swal(
											{
												title : "Rejected By TPPSM.!",
												text : "",
												type : "success",
											}).then(function() {
												location.reload();
												
									});
					            	
					            	
					            }else{
					            	modalAlertToShowCustomMessage('There Is Some Error!', 'error');
					            }
						 }
						 });
			 }
		 });	
		 }		    
		  function calculateApprovalPremium(losNum) {
			 // alert("calculatePremium"+losNum);
			  //return;
				document.getElementById("idvAmount1").value="";
				document.getElementById("hiddenIdvAmount").value="";
				document.getElementById("hiddentotalAmount").value="";
				//document.getElementById("basicPrem1").value="";
				////document.getElementById("totalTaxes1").value="";
				//document.getElementById("depCovPrice1").innerHTML="";
				document.getElementById("totalAmount1").innerHTML="";
				document.getElementById("discountValue1").value="";
				
				document.getElementById("oldDiscount").value="";
				document.getElementById("oldNcb").value="";
				document.getElementById("oldIdv").value="";
				document.getElementById("losNumber").value=losNum; 
				
				var prevNcbVal="";
			  var htmlFragment = "";
			  var ncbVal,firstCheck="";
			  var dataRequest={
					  "losNum":losNum
				  }
		      $.ajax({
				  //headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
			    	//url: "/AdminModule/selfAssignInsuranceLead1",
			       // type: 'POST',
			        //dataType: "JSON",
			        //async:false,
			    	url: "/AdminModule/calculatePremium",
			        type: 'POST',
			        data: {
			        	losNum:losNum,
						  _csrf:$('#csrfToken').val()
			        },
					success:function(data){
						//console.log(data);
						//$('#depCovNameList1').empty().append('<option selected value="all">Select DepCover Name</option>');
						//var abc=data.insuranceSegmentDepCoverJoin;
						$.map(data,function(item){
							var chacekname=item.depCapName;
							//alert(item.ncb+"---");
							/*if(item.zeroDep){
								      $(".dep-amount1").slideToggle('slow');
							}*/
							////alert("in-"+item.ncb);
							//alert(item.ncbValues);
							if(null != item.ncb &&  0 < parseInt(item.ncb)  ){
							      $(".nbc-amount").slideToggle('slow');
							     /* $('#checkNcb').prop('checked', true);*/
							      $('#checkNcb').prop('checked', false);
							      prevNcbVal=item.ncb;
							     // $('#ncbValue').val(item.ncb);
							     // alert(item.ncb);
						}
							if(null !=item.ncbValues)
								ncbVal=item.ncbValues;
							if(chacekname!=null){
								//$('#depCovNameList1').append('<option value="'+item.depCapId+'" code="'+item.depCapName+'_'+item.depCapId+'"> '+item.depCapName+'</option>');
							}
							if(firstCheck == ""){
								//alert(firstCheck);
								firstCheck=item.depCapId;
							}
							/*
							for(var i = 0; i < res.length; i++){
								$('#ncbValue').append('<option value='+res[i]+'>' +res[i]+'</option>');
							}
							*/
							if(item.idvAmount!=null){
								//alert(item.idvAmount);
								document.getElementById("idvAmount1").value=item.idvAmount;
								//document.getElementById("basicPrem1").value=item.basicPremium;
								//document.getElementById("totalTaxes1").value=item.taxAmount;
								document.getElementById("losNumberValue").value=losNum;
								//document.getElementById("tariff1").value=item.tariff;
								//document.getElementById("paAmount1").value=item.pa;
								//document.getElementById("tpAmount1").value=item.tp;
								//document.getElementById("depCovPrice1").innerHTML=item.zeroDepAmt;
								document.getElementById("discountValue1").value=item.discountAmount;
								document.getElementById("totalAmount1").innerHTML="<img src='images/rupee.svg' width='15'>"+item.premium;
								document.getElementById("oldDiscount").value=item.oldDiscount;
								document.getElementById("oldNcb").value=item.oldNcb;
								document.getElementById("oldIdv").value=item.oldIdv;
								document.getElementById("hiddenIdvAmount").value=item.idvAmount;
								document.getElementById("hiddentotalAmount").value=item.premium;
	
								
							}
							//alert(item.ncb+"---");
	/*						if(null != item.ncb){
							     // $(".nbc-amount").slideToggle('slow');
								//alert("in");
							      $('#ncbValue').val(item.ncb);
							      prevNcbVal=item.ncb;
							     // alert(item.ncb);
						}*/
						});
						//$('#depCovNameList1').val(firstCheck);
						var res = ncbVal.split(",");
						$('#ncbValue').html('');
						for(var i = 0; i < res.length; i++){
							//alert("apend");
							$('#ncbValue').append('<option value='+res[i]+'>' +res[i]+'</option>');
						}
						//alert(prevNcbVal);
						//$('#ncbValue').val(prevNcbVal);
						if(null != prevNcbVal &&  0 < parseInt(prevNcbVal)){
							$('#ncbValue').val(prevNcbVal);
						}else{
							$('#ncbValue').val('0');
						}
						if(null == prevNcbVal ||  "" == prevNcbVal  )
							/*$('#checkNcb').prop('checked', false);*/
						$('#checkNcb').prop('checked', true);

						//$('#ncbValue').val(item.ncb);
					}
	/*		        success: function(data) {
			        	console.log(data);
			            if ($.isEmptyObject(data)) {
			                console.log("no responseJSON found");
			            } else {
			                var responseData = JSON.parse(data);
		                    $.map(responseData, function(item){ 
		                    	 totalcount = item.count;
		                        htmlFragment += "";
		                    });
					if (undefined != responseData) {
						$.map(data,function(item){
							$('#depCovNameList').append('<option value="'+item.id+'">'+item.insuranceDepCoverMaster.name +'</option>');
						});
			                   // $('#depCovNameList').append(htmlFragment);
			                }
			            }
			        }*/
			        });
			     // document.getElementById("").value=item.depCapId;
			}
		  function calculateApprovalPremiumByPage() {
			  var losNum = document.getElementById("losNumber").value; 
			  calculateApprovalPremium(losNum);
		  }
		    function calculateApprovalPremiumAmount() {
				 // alert("1");
				 // var checkedValue = $('.checkPayzappLink').val();
				  var  checkPayzappLink= "false";
				  var  checkDepCap= document.getElementById("checkDepCap1").checked;
				  var  checkNcb= document.getElementById("checkNcb1").checked;
				  var losNum = document.getElementById("losNumber").value; 
				//  var depCovPrice=document.getElementById('depCovPrice').innerHTML;
				  var depCovId=document.getElementById("depCovNameList1").value; 
				  //alert(depCovId);
				  var idvAmount=document.getElementById("idvAmount1").value; 
				  var basicPremium=document.getElementById("basicPrem1").value; 
				  var totalTaxes=document.getElementById("totalTaxes1").value; 
				  var ncbValue=document.getElementById("ncbValue1").value; 
				  var discountValue=document.getElementById("discountValue1").value; 
				  var tariff=document.getElementById("tariff1").value; 
				  var tp=document.getElementById("tpAmount1").value; 
				  var pa=document.getElementById("paAmount1").value; 
				 // alert("2"+tariff);
				 // alert(checkPayzappLink);
				//  alert(checkDepCap);alert(checkPayzappLink);alert(losNum);alert(depCovPrice);alert(idvAmount);alert(basicPrem);alert(totalTaxes);alert(ncbValue);alert(discountValue);
				//  alert(depCovPrice);
				  var htmlFragment = "";
				/*  var dataRequest={
					  "losNum":losNum,
					  "depCovPrice":depCovPrice,
					  "idvAmount":idvAmount,
					  "basicPremium":basicPremium,
					  "totalTaxes":totalTaxes,
					  "ncb":ncb,
					 
					  "checkPayzappLink":checkPayzappLink,
					  "checkDepCap":checkDepCap,
					  "checkNcb":checkNcb,
					  "discountValue":discountValue
				  }*/
			      $.ajax({
			    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
			    	url: "/AdminModule/calculatePremiumAmount",
			        type: 'POST',
			        //dataType: "JSON",
			        //async:false,
			        data: {
			        	depCovId:depCovId,
						  idvAmount:idvAmount,
						  basicPremium:basicPremium,
						  totalTaxes:totalTaxes,
						  ncbValue:ncbValue,
						  checkPayzappLink:checkPayzappLink,
						  checkDepCap:checkDepCap,
						  checkNcb:checkNcb,
						  discountValue:discountValue,
						  tariff:tariff,
						  tp:tp,
						  pa:pa,
						  _csrf:$('#csrfToken').val()
			        },
			        success: function(data) {
			        	console.log(data);
			            if ($.isEmptyObject(data)) {
			                console.log("no responseJSON found");
			            } else {
			                var responseData = JSON.parse(data);
		                    	document.getElementById("basicPrem1").value=responseData.basicPremium;
		                    	document.getElementById("totalTaxes1").value=responseData.taxes;
		                    	document.getElementById("totalAmount1").innerHTML="<img src='images/rupee.svg' width='15'>"+responseData.premium;
		                    	//$('#basicPrem').val(item.basicPremium);
					if (undefined != responseData) {
						//alert(responseData);
			                }
			            }
			        }
			        });
			     // alert("2");
			}
			  function changeApprovalDepVal(val){
				  /*		  var val=$(el).find(':selected').attr('code').split("_");
				  		  //alert(val[1]);
				  		  document.getElementById("depCovPrice").innerHTML=val[1];*/
				  			 // alert("1");
				  			 // var checkedValue = $('.checkPayzappLink').val();
				  			  var  checkDepCap= document.getElementById("checkDepCap1").checked;
				  			  var  checkNcb= document.getElementById("checkNcb1").checked;
				  			  var losNum = document.getElementById("losNumberValue").value; 
				  			 // var depCovPrice=document.getElementById('depCovPrice').innerHTML;
				  			  var idvAmount=document.getElementById("idvAmount1").value; 
				  			  var basicPremium=document.getElementById("basicPrem1").value; 
				  			  var totalTaxes=document.getElementById("totalTaxes1").value; 
				  			  var ncbValue=document.getElementById("ncbValue1").value; 
				  			  var discountValue=document.getElementById("discountValue1").value; 
				  			  var tariff=document.getElementById("tariff1").value; 
				  			  var tp=document.getElementById("tpAmount1").value; 
				  			  var pa=document.getElementById("paAmount1").value; 
				  			  var zeroDepMul=val;
				  			 // alert(checkPayzappLink);
				  			//  alert(checkDepCap);alert(checkPayzappLink);alert(losNum);alert(depCovPrice);alert(idvAmount);alert(basicPrem);alert(totalTaxes);alert(ncbValue);alert(discountValue);
				  			//  alert(depCovPrice);
				  			  var htmlFragment = "";
				  			/*  var dataRequest={
				  				 
				  				  "losNum":losNum,
				  				  "depCovPrice":depCovPrice,
				  				  "idvAmount":idvAmount,
				  				  "basicPremium":basicPremium,
				  				  "totalTaxes":totalTaxes,
				  				  "ncb":ncb,
				  				 
				  				  "checkPayzappLink":checkPayzappLink,
				  				  "checkDepCap":checkDepCap,
				  				  "checkNcb":checkNcb,
				  				  "discountValue":discountValue
				  			  }*/
				  		      $.ajax({
				  		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
				  		    	url: "/AdminModule/calculateDepCapAmount",
				  		        type: 'POST',
				  		        //dataType: "JSON",
				  		        //async:false,
				  		        data: {
				  					  idvAmount:idvAmount,
				  					  basicPremium:basicPremium,
				  					  totalTaxes:totalTaxes,
				  					  ncbValue:ncbValue,
				  					  zeroDepMul:zeroDepMul,
				  					  checkDepCap:checkDepCap,
				  					  checkNcb:checkNcb,
				  					  discountValue:discountValue,
				  					  checkDepCap:checkDepCap,
				  					  tariff:tariff,
				  					  tp:tp,
				  					  pa:pa,
				  					  _csrf:$('#csrfToken').val()
				  		        },
				  		        success: function(data) {
				  		        	//alert("3")
				  		        	console.log(data);
				  		            if ($.isEmptyObject(data)) {
				  		                console.log("no responseJSON found");
				  		            } else {
				  		                var responseData = JSON.parse(data);
				  		                console.log(responseData);
				  		               // alert(responseData.zeroDepAmt);
				  	                    	document.getElementById("depCovPrice1").innerHTML=responseData.zeroDepAmt;
				  	                    	//$('#basicPrem').val(item.basicPremium);
				  				if (undefined != responseData) {
				  					//alert(responseData);
				  		                }
				  		            }
				  		        }
				  		        });
				  		     // alert("2");
				  	  }
			  function quotationShareByPage(){
				  var losNum = document.getElementById("losNumber").value; 
				  quotationShare(losNum);
			  }
			  function sendPayzappShareByPage(){
				  var losNum = document.getElementById("losNumber").value; 
				  sendPayzappShare(losNum);
			  }
			  function inrFormat(x){
				// alert(x);
				 x=Math.ceil(x);
				  x=x.toString();
				  var lastThree = x.substring(x.length-3);
				  var otherNumbers = x.substring(0,x.length-3);
				  if(otherNumbers != '')
				      lastThree = ',' + lastThree;
				  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
				  return res;
				  }
			  
			 function loadReassignList(){
				 // var pa=document.getElementById("paAmount1").value;
				 var selfEcode=document.getElementById("eCodeHomePage").value;
				 document.getElementById("self-asssign-radio").value=selfEcode;
				 //alert(document.getElementById("self-asssign-radio").value);
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/loadReassignList", 
					 data: {
							_csrf:$('#csrfToken').val()
				        },
						//async:false,
						//dataType: 'JSON',
						success:function(data){
		  		        	console.log(data);
		  		        	reassignPopUpList = [];
							if(data == null || data == ""){
							 // modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
							  document.getElementById("firstReassignList").innerHTML = "";
							  $('#firstReassignList').append("<span class='red'> No user found. Please try again</span>");
							} else {
								 document.getElementById("firstReassignList").innerHTML = "";
								 var htmlFragment="";
			                //var responseData = JSON.parse(data);
								$.map(data, function(item){ 
/*		                    	htmlFragment +=	    " <li> "+
							                        "   <div class='inner-userpic'><img src='images/login-user.svg'></div> "+
							                        "  <div class='num-off-act'>	"+item.username+"  "+
							                        "      <span>"+item.ecode+"</span>	"+
							                        "    </div>	"+
							                        "    <div class='right-assign'>	"+
							                        "      <span class='radio-btn'>	"+
							                        "        <input value='value-1' id='radio1' name='rc2' type='radio'>	"+
							                        "        <label for='radio1' onclick=''><span></span></label>	"+
							                        "      </span>	"+
							                        "    </div>	"+
							                        "  <a href=''></a>	"+
							            			"  </li>"	;*/
		                    	htmlFragment+= " <div class='agginee-row'> "+
									        "   <div class='inner-userpic'><img src='images/login-user.svg'></div> "+
									        "    <div class='num-off-act'>"+item.username+" "+
									        "      <span>"+item.ecode+"</span> "+
									         "   </div> "+
									          "  <div class='right-assign'> "+
									           "   <span class='radio-btn'> "+
									            "    <input  id='"+item.ecode+"' value='"+item.ecode+"' name='newOwnerRadio' type='radio'> "+
									             "   <label for='"+item.ecode+"' onclick=''><span></span></label> "+
									             " </span> "+
									             " <div class='slidearrow'><a href='#' onclick='$('.slidemenu-section').effect('slide');'> "+
									             ' <img src="images/right-arrow.svg" width="15" onclick="clearLoadReassignList();loadReassignListByEcode(\''+item.ecode+'\')"></a></div> '+
									             " </div></div>" ;
					 });
		                   // alert(htmlFragment);
		                    console.log(htmlFragment);
		                    $('#firstReassignList').append(htmlFragment);
		                    //$('#off-canvas-right').offcanvas('show');
							}
						}
						 });	
				/* var cbarray = document.getElementsByName("reassignBox"); 
				  //var checkedValue="";
				 for (var i = 0, length = cbarray.length; i < length; i++) {
				      if (cbarray[i].checked) {
				          remarkValue += "_"+ cbarray[i].value;
				          // only one radio can be logically checked, don't check the rest
				         // break;
				          alert(remarkValue);
				      }
				  }
*/			 } 
			 function loadReassignListByEcode(ecode){
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/loadReassignList", 
					 data: {
						 ecode:ecode,
							_csrf:$('#csrfToken').val()
				        },
						//async:false,
						//dataType: 'JSON',
						success:function(data){
		  		        	console.log(data);
							if(data == null || data == ""){
							  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
							} else {
								document.getElementById('reassignBackButtonDiv').style.display='block';
								 reassignPopUpList.push(ecode);
								document.getElementById("firstReassignList").innerHTML = "";
								 var htmlFragment="";
								$.map(data, function(item){ 
		                    	htmlFragment+= " <div class='agginee-row'> "+
									        "   <div class='inner-userpic'><img src='images/login-user.svg'></div> "+
									        "    <div class='num-off-act'>"+item.username+" "+
									        "      <span>"+item.ecode+"</span> "+
									         "   </div> "+
									          "  <div class='right-assign'> "+
									           "   <span class='radio-btn'> "+
									            "    <input  id='"+item.ecode+"'  value='"+item.ecode+"' name='newOwnerRadio' type='radio'> "+
									             "   <label for='"+item.ecode+"' onclick=''><span></span></label> "+
									             " </span> "+
									             ' <img src="images/right-arrow.svg" width="15" onclick="loadReassignListByEcode(\''+item.ecode+'\')"></a></div> '+
									             " </div></div>" ;
					 });
		                   // alert(htmlFragment);
		                    console.log(htmlFragment);
		                    $('#firstReassignList').append(htmlFragment);
		                    //$('#off-canvas-right').offcanvas('show');
							}
						}
						 });	
					 }
			 function backLoadReassignListByEcode(){
				 //alert(reassignPopUpList);
				//alert(reassignPopUpList.length+"back-");
/*				if(reassignPopUpList.length <1){
					ecode="";
				}else{
					var ecode= reassignPopUpList.pop();
					if(reassignPopUpList.length!=0)
						ecode=reassignPopUpList.pop();
				}*/
			if(reassignPopUpList.length>2){
					ecode=reassignPopUpList[(reassignPopUpList.length)-2];
					reassignPopUpList.pop();
			}else{
				if(reassignPopUpList.length==2){
					//alert("if-"+reassignPopUpList);
					ecode=reassignPopUpList[(reassignPopUpList.length)-2];
					//alert("final-"+ecode);
					reassignPopUpList.pop();
					reassignPopUpList = [];
				}else{
					//alert("else");
					ecode="";
					reassignPopUpList = [];
					document.getElementById('reassignBackButtonDiv').style.display='none';
				}
			}
				//alert(ecode);
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/loadReassignList", 
					 data: {
						 ecode:ecode,
							_csrf:$('#csrfToken').val()
				        },
						//async:false,
						//dataType: 'JSON',
						success:function(data){
		  		        	console.log(data);
							if(data == null || data == ""){
							  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
							} else {
								document.getElementById("firstReassignList").innerHTML = "";
								 var htmlFragment="";
								$.map(data, function(item){ 
		                    	htmlFragment+= " <div class='agginee-row'> "+
									        "   <div class='inner-userpic'><img src='images/login-user.svg'></div> "+
									        "    <div class='num-off-act'>"+item.username+" "+
									        "      <span>"+item.ecode+"</span> "+
									         "   </div> "+
									          "  <div class='right-assign'> "+
									           "   <span class='radio-btn'> "+
									            "    <input  value='"+item.ecode+"' id='"+item.ecode+"' name='newOwnerRadio' type='radio'> "+
									             "   <label for='"+item.ecode+"' onclick=''><span></span></label> "+
									             " </span> "+
									             ' <img src="images/right-arrow.svg" width="15" onclick="loadReassignListByEcode(\''+item.ecode+'\')"></a></div> '+
									             " </div></div>" ;
					 });
		                   // alert(htmlFragment);
		                    console.log(htmlFragment);
		                    $('#firstReassignList').append(htmlFragment);
		                    //$('#off-canvas-right').offcanvas('show');
							}
						}
						 });	
				}
			 function searchEmployeeByEcode(){
				 var searchBoxVal=document.getElementById("searchBoxVal").value; 
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/loadReassignList", 
					 data: {
						 searchBoxVal:searchBoxVal,
							_csrf:$('#csrfToken').val()
				        },
						//async:false,
						//dataType: 'JSON',
						success:function(data){
		  		        	console.log(data);
		  		        	reassignPopUpList = [];
							if(data == null || data == ""){
							  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
							  document.getElementById("searchBoxVal").value = "";
							  
							} else {
								 document.getElementById("firstReassignList").innerHTML = "";
								 var htmlFragment="";
			                //var responseData = JSON.parse(data);
								$.map(data, function(item){ 
		                    	htmlFragment+= " <div class='agginee-row'> "+
									        "   <div class='inner-userpic'><img src='images/login-user.svg'></div> "+
									        "    <div class='num-off-act'>"+item.username+" "+
									        "      <span>"+item.ecode+"</span> "+
									         "   </div> "+
									          "  <div class='right-assign'> "+
									           "   <span class='radio-btn'> "+
									            "    <input  id='"+item.ecode+"' value='"+item.ecode+"' name='newOwnerRadio' type='radio'> "+
									             "   <label for='"+item.ecode+"' onclick=''><span></span></label> "+
									             " </span> "+
									             " <div class='slidearrow'><a href='#' onclick='$('.slidemenu-section').effect('slide');'> "+
									             ' <img src="images/right-arrow.svg" width="15" onclick="loadReassignListByEcode(\''+item.ecode+'\')"></a></div> '+
									             " </div></div>" ;
					 });
		                   // alert(htmlFragment);
		                    console.log(htmlFragment);
		                    $('#firstReassignList').append(htmlFragment);
		                    //$('#off-canvas-right').offcanvas('show');
							}
						}
						 });	
			 }
			function reassignleads(){
				
				
				
				var reassignLeadsList = [];
				var newOwner="";
				  var val = document.getElementsByName('reassignBox');
				  for (var i = 0, length = val.length; i < length; i++) {
				      if (val[i].checked) {
				    	  reassignLeadsList.push(val[i].value);
				      }
				  }
				  var val1 = document.getElementsByName('newOwnerRadio');
				  for (var i = 0, length = val1.length; i < length; i++) {
				      if (val1[i].checked) {
				    	  newOwner=val1[i].value;
				    	  break;
				      }
				  }
				  //alert(reassignLeadsList);
				  //return;
				  if(null == reassignLeadsList || ""==reassignLeadsList){
					  modalAlertToShowCustomMessage('Please Select AtLeast One Leads To Assign.', 'error');	
					  return false;
				  }
				  if(null == newOwner || ""==newOwner){
					  modalAlertToShowCustomMessage('Please Select AtLeast One Employee To Assign.', 'error');	
					  return false;
				  }
				  $('#wait').show();
				  var dataRequest={
				  "reassignLeadsList":reassignLeadsList,
				  "newOwner":newOwner
				  }
				  $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
				    parameter = 'newOwner='+newOwner+"&reassignLeadsList="+reassignLeadsList;
				  //  $('#wait').show();
					var response = makeAjaxCall('reassignleads',parameter);
					//alert(response);
					if(null != response && response != ""){
						$('#wait').hide();
		                if (response == "true") {
		        			//modalAlertToShowCustomMessage('Reassign successfully!', 'success');
		        			$('#assign-aside').modal('hide');
		        			
		        			//location.reload();
		            		swal(
									{
										title : "Reassign successfully.!",
										text : "",
										type : "success",
									}).then(function() {
										location.reload();
										
							});
		        			
		        			
		        			
		        		} else if (response == "false") {
		        			modalAlertToShowCustomMessage('Oops some error occurred.', 'error');	
					}
				} else{
					$('#wait').hide();
				}    
/*				 $.ajax({
				 type:'POST', 
				 url: "/AdminModule/reassignleads", 
				 data: {
					 newOwner:newOwner,
					 reassignLeadsList:reassignLeadsList,
				 _csrf:$('#csrfToken').val()
				        },
				 //async:false,
				 //dataType: 'JSON',
				 success:function(response){
					alert(response); 
				 }
				 });*/
			} 
		function reassignleadsByInnerPage(){
				var reassignLeadsList =document.getElementById('losNumber').innerHTML; 
				var newOwner="";
				  /*var val = document.getElementsByName('reassignBox');
				  for (var i = 0, length = val.length; i < length; i++) {
				      if (val[i].checked) {
				    	  reassignLeadsList.push(val[i].value);
				      }
				  }*/
				  var val1 = document.getElementsByName('newOwnerRadio');
				  for (var i = 0, length = val1.length; i < length; i++) {
				      if (val1[i].checked) {
				    	  newOwner=val1[i].value;
				    	  break;
				      }
				  }
				  //alert(reassignLeadsList);
				  //alert(newOwner);
				  if(null == reassignLeadsList || ""==reassignLeadsList){
					  modalAlertToShowCustomMessage('Please Select AtLeast One Leads To Assign.', 'error');	
					  return false;
				  }
				  if(null == newOwner || ""==newOwner){
					  modalAlertToShowCustomMessage('Please Select AtLeast One Employee To Assign.', 'error');	
					  return false;
				  }
				  var dataRequest={
				  "reassignLeadsList":reassignLeadsList,
				  "newOwner":newOwner
				  }
				  $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
				    parameter = 'newOwner='+newOwner+"&reassignLeadsList="+reassignLeadsList;
				  //  $('#wait').show();
					var response = makeAjaxCall('reassignleads',parameter);
					//alert(response);
					if(null != response && response != ""){
		                if (response == "true") {
		        			//modalAlertToShowCustomMessage('Reassign successfully!', 'success');
		        			//location.reload();
		            		swal(
									{
										title : "Reassign successfully.!",
										text : "",
										type : "success",
									}).then(function() {
										location.reload();
										
							});
		            		
		            		
		        		} else if (response == "false") {
		        			modalAlertToShowCustomMessage('Oops some error occurred.', 'error');	
					}
				}     
/*				 $.ajax({
				 type:'POST', 
				 url: "/AdminModule/reassignleads", 
				 data: {
					 newOwner:newOwner,
					 reassignLeadsList:reassignLeadsList,
				 _csrf:$('#csrfToken').val()
				        },
				 //async:false,
				 //dataType: 'JSON',
				 success:function(response){
					alert(response); 
				 }
				 });*/
			} 

		function clearLoadReassignList(){
			reassignPopUpList = [];
			//alert(reassignPopUpList);
		}	
		function getCityList(){
			 var ecode=document.getElementById("eCodeHomePage").value;
			 var pageName="";
			//alert("fff");
			//alert($('#cityListDetail li').length);
			$('#wait').show();
			 if ($('#cityListDetail li').length != 0){
				 $('#wait').hide();
				 	return;
			 }
			// alert("dfgdg");
			 $.ajax({
			    	url: "/AdminModule/getCityList",
			        type: 'POST',
			        //dataType: "JSON",
			        //async:false,
			        data: {
			        	pageName:pageName,
			        	ecode:ecode,
						  _csrf:$('#csrfToken').val()
			        },
			        success: function(data) {
			        	console.log(data);
			        	//$('#cityListDetail li').remove();
			            if ($.isEmptyObject(data)) {
			                console.log("no responseJSON found");
			            } else {
			            	var htmlFragment="";
								$.map(data, function(item){ 
		                    	htmlFragment+= " <li><span class='act-dct checkbox-btn'><input  type='checkbox' class='act-dct checkbox-btn' " +
		                    			" name='rc2' id='"+item.cityName+"' value='"+item.cityName+"' onchange='addSearchFilter(this.value)'><label for='"+item.cityName+"'><span>"+item.cityName+"</span></label></span> </li> ";
								 });
								//alert(htmlFragment);
								$('#cityListDetail').append(htmlFragment);
								
			            }
			            $('#wait').hide();
			        }
			        });
			
		}

		function getBranchListDetail(){
			//alert("fff");
			$('#wait').show();
			var ecode=document.getElementById("eCodeHomePage").value;
			if ($('#branchListDetial li').length != 0){
				$('#wait').hide();
			 	return;
			}
			 $.ajax({
			    	url: "/AdminModule/getBranchList",
			        type: 'POST',
			        //dataType: "JSON",
			        //async:false,
			        data: {
			        	ecode:ecode,
						  _csrf:$('#csrfToken').val()
			        },
			        success: function(data) {
			        	console.log(data);
			        		//$('#branchListDetial li').remove();
			            if ($.isEmptyObject(data)) {
			                console.log("no responseJSON found");
			            } else {
			            	var htmlFragment="";
								$.map(data, function(item){ 
		                    	htmlFragment+= " <li><span class='act-dct checkbox-btn'><input  type='checkbox' class='act-dct checkbox-btn' " +
		                    			" name='rc2' id='"+item+"' value='"+item+"' onchange='addSearchFilter(this.value)'><label for='"+item+"'><span>"+item+"</span></label></span> </li> ";
								 });
								//alert(htmlFragment);
								$('#branchListDetial').append(htmlFragment);
								
			            }
			            $('#wait').hide();
			        }
			        });
			 
		}

	  function resetSomeField(formId){
			$(':input','#'+formId)
			  .not(':button, :submit, :reset, :hidden')
		  	  .val('')
		  	  .removeAttr('checked')
		  	  .removeAttr('selected');
		}
	  function chechRemarkValue(){
		  var download = document.getElementById('remarkVal').innerHTML;
		  document.getElementById('editRemarkArea').innerHTML=download;
	  }
	  function submitNoteValue(val){
		  var editRemarkArea="";
		 if(val=="add"){ 
		   editRemarkArea=	document.getElementById("addRemarkArea").value;
		 }else{
			  editRemarkArea=	document.getElementById("editRemarkArea").value;
		 }
		 var losNum = document.getElementById("losNumber").value; 
		  if(null ==editRemarkArea || ""==editRemarkArea){
			  modalAlertToShowCustomMessage('Please Enter Remarks Value', 'error');
			  return;
		  }
		//return;
		  $('#wait').show();
			  var dataRequest={
					  "editRemarkArea":editRemarkArea,
					  "losNum":losNum,
					  }
					 $.ajax({
					 type:'POST', 
					 url: "/AdminModule/submitNoteValue", 
					 data: {
						 editRemarkArea:editRemarkArea,
						 losNum:losNum,
					 _csrf:$('#csrfToken').val()
					        },
					 //async:false,
					 //dataType: 'JSON',
					 success:function(data){
						  $('#wait').hide();
						     var responseData =  $.parseJSON(data);
					 			if (responseData == "success") {
					 				//modalAlertToShowCustomMessage(data.message, 'success');
					 				// location.reload();
				            		swal(
											{
												title : "Remark is updated successfully.",
												text : "",
												type : "success",
											}).then(function() {
												location.reload();
												
									});
					 				
					 				
					 			} else if (responseData == "") {
					 				modalAlertToShowCustomMessage(data.message, 'error');
					 			}
					 		}
					       
					 });

	  }








































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































	//========================== Tree Structure =====================================
	
	//function fetchCompleteHierarchyDetailsByECode(){
	//$.ajax({
	//url: "/AdminModule/fetchCompleteHierarchyDetailsByECode",
	//type: 'POST',
	////async:false,
	////dataType: 'JSON',
	//data:"e_code="+$('#dbName option:selected').val(),
	//success:function(data){
	//console.log(data);
	//$('#tableName').empty();
	//$.map(data,function(item){
	//$('#tableName').append('<option value="'+item+'">'+item+'</option>');
	//});
	//$('#dumpTypeDiv').removeClass('hidden');
	//}
	//});
	//}
	
	//google.charts.load('current', {packages:["orgchart"]});
	//google.charts.setOnLoadCallback(drawTree);
	
	/*function drawTree() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Name');
		data.addColumn('string', 'Manager');
		data.addColumn('string', 'ToolTip');
	
		// For each orgchart box, provide the name, manager, and tooltip to show.
		data.addRows([
			[{v:'Praveen', f:'Praveen<div style="color:red; font-style:italic">Manager</div>'}, '', 'AutoFinance'],
			[{v:'Gautam', f:'Gautam<div style="color:red; font-style:italic">Team Lead</div>'}, 'Praveen', 'Android'],
			['Vishu', 'Praveen', 'Server'],
			['Salil', 'Praveen', 'Business'],
			['RSO', 'Praveen', 'Tester/Business'],
			['CP', 'Praveen', 'Server'],
			['Manish', 'CP', 'Server'],
			['Shailesh', 'CP', 'Server'],
			['Deepak', 'Gautam', 'Android/iPhone'],
			['Roshan', 'Deepak', 'Android'],
			['Ankit', 'Deepak', 'Android'],
			['Yashwant', 'Gautam', 'Android'],
			['Nandan', 'RSO', 'Tester'],
			['Kapil', 'Salil', 'Business'],
			['Rahul', 'Praveen', 'DBA'],
			['Amit', 'Praveen', 'Designer'],
			['Rukhsar', 'Amit', 'Designer'],
			['Nishant', 'Praveen', 'Tester/Business']
			]);
	
		// Create the chart.
		var chart = new google.visualization.OrgChart(document.getElementById('tree_div'));
		// Draw the chart, setting the allowHtml option to true for the tooltips.
		chart.draw(data, {allowHtml:true});
	}
	//===================================================jQuery==================================================
	
	;(function($) {
		// Browser supports HTML5 multiple file?
		var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
		isIE = /msie/i.test( navigator.userAgent );
	
		$.fn.customFile = function() {
	
			return this.each(function() {
	
				var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
				$wrap = $('<div class="file-upload-wrapper">'),
				$input = $('<input type="text" class="file-upload-input" />'),
				// Button that will be used in non-IE browsers
				$button = $('<button type="button" class="file-upload-button">Browse</button>'),
				// Hack for IE
				$label = $('<label class="file-upload-button" for="'+ $file[0].id +'">Browse</label>');
	
				// Hide by shifting to the left so we
				// can still trigger events
				$file.css({
					position: 'absolute',
					left: '-9999px'
				});
	
				$wrap.insertAfter( $file )
				.append( $file, $input, ( isIE ? $label : $button ) );
	
				// Prevent focus
				$file.attr('tabIndex', -1);
				$button.attr('tabIndex', -1);
	
				$button.click(function () {
					$file.focus().click(); // Open dialog
				});
	
				$file.change(function() {
	
					var files = [], fileArr, filename;
	
					// If multiple is supported then extract
					// all filenames from the file array
					if ( multipleSupport ) {
						fileArr = $file[0].files;
						for ( var i = 0, len = fileArr.length; i < len; i++ ) {
							files.push( fileArr[i].name );
						}
						filename = files.join(', ');
	
						// If not supported then just take the value
						// and remove the path to just show the filename
					} else {
						filename = $file.val().split('\\').pop();
					}
	
					$input.val( filename ) // Set the value
					.attr('title', filename) // Show filename in title tootlip
					.focus(); // Regain focus
	
				});
	
				$input.on({
					blur: function() { $file.trigger('blur'); },
					keydown: function( e ) {
						if ( e.which === 13 ) { // Enter
							if ( !isIE ) { $file.trigger('click'); }
						} else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
							// On some browsers the value is read-only
							// with this trick we remove the old input and add
							// a clean clone with all the original events attached
							$file.replaceWith( $file = $file.clone( true ) );
							$file.trigger('change');
							$input.val('');
						} else if ( e.which === 9 ){ // TAB
							return;
						} else { // All other keys
							return false;
						}
					}
				});
	
			});
	
		};
	
		// Old browser fallback
		if ( !multipleSupport ) {
			$( document ).on('change', 'input.customfile', function() {
	
				var $this = $(this),
				// Create a unique ID so we
				// can attach the label to the input
				uniqId = 'customfile_'+ (new Date()).getTime(),
				$wrap = $this.parent(),
	
				// Filter empty input
				$inputs = $wrap.siblings().find('.file-upload-input')
				.filter(function(){ return !this.value }),
	
				$file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');
	
				// 1ms timeout so it runs after all other events
				// that modify the value have triggered
				setTimeout(function() {
					// Add a new input
					if ( $this.val() ) {
						// Check for empty fields to prevent
						// creating new inputs when changing files
						if ( !$inputs.length ) {
							$wrap.after( $file );
							$file.customFile();
						}
						// Remove and reorganize inputs
					} else {
						$inputs.parent().remove();
						// Move the input so it's always last on the list
						$wrap.appendTo( $wrap.parent() );
						$wrap.find('input').focus();
					}
				}, 1);
	
			});
		}
	
	}(jQuery));*/
	//$('input[type=file]').customFile();

	
	
			
			/*var parameter = 'ecode='+ecode;
			var response = makeAjaxCall('fetcheLearningStatus',parameter);
			if(response!=null && response!=""){
				alert("response"+JSON.stringfy(response));
			}*/
		 
	  
	  function getElearningCandidateReport()
	  {
		  $('#viewResult').html('');
		  $('#viewResult').hide();
		  var ecode = $.trim($('#eLearningCertificateEcode').val());
			var moduleId = $('#eLearningCertificateModule').val();
			var moduleValue = $("#eLearningCertificateModule option:selected").text();
		
			if(ecode !='')
			{
				$.ajax({
					url: "/AdminModule/fetchUserInformation",
					type: 'POST',
					//async:false,
					//dataType: 'JSON',
					data:{
						e_code:$('#eLearningCertificateEcode').val(),
						_csrf:$('#csrfToken').val()
						
					},
					success:function(response){
						if(response == null || response == ""){
							  modalAlertToShowCustomMessage('user does not exist', 'warning');
							  $('#myPager').unbind('page');
							  $('#myPager').hide();
						}

			
						
				
					else if( moduleId != '' && moduleValue!= '' && moduleValue != 'Select Module')
						  {
				  $.ajax({
					url: "/AdminModule/fetcheLearningStatus",
					type: 'POST',
					async:false,
					data:{
						  "ecode":ecode,
						 "moduleId":moduleId,
						 "startlimit":0,
						 "endlimit":10
					},
					success:function(response) {
						
						if(response == null || response == ""){
							  modalAlertToShowCustomMessage('Test is not attempted.', 'warning');
							  $('#myPager').unbind('page');
							  $('#myPager').hide();
							} else {
								var html="";
								$('#myPager').unbind('page');
								$('#myPager').show();
								$.each(response,function(index,item){
//									if($('#totalCounts').val() == undefined || $('#totalCounts').val() == '')
									$('#totalCounts').val(item.totalCounts);
									html+=' <div class="line"><div class="col-lg-2 col-sm-3"><div class="match-records-label">Module Name</div>';
									html+='<div class="match-records-result">'+item.modulename+'</div></div><div class="col-lg-2 col-sm-3">';
									if(item.visited==true && item.attemted==false)
									{
									html+='<div class="match-records-label">Status</div><div class="match-records-result">View</div></div>';
									}
									else
									{
										html+='<div class="match-records-label">Status</div><div class="match-records-result">Attempt</div></div>';
									}
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Date / Time</div><div class="match-records-result">'+item.createdOn+'</div></div>';
									if(item.score==null)
									{
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Score</div><div class="match-records-result">--</div></div>';
									}
									else
									{
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Score</div><div class="match-records-result">'+item.score+'/'+item.maxMarks+'</div></div>';
									}
									if(item.result=='Pass'){
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result green">'+item.result+'</div></div>';
									}
									else if(item.result=='Fail'){
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result red">'+item.result+'</div></div>';
									}
									else
									{
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result black">--</div></div>';
									}
									if(item.visited==true && item.attemted==false)
									{
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Certification</div><div class="match-records-result">--</div></div></div>';
									}
									else
									{
									html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Certification</div><div class="match-records-result"><a href="'+item.certificate_url+'" target="_blank"> '+item.certificate_url+' </a></div></div></div>';
									}
							});
								$('#viewResult').html(html);
								$('#viewResult').show();
								$('#myPager').bootpag({
									total:(parseInt(Math.ceil($('#totalCounts').val()/10))),
									page:1,
									maxVisible: 10,
									
								}).on("page", function(event, num){
									fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								});
							}
			          
						}
					
				});
				
			}
				
			else
			{
				modalAlertToShowCustomMessage('Invalid E_code or Module_id.', 'warning');
				$('#myPager').unbind('page');
				$('#myPager').hide();
			}
					
					}
					});			
		
	}				
			else
				{
				modalAlertToShowCustomMessage('Ecode cant not be blank', 'warning');
				}
			
	  }
	  
	function fetchElearningStatusPageWise(ecode,startLimit,endLimit,moduleId){
		$.ajax({
			url: "/AdminModule/fetcheLearningStatus",
			type: 'POST',
			async:false,
			data:{
				  "ecode":ecode,
				 "moduleId":moduleId,
				 "startlimit":startLimit,
				 "endlimit":endLimit
			},
			success:function(response) {
				
				if(response == null || response == ""){
					  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
					  $('#myPager').unbind('page');
					  $('#myPager').hide();
					} else {
						var html="";
						
						$.each(response,function(index,item){
							html+=' <div class="line"><div class="col-lg-2 col-sm-3"><div class="match-records-label">Module Name</div>';
							html+='<div class="match-records-result">'+item.modulename+'</div></div><div class="col-lg-2 col-sm-3">';
							if(item.visited==true && item.attemted==false)
							{
							html+='<div class="match-records-label">Status</div><div class="match-records-result">View</div></div>';
							}
							else
							{
							html+='<div class="match-records-label">Status</div><div class="match-records-result">Attempt</div></div>';
							}
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Date / Time</div><div class="match-records-result">'+item.createdOn+'</div></div>';
							if(item.score==null)
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Score</div><div class="match-records-result">--</div></div>';
							}
							else
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Score</div><div class="match-records-result">'+item.score+'/'+item.maxMarks+'</div></div>';
							}
							if(item.result=='Pass'){
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result green">'+item.result+'</div></div>';
							}
							else if(item.result=='Fail'){
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result red">'+item.result+'</div></div>';
							}
							else{
								html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result black">--</div></div>';
							}
							if(item.visited==true && item.attemted==false)
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Certification</div><div class="match-records-result">--</div></div></div>';
							}
							else
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Certification</div><div class="match-records-result"><a href="'+item.certificate_url+'" target="_blank">'+item.certificate_url+'</a></div></div></div>';
							}
						});
						$('#viewResult').html(html);
						$('#viewResult').show();
					}
	          
				}
			
		});
	}
	  
	  function fatchPremiumPendingLeadsDetailsList(startLimit,endLimit,flag) {
			//  alert(endLimit+"-ecode--"+startLimit);
			  var cbarray = document.getElementsByName("rc2"); 
			  var checkedValue="";
			  var totalItems="";
			  var totalcount="";
			  $('#wait').show();
			    for(var i = 0; i < cbarray.length; i++){

			        if( cbarray[i].checked == false ){
			            //cbarray[i].checked = true;
			            //alert( "it is false" );
			        }else{ 
			                  checkedValue += cbarray[i].value;
			                  checkedValue +="~";
			           // cbarray[i].checked = false;
			          //  alert( "it is true" );
			        }
			}   
			   // alert(checkedValue);
			   // return;
			  var htmlFragment = "";
			  var dataRequest={
				  "startLimit":startLimit,
				  "endLimit":endLimit
			  }
			  var searchValue=document.getElementById('searchBox').value;
			  if(null!=searchValue){
			  }
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/premiumPendingLeads1",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	 startLimit:startLimit,
					  endLimit:endLimit,
					  searchValue:searchValue,
//					  checkedValue:checkedValue,
					  obj:JSON.stringify(obj),
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
				/*	$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');*/
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                $('#myPager').unbind('page');
						  $('#myPager').hide();
						  document.getElementById('total_reg').innerHTML="";
						  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                    	 totalItems= item.totalCount;
	                    	 //alert(item.roleType);
	                    	/* */
	                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a " +
	                        		" href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' " +
	                        		" value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
	                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
	                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
	                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
	                        		" <span class='assign-fisrt'>Address </span>   "+
	                        		" <span class='assign-second'>" + item.address + " </span>" +
									" </div></div>" +
									" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div>" +
									" <div class='data_list'><span class='sts-heading'>Status -  </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div>" +
									" <div class='data_list'><span class='sts-heading'> TPPSM - </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> </div>" +
									"<div class='col-lg-3 text-right'> "+
									" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
									" </span>" ;
									
									if(item.currentDispositionId != "15" && item.currentDispositionId != "10"){
										// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
										 //htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
									}
										 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";
									
									 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
									" <span class='vehicle-name' >" + item.vehicle + "</span> " +
									"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
									" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
									" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
									"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
									" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
									" </div><div class='checkbar'><div class='selft_left'> " +
/*									" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -   </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
*/									" </div><div class='self_right'>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
									/*if(item.currentDispositionId != "15"){	*/	
										htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' " +
											" data-toggle='modal' data-target='#myModal2' onclick='calculateApprovalPremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
									" Calculate</div> ";
								 /* }*/
								
									 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
									"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#myModal2' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a>" +
											" </div> ";
								
								 htmlFragment +="<div class='right-arrow'><a href='/AdminModule/premiumPendingLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
								 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
										$('#total_reg').val(item.totalCount);
								// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			                      if(item.totalCount=='1')
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
			                        else
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			  
								 
								 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
								 
								// alert("total-"+item.totalCount);
				                    
	                    });
	                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
	*/			if (undefined != responseData) {
		                    $('#myDiv li').remove();
		                    $('#myDiv').empty();
		                    //alert(totalcount);
		                    if (flag) {
		                    	 //totalcount = responseData.count;
		                    	if (totalcount == 0 || totalcount == ''){
		                    		totalcount = 0;
		        	                $('#myPager').unbind('page');
		      					  $('#myPager').hide();
		      					document.getElementById('total_reg').innerHTML="";
		      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		      					//document.getElementById('selectAllSpanId').style.display='none';
		                    	}else{
		                    		//document.getElementById('selectAllSpanId').style.display='block';
		                    	}
		                    	/*
		                        totalcount = responseData.count;
		                    	//alert(totalcount);
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                       // alert("q");
		                        
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
		                        if ($('#fromPage').html() == $('#pageRange').html()) 
		                        	{
		                        	//alert("inner");
		                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                        	}
		                   // alert("end");
		                    */}
		                    
		                    //alert($('#total_reg').val());
		                    
		                    $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchPremiumPendingLeadsDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});
								
		                   
		                    $('#myDiv').append(htmlFragment);
		                    $('#wait').hide();
		                   /* $('.reassignCheck').off('click');
		                    $(".reassignCheck").on('click',function (item) {
		         	    	   if($(this).attr('id') == 'checkAll')
		         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		         	    	  $('.assign_fixbox').slideToggle('slow');
		         	    	});*/
		                	$(".reassignCheck").off('click');
		                	$(".reassignCheck").on('click',function (item) {
		                		   if($(this).attr('id') == 'checkAll')
		                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		                		  $('.assign_fixbox').slideDown('slow');
		                		  var checkbox= $(".reassignCheck");
		                		  var statusHide=false;
		                		  $.each(checkbox,function(index,value){
		                		    var ckVal=value.checked;
		                		    if(ckVal)
		                		      statusHide=true;
		                		  });
		                		  if(!statusHide){
		                		    $('.assign_fixbox').slideUp('slow');
		                		  }
		                		});
		                }
		            }
		        }
		        });
		      //alert("2");
		}

	  function fatchPremiumPendingLeadsDetailsListByPagination(startLimit,endLimit,flag) {
			//  alert(endLimit+"-ecode--"+startLimit);
			  var cbarray = document.getElementsByName("rc2"); 
			  var checkedValue="";
			  var totalItems="";
			  var totalcount="";
			  $('#wait').show();
			    for(var i = 0; i < cbarray.length; i++){

			        if( cbarray[i].checked == false ){
			            //cbarray[i].checked = true;
			            //alert( "it is false" );
			        }else{ 
			                  checkedValue += cbarray[i].value;
			                  checkedValue +="~";
			           // cbarray[i].checked = false;
			          //  alert( "it is true" );
			        }
			}   
			   // alert(checkedValue);
			   // return;
			  var htmlFragment = "";
			  var dataRequest={
				  "startLimit":startLimit,
				  "endLimit":endLimit
			  }
			  var searchValue=document.getElementById('searchBox').value;
			  if(null!=searchValue){
			  }
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/premiumPendingLeads1",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	 startLimit:startLimit,
					  endLimit:endLimit,
					  searchValue:searchValue,
					  /*checkedValue:checkedValue,*/
					  obj:JSON.stringify(obj),
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
				/*	$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');*/
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                $('#myPager').unbind('page');
						  $('#myPager').hide();
						  document.getElementById('total_reg').innerHTML="";
						  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                    	 totalItems= item.totalCount;
	                    	 //alert(item.roleType);
	                    	/* */
/*	                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a " +
	                        		" href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' " +
	                        		" value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
	                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
	                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
	                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
	                        		" <span class='assign-fisrt'>Address </span>   "+
	                        		" <span class='assign-second'>" + item.address + " </span>" +
									" </div></div><div class='col-lg-6 text-right'> "+
									" <span class='netpremium'>Net premium </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
									" </span><div class='right-arrow'><a href='/AdminModule/premiumPendingLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>" ;
									
									if(item.currentDispositionId != "15"){
										// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
										// htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
									}
									 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
									" <span class='vehicle-name' >" + item.vehicle + "</span> " +
									"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
									" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
									" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
									"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
									" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
									" </div><div class='checkbar'><div class='selft_left'> " +
									" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -   </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
									" </div><div class='self_right'>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
									if(item.currentDispositionId != "15"){		
										htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' " +
											" data-toggle='modal' data-target='#myModal2' onclick='calculateApprovalPremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
									" Calculate</div> ";
								  }
								
									 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
									"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#myModal2' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
								
								 htmlFragment +="</div></div></li>";
*/								 
	                         htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a " +
                     		" href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' " +
                     		" value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                     		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                     		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                     		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                     		" <span class='assign-fisrt'>Address </span>   "+
                     		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div>" +
								" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div>" +
								" <div class='data_list'><span class='sts-heading'>Status -  </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div>" +
								" <div class='data_list'><span class='sts-heading'>TPPSM -  </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> </div>" +
								"<div class='col-lg-3 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span>" ;
								
								if(item.currentDispositionId != "15"){
									// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
									 //htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
								}
								 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal'  data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

								 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'> " +
/*									" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -   </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
*/									" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
								/*if(item.currentDispositionId != "15"){	*/	
									htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ");getUploadPdf(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' " +
										" data-toggle='modal' data-target='#myModal2' onclick='calculateApprovalPremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div> ";
							 /* }*/
							
								 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
								"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#myModal2' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a>" +
										" </div> ";
							
							 htmlFragment +="<div class='right-arrow'><a href='/AdminModule/premiumPendingLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";

	                    	 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
										$('#total_reg').val(item.totalCount);
								// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			                      if(item.totalCount=='1')
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
			                        else
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			  
								 
								 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
								 
								// alert("total-"+item.totalCount);
				                    
	                    });
	                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
	*/			if (undefined != responseData) {
		                    $('#myDiv li').remove();
		                    $('#myDiv').empty();
		                    //alert(totalcount);
		                    if (flag) {
		                    	 //totalcount = responseData.count;
		                    	if (totalcount == 0 || totalcount == ''){
		                    		totalcount = 0;
		        	                $('#myPager').unbind('page');
		      					  $('#myPager').hide();
		      					document.getElementById('total_reg').innerHTML="";
		      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		      					//document.getElementById('selectAllSpanId').style.display='none';
		                    	}else{
		                    		//document.getElementById('selectAllSpanId').style.display='block';
		                    	}
		                    	/*
		                        totalcount = responseData.count;
		                    	//alert(totalcount);
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                       // alert("q");
		                        
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
		                        if ($('#fromPage').html() == $('#pageRange').html()) 
		                        	{
		                        	//alert("inner");
		                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                        	}
		                   // alert("end");
		                    */}
		                    
		                    //alert($('#total_reg').val());
		                    
		                   /* $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchPremiumPendingLeadsDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});*/
								
		                   
		                    $('#myDiv').append(htmlFragment);
		                    $('#wait').hide();
		                   /* $('.reassignCheck').off('click');
		                    $(".reassignCheck").on('click',function (item) {
		         	    	   if($(this).attr('id') == 'checkAll')
		         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		         	    	  $('.assign_fixbox').slideToggle('slow');
		         	    	});*/
		                	$(".reassignCheck").off('click');
		                	$(".reassignCheck").on('click',function (item) {
		                		   if($(this).attr('id') == 'checkAll')
		                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		                		  $('.assign_fixbox').slideDown('slow');
		                		  var checkbox= $(".reassignCheck");
		                		  var statusHide=false;
		                		  $.each(checkbox,function(index,value){
		                		    var ckVal=value.checked;
		                		    if(ckVal)
		                		      statusHide=true;
		                		  });
		                		  if(!statusHide){
		                		    $('.assign_fixbox').slideUp('slow');
		                		  }
		                		});
		                }
		            }
		        }
		        });
		      //alert("2");
		}

	  
	  function fatchPremiumApprovedLeadsDetailsList(startLimit,endLimit,flag) {
			//  alert(endLimit+"-ecode--"+startLimit);
			  var cbarray = document.getElementsByName("rc2"); 
			  var checkedValue="";
			  var totalItems="";
			  var totalcount="";
			  $('#wait').show();
			    for(var i = 0; i < cbarray.length; i++){

			        if( cbarray[i].checked == false ){
			            //cbarray[i].checked = true;
			            //alert( "it is false" );
			        }else{ 
			                  checkedValue += cbarray[i].value;
			                  checkedValue +="~";
			           // cbarray[i].checked = false;
			          //  alert( "it is true" );
			        }
			}   
			   // alert(checkedValue);
			   // return;
			  var htmlFragment = "";
			  var dataRequest={
				  "startLimit":startLimit,
				  "endLimit":endLimit
			  }
			  var searchValue=document.getElementById('searchBox').value;
			  if(null!=searchValue){
			  }
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/premiumApprovedLeads1",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	 startLimit:startLimit,
					  endLimit:endLimit,
					  searchValue:searchValue,
					  /*checkedValue:checkedValue,*/
					  obj:JSON.stringify(obj),
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
				/*	$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');*/
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                $('#myPager').unbind('page');
						  $('#myPager').hide();
						  document.getElementById('total_reg').innerHTML="";
						  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                    	 totalItems= item.totalCount;
	                    	 //alert(item.roleType);
	                    	/* */
	                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
	                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
	                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
	                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
	                        		" <span class='assign-fisrt'>Address </span>   "+
	                        		" <span class='assign-second'>" + item.address + " </span>" +
									" </div></div><div class='col-lg-6 text-right'> "+
									" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
									" </span><div class='right-arrow'><a href='/AdminModule/premiumApprovedLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>" ;
									
									/*if(item.currentDispositionId != "15"){
										// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
										 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
									}*/
							 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal'    data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

									 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
									" <span class='vehicle-name' >" + item.vehicle + "</span> " +
									"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
									" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
									" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
									"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
									" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
									" </div><div class='checkbar'><div class='selft_left'> " +
									" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
									" </div><div class='self_right'>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
/*									if(item.currentDispositionId != "15"){		
										htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
									" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
								  }*/
									/* if(item.approvalFlag == "1"){	
									 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
									"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
									 }*/
								 htmlFragment +="</div></div></li>";
								 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
										$('#total_reg').val(item.totalCount);
								// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			                      if(item.totalCount=='1')
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
			                        else
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			  
								 
								 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
								 
								// alert("total-"+item.totalCount);
				                    
	                    });
	                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
	*/			if (undefined != responseData) {
		                    $('#myDiv li').remove();
		                    $('#myDiv').empty();
		                    //alert(totalcount);
		                    if (flag) {
		                    	 //totalcount = responseData.count;
		                    	if (totalcount == 0 || totalcount == ''){
		                    		totalcount = 0;
		        	                $('#myPager').unbind('page');
		      					  $('#myPager').hide();
		      					document.getElementById('total_reg').innerHTML="";
		      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		      					//document.getElementById('selectAllSpanId').style.display='none';
		                    	}else{
		                    		//document.getElementById('selectAllSpanId').style.display='block';
		                    	}
		                    	/*
		                        totalcount = responseData.count;
		                    	//alert(totalcount);
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                       // alert("q");
		                        
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
		                        if ($('#fromPage').html() == $('#pageRange').html()) 
		                        	{
		                        	//alert("inner");
		                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                        	}
		                   // alert("end");
		                    */}
		                    
		                    //alert($('#total_reg').val());
		                    
		                    $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchPremiumApprovedLeadsDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});
								
		                   
		                    $('#myDiv').append(htmlFragment);
		                    $('#wait').hide();
		                    /*$('.reassignCheck').off('click');
		                    $(".reassignCheck").on('click',function (item) {
		         	    	   if($(this).attr('id') == 'checkAll')
		         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		         	    	  $('.assign_fixbox').slideToggle('slow');
		         	    	});*/
		                	$(".reassignCheck").off('click');
		                	$(".reassignCheck").on('click',function (item) {
		                		   if($(this).attr('id') == 'checkAll')
		                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		                		  $('.assign_fixbox').slideDown('slow');
		                		  var checkbox= $(".reassignCheck");
		                		  var statusHide=false;
		                		  $.each(checkbox,function(index,value){
		                		    var ckVal=value.checked;
		                		    if(ckVal)
		                		      statusHide=true;
		                		  });
		                		  if(!statusHide){
		                		    $('.assign_fixbox').slideUp('slow');
		                		  }
		                		});
		                }
		            }
		        }
		        });
		      //alert("2");
		}
	  
	  function fatchPremiumApprovedLeadsDetailsListByPagination(startLimit,endLimit,flag) {
			//  alert(endLimit+"-ecode--"+startLimit);
			  var cbarray = document.getElementsByName("rc2"); 
			  var checkedValue="";
			  var totalItems="";
			  var totalcount="";
			  $('#wait').show();
			    for(var i = 0; i < cbarray.length; i++){

			        if( cbarray[i].checked == false ){
			            //cbarray[i].checked = true;
			            //alert( "it is false" );
			        }else{ 
			                  checkedValue += cbarray[i].value;
			                  checkedValue +="~";
			          //  cbarray[i].checked = false;
			          //  alert( "it is true" );
			        }
			}   
			   // alert(checkedValue);
			   // return;
			  var htmlFragment = "";
			  var dataRequest={
				  "startLimit":startLimit,
				  "endLimit":endLimit
			  }
			  var searchValue=document.getElementById('searchBox').value;
			  if(null!=searchValue){
			  }
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/premiumApprovedLeads1",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	 startLimit:startLimit,
					  endLimit:endLimit,
					  searchValue:searchValue,
					 /* checkedValue:checkedValue,*/
					  obj:JSON.stringify(obj),
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
				/*	$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');*/
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                $('#myPager').unbind('page');
						  $('#myPager').hide();
						  document.getElementById('total_reg').innerHTML="";
						  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                    	 totalItems= item.totalCount;
	                    	 //alert(item.roleType);
	                    	/* */
	                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
	                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
	                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
	                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
	                        		" <span class='assign-fisrt'>Address </span>   "+
	                        		" <span class='assign-second'>" + item.address + " </span>" +
									" </div></div><div class='col-lg-6 text-right'> "+
									" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
									" </span><div class='right-arrow'><a href='/AdminModule/premiumApprovedLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>" ;
									
									/*if(item.currentDispositionId != "15"){
										// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
										 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
									}*/
							 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal'   data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

									 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
									" <span class='vehicle-name' >" + item.vehicle + "</span> " +
									"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
									" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
									" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
									"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
									" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
									" </div><div class='checkbar'><div class='selft_left'> " +
									" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
									" </div><div class='self_right'>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
/*									if(item.currentDispositionId != "15"){		
										htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
									" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
								  }*/
									/* if(item.approvalFlag == "1"){	
									 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
									"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
									 }*/
								 htmlFragment +="</div></div></li>";
								 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
										$('#total_reg').val(item.totalCount);
								// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			                      if(item.totalCount=='1')
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
			                        else
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			  
								 
								 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
								 
								// alert("total-"+item.totalCount);
				                    
	                    });
	                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
	*/			if (undefined != responseData) {
		                    $('#myDiv li').remove();
		                    $('#myDiv').empty();
		                    //alert(totalcount);
		                    if (flag) {
		                    	 //totalcount = responseData.count;
		                    	if (totalcount == 0 || totalcount == ''){
		                    		totalcount = 0;
		        	                $('#myPager').unbind('page');
		      					  $('#myPager').hide();
		      					document.getElementById('total_reg').innerHTML="";
		      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		      					//document.getElementById('selectAllSpanId').style.display='none';
		                    	}else{
		                    		//document.getElementById('selectAllSpanId').style.display='block';
		                    	}
		                    	/*
		                        totalcount = responseData.count;
		                    	//alert(totalcount);
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                       // alert("q");
		                        
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
		                        if ($('#fromPage').html() == $('#pageRange').html()) 
		                        	{
		                        	//alert("inner");
		                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                        	}
		                   // alert("end");
		                    */}
		                    
		                    //alert($('#total_reg').val());
		                    
		                    /*$('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchPremiumApprovedLeadsDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});*/
								
		                   
		                    $('#myDiv').append(htmlFragment);
		                    $('#wait').hide();
		                    /*$('.reassignCheck').off('click');
		                    $(".reassignCheck").on('click',function (item) {
		         	    	   if($(this).attr('id') == 'checkAll')
		         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		         	    	  $('.assign_fixbox').slideToggle('slow');
		         	    	});*/
		                	$(".reassignCheck").off('click');
		                	$(".reassignCheck").on('click',function (item) {
		                		   if($(this).attr('id') == 'checkAll')
		                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		                		  $('.assign_fixbox').slideDown('slow');
		                		  var checkbox= $(".reassignCheck");
		                		  var statusHide=false;
		                		  $.each(checkbox,function(index,value){
		                		    var ckVal=value.checked;
		                		    if(ckVal)
		                		      statusHide=true;
		                		  });
		                		  if(!statusHide){
		                		    $('.assign_fixbox').slideUp('slow');
		                		  }
		                		});
		                }
		            }
		        }
		        });
		      //alert("2");
		}
	  
	  function fatchPremiumRejectLeadsDetailsList(startLimit,endLimit,flag) {
			//  alert(endLimit+"-ecode--"+startLimit);
			  var cbarray = document.getElementsByName("rc2"); 
			  var checkedValue="";
			  var totalItems="";
			  var totalcount="";
			  $('#wait').show();
			    for(var i = 0; i < cbarray.length; i++){

			        if( cbarray[i].checked == false ){
			            //cbarray[i].checked = true;
			            //alert( "it is false" );
			        }else{ 
			                  checkedValue += cbarray[i].value;
			                  checkedValue +="~";
			         //   cbarray[i].checked = false;
			          //  alert( "it is true" );
			        }
			}   
			   // alert(checkedValue);
			   // return;
			  var htmlFragment = "";
			  var dataRequest={
				  "startLimit":startLimit,
				  "endLimit":endLimit
			  }
			  var searchValue=document.getElementById('searchBox').value;
			  if(null!=searchValue){
			  }
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/premiumRejectLeads1",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	 startLimit:startLimit,
					  endLimit:endLimit,
					  searchValue:searchValue,
					  /*checkedValue:checkedValue,*/
					  obj:JSON.stringify(obj),
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
				/*	$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');*/
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                $('#myPager').unbind('page');
						  $('#myPager').hide();
						  document.getElementById('total_reg').innerHTML="";
						  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                    	 totalItems= item.totalCount;
	                    	 //alert(item.roleType);
	                    	/* */
	                        htmlFragment += " <li><div class='col-lg-5'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
	                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
	                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
	                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
	                        		" <span class='assign-fisrt'>Address </span>   "+
	                        		" <span class='assign-second'>" + item.address + " </span>" +
									" </div></div>" +
									" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div>" +
									" <div class='data_list'><span class='sts-heading'>Status -  </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div>" +
									" <div class='data_list'><span class='sts-heading'>TPPSM -  </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> </div>" +
									
									
									"<div class='col-lg-3 text-right'> "+
									" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
									" </span>" ;
									
									/*if(item.currentDispositionId != "15"){
										// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
										 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
									}*/
							 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal'   data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

									 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
									" <span class='vehicle-name' >" + item.vehicle + "</span> " +
									"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
									" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
									" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
									"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
									" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
									" </div><div class='checkbar'><div class='selft_left'> " +
									/*" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -   </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+*/
									" </div><div class='self_right'>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
								/*	if(item.currentDispositionId != "15"){		
										htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
									" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
								  }*/
								
									/* htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
									"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
								*/
								 htmlFragment +="<div class='right-arrow'><a href='/AdminModule/premiumRejectLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";
								 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
										$('#total_reg').val(item.totalCount);
								// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			                      if(item.totalCount=='1')
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
			                        else
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			  
								 
								 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
								 
								// alert("total-"+item.totalCount);
				                    
	                    });
	                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
	*/			if (undefined != responseData) {
		                    $('#myDiv li').remove();
		                    $('#myDiv').empty();
		                    //alert(totalcount);
		                    if (flag) {
		                    	 //totalcount = responseData.count;
		                    	if (totalcount == 0 || totalcount == ''){
		                    		totalcount = 0;
		        	                $('#myPager').unbind('page');
		      					  $('#myPager').hide();
		      					document.getElementById('total_reg').innerHTML="";
		      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		      					//document.getElementById('selectAllSpanId').style.display='none';
		                    	}else{
		                    		//document.getElementById('selectAllSpanId').style.display='block';
		                    	}
		                    	/*
		                        totalcount = responseData.count;
		                    	//alert(totalcount);
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                       // alert("q");
		                        
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
		                        if ($('#fromPage').html() == $('#pageRange').html()) 
		                        	{
		                        	//alert("inner");
		                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                        	}
		                   // alert("end");
		                    */}
		                    
		                    //alert($('#total_reg').val());
		                    
		                    $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchPremiumRejectLeadsDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});
								
		                   
		                    $('#myDiv').append(htmlFragment);
		                    $('#wait').hide();
		                   /* $('.reassignCheck').off('click');
		                    $(".reassignCheck").on('click',function (item) {
		         	    	   if($(this).attr('id') == 'checkAll')
		         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		         	    	  $('.assign_fixbox').slideToggle('slow');
		         	    	});*/
		                	$(".reassignCheck").off('click');
		                	$(".reassignCheck").on('click',function (item) {
		                		   if($(this).attr('id') == 'checkAll')
		                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		                		  $('.assign_fixbox').slideDown('slow');
		                		  var checkbox= $(".reassignCheck");
		                		  var statusHide=false;
		                		  $.each(checkbox,function(index,value){
		                		    var ckVal=value.checked;
		                		    if(ckVal)
		                		      statusHide=true;
		                		  });
		                		  if(!statusHide){
		                		    $('.assign_fixbox').slideUp('slow');
		                		  }
		                		});
		                }
		            }
		        }
		        });
		      //alert("2");
		}
	  function fatchPremiumRejectLeadsDetailsListByPagination(startLimit,endLimit,flag) {
			//  alert(endLimit+"-ecode--"+startLimit);
			  var cbarray = document.getElementsByName("rc2"); 
			  var checkedValue="";
			  var totalItems="";
			  var totalcount="";
			  $('#wait').show();
			    for(var i = 0; i < cbarray.length; i++){

			        if( cbarray[i].checked == false ){
			            //cbarray[i].checked = true;
			            //alert( "it is false" );
			        }else{ 
			                  checkedValue += cbarray[i].value;
			                  checkedValue +="~";
			         //   cbarray[i].checked = false;
			          //  alert( "it is true" );
			        }
			}   
			   // alert(checkedValue);
			   // return;
			  var htmlFragment = "";
			  var dataRequest={
				  "startLimit":startLimit,
				  "endLimit":endLimit
			  }
			  var searchValue=document.getElementById('searchBox').value;
			  if(null!=searchValue){
			  }
		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/premiumRejectLeads1",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	 startLimit:startLimit,
					  endLimit:endLimit,
					  searchValue:searchValue,
					 /* checkedValue:checkedValue,*/
					  obj:JSON.stringify(obj),
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
				/*	$('#dailyReportsDiv #mylist').html('');
					$('#dailyReportsDiv #myPager').html('');
					$('#dailyReportsDiv #total_reg').html('');*/
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		                $('#myPager').unbind('page');
						  $('#myPager').hide();
						  document.getElementById('total_reg').innerHTML="";
						  $('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		            } else {
		                var responseData = JSON.parse(data);
	                    $.map(responseData, function(item){ 
	                    	 totalcount = item.count;
	                    	 totalItems= item.totalCount;
	                    	 //alert(item.roleType);
	                    	/* */
/*	                        htmlFragment += " <li><div class='col-lg-6'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
	                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
	                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
	                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
	                        		" <span class='assign-fisrt'>Address </span>   "+
	                        		" <span class='assign-second'>" + item.address + " </span>" +
									" </div></div><div class='col-lg-6 text-right'> "+
									" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
									" </span><div class='right-arrow'><a href='/AdminModule/premiumRejectLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div>" ;
									
									if(item.currentDispositionId != "15"){
										// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
										 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
									}
									 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
									" <span class='vehicle-name' >" + item.vehicle + "</span> " +
									"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
									" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
									" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
									"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
									" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
									" </div><div class='checkbar'><div class='selft_left'> " +
									" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to -   </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+
									" </div><div class='self_right'>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
									if(item.currentDispositionId != "15"){		
										htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
									" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
									" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
								  }
								
									 htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
									"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
								
								 htmlFragment +="</div></div></li>";
*/	
		                        htmlFragment += " <li><div class='col-lg-3'><div class='assignee_name' data-backdrop='static' data-keyboard='false'>" + item.customerName + "<a href='#' data-toggle='modal' data-target='#edit_user' onclick='editPolicyDetail(" + item.los + ")'> <img src='images/pencil.svg' width='25' value='" + item.los + "'></a></div> <div class='data_list'><span class='assign-fisrt' >" +
                        		" LOS Number </span><div class='assign-second' >" + item.los + "</div> " +
                        		" </div> <input type='hidden' id='losNumber' name='losNumber' value=" + item.los + "><div class='data_list'><span class='assign-fisrt'>Mobile Number</span>" +
                        		" <div class='assign-second' >" + item.mobNum + "</div></div> <input type='hidden' id='leadTaskId' name='leadTaskId' value=" + item.taskMappingId + "><div class='data_list'>" +
                        		" <span class='assign-fisrt'>Address </span>   "+
                        		" <span class='assign-second'>" + item.address + " </span>" +
								" </div></div>" +
								" <div class='col-lg-4  mrg-T30'><div class='data_list'><span class='sts-heading'>Assign to -  </span><span class='sts-result'>" + item.assignee + "</span></div>" +
								" <div class='data_list'><span class='sts-heading'>Status -  </span><span class='sts-result yellow'>" + item.currentDisPostion + "</span></div>" +
								" <div class='data_list'><span class='sts-heading'>TPPSM -  </span><span class='sts-result green'>" + item.tppsmEcode + "</span> </div> </div>" +
								
								
								"<div class='col-lg-5 text-right'> "+
								" <span class='netpremium'>Net premium - </span><span class='price' > <img src='images/rupee.svg' width='15'>" + inrFormat(item.premium) + "" +
								" </span>" ;
								
								/*if(item.currentDispositionId != "15"){
									// htmlFragment +=	" <div class='col-lg-12'><span class='payzappBtn'><a href='#' onclick='payzappLinkSend(" + item.los + ")'>PayZapp Link</a></span></div>" ;
									 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal' data-target='#share_payzapp' onclick='sendPayzappShare(" + item.los + ")'  data-backdrop='static' data-keyboard='false'><span class='payzappBtn'>PayZapp Link</span></div>";
								}*/
								 htmlFragment +=	"<div class='col-lg-12' data-toggle='modal'    data-backdrop='static' data-keyboard='false'><span class='payzapp_text'>" + item.payzappCount + " PayZapp link send</span></div>";

								 htmlFragment +=" </div><div class='col-lg-12'><div class='vehicle-data'><span class='vehicle-heading'>Vehicle</span> " +
								" <span class='vehicle-name' >" + item.vehicle + "</span> " +
								"  </div><div class='vehicle-data'><span class='vehicle-heading'>Policy type</span>" +
								" <span class='vehicle-name'>" + item.policyType + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>Previous Insurance</span>" +
								" <span class='vehicle-name' >" + item.prevInsurance + "</span></div><div class='vehicle-data'><span class='vehicle-heading'>" +
								"  Previous Policy No.</span>" + item.policyNo + "<span class='vehicle-name' '></span></div><div class='vehicle-data'>" +
								" <span class='vehicle-heading'>Expiry Date</span><span class='vehicle-name red' >" + item.expiryDate + "</span></div>" +
								" </div><div class='checkbar'><div class='selft_left'> " +
								/*" <div class='assigne-name border-none'>  <span class='sts-heading'>Assign to - </span><span class='sts-result'>" + item.assignee + "</span></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='assigne-name'>  <span class='sts-heading'>Status - </span><span class='sts-result'>" + item.currentDisPostion + "</span></div> "+*/
								" </div><div class='self_right'>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#myModal' onclick='leadHistory(" + item.los + ")' data-backdrop='static' data-keyboard='false'>History</div>" ;
							/*	if(item.currentDispositionId != "15"){		
									htmlFragment +="<div class='selft-btn' data-toggle='modal' data-target='#policy_upload' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Policy Upload</div>" +
								" <div class='selft-btn' data-toggle='modal' data-target='#share_quotation' onclick='quotationShare(" + item.los + ")' data-backdrop='static' data-keyboard='false'>Quotation Share</div><div class='selft-btn' data-toggle='modal' data-target='#myModal2' onclick='calculatePremium(" + item.los + ")' data-backdrop='static' data-keyboard='false'>" +
								" Calculate</div><input type='button' data-toggle='modal' data-target='#warning-lead' value='Update Status' onclick='editUserLosNumberValue(" + item.los + ")' data-backdrop='static' data-keyboard='false'> ";
							  }*/
							
								/* htmlFragment +="  <div class='rejectbtn' ><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' onclick='updateRejectStatus(" + item.los + ",\"reject\")' ><i class='fa fa-times' aria-hidden='true'></i> Reject</a></div> "+
								"	<div class='Approval' data-backdrop='static' data-keyboard='false'><a href='javascript:void(0)' aria-hidden='true' data-toggle='modal' data-target='#approvalTab' onclick='calculateApprovalPremium(" + item.los + ")'><i class='fa fa-check' aria-hidden='true'></i> Approve</a></div> ";
							*/
							 htmlFragment +="<div class='right-arrow'><a href='/AdminModule/premiumRejectLeadslosDetails?losNum=" + item.los + "'><img src='images/right-arrow.svg' width='12'></a></div></div></div></li>";

	                    	 if($('#total_reg').val() == undefined || $('#total_reg').val() == '')
										$('#total_reg').val(item.totalCount);
								// document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			                      if(item.totalCount=='1')
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entry In Total";
			                        else
			                        	document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
			  
								 
								 //document.getElementById('total_reg').innerHTML=item.totalCount+" Entries In Total";
								 
								// alert("total-"+item.totalCount);
				                    
	                    });
	                   /* onclick='updateApprovalStatus(" + item.los + ",\'reject\') onclick='updateApprovalStatus(" + item.los + ",\"approval\")'
	*/			if (undefined != responseData) {
		                    $('#myDiv li').remove();
		                    $('#myDiv').empty();
		                    //alert(totalcount);
		                    if (flag) {
		                    	 //totalcount = responseData.count;
		                    	if (totalcount == 0 || totalcount == ''){
		                    		totalcount = 0;
		        	                $('#myPager').unbind('page');
		      					  $('#myPager').hide();
		      					document.getElementById('total_reg').innerHTML="";
		      					$('#myDiv').empty().append("<div style='text-align:center;'> No Data Found<div>");
		      					//document.getElementById('selectAllSpanId').style.display='none';
		                    	}else{
		                    		//document.getElementById('selectAllSpanId').style.display='block';
		                    	}
		                    	/*
		                        totalcount = responseData.count;
		                    	//alert(totalcount);
		                        if (totalcount == 0) $('#fromPage').html("0");
		                        else $('#fromPage').html(Math.ceil(startLimit / companyDisplayCount) + 1);
		                       // alert("q");
		                        
		                        $('#pageRange').html(Math.ceil(totalcount / companyDisplayCount));
		                        $('.halfbtnprev').attr('disabled', true).css('background-color', 'grey');
		                        $('.halfbtnnext').removeAttr('disabled').css('background-color', '#004b8f');
		                       // alert($('#fromPage').html() +"--"+ $('#pageRange').html());
		                        if ($('#fromPage').html() == $('#pageRange').html()) 
		                        	{
		                        	//alert("inner");
		                        	$('.halfbtnnext').attr('disabled', true).css('background-color', 'grey');
		                        	}
		                   // alert("end");
		                    */}
		                    
		                    //alert($('#total_reg').val());
		                    
		                   /* $('#myPager').bootpag({
								total:(parseInt(Math.ceil(totalItems/5))),
								page:1,
								maxVisible: 10,
								
							}).on("page", function(event, num){
								//fetchElearningStatusPageWise(ecode,(num-1)*10,10,moduleId);
								//alert("num-"+num);
								fatchSelfDetailsListByPagination((num-1)*5,5,true)
								//alert("else")
							});*/
								
		                   
		                    $('#myDiv').append(htmlFragment);
		                    $('#wait').hide();
		                    /*$('.reassignCheck').off('click');
		                    $(".reassignCheck").on('click',function (item) {
		         	    	   if($(this).attr('id') == 'checkAll')
		         	    	    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		         	    	  $('.assign_fixbox').slideToggle('slow');
		         	    	});*/
		                	$(".reassignCheck").off('click');
		                	$(".reassignCheck").on('click',function (item) {
		                		   if($(this).attr('id') == 'checkAll')
		                		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		                		  $('.assign_fixbox').slideDown('slow');
		                		  var checkbox= $(".reassignCheck");
		                		  var statusHide=false;
		                		  $.each(checkbox,function(index,value){
		                		    var ckVal=value.checked;
		                		    if(ckVal)
		                		      statusHide=true;
		                		  });
		                		  if(!statusHide){
		                		    $('.assign_fixbox').slideUp('slow');
		                		  }
		                		});
		                }
		            }
		        }
		        });
		      //alert("2");
		}

	  function calculateApprovalNetPremium(){

			  var  checkNcb= document.getElementById("checkNcb").checked;
			  var losNum = document.getElementById("losNumber").value; 
			  var idvAmount=document.getElementById("idvAmount1").value; 
			  var ncbValue=document.getElementById("ncbValue").value; 
			  var discountValue=document.getElementById("discountValue1").value; 
			  
			  var prevAmount=document.getElementById("hiddentotalAmount").value;
			  var finalAmount12=prevAmount;
		      	var percentage=69;
		      	var isAllow=(prevAmount/100)*percentage;
		      	//finalAmount123=prevAmount+isAllow;
		      	if(discountValue<=isAllow){
		      		//alert("ok");
		      	}else{
		      		 modalAlertToShowCustomMessage('Maximum discount value exceeded.', 'error');
		      		 document.getElementById('calculateApprovalTab').style.display='none';
		      		return;
		      	}
		      
			  
			  
			  
			 /* alert(checkNcb);
			  alert(losNum);
			  alert(idvAmount);
			  alert(ncbValue);
			  alert(discountValue);
			  return;
			 */ 
			  var htmlFragment = "";

		      $.ajax({
		    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
		    	url: "/AdminModule/calculateApprovalNetPremium",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
					  idvAmount:idvAmount,
					  ncbValue:ncbValue,
					  checkNcb:checkNcb,
					  discountValue:discountValue,
					  losNum:losNum,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
		            if ($.isEmptyObject(data)) {
		            	//alert("1");
		                console.log("no responseJSON found");
		            } else {
				if (undefined != data) {
					document.getElementById("totalAmount1").innerHTML="<img src='images/rupee.svg' width='15'>"+data;
		                }
		            }
		          }
		        });
		
		}
	  function checkIdvValue(idv){
		  var idvVal=parseInt(document.getElementById("hiddenIdvAmount").value);
		  
		  var htmlFragment = "";

	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/checkIdvValue",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	idv:idv,
	        	idvVal:idvVal,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	            	//alert("1");
	                console.log("no responseJSON found");
	            } else {
			if (undefined != data && data=="failure") {
				//alert("Please Do not Increment or Decrement Value more then 25% Percent");
				 modalAlertToShowCustomMessage('Please Do not Increment or Decrement Value more then 25% Percent.', 'error');
				 var myEle = document.getElementById("idvAmount");
				    if(myEle){
				    	document.getElementById("idvAmount").value=idvVal;
				    }
					 
					 var myEle1 = document.getElementById("idvAmount1");
					    if(myEle1){
					    	document.getElementById("idvAmount1").value=idvVal;
					    }
					 
				  return;
	                }
	            }
	          }
	        });
/*		  if(null!=val && ''!=val){
			  var percntage=25;
			  var actualDiscount=(val*percntage)/100;
			  var preActucalValue=val-actualDiscount;
			  var postActualValue=(val+actualDiscount);
			  if(idv==preActucalValue || idv==postActualValue){
			  }else if(idv < postActualValue && idv > preActucalValue){
			  }else{
				  alert("Please Do not Increment or Decrement Value more then 25% Percent");
				alert("Please Do not Increment or Decrement Value more then 10% Percent");
				  document.getElementById("idvAmount").value=val;
				  document.getElementById("idvAmount1").value=val;
			  }
		  }*/
	  }

	  function checkIdvValuePremium(idv){
		  var idvVal=parseInt(document.getElementById("hiddenIdvAmount").value);
		  
		  var htmlFragment = "";

	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/checkIdvValue",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	idv:idv,
	        	idvVal:idvVal,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	            	//alert("1");
	                console.log("no responseJSON found");
	            } else {
			if (undefined != data && data=="failure") {
				//alert("Please Do not Increment or Decrement Value more then 25% Percent");
				 modalAlertToShowCustomMessage('Please Do not Increment or Decrement Value more then 25% Percent.', 'error');
				  document.getElementById("idvAmount").value=idvVal;
				  document.getElementById("idvAmount1").value=idvVal;
				  return;
	                }
	            }
	          }
	        });
/*		  if(null!=val && ''!=val){
			  var percntage=25;
			  var actualDiscount=(val*percntage)/100;
			  var preActucalValue=val-actualDiscount;
			  var postActualValue=(val+actualDiscount);
			  if(idv==preActucalValue || idv==postActualValue){
			  }else if(idv < postActualValue && idv > preActucalValue){
			  }else{
				  alert("Please Do not Increment or Decrement Value more then 25% Percent");
				alert("Please Do not Increment or Decrement Value more then 10% Percent");
				  document.getElementById("idvAmount").value=val;
				  document.getElementById("idvAmount1").value=val;
			  }
		  }*/
	  }

	  
	  function checkDiscountValue(discountValue){	
		  
		  var htmlFragment = "";
	      	var percentage=69;
	      	var prevAmount=document.getElementById("hiddentotalAmount").value;

	      $.ajax({
	    	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
	    	url: "/AdminModule/checkDiscountValue",
	        type: 'POST',
	        //dataType: "JSON",
	        //async:false,
	        data: {
	        	prevAmount:prevAmount,
	        	discountValue:discountValue,
				  _csrf:$('#csrfToken').val()
	        },
	        success: function(data) {
	        	console.log(data);
	            if ($.isEmptyObject(data)) {
	            	//alert("1");
	                console.log("no responseJSON found");
	            } else {
			if (undefined != data && data=="failure") {
	      		 modalAlertToShowCustomMessage('Maximum discount value exceeded.', 'error');
	      		 document.getElementById('calculateApprovalTab').style.display='none';
				  //document.getElementById("discountValue").value=idvVal;
				 // document.getElementById("idvAmount1").value=idvVal;
	      		return;
	                }
	            }
	          }
	        });
      /*	var isAllow=(prevAmount/100)*percentage;
      	//finalAmount123=prevAmount+isAllow;
      	if(discountValue<=isAllow){
      		//alert("ok");
      	}else{
      		 modalAlertToShowCustomMessage('Maximum discount value exceeded.', 'error');
      		 document.getElementById('calculateApprovalTab').style.display='none';
      		return;
      	}*/
      	}
	  
	 

	  
	function fetchElearningStatusPageWise(ecode,startLimit,endLimit,moduleId){
		$.ajax({
			url: "/AdminModule/fetcheLearningStatus",
			type: 'POST',
			async:false,
			data:{
				  "ecode":ecode,
				 "moduleId":moduleId,
				 "startlimit":startLimit,
				 "endlimit":endLimit
			},
			success:function(response) {
				
				if(response == null || response == ""){
					  modalAlertToShowCustomMessage('No user found. Please try again.', 'warning');
					  $('#myPager').unbind('page');
					  $('#myPager').hide();
					} else {
						var html="";
						
						$.each(response,function(index,item){
							html+=' <div class="line"><div class="col-lg-2 col-sm-3"><div class="match-records-label">Module Name</div>';
							html+='<div class="match-records-result">'+item.modulename+'</div></div><div class="col-lg-2 col-sm-3">';
							if(item.visited==true && item.attemted==false)
							{
							html+='<div class="match-records-label">Status</div><div class="match-records-result">View</div></div>';
							}
							else
							{
							html+='<div class="match-records-label">Status</div><div class="match-records-result">Attempt</div></div>';
							}
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Date / Time</div><div class="match-records-result">'+item.createdOn+'</div></div>';
							if(item.score==null)
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Score</div><div class="match-records-result">--</div></div>';
							}
							else
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Score</div><div class="match-records-result">'+item.score+'/'+item.maxMarks+'</div></div>';
							}
							if(item.result=='Pass'){
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result green">'+item.result+'</div></div>';
							}
							else if(item.result=='Fail'){
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result red">'+item.result+'</div></div>';
							}
							else{
								html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Result</div><div class="match-records-result black">--</div></div>';
							}
							if(item.visited==true && item.attemted==false)
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Certification</div><div class="match-records-result">--</div></div></div>';
							}
							else
							{
							html+='<div class="col-lg-2 col-sm-3"><div class="match-records-label">Certification</div><div class="match-records-result"><a href="'+item.certificate_url+'" target="_blank">'+item.certificate_url+'</a></div></div></div>';
							}
						});
						$('#viewResult').html(html);
						$('#viewResult').show();
					}
	          
				}
			
		});
	}
	  
function getTeamHyerarchy(startLimit,maxLimit){
		$("#wait").show();
	    var data=$.trim($('#empCode').val());
		 if (data != '')  {
			 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				url: "/AdminModule/fetchUserInformation",
				type: 'POST',
				data:{
					e_code:data,
				},
				success:function(response){
					if(null != response && undefined != response && response != ''){
						$.ajax({
							url: "/AdminModule/getTeanList",
							type: 'POST',
							data:{
								ecode:$('#empCode').val(),
								"startLimit":startLimit,
								"maxLimit":maxLimit,

							},
							success:function(response){
								$("#wait").hide();
								if(response.status.code=200){
									var totalcount=response.data.totalCount;
									var datalist=response.data.userReportingManagerMapperDTOList;
									$('#totalCounts').val(totalcount);
									$("#total_reg").text("");
									$(".mng-count").text(" ("+totalcount+")");
									if(totalcount!=0){
										$("#borderbtn").show();
										$("#selectAllChecbox").show();
										$("#dataDiv").show();
										 $( "#myDiv" ).empty();
										 $('#myPager').unbind('page');
										 if(totalcount>50){
											 $('#myPager').show();
										 }else{
											 $('#myPager').hide();
										 }										
										$.each(datalist,function(index,valueObj){
											$("#managerDivName").html("");
											$("#managerDivName").html(valueObj.reportingManagerName+"'s Team<span class=\"mng-ecode\" id=\"managerECode\"></span>");
											$(".mng-ecode").text("");
											$(".mng-ecode").text(" ("+valueObj.reportingManagerEcode+")");
											var mobile="--";
											if(valueObj.mobile==null){
												mobile="--"
											}else{
												mobile=valueObj.mobile
											}
											var html="";
											html='<li> <div class="col-lg-3 col-sm-3">'
												+'<div class="inner-userpic"><img src="images/default.png"></div>'
													+'<div class="num-off-act">Name'
														+'<span>'+valueObj.userName+'</span>'
													+'</div>'
												+'</div>'

												+'<div class="col-lg-3 col-sm-3">'
													+' <div class="num-off-act">Mobile No.'
														+'<span class="req-align">'+mobile+'</span>'
													+'</div>'
												+'</div>'

												+'<div class="col-lg-3 col-sm-3">'
													+'<div class="num-off-act">E-Code'
														+'<span class="req-align">'+valueObj.userEcode+'</span>'
													+'</div>'
												+'</div>'

												+'<div class="col-lg-3 col-sm-3 ipad-Tspace button-sec">'
												+'<div class="rejectbtn"  onclick="deleteTeamMember('+valueObj.id+')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div> '
												+'<span class="checkbox-btn noSpace-RC">'
												+'<input value="value-1" id="check'+(index+1)+'" name="rc2" teamId='+valueObj.id+' type="checkbox" class="reassignCheck deleteCheckbox">'
												+'<label for="check'+(index+1)+'"><span></span></label>'
												+'</span>'
												+' </div>'
												+'</li>'
												$("#myDiv").append(html);
											addDeleteEvent();
										});
									}else{
										$("#borderbtn").hide();
										$("#selectAllChecbox").hide();
										$("#dataDiv").hide();
										 $( "#myDiv" ).empty();
										 $('#myPager').unbind('page');
										 $('#myPager').hide();
										modalAlertToShowCustomMessage("No data Found", 'error');
									}
								}
								 if(totalcount>50)
								 $('#myPager').bootpag({
									 total:(parseInt(Math.ceil($('#totalCounts').val()/50))),
									 page:1,
									 maxVisible: 3,
									 }).on("page", function(event, num){
										 getTeamHyerarchyPageList($('#empCode').val(),(num-1)*50,50);
									 });
								 
								 $('#getTeamHyerarchy').trigger('blur');
								 $('#empCode').trigger('blur');
								 
							},error: function(jqXHR, textStatus, errorThrown) {
						    	 $("#wait").hide();
									console.log('jqXHR:');
									console.log(jqXHR);
									console.log('textStatus:');
									console.log(textStatus);
									console.log('errorThrown:');
									console.log(errorThrown);

								}
						});
					}
					else{
						$("#wait").hide();
						$("#borderbtn").hide();
						$("#selectAllChecbox").hide();
						$("#dataDiv").hide();
						 $( "#myDiv" ).empty();
						 $('#myPager').unbind('page');
						 $('#myPager').hide();
						modalAlertToShowCustomMessage("User Does Not Exist in the system", 'error');
					}
				}
			});
		 } else{
			 $("#wait").hide();
			 modalAlertToShowCustomMessage("Please enter ECode", 'error');
		 }
}

function getTeamHyerarchyPageList(ecode,startLimit,maxLimit){
	$("#wait").show();
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
    $.ajax({
		url: "/AdminModule/getTeanList",
		type: 'POST',
		data:{
			"ecode":ecode,
			"startLimit":startLimit,
			"maxLimit":maxLimit,
		},
		success:function(response){
			$("#wait").hide();
			if(response.status.code=200){
				var totalcount=response.data.totalCount;
				var datalist=response.data.userReportingManagerMapperDTOList;
				$('#totalCounts').val(totalcount);
				$("#total_reg").text("");
				$(".mng-count").text(" ("+totalcount+")");
				if(totalcount!=0){
					$("#borderbtn").show();
					$("#selectAllChecbox").show();
					 $("#dataDiv").show();
					 $( "#myDiv" ).empty();
					 $('#myPager').show();
					$.each(datalist,function(index,valueObj){
						$("#managerDivName").html("");
						$("#managerDivName").html(valueObj.reportingManagerName+"'s Team<span class=\"mng-ecode\" id=\"managerECode\"></span>");
						$(".mng-ecode").text("");
						$(".mng-ecode").text("("+valueObj.reportingManagerEcode+")");
						var mobile="--";
						if(valueObj.mobile==null){
							mobile="--"
						}else{
							mobile=valueObj.mobile
						}
						var html="";
						html='<li> <div class="col-lg-3 col-sm-3">'
							+'<div class="inner-userpic"><img src="images/default.png"></div>'
								+'<div class="num-off-act">Name'
									+'<span>'+valueObj.userName+'</span>'
								+'</div>'
							+'</div>'

							+'<div class="col-lg-3 col-sm-3">'
								+' <div class="num-off-act">Mobile No.'
									+'<span class="req-align">'+mobile+'</span>'
								+'</div>'
							+'</div>'

							+'<div class="col-lg-3 col-sm-3">'
								+'<div class="num-off-act">E-Code'
									+'<span class="req-align">'+valueObj.userEcode+'</span>'
								+'</div>'
							+'</div>'

							+'<div class="col-lg-3 col-sm-3 ipad-Tspace button-sec">'
							+'<div class="rejectbtn" onclick="deleteTeamMember('+valueObj.id+')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div> '
							+'<span class="checkbox-btn noSpace-RC">'
							+'<input value="value-1" id="check'+(index+1)+'" name="rc2" teamId='+valueObj.id+' type="checkbox" class="reassignCheck deleteCheckbox">'
							+'<label for="check'+(index+1)+'"><span></span></label>'
							+'</span>'
							+' </div>'
							+'</li>'
							$("#myDiv").append(html);
						addDeleteEvent();
							
					});
				}else{
					$("#wait").hide();
					$("#borderbtn").hide();
					$("#selectAllChecbox").hide();
					$("#dataDiv").hide();
					 $( "#myDiv" ).empty();
					 $('#myPager').unbind('page');
					 $('#myPager').hide();
					modalAlertToShowCustomMessage("No data Found", 'error');
				}
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
	    	 $("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);
		}
	});
}


function deleteTeamMember(memberId){
	var idList=[];
	if(memberId==null || memberId==undefined){
		var dcheckbox=$(".deleteCheckbox");
		$.each(dcheckbox,function(index,obj){
			var memId=obj.getAttribute("teamId");
			var ckVal=obj.checked;
		    if(ckVal)
		    	idList.push({"id":memId});
		});
	}else{
		idList=[
			{"id":memberId}
		]
	}
	swal({
        title: "Are you sure?",
        text: "You want to Delete "+idList.length+" members",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: true,
        closeOnCancel: false
	}).then(
			function(isConfirm) {
				$("#wait").show();
				$.ajaxSetup({
					headers : {
						'X-CSRF-TOKEN' : $('#csrfToken').val()
					}
				});
				$.ajax({
					url : "/AdminModule/deleteTeamMember",
					headers : {
						'Accept' : 'application/json',
						'Content-Type' : 'application/json'
					},
					dataType : 'JSON',
					type : 'POST',
					data : JSON.stringify(idList),
					success : function(response) {
						$("#wait").hide();
						$('.assign_fixbox').hide();
						if (response) {
							modalAlertToShowCustomMessage("Members Deleted successfully", 'success');
							getTeamHyerarchy(0, 50);
						} else {
							$("#wait").hide();
							modalAlertToShowCustomMessage("Error occure during delete member",'error');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						$("#wait").hide();
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);

					}
				});
			});
}

function addTeamMember(){
	 var manager=$.trim($('#empCode').val());
	 if(manager==undefined || manager=="" || manager==null){
		 modalAlertToShowCustomMessage("Please enter Manager Ecode", 'error');
			return false;
	 }
	var idList=[];
	var userEcodeList=$(".userECodeData");
		$.each(userEcodeList,function(index,obj){
			var memEcode=obj.value;
		    	idList.push({
					"reportingManagerEcode":manager,
					"userEcode":memEcode,
				});
		});
	
	if(idList.length==0){
		modalAlertToShowCustomMessage("Please add member", 'error');
		return false;
	}
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "/AdminModule/addTeamMember",
		headers: { 
		      'Accept': 'application/json',
		     'Content-Type': 'application/json' 
		},
		dataType: 'JSON',
		type: 'POST',
		data : JSON.stringify(idList),
		success:function(response){
			$("#wait").hide();
			if(response.status.code==200){
				$('.addedTag').remove();
				modalAlertToShowCustomMessage(response.data.responseMsg, 'success');
			}else{
				$('.addedTag').remove();
				modalAlertToShowCustomMessage(response.data.responseMsg, 'error');
			}
			getTeamHyerarchy(0,50);
		},
		error: function(jqXHR, textStatus, errorThrown) {
	    	 $("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);

		}
	});
}

function closeaddModule(){
	$('.addedTag').remove();
	$('#codesearchfielde').val("");
}

function addDeleteEvent(){
	$(".reassignCheck").off('click');
	$(".reassignCheck").on('click',function (item) {
		   if($(this).attr('id') == 'checkAll')
		    $('input.reassignCheck:checkbox').prop('checked',$(this).prop('checked'));
		  $('.assign_fixbox').slideDown('slow');
		  $('.rejectbtn').hide();
		  var checkbox= $(".reassignCheck");
		  var statusHide=false;
		  var checkboxCheckedCount=0;
		  $.each(checkbox,function(index,value){
		    var ckVal=value.checked;
		    if(ckVal){
		      statusHide=true;
		      checkboxCheckedCount++;
		    }
		  });
		  if(!statusHide){
		    $('.assign_fixbox').slideUp('slow');
		     $('.rejectbtn').show();
		  }
		  if(checkboxCheckedCount==checkbox.length-1){
			  $($('input.reassignCheck:checkbox')[0]).prop('checked',$(this).prop('checked'));
		  }else if(checkboxCheckedCount==0){
//			  $('input.reassignCheck:checkbox').prop('checked',"");
			  $($('input.reassignCheck:checkbox')[0]).prop('checked',"");
		  }
		});
}
var columnDataFinal;
function renderMomTemplate(){
	columnDataFinal=[];
	var columnsData = $('#produc-div .product-sec');
	if(undefined != columnsData){
		var headerNames =[];
		var headerSize=[];
		var columns=[];
		var readOnly=true;
		var allowUpdates=false;
		$.map(columnsData,function(item){
			if(undefined != item){
				var colName =$(item).find('.colName').val();
				var colType	 =$(item).find('.divselector option:selected').val();
				var columnName='text';
				if(colType == 2)
					columnName='dropdown';
				else if(colType == 3)
					columnName='checkbox';
				else if(colType == 4)
					columnName='calendar';
				else if(colType == 5)
					columnName='autocomplete';
				headerNames.push(colName);
				headerSize.push(100);
				var ob={};
				if(colType == 2 || colType == 5){
					var source=[];
					var options = $(item).find('.tagings .addedTag');
					if(undefined != options){
						var i=0;
						$.map(options,function(option){
							var val=$(option).find('input[type="hidden"]').val();
							var dummy={'id':i+1,'name':val};
							source.push(dummy);
							i++;
						});
						
					}
					ob={ type: columnName,source:source};
				}else if(colType == 4){
					ob={ type: columnName,options: { format:'DD/MM/YYYY' } }
				}else if(colType == 3){
					ob={ type: columnName,readOnly:false}
				}
				else{
					ob={ type: columnName,readOnly:readOnly}
				}
				var columnData ={"column_name":colName,"column_type":colType,"column_values":source};
				columnDataFinal.push(columnData);
				columns.push(ob);
				
			}
		});
		
		$('#my').jexcel({
		    colHeaders:  headerNames,
		    columns: columns,
		    colWidths:headerSize,
		    minSpareRows:1,
		    allowInsertRow:allowUpdates,
//		    editable:allowUpdates,
		    allowInsertColumn:allowUpdates,
		    allowDeleteRow:allowUpdates
		});
		$('#tableError').hide();
		$('.mom-table').show();
	}
}

function AESFileBlReportingEncryption(key, salt, iv, file, fileReaderObj, boundary, formDataName, date){
	
	var key128Bits100Iterations = CryptoJS.PBKDF2(key, salt, { keySize: 128/32, iterations: 100 });
	console.log( 'key128Bits100Iterations '+ key128Bits100Iterations);
	var encryptedData = CryptoJS.AES.encrypt(fileReaderObj.result.match(/,(.*)$/)[1], key128Bits100Iterations, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });

	// Store our body request in a string.
	var data = "";

	// Start a new part in our body's request
	data += "--" + boundary + "\r\n";

	// Describe it as form data
	data += 'content-disposition: form-data; '
		// Define the name of the form data
		+ 'name="' + formDataName + '"; '
		// Provide the real name of the file
		+ 'filename="'     + file.name + '"\r\n';
	// And the MIME type of the file
	data += 'Content-Type: ' + file.type + '\r\n';

	// There's a blank line between the metadata and the data
	data += '\r\n';

	// Append the binary data to our body's request
	data += encryptedData + '\r\n\n';

	// Once we are done, "close" the body's request
	//data += "--" + boundary + "--";
	
	
	// Start a new Date part in our body's request
	data += "--" + boundary + "\r\n";
	// Describe it as form data
	data += 'Content-Disposition: form-data; '
		// Define the name of the form data
		+ 'name="\date\"'+ '\r\n\n'
		data += date+ '\r\n';
	data += "--" + boundary + "--";

	return data;
}

function submitBlDailyImport(formParentDivID) {

	if($("#ip-de-1").val() == ''){
		modalAlertToShowCustomMessage("Please select date", 'warning');
		return false;
	}
	
	if($("#file-2")[0].files.length < 1){
		modalAlertToShowCustomMessage("Please upload excel file", 'warning');
		return false;
	}
	
	swal({
        title: "Are you sure?",
        text: "You are uploading BL Daily Reporting datasheet.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: true,
        closeOnCancel: false
    }).then(function(isConfirm) {
        
    	if (isConfirm) {   
		$('#wait').show();
 
		var file = document.getElementById('file-2').files[0]
		var key = "vahangyan";
		// Uses different reader for all files
		var reader = new FileReader();

		reader.onload = function() {
			
			var salt = CryptoJS.lib.WordArray.random(128/8);
			var iv = CryptoJS.lib.WordArray.random(128/8);
			var boundary = "blob";
			var date = $("#ip-de-2").val();
			date = date.replace(/\ /g, '-');
			
			//alert('date:: '+date);
			//var data = AESFileBlReportingEncryption(key, salt, iv, file, reader, boundary, "blDailyFile", date);
			
			var formData = new FormData(); 
			formData.append("blDailyFile", file); 
			formData.append("date", date);
			
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				//headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
				headers: {'Content-Type': undefined},
				url: "/AdminModule/blDailyUpload",
				type: 'POST',
				processData: false,  // tell jQuery not to process the data
				contentType: false,  // tell jQuery not to process the data
				data:formData,
				success:function(response){
					$('#wait').hide();
					resetForm('submitBlDailyImport');
					if(response == null || response == ""){
						$( "#pdd-excel-download-link" ).hide();
						$("#fileLabel2").html('Upload file - Daily Report (.xlsx)');
						modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
					}
					else if(response.indexOf('SUCCESS') != -1)
					{
						$( "#pdd-excel-download-link" ).hide();
						$("#fileLabel2").html('Upload file - Daily Report (.xlsx)');
						modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
					}
					else if(response.indexOf('FAILURE') != -1)
					{
						$( "#pdd-excel-download-link" ).hide();
						$("#fileLabel2").html('Upload file - Daily Report (.xlsx)');
						modalAlertToShowCustomMessage('Oops Some error occurred. Please do not enter blank excel file', 'warning');
					}
					else{
						var download = document.getElementById('pdd-error-excel-download-link');
						var arrayData= response.split("~");
						download.setAttribute('href', arrayData[3]);
						download.setAttribute('download', 'LogFile.xlsx');
						$('#submitPDDImportBtn').hide();
						$( "#pdd-excel-download-link" ).show();
						$("#fileLabel2").html('Upload file - Daily Report (.xlsx)');
						modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
								'. Please go through download link for more detail.', 'warning');

					}
				}, 
				error: function(jqXHR, textStatus, errorThrown) {
					console.log('jqXHR:');
					console.log(jqXHR);
					console.log('textStatus:');
					console.log(textStatus);
					console.log('errorThrown:');
					console.log(errorThrown);

				}
			});
		}

		reader.readAsDataURL(file);
    	}
    }
    );
}

function submitBlTargetImport(formParentDivID) {
	
	if($("#ip-de-1").val() == ''){
		modalAlertToShowCustomMessage("Please select date", 'warning');
		return false;
	}
	
	if($("#file-1")[0].files.length < 1){
		modalAlertToShowCustomMessage("Please upload excel file", 'warning');
		return false;
	}
	
	
	swal({
        title: "Are you sure?",
        text: "You are uploading BL Target Reporting datasheet.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: true,
        closeOnCancel: false
    }).then(function(isConfirm) {
        
    	if (isConfirm) {   
		$('#wait').show();
 
		var file = document.getElementById('file-1').files[0]
		var key = "vahangyan";
		// Uses different reader for all files
		var reader = new FileReader();

		reader.onload = function() {
			
			var salt = CryptoJS.lib.WordArray.random(128/8);
			var iv = CryptoJS.lib.WordArray.random(128/8);
			var boundary = "blob";
			var date = $("#ip-de-1").val();
			date = date.replace(/\ /g, '-');
			
			//alert('date:: '+date);
			//var data = AESFileBlReportingEncryption(key, salt, iv, file, reader, boundary, "blTargetFile", date);
			
			var formData = new FormData(); 
			formData.append("blTargetFile", file); 
			formData.append("date", date);
			
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				//headers: {'Content-Type': 'multipart/form-data; boundary=' + boundary, 'saltKey': salt, 'ivKey': iv},
				headers: {'Content-Type': undefined},
				url: "/AdminModule/blTargetUpload",
				type: 'POST',
				processData: false,  // tell jQuery not to process the data
				contentType: false,  // tell jQuery not to process the data
				data:formData,
				success:function(response){
					$('#wait').hide();
					resetForm('submitBlTargetImport');
					if(response == null || response == ""){
						$( "#pdd-excel-download-link" ).hide();
						$("#fileLabel1").html('Upload file - Target Report (.xlsx)');
						modalAlertToShowCustomMessage('Oops some error occurred. Please upload valid excel file. Use sample file for reference', 'warning');
					}
					else if(response.indexOf('SUCCESS') != -1)
					{
						$( "#pdd-excel-download-link" ).hide();
						$("#fileLabel1").html('Upload file - Target Report (.xlsx)');
						modalAlertToShowCustomMessage('Excel file has been processed successfully', 'success');
					}
					else if(response.indexOf('FAILURE') != -1)
					{
						$( "#pdd-excel-download-link" ).hide();
						$("#fileLabel1").html('Upload file - Target Report (.xlsx)');
						modalAlertToShowCustomMessage('Oops Some error occurred. Please do not enter blank excel file', 'warning');
					}
					else{
						var download = document.getElementById('pdd-error-excel-download-link');
						var arrayData= response.split("~");
						download.setAttribute('href', arrayData[3]);
						download.setAttribute('download', 'LogFile.xlsx');
						$('#submitPDDImportBtn').hide();
						$( "#pdd-excel-download-link" ).show();
						$("#fileLabel1").html('Upload file - Target Report (.xlsx)');
						modalAlertToShowCustomMessage('Total Records: '+arrayData[1]+', Records processed successfully: '+arrayData[2]+
								'. Please go through download link for more detail.', 'warning');

					}
				}, 
				error: function(jqXHR, textStatus, errorThrown) {
					console.log('jqXHR:');
					console.log(jqXHR);
					console.log('textStatus:');
					console.log(textStatus);
					console.log('errorThrown:');
					console.log(errorThrown);

				}
			});
		}
		reader.readAsDataURL(file);
    	}
    }
    );
}

function resetReportingForm(formId,fileLabel,type) {
	$('#' + formId).resetForm();
	$("#"+fileLabel).html("");
	$("#"+fileLabel).html("Upload file - "+type+" Report (.xlsx)");
	$("#pdd-excel-download-link").hide();
}

function setReportingFileLabel(fileId,fileLabel,aId,divId,submitButtonId){
	var fileName= $("#"+fileId).val().replace(/.*[\/\\]/, '');
	$("#"+fileLabel).html(fileName);
	$(submitButtonId).show();
	var download = document.getElementById(aId);
	if(undefined != download && download.length > 0){
		download.setAttribute('href', '#');
		$( divId ).hide();	
	}
		}

function clearToValues(){
	 document.getElementById("departmentTag").value="";
	 document.getElementById("cityTag").value="all";
	 document.getElementById("designationTag").value="all";
}
function getTeamHyerarchyKeyPress(event){
	if (event.which == '13') {
		getTeamHyerarchy(0,50);
	}
}



function addBulkUser() {
	
	if($("#file-1")[0].files.length < 1){
		modalAlertToShowCustomMessage("Please upload excel file", 'warning');
		return false;
	}
	
	swal({
        title: "Are you sure?",
        text: "You are uploading BL Target Reporting datasheet.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: true,
        closeOnCancel: false
    }).then(function(isConfirm) {
        
    	if (isConfirm) {   
		$('#wait').show();
 
		var file = document.getElementById('file-1').files[0]
		var key = "vahangyan";
		// Uses different reader for all files
		var reader = new FileReader();

		reader.onload = function() {
			
			var formData = new FormData(); 
			formData.append("bulkUserFile", file); 
			
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				headers: {'Content-Type': undefined},
				url: "/AdminModule/bulkUserCreation",
				type: 'POST',
				processData: false,  // tell jQuery not to process the data
				contentType: false,  // tell jQuery not to process the data
				data:formData,
				success:function(response){
					$('#wait').hide();
					resetForm("submitBulkUser");
					if(response.status.code==201 || response.status.code==202 || response.status.code==210){
						modalAlertToShowCustomMessage(response.data.statusMessage, 'error');
					}
					else if(response.status.code!=200){
						var download = document.getElementById('bulkUser-error-excel-download-link');
						download.setAttribute('href', response.data.downloadUrl);	
						download.setAttribute('download', 'LogFile.xlsx');
						$( "#bulkUser-excel-download-link" ).show();
						messageUser(response);
					}else{
						var download = document.getElementById('bulkUser-error-excel-download-link');
						download.setAttribute('href', response.data.downloadUrl);	
						download.setAttribute('download', 'LogFile.xlsx');
						download.click(); 
						$( "#bulkUser-excel-download-link" ).hide();
						messageUser(response);
					}
					$("#fileLabel").html("");
					$("#fileLabel").html(" <span>Upload file customer data (.xlsx)</span>");
				
				}, 
				error: function(jqXHR, textStatus, errorThrown) {
					$('#wait').hide();
					resetForm("submitBulkUser");
		    		$("#fileLabel").html("");
					$("#fileLabel").html(" <span>Upload file customer data (.xlsx)</span>");
					console.log('jqXHR:');
					console.log(jqXHR);
					console.log('textStatus:');
					console.log(textStatus);
					console.log('errorThrown:');
					console.log(errorThrown);

				}
			});
		}
		reader.readAsDataURL(file);
    	}
    },
    function (){
		resetForm("submitBulkUser");
		$("#fileLabel").html("");
		$("#fileLabel").html(" <span>Upload file customer data (.xlsx)</span>");
    }
    );
}





function messageUser(idList){
	
	swal({
        title: idList.data.statusMessage,
        text: "Do you want to send message",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: true,
        closeOnCancel: false
	}).then(
			function(isConfirm) {
				$("#wait").show();
				$.ajax({
					headers: {'Accept': 'application/json', 'Content-Type': 'application/json' , 'X-CSRF-TOKEN':$('#csrfToken').val()
					}, type:'POST', url:"/AdminModule/bulkUserMessageSender", dataType: "json", data:JSON.stringify(idList),
					success : function(response) {
						$("#wait").hide();
						modalAlertToShowCustomMessage(response.data.statusMessage, 'success');
					},
					error : function(jqXHR, textStatus, errorThrown) {
						$("#wait").hide();
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);

					}
				});
			});
}

var monthMap={"Jan":01,"Feb":02,"Mar":03,"Apr":04,"May":05,"Jun":06,"Jul":07,"Aug":08,"Sep":09,"Oct":10,"Nov":11,"Dec":12}
function fetchResionReportData() {
	var selectedMonth=$("#ip-de-1").val();
	if(null == selectedMonth || selectedMonth==""){
		modalAlertToShowCustomMessage('Please select month', 'error');
		return false;
	}
	var date=selectedMonth.split(",");
	$("#wait").show();
	$.ajax({
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
			'X-CSRF-TOKEN' : $('#csrfToken').val()
		},
		type : 'GET',
		url : "/AdminModule/fetchResionReportData",
		dataType : "json",
		data : {
			"year":date[1].trim(),
			"month":monthMap[date[0].trim()],
		},
		success : function(response) {
			$("#wait").hide();
				if(response.status.code==200){
					var resData=response.data.disbReportCompilationDTO
					if(resData.length!=0){
						$("#reportTableDiv").show();
						$("#tableData").empty();
						var htmlHedder=" <tr><th data-th='Region'>Region</th>" +
							"<th data-th='NCL Units'>NCL Units</th>" +
							"<th data-th='UCL Units'>UCL Units</th>" +
							"<th data-th='NCL'>NCL Disb.(in Cr.)</th>" +
							"<th data-th='UCL'>UCL Disb.(in Cr.)</th>" +
							"<th data-th='Total'>Total</th>" +
							"<th data-th='space'>&nbsp;</th></tr>";
						$("#tableData").append(htmlHedder);
						var colTot1=0;
						var colTot2=0;
						var colTot3=0;
						var colTot4=0;
						var colTot5=0;
						var colTotPer1=0;
						var colTotPer2=0;
						$.each(resData,function(index,object){
							colTot1=colTot1+parseInt(object.new_car_login_unit);
							colTot2=colTot2+parseInt(object.used_car_login_unit);
							colTot3=colTot3+parseFloat(object.new_car_dis_cr);
							colTot4=colTot4+parseFloat(object.used_car_dis_cr);
							var html="<tr>"+
									" <td data-th=\"Region\">"+object.region+"</td>" +
									" <td data-th=\"NCL Units\">"+Math.round(object.new_car_login_unit)+"</td>" +
									" <td data-th=\"UCL Unit\">"+Math.round(object.used_car_login_unit)+"</td>" +
									"<td data-th=\"NCL\">"+Math.round(object.new_car_dis_cr)+"</td>" +
									" <td data-th=\"UCL\">"+Math.round(object.used_car_dis_cr)+"</td>" +
									"<td data-th=\"Total\">"+Math.round((object.new_car_dis_cr+object.used_car_dis_cr).toFixed(2))+"</td>" +
									"<td data-th=\"space\">" +
										"<a href=\"#\" onclick=\"fetchReportData(\'"+object.region+"\',\'"+date[1].trim()+"\',\'"+monthMap[date[0].trim()]+"\')\">" +
											"<img src=\"images/right-arrow-circular.svg\" width=\"22\">" +
										"</a>" +
									"</td>" +
								"</tr>";
							$("#tableData").append(html);
						})
						colTot5=colTot5+parseFloat(colTot3+colTot4);
						/*colTotPer1=((colTot3/colTot5)*100)
						colTotPer2=((colTot4/colTot5)*100)*/
						if(colTot3==0 && colTot5==0)
							colTotPer1=0
						else
							colTotPer1=((colTot3/colTot5)*100)
						if(colTot4==0 && colTot5==0)
							colTotPer2=0
						else
							colTotPer2=((colTot4/colTot5)*100)
						var htmlFooter="<tfoot><tr>" +
											"<td data-th='Total'>Total</td>" +
											"<td data-th='NCL Units'>"+colTot1+"</td>" +
											"<td data-th='UCL Units'>"+colTot2+"</td>" +
											"<td data-th='NCL'>"+Math.round(colTot3)+" ("+colTotPer1.toFixed(2)+"%)</td>" +
											"<td data-th='UCL'>"+Math.round(colTot4)+" ("+colTotPer2.toFixed(2)+"%)</td>" +
											"<td data-th='Total'>"+Math.round(colTot5)+"</td>" +
											"<td data-th='space'>&nbsp;</td>" +
										"</tr></tfoot>"
							$("#tableData").append(htmlFooter);
					}else{
						$("#reportTableDiv").hide();
						modalAlertToShowCustomMessage("Data Not available", 'error');
					}
				}else{
					$("#reportTableDiv").hide();
					modalAlertToShowCustomMessage(response.status.message, 'error');
				}
				
				$('#alReportSearchDate').trigger('blur');
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);

		}
	});
}

function fetchResionReportDataKeyPress(event){
	if (event.which == '13') {
		fetchResionReportData();
	}
}


function fetchReportData(region,year,month) {
	$("#wait").show();
	$.ajax({
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
			'X-CSRF-TOKEN' : $('#csrfToken').val()
		},
		type : 'GET',
		url : "/AdminModule/fetchReportData",
		dataType : "json",
		data : {
			"year":year,
			"month":month,
			"region":region
		},
		success : function(response) {
			$("#wait").hide();
			var resData=response.data.disbReportEmpCompilationDTO
			if(response.status.code==200){
				if(resData.length!=0){
					$("#viewMore").modal('show');
					$("#popuptableData").empty();
					var htmlHedder="<tr><th data-th='Region' width='15%'>RSM</th>" +
									"<th data-th='New Car Login Units' width='15%'>NCL Units</th>" +
									"<th data-th='Used Car Login Units' width='15%'>UCL Units</th>" +
									"<th data-th='NCL' width='15%'>NCL Disb.(in Cr.)</th>" +
									"<th data-th='UCL' width='15%'>UCL Disb.(in Cr.)</th>" +
									"<th data-th='Total' width='15%'>Total</th>" +
									"<th data-th='space' width='7%'>&nbsp;</th></tr>";
					
					$("#popuptableData").append(htmlHedder);
					
					$.each(resData,function(index,object){
						var html= " <tr> <input type='hidden' value='"+object.id+"'id='id' name='id' /> " +
								        "<input type='hidden' value='"+region+"'id='region' name='region' />" +
								        "<input type='hidden' value='"+object.e_code+"'id='e_code' name='e_code' />" +
								        "<input type='hidden' value=''id='modified' name='modified' />" +
								        "<input type='hidden' value='"+object.new_car_login_unit+"' name='old_new_car_login_unit' />" +
								        "<input type='hidden' value='"+object.used_car_login_unit+"' name='old_used_car_login_unit' />" +
								        "<input type='hidden' value='"+object.new_car_dis_cr+"' name='old_new_car_dis_cr' />" +
								        "<input type='hidden' value='"+object.used_car_dis_cr+"' name='old_used_car_dis_cr' />" +
								"<td data-th='Region' >"+object.empName+"<span id='ecode'>"+object.e_code+"</span></td>" +
								"<td data-th='New Car Login Units' class='dissable'><input clName='new_car_login_unit' readonly type='number' pattern='[0-9]' onkeydown='restrictUpDownKey()' onkeyup='updateRSMTotal(event)' id='ncl' class='dotValidation' name='' value="+object.new_car_login_unit+"></td>" +
								"<td data-th='Used Car Login Units' class='dissable'><input clName='used_car_login_unit' readonly type='number' pattern='[0-9]' onkeydown='restrictUpDownKey()' onkeyup='updateRSMTotal(event)' id='ucl' class='dotValidation' name='' value="+object.used_car_login_unit+"></td>" +
								"<td data-th='NCL' class='dissable'><input type='number' clName='new_car_dis_cr' readonly onkeydown='restrictUpDownKey()' onkeyup='trimDisb(event);updateRSMTotal(event)' name='' value="+object.new_car_dis_cr+"></td>" +
								"<td data-th='UCL' class='dissable'><input type='number' clName='used_car_dis_cr' readonly onkeydown='restrictUpDownKey()' onkeyup='trimDisb(event);updateRSMTotal(event)' name='' value="+object.used_car_dis_cr+"></td>" +
								"<td data-th='Total' class='dissable'><input type='text' name='' readonly='readonly' value="+(object.new_car_dis_cr+object.used_car_dis_cr).toFixed(2)+"></td>" +
								"<td data-th='space'><a href='#' class='editRow' onclick=\"editRow(event)\"><img src='images/pencil.svg' width='24'></a></td> <tr>"
						$("#popuptableData").append(html);
						dotValidation();
					});
					$("#region").html("");
					$("#region").html(region);
					$( "#editReportData" ).removeClass( "editReportData" );
				}else{
					modalAlertToShowCustomMessage("Data Not available", 'error');
				}
			}else{
				modalAlertToShowCustomMessage(response.status.message, 'error');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);

		}
	});
}

function editReportData(){
	var selectedMonth=$("#ip-de-1").val();
	if(null == selectedMonth || selectedMonth==""){
		modalAlertToShowCustomMessage('Please select month', 'error');
		return false;
	}
	var date=selectedMonth.split(",");
	
	var tableRows=$("#popuptableData").find("tr");
	var dataArray=[];
	$.each(tableRows,function(index1,trObject){
		if(index1!=0){
			var dataObject={};
			var tds=trObject.cells;
			$.each(tds,function(index2,object){
				var attrName =object.children[0].getAttribute("clName");
				if(attrName!=null){
					dataObject[attrName]=object.children[0].value-$(trObject).find(' input[name="old_'+attrName+'"]').val();
				}
			});
		
		
		var hiddneField=trObject.children;
		$.each(hiddneField,function(index3,object){
			if(object.id=="modified" && object.value==1 && Object.keys(dataObject).length != 0){
				dataObject["year"]=date[1].trim();
				dataObject["month"]=monthMap[date[0].trim()];
				dataArray.push(dataObject);
				console.log(object.value);
			}else if(object.id=="id"  && Object.keys(dataObject).length != 0){
				dataObject["id"]=object.value;
			}else if(object.id=="region"  && Object.keys(dataObject).length != 0){
				dataObject["region"]=object.value;
			}else if(object.id=="e_code" && Object.keys(dataObject).length != 0){
				dataObject["e_code"]=object.value;
			}
			
		});
		}
	});
	console.log(dataArray);
	if(dataArray.length==0){
		modalAlertToShowCustomMessage('Please Modify and then save', 'error');
		return false;
	}
	$("#wait").show();
	$.ajax({
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
			'X-CSRF-TOKEN' : $('#csrfToken').val()
		},
		type : 'POST',
		url : "/AdminModule/editReportData",
		dataType : "json",
		data : JSON.stringify(dataArray),
		success : function(response) {
			$("#wait").hide();
			if(response.status.code==200){
				closePopup('viewMore');
				modalAlertToShowCustomMessage(response.data.responseMessage, 'success');
				fetchResionReportData();
			}else{
				modalAlertToShowCustomMessage(response.data.responseMessage, 'error');
			}
			console.log(JSON.stringify(response));
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);

		}
	});

}

function closePopup(id){
	$("#"+id).modal('hide');
}

function editRow(event){
	var hidden =$(event.target).parent().parent().parent().find("input[type=hidden]");
	var tds =$(event.target).parent().parent().parent().find("td");
	$.each(hidden,function(index,object){
		if(object.id=="modified")
			$(object).val(1);
	});
	$.each(tds,function(index,object){
		if(index!="5"){
				object.classList.remove("dissable");
				object.childNodes[0].readOnly=false;
		}
	});

  };

function restrictUpDownKey(){
	 var keycode = event.charCode || event.keyCode;
	 if (keycode == 38 || keycode == 40) {
		 event.preventDefault();
	}
}
  
 function updateRSMTotal(event){
	 var tds =$(event.target).parent().parent().find("td");
	 var tatal=0;
	 var status=false;
	 $.each(tds,function(index,object){
			if(index=="5"){
				var currentInput=$(object).find("input[type=text]")[0];
				currentInput.value=tatal.toFixed(2);
			}else if(index=="3"){
				var currentInput=$(object).find("input[type=number]")[0];
				if(currentInput.value==""){
					status=true;
					currentInput.value=0
				}else{
					//currentInput.value=Number(curVal).toFixed(2);
					tatal=tatal+parseFloat(currentInput.value);
				}
			}else if(index=="4"){
				var currentInput=$(object).find("input[type=number]")[0];
				if(currentInput.value==""){
					status=true;
					currentInput.value=0;
				}else{
					//currentInput.value=Number(curVal).toFixed(2);
					tatal=tatal+parseFloat(currentInput.value);
				}
			}else if(index=="1"){
				var currentInput=$(object).find("input[type=number]")[0];
				if(currentInput.value==""){
					status=true;
					currentInput.value=0;
				}else {
					currentInput.value=currentInput.value;
				}
			}else if(index=="2"){
				var currentInput=$(object).find("input[type=number]")[0];
				if(currentInput.value==""){
					status=true;
					currentInput.value=0;
				}else {
					currentInput.value=currentInput.value;
				}
			}
		});
 }
 

 function alReportDownLoad(){
   var selectedMonth=$("#ip-de-1").val();
	if(null == selectedMonth || selectedMonth==""){
		modalAlertToShowCustomMessage('Please select month', 'error');
		return false;
	}
	var date=selectedMonth.split(",");
	var year=date[1].trim();
	var month=monthMap[date[0].trim()];

 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "/AdminModule/alReportDownLoad",
		headers: { 
		      'Accept': 'application/json',
		     'Content-Type': 'application/json' 
		},
		dataType: 'JSON',
		type: 'GET',
		data : {
			"year":year,
			"month":month
		},
		success:function(response){
	          var link = document.getElementById("downloadExcelHidden");
	          var resp=response;
	          if(resp.status.code==200){
	        	link.setAttribute("href", resp.data.downloadURL);
	            link.click(); 
	          }else{
	        	  modalAlertToShowCustomMessage(resp.data.responseMessage, 'error');
	          }
		},
		error: function(jqXHR, textStatus, errorThrown) {
	    	 $("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);

		}
	});
 }
 

 $("#ncl").on("keypress", function(evt) {
	var keycode = evt.charCode || evt.keyCode;
	if (keycode == 46) {
		return false;
	}
});
$("#ucl").on("keypress", function(evt) {
	var keycode = evt.charCode || evt.keyCode;
	if (keycode == 46) {
		return false;
	}
});
 

function dotValidation(){
	$(".dotValidation").off('keypress');
	$(".dotValidation").on("keypress", function(evt) {
		var keycode = evt.charCode || evt.keyCode;
		if (keycode == 46) {
			return false;
		}
	});
	/*$("#ncl").off('keypress');
	$("#ucl").off('keypress');
	$("#ncl").on("keypress", function(evt) {
		var keycode = evt.charCode || evt.keyCode;
		if (keycode == 46) {
			return false;
		}
	});
	$("#ucl").on("keypress", function(evt) {
		var keycode = evt.charCode || evt.keyCode;
		if (keycode == 46) {
			return false;
		}
	});*/
}



function getMassTaskList(startLimit,maxResult){
	$("#wait").show();
	 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	 var reqdata=	{"data":{
			"isMasterDataRequired":true,
			"isSenior":true
			}
	 };
		$.ajax({
			url: "/AdminModule/syncCustomTasks",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
		//	dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify(reqdata),
			success:function(response){
				$("#wait").hide();
				if(response.status.code==200){
					var respDate=response.data.customTaskDtos;
					if(null !=respDate && respDate.length!=0){
						$("#assignedTaskList").empty();
						$.each(respDate,function(index,item){
							var timeRemain="";
							var setPeriorityHigh="";
							var reOpen="";
							if(item.priority!=0)
								setPeriorityHigh="<div class='pointer'>High</div>";
							if(item.endDate==null){
								timeRemain="<i class='' aria-hidden='true'></i>" +
								"               <div class='' style='margin-top:13px;'>" +
								"					<a th:href='@{/createMassAssignment(isTestModify=true,customTaskId="+item.id+",leadTaskId="+item.leadTaskId+")}' href='/AdminModule/createMassAssignment?isTestModify=true&customTaskId="+item.id+"&leadTaskId="+item.leadTaskId+"'>" +
								"						<img src=\"images/pencil.svg\" width=\"22\">" +
								"					</a>" +
								"               </div>" +
								"</div>";
							}else{
								var today = new Date();
								var dd = today.getDate();
								var mm = today.getMonth()+1; //January is 0!
								var yyyy = today.getFullYear();
								var hr = today.getHours(); 
								var min = today.getMinutes();
								var sec = today.getUTCSeconds();
								if(dd<10){
								    dd='0'+dd;
								} 
								if(mm<10){
								    mm='0'+mm;
								} 
								var today = yyyy+'-'+mm+'-'+dd+' '+hr+':'+min+':'+sec;
								var date1 = new Date(item.endDate);
								var date2 = new Date(today);
								var timeDiff = Math.abs(date2.getTime() - date1.getTime());
								var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
								if(diffDays==1){
									timeRemain="<i class='fa fa-clock-o' aria-hidden='true'></i>  "+diffDays+" days left" +
									"               <div class='' style='margin-top:13px;'>" +
									"					<a th:href='@{/createMassAssignment(isTestModify=true,customTaskId="+item.id+",leadTaskId="+item.leadTaskId+")}' href='/AdminModule/createMassAssignment?isTestModify=true&customTaskId="+item.id+"&leadTaskId="+item.leadTaskId+"'>" +
									"						<img src=\"images/pencil.svg\" width=\"22\">" +
									"					</a>" +
									"               </div>" +		
									"</div>";
								}else if(+date1<+date2){
									timeRemain="<font color='red'>Expired</font>" +
									"</div>";
//									reOpen="<div class='button pull-right'><i class='fa fa-undo' aria-hidden='true'></i> Reopen</div>";
								}else{
									timeRemain="<i class='fa fa-clock-o' aria-hidden='true'></i>  "+diffDays+" days left" +
									"               <div class='' style='margin-top:13px;'>" +
									"					<a th:href='@{/createMassAssignment(isTestModify=true,customTaskId="+item.id+",leadTaskId="+item.leadTaskId+")}' href='/AdminModule/createMassAssignment?isTestModify=true&customTaskId="+item.id+"&leadTaskId="+item.leadTaskId+"'>" +
									"						<img src=\"images/pencil.svg\" width=\"22\">" +
									"					</a>" +
									"               </div>" +
											"</div>";
								}
							}
							var location="";
							if(item.location!=undefined && item.location!="" && item.location!=null)
								location="<i class='fa fa-map-marker' aria-hidden='true'></i>"+item.location;
							
							var divData="<div class='assignment-box'>" +
							"           <div class='col-lg-8 cl-md-8 col-sm-8'>" +
							"                <div class='assign-heading'>"+item.title+"</div>" +
							"                <div class='campaing'><i class='fa fa-check-square-o' aria-hidden='true'>" +
							"				 </i> "+item.activityType+"</div>" +
							"                <div class='assignment-loacation'>"+
												location+
							"				</div>" +
							"			</div>" +
							"              <div class='col-lg-4 cl-md-4 col-sm-4 text-right'>" +
											timeRemain+
							"             	<div class='assign-date-person'>" +
							" 				<div class='col-lg-8 col-md-8 col-sm-8'>" +
											setPeriorityHigh+
							"               	 <ul>" +
							"                	  <li>Start Date "+item.startDate+"</li>" +
							"                	  <li>Assigned by - "+item.ownerName+"("+item.owner_ecode+")</li>" +
							"                	 </ul>" +
							"				</div>" +
											reOpen+
							"              </div>" +
							"            </div>";
							$("#assignedTaskList").append(divData);
						})
					}else{
						modalAlertToShowCustomMessage("No Task Available",'warning');
						$("#assignedTaskList").append("<font color='red'>No Task Available</font>");
					}
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	 }

var selectedEcode={};
function searchfieldecode(event) {
	if (event.which == '13') {
		var data = event.target.value;
		if (!selectedEcode.hasOwnProperty(data.toLowerCase())){
			if ((data != '') && (data.length != 0)) {
				$.ajax({
					url : "/AdminModule/fetchUserInformation",
					type : 'POST',
					data : {
						e_code : data,
						_csrf : $('#csrfToken').val()

					},
					success : function(response) {
						if (null != response && undefined != response && response != '') {
							
							var maindiv=$("#accordion")[0].children.length;
							var count=1;
							if(maindiv!=0)
								count=parseInt($("#accordion").attr("countChield"))+1;
							var user=JSON.parse(response)
							if(user.isSelf=="Self")
								$("#isSelf").val(true);
							else if($("#isSelf").val()!="true")
								$("#isSelf").val(false);
							var isMOMRequiredValue="";
							var isPhotoRequired="";
							var isMomRequired=($("input[name=rc2]:checked").val()=="yes")?true:false;
							var photoRequiredValue=($("input[name=rc3]:checked").val()=="yes")?true:false;
							if(isMomRequired)
								isMOMRequiredValue="checked=checked";
							if(photoRequiredValue)
								isPhotoRequired="checked=checked"
							
							selectedEcode[data.toLowerCase()]="";
							var html="<div class='col-lg-12 addAttendee' elementNumber='"+count+"' isSelfAttendy='"+user.isSelf+"'> " +
									"<input type='hidden' value='' id='customTaskId_"+count+"' name='customTaskId'/>"+
									"<input type='hidden' value='' id='leadTaskId_"+count+"' name='leadTaskId'/>"+
									"<div class='attendy-box'>" +
									"<div class='panel panel-default'>" +
									"<div class='panel-heading'>" +
									"<h4 class='panel-title'>" +
									"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapseOne_"+count+"' aria-expanded='true'>" +
									""+user.isSelf+" <span class='ecode' >("+user.employeeCode+")</span></a>" +
									"<span class='dustbeen-icon'id='ecode' ecode='"+user.employeeCode+"'><a href='javascript:void(0)'><img src='images/delete-icon.svg' width='18'></a></span>" +
									"</h4>" +
									"</div>" +
									"<div id='collapseOne_"+count+"' class='panel-collapse collapse'>" +
									"<div class='panel-body'>" +
									"                            <div class='form-group'>" +
									"                              <div class='col-lg-6 col-md-6 col-sm-6 calander-icon'>" +
									"                               <input type='text' data-field='datetime' placeholder='Start date / time' id='ip-de-3-"+count+"' readonly=''>" +
									"                             </div>" +
									"                             <div class='col-lg-6 col-md-6 col-sm-6 calander-icon'>" +
									"                              <input type='text' data-field='datetime' placeholder='End date / time' id='ip-de-4-"+count+"' readonly=''>" +
									"                            </div>" +
									"                          </div>" +
									"                          <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10'>" +
									"									<input type='text' name='' id='addLocation' placeholder='Add Loaction'></div>" +
									/*"								 		<div class='col-lg-2 col-md-2 col-sm-2 locationIcon'>" +
									"										<img src=\"images/map.svg\" width=\"30\"></img>" +
									"							</div>" + */
									"                          </div>" +
									"                          <div class='border-reqiure'></div>" +
									"                          <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10'><label>Require MOM</label></div>" +
									"                            <div class='col-lg-2 col-md-2 col-sm-2 text-right'>" +
									"                              <span class='checkbox-btn required-checkbox'>" +
									"                                <input value='value-1' onchange='showMom(event,"+count+")' id='require_mom_"+count+"' name='rc_"+count+"' type='checkbox'"+isMOMRequiredValue+">" +
									"                                <label for='require_mom_"+count+"'></label>" +
									"                              </span>" +
									"                            </div>" +
									"                          </div>" +
									"							<div class='form-group' id='assignmentTemplate_"+count+"'>" +
									"                            <div class='col-lg-9 col-md-8 col-sm-8'>" +
									"                              <select id='assignmentTemplateList_"+count+"'>" +
																		$("#templateslist").html()+
									"                              </select>" +
									"                            </div>" +
									//"                            <div class='col-lg-3 col-md-4 col-sm-4'><input type='button' value='View' name=''></div>" +
									"     						</div>" +
									"                          <div class='border-reqiure'></div>" +
									"                          <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10'><label>Require Photos</label></div>" +
									"                            <div class='col-lg-2 col-md-2 col-sm-2 text-right'>" +
									"                              <span class='checkbox-btn required-checkbox'>" +
									"                                <input value='value-1' id='photo_require_"+count+"' name='rc21' type='checkbox' "+isPhotoRequired+">" +
									"                                <label for='photo_require_"+count+"'></label>" +
									"                              </span>" +
									"                            </div>" +
									"                          </div>" +
									"                          <div class='border-reqiure'></div>" +
									"                        <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10 reamark-creation-lable'><label>Remark</label></div>" +
									"                           <div class='col-lg-10 col-md-10 col-sm-10'>" +
									"                              <textarea rows='4' placeholder='Remark' class='remark-creation' id='remarks'></textarea>" +
									"                            </div>" +
									"                            <div class='col-lg-2 col-md-2 col-sm-2 text-right remark-edit' id='remark-edit_"+count+"'>" +
									"                              <img src='images/pencil.svg' width='20'>" +
									"                            </div>" +
									"                          </div>" +
									"                       </div>" +
									"                      </div>" +
									"                    </div>" +
									"                  </div>" +
									"                </div>";
							$("#accordion").append(html);
							$("#accordion").attr("countChield",count);
							$('#searchfieldecode').val('');
							deleteAddedAttendee();
							AnyPickerMade("#ip-de-3-"+count);
							
							var endDate=$("#ip-de-2").val();
							if(endDate!=null && endDate!="" && endDate!=undefined)
								AnyPickerMade("#ip-de-4-"+count,"new",endDate);
							else
								AnyPickerMade("#ip-de-4-"+count);
							
							edit_remark();
							if(!isMomRequired){
								$('#assignmentTemplate_'+count).slideUp();
							}

						} else {
							modalAlertToShowCustomMessage("User Does Not Exist in the system",'error');
							$('#searchfieldecode').val('');
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
						$("#wait").hide();
						console.log('jqXHR:');
						console.log(jqXHR);
						console.log('textStatus:');
						console.log(textStatus);
						console.log('errorThrown:');
						console.log(errorThrown);

					}
				});
			} else {
				$('#searchfieldecode').val('');
			}
		}else{
			modalAlertToShowCustomMessage("This Attendee already added",'warning');
			$('#searchfieldecode').val('');
		}
	}
}
var isDeleted=[];
function deleteAddedAttendee(){
	$(".dustbeen-icon").off('click');
	$(".dustbeen-icon").on("click", function(){
		var currentButton=this;
		swal({
	        title: "Are you sure",
	        text: "Do you want to Delete",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {
			$(currentButton).parents(".addAttendee").remove();
			var elementNumber=$(currentButton).parents(".addAttendee").children(0)[0].id.split("_")[1]
			var deletedId=$(currentButton).parents(".addAttendee").find("input#leadTaskId_"+elementNumber).val();
			if(deletedId!=""||deletedId!=undefined||deletedId!=null)
				isDeleted.push(deletedId);
			delete selectedEcode[$(currentButton).attr("ecode").toLowerCase()];
					
		});
	});
}

function showMom(event,count){
	var checkbox=event.target.checked;
	if(checkbox)
		  $('#assignmentTemplate_'+count).slideDown();
	else
		 $('#assignmentTemplate_'+count).slideUp();
}

function AnyPickerMade(id,modify,selectedDate1){

	if(modify!=undefined && modify=="modify"){
		if(id=="#ip-de-2" || id=="#ip-de-1"){
			$(".sDateClass").off('click');
			$(".eDateClass").off('click');
		}
		$(id).off('click');
		if(null !=selectedDate1 && selectedDate1!=""){
			$(id).AnyPicker(
					{
					  mode: "datetime",
					  showComponentLabel: true,
					  dateTimeFormat: "MMM dd yyyy, hh:mm AA",
					  selectedDate: new Date(selectedDate1),
					  minValue: new Date(new Date().getUTCFullYear(),new Date().getUTCMonth(),(new Date().getDate()-1),new Date().getHours(),new Date().getMinutes()),
					  onChange: function(iRow, iComp, oSelectedValues)
					  {
					    console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);
					  }
					});
		}else{
			$(id).AnyPicker(
					{
					  mode: "datetime",
					  showComponentLabel: true,
					  dateTimeFormat: "MMM dd yyyy, hh:mm AA",
					  minValue: new Date(new Date().getUTCFullYear(),new Date().getUTCMonth(),(new Date().getDate()-1),new Date().getHours(),new Date().getMinutes()),
					  onChange: function(iRow, iComp, oSelectedValues)
					  {
					    console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);
					  }
					});
		}
	}else if(id.includes("#ip-de-4-") &&  modify!=undefined && modify=="new"){
		$(id).AnyPicker(
				{
				  mode: "datetime",
				  showComponentLabel: true,
				  dateTimeFormat: "MMM dd yyyy, hh:mm AA",
				  selectedDate: new Date(selectedDate1),
				  minValue: new Date(new Date().getUTCFullYear(),new Date().getUTCMonth(),(new Date().getDate()-1),new Date().getHours(),new Date().getMinutes()),
				  onChange: function(iRow, iComp, oSelectedValues)
				  {
				    console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);
				  }
				});
	
	}else if(id.includes("#ip-de-3-") || id=="#ip-de-1"){
		$(id).off('click');
		$(id).AnyPicker(
				{
				  mode: "datetime",
				  showComponentLabel: true,
				  dateTimeFormat: "MMM dd yyyy, hh:mm AA",
				  selectedDate: new Date(),
				  minValue: new Date(new Date().getUTCFullYear(),new Date().getUTCMonth(),(new Date().getDate()-1),new Date().getHours(),new Date().getMinutes()),
				  onChange: function(iRow, iComp, oSelectedValues)
				  {
				    console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);
				  }
				});
	}else{
		$(id).off('click');
		$(id).AnyPicker(
				{
				  mode: "datetime",
				  showComponentLabel: true,
				  dateTimeFormat: "MMM dd yyyy, hh:mm AA",
				  minValue: new Date(new Date().getUTCFullYear(),new Date().getUTCMonth(),(new Date().getDate()-1),new Date().getHours(),new Date().getMinutes()),
				  onChange: function(iRow, iComp, oSelectedValues)
				  {
				    console.log("Changed Value : " + iRow + " " + iComp + " " + oSelectedValues);
				  }
				});
	}
}


function edit_remark(){
	$(".remark-edit").off('click');
	//Reamrk show hide function end//
	$(".remark-edit").on("click", function(){
	 $(this).parents(".panel-body").find(".reamark-creation-lable").hide();
	 $(this).parents(".panel-body").find(".remark-creation").show();
	});
	//Reamrk show hide function end//
}

function initAutocomplete(){
	var URL="/media/disk1/workspaceUpdate/girnarsoft-autofinance-vahangyan/AdminModule/src/main/resources/templates/map.html";
	$("#map1").load(function(){
		$("#wait").hide();
		
	});
	$("#map1").attr({
	    src:URL
	})
}

function fetchAlCompiledReport(){
	 var selectedMonth=$("#ip-de-2").val();
		if(null == selectedMonth || selectedMonth==""){
			modalAlertToShowCustomMessage('Please select Date', 'error');
			return false;
		}
		var date=selectedMonth.split(",");
		var dateNumber=date[0].trim();
		var month=monthMap[date[1].trim()];
		var year=date[2].trim();
		var compDate=dateNumber+"-"+month+"-"+year;
	$("#wait").show();
	 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/fetchAlCompiledReport",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify({
				"data":{
					"date":compDate
					}
				}),
			success:function(response){
				$("#wait").hide();
					if(response.status.code==200){
						var resData=response.data.alRegionWiseReport
						if(resData.length!=0){
							$("#reportTableDiv").show();
							$("#tableData").empty();
							var htmlHedder=" <tr><th data-th='Region'>Region</th>" +
								"<th data-th='NCL Units'>NCL Units</th>" +
								"<th data-th='UCL Units'>UCL Units</th>" +
								"<th data-th='NCL'>NCL Disb.(in Cr.)</th>" +
								"<th data-th='UCL'>UCL Disb.(in Cr.)</th>" +
								"<th data-th='Total'>Total</th>" +
								"<th data-th='space'>&nbsp;</th></tr>";
							$("#tableData").append(htmlHedder);
							$.each(resData,function(index,object){
								var html="<tr>"+
										" <td data-th=\"Region\">"+object.region+"</td>" +
										" <td data-th=\"NCL Units\">"+object.new_car_login_unit+"</td>" +
										" <td data-th=\"UCL Unit\">"+object.used_car_login_unit+"</td>" +
										"<td data-th=\"NCL\">"+Math.round(object.new_car_dis_cr)+"</td>" +
										" <td data-th=\"UCL\">"+Math.round(object.used_car_dis_cr)+"</td>" +
										"<td data-th=\"Total\">"+Math.round(object.totalDisbInCr)+"</td>" +
										"<td data-th=\"space\">" +
											"<a href=\"#\" onclick=\"fetchAlRegionWiseReport(\'"+object.region+"\',\'"+compDate+"\')\">" +
												"<img src=\"images/right-arrow-circular.svg\" width=\"22\">" +
											"</a>" +
										"</td>" +
									"</tr>";
								$("#tableData").append(html);
							})
							
							var htmlFooter="<tfoot><tr>" +
												"<td data-th='Total'>Total</td>" +
												"<td data-th='NCL Units'>"+response.data.grandNclTotalUnit+"</td>" +
												"<td data-th='UCL Units'>"+response.data.grandUclTotalUnit+"</td>" +
												"<td data-th='NCL'>"+Math.round(response.data.grandNclTotalCr)+" ("+((response.data.grandNclTotalCr/response.data.grandTotalCr)*100).toFixed(2)+"%)</td>" +
												"<td data-th='UCL'>"+Math.round(response.data.grandUclTotalCr)+" ("+((response.data.grandUclTotalCr/response.data.grandTotalCr)*100).toFixed(2)+"%)</td>" +
												"<td data-th='Total'>"+Math.round(response.data.grandTotalCr)+"</td>" +
												"<td data-th='space'>&nbsp;</td>" +
											"</tr></tfoot>"
								$("#tableData").append(htmlFooter);
						}else{
							$("#reportTableDiv").hide();
							modalAlertToShowCustomMessage("Data Not available", 'error');
						}
					}else{
						$("#reportTableDiv").hide();
						if(response.status.code==111)
							modalAlertToShowCustomMessage(response.status.message, 'warning');
						else
							modalAlertToShowCustomMessage(response.status.message, 'error');
					}
					$('#alReportSearchCompiledReport').trigger('blur');
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	 }

function fetchAlRegionWiseReport(region,date){
	 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/fetchAlRegionWiseReport",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify({
				"data":{
					"region":region,
					"date":date
					}
				}),
			success:function(response){
				console.log(JSON.stringify(response))
				$("#wait").hide();
				var resData=response.data.alEmpReport
				if(response.status.code==200){
					if(resData.length!=0){
						$("#viewMore").modal('show');
						$("#popuptableData").empty();
						var htmlHedder="<tr><th data-th='Region' width='15%'>RSM</th>" +
										"<th data-th='New Car Login Units' width='15%'>NCL Units</th>" +
										"<th data-th='Used Car Login Units' width='15%'>UCL Units</th>" +
										"<th data-th='NCL' width='15%'>NCL Disb.(in Cr.)</th>" +
										"<th data-th='UCL' width='15%'>UCL Disb.(in Cr.)</th>" +
										"<th data-th='Total' width='15%'>Total</th>";
						
						$("#popuptableData").append(htmlHedder);
						
						$.each(resData,function(index,object){
							var html= " <tr><td data-th='Region' >"+object.name+"<span id='ecode'>"+object.empCode+"</span></td>" +
									"<td data-th='New Car Login Units' class='dissable'><input clName='new_car_login_unit' type='number' pattern='[0-9]' onkeyup='updateRSMTotal(event)' id='ncl' class='dotValidation' name='' value="+object.new_car_login_unit+"></td>" +
									"<td data-th='Used Car Login Units' class='dissable'><input clName='used_car_login_unit' type='number' pattern='[0-9]' onkeyup='updateRSMTotal(event)' id='ucl' class='dotValidation' name='' value="+object.used_car_login_unit+"></td>" +
									"<td data-th='NCL' class='dissable'><input type='number' clName='new_car_dis_cr' onkeyup='updateRSMTotal(event)' name='' value="+object.new_car_dis_cr+"></td>" +
									"<td data-th='UCL' class='dissable'><input type='number' clName='used_car_dis_cr' onkeyup='updateRSMTotal(event)' name='' value="+object.used_car_dis_cr+"></td>" +
									"<td data-th='Total' class='dissable'><input type='text' name='' readonly='readonly' value="+(object.totalDisbInCr)+"></td>" +
									" <tr>"
							$("#popuptableData").append(html);
							dotValidation();
						});
						$("#region").html("");
						$("#region").html(region);
						$( "#editReportData" ).addClass( "editReportData" )
					}else{
						modalAlertToShowCustomMessage("Data Not available", 'error');
					}
				}else{
					modalAlertToShowCustomMessage(response.status.message, 'error');
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	 }

function downloadAlCompiledReport(){
	 var selectedMonth=$("#ip-de-2").val();
		if(null == selectedMonth || selectedMonth==""){
			modalAlertToShowCustomMessage('Please select Date', 'error');
			return false;
		}
		var date=selectedMonth.split(",");
		var dateNumber=date[0].trim();
		var month=monthMap[date[1].trim()];
		var year=date[2].trim();
		var compDate=dateNumber+"-"+month+"-"+year;

	 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/downloadAlCompiledReport",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify({
				"data":{
					"date":compDate,
					}
				}),
			success:function(response){
		          var link = document.getElementById("downloadExcelHidden1");
		          var resp=response;
		          if(resp.status.code==200){
		        	link.setAttribute("href", resp.data.downloadURL);
		            link.click(); 
		          }else{
		        	  modalAlertToShowCustomMessage(resp.data.responseMessage, 'error');
		          }
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	 }
function getNotValue(losNum){
	 // var htmlFragment = "";
	 $("#wait").show();
    $.ajax({
  	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
  	url: "/AdminModule/getNotValue",
      type: 'POST',
      //dataType: "JSON",
      //async:false,
      data: {
      	losNum:losNum,
			  _csrf:$('#csrfToken').val()
      },
      success: function(data) {
      	console.log(data);
      	 $("#wait").hide();
          if ($.isEmptyObject(data)) {
              console.log("no responseJSON found");
             // modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
          } else {
        	 // alert(data);
        	  document.getElementById('remarkValue').value=data;
          }
      }
      });
}
function saveMassAssignment(){
	var title=$("#title").val();
	if(title==undefined || title==null || title==""){
		modalAlertToShowCustomMessage("Please fill Title", 'warning');
		return false;
	}
	var enddate=$("#ip-de-2").val();
	if(enddate==undefined || enddate==null || enddate==""){
		swal({
	        title: "Are you sure",
	        text: "Do you want to Submit Without End Date",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: 'Yes, I am sure!',
	        cancelButtonText: "No, cancel it!",
	        closeOnConfirm: true,
	        closeOnCancel: false
		}).then(function(isConfirm) {
			saveMassAssignmentMain();
		});
	}else{
		saveMassAssignmentMain();
	}
}
function saveMassAssignmentMain(){
	var attendeeArray=[];
	var addAttendee=$(".addAttendee");
	$.each(addAttendee,function(index,attendee){
		var elementNumber=parseInt($(attendee).attr("elementNumber"))
		var isSelfAttendy=$(attendee).attr("isSelfAttendy");
		if(isSelfAttendy!="Self"){
//			"leadTaskId":$(attendee).find("input#leadTaskId_"+elementNumber).val(),
			var att={	"leadTaskId":$(attendee).find("input#leadTaskId_"+elementNumber).val(),
					"remarks":$(attendee).find("textarea#remarks").val(),
					"location":$(attendee).find("input#addLocation").val(),
					"isMomRequired":$(attendee).find('input[id="require_mom_'+elementNumber+'"]')[0].checked,
					"isPhotoRequired":$(attendee).find('input[id="photo_require_'+elementNumber+'"]')[0].checked,
					"ecode":$(attendee).find("#ecode").attr("ecode"),
					"isDeleted":false,
					"latitude":"",
					"longitude":"",
					"endDate":$(attendee).find("input#ip-de-4-"+elementNumber).val(),
					"startDate":$(attendee).find("input#ip-de-3-"+elementNumber).val(),
					"reopenFlag":"",
					"momTemplateId":($(attendee).find('input[id="require_mom_'+elementNumber+'"]')[0].checked)?$(attendee).find("select#assignmentTemplateList_"+elementNumber).val():"",
					"notes":"",
					"momStatus":""
			}
		attendeeArray.push(att);
		}
	});
	$.each(isDeleted,function(index,value){

			var att={	
					"leadTaskId":value,
					"isDeleted":true,
					}
		attendeeArray.push(att);
	});
	var title=$("#title").val();
	var taskSDate=$("#ip-de-1").val();
	if(title==undefined || title==null || title==""){
		modalAlertToShowCustomMessage("Please fill Title", 'warning');
		return false;
	}
	if(taskSDate==undefined || taskSDate==null || taskSDate==""){
		modalAlertToShowCustomMessage("Please fill Start Date", 'warning');
		return false;
	}
	/*if(attendeeArray.length==0){
		modalAlertToShowCustomMessage("Please Add Attendee", 'warning');
		return false;
	}*/
	var isMomRequired=($("input[name=rc2]:checked").val()=="yes")?true:false;
	var data1={"leadtaskId":$("#leadTaskId").val(),
				"title":title,
				"startDate":taskSDate,
				"endDate":$("#ip-de-2").val(),
				"activityType":$("#type").val(),
				"description":$("#description").val(),
				"location":$("#location").val(),
				"priority":($("#setPriHigh")[0].checked)?1:0,
				"isSelfAttendee":($("#isSelf").val()=="true")?true:false,
				"isCompleted":false,
				"latitude":"",
				"longitude":"",
				"isMomRequired":isMomRequired,
				"isPhotoRequired":($("input[name=rc3]:checked").val()=="yes")?true:false,
				"closingRemark":"",
				"closingReason":"",
				"momTemplateId":(isMomRequired)?$("#templateslist").val():"",
				"subTasks":attendeeArray,
				"reopenFlag":"",
				"notes":"",
				"momStatus":""
			};
	 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/createOrUpdateCustomTask",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify({
				"data":data1
			}),
			success:function(response){
//				console.log(JSON.stringify(response))
				if(response.status.code==200){
					createTaskResetForm();
					modalAlertToShowCustomMessage(response.status.message, 'success');
				}else{
					modalAlertToShowCustomMessage(response.status.message, 'error');
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	 
}

function createTaskResetForm(){
	$("#accordion").empty();
	$("#accordion").attr("countChield",0);
	$("#title").val("");
	$("#ip-de-2").val("");
//	$("#ip-de-1").val(new Date());
	$("#location").val("");
	$("#description").val("");
	$("#isSelf").val("");
	$("#ip-de-2").val("");
	$("#rc5").prop('checked', true);
	$("#rc8").prop('checked', true);
	$('.time-duration').slideDown();
	isDeleted=[];
	selectedEcode={};
	$("#isTestModify").val("");
	$("#customTaskId").val("");
	$("#leadTaskId").val("");
	$("#isSelf").val("");
	$("#attendecount").html("");
}

function fetchMassTaskModify(leadTaskId){
	 $.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/CustomTasksList",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'GET',
			data :{
				"leadTaskId":leadTaskId
			},
			success:function(response){
				console.log(JSON.stringify(response));
				if (null != response && undefined != response && response.status.code=='200') {

					var objectDate=response.data.customTaskDtos;
					var self="";
					$.each(objectDate,function(index,user){
						if(user.worker_ecode!=null){
							var maindiv=$("#accordion")[0].children.length;
							var count=1;
							//if(index==0)
								//fillTaskDetail(user);
							if(maindiv!=0)
								count=parseInt($("#accordion").attr("countChield"))+1;
							if(user.worker_ecode==user.owner_ecode){
								$("#isSelf").val(true);
								user["isSelf"]="Self";
								user["worker_ecode"]=user.owner_ecode;
								self="You";
							}else if($("#isSelf").val()!="true"){
								$("#isSelf").val(false);
								user["isSelf"]=user.workerName;
							}else{
								user["isSelf"]=user.workerName;
							}
							
							var isMomrequired="";
							var isPhotoRequired="";
							if(user.isMomrequired)
								isMomrequired="checked=checked"
							if(user.isPhotoRequired)
								isPhotoRequired="checked=checked";
								
							selectedEcode[user.worker_ecode.toLowerCase()]="";
							var html="<div class='col-lg-12 addAttendee' elementNumber='"+count+"' isSelfAttendy='"+user.isSelf+"'> " +
									"<input type='hidden' value='"+user.id+"' id='customTaskId_"+count+"' name='customTaskId'/>"+
									"<input type='hidden' value='"+user.leadTaskId+"' id='leadTaskId_"+count+"' name='leadTaskId'/>"+
									"<div class='attendy-box'>" +
									"<div class='panel panel-default'>" +
									"<div class='panel-heading'>" +
									"<h4 class='panel-title'>" +
									"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapseOne_"+count+"' aria-expanded='true'>" +
									""+user.isSelf+" <span class='ecode' >("+user.worker_ecode+")</span></a>" +
									"<span class='dustbeen-icon'id='ecode' ecode='"+user.worker_ecode+"'><a href='javascript:void(0)'><img src='images/delete-icon.svg' width='18'></a></span>" +
									"</h4>" +
									"</div>" +
									"<div id='collapseOne_"+count+"' class='panel-collapse collapse'>" +
									"<div class='panel-body'>" +
									"                            <div class='form-group'>" +
									"                              <div class='col-lg-6 col-md-6 col-sm-6 calander-icon'>" +
									"                               <input type='text' value="+user.startDate+" data-field='datetime' placeholder='Start date / time' id='ip-de-3-"+count+"' readonly=''>" +
									"                             </div>" +
									"                             <div class='col-lg-6 col-md-6 col-sm-6 calander-icon'>" +
									"                              <input type='text' value='' data-field='datetime' placeholder='End date / time' id='ip-de-4-"+count+"' readonly=''>" +
									"                            </div>" +
									"                          </div>" +
									"                          <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10'>" +
									"									<input type='text' value=\""+user.location+"\" name='' id='addLocation' placeholder='Add Loaction'></div>" +
									/*"								 		<div class='col-lg-2 col-md-2 col-sm-2 locationIcon'>" +
									"										<img src=\"images/map.svg\" width=\"30\"></img>" +
									"							</div>" +*/
									"                          </div>" +
									"                          <div class='border-reqiure'></div>" +
									"                          <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10'><label>Require MOM</label></div>" +
									"                            <div class='col-lg-2 col-md-2 col-sm-2 text-right'>" +
									"                              <span class='checkbox-btn required-checkbox'>" +
									"                                <input value='value-1' onchange='showMom(event,"+count+")' id='require_mom_"+count+"' name='rc_"+count+"' type='checkbox' "+isMomrequired+">" +
									"                                <label for='require_mom_"+count+"'></label>" +
									"                              </span>" +
									"                            </div>" +
									"                          </div>" +
									"							<div class='form-group' id='assignmentTemplate_"+count+"'>" +
									"                            <div class='col-lg-9 col-md-8 col-sm-8'>" +
									"                              <select id='assignmentTemplateList_"+count+"'>" +
																		$("#templateslist").html()+
									"                              </select>" +
									"                            </div>" +
									"     						</div>" +
									"                          <div class='border-reqiure'></div>" +
									"                          <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10'><label>Require Photos</label></div>" +
									"                            <div class='col-lg-2 col-md-2 col-sm-2 text-right'>" +
									"                              <span class='checkbox-btn required-checkbox'>" +
									"                                <input value='value-1' id='photo_require_"+count+"' name='rc21' "+isPhotoRequired+" type='checkbox'>" +
									"                                <label for='photo_require_"+count+"'></label>" +
									"                              </span>" +
									"                            </div>" +
									"                          </div>" +
									"                          <div class='border-reqiure'></div>" +
									"                        <div class='form-group'>" +
									"                            <div class='col-lg-10 col-md-10 col-sm-10 reamark-creation-lable'><label>Remark</label></div>" +
									"                           <div class='col-lg-10 col-md-10 col-sm-10'>" +
									"                              <textarea rows='4' placeholder='Remark' value=\""+user.remarks+"\" class='remark-creation' id='remarks'>"+user.remarks+"</textarea>" +
									"                            </div>" +
									"                            <div class='col-lg-2 col-md-2 col-sm-2 text-right remark-edit'  id='remark-edit_"+count+"'>" +
									"                              <img src='images/pencil.svg' width='20'>" +
									"                            </div>" +
									"                          </div>" +
									"                       </div>" +
									"                      </div>" +
									"                    </div>" +
									"                  </div>" +
									"                </div>";
							if(user.worker_ecode!=user.owner_ecode){
								$("#accordion").append(html);
								$("#accordion").attr("countChield",count);
								$('#searchfieldecode').val('');
								if(user.isMomrequired){	
									$("#assignmentTemplateList_"+count).val(user.momTemplateId);
									$('#assignmentTemplate_'+count).slideDown();
								}else{
									 $('#assignmentTemplate_'+count).slideUp();
								}
								deleteAddedAttendee();
								AnyPickerMade("#ip-de-3-"+count,"modify",user.startDate);
								if(user.endDate!=null)
									AnyPickerMade("#ip-de-4-"+count,"modify",user.endDate);
								else
									AnyPickerMade("#ip-de-4-"+count,"modify","");
								edit_remark();
								if(null!=user.remarks)
									$("#remark-edit_"+count).click();
							}
							
						}else{
							fillTaskDetail(user);
						}
					});
					if(self==""){
						$("#attendecount").html(" "+(objectDate.length-1)+" Attendee");
					}else{
						if(objectDate.length==1)
							$("#attendecount").html("You added");
						else
							$("#attendecount").html(self+" + "+(objectDate.length-1)+" Attendee");
					}
				} else {
					modalAlertToShowCustomMessage("User Does Not Exist in the system",'warning');
					$('#searchfieldecode').val('');
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
}

function fillTaskDetail(taskObject){
	$("#type").val(taskObject.activityType);
	$("#title").val(taskObject.title);
	$("#description").html(taskObject.description);
	$("#location").val(taskObject.location);
	$("#type").val(taskObject.activityType);
	
	if(taskObject.priority!=0)
		$("#setPriHigh").attr("checked","checked");
	
	if(taskObject.isMomrequired){
		$("#rc5").attr("checked","checked");
		$("#templateslist").val(taskObject.momTemplateId);
		$('.time-show').click();
	}else{
		$("#rc6").attr("checked","checked");
		$('.time-hide').click()
	}
	
	if(taskObject.isPhotoRequired){
		$("#rc7").attr("checked","checked");
	}else{
		$("#rc8").attr("checked","checked");
	}
	AnyPickerMade("#ip-de-1","modify",taskObject.startDate);
	if(taskObject.endDate!=null)
		AnyPickerMade("#ip-de-2","modify",taskObject.endDate);
	else
		AnyPickerMade("#ip-de-2","modify","");
	
}


function insuranceLeadDetail(losnumber) {
	var parameter = 'losnumber=' + $('#insuranceLeadLos').val();
	eventTagTypeResponseDup = makeAjaxCall('fetchInsuranceLeadDetails',
			parameter);
	// JSON.stringify(eventTagTypeResponseDup);
	// alert(eventTagTypeResponseDup);
	var flag=true;
	 var html = "";
	 var ncbValue="";
	 var depcapname="";
	$.each($.parseJSON(eventTagTypeResponseDup),function(index, item) {
		if(item.losnumber!=null){
			flag=true;
			html+='<input type=hidden id="tariff" value='+item.tariff+'>';
			html+='<input type=hidden id="tp" value='+item.tp+'>';
			html+='<input type=hidden id="pa" value='+item.pa+'>';
			html+='<input type=hidden id="hiddenIdvAmount" value='+item.idv+'>';
						html += ' <div class="col-lg-6 col-sm-6">';
						html += ' <div class="assignee_name">' + item.cusName
								+ '</div>';
						html += '<div class="data_list"> <span class="assign-fisrt">LOS Number </span><span class="assign-second">'
								+ item.losnumber + '</span> </div>';
						html += '<div class="data_list"><span class="assign-fisrt">Mo.</span><span class="assign-second">'
								+ item.altMobile + '</span> </div>';
						html += ' <div class="data_list"><span class="assign-fisrt">Address -</span><span class="assign-second">'
								+ item.state
								+ ''
								+ item.city
								+ ' </span></div>';
						html += '<div class="data_list"><span class="assign-fisrt">Vehicle</span><span class="assign-second">'
								+ item.make
								+ ''
								+ item.model
								+ '</span> </div>';
						if (item.isRollover == true) {
							html += '<div class="data_list"><span class="assign-fisrt">Policy type.</span><span class="assign-second">Rollover</span> </div>';
						} else {
							html += '<div class="data_list"><span class="assign-fisrt">Policy type.</span><span class="assign-second">Renewal</span> </div>';
						}
						html += '<div class="data_list"><span class="assign-fisrt">Previous Insurance</span><span class="assign-second">'
								+ item.previousInsurer + '</span> </div>';
						html += ' <div class="data_list"><span class="assign-fisrt">Expiry Date -</span>';
						html += '<span class="price-editible date-textbox calander-icon"><input type="text"  style="color:red" name="" id="from" value='+ item.expiryDate +'></span></div>';
						html += '</div>';

						html += ' <div class="col-lg-6 col-sm-6 box-border">';
						// html+='<div class="editbtn pull-right"><input
						// type="button" value="Edit" name=""></div>';
						html += ' <div class="data_list"><span class="assign-second">IDV - </span> <span class="price-second"></span><span class="price-editible"><input type="text" id="idv" name="" value='
								+ item.idv + ' ></span></div>';

						html += ' <div class="data_list"><span class="assign-second">Basic Premium - </span><span class="price-second"></span><span class="price-editible"><input type="text"  value='
								+ item.basicPremium
								+ ' id="basicPremium" name=""></span></div>';

						html += '<div class="data_list"><span class="assign-second">Total Taxes - </span><span class="price-second"> </span> <span class="price-editible"><input type="text" id="taxes" value='
								+ item.taxes + ' name=""></span></div>';
						//html+= '<input type=hidden  >';
						html += ' <div class="data_list"> <span class="assign-second">NCB(0.0%)</span><span class="price-editible"><label class="switch-toggle" id="ncb">';
						html += '<input type="checkbox" checked="" id="checkNcb"><span class="slider round"></span></label><div class="nbc-amount mrg-T10" style="display: block;">';
						html += '<select id="ncbValue">';
                        ncbValue=item.ncbvalue;
                        
                        var res = ncbValue.split(",");
                        $.each(res,function(index,value){
                        	html += '<option id="ncbID">'+value+'</option>' ;
                        });
                        
						html +='</select> </div></span></div>';
						
						html += ' <div class="data_list"><span class="assign-second">DEP Cap - </span><span class="price-editible">';
						html += '<label class="switch-toggle" id="dep_cap" >';
						html += ' <input type="checkbox" id="checkDepCap" >';
						html += ' <span class="slider round"></span>';
						html += '</label>';

						html += '<div class="row dep-amount mrg-T10" id="depCapDiv" style="display:block"> ';
						html += '<div class="col-lg-6">';
						html += ' <select id="depCovNameList" onchange="changeDepValue(this.value);" >';
					
						depcapname = item.depcapname;
				
						$.each(depcapname, function(id, name) {
							
							html += '<option id="depId" value="' + id + '">'
									+ name + '</option>';
						});

						html += '</select>';
						html += ' </div>';
						html += ' <div class="col-lg-6"><span class="price-second data-bg" id="depCovPrice">'
								+item.zeroDepAmt + '</span></div>';
						html += ' </div>';

						html += ' </span>';
						html += '</div>';

						html += ' <div class="data_list"> <span class="assign-second">Discount - </span><span class="price-second"></span> <span class="price-editible"><input type="text" id="discount" value='
								+ item.discount + ' name=""></span></div>';
						html += ' <div class="data-bg"> <span class="assign-second">Total - </span> <span class="price-second" id="totalAmount">'+item.premium + '</span> </div>';
						html += '</div>';
						html += '<div class="add-remark"><span class="remarks-img"><img src="images/remark.svg" width="30"> Add Remark</span> <span class="remarkbox"><textarea placeholder="Add Remarks here..." rows="3" id="addRemarks"></textarea></span><span class="sendbtn"><a href="#"><img src="images/sent-mail.svg"></a></span> </div>';
						html += '<div class="col-lg-12"> <div class="self_right" ><div class="selft-btn" onclick="totalCalculatePremiumAmount()">Calculate</div> <input type="button" value="Update" data-toggle="modal" data-target="#update_status" onclick="updateInsuranceLeadDetails()"></div></div>';
	}else{
		flag=false;
		modalAlertToShowCustomMessage("losnumber dose not exist",'warning');
	}
	
	});
	
	if(flag==true){
	$('#insuraceList').html(html);
	$('#checkDepCap').prop('checked', true).trigger("change");
	//$("#ncbValue").val(ncbValue).change();
	//$("#ncbValue").val(ncbValue);
	//$("#ncbValue ").attr("disabled", false);
	
	initEdit();
	$('#viewResult').show();
	}
	else{
		$('#viewResult').hide();
	}
	
	}

	


function updateInsuranceLeadDetails() {
	totalCalculatePremiumAmount();
	var totalAmount = document.getElementById('totalAmount').innerHTML;
	 var zeroDepAmt=document.getElementById('depCovPrice').innerHTML;
//	 var date=document.getElementById('date').innerHTML;
	if($('#addRemarks').val()!=""){
	var finalData = {
		"losnumber" : $('#insuranceLeadLos').val(),
		"date" : $('#from').val(),
		"idv" : $('#idv').val(),
		"ncb" : $('#ncbValue').val(),
		"depCovId" : $('#depCovNameList').val(),
		"discount" : $('#discount').val(),
		"basicPremium" : $('#basicPremium').val(),
		"taxes" : $('#taxes').val(),
		"premium" :totalAmount,
		"zeroDepAmt" : zeroDepAmt,
		"tariff" : $('#tariff').val(),
		"tp" : $('#tp').val(),
		"pa" : $('#pa').val()
	};
	
	
	$.ajax({
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
			'X-CSRF-TOKEN' : $('#csrfToken').val()
		},
		type : 'POST',
		url : "/AdminModule/updateInsuranceLeadDetails",
		dataType : "json",
		data : JSON.stringify(finalData),
		success : function(response) {
		
			insuranceLeadDetail();
			modalAlertToShowCustomMessage(response.data.statusMessage,
					'success');
			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#wait").hide();
			console.log('jqXHR:');
			console.log(jqXHR);
			console.log('textStatus:');
			console.log(textStatus);
			console.log('errorThrown:');
			console.log(errorThrown);
		}
	});
	}
	else{
		
		modalAlertToShowCustomMessage("Please fill remarks",'warning');
		

	}
}

function totalCalculatePremiumAmount() {
	var checkDepCap = document.getElementById("checkDepCap").checked;
	var checkNcb = document.getElementById("checkNcb").checked;
	var losNum = document.getElementById("insuranceLeadLos").value;
	var depCovPrice = document.getElementById('depCovPrice').innerHTML;
	var idvAmount = document.getElementById("idv").value;
	var basicPremium = document.getElementById("basicPremium").value;
	var totalTaxes = document.getElementById("taxes").value;
	var ncbValue = document.getElementById("ncbValue").value;
	var discountValue = document.getElementById("discount").value;
	var depCovId = document.getElementById("depCovNameList").value;
	var tariff = document.getElementById("tariff").value;
	var tp = document.getElementById("tp").value;
	var pa = document.getElementById("pa").value;
	var htmlFragment = "";
	var data = {
		"depCovId" : depCovId,
		"idvAmount" : idvAmount,
		"basicPremium" : basicPremium,
		"totalTaxes" : totalTaxes,
		"ncbValue" : ncbValue,
		"checkDepCap" : checkDepCap,
		"checkNcb" : checkNcb,
		"discountValue" : discountValue,
		"tariff" : tariff,
		"tp": tp,
		"pa": pa
	};
	
	$.ajax({
		url : "/AdminModule/totalCalculatePremiumAmount",
		type : 'POST',
		data : {
			"depCovId" : depCovId,
			"idvAmount" : idvAmount,
			"basicPremium" : basicPremium,
			"totalTaxes" : totalTaxes,
			"ncbValue" : ncbValue,
			"checkDepCap" : checkDepCap,
			"checkNcb" : checkNcb,
			"discountValue" : discountValue,
			"tariff" : tariff,
			"tp": tp,
			"pa": pa,
			_csrf: $('#csrfToken').val()
		},
		success : function(data) {
			var responseData = JSON.parse(data);
			
        	document.getElementById("basicPremium").value=responseData.basicPremium;
        	document.getElementById("taxes").value=(responseData.taxes).toFixed(0);
        	document.getElementById("totalAmount").innerHTML=responseData.premium;
        	//document.getElementById("total").innerHTML="<img src='images/rupee.svg' width='15'>"+inrFormat(responseData.premium);
		
		}
	});

	
}

function changeDepValue(val) {
	
	  
	var checkDepCap = document.getElementById("checkDepCap").checked;
	var checkNcb = document.getElementById("checkNcb").checked;
	var losNum = document.getElementById("insuranceLeadLos").value;
	// var depCovPrice=document.getElementById('depCovPrice').innerHTML;
	var idvAmount = document.getElementById("idv").value;
	var basicPremium = document.getElementById("basicPremium").value;
	var totalTaxes = document.getElementById("taxes").value;
	var ncbValue = document.getElementById("ncbValue").value;
	var discountValue = document.getElementById("discount").value;
	var tariff = document.getElementById("tariff").value;
	var tp = document.getElementById("tp").value;
	var pa = document.getElementById("pa").value;

	var zeroDepMul = val;
	
	var htmlFragment = "";
	
	  var dataRequest={ 
			  "losNum":losNum,
			  "idvAmount":idvAmount,
			  "basicPremium":basicPremium,
			  "totalTaxes":totalTaxes,
			  "ncb":ncbValue,
			  "checkDepCap":checkDepCap,
			  "checkNcb":checkNcb,
			  "discountValue":discountValue
		  };
	 
	$.ajax({
				// headers: {'Accept': 'application/json', 'Content-Type':
				// 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
				url : "/AdminModule/totalCalculateDepCapAmount",
				type : 'POST',
				// dataType: "JSON",
				// async:false,
				data : {
					losNum : losNum,
					idvAmount : idvAmount,
					basicPremium : basicPremium,
					totalTaxes : totalTaxes,
					ncbValue : ncbValue,
					zeroDepMul : zeroDepMul,
					checkDepCap : checkDepCap,
					checkNcb : checkNcb,
					discountValue : discountValue,
					checkDepCap : checkDepCap,
					tariff : tariff,
					tp : tp,
					pa : pa,
					_csrf : $('#csrfToken').val()
				},
				success : function(data) {
					
					console.log(data);
					if ($.isEmptyObject(data)) {
						console.log("no responseJSON found");
					} else {
						var responseData = JSON.parse(data);
						console.log(responseData);
						
						document.getElementById("depCovPrice").innerHTML = (responseData.zeroDepAmt)
								.toFixed(0);
						
						if (undefined != responseData) {
							// alert("responseData");
						}
					}
				}
			});
}
function getNotValueBypage(){
	  var losNum = document.getElementById("losNumber").value; 
	  document.getElementById('editUserLosNumber').value=losNum; 
	  getNotValue(losNum);
}
function getUploadPdf(losNum){

	 // var htmlFragment = "";
	$('#wait').show();
   $.ajax({
 	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
 	url: "/AdminModule/getUploadPdf",
     type: 'POST',
     //dataType: "JSON",
     //async:false,
     data: {
     	losNum:losNum,
			  _csrf:$('#csrfToken').val()
     },
     success: function(data) {
     	console.log(data);
     	$('#wait').hide();
         if ($.isEmptyObject(data)) {
             console.log("no responseJSON found");
             document.getElementById('viewPdfDiv').style.display='none';
        	 //alert(data);
       	$("#PdfViewUrl").attr("href", '');
            // modalAlertToShowCustomMessage('Oops There Is Some Error', 'error');
         } else {
        	 document.getElementById('viewPdfDiv').style.display='block';
        	 //alert(data);
       	$("#PdfViewUrl").attr("href", data);
       	 // document.getElementById('remarkValue').value=data;
         }
     }
     });
}
	 function deletePolicyData(){
		  //var leadTaskId = document.getElementById("leadTaskId").value;
		  var losNum = document.getElementById("editUserLosNumber").value;
		  
			swal({
		        title: "Are you sure?",
		        text: "Do You want to Delete Policy.",
		        type: "warning",
		        showCancelButton: true,
		        confirmButtonColor: '#DD6B55',
		        confirmButtonText: 'Yes, I am sure!',
		        cancelButtonText: "No, cancel it!",
		        closeOnConfirm: true,
		        closeOnCancel: false
			}).then(function(isConfirm) {
				 if (isConfirm) {
						$('#wait').show();
		  $.ajax({
			 	//  headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN':$('#csrfToken').val()},
			 	url: "/AdminModule/deletePolicyData",
			     type: 'POST',
			     //dataType: "JSON",
			     //async:false,
			     data: {
			     	losNum:losNum,
						  _csrf:$('#csrfToken').val()
			     },
			     success: function(data) {
			    	 $('#wait').hide();
			    	 console.log(data);
			    	 //salert(data);
			     	console.log(data);
			         if ($.isEmptyObject(data)) {
			             console.log("no responseJSON found");
			         } else {
					if(data=='success'){
						//createTaskResetForm();
						//modalAlertToShowCustomMessage('Reassign successfully!', 'success');
						//modalAlertToShowCustomMessage("Policy Deleted successfully!", 'success');
						
						
	            		swal(
								{
									title : "Policy Deleted successfully!",
									text : "",
									type : "success",
								}).then(function() {
									location.reload();
									
						});
						
						
						
						 document.getElementById('viewPdfDiv').style.display='none';
					       	$("#PdfViewUrl").attr("href", "");
					}else{
						modalAlertToShowCustomMessage("Oops something went wrong.Please try again.", 'error');
					}
			       	 // document.getElementById('remarkValue').value=data;
			         }
			     }
			     });
				 	}
			});
	 
	 }
	function getUploadPdfByPage(){
		  var losNum = document.getElementById("losNumber").value; 
		  document.getElementById('editUserLosNumber').value=losNum; 
		  getUploadPdf(losNum);
	} 
	
	function isNumberKey(evt){
	    var charCode = (evt.which) ? evt.which : event.keyCode
	    if (charCode > 31 && (charCode < 48 || charCode > 57))
	        return false;
	    return true;
	}
	
	function checkValidationValue(evt){
		  var  calculayePayzappList= document.getElementById("calculayePayzappList").value;	
		  if(null != calculayePayzappList && "Mobile Number" ==calculayePayzappList){
			    var charCode = (evt.which) ? evt.which : event.keyCode
			    	    if (charCode > 31 && (charCode < 48 || charCode > 57))
			    	        return false;
			    	    return true;
		 
		  }
	}
	
	function checkValidationemail(val){	  

		  //alert("if");
		  var  calculayePayzappList= document.getElementById("calculayePayzappList").value;	
		  if(null != calculayePayzappList && "Mobile Number" ==calculayePayzappList){
			  var mobNum=document.getElementById("calculateShareId").value;
			  if (/^[6789]\d{9}$/.test(mobNum)) {
				    // value is ok, use it
				} else {
					 modalAlertToShowCustomMessage('Please Enter Correct 10 Digit Mobile Number', 'error');
					  return false;
				}
		  }
		  else{  
			  var emailId=document.getElementById("calculateShareId").value;
				  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				  if(emailId=="" || emailId==null){
					  modalAlertToShowCustomMessage('Please enter email ID', 'error');
					  return false;
				  }
			        if (reg.test(emailId) == false) 
			        {
			        	modalAlertToShowCustomMessage('Please Enter Correct Email Id ', 'error');
						  return false;
			        }
		  } 

}
	
	function getModelYearList(){
		 var ecode=document.getElementById("eCodeHomePage").value;
		 var pageName="";
		//alert("fff");
		//alert($('#cityListDetail li').length);
		$('#wait').show();
		 if ($('#modelYearDetails li').length != 0){
			 $('#wait').hide();
			 	return;
		 }
		// alert("dfgdg");
		 $.ajax({
		    	url: "/AdminModule/getModelYearList",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	pageName:pageName,
		        	ecode:ecode,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
		        	//$('#cityListDetail li').remove();
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		            	var htmlFragment="";
							$.map(data, function(item){ 
	                    	htmlFragment+= " <li><span class='act-dct checkbox-btn'><input  type='checkbox' class='act-dct checkbox-btn' " +
	                    			" name='rc2' id='"+item+"' value='"+item+"' onchange='addSearchFilter(this.value)'><label for='"+item+"'><span>"+item+"</span></label></span> </li> ";
							 });
							//alert(htmlFragment);
							$('#modelYearDetails').append(htmlFragment);
							
		            }
		            $('#wait').hide();
		        }
		        });
		
	}
	
	
	
	function getExpiryDateList(){
		 var ecode=document.getElementById("eCodeHomePage").value;
		 var pageName="";
		//alert("fff");
		//alert($('#cityListDetail li').length);
		$('#wait').show();
		 if ($('#getExpiryDateDetils li').length != 0){
			 $('#wait').hide();
			 	return;
		 }
		// alert("dfgdg");
		 $.ajax({
		    	url: "/AdminModule/getExpiryDateList",
		        type: 'POST',
		        //dataType: "JSON",
		        //async:false,
		        data: {
		        	pageName:pageName,
		        	ecode:ecode,
					  _csrf:$('#csrfToken').val()
		        },
		        success: function(data) {
		        	console.log(data);
		        	//$('#cityListDetail li').remove();
		            if ($.isEmptyObject(data)) {
		                console.log("no responseJSON found");
		            } else {
		            	var htmlFragment="";
							$.map(data, function(item){ 
	                    	htmlFragment+= " <li><span class='act-dct checkbox-btn'><input  type='checkbox' class='act-dct checkbox-btn' " +
	                    			" name='rc2' id='"+item+"' value='"+item+"' onchange='addSearchFilter(this.value)'><label for='"+item+"'><span>"+item+"</span></label></span> </li> ";
							 });
							//alert(htmlFragment);
							$('#getExpiryDateDetils').append(htmlFragment);
							
		            }
		            $('#wait').hide();
		        }
		        });
		
	}
	var obj = {"taskStatusFilter": [], "CityStatusFilter": [], "branchStatusFilter": [], "approvalStatusFilter": [],
				"modelYearStatusFilter": [], "expirtDateStatusFilter": []};
	function addSearchFilter(val){
		
		if($("#taskStatusFilter").hasClass("active")){
			/*if($('#'+val+'').is(':checked')){*/
			if(document.getElementById(val).checked){
			obj.taskStatusFilter.push(val);
			}else{
				var index = (obj.taskStatusFilter).indexOf(val);
			    (obj.taskStatusFilter).splice(index, 1);
				//obj.taskStatusFilter.list.splice( list.indexOf(val), 1 );
			}
			
		}else if($("#CityStatusFilter").hasClass("active")){
			
			/*if($('#'+val+'').is(':checked')){*/
			if(document.getElementById(val).checked){
				obj.CityStatusFilter.push(val);
				}else{
					var index = (obj.CityStatusFilter).indexOf(val);
				    (obj.CityStatusFilter).splice(index, 1);
					//obj.taskStatusFilter.list.splice( list.indexOf(val), 1 );
				}
		}else if($("#branchStatusFilter").hasClass("active")){
			/*if($('#'+val+'').is(':checked')){*/
			if(document.getElementById(val).checked){
				obj.branchStatusFilter.push(val);
				}else{
					var index = (obj.branchStatusFilter).indexOf(val);
				    (obj.branchStatusFilter).splice(index, 1);
					//obj.taskStatusFilter.list.splice( list.indexOf(val), 1 );
				}
		}else if($("#approvalStatusFilter").hasClass("active")){
			/*if($('#'+val+'').is(':checked')){*/
			if(document.getElementById(val).checked){
				obj.approvalStatusFilter.push(val);
				}else{
					var index = (obj.approvalStatusFilter).indexOf(val);
				    (obj.approvalStatusFilter).splice(index, 1);
					//obj.taskStatusFilter.list.splice( list.indexOf(val), 1 );
				}
		}else if($("#modelYearStatusFilter").hasClass("active")){
			/*if($('#'+val+'').is(':checked')){*/
			if(document.getElementById(val).checked){
				obj.modelYearStatusFilter.push(val);
				}else{
					var index = (obj.modelYearStatusFilter).indexOf(val);
				    (obj.modelYearStatusFilter).splice(index, 1);
					//obj.taskStatusFilter.list.splice( list.indexOf(val), 1 );
				}
		}else if($("#expirtDateStatusFilter").hasClass("active")){
			/*if($('#'+val+'').is(':checked')){*/
			if(document.getElementById(val).checked){
				obj.expirtDateStatusFilter.push(val);
				}else{
					var index = (obj.expirtDateStatusFilter).indexOf(val);
				    (obj.expirtDateStatusFilter).splice(index, 1);
					//obj.taskStatusFilter.list.splice( list.indexOf(val), 1 );
				}
		}
		//alert(obj);
		

		
	}
	function clearUploadPolicyData(){
		//alert("gfdg");
		 document.getElementById('uploadFiles').value="";
	}
	
	function trimDisb(event){
		if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
		        ((event.which < 48 || event.which > 57) &&
		            (event.which != 0 && event.which != 8))) {
		        event.preventDefault();
		    }

		    var text = $(event.target).val();

		    if ((text.indexOf('.') != -1) &&
		        (text.substring(text.indexOf('.')).length > 2) &&
		        (event.which != 0 && event.which != 8)) {
		       // event.preventDefault();
		    	$(event.target).val(text.substring(0,text.indexOf('.')+3));
		    	
		    }
	}
	
	function selectMoMValidation(){
	    if( $("#applicabilityType").val()==1){
	    	 $('#ecode').hide();
	    	 $('#department').hide();
	    	 $('#designation').hide();
	    }else if( $("#applicabilityType").val()==2){
	    	 $('#department').hide();
	    	 $('#designation').hide();
	    	 $('#ecode').show();
	    }else if( $("#applicabilityType").val()==3){
	    	 $('#department').hide();
	    	 $('#ecode').hide();
	    	 $('#designation').show();
	    }else if( $("#applicabilityType").val()==4){
	    	 $('#designation').hide();
	    	 $('#ecode').hide();
	    	 $('#department').show();
	    }
	}
	

	function saveCreatedMoM(){
		var rowsElement=$(".product-sec")
		var ColNameTypeData={};
		var colNameValueData={};
		var eCodeApplicabilityForData=[];
		var designationApplicabilityForData=[];
		var departmentApplicabilityForData=[];
		var templateNameData=$("#fileName").val();
		var applicabilityTypeData=$("#applicabilityType").val();
		var blankclNameStatus=false;
		var blankclOptionStatus=false;
		$.each(rowsElement,function(index,element){
			if(index!=0){
			var clType=$(element).find(".divselector");
			var clName=$(element).find(".colName");
			if(clName.val()=="" || clName.val()==undefined){
				blankclNameStatus=true;
				return false;
			}
			ColNameTypeData[clName.val()+""]=parseInt(clType.val());
			if(clType.val()==2 || clType.val()==5){
				var clOption=$(element).find(".addedTag input[type=hidden]");
				if(clOption.length==0){
					blankclOptionStatus=true;
					return false;
				}
				var optionString="";
				$.each(clOption,function(index,inputValue){
					var optionValue=inputValue.value;
					optionString=optionString+","+optionValue
					
				})
				colNameValueData[clName.val()+""]=optionString.slice(1);
			}
			}
		});
		
		if(applicabilityTypeData==2){
			$.each($(".eCodeApplicabilityForField"),function(index,obj){
				eCodeApplicabilityForData.push(obj.value);
			});
		}else if(applicabilityTypeData==3){
			$.each($(".designationApplicabilityForField"),function(index,obj){
				designationApplicabilityForData.push(obj.value);
			});
		}else if(applicabilityTypeData==4){
			$.each($(".token"),function(index,obj){
				departmentApplicabilityForData.push($(obj).attr("data-value"));
			});
		}
		
		if(rowsElement.length<=1){
			 modalAlertToShowCustomMessage('Please add MoM Row', 'error');
			  return false;
		}
		
		if(blankclNameStatus){
			modalAlertToShowCustomMessage('Please fill All Column Name', 'error');
			  return false;
		}
		
		if(blankclOptionStatus){
			modalAlertToShowCustomMessage('Please add Option in respective column', 'error');
			  return false;
		}
		
		if(templateNameData==""){
			 modalAlertToShowCustomMessage('Please fill Template Name', 'error');
			  return false;
		}
		
		if(eCodeApplicabilityForData.length==0 && applicabilityTypeData==2 ){
			 modalAlertToShowCustomMessage('Please add ecode', 'error');
			  return false;
		}
		
		if(designationApplicabilityForData.length==0 && applicabilityTypeData==3){
			 modalAlertToShowCustomMessage('Please add designation', 'error');
			  return false;
		}
		
		if(departmentApplicabilityForData.length==0 && applicabilityTypeData==4){
			 modalAlertToShowCustomMessage('Please add department', 'error');
			  return false;
		}
		
		
		var momData={
				momTemplateId:$("#momId").val(),
				templateName:templateNameData,
				applicabilityType:applicabilityTypeData,
				eCodeApplicabilityFor:eCodeApplicabilityForData,
				designationApplicabilityFor:designationApplicabilityForData,
				departmentApplicabilityFor:departmentApplicabilityForData,
				colNameType:ColNameTypeData,
				colNameValue:colNameValueData
			}
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/saveCreatedMoM",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify(momData),
			success:function(response){
				$("#wait").hide();
					if(response.status.code==200){
						modalAlertToShowCustomMessage(response.data.responseData,'success');
						resettags();
					}else{
						modalAlertToShowCustomMessage(response.data.responseData,'error');
					}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	}
	
	function resettags(){
		$("#fileName").val("");
		$("#applicabilityType").val("1");
		var alltags=$(".tagRemove");
		$.each(alltags,function(index,tags){
			$(tags).click();
		});
		
		var selectTags=$(".token");
		$.each(selectTags,function(index,stags){
			$(stags).remove();
		});
		selectMoMValidation();
		var rowsElement=$(".product-sec")
		$.each(rowsElement,function(index,element){
			if(index!=0){
				$(element).find('.delete-icon').click();
			}
		});
		$("#tableError").show();
		$(".mom-table").hide();
		$(".cancel-btn").click();
	}
	
	function getMoMList(startLimit,maxLimit){
		var filter=$("input[name='filter']:checked").val();
		var from="";
		var to="";
		var ecode="";
		if(filter=="status"){
			var statusId=$("#statusId").val();
				
		}else if(filter=="date"){
			 from=$("#from").val();
			 to=$("#to").val()
			if(from=="" || from==null || from== undefined){
				modalAlertToShowCustomMessage("From date can't be blank","error");
				return false;
			}else if(to=="" || to==null || to== undefined){
				modalAlertToShowCustomMessage("To date can't be blank","error");
				return false;
			}
		}else if(filter=="ecode"){
			ecode=$("#ecode").val();
			if(ecode=="" || ecode==null || ecode== undefined){
				modalAlertToShowCustomMessage("Ecode can't be blank","error");
				return false;
			}
		}
		var momData={
				"startDate":from,
				"endDate":to,
				"filterType":filter,
				"isDisabled":(statusId==0)?"":(statusId==2)?true:false,
				"startLimit":startLimit,
				"maxLimit":maxLimit
			}
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/getMoMList",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify(momData),
			success:function(response){
				$("#wait").hide();
					if(response.status.code==200){
						var momData=response.data.leadTaskMoMTemplateDTO;
						if(momData==null || momData==undefined){
							$("#errorDiv").show();
							$("#dataDiv").hide();
							$('#myPager').unbind('page');
						}else{
							
							$("#dataDiv").show();
							$("#errorDiv").hide();
							$('#myPager').unbind('page');
							if(momData.length!=0){
								$('#totalCounts').val(response.data.total);
								$("#dataDivList").empty();
								$.each(momData,function(index,dataObject){
									var enableBtn="";
									if(dataObject.isActive)
										 enableBtn="<div class='enable-momBtn warning confirm' onclick=enableDisableMoMTemplate(false,"+dataObject.id+")><a href='javascript:void(0)'>Enabled</a></div>";
									else
										 enableBtn="<div class='disable-momBtn warning confirm' onclick=enableDisableMoMTemplate(true,"+dataObject.id+")><a href='javascript:void(0)'>Disabled</a></div>";
									var dataList="<div class='line'>" +
									"              <div class='col-lg-4 col-sm-4 col-md-4'>" +
									"                <div class='mom-template-img'><img src='images/mom-excel-icon.svg' width='80'></div>" +
									"                <div class='mom-template-detail'>" +
									"                  <div class='mom-templateName'>"+dataObject.name+"</div>" +
									"                  <div class='Mom-templateDate'>Created On : <span>"+dataObject.createdOn+"</span></div>" +
									"                  <div class='Mom-templateDate'>Update On : <span>"+dataObject.updatedOn+"</span></div>" +
									"                </div>" +
									"              </div>" +
									"              <div class='col-lg-4 col-sm-4 col-md-4'>" +
									"                <div class='creater-rel'>Owner</div>" +
									"                <div class='creater-name'>"+dataObject.createdBy+"</div>" +
									"              </div>" +
									"              <div class='col-lg-4 col-sm-4 col-md-4 mom-btns'>" +
									"                <div class='cancel-btn'>" +
									"					<a href='/AdminModule/createMoMTemplate?momId="+dataObject.id+"&isModify=true' th:href='@{/createMoMTemplate(momId="+dataObject.id+",isModify=true)}'>Edit</a>" +
									"				 </div>" +
									"                <div class='button success' data-toggle='modal' data-target='#view-mom' onclick='viewMoMTemplate("+dataObject.id+")'>View</div>" +
									enableBtn +
									"              </div>" +
									"            </div>"
									$("#dataDivList").append(dataList);
								});
								if(response.data.total>maxLimit){
									$('#myPager').show();
									$('#myPager').bootpag({
										 total:(parseInt(Math.ceil($('#totalCounts').val()/maxLimit))),
										 page:1,
										 maxVisible: 3,
										 }).on("page", function(event, num){
											 getMoMPagingData((num-1)*maxLimit,maxLimit);
										 });
								}else
									$('#myPager').hide();
									
							}else{
								$("#errorDiv").show();
								$("#dataDiv").hide();
								$('#myPager').unbind('page');
							}
						}
					}else{
						modalAlertToShowCustomMessage(response.data.statusMessage,'error');
						
					}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	}
	
	function getMoMPagingData(startLimit,maxLimit){
		var filter=$("input[name='filter']:checked").val();
		var from="";
		var to="";
		var ecode="";
		if(filter=="status"){
			var statusId=$("#statusId").val();
				
		}else if(filter=="date"){
			 from=$("#from").val();
			 to=$("#to").val()
			if(from=="" || from==null || from== undefined){
				modalAlertToShowCustomMessage("From date can't be blank","error");
				return false;
			}else if(to=="" || to==null || to== undefined){
				modalAlertToShowCustomMessage("To date can't be blank","error");
				return false;
			}
		}else if(filter=="ecode"){
			ecode=$("#ecode").val();
			if(ecode=="" || ecode==null || ecode== undefined){
				modalAlertToShowCustomMessage("Ecode can't be blank","error");
				return false;
			}
		}
		var momData={
				"startDate":from,
				"endDate":to,
				"filterType":filter,
				"isDisabled":(statusId==0)?"":(statusId==2)?true:false,
				"startLimit":startLimit,
				"maxLimit":maxLimit
			}
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/getMoMList",
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			data :JSON.stringify(momData),
			success:function(response){
				$("#wait").hide();
					if(response.status.code==200){
						var momData=response.data.leadTaskMoMTemplateDTO;
						if(momData==null || momData==undefined){
							$("#errorDiv").show();
							$("#dataDiv").hide();
						}else{
							$("#dataDiv").show();
							$("#errorDiv").hide();
							if(momData.length!=0){
								$('#totalCounts').val(response.data.total);
								$("#dataDivList").empty();
								$.each(momData,function(index,dataObject){
									var enableBtn="";
								if(dataObject.isActive)
									 enableBtn="<div class='enable-momBtn warning confirm' onclick=enableDisableMoMTemplate(false,"+dataObject.id+")><a href='javascript:void(0)'>Enabled</a></div>";
								else
									 enableBtn="<div class='disable-momBtn warning confirm' onclick=enableDisableMoMTemplate(true,"+dataObject.id+")><a href='javascript:void(0)'>Disabled</a></div>";								
									var dataList="<div class='line'>" +
									"              <div class='col-lg-4 col-sm-4 col-md-4'>" +
									"                <div class='mom-template-img'><img src='images/mom-excel-icon.svg' width='80'></div>" +
									"                <div class='mom-template-detail'>" +
									"                  <div class='mom-templateName'>"+dataObject.name+"</div>" +
									"                  <div class='Mom-templateDate'>Created On : <span>"+dataObject.createdOn+"</span></div>" +
									"                  <div class='Mom-templateDate'>Update On : <span>"+dataObject.updatedOn+"</span></div>" +
									"                </div>" +
									"              </div>" +
									"              <div class='col-lg-4 col-sm-4 col-md-4'>" +
									"                <div class='creater-rel'>Owner</div>" +
									"                <div class='creater-name'>"+dataObject.createdBy+"</div>" +
									"              </div>" +
									"              <div class='col-lg-4 col-sm-4 col-md-4 mom-btns'>" +
									"                <div class='cancel-btn'>" +
									"					<a href='/AdminModule/createMoMTemplate?momId="+dataObject.id+"&isModify=true' th:href='@{/createMoMTemplate(momId="+dataObject.id+",isModify=true)}'>Edit</a>" +
									"				 </div>" +
									"                <div class='button success' data-toggle='modal' data-target='#view-mom'  onclick='viewMoMTemplate("+dataObject.id+")'>View</div>" +
									  elsbleBtn +
									"              </div>" +
									"            </div>"
									$("#dataDivList").append(dataList);
								});
							}
						}
					}else{
						modalAlertToShowCustomMessage(response.data.statusMessage,'error');
						
					}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	}
	
	
	function editMoMTemplate(momId){
		var momData={
				"momId":momId
				}
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/editMoMTemplate?momId="+momId,
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
//			data :JSON.stringify(momData),
			success:function(response){
				$("#wait").hide();
					if(response.status.code==200){
						var momData=response.data.leadTaskMoMTempDTO;
						if(momData!=null || momData!=undefined){
							$.each(momData.leadTaskMomTemplateDetailses,function(index,dtlObj){
								var addbtn=$('.add-product').click();
								var rows=$(".product-sec");
								var lastRow=rows[rows.length-1];
								$(lastRow).find(".colName").val(dtlObj.columnName);
								$(lastRow).find(".divselector").val(dtlObj.columnType);
								if(dtlObj.columnType==2 || dtlObj.columnType==5){
									var columnArray=dtlObj.columnValues.split(",");
									$(lastRow).find(".tagings").show();
									$.each(columnArray,function(index,value){
						    			$('<li class="addedTag">' + value + '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + value + '" class="tags[]"></li>').insertBefore('.optionTags');
						    		})
								}
							})
							
							$("#fileName").val(momData.name);
							$('#applicabilityType option').map(function () {
							    if ($(this).val() == momData.applicableTo){
							    	if(momData.applicableTo==2)
							    		$.each(momData.leadTaskMomTemplateApplicability,function(index,value){
							    			$('<li class="addedTag">' + value.applicableTo + '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + value.applicableTo + '" class="eCodeApplicabilityForField" name="eCodeApplicabilityFor"></li>').insertBefore('#li-ecode');
							    		})
							    	else if(momData.applicableTo==3)
							    		$.each(momData.leadTaskMomTemplateApplicability,function(index,value){
							    			$('<li class="addedTag">' +value.applicableTo+ '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + value.applicableTo + '" class="designationApplicabilityForField" name="designationApplicabilityFor"></li>').insertBefore('#li-designation');
										})
								   else if(momData.applicableTo==4){
								    	$.each(momData.leadTaskMomTemplateApplicability,function(index,value){
								    		$('select[name="departmentApplicabilityFor"] option[value="'+value.applicableTo+'"]').attr('selected','selected');
								    	})
								    	 $('.applicabilitytype').tokenize2();
								    }
								   	return this;
							    }
							}).attr('selected', 'selected');
						// $('.applicabilitytype').tokenize2();
						selectMoMValidation();
							
						}
						renderMomTemplate();
					}else{
						modalAlertToShowCustomMessage(response.data.statusMessage,'error');
						
					}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	}
	
	
	function viewMoMTemplate(momId){
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/editMoMTemplate?momId="+momId,
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			success:function(response){
				$("#wait").hide();
					if(response.status.code==200){
						var momData=response.data.leadTaskMoMTempDTO;
						if(momData!=null || momData!=undefined){
							var headerNames =[];
							var headerSize=[];
							var columns=[];
							var readOnly=true;
							var allowUpdates=false;
							var columnDataFinal=[];
													
							$.each(momData.leadTaskMomTemplateDetailses,function(index,dtlObj){
									var colName =dtlObj.columnName;
									var colType	 =dtlObj.columnType;
									var columnName='text';
									if(colType == 2)
										columnName='dropdown';
									else if(colType == 3)
										columnName='checkbox';
									else if(colType == 4)
										columnName='calendar';
									else if(colType == 5)
										columnName='autocomplete';
									headerNames.push(colName);
									headerSize.push(100);
									var ob={};
									if(colType == 2 || colType == 5){
										var source=[];
										var options = dtlObj.columnValues.split(",");
										if(undefined != options){
											$.each(options,function(index,option){
												var val=option;
												var dummy={'id':index+1,'name':val};
												source.push(dummy);
											});
											
										}
										ob={ type: columnName,source:source};
									}else if(colType == 4){
										ob={ type: columnName,options: { format:'DD/MM/YYYY' } }
									}else if(colType == 3){
										ob={ type: columnName,readOnly:false}
									}
									else{
										ob={ type: columnName,readOnly:readOnly}
									}
									var columnData ={"column_name":colName,"column_type":colType,"column_values":source};
									columnDataFinal.push(columnData);
									columns.push(ob);
							
							});
							$('#my').jexcel({
							    colHeaders:  headerNames,
							    columns: columns,
							    colWidths:headerSize,
							    minSpareRows:1,
							    allowInsertRow:allowUpdates,
//							    editable:allowUpdates,
							    allowInsertColumn:allowUpdates,allowDeleteRow:allowUpdates
							});
							$('.mom-table').show();
//							$("#viewMomDiv").show();
						}
					}else{
						modalAlertToShowCustomMessage(response.data.statusMessage,'error');
						
					}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	}
	
	function enableDisableMoMTemplate(isEnable,momTemplateId){
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "/AdminModule/enableMoMTemplate?isEnable="+isEnable+"&momTemplateId="+momTemplateId,
			headers: { 
			      'Accept': 'application/json',
			     'Content-Type': 'application/json' 
			},
			dataType: 'JSON',
			type: 'POST',
			success:function(response){
				$("#wait").hide();
					if(response){
						getMoMList(0,50);
					}else{
						modalAlertToShowCustomMessage(response.data.statusMessage,'error');
						
					}
			},
			error: function(jqXHR, textStatus, errorThrown) {
		    	 $("#wait").hide();
				console.log('jqXHR:');
				console.log(jqXHR);
				console.log('textStatus:');
				console.log(textStatus);
				console.log('errorThrown:');
				console.log(errorThrown);

			}
		});
	}
	
	
	
	