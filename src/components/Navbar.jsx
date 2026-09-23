import { Link } from 'react-router-dom'; // Se usa 'Link' en lugar de etiquetas '<a>' para navegación SPA sin recargar la página

function Navbar() {
  return (
    <>
      {/*
          1. ESTILOS CSS PERSONALIZADOS (Scoped)
          Definición de colores institucionales y comportamientos visuales.
         ===============================*/}
      <style>{`
        /* Fondo blanco general y borde inferior discreto */
        .navbar-laravel {
          background-color: #ffffff;
          border-bottom: 1px solid #f0f0f0;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        }

        /* Botón estilo cápsula verde SENA (Cerrar sesión) */
        .btn-sena-pill {
          background-color: #39A900; /* Verde SENA */
          color: #ffffff !important;
          border-radius: 9999px;     /* Bordes redondeados tipo píldora */
          font-weight: 700;
          padding: 0.5rem 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;               /* Espacio entre el ícono de usuario y el texto */
          border: none;
          font-size: 0.82rem;
          transition: all 0.2s ease;
          text-decoration: none !important;
        }

        /* Efectos Hover del botón principal */
        .btn-sena-pill:hover {
          background-color: #2f8b00; /* Verde más oscuro al pasar el cursor */
          transform: translateY(-1px); /* Elevación sutil */
          box-shadow: 0 4px 12px rgba(57, 169, 0, 0.25);
        }

        /* Estilo base para los enlaces de navegación */
        .nav-link-sena {
          color: #6c757d !important; /* Gris secundario idéntico al de Laravel */
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none !important;
          transition: color 0.15s ease;
        }

        /* Cambio a verde al pasar sobre cualquier enlace */
        .nav-link-sena:hover {
          color: #39A900 !important;
        }

        /* Ajuste de la flecha de los desplegables (Dropdowns) */
        .dropdown-toggle::after {
          margin-left: 0.35em;
          vertical-align: 0.2em;
          font-size: 0.75em;
        }
      `}</style>

      {/* 
          2. ESTRUCTURA PRINCIPAL DEL HEADER
          Sticky-top mantiene el menú fijo al hacer scroll.
         ========================================== */}
      <header className="navbar-laravel sticky-top z-3 py-2">
        {/* Contenedor responsivo centrado con alineación Flexbox en los extremos */}
        <div className="container-xl px-4 d-flex align-items-center justify-content-between">
          
          {/* 
              SECCIÓN IZQUIERDA: LOGO + ENLACES DE MENÚ
             ------------------------------------------ */}
          <div className="d-flex align-items-center gap-4 gap-lg-5">
            
            {/* LOGO E IDENTIDAD "AdminSENA" */}
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
              <img 
                src="/images/logoSena.png" 
                alt="Logo SENA" 
                style={{ height: '45px', width: 'auto', objectFit: 'contain' }} 
              />
              {/* Tipografía en dos colores: Azul y Verde institucional */}
              <span className="fs-5" style={{ fontWeight: 900, color: '#00324D', letterSpacing: '-0.3px' }}>
                Admin<span style={{ color: '#39A900' }}>SENA</span>
              </span>
            </Link>

            {/* MENÚ DE NAVEGACIÓN (Oculto en pantallas pequeñas/móviles con d-none d-md-flex) */}
            <nav className="d-none d-md-flex align-items-center gap-4">
              
              {/* Enlace Inicio */}
              <Link to="/" className="nav-link-sena">
                Inicio
              </Link>
              
              {/* Enlace ¿Quiénes Somos? */}
              <Link to="/quienes-somos" className="nav-link-sena">
                ¿Quiénes Somos?
              </Link>

              {/* DROPDOWN 1: Gestión Base */}
              <div className="dropdown">
                <a 
                  className="dropdown-toggle nav-link-sena" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" // Atributo Bootstrap para activar desplegable
                  aria-expanded="false"
                >
                  Gestión Base
                </a>
                <ul className="dropdown-menu border-0 shadow-lg rounded-4 p-2 mt-2">
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/area/create">
                      📚 Áreas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/training-center/create">
                      🏢 Centros de Formación
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/computer/create">
                      💻 Computadores
                    </Link>
                  </li>
                </ul>
              </div>

              {/* DROPDOWN 2: Operación Académica */}
              <div className="dropdown">
                <a 
                  className="dropdown-toggle nav-link-sena" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Operación Académica
                </a>
                <ul className="dropdown-menu border-0 shadow-lg rounded-4 p-2 mt-2">
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/course/create">
                      ✏️ Cursos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/teacher/create">
                      👨‍🏫 Instructores
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/apprentice/create">
                      🧑‍💻 Aprendices
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded-3 py-2 small fw-semibold" to="/ambients/create">
                      🏫 Ambientes
                    </Link>
                  </li>
                </ul>
              </div>

            </nav>
          </div>

          {/* ------------------------------------------
              SECCIÓN DERECHA: BÚSQUEDA Y BOTÓN SESIÓN
             ------------------------------------------ */}
          <div className="d-flex align-items-center gap-3">
            
            {/* MÓDULO DE BÚSQUEDA (Estilo píldora suave) */}
            <div className="d-none d-sm-flex align-items-center bg-light rounded-pill px-3 py-1 border border-light-subtle">
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-transparent border-0 text-secondary" 
                style={{ fontSize: '0.8rem', width: '130px', outline: 'none' }} 
              />
              {/* Botón circular verde con icono de lupa */}
              <button 
                className="btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center text-white border-0" 
                style={{ background: '#39A900', width: '22px', height: '22px' }}
              >
                <i className="bi bi-search" style={{ fontSize: '0.6rem' }}></i>
              </button>
            </div>

            {/* BOTÓN VERDE "CERRAR SESIÓN" */}
            <Link to="/login" className="btn-sena-pill">
              <i className="bi bi-person-fill"></i>
              <span>Cerrar sesión</span>
            </Link>

          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;