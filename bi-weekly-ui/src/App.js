
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import CreateChallenge from './components/CreateChallenge';
import Home from './components/Home';
import ProjectEvents from './components/ProjectEvents';
import CreateEvent from './components/CreateEvent';
import UpdateEvent from './components/UpdateEvents';
import Landing from './components/Landing';
import Register from './components/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<CreateChallenge />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/events" element={<ProjectEvents />} />
      <Route path="/createEvents" element={<CreateEvent />} />
      <Route path="/update" element={<UpdateEvent />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
