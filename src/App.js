import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Navigation/>
            <Routes>
              <Route path='/portfolio' element={<HomePage/>}></Route>
              <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
              <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
            </Routes>
          </Router>
      </header>
      <div className="App-body">
      </div>
    </div>
  );
}

export default App;
