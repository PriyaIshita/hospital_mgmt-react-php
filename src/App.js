import logo from './logo.svg';
import './App.css';
import Login from './Login';
import BookAppointment from './BookAppointment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patient from './Patient';
import Dashboard from './Dashboard';

function App() {
  return (
 
 <Routes>
     <Route path="/" element={<Login/>}/>

     <Route path="/BookAppointment" element={<BookAppointment/>}/>
     <Route path='/Patient' element={<Patient/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
 
 
 
  );
}

export default App;
