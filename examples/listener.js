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
    function mouseDownFc() {
        setTimeout(function () {
            t.equal(input.mousedown('left'), true);
            t.equal(input.mousepress('left'), true);
            input.reset();
            t.equal(input.mousedown('left'), false);
        }, 100);
    }

    function mouseUpFc() {
        setTimeout(function () {
            t.equal(input.mouseup('left'), true);
            input.reset();
            t.equal(input.mousepress('left'), false);
            t.equal(input.mouseup('left'), false);
        }, 100);
    }

    function mouseRightDownFc() {
        setTimeout(function () {
            t.equal(input.mousedown('right'), true);
            t.equal(input.mousepress('right'), true);
            input.reset();
            t.equal(input.mousedown('right'), false);
        }, 100);
    }

    function mouseRightUpFc() {
        setTimeout(function () {
            t.equal(input.mouseup('right'), true);
            input.reset();
            t.equal(input.mousepress('right'), false);
            t.equal(input.mouseup('right'), false);
        }, 100);
    }
    
    function mouseWheelFc() {
        console.log(input._mouse.scrollX,input._mouse.scrollY);
        setTimeout(() => {
            t.equal(input.mouseScrollY, 100);
            input.reset();
            t.equal(input.mouseScrollY, 0);
      
          }, 100);
    }

    function keyDownFc() {
        setTimeout(function () {
            t.equal(input.keydown('Shift'), true);
            t.equal(input.keypress('Shift'), true);

            input.reset();
            t.equal(input.keydown('Shift'), false);
        }, 100);
    }

    function keyUpFc() {
        setTimeout(function () {
            t.equal(input.keyup('Shift'), true);
            input.reset();
            t.equal(input.keypress('Shift'), false);
            t.equal(input.keyup('Shift'), false);
        }, 100);
    }
    
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

    document.getElementById("inputs").onmousedown = function(e){
        var e=e||event;
        if(e.button===0){
            mouseDownFc();
        }else if(e.button===2){
            mouseRightDownFc();
        }
    }
    document.getElementById("inputs").onmouseup= function(e){
        var e=e||event;
        if(e.button===0){
            mouseUpFc();
        }else if(e.button===2){
            mouseRightUpFc();
        }
    }
    document.getElementById("inputs").onmousewheel= function(e){
            mouseWheelFc();
    }
    document.getElementById("inputs").addEventListener("keydown", keyDownFc);
    document.getElementById("inputs").addEventListener("keyup", keyUpFc);
    document.getElementById("inputs").addEventListener("touchstart", touchStartFc);
    // document.getElementById("inputs").addEventListener("touchmove", touchMoveFc);
    document.getElementById("inputs").addEventListener("touchend", touchEndFc);
});

// 　document.onkeydown = function (event) {
//     test('keydown', function (t) {
//         setTimeout(function () {
//             t.equal(input.keydown('a'), true);
//             t.end();
//         }, 100);
//     });
// }

