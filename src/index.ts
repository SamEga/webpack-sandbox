import './css/style.css';
import printMe from './js/print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = 'Hi there';
  btn.onclick = printMe;

  element.classList.add('hello');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
