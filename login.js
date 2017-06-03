
$(function(){
	$("#phoneId").blur(function(){
		$.get("login.php",{userName:$("#userName").val},function(){
			if(data=="1"){
				$("#user").html("可以注册");
			}else{
				$("#user").html("不可以注册");
			}
		});
	});
	
	
	
})
