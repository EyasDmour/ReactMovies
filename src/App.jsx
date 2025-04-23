import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContexts';


function App() {
    return <MovieProvider>
        <NavBar />
        <main className='main-content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Favorite" element={<Favorite />} />
            </Routes>
        </main>
    </MovieProvider>

}

export default App
