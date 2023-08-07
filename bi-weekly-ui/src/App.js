
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import CreateChallenge from './components/CreateChallenge';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateChallenge />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
