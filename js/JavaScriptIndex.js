//var load = function(){
	            
//	console.log("hi");
//	AgregarEntidad("hola","chau",1,2,3);
//};

//$(document).ready(load);


function devolverTipoCampo(columna){

    var tipoCampo = "";

    if(columna == 1){
        tipoCampo = "";
    }else if(columna == 2){
        tipoCampo = "";
    }else if(columna == 3){
        tipoCampo = "";
    } else if (columna == 4) {
        tipoCampo = "";
    }
    return tipoCampo;
};

//function AgregarEntidad(atr1,atr2,atr3,atr4,atr5){

//    var obj = {
//        atr1: atr1,
//        atr2: atr2,
//        atr3: atr3,
//        atr4: atr4,
//        atr5: atr5};

//    localStorage.setItem("obj", JSON.stringify(obj));
//	CargarEntidad1();

//}

//function CargarEntidad1() {

//    var obj = JSON.parse(localStorage.getItem("obj"));
//    console.log(obj.atr1);

//}


function devolverTipoCampo(columna) {

    var tipoCampo = "";

    if (columna == 1) {
        tipoCampo = "";
    } else if (columna == 2) {
        tipoCampo = "";
    } else if (columna == 3) {
        tipoCampo = "";
    } else if (columna == 4) {
        tipoCampo = "";
    }
    return tipoCampo;
};

//function AgregarEntidad(atr1, atr2, atr3, atr4, atr5) {


//    var Arr = [];
//    var obj = {
//        atr1: atr1,
//        atr2: atr2,
//        atr3: atr3,
//        atr4: atr4,
//        atr5: atr5
//    };

//    var obj2 = {
//        atr1: atr1,
//        atr2: atr2,
//        atr3: atr3 + 49,
//        atr4: atr4,
//        atr5: atr5
//    };

//    Arr.push(obj);
//    Arr.push(obj2);

//    localStorage.setItem("obj", JSON.stringify(Arr));
//    CargarEntidad1();

//};

function AgregarEntidadProyectoEvaluado(nombreProyecto, direccion, fechaInicioVenta, estadoProyecto, fechaInicioObra, ubicacion, fechaEntrega, conVista, empresa, contacto, url, prioridad, tipo, responsable, nombreContacto, precioTotal, estadoEvaluación, estadoDirectorio, latitud, longitud) {


    var entidadProyectoEvaluado = {
        nombreProyecto: nombreProyecto, 
        direccion: direccion, 
        fechaInicioVenta: fechaInicioVenta, 
        estadoProyecto: estadoProyecto,
        fechaInicioObra: fechaInicioObra, 
        ubicacion: ubicacion, 
        fechaEntrega: fechaEntrega, 
        conVista: conVista, 
        empresa: empresa, 
        contacto: contacto, 
        url: url, 
        prioridad: prioridad, 
        tipo: tipo, 
        responsable: responsable, 
        nombreContacto: nombreContacto, 
        precioTotal: precioTotal, 
        estadoEvaluación: estadoEvaluación, 
        estadoDirectorio: estadoDirectorio, 
        latitud: latitud, 
        longitud: longitud
    };

    localStorage.setItem("entidadProyectoEvaluado", JSON.stringify(entidadProyectoEvaluado));

};

function AgregarEntidadEstudioOfertas(nombreProyecto, direccion, empresa, provincia, distrito, prioridad, tipoConstruccion, tipoDepartamento, precioEstimado, responsable, nombreContacto, ubicacion, area, zonificacion, costoM2, precioTotal, estadoEvaluacion, estadoDirectorio, url, numeroCasas, numeroPisos, numeroViviendaHectarea, m2VendiblesCliente, latitud, longitud) {
    
    var entidadEstudioOfertas = {
        nombreProyecto: nombreProyecto, 
        direccion: direccion, 
        empresa: empresa, 
        provincia: provincia, 
        distrito: distrito, 
        prioridad: prioridad, 
        tipoConstruccion: tipoConstruccion, 
        tipoDepartamento: tipoDepartamento, 
        precioEstimado: precioEstimado, 
        responsable: responsable, 
        nombreContacto: nombreContacto, 
        ubicacion: ubicacion, 
        area: area, 
        zonificacion: zonificacion,
        costoM2: costoM2, 
        precioTotal: precioTotal, 
        estadoEvaluacion: estadoEvaluacion,
        estadoDirectorio: estadoDirectorio, 
        url: url, 
        numeroCasas: numeroCasas,
        numeroPisos: numeroPisos, 
        numeroViviendaHectarea: numeroViviendaHectarea, 
        m2VendiblesCliente: m2VendiblesCliente,
        latitud: latitud, 
        longitud: longitud
    };

    localStorage.setItem("entidadEstudioOfertas", JSON.stringify(entidadEstudioOfertas));

};

