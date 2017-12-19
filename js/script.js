
$(document).ready(function() {
	$("#icon-bar").click(function(event) {
		$(".nav-xs").animate({
			left: "0px"},
			500, function() {
			/* stuff to do after animation is complete */
		});
	});
	$("#close-icon").click(function(event) {
		$(".nav-xs").animate({
			left: "-100%"},
			500, function() {
			/* stuff to do after animation is complete */
		});
	});
});



// Counter Section 

var x = 0;
var y = 0;
var z = 0;
var t = 9;
var oneInterval;
var twoInterval;
var threeInterval;
var fourInterval;

oneInterval=setInterval(function(){
	$('.oneInterval').text(
	x+=1)
	if(x==10){
		clearInterval(oneInterval)
	}
},10)
twoInterval=setInterval(function(){
	$('.twoInterval').text(
	y+=1)
	if(y==100){
		clearInterval(twoInterval)
	}
},10)
threeInterval=setInterval(function(){
	$('.threeInterval').text(
	z+=400)
	if(z==2954){
		clearInterval(threeInterval)
	}
},100)
fourInterval=setInterval(function(){
	$('.fourInterval').text(
	t+=400)
	if(t==3597){
		clearInterval(fourInterval)
	}
},100)



// $(document).ready(function() {
// 	count=0;

// 	$("#left").click(function(event) {
// 		$($(".item")[count-1]).show(300)
// 		count--;
// 	});

// 	$("#right").click(function(event) {
		
// 		$($(".item")[count]).hide(300)
// 		count++;
// 		if(count==2){
// 			return;
// 		}
// 	});
// });


// Carousel Section

$('.multi-item-carousel').carousel({
  interval: false
});

$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

$("#myCarousel ul li").click(function() {
	$("#myCarousel .slideItem").fadeOut();
	var index=$("#myCarousel ul li").index(this)
	$("#myCarousel ul li").css("color","black")
	$(this).css("color","red")
	$("#myCarousel .slideItem").eq(index).fadeIn();
});



//Map Section

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

