function isSpclChar(el){
	   var iChars = "[!@#$%^&*()+=\\-\\[\\]\\\';,./{}|\":<>?]{1}";
	   if($(el).val().search(iChars) != -1) {
		/*$("#message").html('<div class="innermsg">Special characters not allowed in input!</div>');
		$("#popup3").css("visibility", "visible");
		$("#popup3").css("opacity", "1");*/
		 swal("Error", "Special characters not allowed in input!", "error");
		$(el).val('');
	     return false;
	   }
	}
	function validateMobile(el){
	//	var mobilePattern=new RegExp('^[789]\d{10}$');
		var regex =/^[6-9][0-9]{9}$/;
		if ($(el).val()!='' && !regex.test($(el).val())) {
			/*$("#message").html('<div class="innermsg">Please enter proper mobile number!</div>');
			$("#popup3").css("visibility", "visible");
			$("#popup3").css("opacity", "1");*/
			swal("Error", "Please enter proper mobile number!", "error");
			$(el).val('');
		     return false;
  }
	}
	function validateEmail(el){
		var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (!regex.test($(el).val())) {
			/*$("#message").html('<div class="innermsg">Please enter proper email!</div>');
			$("#popup3").css("visibility", "visible");
			$("#popup3").css("opacity", "1");*/
			swal("Error", "Please enter proper email!", "error");
			$(el).val('');
			return false;
		}
	}
	function closepopup(el) {
	    $(el).css("visibility", "hidden"), $(el).css("opacity", "0");
	}
	function openpopup(el){
		$(el).css("visibility", "visible");
		$(el).css("opacity", "1");
	}
	function forgotPassword(){
		var validated = true;
		if($('#e_code').val() == undefined || $('#e_code').val() == '' ){
			validated = false;
			/*$("#popup3 #message").html('<div class="innermsg">Employee Id must be filled!</div>');
			$("#popup3").css("visibility", "visible");
			$("#popup3").css("opacity", "1");*/
			swal("Error", "Employee Id must be filled!", "error");
		}
		/*else if(($('#email').val() == undefined || $('#email').val() == '' ) && ($('#mobile').val() == undefined || $('#mobile').val() == '')){
			validated = false;
			$("#popup3 #message").html('<div class="innermsg">Either email or mobile number must be filled!</div>');
			$("#popup3").css("visibility", "visible");
			$("#popup3").css("opacity", "1");
			swal("Error", "Either email or mobile number must be filled!", "error");
		}*/
		if(validated == true){
			$.ajax({
				url: "/AdminModule/forgotPassword",
				type: 'POST',
				//async:false,
				data:{
					e_code:$('#e_code').val(),
					email:$('#email').val(),
					mobile:$('#mobile').val()
				},
				success:function(response){
					/*$('#popup3 #message').html('<div class="innermsg">'+data+'</div>');
					$("#popup3").css("visibility", "visible");
					$("#popup3").css("opacity", "1");*/
					var data = $.parseJSON(response);
					if(data.status == 'success')
					swal("Success", data.message, "success");
					else
						swal("Error", data.message, "error");	
				}
			});
		}
	}
	
	
	
	
