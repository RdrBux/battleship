import './style.css';
import { displayBoard } from './dom';

const container = document.querySelector('.container');

container.appendChild(displayBoard());
container.appendChild(displayBoard());
