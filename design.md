# Pinterest Post Generator - UI Design

## Mobile Layout (Primary Design)

```
┌─────────────────────────────────────┐
│  ✨ Pinterest Post Generator        │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐ │
│  │                                 │ │
│  │        CANVAS PREVIEW           │ │
│  │       (1080x1080 scaled)        │ │
│  │                                 │ │
│  │    "Your text appears here"     │ │
│  │                                 │ │
│  │                                 │ │
│  └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  📝 TEXT EDITING                    │
│  ┌─────────────────────────────────┐ │
│  │ Type your message here...       │ │
│  │                                 │ │
│  └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  🎨 TEXT STYLING                    │
│                                     │
│  Font Family                        │
│  [Inter ▼] [Arial ▼] [Roboto ▼]    │
│  [Montserrat ▼] [Playfair ▼]       │
│                                     │
│  Font Size                          │
│  ○─────●─────○ (24-72px)            │
│                                     │
│  Font Style                         │
│  [Regular] [Bold] [Italic]          │
│                                     │
│  Text Color                         │
│  ● ● ● ● ● ● ● ● ● ●                │
│  (10 popular colors)                │
│                                     │
│  📍 TEXT POSITION                   │
│                                     │
│  Horizontal Alignment               │
│  [← Left] [⟷ Center] [Right →]     │
│                                     │
│  Vertical Position                  │
│  [↑ Higher] [⟷ Center] [↓ Lower]   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  🖼️ BACKGROUND                      │
│                                     │
│  ╭─ Colors ─╮  ╭─ AI Images ─╮     │
│  │  ● ● ● ●  │  │   Generate   │     │
│  │  ● ● ● ●  │  │   Images     │     │
│  │  ● ● ● ●  │  │              │     │
│  ╰───────────╯  ╰──────────────╯     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  🤖 AI IMAGE GENERATOR              │
│  ┌─────────────────────────────────┐ │
│  │ Describe your background...     │ │
│  │ e.g. "sunset over mountains"    │ │
│  └─────────────────────────────────┘ │
│                                     │
│  [Generate 3 Options]               │
│                                     │
│  Generated Images:                  │
│  ┌───┐ ┌───┐ ┌───┐                 │
│  │ 1 │ │ 2 │ │ 3 │                 │
│  │ ◐ │ │ ◐ │ │ ◐ │                 │
│  └───┘ └───┘ └───┘                 │
│  [Use] [Use] [Use]                  │
│                                     │
│  [Generate More Options]            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ⬇️ EXPORT                          │
│  [📥 Download Post (1080x1080)]     │
│                                     │
└─────────────────────────────────────┘
```

## Desktop Layout (Expanded View)

```
┌─────────────────────────────────────────────────────────────────────┐
│  ✨ Pinterest Post Generator                                        │
├─────────────────────────────────────┬───────────────────────────────┤
│                                     │                               │
│  MAIN CANVAS AREA                   │  EDITING PANEL                │
│                                     │                               │
│  ┌─────────────────────────────────┐ │  📝 TEXT EDITING              │
│  │                                 │ │  ┌─────────────────────────┐ │
│  │        CANVAS PREVIEW           │ │  │ Type your message...    │ │
│  │       (1080x1080 scaled)        │ │  │                         │ │
│  │                                 │ │  └─────────────────────────┘ │
│  │                                 │ │                               │
│  │    "Your text appears here"     │ │  🎨 TEXT STYLING              │
│  │                                 │ │                               │
│  │                                 │ │  Font Family                  │
│  │                                 │ │  [Inter      ▼]              │
│  │                                 │ │  [Arial      ▼]              │
│  └─────────────────────────────────┘ │  [Roboto     ▼]              │
│                                     │  [Montserrat ▼]              │
│                                     │  [Playfair   ▼]              │
│                                     │                               │
│                                     │  Font Size                    │
│                                     │  ○─────●─────○ (24-72px)      │
│                                     │                               │
│                                     │  Font Style                   │
│                                     │  [Regular] [Bold] [Italic]    │
│                                     │                               │
│                                     │  Text Color                   │
│                                     │  ● ● ● ● ● ● ● ● ● ●          │
│                                     │                               │
│                                     │  📍 TEXT POSITION             │
│                                     │                               │
│                                     │  Horizontal Alignment         │
│                                     │  [← Left] [⟷ Center] [→ Right]│
│                                     │                               │
│                                     │  Vertical Position            │
│                                     │  [↑ Higher] [⟷ Center] [↓ Lower]│
│                                     │                               │
│                                     │  🖼️ BACKGROUND                │
│                                     │                               │
│                                     │  ╭─ Colors ─╮                │
│                                     │  │ ● ● ● ● ● │                │
│                                     │  │ ● ● ● ● ● │                │
│                                     │  ╰───────────╯                │
│                                     │                               │
│                                     │  ╭─ AI Images ─╮             │
│                                     │  │ ┌─────────────────────┐ │ │
│                                     │  │ │ Describe background │ │ │
│                                     │  │ └─────────────────────┘ │ │
│                                     │  │ [Generate 3 Options]    │ │
│                                     │  │                         │ │
│                                     │  │ ┌───┐ ┌───┐ ┌───┐     │ │
│                                     │  │ │ 1 │ │ 2 │ │ 3 │     │ │
│                                     │  │ └───┘ └───┘ └───┘     │ │
│                                     │  ╰─────────────────────────╯ │
│                                     │                               │
│                                     │  ⬇️ EXPORT                    │
│                                     │  [📥 Download Post]           │
│                                     │                               │
└─────────────────────────────────────┴───────────────────────────────┘
```

## Component Specifications

