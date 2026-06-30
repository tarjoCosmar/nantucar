// main.js — NANTUCAR | Inventario, filtros, calculadora, formularios

const autosNuevos = [

    // ─── CAMIONES JAC (18) ───────────────────────────────────────────
    { id: 1,  img: 'img/jac-hfc1030.jpg',        titulo: 'JAC HFC 1030',              precio: 0, descripcion: 'Nuevo | Camión | 2.5 Toneladas | 0 km',        specs: ['Carga máx: 2.5 Ton'],                         tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 2,  img: 'img/autos/Camion%20JAC%201035%20DOBLE%20CABINA/Camion%20JAC%201035%20DOBLE%20CABINA%20FRENTE.jpeg', titulo: 'JAC HFC Doble Cabina 2 Ton',precio: 0, descripcion: 'Nuevo | Camión | 2 Toneladas | Doble Cabina',   specs: ['Carga máx: 2 Ton', 'Cabina: Doble'],          tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 3,  img: 'img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-FRENTE.jpeg', titulo: 'JAC HFC 1040',              precio: 0, descripcion: 'Nuevo | Camión | 3.5 Toneladas | 0 km',        specs: ['Carga máx: 3.5 Ton'],                         tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 4,  img: 'img/autos/JAC%20HFC%201060/JAC%20HFC%201060%20FRENTE.jpeg',     titulo: 'JAC HFC 1060',              precio: 0, descripcion: 'Nuevo | Camión | 5.5 Toneladas | 0 km',        specs: ['Carga máx: 5.5 Ton'],                         tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 5,  img: 'img/autos/JAC%20HFC%201063%20KN/JAC%20HFC%201063%20KN%20FRENTE.jpeg',      titulo: 'JAC HFC 1063 KN',           precio: 0, descripcion: 'Nuevo | Camión | 6 Toneladas | 0 km',          specs: ['Carga máx: 6 Ton'],                           tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 6,  img: 'img/autos/JAC%20HFC%201120/JAC%20HFC%201120%20FRENTE.jpeg',        titulo: 'JAC HFC 1120',              precio: 0, descripcion: 'Nuevo | Camión | 8 Toneladas | 0 km',          specs: ['Carga máx: 8 Ton'],                           tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 7,  img: 'img/autos/JAC%201140%2011%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.01%20AM.jpeg', titulo: 'JAC HFC 1140',              precio: 0, descripcion: 'Nuevo | Camión | 11 Toneladas | 0 km',         specs: ['Carga máx: 11 Ton'],                          tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 8,  img: 'img/autos/JAC%201160%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.13%20AM.jpeg',     titulo: 'JAC HFC 1160',              precio: 0, descripcion: 'Nuevo | Camión | 13 Toneladas | 0 km',         specs: ['Carga máx: 13 Ton'],                          tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 9,  img: 'img/autos/JAC%201180%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.26%20AM.jpeg',        titulo: 'JAC HFC 1180 320 HP',       precio: 0, descripcion: 'Nuevo | Camión | 13 Toneladas | 320 HP',       specs: ['Carga máx: 13 Ton', 'Potencia: 320 HP'],      tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 10, img: 'img/jac-hfc1220.jpg',        titulo: 'JAC HFC 1220',              precio: 0, descripcion: 'Nuevo | Camión | 18 Toneladas | 0 km',         specs: ['Carga máx: 18 Ton'],                          tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 11, img: 'img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.39%20AM.jpeg', titulo: 'JAC HFC 1252',              precio: 0, descripcion: 'Nuevo | Camión | 18.7 Toneladas | 0 km',       specs: ['Carga máx: 18.7 Ton'],                        tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 12, img: 'img/autos/CABEZAL%204181%2017%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.51%20AM.jpeg',        titulo: 'JAC HFC 4181',              precio: 0, descripcion: 'Nuevo | Tractocamión | 28 Toneladas | 0 km',   specs: ['Carga máx: 28 Ton', 'Tipo: Tractocamión'],    tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 13, img: 'img/jac-hfc4250.jpg',        titulo: 'JAC HFC 4250',              precio: 0, descripcion: 'Nuevo | Tractocamión | 42 Toneladas | 0 km',   specs: ['Carga máx: 42 Ton', 'Tipo: Tractocamión'],    tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 14, img: 'img/jac-hfc4254.jpg',        titulo: 'JAC HFC 4254',              precio: 0, descripcion: 'Nuevo | Tractocamión | 48 Toneladas | 0 km',   specs: ['Carga máx: 48 Ton', 'Tipo: Tractocamión'],    tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 15, img: 'img/jac-q7.jpg',             titulo: 'JAC Q7',                    precio: 0, descripcion: 'Nuevo | Tractocamión | 48 Toneladas | 0 km',   specs: ['Carga máx: 48 Ton', 'Tipo: Tractocamión'],    tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 16, img: 'img/jac-k7.jpg',             titulo: 'JAC K7',                    precio: 0, descripcion: 'Nuevo | Tractocamión | 48 Toneladas | 0 km',   specs: ['Carga máx: 48 Ton', 'Tipo: Tractocamión'],    tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 17, img: 'img/jac-hfc5251-mixer.jpg',  titulo: 'JAC HFC 5251 Mixer',        precio: 0, descripcion: 'Nuevo | Camión Mixer / Hormigonera | 0 km',    specs: ['Tipo: Hormigonera / Mixer'],                   tipo: 'nuevo', marca: 'jac',    modelo: 'camion',    categoria: 'Camiones JAC' },
    { id: 18, img: 'img/autos/VOLQUETA%204254%2012M3/WhatsApp%20Image%202026-06-29%20at%2011.12.19%20AM.jpeg', titulo: 'JAC HFC 4254 Volqueta 12M3', precio: 0, descripcion: 'Nuevo | Volqueta | 12 m³ | 0 km',          specs: ['Tipo: Volqueta', 'Capacidad: 12 m³'],         tipo: 'nuevo', marca: 'jac',    modelo: 'volqueta',  categoria: 'Volquetas' },

    // ─── CAMIONETAS (6) ──────────────────────────────────────────────
    { id: 19, img: 'img/autos/JAC%20T6%20Gasolina/JAC%20T6%20Gasolina%20FRENTE.jpeg',    titulo: 'JAC T6 Gasolina',           precio: 0, descripcion: 'Nuevo | Camioneta 4x4 | Gasolina | 0 km',      specs: ['Combustible: Gasolina', 'Tracción: 4x4'],     tipo: 'nuevo', marca: 'jac',    modelo: 'camioneta', categoria: 'Camionetas' },
    { id: 20, img: 'img/autos/JAC%20T6%20Diesel/WhatsApp%20Image%202026-06-25%20at%205.51.22%20PM.jpeg',      titulo: 'JAC T6 Diésel',             precio: 0, descripcion: 'Nuevo | Camioneta 4x4 | Diésel | 0 km',        specs: ['Combustible: Diésel', 'Tracción: 4x4'],       tipo: 'nuevo', marca: 'jac',    modelo: 'camioneta', categoria: 'Camionetas' },
    { id: 21, img: 'img/autos/JAC%20T8/JAC%20T8%20FRENTE.jpeg',             titulo: 'JAC T8',                    precio: 0, descripcion: 'Nuevo | Camioneta | Gasolina | 0 km',          specs: ['Combustible: Gasolina'],                      tipo: 'nuevo', marca: 'jac',    modelo: 'camioneta', categoria: 'Camionetas' },
    { id: 22, img: 'img/autos/JAC%20T8%20Pro/JAC%20T8%20Pro%20FRENTE.jpeg',         titulo: 'JAC T8 Pro',                precio: 0, descripcion: 'Nuevo | Camioneta Premium | Gasolina | 0 km',  specs: ['Versión: Pro', 'Combustible: Gasolina'],      tipo: 'nuevo', marca: 'jac',    modelo: 'camioneta', categoria: 'Camionetas' },
    { id: 23, img: 'img/autos/JAC%20T9/JAC%20T9%20FRENTE.jpeg',             titulo: 'JAC T9',                    precio: 0, descripcion: 'Nuevo | Camioneta Full Size | Gasolina | 0 km',specs: ['Combustible: Gasolina'],                      tipo: 'nuevo', marca: 'jac',    modelo: 'camioneta', categoria: 'Camionetas' },
    { id: 24, img: 'img/jac-ejs1.jpg',           titulo: 'JAC E JS1 Eléctrico',       precio: 0, descripcion: 'Nuevo | Auto Eléctrico | 0 km',                specs: ['Motor: 100% Eléctrico', 'Emisiones: 0 CO₂'],  tipo: 'nuevo', marca: 'jac',    modelo: 'electrico', categoria: 'Camionetas' },

    // ─── JETOUR (7) ──────────────────────────────────────────────────
    { id: 25, img: 'img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-FRENTE.jpg', titulo: 'JETOUR X50',                precio: 0, descripcion: 'Nuevo | SUV Compacto | 0 km',                  specs: ['Tipo: SUV Compacto'],                         tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 26, img: 'img/jetour-x70-sport.jpg',   titulo: 'JETOUR X70 Sport',          precio: 0, descripcion: 'Nuevo | SUV | Versión Sport | 0 km',           specs: ['Versión: Sport'],                             tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 27, img: 'img/autos/JETOUR%20X70%20Plus/JETOUR%20X70%20Plus%20FRENTE.jpeg',    titulo: 'JETOUR X70 Plus',           precio: 0, descripcion: 'Nuevo | SUV | Versión Plus | 0 km',            specs: ['Versión: Plus'],                              tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 28, img: 'img/jetour-dashing.jpg',     titulo: 'JETOUR Dashing',            precio: 0, descripcion: 'Nuevo | SUV Deportivo | 0 km',                 specs: ['Tipo: SUV Deportivo'],                        tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 29, img: 'img/jetour-t1.jpg',          titulo: 'JETOUR T1',                 precio: 0, descripcion: 'Nuevo | SUV | 0 km',                           specs: ['Tipo: SUV'],                                  tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 30, img: 'img/jetour-traveller-t2.jpg',titulo: 'JETOUR Traveller T2',       precio: 0, descripcion: 'Nuevo | MPV / SUV | 0 km',                     specs: ['Tipo: MPV'],                                  tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 31, img: 'img/jetour-t2-hibrido.jpg',  titulo: 'JETOUR T2 Híbrido',         precio: 0, descripcion: 'Nuevo | SUV Híbrido | 0 km',                   specs: ['Motor: Híbrido', 'Emisiones reducidas'],      tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },
    { id: 38, img: 'img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-FRENTE.jpeg', titulo: 'JETOUR X70 MT1',   precio: 0, descripcion: 'Nuevo | SUV | 0 km',                           specs: ['Tipo: SUV'],                                  tipo: 'nuevo', marca: 'jetour', modelo: 'suv',       categoria: 'Jetour' },

    // ─── BUSETAS JAC (4) ─────────────────────────────────────────────
    { id: 32, img: 'img/jac-m4.jpg',             titulo: 'JAC M4',                    precio: 0, descripcion: 'Nuevo | Buseta | 11 Pasajeros | 0 km',         specs: ['Pasajeros: 11'],                              tipo: 'nuevo', marca: 'jac',    modelo: 'buseta',    categoria: 'Busetas JAC' },
    { id: 33, img: 'img/jac-sunray-6491.jpg',    titulo: 'JAC Sunray HFC 6491',       precio: 0, descripcion: 'Nuevo | Minibús | 0 km',                       specs: ['Tipo: Minibús'],                              tipo: 'nuevo', marca: 'jac',    modelo: 'buseta',    categoria: 'Busetas JAC' },
    { id: 34, img: 'img/jac-sunray-16.jpg',      titulo: 'JAC Sunray 16+1',           precio: 0, descripcion: 'Nuevo | Buseta | 16+1 Pasajeros | 0 km',       specs: ['Pasajeros: 16+1'],                            tipo: 'nuevo', marca: 'jac',    modelo: 'buseta',    categoria: 'Busetas JAC' },
    { id: 35, img: 'img/jac-coaster.jpg',        titulo: 'JAC Coaster',               precio: 0, descripcion: 'Nuevo | Bus Mediano | 20+1 Pasajeros | 0 km',  specs: ['Pasajeros: 20+1'],                            tipo: 'nuevo', marca: 'jac',    modelo: 'buseta',    categoria: 'Busetas JAC' },

    // ─── KARRY (2) ───────────────────────────────────────────────────
    { id: 36, img: 'img/autos/KARRY%20Mini%20Van/KARRY%20Mini%20Van%20FRENTE.jpeg',      titulo: 'KARRY Mini Van',            precio: 0, descripcion: 'Nuevo | Mini Van | 11 Pasajeros | 0 km',       specs: ['Pasajeros: 11', 'Tipo: Mini Van'],            tipo: 'nuevo', marca: 'karry',  modelo: 'minivan',   categoria: 'Karry' },
    { id: 37, img: 'img/autos/KARRY%20Pick%20Up%20CSCD/KARRY%20Pick%20Up%20CSCD%20FRENTE.jpeg',       titulo: 'KARRY Pick Up CS/CD',       precio: 0, descripcion: 'Nuevo | Camioneta | CS / CD | 0 km',           specs: ['Cabina: Simple y Doble disponibles'],         tipo: 'nuevo', marca: 'karry',  modelo: 'camioneta', categoria: 'Karry' },

    // ─── VOLQUETAS (2) ───────────────────────────────────────────────
    { id: 40, img: 'img/autos/VOLQUETA%204250%208M3%2017TON/WhatsApp%20Image%202026-06-29%20at%2011.12.06%20AM.jpeg', titulo: 'JAC HFC 4250 Volqueta 8M3', precio: 0, descripcion: 'Nuevo | Volqueta | 17 Toneladas | 8 m³ | 0 km', specs: ['Tipo: Volqueta', 'Capacidad: 8 m³', 'Carga máx: 17 Ton'], tipo: 'nuevo', marca: 'jac', modelo: 'volqueta', categoria: 'Volquetas' }
];

