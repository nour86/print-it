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


const n=slides.length; // =4
let i=1;

const arrowRight=document.querySelector(".arrow_right");
const arrowLeft=document.querySelector(".arrow_left");
const bannerImg=document.querySelector(".banner-img");
const bannerTagLine=document.querySelector("#banner p");
const dots=document.querySelector(".dots");

// Event listener sur les flèches

arrowLeft.addEventListener("click", function () {
	slide(-1);
})
arrowRight.addEventListener("click", function () {
	slide(+1);
})


// functions 


function createDots () {

	for (let j=1; j<=n ;j++) {
		const dot=document.createElement("div"); //on créé les div dots
		dot.setAttribute("class","dot");

		let id=`dot_${j}`; // on leur ajoute des Id pour les appeler plus facilement
		dot.setAttribute("id",id);
		
		dot.addEventListener("click", function(){ // au clic sur un dot, celui-ci est activé (class dot_activated) le Content (img, text) et l'index sont modifiés.			
			disableDot(i); // index précédent
			activateDot(j);
			changeContent(j);
			i=j; // nouvel index
			console.log(i);
			return i;
		})
		dots.appendChild(dot); // les dots sont ajoutés à la div principale
	}
}

function changeContent (index) {
	bannerImg.setAttribute("src","./assets/images/slideshow/"+slides[index-1].image);
	bannerTagLine.innerHTML=(slides[index-1].tagLine);
}


function activateDot (activePage) { //ajout de la class dot_selected 
	let active=`dot_${activePage}`;
	activeDot=document.getElementById(active);
	activeDot.setAttribute("class","dot dot_selected");
}

function disableDot (lastPage) { //retrait de la class dot_selected de la dernière page
	let lastActive=`dot_${lastPage}`;
		lastActiveDot=document.getElementById(lastActive);
		lastActiveDot.setAttribute("class","dot");
}


// slide //

function slide (index) {
	disableDot(i);
	i=i+index;
	infinite(i);
	changeContent(i);
	activateDot(i);
	console.log(i);
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
	createDots(n);
	activateDot(1);
}

main();
