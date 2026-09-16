import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function Layouts() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            {/* Outlet es el huecodonde React Router inserta
                la página que corresponda según la URL actual
                (Home, Areas, Login, etc)  es el equivalente
                a yield 'content') en Laravel */}
            <main className="flex-grow-1 py-4">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Layouts;