const galeriaAutos = {
    3:  ['img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-LATERAL.jpeg','img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-INTERIOR.jpeg','img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-POSTERIOR.jpeg','img/autos/CAMION%20JAC%201040/CAMION_JAC-1040-TABLERO.jpeg'],
    7:  ['img/autos/JAC%201140%2011%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.01%20AM%20%281%29.jpeg','img/autos/JAC%201140%2011%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.02%20AM.jpeg','img/autos/JAC%201140%2011%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.02%20AM%20%281%29.jpeg','img/autos/JAC%201140%2011%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.02%20AM%20%282%29.jpeg','img/autos/JAC%201140%2011%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.02%20AM%20%283%29.jpeg'],
    25: ['img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-LATERAL.jpeg','img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-INTERIOR.jpeg','img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-POSTERIOR.jpeg','img/autos/JETOUR%20X50%20MANUAL/JETOUR_X50_MANUAL-TABLERO.jpeg'],
    38: ['img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-LATERAL.jpeg','img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-POSTERIOR.jpeg','img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-CAJUELA.jpeg','img/autos/JETOUR%20X70%20MTI/JETOUR_X70MTI-TABLERO.jpeg'],
    2:  ['img/autos/Camion%20JAC%201035%20DOBLE%20CABINA/Camion%20JAC%201035%20DOBLE%20CABINA%20LATERAL.jpeg','img/autos/Camion%20JAC%201035%20DOBLE%20CABINA/Camion%20JAC%201035%20DOBLE%20CABINA%20POSTERIOR.jpeg','img/autos/Camion%20JAC%201035%20DOBLE%20CABINA/Camion%20JAC%201035%20DOBLE%20CABINA%20CABINA%201.jpeg','img/autos/Camion%20JAC%201035%20DOBLE%20CABINA/Camion%20JAC%201035%20DOBLE%20CABINA%20CABINA%202.jpeg','img/autos/Camion%20JAC%201035%20DOBLE%20CABINA/Camion%20JAC%201035%20DOBLE%20CABINA%20TABLERO.jpeg'],
    4:  ['img/autos/JAC%20HFC%201060/JAC%20HFC%201060%20LATERAL.jpeg','img/autos/JAC%20HFC%201060/JAC%20HFC%201060%20POSTERIOR.jpeg','img/autos/JAC%20HFC%201060/JAC%20HFC%201060%20CABINA.jpeg','img/autos/JAC%20HFC%201060/JAC%20HFC%201060%20TABLERO.jpeg'],
    5:  ['img/autos/JAC%20HFC%201063%20KN/JAC%20HFC%201063%20KN%20LATERAL.jpeg','img/autos/JAC%20HFC%201063%20KN/JAC%20HFC%201063%20KN%20POSTERIOR.jpeg','img/autos/JAC%20HFC%201063%20KN/JAC%20HFC%201063%20KN%20CABINA.jpeg','img/autos/JAC%20HFC%201063%20KN/JAC%20HFC%201063%20KN%20TABLERO.jpeg'],
    6:  ['img/autos/JAC%20HFC%201120/JAC%20HFC%201120%20LATERAL.jpeg','img/autos/JAC%20HFC%201120/JAC%20HFC%201120%20POSTERIOR.jpeg','img/autos/JAC%20HFC%201120/JAC%20HFC%201120%20ESQUINA.jpeg'],
    8:  ['img/autos/JAC%201160%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.13%20AM%20%281%29.jpeg','img/autos/JAC%201160%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.14%20AM.jpeg','img/autos/JAC%201160%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.14%20AM%20%281%29.jpeg','img/autos/JAC%201160%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.14%20AM%20%282%29.jpeg','img/autos/JAC%201160%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.15%20AM.jpeg'],
    19: ['img/autos/JAC%20T6%20Gasolina/JAC%20T6%20Gasolina%20LATERAL%20D.jpeg','img/autos/JAC%20T6%20Gasolina/JAC%20T6%20Gasolina%20LATERAL%20I.jpeg','img/autos/JAC%20T6%20Gasolina/JAC%20T6%20Gasolina%20POSTERIOR.jpeg','img/autos/JAC%20T6%20Gasolina/JAC%20T6%20Gasolina%20CABINA.jpeg'],
    20: ['img/autos/JAC%20T6%20Diesel/WhatsApp%20Image%202026-06-25%20at%205.51.22%20PM%20%281%29.jpeg','img/autos/JAC%20T6%20Diesel/WhatsApp%20Image%202026-06-25%20at%205.51.23%20PM.jpeg','img/autos/JAC%20T6%20Diesel/WhatsApp%20Image%202026-06-25%20at%205.51.23%20PM%20%281%29.jpeg','img/autos/JAC%20T6%20Diesel/WhatsApp%20Image%202026-06-25%20at%205.51.24%20PM.jpeg'],
    21: ['img/autos/JAC%20T8/JAC%20T8%20LATERAL.jpeg','img/autos/JAC%20T8/JAC%20T8%20LATERAL%20I.jpeg','img/autos/JAC%20T8/JAC%20T8%20POSTERIOR.jpeg','img/autos/JAC%20T8/JAC%20T8%20CABINA.jpeg'],
    22: ['img/autos/JAC%20T8%20Pro/JAC%20T8%20Pro%20TABLERO.jpeg','img/autos/JAC%20T8%20Pro/JAC%20T8%20Pro%20CABINA.jpeg'],
    23: ['img/autos/JAC%20T9/JAC%20T9%20LATERAL.jpeg','img/autos/JAC%20T9/JAC%20T9%20QUEMACOCOS.jpeg','img/autos/JAC%20T9/JAC%20T9TABLERO.jpeg'],
    27: ['img/autos/JETOUR%20X70%20Plus/JETOUR%20X70%20Plus%20LATERAL.jpeg','img/autos/JETOUR%20X70%20Plus/JETOUR%20X70%20Plus%20POSTERIOR.jpeg','img/autos/JETOUR%20X70%20Plus/JETOUR%20X70%20Plus%20ESQUINA.jpeg','img/autos/JETOUR%20X70%20Plus/JETOUR%20X70%20Plus%20CABINA.jpeg'],
    36: ['img/autos/KARRY%20Mini%20Van/KARRY%20Mini%20Van%20LATERAL.jpeg','img/autos/KARRY%20Mini%20Van/KARRY%20Mini%20Van%20POSTERIOR.jpeg','img/autos/KARRY%20Mini%20Van/KARRY%20Mini%20Van%20CABINA.jpeg','img/autos/KARRY%20Mini%20Van/KARRY%20Mini%20Van%20TABLERO.jpeg','img/autos/KARRY%20Mini%20Van/KARRY%20Mini%20Van%20LATE.jpeg'],
    37: ['img/autos/KARRY%20Pick%20Up%20CSCD/KARRY%20Pick%20Up%20CSCD%20LATERAL.jpeg','img/autos/KARRY%20Pick%20Up%20CSCD/KARRY%20Pick%20Up%20CSCD%20POSTERIOR.jpeg','img/autos/KARRY%20Pick%20Up%20CSCD/KARRY%20Pick%20Up%20CSCD%20FRENTE%20I.jpeg'],
    9:  ['img/autos/JAC%201180%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.26%20AM%20%281%29.jpeg','img/autos/JAC%201180%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.27%20AM.jpeg','img/autos/JAC%201180%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.27%20AM%20%281%29.jpeg','img/autos/JAC%201180%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.27%20AM%20%282%29.jpeg','img/autos/JAC%201180%2013%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.28%20AM.jpeg'],
    11: ['img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.39%20AM%20%281%29.jpeg','img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.40%20AM.jpeg','img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.40%20AM%20%281%29.jpeg','img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.40%20AM%20%282%29.jpeg','img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.40%20AM%20%283%29.jpeg','img/autos/JAC%201252%2018.7%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.41%20AM.jpeg'],
    12: ['img/autos/CABEZAL%204181%2017%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.52%20AM.jpeg','img/autos/CABEZAL%204181%2017%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.52%20AM%20%281%29.jpeg','img/autos/CABEZAL%204181%2017%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.53%20AM.jpeg','img/autos/CABEZAL%204181%2017%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.53%20AM%20%281%29.jpeg','img/autos/CABEZAL%204181%2017%20TON/WhatsApp%20Image%202026-06-29%20at%2011.11.53%20AM%20%282%29.jpeg'],
    18: ['img/autos/VOLQUETA%204254%2012M3/WhatsApp%20Image%202026-06-29%20at%2011.12.20%20AM.jpeg','img/autos/VOLQUETA%204254%2012M3/WhatsApp%20Image%202026-06-29%20at%2011.12.20%20AM%20%281%29.jpeg','img/autos/VOLQUETA%204254%2012M3/WhatsApp%20Image%202026-06-29%20at%2011.12.20%20AM%20%282%29.jpeg','img/autos/VOLQUETA%204254%2012M3/WhatsApp%20Image%202026-06-29%20at%2011.12.20%20AM%20%283%29.jpeg','img/autos/VOLQUETA%204254%2012M3/WhatsApp%20Image%202026-06-29%20at%2011.12.20%20AM%20%284%29.jpeg'],
    40: ['img/autos/VOLQUETA%204250%208M3%2017TON/WhatsApp%20Image%202026-06-29%20at%2011.12.06%20AM%20%281%29.jpeg','img/autos/VOLQUETA%204250%208M3%2017TON/WhatsApp%20Image%202026-06-29%20at%2011.12.06%20AM%20%282%29.jpeg','img/autos/VOLQUETA%204250%208M3%2017TON/WhatsApp%20Image%202026-06-29%20at%2011.12.06%20AM%20%283%29.jpeg','img/autos/VOLQUETA%204250%208M3%2017TON/WhatsApp%20Image%202026-06-29%20at%2011.12.07%20AM.jpeg','img/autos/VOLQUETA%204250%208M3%2017TON/WhatsApp%20Image%202026-06-29%20at%2011.12.07%20AM%20%281%29.jpeg']
};

