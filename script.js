/*Se muestra la imagen que inicialmente esta oculta*/

const button = document.getElementById('button');   //Se obtiene el elemento button

//Se agrega el evento click
button.addEventListener('click', () => {

    const img = document.getElementById('image');   //Se obtiene el elemento image
    
    //Se tardan 8 segundos en establecer la fuente de la imagen
    setTimeout(() => {

        //Se establece la imagen y su atributo alt
        img.src = "https://images.pexels.com/photos/5475760/pexels-photo-5475760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        img.alt = "Cargando imagen...";
        
        //Se hace visible la imagen
        img.style.opacity = 1;
    }, 8000); 
});

