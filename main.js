let listaParede = 0;
let listaMetalMadeira = 0;
let listaComplementos = 0;
let listaTexturas = 0;
let listaVernizes = 0;

function constroiCards(dados){
    var linha = document.getElementById("cardRow");
    var colunas = [];
    for(var i=0; i<dados.length; i++) {
        var coluna = `<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = '${dados[i].link}'">
                    <img class="card-img-top" src=${dados[i].img}>
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>${dados[i].titulo}</strong></h6>
                            <br>
                            <a href=${dados[i].link} class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`
        colunas += coluna;
    }
    linha.innerHTML = colunas;
}

function getTintasParede(){
    if (listaParede == 0) {
        var request = new XMLHttpRequest();
        request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/tintasParede');

        request.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dados = JSON.parse(request.responseText);
                for(var i=0; i<dados.length; i++){
                    console.log(dados[i]);
                    listaParede += 1;
                }
                listaMetalMadeira = [];
                listaComplementos = [];
                listaTexturas = [];
                listaVernizes = [];
                constroiCards(dados);   
            }
        };
        request.send();
    }   
}

function getTintasMetalMadeira(){
    if (listaMetalMadeira == 0) {
        var request = new XMLHttpRequest();
        request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/tintasMetalMadeira');
        request.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dados = JSON.parse(request.responseText);
                for(var i=0; i<dados.length; i++){
                    console.log(dados[i]);
                    listaMetalMadeira += 1;
                } 
                listaParede = 0;
                listaComplementos = 0;
                listaTexturas = 0;  
                listaVernizes = 0;        
                constroiCards(dados);
            }        
        };
        request.send();
    }
}

function getComplementos(){
    if (listaComplementos == 0) {
        var request = new XMLHttpRequest();
        request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/complementos');
        request.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dados = JSON.parse(request.responseText);
                for(var i=0; i<dados.length; i++){
                    console.log(dados[i]);
                    listaComplementos += 1;
                } 
                listaParede = 0;
                listaMetalMadeira = 0;
                listaTexturas = 0;  
                listaVernizes = 0;        
                constroiCards(dados);
            }        
        };
        request.send();
    }
}

function getTexturas(){
    if (listaTexturas == 0) {
        var request = new XMLHttpRequest();
        request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/texturas');
        request.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dados = JSON.parse(request.responseText);
                for(var i=0; i<dados.length; i++){
                    console.log(dados[i]);
                    listaTexturas += 1;
                } 
                listaParede = 0;
                listaMetalMadeira = 0;
                listaComplementos = 0;  
                listaVernizes = 0;        
                constroiCards(dados);
            }        
        };
        request.send();
    }
}

function getVernizes(){
    if (listaVernizes == 0) {
        var request = new XMLHttpRequest();
        request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/vernizes');
        request.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dados = JSON.parse(request.responseText);
                for(var i=0; i<dados.length; i++){
                    console.log(dados[i]);
                    listaVernizes += 1;
                } 
                listaParede = 0;
                listaMetalMadeira = 0;
                listaComplementos = 0;        
                listaTexturas = 0;  
                
                constroiCards(dados);
            }        
        };
        request.send();
    }
}

function link(link){
    window.open(link);
}