function AgregarEntidadServicio(nombreServicio, direccion, distrito, horarioAtencion, descripcionServicio, nombreContacto, ubicacion, url, latitud, longitud) {
    
    var entidadServicio = {
        nombreServicio: nombreServicio, 
        direccion: direccion, 
        distrito: distrito, 
        horarioAtencion: horarioAtencion, 
        descripcionServicio: descripcionServicio, 
        nombreContacto: nombreContacto, 
        ubicacion: ubicacion, 
        url: url,
        latitud: latitud,
        longitud: longitud
    };

    localStorage.setItem("entidadServicio", JSON.stringify(entidadServicio));

};

function AgregarEntidadTransporte(nombreTransporte, direccion, provincia, distrito, horarioAtencion, url, busesDisponibles, tiempoEnMercado, latitud, longitud) {
    
    var entidadTransporte = {
        nombreTransporte: nombreTransporte, 
        direccion: direccion, 
        provincia: provincia, 
        distrito: distrito, 
        horarioAtencion: horarioAtencion, 
        url: url, 
        busesDisponibles: busesDisponibles, 
        tiempoEnMercado: tiempoEnMercado,
        latitud: latitud,
        longitud: longitud
    };

    localStorage.setItem("entidadTransporte", JSON.stringify(entidadTransporte));

};

function AgregarEntidadUniversidad(nombreUniversidad, direccion, numeroCarreras, provincia, distrito, nombreContacto, url, cantidadEstudiantes, latitud, longitud) {
    
    var entidadUniversidad = {
        nombreUniversidad: nombreUniversidad, 
        direccion: direccion, 
        numeroCarreras: numeroCarreras, 
        provincia: provincia, 
        distrito:distrito, 
        nombreContacto: nombreContacto, 
        url: url, 
        cantidadEstudiantes: cantidadEstudiantes,
        latitud: latitud,
        longitud: longitud
    };

    localStorage.setItem("entidadUniversidad", JSON.stringify(entidadUniversidad));

};

//function CargarEntidad1() {

//    var Arr = JSON.parse(localStorage.getItem("obj"));
//    var obj = Arr[0];
//    var obj2 = Arr[1];
//    var atrE2 = obj.atr1 + 2;
//    var atrE = obj.atr4 + 2;
//    alert(atrE2 + ',' + obj.atr2 + ',' + obj.atr3 + ',' + atrE + ',' + obj.atr5 + ',' + obj2.atr3);

//};

function CargarEntidadProyectoEvaluado() {

    return JSON.parse(localStorage.getItem("entidadProyectoEvaluado"));
};

function CargarEntidadEstudioOfertas() {

    return JSON.parse(localStorage.getItem("entidadEstudioOfertas"));
};

function CargarEntidadServicio() {

    return JSON.parse(localStorage.getItem("entidadServicio"));
};

function CargarEntidadTransporte() {

    return JSON.parse(localStorage.getItem("entidadTransporte"));
};

function CargarEntidadUniversidad() {

    return JSON.parse(localStorage.getItem("entidadUniversidad"));
};

///////////////////////

