
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
