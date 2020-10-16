//*****Scroll Reveal***** 
sr = new ScrollReveal();

const settingsDefault = {
    delay: 0 , //ms
    distance: '', // ('px','rem','%')
    duration: 0, //ms
    easing: '', // ('ease','ease-in','step-start','ease-in-out')
    interval: 0, //ms (600=60fps)
    opacity: 0, // (0 to 1)
    origin: '', //('top','left','right','bottom')
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          //(xe. 20)
    scale: 0, // (0 to 1)
    desktop: true, 
    mobile: true 
}

/*VER ESTO de aca abajo*/


// const whatsappIcon = {
//     delay: 0 , //ms
//     distance: '100%', // ('px','rem','%')
//     duration: 10, //ms
//     easing: 'ease-in-out', // ('ease','ease-in','step-start','ease-in-out')
//     interval: 0, //ms (600=60fps)
//     opacity: 1, // (0 to 1)
//     origin: 'right', //('top','left','right','bottom')
//     rotate: {
//         x: 0,
//         y: 0,
//         z: 0
//     },          //(xe. 20)
//     scale: 1, // (0 to 1)
//     desktop: true, 
//     mobile: false 
// }

// sr.reveal('.float', whatsappIcon)

const parallax = {
    delay: 600 ,
    distance: '0%', 
    duration: 1400, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0, 
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: false 
}

sr.reveal('.jumbotron', parallax)

const waves = {
    delay: 700 ,
    distance: '0%', 
    duration: 1000, 
    easing: 'ease-in-out', 
    interval: 700, 
    opacity: 0.7, 
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: false 
}



sr.reveal('.video', waves)



//********About Section*********//
//Desktop & Mobile
const parrafoAbout = {
    delay: 50 ,
    distance: '20%', 
    duration: 1500, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0, 
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: true 
}
sr.reveal('.parrafo', parrafoAbout);

//********Service Section*********//
const services = {
    delay: 100 ,
    distance: '0%', 
    duration: 1500, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0, 
    origin: 'bottom',
    rotate: {
        x: 0,
        y: -100,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: false 
}

const servicesMobile = {
    delay: 50 ,
    distance: '50%', 
    duration: 1500, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0, 
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: false, 
    mobile: true 
}

sr.reveal('.card-container', services );
sr.reveal('.card-container', servicesMobile );

//********Youtube Videos Section*********//
/**Desktop */
const youtubeLeft = {
    delay: 100 ,
    distance: '100%', 
    duration: 1800, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0, 
    origin: 'left',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: false 
}

const youtubeRight = {
    delay: 100 ,
    distance: '100%', 
    duration: 1800, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0, 
    origin: 'right',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: false 
}

sr.reveal('.left', youtubeLeft);
sr.reveal('.right', youtubeRight);

/* Mobile*/
sr.reveal('.youtube', servicesMobile );



//********Footer Icons Section*********//



const footerIconLeft = {
    delay: 100 ,
    distance: '100%', 
    duration: 2000, 
    easing: 'ease-in-out', 
    interval: 400, 
    opacity: 0, 
    origin: 'left',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: true 
}

const footerIconRight = {
    delay: 100 ,
    distance: '100%', 
    duration: 2000, 
    easing: 'ease-in-out', 
    interval: 400, 
    opacity: 0, 
    origin: 'right',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 1,
    desktop: true, 
    mobile: true 
}

sr.reveal('.iconLeft', footerIconLeft);
sr.reveal('.iconCenter', parrafoAbout);
sr.reveal('.iconRight', footerIconRight);



//********Footer Icons Section*********//

sr.reveal('.foto-contacto', parrafoAbout);
sr.reveal('.form-row', parrafoAbout);
