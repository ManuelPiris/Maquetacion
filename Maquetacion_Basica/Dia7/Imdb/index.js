function guardarPelicula(){
    
    let titulo = document.getElementById("titulo");
    let anio = document.getElementById("anioPublicado");
    let nacionalidad = document.getElementById("nacionalidad");
    let director = document.getElementById("director");
    let guionista = document.getElementById("guionista");
    let idioma = document.getElementById("idioma");
    let plataforma = document.getElementById("plataforma");
    let esMCU = document.getElementById("esMCU");
    let principal = document.getElementById("principal");
    let productor = document.getElementById("productor");
    let distribuidor = document.getElementById("distribuidor");
    let genero = document.getElementById("genero");
    let imagen = document.getElementById("portada");

    let peliculaTemp = new Movie(titulo.value,anio.value,nacionalidad.value,genero.value);
    peliculaTemp.actors = [];
    peliculaTemp.director = director.value;
    peliculaTemp.writer = guionista.value;
    peliculaTemp.language = idioma.value;
    peliculaTemp.plataform = plataforma.value;
    peliculaTemp.isMCU = esMCU.value;
    peliculaTemp.mainCharacterName = principal.value;
    peliculaTemp.producer = productor.value;
    peliculaTemp.distributor = distribuidor.value;
    peliculaTemp.image = imagen.value;

    peliculas.push(peliculaTemp);

    console.log(peliculaTemp);

    titulo.value = "";
    anio.value = "";
    nacionalidad.value = "";
    director.value = "";
    guionista.value = "";
    idioma.value = "";
    plataforma.value = "";
    principal.value = "";
    productor.value = "";
    distribuidor.value = "";
    genero.value = "";
    imagen.value = "";

    cargarPeliculas();
}


class Professional {

    constructor(name, age, genre, weight, height, hairColor, eyeColor, 
        race, isRetired, nationality, oscarsNumber, profession,image){
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
        this.image = image;
    }

    toString()
    {
        return "Nombre: "+ this.name + "\n" +
                "Edad: " + this.age + "\n" +
                "Genero: " + this.genre + "\n" +
                "Peso:" + this.weight + "\n" +
                "Altura:" + this.height + "\n`"+
                "Color de pelo: " + this.hairColor + "\n" +
                "Color de ojos: " + this.eyeColor + "\n" +
                "Raza: " + this.race + "\n" +
                "¿Está retirado?: " + this.isRetired + "\n" +
                "Nacionalidad: " + this.nationality + "\n" +
                "Número de Oscars: " + this.oscarsNumber + "\n" +
                "Profesión: " + this.profession + "\n" 
    }

    SoloNombre(){
        return `${this.name}`; 
    }

    toHtml(){
        return `<div class="col-xs-12 col-sm-6 col-md-4">`
        + `<div class="card">`
        + `<img class="card-img-top img-fluid imagen__pelicula" src="${this.image}" alt="${this.name}">`
        + `<div class="card-body">`
        +  `<h5 class="card-title">${this.name}</h5>`
        +  `<p class="card-text">Edad: ${this.age}<br>`
        +   `Genero:  ${this.genre}<br>` 
        +   `Peso: ${this.weight}<br>` 
        +   `Altura: ${this.height}<br>`
        +   `Color de pelo: ${this.hairColor}<br>`
        +   `Color de ojos: ${this.eyeColor}<br>`
        +   `Raza: ${this.race}<br>`
        +   `¿Está retirado?: ${this.isRetired}<br>`
        +   `Nacionalidad: ${this.nationality}<br>`
        +   `Número de Oscars: ${this.oscarsNumber}<br>`
        +   `Profesión: ${this.profession}<br>` 
        + `</div>`
        + `</div>`
        +`</div>`;
    }
}

class Movie{

    constructor(title, releaseYear ,nacionality ,genre){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
    }

    toString(){
        let actores ="";
        for(let actor in this.actors){
            actores += this.actors[actor].toString() + ", ";
        }
        return `Título: ${this.title}\n` +
        `Año publicado: ${this.releaseYear}\n` +
        `Actores: ${actores}\n` +
        `Nacionalidad: ${this.nacionality}\n` +
        `Director: ${this.director}\n` +
        `Guionista: ${this.writer}\n` +
        `Idioma: ${this.language}\n` +
        `Plataforma: ${this.plataform}\n` +
        `¿Es MCU?: ${this.isMCU}\n` +
        `Personaje principal: ${this.mainCharacterName}\n` +
        `Productor: ${this.producer}\n` +
        `Distribuidor: ${this.distributor}\n` +
        `Genero: ${this.genre}\n`;
    }