const fichasPDF = {
    1:  'img/fichasPDF/Camione_ jac/HFC 1030 2.5 toneladas.pdf',
    2:  'img/fichasPDF/Camione_ jac/HFC_2_toneladas_doble_cabina.pdf',
    3:  'img/fichasPDF/Camione_ jac/HFC_1040_3.5_toneladas.pdf',
    4:  'img/fichasPDF/Camione_ jac/HFC_1060_5.5_toneladas.pdf',
    5:  'img/fichasPDF/Camione_ jac/HFC_1063_KN_6_TONELADAS.pdf',
    6:  'img/fichasPDF/Camione_ jac/HFC_1120_8_TONELADAS.pdf',
    7:  'img/fichasPDF/Camione_ jac/HFC_1040_11_TONELADAS.pdf',
    8:  'img/fichasPDF/Camione_ jac/HFC_1060_13_TONELADAS.pdf',
    9:  'img/fichasPDF/Camione_ jac/HFC_1180_13_TONELADAS_320_HP.pdf',
    10: 'img/fichasPDF/Camione_ jac/HFC_1220_18_TON.pdf',
    11: 'img/fichasPDF/Camione_ jac/HFC 1252 18.5 TON.pdf',
    12: 'img/fichasPDF/Camione_ jac/HFC_4181_28TON.pdf',
    13: 'img/fichasPDF/Camione_ jac/HFC_4250_42TON.pdf',
    14: 'img/fichasPDF/Camione_ jac/HFC_4254_48TON.pdf',
    15: 'img/fichasPDF/Camione_ jac/JAC_Q7_48TON.pdf',
    16: 'img/fichasPDF/Camione_ jac/K7_48TON.pdf',
    17: 'img/fichasPDF/Camione_ jac/HFC 5251_MIXER.pdf',
    18: 'img/fichasPDF/Camione_ jac/VOLQUETA_HFC_4254.pdf',
    19: 'img/fichasPDF/CAMONETAS/JAC_T6_GASOLINA.pdf',
    20: 'img/fichasPDF/CAMONETAS/JAC_T6_DIESEL.pdf',
    21: 'img/fichasPDF/CAMONETAS/JAC_T8.pdf',
    22: 'img/fichasPDF/CAMONETAS/JAC_T8_PRO.pdf',
    23: 'img/fichasPDF/CAMONETAS/JAC_T9.pdf',
    24: 'img/fichasPDF/CAMONETAS/E JS1_AUTO_ELÉCTRICO.pdf',
    25: 'img/fichasPDF/JENTOUR/JETOUR_X50.pdf',
    26: 'img/fichasPDF/JENTOUR/JETOUR_X70_SPORT.pdf',
    27: 'img/fichasPDF/JENTOUR/JETOUR_X70_PLUS.pdf',
    28: 'img/fichasPDF/JENTOUR/JETOUR_DASHING.pdf',
    29: 'img/fichasPDF/JENTOUR/JETOUR_T1.pdf',
    30: 'img/fichasPDF/JENTOUR/JETOUR_TRAVELLER_T2.pdf',
    31: 'img/fichasPDF/JENTOUR/JETOUR_T2_HÍBRIDO.pdf',
    32: 'img/fichasPDF/BUSETAS_JAC/JAC M4_11_PASAJEROS.pdf',
    34: 'img/fichasPDF/BUSETAS_JAC/JAC_SUNRAY_16+1_PASAJEROS.pdf',
    35: 'img/fichasPDF/BUSETAS_JAC/JAC_COASTER_20+1_PASAJEROS.pdf',
    36: 'img/fichasPDF/KARRY/KARRY_MINI_VAN_11_PASAJEROS.pdf',
    37: 'img/fichasPDF/KARRY/KARRY_PICK_UP_CS_CD.pdf'
};

