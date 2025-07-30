import React, { useState } from 'react';
import TemplateGallery from './components/TemplateGallery';
import CanvasEditor from './components/CanvasEditor';
import TextEditor from './components/TextEditor';
import BackgroundSelector from './components/BackgroundSelector';
import ExportButton from './components/ExportButton';
import { templates } from './templates/templates';
import './App.css';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [textContent, setTextContent] = useState('');
  const [textStyle, setTextStyle] = useState({});
  const [background, setBackground] = useState({});
  const [canvasRef, setCanvasRef] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setTextContent(template.placeholder);
    setTextStyle(template.textStyle);
    setBackground(template.background);
  };

  const handleTextChange = (text) => {
    setTextContent(text);
  };

  const handleStyleChange = (newStyle) => {
    setTextStyle(prev => ({ ...prev, ...newStyle }));
  };

  const handleBackgroundChange = (newBackground) => {
    setBackground(newBackground);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ Pinterest Post Generator</h1>
        <p>Create beautiful 1080x1080 posts in seconds</p>
      </header>

      <main className="app-main">
        {!selectedTemplate ? (
          <TemplateGallery 
            templates={templates}
            onTemplateSelect={handleTemplateSelect}
          />
        ) : (
          <div className="editor-container">
            <div className="canvas-section">
              <CanvasEditor 
                textContent={textContent}
                textStyle={textStyle}
                background={background}
                onCanvasRef={setCanvasRef}
              />
            </div>
            
            <div className="controls-section">
              <TextEditor 
                textContent={textContent}
                textStyle={textStyle}
                onTextChange={handleTextChange}
                onStyleChange={handleStyleChange}
              />
              
              <BackgroundSelector 
                background={background}
                onBackgroundChange={handleBackgroundChange}
              />
              
              <div className="actions">
                <button 
                  className="back-button"
                  onClick={() => setSelectedTemplate(null)}
                >
                  ← Back to Templates
                </button>
                
                <ExportButton canvasRef={canvasRef} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;