function CargarListaProyectoEvaluado() {

    var obj1 = {
        nombreProyecto: "Torres de Grau",
        direccion: "Av.Grau 365",
        fechaInicioVenta: "06/12/2016",
        estadoProyecto: "Activo",
        fechaInicioObra: "12/12/2016",
        ubicacion: "Zona Urbana",
        fechaEntrega: "15/12/2017",
        conVista: "",
        empresa: "VivaGyM",
        contacto: "Ing. Víctor Ruiz",
        url: "www.vivagym.com.pe",
        prioridad: "alta",
        tipo: "Construcción",
        responsable: "Ing. Víctor Ruiz",
        nombreContacto: "Ing. Víctor Ruiz",
        precioTotal: 25000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobado",
        latitud: latitud,
        longitud: longitud
    };
    var obj2 = {
        nombreProyecto: "Torres Pardo",
        direccion: "",
        fechaInicioVenta: "13/12/2016",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "01/01/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "13/02/2018",
        conVista: "",
        empresa: "Nakada Inmobiliaria",
        contacto: "Jaime Salcedo",
        url: "www.nakadainmobiliaria.com/portal/",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Rommel Sosa",
        nombreContacto: "Jaime Salcedo",
        precioTotal: 30000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: latitud,
        longitud: longitud
    };
    var obj3 = {
        nombreProyecto: "Condominios LarcoMar",
        direccion: "",
        fechaInicioVenta: "23/01/2017",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "25/03/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "27/02/2019",
        conVista: "Al Mar",
        empresa: "VivaGyM",
        contacto: "Ing. Víctor Ruiz",
        url: "www.vivagym.com.pe",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Víctor Ruiz",
        nombreContacto: "Ing. Víctor Ruiz",
        precioTotal: 300000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: latitud,
        longitud: longitud
    };
    var obj4 = {
        nombreProyecto: "Condominios Miguel Grau",
        direccion: "",
        fechaInicioVenta: "24/01/2017",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "21/03/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "13/02/2019",
        conVista: "",
        empresa: "Nakada Inmobiliaria",
        contacto: "Jaime Salcedo",
        url: "www.nakadainmobiliaria.com/portal/",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Rommel Sosa",
        nombreContacto: "Jaime Salcedo",
        precioTotal: 25000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: latitud,
        longitud: longitud
    };
    var obj5 = {
        nombreProyecto: "Condominios Torres Limatambo",
        direccion: "",
        fechaInicioVenta: "22/01/2017",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "17/03/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "16/02/2019",
        conVista: "",
        empresa: "VivaGyM",
        contacto: "Ing. Víctor Ruiz",
        url: "www.vivagym.com.pe",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Víctor Ruiz",
        nombreContacto: "Ing. Víctor Ruiz",
        precioTotal: 230000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: latitud,
        longitud: longitud
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};

function CargarListaEstudioOfertas() {

    var obj1 = {
        nombreProyecto: "Torres de Surquillo",
        direccion: "",
        empresa: "VivaGyM",
        provincia: "Lima",
        distrito: "Surquillo",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.300 000",
        responsable: "Jorge Luna",
        nombreContacto: "Jorge Luna",
        ubicacion: "Surquillo",
        area: "",
        zonificacion: "",
        costoM2: "S/. 3000",
        precioTotal: "S/. 12 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.vivagym.com.pe",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: latitud,
        longitud: longitud
    };
    var obj2 = {
        nombreProyecto: "Condominios El Arrecife",
        direccion: "",
        empresa: "VivaGyM",
        provincia: "Maddalena del Mar",
        distrito: "Maddalena del Mar",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.400 000",
        responsable: "Víctor Saenz",
        nombreContacto: "Víctor Saenz",
        ubicacion: "Maddalena del Mar",
        area: "",
        zonificacion: "",
        costoM2: "S/. 4000",
        precioTotal: "S/. 16 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.vivagym.com.pe",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: latitud,
        longitud: longitud
    };
    var obj3 = {
        nombreProyecto: "Condominios Los Ángeles",
        direccion: "",
        empresa: "VivaGyM",
        provincia: "San Miguel",
        distrito: "San Miguel",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.400 000",
        responsable: "Sandra Rojas",
        nombreContacto: "Sandra Rojas",
        ubicacion: "San Miguel",
        area: "",
        zonificacion: "",
        costoM2: "S/. 4000",
        precioTotal: "S/. 16 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.vivagym.com.pe",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: latitud,
        longitud: longitud
    };
    var obj4 = {
        nombreProyecto: "Condominios Cerro Viejo",
        direccion: "",
        empresa: "Nakada Inmobiliaria",
        provincia: "Breña",
        distrito: "Breña",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.300 000",
        responsable: "Sandra Rojas",
        nombreContacto: "Sandra Rojas",
        ubicacion: "Breña",
        area: "",
        zonificacion: "",
        costoM2: "S/. 3000",
        precioTotal: "S/. 12 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.nakadainmobiliaria.com/portal/",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: latitud,
        longitud: longitud
    };
    var obj5 = {
        nombreProyecto: "Torres de Nuevo Mundo",
        direccion: "",
        empresa: "Nakada Inmobiliaria",
        provincia: "Jesús María",
        distrito: "Jesús María",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.400 000",
        responsable: "César Tamariz",
        nombreContacto: "Sandra Rojas",
        ubicacion: "Jesús María",
        area: "",
        zonificacion: "",
        costoM2: "S/. 4000",
        precioTotal: "S/. 16 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.nakadainmobiliaria.com/portal/",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: latitud,
        longitud: longitud
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};

function CargarListaServicio() {

    var obj1 = {
        nombreServicio: "Grifo Primax",
        direccion: "",
        distrito: "Miraflores",
        horarioAtencion: "24 horas",
        descripcionServicio: "Auto Servicio",
        nombreContacto: "Ángel Rodríguez",
        ubicacion: "Miraflores",
        url: "www.primax.com.pe",
        latitud: latitud,
        longitud: longitud
    };
    var obj2 = {
        nombreServicio: "Clínica Stella Maris",
        direccion: "",
        distrito: "Miraflores",
        horarioAtencion: "24 horas",
        descripcionServicio: "Atención Salud",
        nombreContacto: "Raúl Borja",
        ubicacion: "Miraflores",
        url: "www.stellamaris.com.pe",
        latitud: latitud,
        longitud: longitud
    };
    var obj3 = {
        nombreServicio: "FedEx",
        direccion: "",
        distrito: "Surco",
        horarioAtencion: "9am a 7pm",
        descripcionServicio: "Servicio de Mensajería y Paquetería",
        nombreContacto: "Merly Luna",
        ubicacion: "Surco",
        url: "www.fedex.com/do",
        latitud: latitud,
        longitud: longitud
    };
    var obj4 = {
        nombreServicio: "Centro de Atención Integral Contra la Violencia Hacia las Mujeres - Warmi Wasi",
        direccion: "Jr. Huancavelica Nº 470 - 5to. Piso",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        descripcionServicio: "Servicio de Ayuda a la Mujer",
        nombreContacto: "Leila Torres",
        ubicacion: "Centro de Lima",
        url: "www.munlima.gob.pe/servicios/social/warmi-wasi",
        latitud: latitud,
        longitud: longitud
    };
    var obj5 = {
        nombreServicio: "Mafisa Motors",
        direccion: "Av. Nicolas Arriola N° 3050",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        descripcionServicio: "Servicio Mecánico Automotriz",
        nombreContacto: "Julio Sánchez",
        ubicacion: "San Luis",
        url: "www.mafisamotors.com",
        latitud: latitud,
        longitud: longitud
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};

function CargarListaTransporte() {

    var obj1 = {
        nombreTransporte: "Transporte Civa",
        direccion: "",
        provincia: "Lima",
        distrito: "Lima",
        horarioAtencion: "6am a 12am",
        url: "www.civa.com.pe",
        busesDisponibles: 25,
        tiempoEnMercado: "25 años",
        latitud: latitud,
        longitud: longitud
    };
    var obj2 = {
        nombreTransporte: "Transporte Flores",
        direccion: "",
        provincia: "Lima",
        distrito: "Lima",
        horarioAtencion: "6am a 12am",
        url: "www.floreshnos.pe",
        busesDisponibles: 27,
        tiempoEnMercado: "30 años",
        latitud: latitud,
        longitud: longitud
    };
    var obj3 = {
        nombreTransporte: "Transporte Cruz del Sur",
        direccion: "",
        provincia: "Lima",
        distrito: "Lima",
        horarioAtencion: "6am a 12am",
        url: "www.cruzdelsur.com.pe",
        busesDisponibles: 27,
        tiempoEnMercado: "28 años",
        latitud: latitud,
        longitud: longitud
    };
    var obj4 = {
        nombreTransporte: "Transporte Cromotex",
        direccion: "",
        provincia: "Lima",
        distrito: "Lima",
        horarioAtencion: "6am a 12am",
        url: "www.cromotex.com.pe",
        busesDisponibles: 27,
        tiempoEnMercado: "26 años",
        latitud: latitud,
        longitud: longitud
    };
    var obj5 = {
        nombreTransporte: "Transporte ITTSA",
        direccion: "",
        provincia: "Lima",
        distrito: "Lima",
        horarioAtencion: "6am a 12am",
        url: "www.ittsabus.com",
        busesDisponibles: 27,
        tiempoEnMercado: "24 años",
        latitud: latitud,
        longitud: longitud
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};

function CargarListaUniversidad() {

    var obj1 = {
        nombreUniversidad: "Científica del Sur",
        direccion: "",
        numeroCarreras: 15,
        provincia: "Lima",
        distrito: "Miraflores",
        nombreContacto: "Roberto Flores",
        url: "www.cientifica.edu.pe",
        cantidadEstudiantes: 500,
        latitud: latitud,
        longitud: longitud
    };
    var obj2 = {
        nombreUniversidad: "PUCP",
        direccion: "",
        numeroCarreras: 29,
        provincia: "Lima",
        distrito: "San Miguel",
        nombreContacto: "Miriam Núñez",
        url: "www.pucp.edu.pe",
        cantidadEstudiantes: 1000,
        latitud: latitud,
        longitud: longitud
    };
    var obj3 = {
        nombreUniversidad: "San Marcos",
        direccion: "",
        numeroCarreras: 37,
        provincia: "Lima",
        distrito: "Lima",
        nombreContacto: "Rogelio Méndez",
        url: "www.unmsm.edu.pe",
        cantidadEstudiantes: 2000,
        latitud: latitud,
        longitud: longitud
    };
    var obj4 = {
        nombreUniversidad: "UPC",
        direccion: "",
        numeroCarreras: 23,
        provincia: "Lima",
        distrito: "La Molina",
        nombreContacto: "Cinthya López",
        url: "www.upc.edu.pe",
        cantidadEstudiantes: 400,
        latitud: latitud,
        longitud: longitud
    };
    var obj5 = {
        nombreUniversidad: "USIL",
        direccion: "",
        numeroCarreras: 24,
        provincia: "Lima",
        distrito: "La Molina",
        nombreContacto: "Diana Juárez",
        url: "www.usil.edu.pe",
        cantidadEstudiantes: 1100,
        latitud: latitud,
        longitud: longitud
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};