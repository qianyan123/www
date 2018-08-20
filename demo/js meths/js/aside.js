	var titles=document.getElementsByClassName("menu-title");
	var meths=document.getElementsByClassName("meths");
	var title1=document.getElementsByClassName('menu-title1');
	function hide(){
		for(let i=0;i<titles.length;i++){
			meths[i].style.display="none";
		}
	}
	title1.onclick=function(){
		window.location.href="../main.html";
	}
	var k=-1;
	for(let j=0;j<titles.length;j++){
		titles[j].onclick=function(){
			hide();
			if(j==k){
				meths[j].style.display="none";
				k=-1;}
			else {meths[j].style.display="block";
			 k=j;
			}
		}
	}
