import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHeader from './Components/PageHeader/PageHeader';
import Connect4 from './Components/Connect4/Connect4';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <PageHeader/>
      </div>
      <Routes basename="/">
        <Route exact path='/connect4' element={<Connect4/>}/>
      </Routes>
    </Router>
  );
}

export default App;
