
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ListNav from './Components/ListNav';
import ListUsers from './Components/ListUsers';
// import UserCard from './Components/UserCard';

function App() {
  return (
    <div>
      
      <ListNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<ListUsers/>}/>
        {/* <Route path='/User/Description/:id' element={<UserCard/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
