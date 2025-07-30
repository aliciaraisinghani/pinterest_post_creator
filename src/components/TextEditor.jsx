import React from 'react';
import { fontOptions, colorOptions } from '../templates/templates';
import './TextEditor.css';

const TextEditor = ({ textContent, textStyle, onTextChange, onStyleChange }) => {
  const handleTextChange = (e) => {
    onTextChange(e.target.value);
  };

  const handleFontFamilyChange = (fontFamily) => {
    onStyleChange({ fontFamily });
  };

  const handleFontSizeChange = (e) => {
    onStyleChange({ fontSize: parseInt(e.target.value) });
  };

  const handleFontStyleChange = (property, value) => {
    onStyleChange({ [property]: value });
  };

  const handleColorChange = (color) => {
    onStyleChange({ color });
  };

  const handleAlignmentChange = (textAlign) => {
    onStyleChange({ textAlign });
  };

  const handleVerticalAlignChange = (verticalAlign) => {
    onStyleChange({ verticalAlign });
  };

  return (
    <div className="text-editor">
      <div className="section-header">
        📝 Text Editing
      </div>
      
      <div className="form-group">
        <label className="form-label">Your Message</label>
        <textarea
          className="text-input"
          value={textContent}
          onChange={handleTextChange}
          placeholder="Type your message here..."
          maxLength={280}
        />
        <div className="character-count">
          {textContent.length}/280 characters
        </div>
      </div>

      <div className="section-header">
        🎨 Text Styling
      </div>

      <div className="form-group">
        <label className="form-label">Font Family</label>
        <div className="font-grid">
          {fontOptions.map((font) => (
            <button
              key={font.value}
              className={`font-option ${textStyle.fontFamily === font.value ? 'active' : ''}`}
              onClick={() => handleFontFamilyChange(font.value)}
              style={{ fontFamily: font.value }}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Font Size</label>
        <div className="slider-container">
          <input
            type="range"
            className="slider"
            min="24"
            max="72"
            value={textStyle.fontSize || 48}
            onChange={handleFontSizeChange}
          />
          <div className="slider-labels">
            <span>Small (24px)</span>
            <span>{textStyle.fontSize || 48}px</span>
            <span>Large (72px)</span>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Font Style</label>
        <div className="button-group">
          <button
            className={`option-button ${(textStyle.fontWeight === 'normal' || !textStyle.fontWeight) && (textStyle.fontStyle === 'normal' || !textStyle.fontStyle) ? 'active' : ''}`}
            onClick={() => {
              handleFontStyleChange('fontWeight', 'normal');
              handleFontStyleChange('fontStyle', 'normal');
            }}
          >
            Regular
          </button>
          <button
            className={`option-button ${textStyle.fontWeight === 'bold' ? 'active' : ''}`}
            onClick={() => handleFontStyleChange('fontWeight', textStyle.fontWeight === 'bold' ? 'normal' : 'bold')}
          >
            <strong>Bold</strong>
          </button>
          <button
            className={`option-button ${textStyle.fontStyle === 'italic' ? 'active' : ''}`}
            onClick={() => handleFontStyleChange('fontStyle', textStyle.fontStyle === 'italic' ? 'normal' : 'italic')}
          >
            <em>Italic</em>
          </button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Text Color</label>
        <div className="color-palette">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              className={`color-option ${textStyle.color === color.value ? 'active' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => handleColorChange(color.value)}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="section-header">
        📍 Text Position
      </div>

      <div className="form-group">
        <label className="form-label">Horizontal Alignment</label>
        <div className="button-group">
          <button
            className={`option-button ${textStyle.textAlign === 'left' ? 'active' : ''}`}
            onClick={() => handleAlignmentChange('left')}
          >
            ← Left
          </button>
          <button
            className={`option-button ${(textStyle.textAlign === 'center' || !textStyle.textAlign) ? 'active' : ''}`}
            onClick={() => handleAlignmentChange('center')}
          >
            ⟷ Center
          </button>
          <button
            className={`option-button ${textStyle.textAlign === 'right' ? 'active' : ''}`}
            onClick={() => handleAlignmentChange('right')}
          >
            Right →
          </button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Vertical Position</label>
        <div className="button-group">
          <button
            className={`option-button ${textStyle.verticalAlign === 'higher' ? 'active' : ''}`}
            onClick={() => handleVerticalAlignChange('higher')}
          >
            ↑ Higher
          </button>
          <button
            className={`option-button ${(textStyle.verticalAlign === 'center' || !textStyle.verticalAlign) ? 'active' : ''}`}
            onClick={() => handleVerticalAlignChange('center')}
          >
            ⟷ Center
          </button>
          <button
            className={`option-button ${textStyle.verticalAlign === 'lower' ? 'active' : ''}`}
            onClick={() => handleVerticalAlignChange('lower')}
          >
            ↓ Lower
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;