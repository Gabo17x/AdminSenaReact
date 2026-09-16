import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.get('/sanctum/csrf-cookie');
      const response = await api.post('/login', { email, password });
      const { token, user } = response.data;
      
      login(user, token);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Credenciales incorrectas');
      } else {
        setError('Error de conexión con el servidor');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-5 col-lg-4">
        <div className="card shadow-sm border-0 rounded-4 p-4">
          <div className="card-body">
            <div className="text-center mb-4">
              <h3 className="fw-bold text-dark">Iniciar Sesión</h3>
              <p className="text-muted small">AdminSENA - Panel de Control</p>
            </div>

            {error && (
              <div className="alert alert-danger py-2 small" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label text-secondary fw-semibold">
                  Correo Institucional
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ejemplo@sena.edu.co"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary fw-semibold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 fw-bold rounded-pill py-2 mt-2"
                disabled={loading}
              >
                {loading ? 'Ingresando...' : 'Iniciar Sesión'}
              </button>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted small">¿No tienes cuenta? </span>
              <Link to="/register" className="text-success fw-bold text-decoration-none small">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;