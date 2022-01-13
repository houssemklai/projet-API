
import './App.css';
import Userlist from './userlist';
import{ Route,Routes} from 'react-router-dom'
import Details from './Details';

    

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route    path='/'  element={ <Userlist /> }  ></Route>
        <Route 
        path = '/details/:id' 
        element={<Details/>}
        
      />
      </Routes>
    </div>
  );
}

export default App;
