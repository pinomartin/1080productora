//*****Scroll Reveal***** 
sr = new ScrollReveal();


// sr.reveal('.left', {distance: '100%', delay: 200, opacity: 0.8, origin: 'left', easing:'ease',desktop: true, 
// mobile: true })
// sr.reveal('.right', {distance: '100%', delay: 200,opacity: 0.8, origin: 'right', easing:'ease'})
// sr.reveal('.bottom', {distance: '100%', delay: 200,opacity: 0, origin: 'bottom', easing:'ease'})

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



const servicios = {
    delay: 100 ,
    distance: '0%', 
    duration: 1500, 
    easing: 'ease-in-out', 
    interval: 500, 
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

sr.reveal('.service-card', servicios );

const parrafoAbout = {
    delay: 50 ,
    distance: '20%', 
    duration: 1500, 
    easing: 'ease-in-out', 
    interval: 500, 
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
sr.reveal('.parrafo', parrafoAbout);


const blockquotes = {
    delay: 50 ,
    distance: '30%', 
    duration: 1500, 
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
    mobile: false 
}

sr.reveal('.blockquotes-container', blockquotes);
