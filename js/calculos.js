$("#calcular").click(function () {
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());
    var valor3 = parseFloat($("#txtvalor3").val());

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor, insira nrs válidos!");
        return;
    }

    var resultado = parseFloat((valor1 + valor2 + valor3).toFixed(2));

    var moeda = resultado.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    });

    $("#txtresultado")
        .html("Valor Final " + resultado + "<br> Moeda " + moeda)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });

    if (resultado > 5) {
        alert("Valor maior que 5");
    } else if (resultado < 5) {
        alert("Valor menor que 5");
    } else {
        alert("Igual a 5");
    }

    var mostrar = (resultado > 5) ? 'maior que 5' : 'menor ou igual a 5';

    alert(mostrar);

    switch (true) {
        case (resultado > 10):
            alert("Maior que 10");
            break;
    case (resultado >= 5):
            alert("Maior que 5 e menor que 10");
            break;
        default:
            alert("menor 5");
            break;
    }
    
    switch (parseInt(resultado)%2) {
        case 0:
            alert("par");
            break;
     case 1:
            alert("impar");
            break;
        default:
            alert("inválido");
            break;
    }

});