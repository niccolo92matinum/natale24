import './App.css';
import { Routes, Route } from 'react-router-dom';
const  App = () => {
  return (
    <Routes>
    
        <Route path='/ciao' element={<Welcome/>}></Route>
    </Routes>
    
   
  );
}

export default App;
