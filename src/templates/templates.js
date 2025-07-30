export const templates = [
  {
    id: 'minimal-quote',
    name: 'Minimal Quote',
    description: 'Clean white background with elegant typography',
    background: {
      type: 'color',
      value: '#ffffff'
    },
    textStyle: {
      fontFamily: 'Inter',
      fontSize: 48,
      fontWeight: 'normal',
      fontStyle: 'normal',
      color: '#2d3748',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    placeholder: 'Your inspiring quote here'
  },
  {
    id: 'bold-gradient',
    name: 'Bold Gradient',
    description: 'Vibrant gradient background with white text',
    background: {
      type: 'gradient',
      value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    textStyle: {
      fontFamily: 'Montserrat',
      fontSize: 52,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: '#ffffff',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    placeholder: 'Make it happen'
  },
  {
    id: 'modern-business',
    name: 'Modern Business',
    description: 'Professional look with subtle background',
    background: {
      type: 'color',
      value: '#f7fafc'
    },
    textStyle: {
      fontFamily: 'Source Sans Pro',
      fontSize: 44,
      fontWeight: '600',
      fontStyle: 'normal',
      color: '#1a202c',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    placeholder: 'Professional message'
  },
  {
    id: 'inspirational',
    name: 'Inspirational',
    description: 'Dark overlay perfect for motivational quotes',
    background: {
      type: 'overlay',
      value: '#2d3748',
      overlay: 'rgba(0, 0, 0, 0.4)'
    },
    textStyle: {
      fontFamily: 'Playfair Display',
      fontSize: 46,
      fontWeight: 'normal',
      fontStyle: 'italic',
      color: '#ffffff',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    placeholder: 'Dream big, work hard'
  },
  {
    id: 'simple-announcement',
    name: 'Simple Announcement',
    description: 'Clean design with color accent',
    background: {
      type: 'color',
      value: '#fff5f5'
    },
    textStyle: {
      fontFamily: 'Poppins',
      fontSize: 50,
      fontWeight: '500',
      fontStyle: 'normal',
      color: '#c53030',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    placeholder: 'Important announcement'
  }
];

export const fontOptions = [
  { name: 'Inter', value: 'Inter' },
  { name: 'Arial', value: 'Arial' },
  { name: 'Roboto', value: 'Roboto' },
  { name: 'Montserrat', value: 'Montserrat' },
  { name: 'Playfair Display', value: 'Playfair Display' },
  { name: 'Lato', value: 'Lato' },
  { name: 'Open Sans', value: 'Open Sans' },
  { name: 'Source Sans Pro', value: 'Source Sans Pro' },
  { name: 'Poppins', value: 'Poppins' },
  { name: 'Oswald', value: 'Oswald' }
];

export const colorOptions = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#ffffff' },
  { name: 'Deep Red', value: '#c53030' },
  { name: 'Ocean Blue', value: '#2b6cb0' },
  { name: 'Forest Green', value: '#38a169' },
  { name: 'Royal Purple', value: '#6b46c1' },
  { name: 'Warm Orange', value: '#dd6b20' },
  { name: 'Hot Pink', value: '#d53f8c' },
  { name: 'Charcoal Gray', value: '#4a5568' },
  { name: 'Warm Brown', value: '#b7791f' }
];

export const backgroundColors = [
  { name: 'Pure White', value: '#ffffff' },
  { name: 'Soft Cream', value: '#fffbf0' },
  { name: 'Light Gray', value: '#f7fafc' },
  { name: 'Warm Beige', value: '#fdf2e9' },
  { name: 'Powder Blue', value: '#ebf8ff' },
  { name: 'Mint Green', value: '#f0fff4' },
  { name: 'Lavender', value: '#faf5ff' },
  { name: 'Peach', value: '#fffaf0' },
  { name: 'Coral', value: '#fff5f5' },
  { name: 'Sage', value: '#f7fafc' },
  { name: 'Deep Navy', value: '#1a202c' },
  { name: 'Forest', value: '#1a202c' },
  { name: 'Burgundy', value: '#742a2a' },
  { name: 'Midnight', value: '#171923' },
  { name: 'Charcoal', value: '#2d3748' },
  { name: 'Deep Purple', value: '#44337a' }
];