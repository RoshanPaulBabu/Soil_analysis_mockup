import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { UploadPage } from './pages/UploadPage';
import { OcrPage } from './pages/OcrPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/upload" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="upload" element={<UploadPage />} />
          <Route path="ocr" element={<OcrPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
