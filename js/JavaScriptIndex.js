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

function AgregarEntidad(atr1,atr2,atr3,atr4,atr5){

    var obj = {
        atr1: atr1,
        atr2: atr2,
        atr3: atr3,
        atr4: atr4,
        atr5: atr5};

    localStorage.setItem("obj", JSON.stringify(obj));

}

function CargarEntidad1() {

    var obj = JSON.parse(localStorage.getItem("obj"));
    alert(obj.atr1);

}