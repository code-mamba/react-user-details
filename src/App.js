import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route,Routes} from 'react-router-dom';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={Home} ></Route>
        <Route path ='/addUser' element={<AddUser/>}></Route>
        <Route path = '/editUser/:id' element={<EditUser/>}> </Route>
        </Routes>
      
      <Home></Home>
    </div>
  );
}

export default App;
