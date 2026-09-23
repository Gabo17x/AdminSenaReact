import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    try {
      setLoading(true);
      await login({
        email: email.trim(),
        password,
        remember,
      });
      navigate('/');
    } catch (err) {
      const apiError = err?.response?.data?.message || err?.response?.data?.error || 'Credenciales incorrectas. Inténtalo de nuevo.';
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Contenedor wrapper que centra en el 100% del alto de la pantalla */
    <div className="d-flex align-items-center justify-content-center min-vh-100 p-3">
      <div className="container p-0" style={{ maxWidth: '900px' }}>
        <div className="login-card bg-white border border-success-subtle rounded-5 shadow-lg overflow-hidden">
          <div className="row g-0">

            {/* Columna Izquierda */}
            <div className="col-lg-5 p-5 text-white d-flex flex-column justify-content-between" style={{ backgroundColor: '#00324D' }}>
              <div>
                <Link to="/" className="d-inline-flex align-items-center gap-2 text-white mb-4 text-decoration-none">
                  <img src="/images/logoSena.png" alt="Logo SENA" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                  <span className="fs-4 fw-black">Admin<span style={{ color: '#84cc16' }}>SENA</span></span>
                </Link>
                <h2 className="fs-3 fw-bold mt-2">¡Bienvenido! Acceso al sistema</h2>
                <p className="text-white-50 small mt-2">Plataforma centralizada para la gestión académica, control de ambientes y asignación de recursos formativos.</p>
              </div>
              <div className="pt-4 border-top border-secondary">
                <span className="d-block text-white-50 small" style={{ fontSize: '0.75rem' }}>Regional Cauca • ADSO</span>
              </div>
            </div>

            {/* Columna Derecha (Formulario) */}
            <div className="col-lg-7 p-4 p-md-5">
              <div className="mb-4">
                <h3 className="fw-bold" style={{ color: '#00324D' }}>Iniciar Sesión</h3>
                <p className="text-secondary small">Ingresa tus credenciales institucionales</p>
              </div>

              {error && (
                <div className="alert alert-danger rounded-4 py-2 px-3 small mb-4" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-1"></i> {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label small fw-bold text-secondary">Correo Institucional</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 rounded-start-pill text-secondary ps-3">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="form-control bg-light border-start-0 rounded-end-pill py-2"
                      placeholder="ejemplo@soy.sena.edu.co"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label small fw-bold text-secondary">Contraseña</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 rounded-start-pill text-secondary ps-3">
                      <i className="bi bi-lock-fill"></i>
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="form-control bg-light border-start-0 border-end-0 py-2"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="input-group-text bg-light border-start-0 border-top border-bottom rounded-end-pill pe-3 text-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label className="form-check-label small text-secondary" htmlFor="remember">Recordarme</label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-700 underline rounded-md focus:outline-none">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill py-2 fw-bold mb-3"
                  style={{ backgroundColor: '#39A900', border: 'none' }}
                  disabled={loading}
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>

                <div className="text-center">
                  <span className="small text-secondary">¿No tienes una cuenta? </span>
                  <Link to="/register" className="small fw-bold text-decoration-none" style={{ color: '#39A900' }}>
                    Regístrate aquí
                  </Link>
                </div>

              <div className="flex items-center justify-between mt-4 mb-4">
                <Link
                  to="/"
                  className="small text-secondary text-decoration-none">
                  <i className="bi bi-arrow-left me-1"></i> Volver a inicio
                </Link>
              </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}