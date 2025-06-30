import { sum } from "./main";
import './index.css';

const array = [1, 2, 3].map(i => i + 1);

function hello(...arg) {
    console.log(`hello ${arg[0]} ${arg[1]}`);
}

hello(sum(1, 2), array);