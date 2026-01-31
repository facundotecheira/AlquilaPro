import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  // Estados del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'renter', // 'renter', 'owner', 'both'
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    level: 'baja',
    requirements: {
      length: false,
      uppercase: false,
      number: false,
      special: false,
    }
  });

  // Evaluar fortaleza de la contraseña
  useEffect(() => {
    if (!formData.password) {
      setPasswordStrength({
        score: 0,
        level: 'baja',
        requirements: {
          length: false,
          uppercase: false,
          number: false,
          special: false,
        }
      });
      return;
    }

    let score = 0;
    const requirements = {
      length: formData.password.length >= 8,
      uppercase: /[A-Z]/.test(formData.password),
      number: /\d/.test(formData.password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password),
    };

    // Calcular score
    Object.values(requirements).forEach(met => {
      if (met) score += 25;
    });

    // Determinar nivel
    let level = 'baja';
    if (score >= 75) level = 'alta';
    else if (score >= 50) level = 'media';
    else if (score >= 25) level = 'baja';

    setPasswordStrength({
      score,
      level,
      requirements
    });
  }, [formData.password]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Limpiar error específico al escribir
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  // Manejar cambio de tipo de usuario
  const handleUserTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      userType: type
    }));
  };

  // Alternar visibilidad de contraseñas
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Validaciones
  const validateForm = () => {
    const newErrors = {};
    
    // Validaciones básicas
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es obligatorio';
    if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es obligatorio';
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    if (!acceptTerms) {
      newErrors.terms = 'Debes aceptar los términos y condiciones';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar registro con redes sociales
  const handleSocialRegister = (provider) => {
    setIsLoading(true);
    console.log(`Registro con ${provider}`);
    // Aquí integrarías con Firebase Auth, Auth0, etc.
    setTimeout(() => {
      setIsLoading(false);
      // Redirigir después del registro social
      navigate('/dashboard');
    }, 1500);
  };

  // Manejar submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulación de API call para registro
      
      const { firstName,lastName, email, password } = formData;

      const ownerEntity = {
        OwnerID: 0,
        Name: firstName + lastName,
        Email: email,
        Password: password,
        Verified: false,
        Avatar: ""
      }

      const resultado = await axios.post('http://192.168.100.5:7292/api/Owners',ownerEntity);   
      console.log(resultado)
      
      // // Aquí iría la llamada real a tu API
      // const mockResponse = {
      //   success: true,
      //   user: {
      //     id: 'new-user-123',
      //     ...userData,
      //     verified: false,
      //     createdAt: new Date().toISOString()
      //   },
      //   token: 'mock-jwt-token-new'
      // };
      
      // // Guardar token y datos del usuario
      // localStorage.setItem('authToken', mockResponse.token);
      // localStorage.setItem('user', JSON.stringify(mockResponse.user));
      
      // // Redirigir a la página de verificación o dashboard
      // navigate('/verify-email', { 
      //   state: { email: formData.email } 
      // });
      
    } catch (err) {
      console.error('Error en registro:', err);
      setErrors({
        general: 'Hubo un error al crear tu cuenta. Por favor intenta de nuevo.'
      });
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
              <Link to="/login" className="btn-login">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="btn-register active">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="register-page">
        <div className="container">
          <div className="register-container">
            <div className="register-card">
              {/* Header */}
              <div className="register-header">
                <h2>Crea tu cuenta</h2>
                <p>Comienza a alquilar o ganar dinero con tus herramientas</p>
              </div>

              {/* Pasos del registro */}
              <div className="register-steps">
                <div className="step active">
                  <div className="step-number">1</div>
                  <span>Información personal</span>
                </div>
                <div className="step-line"></div>
                <div className="step">
                  <div className="step-number">2</div>
                  <span>Verificación</span>
                </div>
              </div>

              {/* Error general */}
              {errors.general && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.general}
                </div>
              )}

              {/* Formulario */}
              <form className="register-form" onSubmit={handleSubmit}>
                {/* Información Personal */}
                <div className="form-section">                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">Nombre</label>
                      <div className="input-with-icon">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          disabled={isLoading}
                          className={errors.firstName ? 'error' : ''}
                        />
                      </div>
                      {errors.firstName && (
                        <div className="input-error">{errors.firstName}</div>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName">Apellido</label>
                      <div className="input-with-icon">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Tu apellido"
                          required
                          disabled={isLoading}
                          className={errors.lastName ? 'error' : ''}
                        />
                      </div>
                      {errors.lastName && (
                        <div className="input-error">{errors.lastName}</div>
                      )}
                    </div>
                  </div>

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
                        className={errors.email ? 'error' : ''}
                      />
                    </div>
                    {errors.email && (
                      <div className="input-error">{errors.email}</div>
                    )}
                  </div>
                </div>

                {/* Contraseña */}
                <div className="form-section">                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="password">Contraseña</label>
                      <div className="input-with-icon">
                        <i className="fas fa-lock"></i>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Crea una contraseña"
                          required
                          minLength="8"
                          disabled={isLoading}
                          className={errors.password ? 'error' : ''}
                        />
                        <button
                          type="button"
                          className="toggle-password"
                          onClick={() => togglePasswordVisibility('password')}
                          disabled={isLoading}
                        >
                          <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                        </button>
                      </div>
                      {errors.password && (
                        <div className="input-error">{errors.password}</div>
                      )}
                      
                      {/* Fortaleza de contraseña */}
                      <div className="password-strength">
                        <div className="strength-bar">
                          <div 
                            className="strength-fill"
                            style={{
                              width: `${passwordStrength.score}%`,
                              backgroundColor: 
                                passwordStrength.score >= 75 ? 'var(--success)' :
                                passwordStrength.score >= 50 ? 'var(--warning)' : 'var(--danger)'
                            }}
                          ></div>
                        </div>
                        <span className="strength-text">
                          Seguridad: {passwordStrength.level}
                        </span>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirmar contraseña</label>
                      <div className="input-with-icon">
                        <i className="fas fa-lock"></i>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Repite tu contraseña"
                          required
                          disabled={isLoading}
                          className={errors.confirmPassword ? 'error' : ''}
                        />
                        <button
                          type="button"
                          className="toggle-password"
                          onClick={() => togglePasswordVisibility('confirm')}
                          disabled={isLoading}
                        >
                          <i className={`fas fa-eye${showConfirmPassword ? '-slash' : ''}`}></i>
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <div className="input-error">{errors.confirmPassword}</div>
                      )}
                    </div>
                  </div>

                  {/* Requisitos de contraseña */}
                  <div className="password-requirements">
                    <p className="requirements-title">Tu contraseña debe incluir:</p>
                    <ul className="requirements-list">
                      <li className={`requirement ${passwordStrength.requirements.length ? 'valid' : ''}`}>
                        <i className="fas fa-circle"></i>
                        <span>Al menos 8 caracteres</span>
                      </li>
                      <li className={`requirement ${passwordStrength.requirements.uppercase ? 'valid' : ''}`}>
                        <i className="fas fa-circle"></i>
                        <span>Una letra mayúscula</span>
                      </li>
                      <li className={`requirement ${passwordStrength.requirements.number ? 'valid' : ''}`}>
                        <i className="fas fa-circle"></i>
                        <span>Un número</span>
                      </li>
                      <li className={`requirement ${passwordStrength.requirements.special ? 'valid' : ''}`}>
                        <i className="fas fa-circle"></i>
                        <span>Un carácter especial</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Términos y condiciones */}
                <div className="form-section">
                  <div className="terms-agreement">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        required
                        disabled={isLoading}
                      />
                      <span className="checkmark"></span>
                      <span className="terms-text">
                        Acepto los{' '}
                        <Link to="/terms" target="_blank">
                          Términos de Servicio
                        </Link>{' '}
                        y{' '}
                        <Link to="/privacy" target="_blank">
                          Política de Privacidad
                        </Link>{' '}
                        de AlquilaPro
                      </span>
                    </label>
                    {errors.terms && (
                      <div className="input-error">{errors.terms}</div>
                    )}
                  </div>
                </div>

                {/* Botón de registro */}
                <button
                  type="submit"
                  className={`register-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
                </button>

                <div className="divider">
                  <span>o regístrate con</span>
                </div>

                {/* Registro social */}
                <div className="social-register">
                  <button
                    type="button"
                    className="social-btn google-btn"
                    onClick={() => handleSocialRegister('google')}
                    disabled={isLoading}
                  >
                    <i className="fab fa-google"></i>
                    Google
                  </button>
                  <button
                    type="button"
                    className="social-btn facebook-btn"
                    onClick={() => handleSocialRegister('facebook')}
                    disabled={isLoading}
                  >
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="register-footer">
                <p>
                  ¿Ya tienes una cuenta?{' '}
                  <Link to="/login">Inicia sesión aquí</Link>
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

export default Register;