function encodePath(path) {
    return path.split('/').map(encodeURIComponent).join('/');
}

const ofertas = [
    {
        id: 1,
        img: 'img/oferta1.jpg',
        titulo: 'JAC T8 Pro — Financiamiento Especial',
        precioOriginal: 0,
        precio: 0,
        ahorro: 0,
        details: ['Cuotas mensuales accesibles', 'Garantía de fábrica incluida', 'Consultar disponibilidad y precio']
    },
    {
        id: 2,
        img: 'img/oferta2.jpg',
        titulo: 'JETOUR X70 — Entrega Inmediata',
        precioOriginal: 0,
        precio: 0,
        ahorro: 0,
        details: ['Stock disponible en patio', 'Trámites de matriculación incluidos', 'Consultar precio y condiciones']
    }
];

const noticias = [
    {
        id: 1,
        img: 'img/noticia1.jpg',
        fecha: '01/05/2026',
        titulo: 'JAC lidera el mercado de camiones en Ecuador',
        resumen: 'La marca JAC consolida su posición con una amplia gama de camiones livianos y pesados disponibles en NANTUCAR.',
        link: '#',
        categoria: 'mercado'
    },
    {
        id: 2,
        img: 'img/noticia2.jpg',
        fecha: '01/05/2026',
        titulo: 'JETOUR T2 Híbrido: la apuesta verde de NANTUCAR',
        resumen: 'Descubre cómo el JETOUR T2 Híbrido combina eficiencia y confort para el conductor ecuatoriano moderno.',
        link: '#',
        categoria: 'tecnologia'
    }
];

