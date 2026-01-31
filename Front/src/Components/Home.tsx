import NavBar from "./NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Alquila herramientas. Gana dinero. <span className="hero-highlight">Comparte recursos.</span></h1>
                        <p>Conectamos a personas que necesitan herramientas con quienes las tienen disponibles. Ahorra dinero y gana ingresos extra.</p>
                        <div className="hero-buttons">
                            <a href="search" className="hero-btn hero-btn-primary">
                                <i className="fas fa-search"></i> Encontrar Herramientas
                            </a>
                            <a href="post-tool.html" className="hero-btn hero-btn-secondary">
                                <i className="fas fa-plus"></i> Publicar una Herramienta
                            </a>
                        </div>
                    </div>
                    <div className="hero-demo">
                        {/* <span className="demo-badge">¡Disponible!</span> */}
                        <div className="demo-card">
                            <img src="https://images.unsplash.com/photo-1540104539488-92a51bbc0410?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Taladro"
                                className="demo-card-image" />
                            <div className="demo-card-content">
                                <h3 className="demo-card-title">Taladro Percutor Profesional</h3>
                                <div className="demo-card-price">$12 <span>/día</span></div>
                                <div className="demo-card-location">
                                    <i className="fas fa-map-marker-alt"></i> Providencia, Santiago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2 className="section-title">¿Cómo funciona?</h2>
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-icon">1</div>
                        <h3>Publica o Busca</h3>
                        <p>Registra tus herramientas para alquilar o encuentra lo que necesitas cerca de ti.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">2</div>
                        <h3>Conecta</h3>
                        <p>Contacta al dueño o arrendatario a través de nuestra plataforma segura.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">3</div>
                        <h3>Alquila y Gana</h3>
                        <p>Coordina la entrega, usa la herramienta y gana dinero extra o ahorra.</p>
                    </div>
                </div>
            </section>


            <section className="categories">
                <h2 className="section-title">Categorías Populares</h2>
                <div className="categories-grid">
                    <a href="search.html?category=electricas" className="category-card">
                        <i className="fas fa-bolt"></i>
                        <span>Herramientas Eléctricas</span>
                        {/* <span className="category-count">234</span> */}
                    </a>

                    <a href="search.html?category=jardin" className="category-card">
                        <i className="fas fa-leaf"></i>
                        <span>Jardinería</span>
                    </a>
                    <a href="search.html?category=manuales" className="category-card">
                        <i className="fas fa-hammer"></i>
                        <span>Herramientas Manuales</span>
                    </a>
                    <a href="search.html?category=construccion" className="category-card">
                        <i className="fas fa-hard-hat"></i>
                        <span>Construcción</span>
                    </a>
                </div>
            </section>


            <section className="cta-section">
                <div className="cta-content">
                    <h2>¿Listo para empezar?</h2>
                    <p>Únete a nuestra comunidad de más de 1,000 usuarios que ya están ahorrando y ganando dinero.</p>
                    <div className="cta-buttons">
                        <a href="register.html" className="cta-btn cta-btn-primary">
                            <i className="fas fa-rocket"></i> Comenzar Gratis
                        </a>
                        <a href="how-it-works.html" className="cta-btn cta-btn-secondary">
                            <i className="fas fa-play-circle"></i> Ver Video Tutorial
                        </a>
                    </div>
                </div>
            </section>


            <footer className="footer">
    <div className="container">
        <div className="footer-content">
            <div className="footer-brand">
                <div className="footer-logo">
                    <i className="fas fa-tools"></i>
                    <span>AlquilaPro</span>
                </div>
                <p className="footer-description">
                    La plataforma líder para alquilar herramientas profesionales. 
                    Conectamos herramientas con proyectos desde 2023.
                </p>
                <div className="footer-social">
                    <a href="#" className="social-link" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <h3 className="footer-title">Plataforma</h3>
                <ul className="footer-links">
                    <li><a href="/search">Buscar Herramientas</a></li>
                    <li><a href="/post-tool">Publicar Herramienta</a></li>
                    <li><a href="/how-it-works">Cómo funciona</a></li>
                    <li><a href="/categories">Categorías</a></li>
                    <li><a href="/blog">Blog & Consejos</a></li>
                </ul>
            </div>


            <div className="footer-section">
                <h3 className="footer-title">Para Arrendadores</h3>
                <ul className="footer-links">
                    <li><a href="/earn-money">Cómo ganar dinero</a></li>
                    <li><a href="/safety">Seguridad y Protección</a></li>
                    <li><a href="/pricing">Precios y Comisiones</a></li>
                    <li><a href="/tips">Consejos para éxito</a></li>
                    <li><a href="/tools-management">Gestión de Herramientas</a></li>
                </ul>
            </div>


            <div className="footer-section">
                <h3 className="footer-title">Soporte & Legal</h3>
                <ul className="footer-links">
                    <li><a href="/help">Centro de Ayuda</a></li>
                    <li><a href="/contact">Contacto</a></li>
                    <li><a href="/terms">Términos de Servicio</a></li>
                    <li><a href="/privacy">Política de Privacidad</a></li>
                    <li><a href="/cookies">Política de Cookies</a></li>
                </ul>
            </div>


            <div className="footer-section">
                <h3 className="footer-title">Mantente Informado</h3>
                <p className="newsletter-text">
                    Suscríbete para recibir tips y ofertas exclusivas.
                </p>
                <form className="newsletter-form">
                    <div className="input-group">
                        <input type="email" placeholder="Tu email" required/>
                        <button type="submit" className="newsletter-btn">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <p className="newsletter-note">
                        Solo enviaremos contenido relevante. Puedes darte de baja cuando quieras.
                    </p>
                </form>
            </div>
        </div>


        <div className="footer-divider"></div>

   
        <div className="footer-bottom">
            <div className="footer-copyright">
                &copy; 2023 AlquilaPro. Todos los derechos reservados.
            </div>
            <div className="footer-legal">
                <a href="/sitemap">Mapa del sitio</a>
                <span className="separator">•</span>
                <a href="/accessibility">Accesibilidad</a>
                <span className="separator">•</span>
                <a href="/responsible-use">Uso responsable</a>
            </div>
            <div className="footer-badges">
                <span className="badge secure-badge">
                    <i className="fas fa-shield-alt"></i> Sitio Seguro
                </span>
                <span className="badge ssl-badge">
                    <i className="fas fa-lock"></i> SSL Encriptado
                </span>
            </div>
        </div>
    </div>
</footer>

        </>
    )
}