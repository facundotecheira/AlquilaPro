import React, { useState } from 'react';

import { Link } from 'react-router-dom'; // Si usas React Router
function NavBar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Cambia según autenticación


    return (
        <>

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

                        {isLoggedIn ? (
                            <>
                                <Link to="/post-tool" className="btn-primary-action">
                                    <i className="fas fa-plus"></i> Publicar Herramienta
                                </Link>

                                <div className="user-menu">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                        alt="Usuario"
                                        className="user-avatar"
                                    />
                                    <div className="user-dropdown">
                                        <Link to="/dashboard">
                                            <i className="fas fa-user-circle"></i> Mi Perfil
                                        </Link>
                                        <Link to="/my-tools">
                                            <i className="fas fa-tools"></i> Mis Herramientas
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <a href="/logout" className="logout">
                                            <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="nav-auth">
                                <Link to="/login" className="btn-login">
                                    Iniciar Sesión
                                </Link>
                                <Link to="/register" className="btn-register">
                                    Registrarse
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar