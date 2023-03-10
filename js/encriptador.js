var btnEncrip = document.getElementById("btnEncriptar");
var btnDesencrip = document.getElementById("btnDesencriptar");
var btnCopy = document.getElementById("btnCopiar");

var agrupadorConMensaje = document.getElementById("agrupadorConMensaje");
var agrupadorSinMensaje = document.getElementById("agrupadorSinMensaje");

btnEncrip.onclick = encriptar;
btnDesencrip.onclick = desencriptar;
btnCopy.onclick = copiar;


function encriptar(){
    var textoPlano = document.getElementById("textoPlano").value;
    textoPlano = textoPlano.trim();
    var txtAcumulado = "";
    
    if(textoPlano.length > 0){

        for (let i = 0; i < textoPlano.length; i++) {
            
            switch (textoPlano[i]) {
                case 'a':
                    txtAcumulado += "ai";
                    break;

                case 'e':
                    txtAcumulado += "enter";
                    break;

                case 'i':
                    txtAcumulado += "imes";
                    break;

                case 'o':
                    txtAcumulado += "ober";
                    break;

                case 'u':
                    txtAcumulado += "ufat";
                    break;
            
                default:
                    txtAcumulado += textoPlano[i];
                    break;
            }
        }
            
        agrupadorSinMensaje.style.display = 'none';
        agrupadorConMensaje.style.display = 'block';

        document.getElementById("textoCifrado").value = txtAcumulado;
    }else{
        document.getElementById("textoCifrado").value = "";

        agrupadorSinMensaje.style.display = 'block';
        agrupadorConMensaje.style.display = 'none';
    }   
}

function desencriptar(){
    var textoPlano = document.getElementById("textoPlano").value;
    textoPlano = textoPlano.trim();
    document.getElementById("textoCifrado").value = "";

    if(textoPlano.length > 0){    
        textoPlano = textoPlano.replaceAll('enter', 'e');
        textoPlano = textoPlano.replaceAll('imes', 'i');
        textoPlano = textoPlano.replaceAll('ai', 'a');
        textoPlano = textoPlano.replaceAll('ober', 'o');
        textoPlano = textoPlano.replaceAll('ufat', 'u');

        agrupadorSinMensaje.style.display = 'none';
        agrupadorConMensaje.style.display = 'block';

        document.getElementById("textoCifrado").value = textoPlano;
    }else{
        agrupadorSinMensaje.style.display = 'block';
        agrupadorConMensaje.style.display = 'none';
    }
}

function copiar(){
    var txtCopiado = document.getElementById("textoCifrado").value;

    navigator.clipboard.writeText(txtCopiado);

    //alert("Texto copiado: " + txtCopiado);

}

function letrasValidas(tecla){
    //tecla.value = tecla.value.toLowerCase();


	var chars={
		"??":"a", "??":"e", "??":"i", "??":"o", "??":"u",
		"??":"a", "??":"e", "??":"i", "??":"o", "??":"u",
        "??":"a", "??":"e", "??":"i", "??":"o", "??":"u",
		"??":"A", "??":"E", "??":"I", "??":"O", "??":"U",
		"??":"A", "??":"E", "??":"I", "??":"O", "??":"U",
        "??":"A", "??":"E", "??":"I", "??":"O", "??":"U"};
	var expr=/[??????????????????????????????]/ig;
	tecla.value = tecla.value.replace(expr,function(e){return chars[e]});
	

    tecla.value = tecla.value.toLowerCase();
}