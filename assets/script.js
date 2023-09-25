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


let n=slides.length; // =4
let i=1;

let arrowRight=document.querySelector(".arrow_right");
let arrowLeft=document.querySelector(".arrow_left");
let bannerImg=document.querySelector(".banner-img");
let bannerTagLine=document.querySelector("#banner p");

// création des dots //
let dots=document.querySelector(".dots");
//

function setDots (index) {

	// remove child
	while (dots.lastElementChild) {
		dots.removeChild(dots.lastElementChild);
	  }

	//boucle pour ajouter les dots
	for (let j=0; j<n ;j++) {
		console.log(j);
		let dot=document.createElement("div");
			if (j===index-1) {
				dot.setAttribute("class","dot dot_selected");
			}
			else {dot.setAttribute("class","dot");}	
		dots.appendChild(dot);
	}
}

// left click
arrowLeft.addEventListener("click", function () {
	slide(-1);
})
// right click
arrowRight.addEventListener("click", function () {
	slide(+1);
})




function slide (index) {
	i=i+index;
	infinite(i);
	bannerImg.setAttribute("src","./assets/images/slideshow/"+slides[i-1].image);
	bannerTagLine.innerHTML=(slides[i-1].tagLine);
	setDots(i);
}

function infinite(index) {
	switch (index) {
		case 0:
			i=n
			break
		case n+1:
			i=1
			break
		default:
			break
		return i
	}
}


function main () {
	setDots(i);

}

main();




// // right click

// arrowLeft.oncontextmenu= function () {
// 	console.log("right click");
// 	return false; //désactive le right click par défaut
// }

// document.addEventListener('keypress', (event) => {
//     console.log(event.key);
// });

