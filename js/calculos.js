$(document).ready(function () {
    $("#calcular").click(function () {
        let n1 = parseFloat($("#n1").val());
        let n2 = parseFloat($("#n2").val());
        let operacao = $("input[name='operacao']:checked").val();
        let resultado = calcular(n1, n2, operacao);
        

        $("#resultado").html("Resultado: " + resultado );
        
 if(resultado%2==0){
    $("#txtmsg_cal").html("Par")
} else {
     $("#txtmsg_cal").html("Impar")
};

 if(resultado<0){
    $("#txtmsg_neg").html("Negativo")
} else {
     $("#txtmsg_neg").html("Positivo")
}
    });
});



function limpar() {
    $("#n1").val("");
    $("#n1").focus();
    $("#n2").val("");
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
    $("#txtmsg").html("Peso: ");
    $("#txtmsg_cal").html("Impar ou Par: ");
    $("#txtmsg_neg").html("Negativo ou Positivo: ");
}

function calcular(n1, n2, operacao) {
    let resultado = 0;

    if (operacao == "soma") {
        resultado = n1 + n2;
    } else if (operacao == "sub") {
        resultado = n1 - n2;
    } else if (operacao == "mult") {
        resultado = n1 * n2;
    } else if (operacao == "div") {
        resultado = n1 / n2;
    }

    switch (operacao) {
        case "soma":
            resultado = n1 + n2;
            break;
        case "sub":
            resultado = n1 - n2;
            break;
        case "mult":
            resultado = n1 * n2;
            break;
        case "div":
            resultado = n1 / n2;
            break;
    }

    return resultado;

}

$("#calcular_imc").click(function (){
        let n1 = parseFloat($("#n1").val());
        let n2 = parseFloat($("#n2").val());
        let resultado = n1/(n2*n2)
        

        $("#resultado").html("IMC: " + resultado );

        if(resultado<18.5){
    $("#txtmsg").html("Abaixo do peso")
} else if (resultado>18.5 && resultado<24.9){
     $("#txtmsg").html("Peso ideal")
} else if (resultado>25 && resultado<29.9){
     $("#txtmsg").html("Sobrepeso")
} else if (resultado>30 && resultado<39.9){
     $("#txtmsg").html("Obesidade")
}else if (resultado>40){
     $("#txtmsg").html("Obesidade mórbida")
}else {
     $("#txtmsg").html("ERRO")
}
});

function limpar() {
    $("#n1").val("");
    $("#n1").focus();
    $("#n2").val("");
    $("#resultado").html("Resultado: ");
    $("#txtmsg").html("IMC: ");
}