    toHtml(){
        let actores ="";
        for(let actor in this.actors){
            actores += ` ${this.actors[actor].SoloNombre()},`;
        }
        return `<div class="col-xs-12 col-sm-6 col-md-4">`
        + `<div class="card">`
        + `<img class="card-img-top img-fluid imagen__pelicula" src="${this.image}" alt="${this.title}">`
        + `<div class="card-body">`
        +  `<h5 class="card-title">${this.title}</h5>`
        +  `<p class="card-text">`
        +   `Año publicado: ${this.releaseYear}<br>`
        +   `Actores: ${actores}<br>`
        +   `Nacionalidad: ${this.nacionality}<br>`
        +   `Director: ${this.director}<br>`
        +   `Guionista: ${this.writer}<br>` 
        +   `Idioma: ${this.language}<br>` 
        +   `Plataforma: ${this.plataform}<br>` 
        +   `¿Es MCU?: ${this.isMCU}<br>` 
        +   `Personaje principal: ${this.mainCharacterName}<br>` 
        +   `Productor: ${this.producer}<br>`
        +   `Distribuidor: ${this.distributor}<br>`
        +   `Genero: ${this.genre}<br>`
        + `</p>`
        + `</div>`
        + `</div>`
        +`</div>`;
    }
}

function cargarPeliculas(){
    let peliculahtml = document.getElementById("peliculas");
    peliculahtml.innerHTML = "";
    for(let i=0;i<peliculas.length;i++){
        peliculahtml.innerHTML += peliculas[i].toHtml();
    }
}

function cargarActores(){
    for(let i=0;i<arrayActores.length;i++){
        let actoreshtml = document.getElementById("actores");
        actoreshtml.innerHTML += arrayActores[i].toHtml();
    }
}

let persona1 = new Professional("Robert Downey Jr.", 57, "hombre", 70, 175, "oscuro", 
"oscuros", "americano", false, "EEUU", 0, "actor", "./fotos/robert.jpg");

let persona2 = new Professional("Chris Hemsworth", 38, "hombre", 92, 190, "castaño", 
"claros", "americano", false, "EEUU", 0, "actor", "./fotos/chris.jpg");

let persona3 = new Professional("Scarlett Johansson", 37, "mujer", 55, 163, "rubia", 
"verde", "americana", false, "EEUU", 0, "actriz","./fotos/scarlet.jpg");

let persona4 = new Professional("Vin Diesel", 54, "hombre", 86, 182, "calvo", 
"oscuros", "latino", false, "EEUU", 0, "actor", "./fotos/diesel.jpg");

let persona5 = new Professional("Tom Cruise", 59, "hombre", 68, 170, "negro", 
"marron", "americano", false, "EEUU", 0, "actor", "./fotos/tom.jpg");

let persona6 = new Professional("Ed Harris", 71, "hombre", 70, 175, "blanco", 
"oscuros", "americano", false, "EEUU", 0, "actor", "./fotos/ed.jpg");

let arrayActor = [persona1,persona2,persona3];
let arrayActor2 = [persona2,persona5,persona4];
let arrayActor3 = [persona4,persona5,persona6];

let arrayActores =[persona1,persona2,persona3,persona4,persona5,persona6]


let pelicula1 = new Movie("Los Vengadores EndGame",2019,"EEUU","Ciencia Ficción");
pelicula1.actors = arrayActor;
pelicula1.director = "Anthony y Joe Russo";
pelicula1.writer = "Christopher Markus";
pelicula1.language = "Ingles";
pelicula1.plataform = "Cine";
pelicula1.isMCU = true;
pelicula1.mainCharacterName = "Robert Downey Jr.";
pelicula1.producer ="Kevin Feige";
pelicula1.distributor = "Marvel";
pelicula1.image = "./fotos/endgame.jpg";

let pelicula2 = new Movie("Los Vengadores Infinity War",2019,"EEUU","Ciencia Ficción");
pelicula2.actors = arrayActor3;
pelicula2.director = "Anthony y Joe Russo";
pelicula2.writer = "Christopher Markus";
pelicula2.language = "Ingles";
pelicula2.plataform = "Cine";
pelicula2.isMCU = true;
pelicula2.mainCharacterName = "Robert Downey Jr.";
pelicula2.producer ="Kevin Feige";
pelicula2.distributor = "Marvel";
pelicula2.image = "./fotos/infinitywar.jpg";

let pelicula3 = new Movie("Top Gun Maverick",2022,"EEUU","Acción");
pelicula3.actors = arrayActor2;
pelicula3.director = "Joseph Kosinski";
pelicula3.writer = "Ehren Kruger";
pelicula3.language = "Ingles";
pelicula3.plataform = "Cine";
pelicula3.isMCU = false;
pelicula3.mainCharacterName = "Tom Cruise";
pelicula3.producer ="SONY";
pelicula3.distributor = "Pictures Imagen";
pelicula3.image = "./fotos/topgun.jpg";


let peliculas =[pelicula1,pelicula2,pelicula3];

 cargarPeliculas();
 cargarActores();
