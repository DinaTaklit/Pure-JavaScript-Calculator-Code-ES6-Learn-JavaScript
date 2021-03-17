// This program does not fix error of type 4 ++ 3

// Once document is ready 
window.addEventListener('DOMContentLoaded',init);

// Setup Claculator Values
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']; //all keys
const spec = ['*', '/', '+', '-']; //special function keys


function init(){
  document.title = "JavaScript ES6 Calculator";

  // Added to fix bugs like entering 4.4.4 
  let dec = false; // for decimal value
  let eva = false; // for evaluation

  // Create DOM page Elements
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.maxWidth = "600px";
  container.style.margin = "auto";
  document.body.appendChild(container);
  const input = document.createElement('input');
  input.setAttribute('type','text');
  input.classList.add('input');
  input.style.width = '100%';
  input.style.lineHeight = "50px";
  input.style.fontSize = "3rem";
  input.style.textAlign = "right";
  container.appendChild(input);
  const main = document.createElement('div');
  main.classList.add('main');
  main.style.width = "100%";
  container.appendChild(main);

  // Create keys with theire event listner
  opts.map( val => {
    btnMaker(val, addinput);
  });

  // add equal to evaluate the expression and clear button to clear up content
  btnMaker("=", evalinput);
  btnMaker("C", clrinput);

  // Function color up the border of the text input in case of error (red color) or nrml case (black color)
  function cinput(v) {
    input.style.border = v + ' 1px solid';
    input.style.color = v;
  }
 
  // Function to evaluate the input
  function evalinput(){
    cinput('black'); // back to black border in every nrml state
    if (input.value === "" || eva){ // if the input is empty or we have an operator in the end  like 3 + 3 +
       cinput('red');
    }
    else {
      input.value = eval(input.value);
    }
    dec = input.value.includes('.'); // update the decimal boolean if the input cotain "."
  }

  // Function to color up the input border
  function clrinput(){
    cinput('black');
    input.value = "";
  }

  // Function that create keys
  function btnMaker(txt, myFunction){
      let btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.style.width = '23%';
      btn.style.lineHeight = '50px';
      btn.style.margin = '1%';
      btn.style.fontSize = '2em';
      btn.val = txt;
      btn.textContent = txt;
      btn.addEventListener('click', myFunction); // add an event listner to the key
      main.appendChild(btn);
  }

  // Function update the input with key value after each click
  function addinput(e){
    cinput('black');
    let char = e.target.val;
    if (char == "."){ // check if we have multiple "." in the expression
      if (dec){
        char = '';
        cinput('red');
      }
      else { // update dec with true once we face a "."
        dec = true;
      }
    }
    eva = spec.includes(char); // check if the char is included in the spec "['*', '/', '+', '-']"
    console.log ("eva in add input = " + eva);
    if (eva){
      dec = false; // return dec to false to be able to write other numbers with "."
    }
    input.value += char;
  }
}
