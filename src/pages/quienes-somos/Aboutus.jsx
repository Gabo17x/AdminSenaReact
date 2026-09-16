import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container py-4">
      {/* Encabezado Principal */}
      <div className="text-center mb-5">
        <span className="badge bg-success bg-opacity-10 text-success fw-bold text-uppercase px-3 py-2 rounded-pill small">
          Institucional
        </span>
        <h1 className="fw-bold text-dark mt-3">¿Quiénes somos?</h1>
        <div 
          style={{ width: '50px', height: '3px', backgroundColor: '#198754' }} 
          className="mx-auto mt-2 rounded"
        ></div>
        <p className="text-muted mt-3 mx-auto col-md-8 fs-5">
          <strong>Admin-SENA</strong> es la plataforma de gestión académica y técnica desarrollada para centralizar, controlar y optimizar la administración de ambientes de formación, programas, instructores y aprendices del SENA Regional Cauca.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="row g-4 mb-5">
        {/* Misión */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
            <div className="card-body">
              <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-3 p-3 mb-3">
                <i className="bi bi-bullseye fs-3"></i>
              </div>
              <h3 className="fw-bold text-dark mb-3">Nuestra Misión</h3>
              <p className="text-secondary leading-relaxed mb-0">
                Proporcionar una herramienta digital centralizada e intuitiva que facilite el registro, la supervisión operativa y el seguimiento formativo, optimizando los recursos técnicos y la labor de instructores y coordinadores.
              </p>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
            <div className="card-body">
              <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-3 p-3 mb-3">
                <i className="bi bi-eye-fill fs-3"></i>
              </div>
              <h3 className="fw-bold text-dark mb-3">Nuestra Visión</h3>
              <p className="text-secondary leading-relaxed mb-0">
                Consolidarse como la plataforma modelo de trazabilidad y gestión formativa digital para centros de formación profesional integral, impulsando la modernización institucional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pilares / Características */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100 text-center">
            <div className="text-success mb-2">
              <i className="bi bi-shield-check fs-2"></i>
            </div>
            <h5 className="fw-bold text-dark">Control y Seguridad</h5>
            <p className="text-muted small mb-0">
              Administración segura de datos de aprendices, instructores y asignación de equipos.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100 text-center">
            <div className="text-success mb-2">
              <i className="bi bi-speedometer2 fs-2"></i>
            </div>
            <h5 className="fw-bold text-dark">Eficiencia Operativa</h5>
            <p className="text-muted small mb-0">
              Agilidad en la consulta, registro y edición de cursos, áreas y centros de formación.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm border-0 h-100 text-center">
            <div className="text-success mb-2">
              <i className="bi bi-laptop fs-2"></i>
            </div>
            <h5 className="fw-bold text-dark">Trazabilidad Técnica</h5>
            <p className="text-muted small mb-0">
              Monitoreo constante del estado y disponibilidad de los recursos de cómputo.
            </p>
          </div>
        </div>
      </div>

      {/* Botón Volver al Inicio */}
      <div className="text-center">
        <Link to="/" className="btn btn-success px-4 py-2 fw-bold rounded-pill shadow-sm">
          <i className="bi bi-arrow-left me-2"></i> Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;