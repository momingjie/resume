var box=document.querySelector('#box');
var list=document.querySelectorAll('#list li');
var winW=document.documentElement.clientWidth;
var winH=document.documentElement.clientHeight;
var desW=640;
var desH=960;
box.style.webkitTransform="scale("+winH/desH+")";
for (var i=0;i<list.length;i++) {
	list[i].index=i;
	list[i].addEventListener("touchstart",start,false);
	list[i].addEventListener("touchmove",move,false);
	list[i].addEventListener("touchend",end,false);
}
function start(e){
	this.start=e.changedTouches[0].pageY;
	
};
function move(e){
	e.preventDefault();
	this.flig=true;
	var move=e.changedTouches[0].pageY;
	var chandPox=move-this.start;
	var cur=this.index;
	var ele=1/2
	
	
	 for (var i=0;i<list.length;i++) {
	 	if(i!=cur){
	 		list[i].style.display="none"
	 	}
	 	
	 	list[i].className="";
	 	list[i].firstElementChild.id="";
	 }

	if(chandPox>0){
		var pos=-winH+chandPox;
		this.previndex=cur==0?list.length-1:cur-1;
	}else if(chandPox<0){
		var pos=winH+chandPox;
		this.previndex=cur==list.length-1?0:cur+1;
	}
	list[this.previndex].style.webkitTransform="translate(0,"+pos+"px)"
	list[this.previndex].style.display="block"
	list[this.previndex].className="zIndex"
  list[cur].style.webkitTransform ="scale("+(1-Math.abs(chandPox)/winH*ele)+") translate(0,"+chandPox+"px)";
	
	
}
function end(e){
	if(this.flig){
		list[this.previndex].style.webkitTransform="translate(0,0)"
	list[this.previndex].style.webkitTransition="0.5s"
	 list[this.previndex].addEventListener("webkitTransitionEnd",function(){
            this.style.webkitTransition = "";
            this.firstElementChild.id="a"+(this.index+1);
        },false)
	}
	
}
 
 setTimeout(function(){
 	list[0].firstElementChild.id="a1"
 },1000)
