import React, { useState } from 'react';
import { backgroundColors } from '../templates/templates';
import './BackgroundSelector.css';

const BackgroundSelector = ({ background, onBackgroundChange }) => {
  const [activeTab, setActiveTab] = useState('colors');
  const [aiPrompt, setAiPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleColorSelect = (color) => {
    onBackgroundChange({
      type: 'color',
      value: color
    });
  };

  const handleAiGenerate = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // Placeholder for AI image generation
    // In a real app, this would call an AI image API like DALL-E, Midjourney, or Stability AI
    setTimeout(() => {
      const mockImages = [
        {
          id: 1,
          url: `https://picsum.photos/400/400?random=1&blur=1`,
          prompt: aiPrompt
        },
        {
          id: 2,
          url: `https://picsum.photos/400/400?random=2&blur=1`,
          prompt: aiPrompt
        },
        {
          id: 3,
          url: `https://picsum.photos/400/400?random=3&blur=1`,
          prompt: aiPrompt
        }
      ];
      
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 2000);
  };

  const handleImageSelect = (imageUrl) => {
    onBackgroundChange({
      type: 'image',
      imageData: imageUrl
    });
  };

  const generateMoreImages = () => {
    handleAiGenerate();
  };

  return (
    <div className="background-selector">
      <div className="section-header">
        🖼️ Background
      </div>

      <div className="background-tabs">
        <button
          className={`tab-button ${activeTab === 'colors' ? 'active' : ''}`}
          onClick={() => setActiveTab('colors')}
        >
          Colors
        </button>
        <button
          className={`tab-button ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          AI Images
        </button>
      </div>

      {activeTab === 'colors' && (
        <div className="colors-section">
          <div className="form-group">
            <label className="form-label">Background Colors</label>
            <div className="background-color-grid">
              {backgroundColors.map((color) => (
                <button
                  key={color.value}
                  className={`background-color-option ${
                    background.type === 'color' && background.value === color.value ? 'active' : ''
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => handleColorSelect(color.value)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ai' && (
        <div className="ai-section">
          <div className="form-group">
            <label className="form-label">Describe Your Background</label>
            <textarea
              className="text-input ai-prompt"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g. sunset over mountains, abstract colorful swirls, modern city skyline..."
              rows={3}
            />
          </div>

          <button
            className="generate-button"
            onClick={handleAiGenerate}
            disabled={!aiPrompt.trim() || isGenerating}
          >
            {isGenerating ? '🔄 Generating...' : '✨ Generate 3 Options'}
          </button>

          {generatedImages.length > 0 && (
            <div className="generated-images">
              <label className="form-label">Generated Options</label>
              <div className="image-grid">
                {generatedImages.map((image) => (
                  <div key={image.id} className="generated-image-card">
                    <img
                      src={image.url}
                      alt={`Generated: ${image.prompt}`}
                      className="generated-image"
                    />
                    <button
                      className="use-image-button"
                      onClick={() => handleImageSelect(image.url)}
                    >
                      Use This
                    </button>
                  </div>
                ))}
              </div>
              
              <button
                className="generate-more-button"
                onClick={generateMoreImages}
                disabled={isGenerating}
              >
                🔄 Generate More Options
              </button>
            </div>
          )}

          <div className="ai-notice">
            <p><strong>Note:</strong> This is a demo version using placeholder images. In production, this would integrate with AI image generation services like DALL-E, Midjourney, or Stability AI.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundSelector;