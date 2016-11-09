$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip(); 
	$("#reset_form").click(function() {
		$("#username_div").addClass("has-error");
		$("#password_div").addClass("has-error");
		$("#valid").css("display","none");
		$("#pass_valid").css("display","none");
	});
	$("#username").keyup(function() {
		var usr_name = $("#username").val();
		var check = /^[A-z]*$/;
		var len_usrname= $("#username").val().length;
		if(len_usrname==0) {
			$("#valid").text("* Required Field");
			$("#valid").css("display","block");
			$("#username_div").addClass("has-error");
			$("#username_div").removeClass("has-success");	
			$("#submit_form").prop("disabled",true);
		}
	else {
			if(!check.test(usr_name)) {
			$("#valid").css("display","block");
			$("#username_div").addClass("has-error");
			$("#username_div").removeClass("has-success");	
			$("#valid").text("Invalid Username. Only Characters Allowed");
			$("#submit_form").prop("disabled",true);
			}
			else {
			$("#valid").css("display","none");
			$("#username_div").removeClass("has-error");
			$("#username_div").addClass("has-success");
			localStorage["username"]=$("#username").val();
			}
		}
		
	});
	$("#password").keyup(function() {
		var pwd = $("#password").val();
		var check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
		var len_pwd= $("#password").val().length;
		if(len_pwd==0) {
			$("#pass_valid").text("* Required Field");
			$("#pass_valid").css("display","block");
			$("#password_div").addClass("has-error");
			$("#password_div").removeClass("has-success");
			$("#submit_form").prop("disabled",true);		
		}
	else {
			if(!check.test(pwd)) {
			$("#pass_valid").css("display","block");
			$("#password_div").addClass("has-error");
			$("#password_div").removeClass("has-success");	
			$("#pass_valid").text("Invalid password.");
			$("#submit_form").prop("disabled",true);
			}
			else {
			$("#pass_valid").css("display","none");
			$("#password_div").removeClass("has-error");
			$("#password_div").addClass("has-success");
			$("#submit_form").prop("disabled",false);
			localStorage["password"]=$("#password").val();
			$("#submit_form").click(function() {
				event.preventDefault();
				window.location="home_page.html";
			});
			}
		}
	});
});