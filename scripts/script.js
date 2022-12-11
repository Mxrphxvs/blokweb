// JavaScript Document
console.log("hi");


// https://stackoverflow.com/questions/3264739/image-change-every-30-seconds-loop 

    // const afbeelding = document.querySelector("main section:nth-of-type(3) img:nth-of-type(3)");

    // let AlleAkaliSkins = [], x = 0;
    // AlleAkaliSkins[0] = "/images/main/champion_skins-1.png";
    // AlleAkaliSkins[1] = "/images/main/champion_skins-2.png";
    // AlleAkaliSkins[2] = "/images/main/champion_skins-3.png";

    // setTimeout("AfbeeldingVeranderen()", 1500);

    // function AfbeeldingVeranderen() {
    //     afbeelding.src = AlleAkaliSkins[x];
    //     x++;        
    //     if(x >= AlleAkaliSkins.length) {
    //         x = 0;
    //     } 
    //     setTimeout("AfbeeldingVeranderen()", 1500);
    // }


// // Choose your champion

// const charImage = document.querySelector('main section:nth-of-type(2) img');
// const charName = document.querySelector('main section:nth-of-type(2) h3');
// const charDesc = document.querySelector('main section:nth-of-type(2) h4');

// const assasinBtn = document.querySelector('main section:nth-of-type(2) ul li:nth-of-type(1)');
// const fighterBtn = document.querySelector('main section:nth-of-type(2) ul li:nth-of-type(2)');
// const magesBtn = document.querySelector('main section:nth-of-type(2) ul li:nth-of-type(3)');
// const marksmanBtn = document.querySelector('main section:nth-of-type(2) ul li:nth-of-type(4)');
// const supportBtn = document.querySelector('main section:nth-of-type(2) ul li:nth-of-type(5)');
// const tankBtn = document.querySelector('main section:nth-of-type(2) ul li:nth-of-type(6)');

// function changeAssasin() {
//     charImage.src = 'images/main/roles_afbeelding-1.png';

//     charName.innerHTML = 'Akali';
//     charDesc.innerHTML = 'The rogue Assasin';
// }

// assasinBtn.addEventListener('click', changeAssasin);

// function changeFighter() {
//     charImage.src = 'images/main/roles_afbeelding-2.png';

//     charName.innerHTML = 'Yasuo';
//     charDesc.innerHTML = 'The Unforgiven';
// }

// fighterBtn.addEventListener('click', changeFighter);

// function changeMage() {
//     charImage.src = 'images/main/roles_afbeelding-3.png';

//     charName.innerHTML = 'Lux';
//     charDesc.innerHTML = 'The Lady of Luminosity';
// }

// magesBtn.addEventListener('click', changeMage);

// function changeMarksman() {
//     charImage.src = 'images/main/roles_afbeelding-4.png';

//     charName.innerHTML = 'Jinx';
//     charDesc.innerHTML = 'The Loose Cannon';
// }

// marksmanBtn.addEventListener('click', changeMarksman);

// function changeSupport() {
//     charImage.src = 'images/main/roles_afbeelding-5.png';

//     charName.innerHTML = 'Thresh';
//     charDesc.innerHTML = 'The Chain Warden';
// }

// supportBtn.addEventListener('click', changeSupport);

// function changeTank() {
//     charImage.src = 'images/main/roles_afbeelding-6.png';

//     charName.innerHTML = 'Leona';
//     charDesc.innerHTML = 'The Radiant Dawn';
// }

// tankBtn.addEventListener('click', changeTank);

// const linkjes = document.querySelectorAll("main section:nth-of-type(2) nav button");
// const deSection = document.querySelector("main section:nth-of-type(2)");

// linkjes.forEach(linkje => {
// 	linkje.addEventListener("click", toggleImgs);
// });


// function toggleImgs(event) {
// 	/* niet navigeren */
// 	event.preventDefault();
//     console.log("niet zo toch");
	
// 	if (deSection.classList.contains("busy")) {
// 		// do nothing - ik ben bezig
// 	} else {
// 		let geklikteA = this;
// 		let huidigeA = document.querySelector("main section:nth-of-type(2) nav button.active");
		
        

// 		huidigeA.classList.remove("active");
// 		geklikteA.classList.add("active");

// 		let newImg = geklikteA.querySelector("main section:nth-of-type(2) div > img");

// 		let lowerImg = document.querySelector("main section:nth-of-type(2) img:nth-of-type(1)");
// 		let upperImg = document.querySelector("main section:nth-of-type(2) img:nth-of-type(2)");

// 		let sourceForUpper = lowerImg.src;
// 		let sourceForLower = newImg.src;

// 		upperImg.src = sourceForUpper;
// 		upperImg.classList.remove("hide");
// 		lowerImg.src = sourceForLower;
		
// 		deSection.classList.add("busy");

// 		setTimeout(() => {
// 			upperImg.classList.add("hide");
// 			upperImg.addEventListener("animationend", iAmReady)
// 		}, 10);
// 	}
// }

// function iAmReady() {
// 	deSection.classList.remove("busy");
// }


const linkjes = document.querySelectorAll("main section:nth-of-type(2) ul button");
const deSection = document.querySelector("main section:nth-of-type(2)");



linkjes.forEach(linkje => {
	linkje.addEventListener("click", toggleImgs);
});


function toggleImgs(event) {
	/* niet navigeren */
	// event.preventDefault();
	
	if (deSection.classList.contains("busy")) {
		// do nothing - ik ben bezig
	} else {
		let geklikteA = this;
		let huidigeA = document.querySelector("main section:nth-of-type(2) ul button.active");
		
		huidigeA.classList.remove("active");
		geklikteA.classList.add("active");

		let newImg = geklikteA.querySelector("main section:nth-of-type(2) ul button img");

		let lowerImg = document.querySelector("main section:nth-of-type(2) div > img:nth-of-type(1)");
		let upperImg = document.querySelector("main section:nth-of-type(2) div > img:nth-of-type(2)");

		let sourceForUpper = lowerImg.src;
		let sourceForLower = newImg.src;

		upperImg.src = sourceForUpper;
		upperImg.classList.remove("hide");
		lowerImg.src = sourceForLower;
		
		deSection.classList.add("busy");

		setTimeout(() => {
			upperImg.classList.add("hide");
			upperImg.addEventListener("animationend", iAmReady)
		}, 10);
	}
}

function iAmReady() {
	deSection.classList.remove("busy");
}