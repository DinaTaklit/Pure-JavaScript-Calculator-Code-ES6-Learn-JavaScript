window.addEventListener('DOMContentLoaded',init);
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']; //all keys
const spec = ['*', '/', '+', '-']; //special function keys

function init(){
  document.title = "JavaScript ES6 Calculator";
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.maxWidth = "600px";
  container.style.margin = "auto";
  document.body.appendChild(container);
  const output = document.createElement('input');
  output.setAttribute('type','text');
  output.classList.add('output');
  output.style.width = '100%';
  output.style.lineHeight = "50px";
  output.style.fontSize = "3rem";
  output.style.textAlign = "right";
  container.appendChild(output);
  const main = document.createElement('div');
  main.classList.add('main');
  main.style.width = "100%";
  container.appendChild(main);
}