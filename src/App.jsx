import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import NotFoundPage from './assets/pages/NotFoundPage';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
    
      </Routes>
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}

export default App