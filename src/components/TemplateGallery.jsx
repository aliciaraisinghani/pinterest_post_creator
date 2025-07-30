import React from 'react';
import './TemplateGallery.css';

const TemplateGallery = ({ templates, onTemplateSelect }) => {
  const getPreviewStyle = (template) => {
    const baseStyle = {
      background: template.background.value,
      color: template.textStyle.color,
      fontFamily: template.textStyle.fontFamily,
      fontSize: '14px',
      fontWeight: template.textStyle.fontWeight,
      fontStyle: template.textStyle.fontStyle,
      textAlign: template.textStyle.textAlign,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '120px',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden'
    };

    // Handle gradient backgrounds
    if (template.background.type === 'gradient') {
      baseStyle.background = template.background.value;
    }

    // Handle overlay backgrounds
    if (template.background.type === 'overlay') {
      baseStyle.background = template.background.value;
      baseStyle.position = 'relative';
    }

    return baseStyle;
  };

  const getOverlayStyle = (template) => {
    if (template.background.type === 'overlay' && template.background.overlay) {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: template.background.overlay,
        borderRadius: '8px'
      };
    }
    return null;
  };

  return (
    <div className="template-gallery">
      <div className="gallery-header">
        <h2>Choose a Template</h2>
        <p>Select a design to get started</p>
      </div>
      
      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-card"
            onClick={() => onTemplateSelect(template)}
          >
            <div className="template-preview" style={getPreviewStyle(template)}>
              {getOverlayStyle(template) && (
                <div style={getOverlayStyle(template)} />
              )}
              <span className="preview-text">{template.placeholder}</span>
            </div>
            
            <div className="template-info">
              <h3>{template.name}</h3>
              <p>{template.description}</p>
            </div>
            
            <div className="template-action">
              <span className="use-template-btn">Use Template →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;