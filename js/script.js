// Datos de los autos para el modal
const carsData = {
    1: {
        title: "JETOUR X70 MT1",
        image: "img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-FRENTE.jpeg",
        gallery: [
            "img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-LATERAL.jpeg",
            "img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-POSTERIOR.jpeg",
            "img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-CAJUELA.jpeg",
            "img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-TABLERO.jpeg"
        ],
        specs: [
            { name: "Tipo", value: "SUV" },
            { name: "Combustible", value: "Gasolina" },
            { name: "Transmisión", value: "Automática" },
            { name: "Tracción", value: "Consultar" },
            { name: "Kilometraje", value: "0 km" },
            { name: "Precio", value: "Consultar" }
        ],
        features: [
            "Pantalla táctil con conectividad",
            "Cámara de visión trasera",
            "Climatizador automático",
            "Asientos de cuero",
            "Control crucero",
            "Sensor de estacionamiento",
            "Llantas de aleación",
            "Diseño moderno y espacioso"
        ],
        whatsapp: "https://api.whatsapp.com/send?phone=593980375036&text=Hola%20NANTUCAR%2C%20estoy%20interesado%20en%20el%20JETOUR%20X70%20MT1.%20%C2%BFPueden%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
    },
    2: {
        title: "JAC HFC 1040",
        image: "img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-FRENTE.jpeg",
        gallery: [
            "img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-LATERAL.jpeg",
            "img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-INTERIOR.jpeg",
            "img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-POSTERIOR.jpeg",
            "img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-TABLERO.jpeg"
        ],
        specs: [
            { name: "Tipo", value: "Camión" },
            { name: "Combustible", value: "Diésel" },
            { name: "Transmisión", value: "Manual" },
            { name: "Kilometraje", value: "0 km" },
            { name: "Precio", value: "Consultar" }
        ],
        features: [
            "Motor diésel de alto rendimiento",
            "Estructura robusta para carga",
            "Cabina cómoda y funcional",
            "Sistema de frenos eficiente",
            "Dirección asistida",
            "Tablero completo con indicadores",
            "Ideal para uso comercial y logístico",
            "Garantía de fábrica"
        ],
        whatsapp: "https://api.whatsapp.com/send?phone=593980375036&text=Hola%20NANTUCAR%2C%20estoy%20interesado%20en%20el%20JAC%20HFC%201040.%20%C2%BFPueden%20darme%20m%C3%A1s%20informaci%C3%B3n%3F",
        pdf: "img/fichasPDF/Camione_ jac/HFC_1040_3.5_toneladas.pdf"
    },
    3: {
        title: "JETOUR X50 Manual",
        image: "img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-FRENTE.jpg",
        gallery: [
            "img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-LATERAL.jpeg",
            "img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-INTERIOR.jpeg",
            "img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-POSTERIOR.jpeg",
            "img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-TABLERO.jpeg"
        ],
        specs: [
            { name: "Tipo", value: "SUV Compacto" },
            { name: "Combustible", value: "Gasolina" },
            { name: "Transmisión", value: "Manual" },
            { name: "Tracción", value: "Consultar" },
            { name: "Kilometraje", value: "0 km" },
            { name: "Precio", value: "Consultar" }
        ],
        features: [
            "Diseño moderno y compacto",
            "Pantalla multimedia central",
            "Cámara de visión trasera",
            "Climatizador",
            "Llantas de aleación",
            "Sensores de estacionamiento",
            "Volante multifunción",
            "Garantía de fábrica"
        ],
        whatsapp: "https://api.whatsapp.com/send?phone=593980375036&text=Hola%20NANTUCAR%2C%20estoy%20interesado%20en%20el%20JETOUR%20X50%20Manual.%20%C2%BFPueden%20darme%20m%C3%A1s%20informaci%C3%B3n%3F",
        pdf: "img/fichasPDF/JENTOUR/JETOUR_X50.pdf"
    }
};

// Elementos del DOM
const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const specsList = document.getElementById('specsList');
const featuresList = document.getElementById('featuresList');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const closeModal = document.querySelector('.close-modal');
const detailButtons = document.querySelectorAll('.btn-details');
const mobileMenu = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const filterSelects = document.querySelectorAll('.filter-group select');
const carCards = document.querySelectorAll('.car-card');

