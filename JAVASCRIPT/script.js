// const webLogo = document.querySelector(".nav-bar > a")
// const navItem = document.querySelector(".nav-item");
// const allNavItem = document.querySelector(".nav-item ul > a");
// const dropDownMenu = document.querySelector(".dropdown-menu");

// navItem.addEventListener("mouseover", mouseHover);
// navItem.addEventListener("mouseout", mouseLeave);

// navItem.addEventListener("mouseout", (e)=> {
//     const target = e.target
//     const dropDown = target.nextElementSibling
// })

// function mouseHover(e){
//     const target = e.target
//     const dropDown = target.nextElementSibling
//     const mainTarget = target.parentElement.className;

//     const productsSection = mainTarget === "products-section";
//     const industriesSection = mainTarget === "industries-section";
//     const partnersSection = mainTarget === "partners-section";
//     const resourcesSection = mainTarget === "resources-section";

//     if(productsSection || industriesSection || partnersSection || resourcesSection){
//         dropDown.style.display = "flex";
//         console.log("just do it")
//     }
// }

// function mouseLeave(e){
//     const target = e.target
//     const ul = target.parentElement
//     const mainTarget = target.parentElement.className;

//     const productsSection = mainTarget === "products-section";
//     const industriesSection = mainTarget === "industries-section";
//     const partnersSection = mainTarget === "partners-section";
//     const resourcesSection = mainTarget === "resources-section";

//     if(productsSection || industriesSection || partnersSection || resourcesSection){
//         if(dropDown){
//             dropDown.style.display = "flex";
//         }
//         dropDown.style.display = "none";
//     }
// }