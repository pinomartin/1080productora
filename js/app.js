/*ANIMACION SLIDER INICIO*/
const tl = gsap.timeline({defaults: {
    ease : "power1.out"
}});

tl.to('.text' , {y: '0%', duration : 1, stagger: 0.20});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y:'-100%', duration: 1}, "-=1");

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.titulo', {opacity: 0}, {opacity: 1, duration: 1} , "-=1");



/*Firebase Form */
console.log(db)
//Agregar Todo's
const formConsultas = document.getElementById('formulario');
formConsultas.addEventListener('submit', (e) => {
    e.preventDefault();
    // //Datos/Id del usuario activo
    // const user = auth.currentUser;
    // const loggedInUserId = user.uid;
    
    db.collection('entradasForm').add({
        nombre : formConsultas['txtNombre'].value,
        email : formConsultas['txtEmail'].value,
        telefono: formConsultas['txtTelefono'].value,
        consulta: formConsultas['txtConsulta'].value,
    }).then(() => {
        
        console.log('Guardado Correctamente')
        
        formConsultas.reset();
    }).catch(err => {
        console.log(err.message);
    })
})