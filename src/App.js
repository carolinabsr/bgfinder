import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateGroupPage from './pages/CreateGroupPage'
import EditGroupPage from './pages/EditGroupPage';
import GroupDetailPage from './pages/GroupDetailPage';
import Navbar from "./components/Navbar"
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/group/create' element={ <CreateGroupPage/> } /> 
        <Route path='/group/edit/:groupId' element= { <EditGroupPage/>} />
        <Route path='/group/:groupId' element= { <GroupDetailPage />} />
        <Route path='/*' element={ <ErrorPage/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
