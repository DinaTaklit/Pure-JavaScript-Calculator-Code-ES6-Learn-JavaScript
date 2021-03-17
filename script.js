
// Once document is ready 
window.addEventListener('DOMContentLoaded',init);

// Setup Claculator Values
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']; //all keys
const spec = ['*', '/', '+', '-']; //special function keys

// Create DOM page Elements
function init(){
  document.title = "JavaScript ES6 Calculator";

  // Added to fix bugs like entering 4.4.4 
  let dec = false;
  let eva = false;

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
  opts.map( val => {
    btnMaker(val, addOutput);
  });
  // add equal to evaluate the expression and clear button to clear up content
  btnMaker("=", evalOutput);
  btnMaker("C", clrOutput);

  function evalOutput(){
    output.style.border = 'black 1px solid';
    if (output.value === ""){
      output.style.border = 'red 1px solid';
    }
    else {
      output.value = eval(output.value);
    }
  }

  function clrOutput(){
    output.style.border =  'black 1px solid';
    output.value = "";
  }

  function btnMaker(txt, myFunction){
      let btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.style.width = '23%';
      btn.style.lineHeight = '50px';
      btn.style.margin = '1%';
      btn.style.fontSize = '2em';
      btn.val = txt;
      btn.textContent = txt;
      btn.addEventListener('click', myFunction);
      main.appendChild(btn);
  }
  function addOutput(e){
    output.style.border = 'black 1px solid';
    let char = e.target.val;
    if (char == "."){ // check if we have multiple "." in the expression
      if (dec){
        char = '';
        output.style.border = 'red 1px solid';
      }
      else { // update dec with true once we face a "."
        dec = true;
      }
    }
    eva = spec.includes(char);
    if (eva){
      dec = false; // return dec to false to be able to write other numbers with "."
    }
    output.value += char;
  }
}
