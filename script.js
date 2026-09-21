
// ==========================
// PRODUCTOS
// ==========================

const contenedor = document.getElementById("contenedor-productos");
const filtroCategoria = document.getElementById("categoria");
const filtroCalibre = document.getElementById("calibre");

mostrarProductos(productos);

filtroCategoria.addEventListener("change", filtrarProductos);
filtroCalibre.addEventListener("change", filtrarProductos);

function filtrarProductos(){

    const categoria = filtroCategoria.value;
    const calibre = filtroCalibre.value;

    const resultado = productos.filter(producto=>{

        const okCategoria =
            categoria==="todos" ||
            producto.categoria===categoria;

        const okCalibre =
            calibre==="todos" ||
            producto.calibre===calibre;

        return okCategoria && okCalibre;

    });

    mostrarProductos(resultado);

}

function mostrarProductos(lista){

    contenedor.innerHTML="";

    lista.forEach(producto=>{

        let colores="";

        producto.colores.forEach(color=>{

            colores+=`
            <span class="color" style="background:${color};"></span>
            `;

        });

        contenedor.innerHTML+=`

        <div class="tarjeta">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="info">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                ${producto.calibre ? `<h4>Calibre: ${producto.calibre}</h4>` : ""} 

                <div class="colores">

                    ${colores}

                </div>

                <a class="boton"
                target="_blank"
                href="https://wa.me/573118888805?text=Hola, estoy interesado en ${producto.nombre}.">

                Cotizar por WhatsApp

                </a>

            </div>

        </div>

        `;

    });

}

// ==========================
// GALERÍA
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const imagenes = document.querySelectorAll(".imagen");
    const lightbox = document.getElementById("lightbox");
    const imagenLightbox = document.getElementById("imagenLightbox");
    const cerrar = document.querySelector(".cerrar");
    const anterior = document.querySelector(".anterior");
    const siguiente = document.querySelector(".siguiente");
    const contador = document.getElementById("contador");

    let indiceActual = 0;

    imagenes.forEach((card, indice) => {

        card.addEventListener("click", () => {

            indiceActual = indice;
            actualizarImagen();
            lightbox.style.display = "flex";

        });

    });

    function actualizarImagen() {

        const img = imagenes[indiceActual].querySelector("img");

        imagenLightbox.src = img.src;
        contador.textContent = `${indiceActual + 1} / ${imagenes.length}`;

    }

    cerrar.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    siguiente.addEventListener("click", () => {

        indiceActual++;

        if (indiceActual >= imagenes.length) {

            indiceActual = 0;

        }

        actualizarImagen();

    });

    anterior.addEventListener("click", () => {

        indiceActual--;

        if (indiceActual < 0) {

            indiceActual = imagenes.length - 1;

        }

        actualizarImagen();

    });

    document.addEventListener("keydown", (e) => {

        if (lightbox.style.display !== "flex") return;

        if (e.key === "ArrowRight") siguiente.click();

        if (e.key === "ArrowLeft") anterior.click();

        if (e.key === "Escape") cerrar.click();

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}); // ← Aquí sí queda correctamente cerrado el DOMContentLoaded



// ==========================
// SWIPER GALERÍA
// ==========================

new Swiper(".galeriaSwiper", {

    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 700,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {

        768: {
            slidesPerView: 2
        },

        992: {
            slidesPerView: 3
        },

        1300: {
            slidesPerView: 4
        }

    }

});


// ==========================
// SWIPER VIDEOS
// ==========================

new Swiper(".videosSwiper", {

    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 700,

    navigation: {

        nextEl: ".videos-next",

        prevEl: ".videos-prev"

    },

    pagination: {

        el: ".videos-pagination",

        clickable: true

    },

    breakpoints: {

        768: {

            slidesPerView: 2

        },

        992: {

            slidesPerView: 3

        },

        1300: {

            slidesPerView: 4

        }

    }

});

/*==========================
      SWIPER NOSOTROS
==========================*/

new Swiper(".nosotrosSwiper",{

    loop:true,

    speed:1000,

    effect:"fade",

    autoplay:{

        delay:2500,

        disableOnInteraction:false,

    },

});
// ==========================
// DESPLAZAMIENTO AL CATÁLOGO
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const botonCatalogo = document.querySelector(".btn-banner");
    const productos = document.getElementById("productos");

    if (botonCatalogo && productos) {

        botonCatalogo.addEventListener("click", (e) => {

            e.preventDefault();

            productos.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }

});
