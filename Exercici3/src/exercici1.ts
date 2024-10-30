function diaDeLaSetmana() {
    const inputElement = document.getElementById('data') as HTMLInputElement;
    const fecha = inputElement.value; 
    console.log(fecha);
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
    if(regex.test(fecha)){
        console.log('El formato es valido');
        const [dia, mes, año] = fecha.split('/').map(Number);
        const fechaDate = new Date(año, mes -1, dia);
        console.log('Objeto Date creado: ', fechaDate);
        const diaSetmana = fechaDate.getDay();
        alert('Dia de la setmana: ' + diaSetmana);
        const arrelQuadrada = Math.sqrt(diaSetmana).toFixed(2);
        alert('La arrel quadrada es: ' + arrelQuadrada);
    }
    else{
        console.log('El formato no es valido');
    }
}