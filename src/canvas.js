import React, { Component } from 'react';
import { initCanvas, drawRect } from './scripts/CanvasRender';
import { fabric } from 'fabric';
import $ from 'jquery';

class Canvas extends Component {

  render() {
    return (
      <div className="Canvas">

      <canvas id="canvas" width="1000" height="600"></canvas>

      <button onClick={drawRect}>Draw Rect</button>

    {initCanvas()}

      </div>
    );
  }


}

export default Canvas;
