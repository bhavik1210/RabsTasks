const myslider = document.querySelectorAll('.myslider'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslider.length;i++){
		myslider[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslider.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslider.length;
	   }
       myslider[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}



function Whatsapp(){
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	var whatsappurl ="https://wa.me/919702360700?text="
	+"Name of Client:"+name + "%0a"
	+"Contact Number:"+number + "%0a"
	+"Email :"+email + "%0a"
	+"Message From Client:"+message ;
	window.open(whatsappurl,"blank").focus();



}

document.getElementById("button").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click",function(){
	document.querySelector(".popup").style.display ="none"
})

function toggleBtn(){
	const tbtn=document.querySelector(".btns")
	const add= document.getElementById("add")
	const remove= document.getElementById("remove")
	const finalbtn=document.querySelector(".btns").querySelectorAll("a")

		tbtn.classList.toggle("open");
		if(tbtn.classList.contains("open")){
			add.style.display="none";
			remove.style.display="block";

			finalbtn.forEach((e,i)=>{
				setTimeout(()=>{
					bottom = 40 * i;
					e.style.bottom = bottom + "px";
				},100 * i)
			})

		}else{
			add.style.display="block";
			remove.style.display="none";
			finalbtn.forEach (e => {
				e.style.bottom = "0px";
			})

		}
}