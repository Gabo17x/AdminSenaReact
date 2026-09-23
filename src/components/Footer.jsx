import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <style>{`
        .hover-success {
          transition: color 0.15s ease-in-out;
        }
        .hover-success:hover {
          color: #39A900 !important;
        }
        .tracking-wider {
          letter-spacing: 0.05em;
        }
        /* Ancho fijo para los íconos para que los textos comiencen exactamente en la misma línea vertical */
        .icon-fixed-width {
          width: 20px;
          text-align: center;
          flex-shrink: 0;
        }
      `}</style>

      <footer 
        className="pt-5 pb-4 mt-auto" 
        style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f0' }}
      >
        <div className="container">
          <div className="row g-4 mb-4 text-start">
            
            {/* 1. Identidad Institucional */}
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start">
              <div className="d-flex align-items-center gap-2 mb-3">
                <img 
                  src="/images/logoSena.png" 
                  alt="Logo SENA" 
                  style={{ height: '45px', width: 'auto', objectFit: 'contain' }} 
                />
                <span className="fw-bold fs-5 text-dark">Admin-SENA</span>
              </div>
              
              <p className="small text-muted mb-3 text-start" style={{ lineHeight: 1.6 }}>
                Servicio Nacional de Aprendizaje • Regional Cauca.<br />
                Plataforma para la optimización de procesos y gestión formativa integral.
              </p>
              
              <span className="badge rounded-pill bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 fw-semibold">
                <i className="bi bi-circle-fill me-1" style={{ fontSize: '8px' }}></i> Versión 2.0 Estable
              </span>
            </div>

            {/* 2. Navegación Rápida */}
            <div className="col-lg-2 col-md-6 text-start">
              <h6 className="text-uppercase fw-bold text-dark mb-3 small tracking-wider">
                Navegación
              </h6>
              <ul className="list-unstyled small mb-0 d-flex flex-column gap-2 p-0">
                <li>
                  <Link to="/" className="text-secondary text-decoration-none hover-success d-inline-flex align-items-center gap-2">
                    <i className="bi bi-house text-success icon-fixed-width"></i> 
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/quienes-somos" className="text-secondary text-decoration-none hover-success d-inline-flex align-items-center gap-2">
                    <i className="bi bi-info-circle text-success icon-fixed-width"></i> 
                    <span>¿Quiénes Somos?</span>
                  </Link>
                </li>
                <li>
                  <Link to="/area/create" className="text-secondary text-decoration-none hover-success d-inline-flex align-items-center gap-2">
                    <i className="bi bi-grid text-success icon-fixed-width"></i> 
                    <span>Módulos</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Centro de Atención */}
            <div className="col-lg-3 col-md-6 text-start">
              <h6 className="text-uppercase fw-bold text-dark mb-3 small tracking-wider">
                Centro de Atención
              </h6>
              <ul className="list-unstyled small text-muted mb-0 d-flex flex-column gap-2 p-0">
                <li className="d-flex align-items-start gap-2">
                  <i className="bi bi-geo-alt-fill text-success mt-1 icon-fixed-width"></i>
                  <span>Centro de Teleinformática y Producción Industrial (CTPI)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-success icon-fixed-width"></i>
                  <span>soporte.cauca@sena.edu.co</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-success icon-fixed-width"></i>
                  <span>01 8000 910 270</span>
                </li>
              </ul>
            </div>

            {/* 4. Portales Oficiales */}
            <div className="col-lg-3 col-md-6 text-start">
              <h6 className="text-uppercase fw-bold text-dark mb-3 small tracking-wider">
                Portales Oficiales
              </h6>
              <ul className="list-unstyled small mb-0 d-flex flex-column gap-2 p-0">
                <li>
                  <a 
                    href="https://www.sena.edu.co" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-secondary text-decoration-none hover-success d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-box-arrow-up-right text-muted icon-fixed-width"></i> 
                    <span>Portal Web SENA</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://oferta.senasofiaplus.edu.co" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-secondary text-decoration-none hover-success d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-box-arrow-up-right text-muted icon-fixed-width"></i> 
                    <span>SOFIA Plus</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://zajuna.sena.edu.co" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-secondary text-decoration-none hover-success d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-box-arrow-up-right text-muted icon-fixed-width"></i> 
                    <span>Plataforma Zajuna</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Fila Inferior de Copyright */}
          <div className="border-top pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
            <div>
              © {new Date().getFullYear()} <strong className="text-dark">AdminSENA</strong>. Todos los derechos reservados.
            </div>
            <div>
              Desarrollado para la formación profesional integral.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;