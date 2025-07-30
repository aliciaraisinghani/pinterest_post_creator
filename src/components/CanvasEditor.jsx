import React, { useRef, useEffect } from 'react';
import './CanvasEditor.css';

const CanvasEditor = ({ textContent, textStyle, background, onCanvasRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      onCanvasRef(canvasRef.current);
    }
  }, [onCanvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 1080;
    const height = 1080;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    drawBackground(ctx, background, width, height);

    // Draw text
    if (textContent && textStyle) {
      drawText(ctx, textContent, textStyle, width, height);
    }
  }, [textContent, textStyle, background]);

  const drawBackground = (ctx, bg, width, height) => {
    if (!bg) return;

    if (bg.type === 'color') {
      ctx.fillStyle = bg.value;
      ctx.fillRect(0, 0, width, height);
    } else if (bg.type === 'gradient') {
      // Parse gradient string and create gradient
      const gradient = createGradientFromString(ctx, bg.value, width, height);
      if (gradient) {
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
    } else if (bg.type === 'overlay') {
      // Fill with base color
      ctx.fillStyle = bg.value;
      ctx.fillRect(0, 0, width, height);
      
      // Add overlay
      if (bg.overlay) {
        ctx.fillStyle = bg.overlay;
        ctx.fillRect(0, 0, width, height);
      }
    } else if (bg.type === 'image' && bg.imageData) {
      // Draw image background (for AI generated images)
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        // Redraw text on top
        if (textContent && textStyle) {
          drawText(ctx, textContent, textStyle, width, height);
        }
      };
      img.src = bg.imageData;
    }
  };

  const createGradientFromString = (ctx, gradientString, width, height) => {
    // Simple gradient parser for linear gradients
    const match = gradientString.match(/linear-gradient\(([^,]+),\s*([^,]+),\s*([^)]+)\)/);
    if (match) {
      const [, direction, colorStop1, colorStop2] = match;
      
      // Extract colors from color stops (remove percentages)
      const color1 = colorStop1.trim().split(' ')[0];  // Gets '#667eea' from '#667eea 0%'
      const color2 = colorStop2.trim().split(' ')[0];  // Gets '#764ba2' from '#764ba2 100%'
      
      let gradient;
      if (direction.includes('135deg')) {
        gradient = ctx.createLinearGradient(0, 0, width, height);
      } else {
        gradient = ctx.createLinearGradient(0, 0, width, 0);
      }
      
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    }
    return null;
  };

  const drawText = (ctx, text, style, width, height) => {
    // Set font properties
    const fontSize = style.fontSize || 48;
    const fontWeight = style.fontWeight || 'normal';
    const fontStyle = style.fontStyle || 'normal';
    const fontFamily = style.fontFamily || 'Inter';
    
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px "${fontFamily}", sans-serif`;
    ctx.fillStyle = style.color || '#000000';
    ctx.textBaseline = 'middle';

    // Text alignment
    const textAlign = style.textAlign || 'center';
    ctx.textAlign = textAlign;

    // Calculate position
    let x;
    if (textAlign === 'left') {
      x = width * 0.1; // 10% margin
    } else if (textAlign === 'right') {
      x = width * 0.9; // 90% position
    } else {
      x = width / 2; // center
    }

    // Vertical position
    let y;
    const verticalAlign = style.verticalAlign || 'center';
    if (verticalAlign === 'higher') {
      y = height * 0.35; // 35% from top
    } else if (verticalAlign === 'lower') {
      y = height * 0.65; // 65% from top
    } else {
      y = height / 2; // center
    }

    // Word wrapping
    const maxWidth = width * 0.8; // 80% of canvas width
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      const testWidth = ctx.measureText(testLine).width;
      
      if (testWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }

    // Draw lines
    const lineHeight = fontSize * 1.2;
    const totalHeight = lines.length * lineHeight;
    const startY = y - (totalHeight / 2) + (lineHeight / 2);

    lines.forEach((line, index) => {
      const lineY = startY + (index * lineHeight);
      ctx.fillText(line, x, lineY);
    });
  };

  return (
    <div className="canvas-editor">
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          className="preview-canvas"
          width="1080"
          height="1080"
        />
      </div>
      <div className="canvas-info">
        <span>Live Preview • 1080×1080px</span>
      </div>
    </div>
  );
};

export default CanvasEditor;