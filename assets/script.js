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


const slidesLength=slides.length; // =4
let activePage=1;
let increment=0;

const arrowRight=document.querySelector(".arrow_right");
const arrowLeft=document.querySelector(".arrow_left");
const bannerImg=document.querySelector(".banner-img");
const bannerTagLine=document.querySelector("#banner p");
const dots=document.querySelector(".dots");

// Event listener sur les flèches

arrowLeft.addEventListener("click", function(){
	changePage(activePage,-1);
})
arrowRight.addEventListener("click", function () {
	changePage(activePage,+1);
})


// functions 


function createDots () {

	for (let j=1; j<=slidesLength ;j++) {
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

function changePage(index,increment){ // prend en argument soit un index, soit un increment (+1 ou -1) => nouvel index.

	let lastPage=activePage; // variable non nécessaire mais pour plus de lisibilité du code
	disableDot(lastPage);
	activePage=index+increment;
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


// slide //



function infinite(index) {
	switch (index) {
		case 0:
			activePage=n
			break
		case slidesLength+1:
			activePage=1
			break
		default:
			break
		return activePage
	}
}


function main () {
	createDots(slidesLength);
	activateDot(1);
}

main();
