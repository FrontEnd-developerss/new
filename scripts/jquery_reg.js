$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip(); 
	var sessionvar = localStorage["username"];
    $("#session").text(sessionvar);
	$("#reg_reset").click(function() {
		$("#reg_name").addClass("has-error");
		$("#reg_dob").addClass("has-error");
		$("#reg_mailid").addClass("has-error");
		$("#role_of_user").addClass("has-error");
		$("#pass_valid").css("display","none");
		$("#valid").css("display","none");
		$("#valid1").css("display","none");
	});
	$("#s_dob").change(function() {
		var now = new Date();
		var past = new Date($("#s_dob").val());
		var age = now.getFullYear() - past.getFullYear();
		document.getElementById("s_age").value= age;
	});
	$("#s_name").keyup(function() {
		var name = $("#s_name").val();
		var check = /^[A-z]+$/
		var len_name= $("#s_name").val().length;
		if(len_name==0) {
			$("#valid").text("* Required Field");
			$("#valid").css("display","block");
			$("#reg_name").addClass("has-error");
			$("#reg_name").removeClass("has-success");	
			$("#submit_form").addClass("disabled");
			$("#submit_form").removeClass("active");	
		}
	else {
			if(!check.test(name)) {
			$("#valid").css("display","block");
			$("#reg_name").addClass("has-error");
			$("#reg_name").removeClass("has-success");	
			$("#valid").text("Invalid Username. Only Characters Allowed");
			$("#submit_form").addClass("disabled");
			$("#submit_form").removeClass("active");
			}
			else {
			$("#valid").css("display","none");
			$("#reg_name").removeClass("has-error");
			$("#reg_name").addClass("has-success");
			localStorage["name"]=$("#s_name").val();

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
			$("#submit_form").addClass("disabled");
			$("#submit_form").removeClass("active");		
		}
	else {
			if(!check.test(pwd)) {
			$("#pass_valid").css("display","block");
			$("#password_div").addClass("has-error");
			$("#password_div").removeClass("has-success");	
			$("#pass_valid").text("Invalid password.");
			$("#submit_form").addClass("disabled");
			$("#submit_form").removeClass("active");
			}
			else {
			$("#pass_valid").css("display","none");
			$("#password_div").removeClass("has-error");
			$("#password_div").addClass("has-success");
			$("#submit_form").removeClass("disabled");
			$("#submit_form").addClass("active");
			$("#submit_form").click(function() {
				event.preventDefault();
				window.location="home_page.html";
			});
			}
		}
	});
	$("#s_mailid").keyup(function() {
		var mailid = $("#s_mailid").val();
		var check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var len_mailid= $("#s_mailid").val().length;
		if(len_mailid==0) {
			$("#valid1").text("* Required Field");
			$("#valid1").css("display","block");
			$("#reg_mailid").addClass("has-error");
			$("#reg_mailid").removeClass("has-success");	
			$("#submit_form").addClass("disabled");
			$("#submit_form").removeClass("active");	
		}
	else {
			if(!check.test(mailid)) {
			$("#valid1").css("display","block");
			$("#reg_mailid").addClass("has-error");
			$("#reg_mailid").removeClass("has-success");	
			$("#valid1").text("Invalid Mail ID");
			$("#submit_form").addClass("disabled");
			$("#submit_form").removeClass("active");
			}
			else {
			$("#valid1").css("display","none");
			$("#reg_mailid").removeClass("has-error");
			$("#reg_mailid").addClass("has-success");
			$("")

			}
		}
	});
});