function renderResultados(data, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.length ? data.map(auto => `
        <article class="car-card">
            <div class="car-badge new">${auto.categoria}</div>
            <img src="${auto.img}" alt="${auto.titulo}" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'">
            <div class="car-info">
                <div class="car-meta">
                    <span class="car-brand-tag">${auto.marca.toUpperCase()}</span>
                </div>
                <h3>${auto.titulo}</h3>
                <p class="car-price">${auto.precio > 0 ? '$' + auto.precio.toLocaleString() : 'Consultar precio'}</p>
                <p style="font-size:.85rem;color:#666;margin:.5rem 0;">${auto.descripcion}</p>
                <ul class="car-specs" style="list-style:none;padding:0;font-size:.82rem;color:#555;">
                    ${auto.specs.map(s => `<li>• ${s}</li>`).join('')}
                </ul>
                <div class="car-actions" style="display:flex;gap:.5rem;margin-top:1rem;">
                    <button class="btn" style="flex:1;background:#111;color:#fff;" onclick="abrirDetalles(${auto.id})">Ver Detalles</button>
                    <button class="btn btn-primary" style="flex:1;" onclick="solicitarInfo('${auto.titulo.replace(/'/g, "\\'")}')">Solicitar Info</button>
                </div>
            </div>
        </article>
    `).join('') : '<p style="padding:2rem;color:#666;">No se encontraron vehículos con esos filtros.</p>';
}

