//import { logut } from "../firebase/auth.js"
/*export const btnsign = (user)  => {
let btnSignOut = document.getElementById(user)
btnSignOut.addEventListener("click",async () => {
    try{
         let functionLogut= await logut()
         sessionStorage.clear();
        window.location.hash = '#/';
         return functionLogut
   }catch{
       console.log("no se sale")
   }    
})
}*/
/*
const cerrarSesion = () => {
    const btnCerrarSesion = document.getElementById('cierre');
    btnCerrarSesion.addEventListener('click', () => {
        try {
            let functionLogut = await logut()
            sessionStorage.clear();
            window.location.hash = '#/login';
            return functionLogut
        } catch {
            console.log("no se sale")
        }
    });
};*/
export const menuBar = () => {
    
    const templateMenuBar = `
    <div id="icons-menu" class="icons-menu">
        <div id="div-logo divs-menu" class="div-logo">
            <img class="logo-wall" src="./images/logos/favicon.png" alt="">
        </div>
        <span class="divs-menu">
            <i class="fa-solid fa-address-book fafa-menu"></i>
        </span>
        <span class="divs-menu" >
            <i class="fa-solid fa-bell fafa-menu"></i>
        </span>
        <span class="divs-menu" >
            <i class="fa-solid fa-house fafa-menu"></i>
        </span>
        <span class="divs-menu" >
            <i class="fa-solid fa-gear fafa-menu"></i>
        </span>
        <span class="divs-menu" >
            <i  id ="cierre" class="fa-solid fa-arrow-right-to-bracket fafa-menu"></i>
        </span>
    </div>
        `
    
    return templateMenuBar
}