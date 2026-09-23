import { useState } from 'react';

// Datos de las diapositivas del carrusel y agregar imagenes 
const slides = [
  {
    badge: 'ADSO',
    title: 'Gestión Eficiente del Centro Formativo',
    description: 'La plataforma centralizada para la asignación y seguimiento de hardware, control de ambientes formativos y fichas académicas del centro de formación.',
    buttonText: 'Explorar Módulos',
    buttonLink: '#pilares',
    image: '/images/imagenes-one.jpeg',
  },
  {
    badge: 'ADSO',
    title: 'Gestión Eficiente del Centro Formativo',
    description: 'La plataforma centralizada para la asignación y seguimiento de hardware, control de ambientes formativos y fichas académicas del centro de formación.',
    buttonText: 'Explorar Módulos',
    buttonLink: '#pilares',
    image: '/images/imagenes dos.jpeg',
  },
  {
    badge: 'ADSO',
    title: 'Gestión Eficiente del Centro Formativo',
    description: 'La plataforma centralizada para la asignación y seguimiento de hardware, control de ambientes formativos y fichas académicas del centro de formación.',
    buttonText: 'Explorar Módulos',
    buttonLink: '#pilares',
    image: '/images/imagenes tres.JPG',
  },
  {
    badge: 'ADSO',
    title: 'Gestión Eficiente del Centro Formativo',
    description: 'La plataforma centralizada para la asignación y seguimiento de hardware, control de ambientes formativos y fichas académicas del centro de formación.',
    buttonText: 'Explorar Módulos',
    buttonLink: '#pilares',
    image: '/images/imagenes cinco.jpg',
  },

   {
    badge: 'ADSO',
    title: 'Gestión Eficiente del Centro Formativo',
    description: 'La plataforma centralizada para la asignación y seguimiento de hardware, control de ambientes formativos y fichas académicas del centro de formación.',
    buttonText: 'Explorar Módulos',
    buttonLink: '#pilares',
    image: '/images/imagenes seis.webp',
  }

];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentIndex];

  return (
    <div className="container-xl px-4" style={{ maxWidth: '1200px' }}>

      {/* Hero Banner con Carrusel Integrado */}
      <div className="position-relative px-2 px-md-5 mb-5">

        {/* Botón Izquierda, darle clic para cambiar img  */}
        <button
          onClick={prevSlide}
          className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y z-3 shadow-sm d-flex align-items-center justify-content-center"
          style={{ width: '42px', height: '42px', border: '1px solid #e2e8f0' }}
          type="button"
        >
          ❮
        </button>

        <section className="hero-card p-4 p-md-5 bg-white rounded-5 shadow-sm border-0">
          <div className="row align-items-center g-4">

            {/* Contenido Dinámico  */}
            <div className="col-lg-6">
              <span
                className="badge rounded-pill px-3 py-1 mb-3"
                style={{ background: '#ecfdf5', color: '#39A900', border: '1px solid #a7f3d0', fontSize: '0.75rem', fontWeight: 700 }}
              >
                {current.badge}
              </span>

              <h1 className="mb-3" style={{ fontWeight: 900, color: '#00324D', fontSize: 'calc(1.6rem + 1.2vw)', lineHeight: 1.15 }}>
                {current.title}
              </h1>

              <p className="text-secondary mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                {current.description}
              </p>

              <a href={current.buttonLink} className="btn-sena-pill" style={{ fontSize: '0.82rem', padding: '0.65rem 1.6rem' }}>
                {current.buttonText}
              </a>
            </div>

            {/* Imagen Dinámica */}
            <div className="col-lg-6">
              <img
                src={current.image}
                alt={current.title}
                className="rounded-4 shadow-sm w-100 object-fit-cover"
                style={{ height: '280px' }}
              />
            </div>

          </div>

          {/* Barra de Consulta Inferior */}
          <div className="border-top mt-4 pt-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-4">
              <div style={{ textAlign: "left" }}>
                <span className="text-uppercase text-muted fw-bold d-block" style={{ fontSize: '10px' }}>
                  ¿Qué buscas?
                </span>
                <span className="fw-semibold text-dark small">Ambientes, Fichas, Instructores...</span>
              </div>
              <div style={{ textAlign: "left", borderLeft: "1px solid #e2e8f0", paddingLeft: "1.25rem" }}>
                <span className="text-uppercase text-muted fw-bold d-block" style={{ fontSize: '11px' }}>
                  Estado Actual
                </span>
                <span className="fw-semibold text-dark small">Todos los módulos</span>
              </div>
            </div>
            <a href="#consultar" className="btn-sena-pill" style={{ fontSize: '0.8rem', padding: '0.4rem 1.2rem' }}>
              Consultar
            </a>
          </div>
        </section>

        {/* Botón Derecha */}
        <button
          onClick={nextSlide}
          className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y z-3 shadow-sm d-flex align-items-center justify-content-center"
          style={{ width: '42px', height: '42px', border: '1px solid #e2e8f0' }}
          type="button"
        >
          ❯
        </button>
      </div>

      {/* ¿Qué es AdminSENA? ------------------*/}
      <section
        className="my-5 mx-auto"
        style={{
          maxWidth: 980,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* Columna de texto */}
        <div style={{ flex: "1 1 380px", minWidth: 280, textAlign: "left" }}>
          <h2 className="mb-3" style={{ fontWeight: 900, color: "#00324D", fontSize: "1.8rem" }}>
            ¿Qué es AdminSENA?
          </h2>
          <p className="text-secondary mb-4" style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>
            Es una solución interactiva desarrollada para optimizar los procesos de gestión en el área académica y tecnológica. Permitimos a los coordinadores e instructores realizar un control riguroso de las herramientas de cómputo y el agendamiento físico del centro formativo.
          </p>
          <div className="d-flex align-items-center gap-3">
            <a href="/quienes-somos" className="btn-sena-pill" style={{ fontSize: "0.8rem" }}>
              Conocer más
            </a>
            <a href="#" className="text-secondary fw-bold ms-2 text-decoration-underline" style={{ fontSize: "0.8rem" }}>
              Ver manual de uso
            </a>
          </div>
        </div>

        {/* Columna de imagen */}
        <div style={{ flex: "1 1 380px", minWidth: 280 }}>
          <img
            src="/images/imagenes siete.jpg"
            alt="SENA"
            className="rounded-4 shadow-sm"
            style={{
              width: "100%",
              height: 250,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </section>

    </div>
  );
}

export default Home;