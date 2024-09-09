import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
            <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
          </Routes>
        </Router>
      <header className="App-header">
        <h1>Reid Singleton</h1>
        <p>
          Follow me on my computer science adventure.
        </p>
      </header>
      <div className="App-body">
      </div>
    </div>
  );
}

export default App;
