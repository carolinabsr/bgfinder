import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateGroupPage from './pages/CreateGroupPage'
import EditGroupPage from './pages/EditGroupPage';
import GroupDetailPage from './pages/GroupDetailPage';
import Navbar from "./components/Navbar"
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/group/create' element={ <CreateGroupPage/> } /> 
        <Route path='/group/edit' element= { <EditGroupPage/>} />
        <Route path='/group/:id' element= { <GroupDetailPage />} />
        <Route path='/*' element={ <ErrorPage/> } />
      </Routes>
    </div>
  );
}

export default App;
