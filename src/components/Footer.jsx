import { Link } from 'react-router-dom';

function Footer() {
    // new Date().getFullYear() saca el año actual automáticamente,
    // así el copyright siempre queda actualizado sin tocar el código
    const year = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }} className="pt-5 pb-4">
            <div className="container">
                <div className="row g-4 mb-4">

                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <img src="/images/logoSena.png" alt="logoSena" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                            <span className="fw-bold fs-5 text-dark">Admin-SENA</span>
                        </div>
                        <p className="small text-muted mb-3" style={{ lineHeight: 1.6 }}>
                            Servicio Nacional de Aprendizaje • Regional Cauca.<br />
                            Plataforma para la optimización de procesos y gestión formativa integral.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h6 className="text-uppercase fw-bold text-dark mb-3 small">Navegación</h6>
                        <ul className="list-unstyled small mb-0 d-flex flex-column gap-2">
                            <li><Link to="/" className="text-secondary">Inicio</Link></li>
                            <li><Link to="/quienes-somos" className="text-secondary">¿Quiénes Somos?</Link></li>
                            <li><Link to="/areas" className="text-secondary">Módulos</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-uppercase fw-bold text-dark mb-3 small">Centro de Atención</h6>
                        <ul className="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
                            <li>Centro de Teleinformática y Producción Industrial (CTPI)</li>
                            <li>soporte.cauca@sena.edu.co</li>
                            <li>01 8000 910 270</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-uppercase fw-bold text-dark mb-3 small">Portales Oficiales</h6>
                        <ul className="list-unstyled small mb-0 d-flex flex-column gap-2">
                            {/* Estos son enlaces externos reales, por eso usan <a> normal en vez de <Link> */}
                            <li><a href="https://www.sena.edu.co" target="_blank" rel="noopener noreferrer" className="text-secondary">Portal Web SENA</a></li>
                            <li><a href="https://oferta.senasofiaplus.edu.co" target="_blank" rel="noopener noreferrer" className="text-secondary">SOFIA Plus</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-top pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
                    {/* {year} inserta la variable de JavaScript dentro del HTML */}
                    <div>© {year} <strong className="text-dark">AdminSENA</strong>. Todos los derechos reservados.</div>
                    <div>Desarrollado para la formación profesional integral.</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;