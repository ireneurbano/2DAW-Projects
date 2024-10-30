function diaDeLaSetmana() {
    var inputElement = document.getElementById('data');
    var fecha = inputElement.value;
    console.log(fecha);
    var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
    if (regex.test(fecha)) {
        console.log('El formato es valido');
        var _a = fecha.split('/').map(Number), dia = _a[0], mes = _a[1], año = _a[2];
        var fechaDate = new Date(año, mes - 1, dia);
        console.log('Objeto Date creado: ', fechaDate);
        var diaSetmana = fechaDate.getDay();
        alert('Dia de la setmana: ' + diaSetmana);
        var arrelQuadrada = Math.sqrt(diaSetmana).toFixed(2);
        alert('La arrel quadrada es: ' + arrelQuadrada);
    }
    else {
        console.log('El formato no es valido');
    }
}
