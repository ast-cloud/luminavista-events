import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Events from './pages/Events';
import Event from './pages/Event';
import EventRegistration from './pages/EventRegistration';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Events/>}/>
        <Route path='/:id' element={<Event/>}/>
        <Route path='/:id/register/:datetime' element={<EventRegistration/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
