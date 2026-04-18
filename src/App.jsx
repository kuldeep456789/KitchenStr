import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Category from './pages/Category';
import CustomCursor from './components/CustomCursor';
import ChatBot from './components/ChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  React.useEffect(() => {
    const handleToggle = () => setIsChatOpen(prev => !prev);
    window.addEventListener('toggle-chat', handleToggle);
    return () => window.removeEventListener('toggle-chat', handleToggle);
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <CustomCursor />
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </div>
  );
}



export default App;


