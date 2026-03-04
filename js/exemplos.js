$("#esconder").click(function(){
    $("#teste1").hide();
});

$("#mostrar").click(function(){
    $("#teste1").show();
});



$("#alterarCSS").click(function(){
    $("#teste2").css({
        "background-color" : "#f00",
        "font-size" : "200%",
        "color" : "white",
        "font-weight" : "bold"
    });
});



$("#alterarClass").click(function(){
    $("#teste3").removeClass("alert-success").addClass("alert-primary");
    $("#alterarClass").removeClass("btn-success").addClass("btn-primary");
});



$("#alternar1").hide();

$("#alternar2").click(function(){
    $("#link").attr({
        "href" : "https://etecitu.cps.sp.gov.br",
        "tittle" : "Etec Itu"
    });
    $("#link").text("Etec");
    $("#alternar2").hide();
    $("#alternar1").show();
});


$("#alternar1").click(function(){
    $("#link").attr({
        "href" : "https://cps.sp.gov.br",
        "tittle" : "Centro Paula Souza"
    });
    $("#link").text("CPS");
    $("#alternar1").hide();
    $("#alternar2").show();
});