function renderOfertas(data, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.length ? data.map(oferta => `
        <article class="oferta-card car-card">
            <img src="${oferta.img}" alt="${oferta.titulo}" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80'">
            <div class="car-info">
                <h3>${oferta.titulo}</h3>
                <p class="car-price">Consultar precio</p>
                <ul style="list-style:none;padding:0;font-size:.85rem;color:#555;margin:.75rem 0;">
                    ${oferta.details.map(d => `<li>✓ ${d}</li>`).join('')}
                </ul>
                <button class="btn btn-primary" style="width:100%;"
                        onclick="solicitarOferta('${oferta.titulo.replace(/'/g, "\\'")}')">Aprovechar Oferta</button>
            </div>
        </article>
    `).join('') : '<p>No hay ofertas disponibles.</p>';
}

function renderNoticias(data, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.length ? data.map(noticia => `
        <article class="articulo-card car-card">
            <img src="${noticia.img}" alt="${noticia.titulo}" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'">
            <div class="car-info">
                <span style="font-size:.8rem;color:#E30613;font-weight:600;">${noticia.fecha}</span>
                <h3 style="margin:.5rem 0;">${noticia.titulo}</h3>
                <p style="font-size:.85rem;color:#666;">${noticia.resumen}</p>
                <a href="${noticia.link}" class="btn btn-primary" style="display:inline-block;margin-top:1rem;">Leer Más</a>
            </div>
        </article>
    `).join('') : '<p>No hay noticias disponibles.</p>';
}

