import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header my-6">
        <Router>
            <Navigation/>
            <Routes>
              <Route path='/portfolio/' element={<HomePage/>}></Route>
              <Route path='/projects' element={<ProjectsPage/>}></Route>
            </Routes>
          </Router>
      </header>
      <div className="App-body">
      </div>
    </div>
  );
}

export default App;
