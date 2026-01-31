import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  // Estados del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    setError(''); // Limpiar error al escribir
  };

  // Alternar visibilidad de contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Manejar login con Google
  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulación de autenticación con Google
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login con Google intentado');
      // Aquí iría la integración real con Firebase Auth o similar
    }, 1000);
  };

  // Manejar submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulación de API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En producción, aquí iría la llamada real a tu API
      const mockUser = {
        id: '123',
        name: 'Usuario Demo',
        email: formData.email,
        token: 'mock-jwt-token'
      };

      // Guardar en localStorage si "Recordar cuenta" está activado
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        sessionStorage.setItem('user', JSON.stringify(mockUser));
      }

      // Redirigir al dashboard
      navigate('/dashboard');
      
    } catch (err) {
      setError('Credenciales incorrectas. Por favor verifica tus datos.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <i className="fas fa-tools"></i>
            <span>AlquilaPro</span>
          </Link>
          <div className="nav-links">
            <Link to="/search">
              <i className="fas fa-search"></i> Buscar Herramientas
            </Link>
            <div className="nav-auth">
              <Link to="/login" className="btn-login active">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="btn-register">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="login-page">
        <div className="container">
          <div className="login-container">
            <div className="login-card">
              {/* Logo y Título */}
              <div className="login-header">
                <h2>Iniciar Sesión</h2>
              </div>

              {/* Mensaje de error */}
              {error && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {error}
                </div>
              )}

              {/* Formulario */}
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Tu contraseña"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={togglePasswordVisibility}
                      disabled={isLoading}
                    >
                      <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      disabled={isLoading}
                    />
                    <span>Recordar mi cuenta</span>
                  </label>
                  <Link to="/forgot-password" className="forgot-password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>

                <div className="divider">
                  <span>o</span>
                </div>

                <button
                  type="button"
                  className="google-btn"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <i className="fab fa-google"></i>
                  Continuar con Google
                </button>
              </form>

              {/* Footer del Formulario */}
              <div className="login-footer">
                <p>
                  ¿No tienes una cuenta?{' '}
                  <Link to="/register">Crear cuenta</Link>
                </p>
                <p className="terms">
                  Al continuar, aceptas nuestros{' '}
                  <Link to="/terms">Términos</Link> y{' '}
                  <Link to="/privacy">Privacidad</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <i className="fas fa-tools"></i> AlquilaPro
            </div>
            <div className="footer-links">
              <Link to="/how-it-works">Cómo funciona</Link>
              <Link to="/help">Ayuda</Link>
              <Link to="/contact">Contacto</Link>
              <Link to="/terms">Términos</Link>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} AlquilaPro. Herramientas profesionales, alquiler sencillo.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;