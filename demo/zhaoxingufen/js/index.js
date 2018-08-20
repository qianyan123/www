$(document).ready(function(){
	var imglists=$('.imglists');
	var li=$('.imglists li');
	var offset=imglists.offset();
	//alert(offset.top);
	//alert($(window).scrollTop());
	
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=600&&scrollTop<=1500){
			li.addClass("a-enlarge");
			console.log(scrollTop);
		}
	})
})