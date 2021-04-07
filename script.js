let cartaUm = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

let cartaDois = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

let cartaTres = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

let cartaQuatro = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

let cartaCinco = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

let cartaSeis = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

let cartaSete = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

let cartaOito = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 40
    }
}

let cartas = [cartaUm, cartaDois, cartaTres, cartaQuatro, cartaCinco, cartaSeis, cartaSete, cartaOito];
let cardMachine
let cardPlayer
let ptsPlayer = 0;
let ptsMachine = 0;

function sortCard(){

    let numberCardMachine = parseInt(Math.random() * cartas.length);
    cardMachine = cartas[numberCardMachine];
    cartas.splice(numberCardMachine, 1)

    let numberCardPlayer = parseInt(Math.random() * cartas.length);
    cardPlayer = cartas[numberCardPlayer];
    cartas.splice(numberCardPlayer, 1)

    document.getElementById("btnSort").disabled = true;
    document.getElementById('btnPlay').disabled = false;

    showCardPlayer();
}

function showCardPlayer(){
    let divCardPlayer = document.getElementById('carta-jogador');
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let nomeCard = `<p class="carta-subtitle">${cardPlayer.nome}</p>`;
    let opText = "";
    var html = '<div id="opcoes" class="carta-status">'

    divCardPlayer.style.backgroundImage = `url(${cardPlayer.imagem})`;
    for(let atributo in cardPlayer.atributos){
        opText += "<input type='radio' name='atributo' value='"+ atributo + "'>"
        + atributo + " " + cardPlayer.atributos[atributo] + "<br>";
    }

    divCardPlayer.innerHTML = moldura + nomeCard + html + opText + "</div>";
}

function showCardMachine(){
    let divCardMachine = document.getElementById('carta-maquina');
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let nomeCard = `<p class="carta-subtitle">${cardMachine.nome}</p>`;
    let opText = "";
    let html = "<div id='opcoes' class='carta-status --spacing fix'>"

    divCardMachine.style.backgroundImage = `url(${cardMachine.imagem})`;
    for(let atributo in cardMachine.atributos){
        opText += "<p type='text' name='atributo' value='" + atributo + "'>"
        + atributo + " " + cardMachine.atributos[atributo] + "</p><br>";
    }

    divCardMachine.innerHTML = moldura+nomeCard+html+opText+'</div>';
}

function getSelectedOp(){
    let radioatributo = document.getElementsByName('atributo');
    for(var i = 0; i < radioatributo.length; i++){
        if(radioatributo[i].checked){
            console.log(radioatributo[i].value);
            return radioatributo[i].value;
        }
    }
}

function attPontos(){
    let pts = document.getElementById("placar");
    let html = "Jogador " + ptsPlayer + " / " + ptsMachine + " Máquina";
    
    pts.innerHTML = html;
}

function attCards(){
    let qntdCards = document.getElementById("quantidade-cartas");
    let html = "Quantidades de cartas no jogo: " + cartas.length;

    qntdCards.innerHTML = html;
}

function nextRound(){
    let divCartas = document.getElementById("cartas");

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div>
    <div id="carta-maquina" class="carta"></div>`;
    document.getElementById("btnSort").disabled = false;
    document.getElementById("btnPlay").disabled = true;
    document.getElementById("nextRound").disabled = true;

    let res = document.getElementById("resultado");
    res.innerHTML = ""
}

function play(){
    let SelectedOp = getSelectedOp();
    let divRes = document.getElementById("resultado");

    if(cardPlayer.atributos[SelectedOp] > cardMachine.atributos[SelectedOp]){
        htmlResultado = '<p class="resultado-final" style="background-color:green">Venceu</p>';
        ptsPlayer++;
    }else if(cardPlayer.atributos[SelectedOp] < cardMachine.atributos[SelectedOp]){
        htmlResultado = '<p class="resultado-final" style="background-color:red">Perdeu</p>';
        ptsMachine++;
    }else{
        htmlResultado = '<p class="resultado-final" style="background-color:gold">Empatou</p>'
    }

    if(cartas.length == 0){
        alert("Fim de Jogo")
        if(ptsPlayer > ptsMachine){
            htmlResultado = '<p class="resultado-final">VENCEU</p>'
        }else if(ptsPlayer < ptsMachine ){
            htmlResultado = '<p class="resultado-final">PERDEU</p>'
        }else{
            htmlResultado = '<p class="resultado-final">EMPATOU</p>'
        }
    }else{
        document.getElementById("btnNextRound").disabled = false;
    }

    divRes.innerHTML = htmlResultado;
    document.getElementById("btnPlay").disabled = true;

    attPontos();
    attCards();
    showCardMachine();
}