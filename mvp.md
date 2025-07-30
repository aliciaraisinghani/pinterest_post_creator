# Pinterest Post Generator - MVP Specification

## The Magic Promise
**"Pick a template, type your text, download your post. Beautiful results in under 30 seconds."**

## Core User Flow (Target: 20-30 seconds)
1. **Choose Template** (5-8 seconds) → Click gorgeous template from grid
2. **Edit Text** (10-15 seconds) → Click text, type message, see live preview
3. **Download** (3-5 seconds) → Click download, get 1080x1080 PNG

## MVP Features (Absolute Minimum)

### 1. Template Gallery (The Hook)
- **5 Stunning Templates Only**: 
  - Minimalist quote (white background, elegant typography)
  - Bold gradient (vibrant background, white text)
  - Modern business (clean, professional look)
  - Inspirational (photo background with text overlay)
  - Simple announcement (centered text, color accent)
- **One-Click Selection**: Tap template → immediately loads in editor
- **Visual Impact**: Each template looks like it came from a $50/month design tool

### 2. Text Editing (The Core Magic)
- **Single Text Element**: Focus on main message only
- **Click-to-Edit**: Tap text on canvas → type new message
- **Live Preview**: Text updates in real-time as you type
- **Smart Formatting**: 
  - Auto font size adjustment (fits the template design)
  - Pre-set font that looks professional
  - Automatic text wrapping
- **Character Limit**: 100 characters max (forces concise, impactful messages)

### 3. Instant Visual Feedback
- **Real-time Canvas**: Every keystroke updates the preview immediately
- **No Loading States**: Smooth, instant interactions
- **Mobile-Optimized**: Large tap targets, easy text selection

### 4. One-Click Export
- **Download Button**: Large, prominent "Download Post" button
- **Instant Export**: Canvas → PNG in under 2 seconds
- **Perfect Dimensions**: 1080x1080px, ready for Instagram/Pinterest
- **Auto-filename**: "post-[timestamp].png"

## What Makes It Feel Magical

### 1. Professional Results Instantly
- Templates designed by a professional (not amateur-looking)
- Typography that rivals expensive design tools
- Color combinations that "just work"
- Layouts that make any text look good

### 2. Zero Learning Curve
- No tutorials needed
- No complex menus
- No design decisions required
- "It just works" experience

### 3. Speed & Smoothness
- App loads in under 2 seconds
- Zero lag between interactions
- Smooth animations and transitions
- Mobile performance that feels native

## Technical Implementation

### Architecture
```
src/
├── components/
│   ├── TemplateGallery.jsx    // 5 template cards
│   ├── CanvasEditor.jsx       // Main editing interface
│   └── ExportButton.jsx       // Download functionality
├── templates/
│   └── templates.js           // Template data (5 designs)
├── hooks/
│   └── useCanvas.js          // Canvas operations
└── App.jsx                   // Simple routing
```

### Canvas Strategy
- **HTML5 Canvas** for rendering
- **React state** for text content
- **CSS positioning** for UI elements
- **No external libraries** beyond React

### Templates Structure
```javascript
{
  id: 'minimal-quote',
  name: 'Minimal Quote',
  background: '#ffffff',
  textStyle: {
    fontFamily: 'Inter',
    fontSize: 48,
    color: '#2d3748',
    textAlign: 'center',
    position: { x: 540, y: 540 }
  },
  placeholder: 'Your inspiring quote here'
}
```

## Mobile-First Design

### Touch Interactions
- **Large Text Areas**: Easy to tap and edit
- **Gesture Support**: Tap to select, type to edit
- **Visual Feedback**: Clear focus states
- **Thumb-Friendly**: All actions within thumb reach

### Responsive Layout
- **Portrait Priority**: Optimized for phone usage
- **Canvas Scaling**: Maintains aspect ratio on any screen
- **Bottom Actions**: Download button at bottom for easy thumb access

## Success Criteria
- [ ] User can create post in under 30 seconds
- [ ] Templates look professional (could pass for paid tool)
- [ ] Zero crashes on mobile browsers
- [ ] Exported images are crisp and properly sized
- [ ] App works without internet after initial load

## MVP Scope Boundaries

### ✅ INCLUDED (Core Magic)
- 5 beautiful templates
- Single text editing
- One-click download
- Mobile-responsive design
- Instant visual feedback

### ❌ NOT INCLUDED (Save for V2)
- Multiple text elements
- Color customization
- Font choices
- Image uploads
- Template categories
- User accounts
- Saving/loading designs
- Social sharing
- Advanced formatting

## Development Priority

### Day 1: Foundation
- React setup + Canvas component
- Basic template rendering
- Text click-to-edit functionality

### Day 2: Polish
- 5 stunning template designs
- Mobile responsiveness
- Export functionality

### Day 3: Magic
- Performance optimization
- Smooth animations
- User experience refinement

## The "Wow" Moment
When a user types "Follow your dreams" into the minimal quote template and sees it rendered with perfect typography, balanced spacing, and professional aesthetics - that's the magic. They think: *"I can't believe I just made something this beautiful in 10 seconds."*

## Deployment
- **Static hosting** (Railway/Vercel/Netlify)
- **No build complexity** 
- **Single page application**
- **PWA-ready** for mobile installation

This MVP strips away everything non-essential while maintaining the core magic: transforming simple text into professional-looking social media posts with zero effort and maximum visual impact.