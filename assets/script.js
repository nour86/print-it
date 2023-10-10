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

// constantes

let activePage=1;
const slideLength=slides.length;

const banner=document.getElementById("banner");
const bannerImg=document.querySelector(".banner-img");
const bannerTagLine=document.querySelector("#banner p");
const dots=document.querySelector(".dots");



// création des fleches

function createArrows(){


	const arrow_left=document.createElement("img");
	arrow_left.setAttribute("class","arrow arrow_left");
	arrow_left.setAttribute ("src","./assets/images/arrow_left.png");
	arrow_left.setAttribute ("alt","fleche gauche");
	
	banner.appendChild(arrow_left);
	const arrowLeft=document.querySelector(".arrow_left");

	const arrow_right=document.createElement("img");
	arrow_right.setAttribute("class","arrow arrow_right");
	arrow_right.setAttribute ("src","./assets/images/arrow_right.png");
	arrow_right.setAttribute ("alt","fleche droite");
	
	banner.appendChild(arrow_right);
	const arrowRight=document.querySelector(".arrow_right");

	// Event listener sur les flèches

	arrowLeft.addEventListener("click", function () {
		changePage("toLeft");
	})
	arrowRight.addEventListener("click", function () {
		changePage("toRight");
	})

}

function createDots () {

	for (let j=1; j<=slideLength ;j++) {
		const dot=document.createElement("div"); //on créé les div dots
		dot.setAttribute("class","dot");

		let id=`dot_${j}`; // on leur ajoute des Id pour les appeler plus facilement
		dot.setAttribute("id",id);
		
		dot.addEventListener("click", function(){ // au clic sur un dot, celui-ci est activé (class dot_activated) le Content (img, text) et l'index sont modifiés.			
			changePage(j,0);
		})
		dots.appendChild(dot); // les dots sont ajoutés à la div principale
	}
}

function changePage(index){ //

	let lastPage=activePage; // variable non nécessaire mais pour plus de lisibilité du code
	disableDot(lastPage);

	index === "toLeft" ? activePage-=1 : index === "toRight" ? activePage+=1 : activePage=index;

	infinite(activePage); // on s'assure que l'index activePage n'est pas hors des limites.
	activateDot(activePage);
	changeContent(activePage);
	return activePage;
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

function infinite(index) {
	index <= 0 ? activePage=slideLength : index > slideLength ? activePage=1 : activePage=index;
	return activePage;
}

function main () {
	createArrows();
	createDots(slideLength);
	activateDot(1);
}

main();