### 1. Canvas Preview (Main Focus)
```
┌─────────────────────────────────────┐
│ ┌─ Live Preview ─────────────────┐  │
│ │                               │  │
│ │  Background: Color/Image      │  │
│ │                               │  │
│ │     "Your Custom Text"        │  │
│ │    (Real-time updates)        │  │
│ │                               │  │
│ │  1080x1080 → Scaled to fit    │  │
│ └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 2. Text Styling Controls
```
Font Family (10 Popular Options):
┌────────┬────────┬────────┬────────┬────────┐
│ Inter  │ Arial  │ Roboto │Montsrrt│Playfair│
├────────┼────────┼────────┼────────┼────────┤
│Lato    │Open S. │Source  │Poppins │ Oswald │
└────────┴────────┴────────┴────────┴────────┘

Font Size Slider:
Small ○─────●─────○ Large
      24px  48px  72px

Font Style Buttons:
┌─────────┬──────┬────────┐
│ Regular │ Bold │ Italic │
└─────────┴──────┴────────┘

Text Color Palette:
● ● ● ● ● ● ● ● ● ●
(Black, White, Red, Blue, Green, 
 Purple, Orange, Pink, Gray, Brown)

Text Position Controls:
┌─ Horizontal Alignment ─┐
│ [← Left] [⟷ Center] [→ Right] │
└────────────────────────┘

┌─ Vertical Position ─┐
│ [↑ Higher] [⟷ Center] [↓ Lower] │
└─────────────────────┘
```

### 3. Background Options
```
╭────── BACKGROUND SELECTOR ──────╮
│                                 │
│ ╭─ Solid Colors ─╮              │
│ │ ● ● ● ● ● ● ● ● │              │
│ │ ● ● ● ● ● ● ● ● │              │
│ ╰─────────────────╯              │
│                                 │
│ ╭─ AI Generated Images ─╮       │
│ │ ┌─────────────────────┐ │     │
│ │ │ "sunset mountains"  │ │     │
│ │ └─────────────────────┘ │     │
│ │ [Generate Images]       │     │
│ │                         │     │
│ │ Preview Options:        │     │
│ │ ┌───┐ ┌───┐ ┌───┐     │     │
│ │ │◐ 1│ │◐ 2│ │◐ 3│     │     │
│ │ └───┘ └───┘ └───┘     │     │
│ │ [Use] [Use] [Use]      │     │
│ │                         │     │
│ │ [🔄 Generate More]      │     │
│ ╰─────────────────────────╯     │
╰─────────────────────────────────╯
```

### 4. Text Input Area
```
┌─ TEXT EDITOR ────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ Type your message here...       │ │
│ │ (Live preview updates above)    │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│ Character count: 45/280             │
└─────────────────────────────────────┘
```

## User Flow

### Step 1: Text Input
```
User types → Canvas updates in real-time
"Follow your dreams" → Immediately visible on canvas
```

### Step 2: Style Selection
```
Font: [Inter ▼] → Click dropdown → Select font
Size: Drag slider → Live preview updates
Style: [Bold] → Click to toggle → Text becomes bold
Color: Click color dot → Text color changes
Alignment: [Center] → Click to cycle → Left/Center/Right
Position: [Center] → Click to cycle → Higher/Center/Lower
```

### Step 3: Background Choice
```
Option A: Click color → Background changes
Option B: Type prompt → "sunset over mountains" 
         → Generate → Select from 3 options
         → Or generate more options
```

### Step 4: Export
```
[📥 Download Post] → PNG file downloads
```

## Color Palettes

### Text Colors (10 Popular Options)
```
● Black (#000000)    ● White (#FFFFFF)
● Deep Red (#C53030) ● Ocean Blue (#2B6CB0)  
● Forest Green (#38A169) ● Royal Purple (#6B46C1)
● Warm Orange (#DD6B20) ● Hot Pink (#D53F8C)
● Charcoal Gray (#4A5568) ● Warm Brown (#B7791F)
```

### Background Colors (16 Popular Options)
```
● Pure White (#FFFFFF)   ● Soft Cream (#FFFBF0)
● Light Gray (#F7FAFC)   ● Warm Beige (#FDF2E9)
● Powder Blue (#EBF8FF)  ● Mint Green (#F0FFF4)
● Lavender (#FAF5FF)     ● Peach (#FFFAF0)
● Coral (#FFF5F5)        ● Sage (#F7FAFC) 
● Deep Navy (#1A202C)    ● Forest (#1A202C)
● Burgundy (#742A2A)     ● Midnight (#171923)
● Charcoal (#2D3748)     ● Deep Purple (#44337A)
```

## Font Options (10 Popular Choices)
```
1. Inter (Modern, clean)
2. Arial (Classic, readable)  
3. Roboto (Google's go-to)
4. Montserrat (Elegant headers)
5. Playfair Display (Serif elegance)
6. Lato (Friendly, approachable)
7. Open Sans (Web standard)
8. Source Sans Pro (Professional)
9. Poppins (Rounded, modern)
10. Oswald (Bold, condensed)
```

## Mobile Interaction Patterns

### Touch Gestures
- **Tap text area**: Focus and edit
- **Tap color**: Instantly apply
- **Slide font size**: Real-time preview
- **Tap font name**: Dropdown selection
- **Tap font style**: Regular/Bold/Italic toggle
- **Tap alignment**: Left/Center/Right toggle
- **Tap position**: Higher/Center/Lower toggle
- **Swipe**: Navigate between generated images

### Visual Feedback
- **Active states**: Highlighted selections
- **Loading states**: Spinner during image generation
- **Success states**: Checkmark on download
- **Error states**: Red border on failed generation

This design prioritizes the canvas preview while providing comprehensive customization options in an organized, mobile-friendly interface.