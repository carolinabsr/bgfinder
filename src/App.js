import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateGroupPage from './pages/CreateGroupPage'
import Navbar from "./components/Navbar"
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/group/create' element={ <CreateGroupPage/> } />
        <Route path='/*' element={ <ErrorPage/> } />
        
      </Routes>
    </div>
  );
}

export default App;
