import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateGroupPage from './pages/CreateGroupPage'
import EditGroupPage from './pages/EditGroupPage';
import GroupDetailPage from './pages/GroupDetailPage';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/group/create' element={ <CreateGroupPage/> } />
        <Route path='/group/edit' element= { <EditGroupPage/>} />
        <Route path='/group/detail' element= { <GroupDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