// Abrir modal de detalles
detailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carId = button.getAttribute('data-car');
        const carData = carsData[carId];

        if (carData) {
            modalTitle.textContent = carData.title;
            modalImage.src = carData.image;
            modalImage.alt = carData.title;
            modalWhatsapp.href = carData.whatsapp;

            // Galería de fotos
            const gallery = document.getElementById('modalGallery');
            gallery.innerHTML = '';
            if (carData.gallery && carData.gallery.length > 0) {
                gallery.style.display = 'flex';
                const allImgs = [carData.image, ...carData.gallery];
                allImgs.forEach((src, i) => {
                    const thumb = document.createElement('img');
                    thumb.src = src;
                    thumb.alt = `${carData.title} - foto ${i + 1}`;
                    thumb.style.cssText = 'width:70px;height:50px;object-fit:cover;border-radius:4px;cursor:pointer;border:2px solid transparent;transition:border-color .2s;';
                    if (i === 0) thumb.style.borderColor = '#E30613';
                    thumb.addEventListener('click', () => {
                        modalImage.src = src;
                        gallery.querySelectorAll('img').forEach(t => t.style.borderColor = 'transparent');
                        thumb.style.borderColor = '#E30613';
                    });
                    gallery.appendChild(thumb);
                });
            } else {
                gallery.style.display = 'none';
            }

            // Limpiar listas
            specsList.innerHTML = '';
            featuresList.innerHTML = '';

            // Llenar especificaciones
            carData.specs.forEach(spec => {
                const specItem = document.createElement('div');
                specItem.className = 'spec-item';
                specItem.innerHTML = `<span>${spec.name}</span><span>${spec.value}</span>`;
                specsList.appendChild(specItem);
            });

            // Llenar características
            carData.features.forEach(feature => {
                const featureItem = document.createElement('span');
                featureItem.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                featuresList.appendChild(featureItem);
            });

            // Botón PDF
            const modalPDF = document.getElementById('modalPDF');
            if (modalPDF) {
                if (carData.pdf) {
                    modalPDF.href = carData.pdf.split('/').map(encodeURIComponent).join('/');
                    modalPDF.download = `Ficha Técnica - ${carData.title}.pdf`;
                    modalPDF.style.display = 'inline-flex';
                } else {
                    modalPDF.style.display = 'none';
                }
            }

            // Mostrar modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Menú móvil
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Filtros
filterSelects.forEach(select => {
    select.addEventListener('change', filterCars);
});

function filterCars() {
    const typeFilter = document.getElementById('type').value;
    const brandFilter = document.getElementById('brand').value;
    const priceFilter = document.getElementById('price').value;
    const yearFilter = document.getElementById('year').value;
    
    carCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        const cardBrand = card.getAttribute('data-brand');
        const cardPrice = parseInt(card.getAttribute('data-price'));
        const cardYear = card.getAttribute('data-year');
        
        let show = true;
        
        if (typeFilter !== 'all' && cardType !== typeFilter) {
            show = false;
        }
        
        if (brandFilter !== 'all' && cardBrand !== brandFilter) {
            show = false;
        }
        
        if (priceFilter !== 'all' && cardPrice > parseInt(priceFilter)) {
            show = false;
        }
        
        if (yearFilter !== 'all' && cardYear !== yearFilter) {
            show = false;
        }
        
        if (show) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Formulario de contacto (solo existe en contacto.html)
const contactForm = document.getElementById('formContact');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('show');
            }
        }
    });
});




// SISTEMA NANTUCAR - SOLO NÚMERO REAL
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚗 Sistema Nantucar iniciado');
    
    // SOLO TU NÚMERO - eliminar cualquier otro número
    const numeroNantucar = "593980375036";
    
    // 1. CONFIGURAR BOTÓN FLOTANTE
    const botonFlotante = document.querySelector('.whatsapp-float');
    if (botonFlotante) {
        botonFlotante.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Consulta General - Nantucar', numeroNantucar);
        });
        
        // También limpiar el href por si acaso
        botonFlotante.href = '#';
    }
    
    // 2. CONFIGURAR BOTONES DE AUTOS
    const botonesAutos = document.querySelectorAll('.car-actions .btn-whatsapp');
    console.log('🔧 Configurando', botonesAutos.length, 'botones de autos');
    
    botonesAutos.forEach((boton, index) => {
        // Limpiar href existente
        boton.href = '#';
        
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const tarjeta = this.closest('.car-card');
            const nombreAuto = tarjeta.querySelector('h3').textContent;
            const precioAuto = tarjeta.querySelector('.car-price').textContent;
            const infoAuto = `${nombreAuto} - ${precioAuto}`;
            
            abrirWhatsApp(infoAuto, numeroNantucar);
        });
    });
    
    // 3. CONFIGURAR BOTÓN DEL MODAL
    const botonModal = document.getElementById('modalWhatsapp');
    if (botonModal) {
        botonModal.href = '#';
        
        botonModal.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tituloAuto = document.getElementById('modalTitle').textContent;
            abrirWhatsApp(tituloAuto, numeroNantucar);
        });
    }
    
    console.log('✅ Todos los botones configurados correctamente');
});

// FUNCIÓN PARA ABRIR WHATSAPP
function abrirWhatsApp(mensajeAuto, numero) {
    const mensaje = `¡Hola Nantucar! Estoy interesado en: ${mensajeAuto}. ¿Podrían darme más información?`;
    
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    
    console.log('📞 Abriendo WhatsApp:', urlWhatsApp);
    window.open(urlWhatsApp, '_blank');
}