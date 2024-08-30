//Clase RealImage ---> Es para la imagen de alta resolucion
class RealImage {
    constructor(filename) {
        this.filename = filename;   //Almacena el nombre del archivo de la imagen
        this.loadFromDisk();   //Carga la imagen desde el disco
    }

    loadFromDisk() {
        console.log('Cargando ' + this.filename + ' desde el disco...');   //Mensaje de depuracion
        this.imgElement = new Image();   //Crea un nuevo elemento de imagen
        this.imgElement.src = this.filename;   //Establece la fuente de la imagen

        //Cuando la imagen ha sido completamente cargada
        this.imgElement.onload = () => {
            this.imgElement.style.opacity = '1';   //Aparece la imagen con una transicion suave
        };
    }

    display() {
        const container = document.getElementById('image-container');   //Obtiene el contenedor de la imagen
        container.innerHTML = '';   //Se limpia cualquier contenido previo en el contenedor
        container.appendChild(this.imgElement);   //Añade la imagen al contenedor
    }
}

//Clase ProxyImage ---> Actua como intermediario para RealImage
class ProxyImage {
    constructor(filename) {
        this.filename = filename;   //Almacena el nombre del archivo de la imagen
        this.realImage = null;   //Inicialmente no se ha cargado la imagen real
    }

    display() {
        if (this.realImage === null) {   //Si la imagen real todavia no ha sido cargada
            this.realImage = new RealImage(this.filename);   //Carga la imagen real
        }
        this.realImage.display();   //Muestra la imagen (cargada o ya existente)
    }
}

//Uso del Proxy
document.getElementById('loadImage').addEventListener('click', () => {
    //Crea una instancia de ProxyImage con la URL de la imagen de alta resolucion
    const proxyImage = new ProxyImage('https://images.pexels.com/photos/5475760/pexels-photo-5475760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    // Muestra la imagen cuando se hace clic en el boton
    proxyImage.display();
});
