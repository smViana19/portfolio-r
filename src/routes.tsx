import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<About />}></Route>
                <Route path="/habilidades" element={<Skills />}></Route>
                <Route path="/projetos" element={<Projects />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
