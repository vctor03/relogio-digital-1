const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

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
});
