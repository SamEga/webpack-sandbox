import './css/style.css';
import printMe from './js/print.js';
import './scss/main.scss';

console.log(printMe());

let test = (e: number): void => {
  console.log('test', e);
};
test(3);
