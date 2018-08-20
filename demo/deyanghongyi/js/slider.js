$(document).ready(function(){
	let container=$('.t-slider');
	let img = $('.img');
	let prev = $('.btn1');
	let next = $('.btn2');
	let index = 1;
	let len=2;
	var timer;



	function animate(offset){
		let left = parseInt(img.css('left'))+offset;
		if(offset>0){
			offset = '+=' + offset; 
		}
		else {
			offset = '-=' +Math.abs(offset);
		}
		img.animate({'left':offset},400,function(){
			if(left>-200){
				img.css('left',-970*len);
			}
			if(left<(-970*len)){
				img.css('left',-970);
			}
		})

	}

	next.bind('click', function (){
		if (img.is(':animated')) {
            return;
        }
		animate(-970);
	})
	prev.bind('click', function (){
		if (img.is(':animated')) {
            return;
        }
		animate(970);
	})

	function play(){
        timer = setTimeout(function () {
        next.trigger('click');
        play();
        }, 4000);
    }
    function stop() {
        clearTimeout(timer);
    }

      container.hover(stop, play);

      play();



     let img2=$('.container ul');
	function animate2(offset){
		let left = parseInt(img2.css('left'))+offset;
		if(offset>0){
			offset = '+=' + offset; 
		}
		else {
			offset = '-=' +Math.abs(offset);
		}
		img2.animate({'left':offset},400,function(){
			if(left>-100){
				img2.css('left',-240*len);
			}
			if(left<(-240*len)){
				img2.css('left',-240);
			}
		})
	}
	$('.prev').bind('click',function(){
		$('body').attr("style","color:green");
		animate2(-240);
	})
	$('.next').bind('click',function(){
		animate2(240);
	})


})