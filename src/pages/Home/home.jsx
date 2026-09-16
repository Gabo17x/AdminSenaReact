function Home() {
    return (
        <div className="container-xl px-4" style={{ maxWidth: '1200px' }}>

            {/* Hero Banner */}
            <div className="position-relative px-2 px-md-5 mb-5">
                <section className="hero-card p-4 p-md-5">
                    <div className="row align-items-center g-4">

                        <div className="col-lg-6">
                            <span
                                className="badge rounded-pill px-3 py-1 mb-3"
                                style={{ background: '#ecfdf5', color: '#39A900', border: '1px solid #a7f3d0', fontSize: '0.75rem', fontWeight: 700 }}
                            >
                                ADSO
                            </span>

                            <h1 className="mb-3" style={{ fontWeight: 900, color: '#00324D', fontSize: 'calc(1.6rem + 1.2vw)', lineHeight: 1.15 }}>
                                Administra Ambientes y Equipos Fácilmente
                            </h1>

                            <p className="text-secondary mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                                La plataforma centralizada para la asignación y seguimiento de hardware, control de ambientes formativos y fichas académicas del centro de formación.
                            </p>

                            <a href="#pilares" className="btn-sena-pill" style={{ fontSize: '0.82rem', padding: '0.65rem 1.6rem' }}>
                                Explorar Módulos
                            </a>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="rounded-4 overflow-hidden shadow-sm d-flex align-items-center justify-content-center"
                                style={{ height: '320px', background: '#e2e8f0' }}
                            >
                                <span className="text-secondary small">Imagen / Carrusel aquí</span>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* ¿Qué es AdminSENA? */}
            <section className="row align-items-center g-5 my-5 mx-auto" style={{ maxWidth: '980px' }}>
                <div className="col-lg-6">
                    <h2 className="mb-3" style={{ fontWeight: 900, color: '#00324D', fontSize: '1.8rem' }}>
                        ¿Qué es AdminSENA?
                    </h2>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                        Es una solución interactiva desarrollada para optimizar los procesos de gestión en el área académica y tecnológica. Permitimos a los coordinadores e instructores realizar un control riguroso de las herramientas de cómputo y el agendamiento físico del centro formativo.
                    </p>
                </div>
                <div className="col-lg-6">
                    <div
                        className="rounded-4 shadow-sm w-100"
                        style={{ height: '250px', background: '#e2e8f0' }}
                    ></div>
                </div>
            </section>

        </div>
    );
}

export default Home;