function abrirDetalles(id) {
    const auto = autosNuevos.find(a => a.id === id);
    const modal = document.getElementById('invModal');
    if (!auto || !modal) return;

    document.getElementById('invModalTitle').textContent = auto.titulo;
    const modalImg = document.getElementById('invModalImage');
    modalImg.src = auto.img;
    modalImg.alt = auto.titulo;

    const gallery = document.getElementById('invModalGallery');
    gallery.innerHTML = '';
    const fotos = galeriaAutos[id] || [];
    if (fotos.length > 0) {
        gallery.style.display = 'flex';
        [auto.img, ...fotos].forEach((src, i) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = `${auto.titulo} - foto ${i + 1}`;
            thumb.style.cssText = 'width:70px;height:50px;object-fit:cover;border-radius:4px;cursor:pointer;border:2px solid transparent;transition:border-color .2s;';
            if (i === 0) thumb.style.borderColor = '#E30613';
            thumb.addEventListener('click', () => {
                modalImg.src = src;
                gallery.querySelectorAll('img').forEach(t => t.style.borderColor = 'transparent');
                thumb.style.borderColor = '#E30613';
            });
            gallery.appendChild(thumb);
        });
    } else {
        gallery.style.display = 'none';
    }

    const specsList = document.getElementById('invModalSpecs');
    specsList.innerHTML = [
        `<div class="spec-item"><span>Descripción</span><span>${auto.descripcion}</span></div>`,
        ...auto.specs.map(s => {
            const p = s.split(': ');
            return `<div class="spec-item"><span>${p[0]}</span><span>${p.slice(1).join(': ')}</span></div>`;
        })
    ].join('');

    const msg = encodeURIComponent(`¡Hola NANTUCAR! Estoy interesado en el ${auto.titulo}. ¿Pueden darme más información?`);
    document.getElementById('invModalWhatsapp').href = `https://api.whatsapp.com/send?phone=593980375036&text=${msg}`;

    const pdfBtn = document.getElementById('invModalPDF');
    const pdfPath = fichasPDF[id];
    if (pdfBtn) {
        if (pdfPath) {
            pdfBtn.href = encodePath(pdfPath);
            pdfBtn.download = `Ficha Técnica - ${auto.titulo}.pdf`;
            pdfBtn.style.display = 'inline-flex';
        } else {
            pdfBtn.style.display = 'none';
        }
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function solicitarInfo(titulo) {
    const msg = encodeURIComponent(`¡Hola NANTUCAR! Estoy interesado en el ${titulo}. ¿Podrían darme más información y el precio?`);
    window.open(`https://api.whatsapp.com/send?phone=593980375036&text=${msg}`, '_blank');
}

function solicitarOferta(titulo) {
    const msg = encodeURIComponent(`¡Hola NANTUCAR! Quiero aprovechar la oferta de: ${titulo}. ¿Pueden darme más detalles?`);
    window.open(`https://api.whatsapp.com/send?phone=593980375036&text=${msg}`, '_blank');
}

function preAprobar() {
    const msg = encodeURIComponent('¡Hola NANTUCAR! Quisiera solicitar una pre-aprobación de financiamiento.');
    window.open(`https://api.whatsapp.com/send?phone=593980375036&text=${msg}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // Inventario: filtros
    const inventoryFilters = document.getElementById('inventory-filters');
    if (inventoryFilters) {
        renderResultados(autosNuevos, 'nuevos-grid');
        document.getElementById('results-count').textContent = `Mostrando ${autosNuevos.length} vehículos.`;

        inventoryFilters.addEventListener('submit', (e) => {
            e.preventDefault();
            const marca     = inventoryFilters.querySelector('[name="marca"]')?.value || '';
            const modelo    = inventoryFilters.querySelector('[name="modelo"]')?.value || '';
            const categoria = inventoryFilters.querySelector('[name="categoria"]')?.value || '';
            const precioMin = parseFloat(inventoryFilters.querySelector('[name="precio-min"]')?.value) || 0;
            const precioMax = parseFloat(inventoryFilters.querySelector('[name="precio-max"]')?.value) || Infinity;

            const data = autosNuevos.filter(auto =>
                (!marca     || auto.marca     === marca.toLowerCase()) &&
                (!modelo    || auto.modelo    === modelo.toLowerCase()) &&
                (!categoria || auto.categoria === categoria) &&
                (auto.precio === 0 || (auto.precio >= precioMin && auto.precio <= precioMax))
            );

            renderResultados(data, 'nuevos-grid');
            document.getElementById('results-count').textContent = `Mostrando ${data.length} vehículo${data.length !== 1 ? 's' : ''}.`;
        });

        const resetBtn = inventoryFilters.querySelector('[type="reset"], .reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                setTimeout(() => {
                    renderResultados(autosNuevos, 'nuevos-grid');
                    document.getElementById('results-count').textContent = `Mostrando ${autosNuevos.length} vehículos.`;
                }, 10);
            });
        }
    }

    // Ofertas
    if (document.getElementById('ofertas-grid')) {
        renderOfertas(ofertas, 'ofertas-grid');
    }

    // Calculadora de financiamiento
    const loanCalculator = document.getElementById('loan-calculator');
    if (loanCalculator) {
        loanCalculator.addEventListener('submit', (e) => {
            e.preventDefault();
            const precio      = parseFloat(loanCalculator['precio-auto'].value);
            const enganchePorc = parseFloat(loanCalculator.enganche.value) / 100;
            const tasaAnual   = parseFloat(loanCalculator['tasa-interes'].value) / 100;
            const plazo       = parseInt(loanCalculator['plazo-meses'].value);

            const enganche        = precio * enganchePorc;
            const montoFinanciar  = precio - enganche;
            const tasaMensual     = tasaAnual / 12;
            const pagoMensual     = montoFinanciar * (tasaMensual * Math.pow(1 + tasaMensual, plazo)) / (Math.pow(1 + tasaMensual, plazo) - 1);
            const interesesTotales = pagoMensual * plazo - montoFinanciar;

            const resultado = document.getElementById('resultado');
            resultado.querySelector('.pago-mensual').textContent = `$${pagoMensual.toFixed(2)}`;
            resultado.querySelector('.detalles').textContent = `Enganche: $${enganche.toFixed(2)} | A financiar: $${montoFinanciar.toFixed(2)} | Intereses totales: $${interesesTotales.toFixed(2)}`;
        });
    }

    // Formularios
    const forms = document.querySelectorAll('.contacto-form, .newsletter-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('mensaje-enviado');
            if (msg) {
                msg.style.display = 'block';
                setTimeout(() => msg.style.display = 'none', 3000);
            } else {
                alert('Formulario enviado. Te contactaremos pronto.');
            }
            form.reset();
        });
    });

    // Noticias
    const newsSearch = document.getElementById('news-search');
    if (newsSearch) {
        renderNoticias(noticias, 'news-grid');
        newsSearch.addEventListener('submit', (e) => {
            e.preventDefault();
            const query     = newsSearch.querySelector('input').value.toLowerCase();
            const categoria = newsSearch.categoria.value;
            const resultados = noticias.filter(n =>
                (!query     || n.titulo.toLowerCase().includes(query) || n.resumen.toLowerCase().includes(query)) &&
                (!categoria || n.categoria === categoria)
            );
            renderNoticias(resultados, 'news-grid');
        });
    }

    // Modal inventario
    const invModal = document.getElementById('invModal');
    if (invModal) {
        invModal.querySelector('.close-modal').addEventListener('click', () => {
            invModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        window.addEventListener('click', (e) => {
            if (e.target === invModal) {
                invModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});
