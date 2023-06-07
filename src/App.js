import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import Home from '../src/pages/Home';
import Sales from '../src/pages/Sales';
import Clients from '../src/pages/Clientes';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex'>
          <Sidebar />
            <div className="content">
              <Routes>
                <Route path='/' exact={true} Component={Home} />
                <Route path='/sales' exact={true} Component={Sales} />
                <Route path='/clients' exact={true} Component={Clients} />
              </Routes>
            </div>
      </div>  
    </Router>
  );
}

export default App;
