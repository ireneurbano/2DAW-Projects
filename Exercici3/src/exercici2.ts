function modificarBom(){
    const inputElement = document.getElementById('finestres') as HTMLInputElement;
    const numfinestra = parseInt(inputElement.value, 10); 
    console.log(numfinestra);

    for (let i = 0; i < numfinestra; i++) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const ventana = window.open('', 'finestres' + i, 'width=300, height=300');

        if(ventana){
            ventana.document.write();
            ventana.document.write(`<h1> ${i + 1}</h1>`);
            ventana.document.body.style.background = `#${randomColor}`;
            ventana.document.close;
        }
    }
}