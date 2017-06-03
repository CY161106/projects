

$(function(){
	
	$("article").css({
    width:"30px",
    height:"100%",
    background:"#444444",
    position:"fixed",
    top:"0",
    right:"0"     
});
	
	$(".play").css({
		width:"230px",
		height:"150px",
		background:"#fff",
		position:"absolute",
		right:"80px",
		top:"150px",
		border:"1px solid #e2e2e2",
		borderRadius:"5px",
		display:"none"
	});
	$(".play .atticle_tu").css({
		width:"60px",
		height:"60px",
		overflow:"hidden",
		borderRadius:"50%",
		border:"1px solid #666",
		margin:"20px auto"
		});
	$(".logon_p").css({
		width:"225px",
		height:"25px",
		background:"pink",
		borderTop:"1px solid lightpink",
		borderBottom:"1px solid lightpink",
		marginTop:"20px",
		font:"12px/25px ''",
		paddingLeft:"5px"
	});
	$(".logon_p span").css({
		font:"12px/25px ''",
		color:"red",
		padding:"0 2px"
		});
	$(".logon1").css({
		display:"block",
		width:"30px",
		height:"30px",
		border:"0",
		marginTop:"200px",
		background:"#ccc",
		font:"12px/30px ''",
		textAlign:"center",
	});
	$(".logon1 i").css({
		position:"absolute",
		top:"5px",
		right:"10px"
	})
	$(".logon1 i").mouseover(function(){
			$(".logon1 i").css("color","red")
	})
	$(".logon1 i").mouseout(function(){
			$(".logon1 i").css("color","")
	})
	$(".logon1 i").click(function(){
		$(".play").css("display","none")
	})
	
	$(".logon1").mouseenter(function(){
		$(".logon1").css("background","red"),
			$("article .play").animate({
			right:30,opacity:'show'
		},500);
	});
	$(".logon1").mouseleave(function(){
		$(".logon1").css("background","#ccc"),
			$("article .play").animate({
			right:100,opacity:'hide'
		},0);
	});

})
