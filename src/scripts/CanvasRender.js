import React from 'react';
import ReactDOM from 'react-dom';
import { fabric } from 'fabric';
import $ from 'jquery';

let canvas = new fabric.Canvas('canvas');

export function initCanvas() {
  $(document).ready(function() {
  canvas = new fabric.Canvas('canvas');
  });
}

export function drawRect(){
    console.log("You made it");

    var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 90,
      height : 90,
      fill : 'blue'
    });

    canvas.add(rect);
}
