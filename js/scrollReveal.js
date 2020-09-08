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
    // delay: 500 ,
    distance: '0%', 
    duration: 1400, 
    easing: 'ease-in-out', 
    interval: 600, 
    opacity: 0.10, 
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
    delay: 0 ,
    distance: '', 
    duration: 0, 
    easing: '', 
    interval: 0, 
    opacity: 0, 
    origin: '',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },          
    scale: 0,
    desktop: true, 
    mobile: true 
}
