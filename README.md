# Soil Analysis Dashboard

A modern React TypeScript application built with Vite and Tailwind CSS for soil analysis report management and visualization.

## Features

### 🔬 Upload & OCR Processing
- **File Upload**: Drag-and-drop or file picker for PDF/JPG/PNG files
- **File Validation**: Size limits and MIME type checking
- **Mock OCR Processing**: Simulated OCR with loading states
- **Error Handling**: Inline error messages for invalid files

### 📊 OCR Analysis Results
- **Report Summary**: File metadata, lab info, sample details
- **Soil Metrics**: pH, EC, moisture, nutrients (N/P/K), micronutrients
- **Status Indicators**: Low/Optimal/High chips for each metric
- **Recommendations**: Agronomic next steps based on analysis

### 📈 Interactive Dashboard
- **KPI Cards**: Average pH, organic carbon, optimal samples, alerts
- **Trend Charts**: Time series visualization of key nutrients
- **Radar Chart**: Soil quality comparison vs. optimal ranges
- **Sample Table**: Sortable and filterable data grid
- **SAR Map**: Mock displacement visualization with interactive controls

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Heroicons
- **UI Components**: Headless UI

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Usage Guide

### Navigation Flow

1. **Upload Page (`/upload`)**:
   - Upload soil analysis reports (PDF/JPG/PNG)
   - Files are validated for type and size
   - Click "Parse with OCR" to process (mock 2-second delay)

2. **OCR Results (`/ocr`)**:
   - View extracted metadata and sample information
   - Review soil metrics with status indicators
   - Read agronomic recommendations
   - Continue to dashboard

3. **Dashboard (`/dashboard`)**:
   - Monitor KPIs and trends
   - Interact with charts and visualizations
   - Filter and sort sample data
   - Explore SAR displacement map

## Mock Data

The application uses comprehensive mock data including:
- Soil metrics with realistic ranges and status classifications
- Sample data across multiple regions and time periods
- Trend data for visualization
- All interactions are simulated - no backend integration required

## Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: ARIA labels, keyboard navigation, focus states
- **Modern UI**: Clean design with hover effects and transitions
- **Color Coding**: Consistent status indicators (green/yellow/red)
- **Interactive Elements**: Smooth animations and feedback
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
