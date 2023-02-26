const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const botaoAlarme = document.getElementById("botao-alarme");
const botaoSalvarAlarme = document.getElementById("botao-salvar-alarme");
const divDefinirAlarme = document.getElementById("definir-alarme");
const alarmSelectHora = document.getElementById("alarm-select-hora");
const alarmSelectMinuto = document.getElementById("alarm-select-minuto");
const botaoPararAlarme = document.getElementById("botao-parar-alarme");

var alarmeDeveTocar = false;

// Configurando o audio

const alarmSound = document.createElement("AUDIO");
alarmSound.src = "./src/audios/classic-alarm.mp3";
alarmSound.loop = true;
alarmSound.load();


// Tornar visível a div com o selecionador do alarme

function inverterVisibilidadeDefinirAlarme() {
    if (divDefinirAlarme.className === "definir-alarme-invisivel"){
        divDefinirAlarme.className = "definir-alarme-visivel";
    } else {
        divDefinirAlarme.className = "definir-alarme-invisivel";
    }
}

// Eventos dos botões

// Botão de definir um alarme

botaoAlarme.addEventListener("click", () => {
    inverterVisibilidadeDefinirAlarme()
}); 

// Botão de salvar o alarme

botaoSalvarAlarme.addEventListener("click", () => {
    alarmeDeveTocar = true;
    inverterVisibilidadeDefinirAlarme();
});

// Botão de parar o alarme 

botaoPararAlarme.addEventListener("click", () => {
    alarmeDeveTocar = false;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    botaoPararAlarme.className = "parar-alarme-invisivel";
});

// Função para configurar as opções de horas e minutos

function configurarAlarmeSelect() {

    
    // Configurando as horas

    for (let count = 0; count < 24; count++) {
        const hour = document.createElement("OPTION");
        if (count < 10){
            hour.value = `${count}`;
            hour.innerText = `0${count}`;
        } else {
            hour.value = count;
            hour.innerText = count;
        }
        alarmSelectHora.appendChild(hour);
    }
    
    // Configurando os minutos
    
    for (let count = 0; count < 60; count++) {
        const hour = document.createElement("OPTION");
        if (count < 10){
            hour.value = `${count}`;
            hour.innerText = `0${count}`;
        } else {
            hour.value = count;
            hour.innerText = count;
        };
        alarmSelectMinuto.appendChild(hour);
    };
    
};

// Função para tocar o alarme

function tocarAlarme(time) {
    const tempoAtualFormatado = `${time.getHours()}:${time.getMinutes()}`;
    const horaSelecionada = `${alarmSelectHora.value}:${alarmSelectMinuto.value}`;
    if (tempoAtualFormatado === horaSelecionada && alarmeDeveTocar){
        alarmSound.play();
        botaoPararAlarme.className = "parar-alarme-visivel"; // Mostra o botão de parar alarme
    };
};

// Função para atualização do relógio e alarme

const relogio = setInterval(() => {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let s = time.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (s < 10) s = "0" + s;

  horas.innerText = hr;
  minutos.innerText = min;
  segundos.innerText = s;
  
  tocarAlarme(time);
});

configurarAlarmeSelect()
