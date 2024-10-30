function modificarBom() {
    var inputElement = document.getElementById('finestres');
    var numfinestra = parseInt(inputElement.value, 10);
    console.log(numfinestra);
    for (var i = 0; i < numfinestra; i++) {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var ventana = window.open('', 'finestres' + i, 'width=300, height=300');
        if (ventana) {
            ventana.document.write();
            ventana.document.write("<h1> ".concat(i + 1, "</h1>"));
            ventana.document.body.style.background = "#".concat(randomColor);
            ventana.document.close;
        }
    }
}
