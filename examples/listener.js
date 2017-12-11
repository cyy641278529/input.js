'use strict';

const Input = require('../dist/input.js')
let test = require('tape');

let el = document.createElement('button');
el.id = 'inputs';
el.style.width = '300px';
el.style.height = '300px';
document.body.appendChild(el);
let input = new Input(document.getElementById('inputs'));

test('input', function (t) {
    // touch
    function touchStartFc() {
        console.log(input.getTouchInfo(0).x,input.getTouchInfo(0).y);
        input.reset();
        console.log(input.getTouchInfo(0).x,input.getTouchInfo(0).y);
    }
    function touchMoveFc() {
        console.log(input.getTouchInfo(0).x,input.getTouchInfo(0).y);
        input.reset();
        console.log(input.getTouchInfo(0).x,input.getTouchInfo(0).y);
    }
    function touchEndFc() {
        console.log(input.getTouchInfo(0).x,input.getTouchInfo(0).y);
        input.reset();
        console.log(input.getTouchInfo(0).x,input.getTouchInfo(0).y);
    }

    document.getElementById("inputs").addEventListener("touchstart", touchStartFc);
    document.getElementById("inputs").addEventListener("touchmove", touchMoveFc);
    document.getElementById("inputs").addEventListener("touchend", touchEndFc);
});
