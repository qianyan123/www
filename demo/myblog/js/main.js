	$(document).ready(function(){
/**************************轮播图************************************/
		$(".next").eq(0).click(function(){
			let position=$("#img").position().left;
			if(position>-2800){
				$("#img").css({'left':position-700+"px"});
				posbindindex(position-700);
			}
			else{$("#img").css({'left':"0px"});
			posbindindex(0);
			}
		})
		
		$(".prve").eq(0).click(function(){
			let position=$("#img").position().left;
			if(position<0){
				$("#img").css({'left':position+700+"px"});
				posbindindex(position+700);

			}
			else{$("#img").css({'left':"-2800px"});
			posbindindex(-2800);}
		})

		$(".index span").each(function(){
			$(this).click(function(){
				$(".index span").not($(this)).removeClass("active");
				$(this).addClass("active");
				index=$(this).index();
				indexbindpos(index);
			})
		})

		function posbindindex(pos){
			switch(pos){
				case 0:$(".index span").removeClass("active");
				$(this).addClass("active");$(".index span").eq(0).addClass("active");break;
				case -700:$(".index span").removeClass("active");$(".index span").eq(1).addClass("active");break;
				case -1400:$(".index span").removeClass("active");$(".index span").eq(2).addClass("active");break;
				case -2100:$(".index span").removeClass("active");$(".index span").eq(3).addClass("active");break;
				case -2800:$(".index span").removeClass("active");$(".index span").eq(4).addClass("active");break;
				default:alert("erro");
			}
		}


		function indexbindpos(index){
			switch(index){
				case 0:$("#img").css({"left":"0px"});break;
				case 1:$("#img").css({"left":"-700px"});break;
				case 2:$("#img").css({"left":"-1400px"});break;
				case 3:$("#img").css({"left":"-2100px"});break;
				case 4:$("#img").css({"left":"-2800px"});break;
				default:alert("erro");
			}
		}
/*************************************************轮播图****************************************************************/

/***********************************************登陆部分*****************************************************************/
		$("#user").click(function(){
			$(".m-login").addClass("f-db");
		})

		$(".close").click(function(){
			$(".m-login").removeClass("f-db");
			$(".register span").eq(1).addClass("f-op");
			$(".register span").eq(2).addClass("f-op");
			$(".m-login input").each(function(){
				$(this).val("");
			});
		})

		$("#nuser").mouseover(function(){
			$("#ouser").removeClass("hover");
			$(this).addClass("hover");
			$(".login-text").addClass("f-dn");
			$(".login-text").removeClass("f-db");
			$(".register").addClass("f-db");
		})
		$("#ouser").mouseover(function(){
			$("#nuser").removeClass("hover");
			$(this).addClass("hover");
			$(".register").removeClass("f-db");
			$(".login-text").addClass("f-db");
		})
		$(".register input").eq(1).focusout(function(){
			if($(this).val().length<8){
				$(".register span").eq(1).removeClass("f-op");
			}
		})
		$(".register input").eq(2).focusout(function(){
			if($(this).val()!=$(".register input").eq(1).val()){
				$(".register span").eq(2).removeClass("f-op");
			}
		})
/*
		$("#login").click(function{
			$.ajax({
				type:"POST",
				url:"loginsever.php",
				dataType:"json",
				data:{
					name:$("#username").vla(),
					password:$("#password").val(),
				};
				success:function(data){
					if(data.success){
						$(".login").addClass("f-dn");
						$("#onload").addClass("f-dn");
						$("#usermessage").removeClass("f-dn")
						$("#usermessage").html(data.username);
					}
					else {alert("erro");}
				}
			})
		})
*/
	})

