/**
 * 1)function deletePPT()  This function is used for delete ppt from configuration table(update delete column in table)
 * 2)function getQuestionList() this will get the Question from database.
 * 3)function configurePPT this function is call from configure button click.
 */
var presentationId="";
function testSlide(){
	var isSignIn=gapi.auth2.getAuthInstance().isSignedIn.get();
	if(isSignIn){
		createPresentation('slides', openPPT)
	}else{
		handleAuthClick();
	}
}

function openPPT(response){
	presentationId=response.result.presentationId;
	var URL="https://docs.google.com/presentation/d/"+presentationId+"/edit";
	$("#myIframe").load(function(){
		$("#wait").hide();
		 var download = document.getElementById('download');
		 download.style.display = 'inline-block';
		
	});
	$("#myIframe").attr({
	    src:URL
	})
}

function pptToJpgConverter() {
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "pptToJpgConverter",
		type: 'POST',
		 data:{
			  "presentationId":presentationId,
		  },
		success:function(data){
			 $("#wait").hide();
			 if(data.status.code==200){
				 var modulId=$("#modulId").val();
				 console.log("modulId:"+modulId);
				 if(modulId=="" || modulId== undefined || modulId==null)
					window.location = "/AdminModule/elearningapplicability?_csrf="+$('#csrfToken').val()+"&presentationId="+presentationId+"&modeOfOpen='new' &modulId=";
				 else if(modulId!=""){
					 window.location = "/AdminModule/elearningapplicability?_csrf="+$('#csrfToken').val()+"&presentationId="+presentationId+"&modeOfOpen=edit &modulId="+modulId;
				 }	
			 }else{
					modalAlertToShowCustomMessage(data.data.responseData,"error");
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




function addQuestion() {
	var question=$("#questionText").val();
	var marks=$("#marks").val();
	var answerType=$("#answerType").val();
	var modulId=$("#modulId").val();
	var presentationId=$("#presentationId").val();
	
	if(question=="" || question==undefined || question==null){
		modalAlertToShowCustomMessage("Question can't be empty","error");
		return false;
	}
	
	if(marks=="" || marks==undefined || marks==null){
		modalAlertToShowCustomMessage("Marks can't be empty","error");
		return false;
	}
	
	if(answerType=="" || answerType==undefined || answerType==null){
		modalAlertToShowCustomMessage("Please select Answer Type","error");
		return false;
	}
	
	if(marks<=0){
		modalAlertToShowCustomMessage("Marks must be greater then 0","error");
		return false;
	}
	
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	var optionArrayData=[];
	var optionCheck=true;
	var multiselectOptionCount=0;
	if(answerType==1){
		var optionDiv=$(".single-select");
		$.each(optionDiv,function(index,valueObject){
			var divNumner=valueObject.getAttribute("divNumner");
			var checkbox=$(".single-select-"+(divNumner)).find('input[type="radio"]')[0].checked;
			var optionValue=$(".single-select-"+(divNumner)).find('input[type="text"]').val();
			if(optionValue=="" || optionValue==undefined || optionValue==null){
				optionCheck=false; 
				return false;
			}
				var ansOption={
					    "option":optionValue,
					    "isCorrect":checkbox,
					    "id":$("#single-select-optionId-"+divNumner).val()
					};
				optionArrayData.push(ansOption);
		})
	}else if(answerType==2){
		var optionDiv=$(".multi-select");
		$.each(optionDiv,function(index,valueObject){
			var divNumner=valueObject.getAttribute("divNumner")
			var radiobox=$(".multi-select-"+(divNumner)).find('input[type="checkbox"]')[0].checked;
			var optionValue=$(".multi-select-"+(divNumner)).find('input[type="text"]').val();
			if(optionValue=="" || optionValue==undefined || optionValue==null){
				optionCheck=false; 
				return false;
			}
			if(radiobox){
				multiselectOptionCount=optionDiv.length;
			}
			
					var ansOption={
				    "option":optionValue,
				    "isCorrect":radiobox,
				    "id":$("#multi-select-optionId-"+divNumner).val()
					};
					optionArrayData.push(ansOption);
		})
	}
	
	if(!optionCheck){
		modalAlertToShowCustomMessage("Option can't be empty","error");
		return false;
	}
	if(answerType>0 && optionArrayData.length==0){
		modalAlertToShowCustomMessage("Please add option","error");
		return false;
	}
	if(answerType==2 && $(".multi-select").length!=multiselectOptionCount){
		modalAlertToShowCustomMessage("Please choose correct Option","error");
		return false;
	}
	var optionarray={
			 id:$("#questionId").val(),
			 prefix:question,
			 marks:marks,
			 anstype:answerType,
			 isActive:true,
			 moduleId:modulId,
			 picUrl:null,
			 postfix:null,
			 options:optionArrayData,
			 presentationId:presentationId

			 };
	if(($("#questionId").val())!="" && ($("#questionId").val())!=null && ($("#questionId").val())!=undefined){
		optionarray["id"]=$("#questionId").val();
	}
	$("#wait").show();
	$.ajax({
		url: "saveQuestion",
		type: 'POST',
	    contentType : 'application/json; charset=utf-8',
        dataType : 'json',
		data:JSON.stringify(optionarray),
		success:function(data){
			 $("#wait").hide();
			if(data.status.code==200){
				resetQuestionForn();
				getQuestionList(0,5);
				modalAlertToShowCustomMessage(data.data.responseData, "success")
			}else{
				modalAlertToShowCustomMessage(data.data.responseData,"error");
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

function ConfigPPT() {
	
	var name=$("#name").val();
	var testDuration=$("#testDuration").val();
	var applicabilityFor=$("#search-field").val();
	var presentationId=$("#presentationId").val();
	var modeOfOpen=$("#modeOfOpen").val();
	if(presentationId=="" || presentationId==undefined || presentationId==null){
		modalAlertToShowCustomMessage("you can modify from client list only","error");
		return false;
	}
	if(name=="" || name==undefined || name==null){
		modalAlertToShowCustomMessage("Module name can't be empty","error");
		return false;
		
	}else if($("#file-1")!=undefined && $("#file-1")[0].files.length==0 && modeOfOpen.trim()!='edit'){//&& modeOfOpen.trim()!='edit'
		modalAlertToShowCustomMessage("Upload Icon can't by empty","error");
		return false;
		
	}else if(($("input[name='isTestApplicable']:checked").val()=="true") && testDuration<=0){
		modalAlertToShowCustomMessage("Duration must be greater then 0","error");
		return false;
	}else if(($("input[name='isTestApplicable']:checked").val()=="true") && (testDuration=="" || testDuration==undefined || testDuration==null)){
		modalAlertToShowCustomMessage("Test Duration can't be empty","error");
		return false;
		
	}else if(($("#applicabilityType").val()!=1 && $("#applicabilityType").val()!=4) && ($('li.addedTag').length==0 )){
		modalAlertToShowCustomMessage("Ecode/Designation can't by empty","error");
		return false;
		
	}else if(($("#applicabilityType").val()==4) && ($('li.token').length==0 )){
		modalAlertToShowCustomMessage("Department can't by empty","error");
		return false;
		
	}
	var formData = new FormData();
//	var eCodeApplicabilityFor=[];
	$.each($(".eCodeApplicabilityForField"),function(index,obj){
//		eCodeApplicabilityFor.push(obj.value);
		formData.append("eCodeApplicabilityFor", obj.value);
	});
//	var designationApplicabilityForField=[];
	$.each($(".designationApplicabilityForField"),function(index,obj){
//		designationApplicabilityForField.push(obj.value);
		formData.append("designationApplicabilityFor", obj.value);//list
	});
//	var Department=[];
	$.each($(".token"),function(index,obj){
//		Department.push($(obj).attr("data-value"));
		formData.append("departmentApplicabilityFor", $(obj).attr("data-value")); //list
	});
	
	var x=$($(".token")[0]).attr("data-value");
	var file = document.getElementById('file-1').files[0]
	 
	if(file!=undefined)
		formData.append("icon", file); 
	formData.append("testDuration", testDuration);
	formData.append("id", $("#id").val()); 
	formData.append("name", name);
	formData.append("isActive", $("#isActive").val()); 
	formData.append("applicabilityType", $("#applicabilityType").val());
//	formData.append("eCodeApplicabilityFor", eCodeApplicabilityFor); //list
//	formData.append("designationApplicabilityFor", designationApplicabilityForField);//list
//	formData.append("departmentApplicabilityFor", Department); //list
	formData.append("isTestApplicable", ($("input[name='isTestApplicable']:checked").val()=="true")?true:false);
	formData.append("quesOrder", $("#quesOrder").val()); 
	formData.append("url", $("#url").val());
//	formData.append("fileName", file); 
	formData.append("presentationId", presentationId);
	
		
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		headers: {'Content-Type': undefined},
		url: "/AdminModule/eLearningModuleConfig",
		type: 'POST',
		processData: false,  // tell jQuery not to process the data
		contentType: false,  // tell jQuery not to process the data
		data:formData,
		success:function(data){

			$("#wait").hide();
			if(data.status.code==200){
				if(data.data.isTestApplicable){
					resetForm("pptShowELearningForm");
					$("#name").attr("disable");
					window.location = "/AdminModule/elearningQuestion?_csrf="+$('#csrfToken').val()+"&modulId="+data.data.modulId+"&presentationId="+presentationId;

				}else{
					resetForm("pptShowELearningForm");
					modalAlertToShowCustomMessage(data.data.responseData, "success");
				}
			}else{
				modalAlertToShowCustomMessage(data.data.responseData,"error");
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
		/*$('#pptShowELearningForm').ajaxSubmit({
			contentType: 'application/octet-stream',
			enctype: 'multipart/form-data',
			processData: false,  // tell jQuery not to process the data
			contentType: false,  // tell jQuery not to process the data
			success: function(data) {
				$("#wait").hide();
				if(data.status.code==200){
					if(data.data.isTestApplicable){
						resetForm("pptShowELearningForm");
						$("#name").attr("disable");
						window.location = "/AdminModule/elearningQuestion?_csrf="+$('#csrfToken').val()+"&modulId="+data.data.modulId+"&presentationId="+presentationId;

					}else{
						resetForm("pptShowELearningForm");
						modalAlertToShowCustomMessage(data.data.responseData, "success");
					}
				}else{
					modalAlertToShowCustomMessage(data.data.responseData,"error");
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
		});*/
}


function pptList(startLimit,maxLimit) {
	var filter=$("input[name='filter']:checked").val();
	var isConfigure=null;
	if(filter=="status"){
		var isConfigure=null;
		var statusId=$("#statusId").val();
			if(statusId=="Configured"){
				isConfigure=true;
			}else if(statusId=="Not Configured"){
				isConfigure=false;
			}else{
				isConfigure=null;
			}
	}else if(filter=="date"){
		var from=$("#from").val();
		var to=$("#to").val()
		if(from=="" || from==null || from== undefined){
			modalAlertToShowCustomMessage("From date can't be blank","error");
			return false;
		}else if(to=="" || to==null || to== undefined){
			modalAlertToShowCustomMessage("To date can't be blank","error");
			return false;
		}
	}
	
		$("#wait").show();
		$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
		$.ajax({
			url: "pptList",
			type: 'POST',
			 data:{
				  "isConfigure":isConfigure,
				  "startLimit":startLimit,
				  "maxLimit":maxLimit,
				  "filter":filter,
				  "from":$("#from").val(),
				  "to":$("#to").val()
		
			  },
			success:function(data){
				 $("#wait").hide();
				 if(data.data.length==0){
					 $( "#pptListId" ).empty();
					 $("#datalistDiv").hide();
					 modalAlertToShowCustomMessage("Data not present","error");
					 $('#myPager').unbind('page');
					 $('#myPager').hide();
				 }else{
					 $("#datalistDiv").show();
					 $( "#pptListId" ).empty();
					 $('#myPager').unbind('page');
					 $('#myPager').show();
					 $.each(data.data,function(index,object){
						var moduleName="-------";
						var isConfigure="";
						var testApplicable="------";
						var btnDiv='';
						var applicableType="------"
						if(object.isConfigure){
							testApplicable=(object.testApplicable)?"Yes":"No";
							moduleName=object.moduleName;
							isConfigure="Configured";
							applicableType=object.applicableType
							btnDiv='<div class="checkbar">'
			                      +'<div class="self_right">'
				             	 	+'<div class="Approval"><a href="/AdminModule/pptCreater?presentationId='+object.presentationId+'&modulId='+object.moduleId+'"><i class="fa fa-check" aria-hidden="true"></i> Modify</a></div>'
				             	 	+'<div class="rejectbtn"  onclick="deletePPT(\''+object.presentationId+'\')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>'
			                      +'</div>'
		                      +'</div>';
						}else{
							isConfigure="Not Configured";
							btnDiv='<div class="checkbar">'
			                      +'<div class="self_right">'
				             	 	+'<div class="configure" ><a href="/AdminModule/elearningapplicability?presentationId='+object.presentationId+'&modeOfOpen=\'edit\' &modulId="><i class="fa fa-file-text" aria-hidden="true"></i> Configured</a></div>'
				             	 	+'<div class="rejectbtn"  onclick="deletePPT(\''+object.presentationId+'\')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>'
			                      +'</div>'
		                      +'</div>';
						}
						 $('#totalCounts').val(data.total);
					var ppts='<div class="row mrg-T10">'
								 +'<div class="col-lg-1">'
								 	+'<img src="'+object.icon+'" width="45">'
								 +'</div>'
							     +'<div class="col-lg-2">'
				                  		+'<div class="match-records-label">Module Attached</div>'
				                  		+'<div class="match-records-result">'+moduleName+'</div>'
				                  +'</div>'
			                 
							 ppts+='<div class="col-lg-2">'
				                  +'<div class="match-records-label">Date</div>'
				                  +'<div class="match-records-result">'+object.createdOn+'</div>'
			                  +'</div>'
			                  +' <div class="col-lg-2">'
			                  +' <div class="match-records-label">Applicability</div>'
			                    +'   <div class="match-records-result">'+applicableType+'</div>'
			                    +' </div>'
			                  +'<div class="col-lg-2">'
			                  		+'<div class="match-records-label">Status</div>'
			                  		+'<div class="match-records-result">'+isConfigure+'</div>'
			                  +'</div>'
			                  +'<div class="col-lg-2">'
				                  +'<div class="match-records-label">Test capibility</div>'
				                  +'<div class="match-records-result">'+testApplicable+'</div>'
			                  +'</div>'
			                  +btnDiv
							
		                 ppts+='</div>';
				         $("#pptListId").append(ppts);
						 });
					 if(parseInt($('#totalCounts').val())>maxLimit)
					 $('#myPager').bootpag({
						 total:(parseInt(Math.ceil($('#totalCounts').val()/5))),
						 page:1,
						 maxVisible: 3,
						 }).on("page", function(event, num){
							 pptPageList(isConfigure,(num-1)*5,5,filter,$("#from").val(),$("#to").val());
						 });
					 else{
						 $('#myPager').unbind('page');
						 $('#myPager').hide();
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

function pptPageList(isConfigure,startLimit,maxLimit,filter,from,to){
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "pptList",
		type: 'POST',
		 data:{
			  "isConfigure":isConfigure,
			  "startLimit":startLimit,
			  "maxLimit":maxLimit,
			  "filter":filter,
			  "from":from,
			  "to":to
	
		  },
		success:function(data){
			 $("#wait").hide();
			 if(data.data.length==0){
				 $( "#pptListId" ).empty();
				 $("#datalistDiv").hide();
				 modalAlertToShowCustomMessage("Data not present","error");
				 $('#myPager').unbind('page');
				 $('#myPager').hide();
			 }else{
				 $("#datalistDiv").show();
				 $( "#pptListId" ).empty();
				 $('#myPager').show();
				 $.each(data.data,function(index,object){
						var moduleName="-------";
						var isConfigure="";
						var testApplicable="------";
						var btnDiv='';
						var applicableType="------"
						if(object.isConfigure){
							testApplicable=(object.testApplicable)?"Yes":"No";
							moduleName=object.moduleName;
							isConfigure="Configured";
							applicableType=object.applicableType
							btnDiv='<div class="checkbar">'
			                      +'<div class="self_right">'
				             	 	+'<div class="Approval"><a href="/AdminModule/pptCreater?presentationId='+object.presentationId+'&modulId='+object.moduleId+'"><i class="fa fa-check" aria-hidden="true"></i> Modify</a></div>'
				             	 	+'<div class="rejectbtn"  onclick="deletePPT(\''+object.presentationId+'\')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>'
			                      +'</div>'
		                      +'</div>';
						}else{
							isConfigure="Not Configured";
							btnDiv='<div class="checkbar">'
			                      +'<div class="self_right">'
				             	 	+'<div class="configure" ><a href="/AdminModule/elearningapplicability?presentationId='+object.presentationId+'&modeOfOpen=\'edit\' &modulId="><i class="fa fa-file-text" aria-hidden="true"></i> Configured</a></div>'
				             	 	+'<div class="rejectbtn"  onclick="deletePPT(\''+object.presentationId+'\')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>'
			                      +'</div>'
		                      +'</div>';
						}
					$('#totalCounts').val(data.total);
					var ppts='<div class="row mrg-T10">'
								 +'<div class="col-lg-1">'
								 	+'<img src="'+object.icon+'" width="45">'
								 +'</div>'
							     +'<div class="col-lg-2">'
				                  		+'<div class="match-records-label">Module Attached</div>'
				                  		+'<div class="match-records-result">'+moduleName+'</div>'
				                  +'</div>'
			                 
							 ppts+='<div class="col-lg-2">'
				                  +'<div class="match-records-label">Date</div>'
				                  +'<div class="match-records-result">'+object.createdOn+'</div>'
			                  +'</div>'
			                  +' <div class="col-lg-2">'
			                  +' <div class="match-records-label">Applicability</div>'
			                    +'   <div class="match-records-result">'+applicableType+'</div>'
			                    +' </div>'
			                  +'<div class="col-lg-2">'
			                  		+'<div class="match-records-label">Status</div>'
			                  		+'<div class="match-records-result">'+isConfigure+'</div>'
			                  +'</div>'
			                  +'<div class="col-lg-2">'
				                  +'<div class="match-records-label">Test capibility</div>'
				                  +'<div class="match-records-result">'+testApplicable+'</div>'
			                  +'</div>'
			                  +btnDiv
							
		                 ppts+='</div>';
				         $("#pptListId").append(ppts);
						 });
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

$('#searchfieldecode').keypress(function(event) {
    if (event.which == '13') {
    	var data=$(this).val();
	 if (( data != '') && ($(".tags .addedTag:eq('" + data + "') ").length == 0 ))  {
		$.ajax({
			url: "/AdminModule/fetchUserInformation",
			type: 'POST',
			data:{
				e_code:$(this).val(),
				_csrf:$('#csrfToken').val()
				
			},
			success:function(response){
				if(null != response && undefined != response && response != ''){
					 $('<li class="addedTag">' + data + '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + data + '" class="eCodeApplicabilityForField" name="eCodeApplicabilityFor"></li>').insertBefore('#li-ecode');
			            $('#searchfieldecode').val('');
				}
				else{
					modalAlertToShowCustomMessage("User Does Not Exist in the system", 'error');
					$('#searchfieldecode').val('');
				}
			}
		});
	 } else{
		 $('#searchfieldecode').val('');
	 }
    }
});

$('#search-field').keypress(function(event) {
    if (event.which == '13') {
    	 var isExist= true
     	  var currentValue=$(this);
     	  if(($(this).val() != '')){
	        	  $.map($($(this)[0].offsetParent).find(".tags .addedTag"),function(item){
	        	  if(item.textContent==currentValue.val()){
	        	    isExist= false;
	        	  	return;
	        	  }
	        	  });
		            if (isExist)  {
		
		            	$('<li class="addedTag">' + $(this).val() + '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + $(this).val() + '" class="designationApplicabilityForField" name="designationApplicabilityFor"></li>').insertBefore('#li-designation');
						 currentValue.val('');
		
		            } else {
		            	currentValue.val('');
		
		            }
     	  }else {
     		  currentValue.val('');

         }
    	
      /*if (($(this).val() != '') && ($(".tags .addedTag:eq('" + $(this).val() + "') ").length == 0 ))  {
        $('<li class="addedTag">' + $(this).val() + '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + $(this).val() + '" class="designationApplicabilityForField" name="designationApplicabilityFor"></li>').insertBefore('#li-designation');
        $(this).val('');
      } else {
        $(this).val('');
      }*/
    }

});


function selectValidation(){
    if( $("#applicabilityType").val()==1){
    	 $('#ecode').slideUp();
    	 $('#department').slideUp();
    	 $('#designation').slideUp();
    }else if( $("#applicabilityType").val()==2){
    	 $('#department').slideUp();
    	 $('#designation').slideUp();
    	 $('#ecode').slideDown();
    }else if( $("#applicabilityType").val()==3){
    	 $('#department').slideUp();
    	 $('#ecode').slideUp();
    	 $('#designation').slideDown();
    }else if( $("#applicabilityType").val()==4){
    	 $('#designation').slideUp();
    	 $('#ecode').slideUp();
    	 $('#department').slideDown();
    }
}

function submitbtnValidate(){
	var name=$("#name").val();
	var testDuration=$("#testDuration").val();
	var applicabilityFor=$("#search-field").val();
	 var modeOfOpen=$("#modeOfOpen").val();
	if(name!="" && name!=undefined && name!=null 
	  && $("#file-1")!=undefined && $("#file-1")[0].files.length!=0
	  && modeOfOpen.trim()!='edit'
	  && ($("input[name='isTestApplicable']").val()) 
	  && (testDuration!="" && testDuration!=undefined && testDuration!=null)){
		$('#pptConfigSubmit').removeClass('dissable-btn');
	}else if(name!="" && name!=undefined && name!=null 
			  && modeOfOpen.trim()=='edit'
			  && ($("input[name='isTestApplicable']").val()) 
			  && (testDuration!="" && testDuration!=undefined && testDuration!=null)){
				$('#pptConfigSubmit').removeClass('dissable-btn');
	}else{
		$('#pptConfigSubmit').addClass('dissable-btn');
	}
}

function deletePPT(presentationId) {
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "deletePPT",
		type: 'GET',
		 data:{
			  "presentationId":presentationId,
		  },
		success:function(data){
			 $("#wait").hide();
			 console.log(JSON.stringify(data))
			 pptList(0,5); 
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

function getQuestionList(startLimit,maxLimit){

	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "getQuestionList",
		type: 'POST',
		 data:{
			 "moduleId":$("#modulId").val(),
			  "startLimit":startLimit,
			  "maxLimit":maxLimit,
		  },
		success:function(data){
			 $("#wait").hide();
			 if(data.data.length==0){
				 $( "#questionListId" ).empty();
				 $("#questionlistDiv").hide();
//				 modalAlertToShowCustomMessage("Question not present","error");
				 $('#myPager').unbind('page');
				 $('#myPager').hide();
			 }else{
				 $('#totalCounts').val(data.total);
				 $("#questionlistDiv").show();
				 $( "#questionListId" ).empty();
				 $('#myPager').show();
				 $.each(data.data,function(index,object){
					 var questionList='<div class="line">'
		                    +'<div class="col-lg-1">'+(index+1)+'.</div>'
		                    
		                    +'<div class="col-lg-8">'
		                      +'<div class="match-records-label">Question</div>'
		                      +'<div class="match-records-result">'+object.prefix+'</div>'
		                    +'</div>'

		                    +'<div class="col-lg-3 text-right">'
		                    	+'<div class="Approval" onclick="editQuestion('+object.id+')"><a href="javascript:void(0)"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</a></div>'
		                    	+'<div class="rejectbtn" onclick="deleteQuestion('+object.id+')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>'
		                    +'</div>'
		                    +'</div>'
				 questionList+='</div>';
		        $("#questionListId").append(questionList);
			  });
				 if(parseInt($('#totalCounts').val())>maxLimit)
				 $('#myPager').bootpag({
					 total:(parseInt(Math.ceil($('#totalCounts').val()/5))),
					 page:1,
					 maxVisible: 3,
					 }).on("page", function(event, num){
						 getpagingQuestionList((num-1)*5,5,startLimit);
					 });
				 else{
					 $('#myPager').unbind('page');
					 $('#myPager').hide();
				 	}
				 }
			 console.log(JSON.stringify(data))
//			 pptList(0,5); 
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

function getpagingQuestionList(startLimit,maxLimit){
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "getQuestionList",
		type: 'POST',
		 data:{
			 "moduleId":$("#modulId").val(),
			  "startLimit":startLimit,
			  "maxLimit":maxLimit,
		  },
		success:function(data){
			 $("#wait").hide();
			 if(data.data.length==0){
				 $( "#questionListId" ).empty();
				 $("#questionlistDiv").hide();
//				 modalAlertToShowCustomMessage("Question not present","error");
				 $('#myPager').unbind('page');
				 $('#myPager').hide();
			 }else{
				 $('#totalCounts').val(data.total);
				 $("#questionlistDiv").show();
				 $( "#questionListId" ).empty();
				 $('#myPager').show();
					 $.each(data.data,function(index,object){
						 var questionList='<div class="line">'
			                    +'<div class="col-lg-1">'+(index+startLimit+1)+'.</div>'
			                    
			                    +'<div class="col-lg-8">'
			                      +'<div class="match-records-label">Question</div>'
			                      +'<div class="match-records-result">'+object.prefix+'</div>'
			                    +'</div>'
	
			                    +'<div class="col-lg-3 text-right">'
			                    	+'<div class="Approval" onclick="editQuestion('+object.id+')"><a href="javascript:void(0)"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</a></div>'
			                    	+'<div class="rejectbtn" onclick="deleteQuestion('+object.id+')"><a href="javascript:void(0)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>'
			                    +'</div>'
			                    +'</div>'
				 questionList+='</div>';
		        $("#questionListId").append(questionList);
			 });
			 console.log(JSON.stringify(data))
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

function deleteQuestion(questionId) {
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "deleteQuestion",
		type: 'GET',
		 data:{
			  "questionId":questionId,
		  },
		success:function(data){
			 $("#wait").hide();
			 console.log(JSON.stringify(data))
			 getQuestionList(0,5);
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


function editModule(){
	 var modeOfOpen=$("#modeOfOpen").val();
		if(modeOfOpen.trim()=='edit'){
			$("#skipBtnId").show();
			$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
			$.ajax({
				url: "getELearningModuleConfig",
				async:true,
				type: 'POST',
				 data:{
					  "moduleId":$("#modulId").val(),
				  },
				success:function(data){
					var selectData=[];
					 $("#wait").hide();
					 $("#name").val(data.name);
					 $("#testDuration").val(data.testDuration);
					 $('#applicabilityType option').map(function () {
						    if ($(this).val() == data.applicabilityType){
						    	if(data.applicabilityType==2)
						    		$.each(data.departmentApplicabilityFor,function(index,value){
						    			$('<li class="addedTag">' + value + '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + value + '" class="eCodeApplicabilityForField" name="eCodeApplicabilityFor"></li>').insertBefore('#li-ecode');
						    		})
						    	else if(data.applicabilityType==3)
						    		$.each(data.departmentApplicabilityFor,function(index,value){
						    			$('<li class="addedTag">' +value+ '<span class="tagRemove" onclick="$(this).parent().remove();"><i class="fa fa-times"></i></span><input type="hidden" value="' + value + '" class="designationApplicabilityForField" name="designationApplicabilityFor"></li>').insertBefore('#li-designation');
									})
							   else if(data.applicabilityType==4){
							    	$.each(data.departmentApplicabilityFor,function(index,value){
							    		$('select[name="departmentApplicabilityFor"] option[value="'+value+'"]').attr('selected','selected');
							    		
							    	})
							    	 $('.applicabilitytype').tokenize2();
							    }
							    	return this;
						    }
						}).attr('selected', 'selected');
					 $('.applicabilitytype').tokenize2();
					 selectValidation();
					 $("input[name='isTestApplicable']").map(function () {
						    if ($(this).val() == ""+data.isTestApplicable){
						    	$('.time-duration').hide();
						    	return this;
						    }else{
						    		 $('.time-duration').slideDown();
						    }
						}).attr('checked', 'checked');
						
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
		}else{
			$("#skipBtnId").hide();
			$('.applicabilitytype').tokenize2();
		}
}

function editQuestion(questionId){
	resetQuestionForn();
	$("#wait").show();
	$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':$('#csrfToken').val() } });
	$.ajax({
		url: "getQuestion",
		type: 'POST',
		 data:{
			 "questionId":questionId,
		  },
		success:function(data){
			 $("#wait").hide();
			$("#questionId").val(data.id);
			$("#questionText").val(data.prefix);
			$("#marks").val(data.marks);
			var ansType=data.anstype;
			$('#answerType').val(ansType);
			$.each($('#answerType option'),function (index,value) {
			    if (value.value == ansType){
			    	$('.ans-type').hide();
			        $('#' + ansType).show();
			    }
			});
			
			var options=data.options;
			for(var index=1;index<=options.length;index++){
				if(ansType==1){
					if(index==1){
						$("#single-select-val-"+(index)).val(options[index-1].option);
						$("#single-select-optionId-"+(index)).val(options[index-1].id);
						if(options[index-1].isCorrect)
							$("#radioqs-"+(index)).attr('checked', 'checked');
					}else{
						$("#single-select-"+(index-1)).click();
						$("#single-select-val-"+(index)).val(options[index-1].option);
						$("#single-select-optionId-"+(index)).val(options[index-1].id);
						if(options[index-1].isCorrect)
							$("#radioqs-"+(index)).attr('checked', 'checked');
					}
					
				}else if(ansType==2){
					if(index==1){
						$("#multi-select-val-"+(index)).val(options[index-1].option);
						$("#multi-select-optionId-"+(index)).val(options[index-1].id);
						if(options[index-1].isCorrect)
							$("#checkqs-"+(index)).attr('checked', 'checked');
					}else{
						$("#multi-select-"+(index-1)).click();
						$("#multi-select-val-"+(index)).val(options[index-1].option);
						$("#multi-select-optionId-"+(index)).val(options[index-1].id);
						if(options[index-1].isCorrect)
							$("#checkqs-"+(index)).attr('checked', 'checked');
					}
				}
			}
			for(var index=1;index<=options.length;index++){
				if(ansType==1){
					$("#radioqs-"+(index)).prop('checked',options[index-1].isCorrect);
					if(options[index-1].isCorrect)
						break;
				}else if(ansType==2){
					$("#checkqs-"+(index)).prop('checked', options[index-1].isCorrect);
					if(options[index-1].isCorrect)
						break;
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

function resetQuestionForn(){

	$("#questionId").val("");
	$("#questionText").val("");
	$("#marks").val(0);
	var ansType=1;
	$('#answerType').val(ansType);
	$('.ans-type').hide();
	$('#1').show();
	var option=$("input[name='rc2']");
	$.each(option,function(index,object){
		var idIndex=object.id;
		var index=idIndex.split('-')[1];
		if(index!=1 && idIndex.split('-')[0]=="checkqs"){
			$("#multi-select-dalete-"+(index)).click();
		}else if(index!=1 && idIndex.split('-')[0]=="radioqs"){
			$("#single-select-delete-"+(index)).click();
		}else if(index==1 && idIndex.split('-')[0]=="checkqs"){
			$("#multi-select-val-"+(index)).val("");
			$("#multi-select-"+index).show();
		}else if(index==1 && idIndex.split('-')[0]=="radioqs"){
			$("#single-select-val-"+(index)).val("");
			$("#single-select-"+index).show();
		}
	});
	$('.cross-sec').hide();
}
