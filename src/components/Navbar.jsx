import { Link } from 'react-router-dom';
// Link reemplaza el <a> de HTML: cambia de página sin recargar el navegador

function Navbar() {
    return (
        <header className="bg-white border-bottom border-light sticky-top z-3">
            <div className="container-xl px-4 py-3 d-flex align-items-center justify-content-between">

                <div className="d-flex align-items-center gap-4 gap-lg-5">
                    <Link to="/" className="d-flex align-items-center gap-2">

                        {/* En JSX los estilos van como objeto style  propiedad valor */}
                        <img src="/images/logoSena.png" alt="logoSena" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
                        <span className="fs-4 fw-black" style={{ fontWeight: 900, color: '#00324D' }}>
                            Admin<span style={{ color: '#39A900' }}>SENA</span>
                        </span>
                    </Link>

                    <nav className="d-none d-md-flex align-items-center gap-4 text-sm fw-semibold">
                        
                        <Link to="/quienes-somos" className="text-secondary hover-sena">¿Quiénes Somos?</Link>

                        <div className="dropdown">
                            <a className="dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">
                                Gestión Base
                            </a>
                            <ul className="dropdown-menu border-0 shadow-lg rounded-4 p-2">
                                <li><Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/areas">Áreas</Link></li>
                                <li><Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/training-centers">Centros de Formación</Link></li>
                                <li><Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/computers">Computadores</Link></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">
                                Operación Académica
                            </a>
                            <ul className="dropdown-menu border-0 shadow-lg rounded-4 p-2">
                                <li><Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/courses">Programas</Link></li>
                                <li><Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/teachers">Instructores</Link></li>
                                <li><Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/apprentices">Aprendices</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <div className="d-none d-sm-flex align-items-center bg-light rounded-pill px-3 py-1 border">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="bg-transparent border-0 text-secondary"
                            style={{ fontSize: '0.8rem', width: '140px', outline: 'none' }}
                        />
                        <button className="btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center text-white" style={{ background: '#39A900', width: '24px', height: '24px' }}>
                            <i className="bi bi-search" style={{ fontSize: '0.65rem' }}></i>
                        </button>
                    </div>

                    <Link to="/login" className="btn-sena-pill" style={{ fontSize: '0.8rem' }}>
                        <i className="bi bi-person-fill"></i>
                        <span>Iniciar Sesión</span>
                        <i className="bi bi-chevron-down ms-1" style={{ fontSize: '0.6rem' }}></i>
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Navbar; // Se exporta para poder importarlo en Layouts.jsx ...