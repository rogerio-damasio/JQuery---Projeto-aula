$("#ordenar").click(function () {
    var valor1 = parseInt($("#x").val());
    var valor2 = parseInt($("#y").val());
    var valor3 = parseInt($("#z").val());
    var valor4 = 0;


    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor, insira nrs válidos!");
        return;
    }


    if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3) {
        valor
        valor4 = valor3;
        valor3 = valor1;
        valor1 = valor4;
        $("#txtresultado")
            .html("Valor ordenado Z=" + valor1 + " Y=" + valor2 + " X=" + valor3)
            .css({
                'font-weight': 'bold',
                'font-size': '20px',
                'color': '#0000ff'
            });
    } else if (valor1 > valor2 && valor1 > valor3 && valor2 < valor3) {
        $("#txtresultado")
            .html("Valor ordenado Y=" + valor1 + " Z=" + valor2 + " X=" + valor3)
            .css({
                'font-weight': 'bold',
                'font-size': '20px',
                'color': '#0000ff'
            });
    }
    else if (valor1 > valor2 && valor1 < valor3) {
        valor4 = valor2;
        valor2 = valor1;
        valor1 = valor4;
        $("#txtresultado")
            .html("Valor ordenado Y=" + valor1 + " X=" + valor2 + " Z=" + valor3)
            .css({
                'font-weight': 'bold',
                'font-size': '20px',
                'color': '#0000ff'
            });
    } else if (valor1 < valor2 && valor2 > valor3) {
        valor4 = valor3;
        valor3 = valor2;
        valor2 = valor4;
        $("#txtresultado")
            .html("Valor ordenado X=" + valor1 + " Z=" + valor2 + " Y=" + valor3)
            .css({
                'font-weight': 'bold',
                'font-size': '20px',
                'color': '#0000ff'
            });
    } else if (valor1 < valor2 && valor2 < valor3) {
        $("#txtresultado")
            .html("Valor ordenado X=" + valor1 + " Y=" + valor2 + " Z=" + valor3)
            .css({
                'font-weight': 'bold',
                'font-size': '20px',
                'color': '#0000ff'
            });
    } else {
        alert("ERRO 404")
    }



});