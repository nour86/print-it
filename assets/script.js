const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let n=slides.length;
let i=4;
let arrowRight=document.querySelector(".arrow_right");
let bannerImg=document.querySelector(".banner-img");
let bannerTagLine=document.getElementById("#banner");


// création des dots //
let dots=document.querySelector(".dots");
//


let arrowLeft=document.querySelector(".arrow_left");

// left click
arrowLeft.addEventListener("click", slideLeft ()) {
	console.log("Vous avez cliqué sur la fleche gauche")
};

function slideLeft (index) {
	i=i-1;
	

};


// right click

arrowLeft.oncontextmenu= function () {
	console.log("right click");
	return false; //désactive le right click par défaut
}

document.addEventListener('keypress', (event) => {
    console.log(event.key);
});



let div=`
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot dot_selected"></div>
	`;

dots.innerHTML=div;


//changer l'image de fond //
bannerImg.setAttribute("src","./assets/images/slideshow/slide2.jpg");

// bannerTagLine.innerHTML("test");



console.log(dots);