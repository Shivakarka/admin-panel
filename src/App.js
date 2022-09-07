
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Users from './components/UserComponents/Users';
import AddUser from './components/UserComponents/AddUser';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/dashboard" exact element={<Dashboard/>} />
        <Route  path="/users" exact element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;
