// HEADER-------------------------------------------------------------------------------
let ubicacionPrincipalHeader = window.pageYOffset;
let header= document.querySelector('#header');
document.write(ubicacionPrincipalHeader);
window.addEventListener('scroll', eventoScroll);

function eventoScroll(){
    let ubicacionActualHeader= window.pageYOffset;
    if(ubicacionPrincipalHeader >= ubicacionActualHeader){
        header.style.top= '18em';
    }else{
        header.style.top='0em'
    }

    ubicacionPrincipalHeader=ubicacionActualHeader;
}
