import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

function Search() {
    // Estado para filtros y resultados
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [toolsBD, setToolsBD] = useState([{
  "toolID": 0,
  "name": "string",
  "descripcion": "string",
  "price": 0,
  "category": "string",
  "location": "string",
  "raiting": 0,
  "reviews": 0,
  "image": "string",
  "available": true,
  "ownerID": 0
}]);
    const [sortBy, setSortBy] = useState('relevancia');
    
    useEffect (()=> {
      const fetchTools = async () => {
            try {
                const {data} = await axios.get('http://192.168.100.5:7292/api/Tools');  // Ajusta la URL si es diferente
                console.log(data)
                setToolsBD(data)
            } catch (err) {
   
            } finally {

            }
        };

        fetchTools();
    },[])

    // Datos de ejemplo para las herramientas
    const tools = [
        {
            id: 1,
            name: "Taladro Percutor 18V",
            description: "Taladro percutor Bosch profesional con 2 baterías y cargador. Ideal para trabajos en madera, metal y concreto.",
            price: 12,
            category: "eléctricas",
            location: "Providencia",
            rating: 4.8,
            reviews: 24,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            owner: {
                name: "Juan Pérez",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                verified: true
            },
            available: true
        },
        {
            id: 2,
            name: "Cortadora de Césped Eléctrica",
            description: "Cortadora eléctrica Black+Decker, ancho de corte 40cm. Incluye bolsa recolectora.",
            price: 25,
            category: "jardinería",
            location: "Las Condes",
            rating: 4.9,
            reviews: 31,
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            owner: {
                name: "María González",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                verified: true
            },
            available: true
        },
        {
            id: 3,
            name: "Set Completo de Herramientas",
            description: "Set de 65 piezas Stanley: destornilladores, llaves, alicates, martillo, nivel, cinta métrica y más.",
            price: 18,
            category: "manuales",
            location: "Ñuñoa",
            rating: 4.7,
            reviews: 18,
            image: "https://images.unsplash.com/photo-1504148455328-356e5f5f8f57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            owner: {
                name: "Carlos López",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                verified: true
            },
            available: true
        },
        {
            id: 4,
            name: "Andamio de 2.5m",
            description: "Andamio metálico plegable, altura máxima 2.5m. Incluye ruedas con freno. Ideal para pintura o trabajos en altura.",
            price: 35,
            category: "construcción",
            location: "La Reina",
            rating: 4.5,
            reviews: 12,
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            owner: {
                name: "Roberto Silva",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                verified: true
            },
            available: false
        },
        {
            id: 5,
            name: "Sierra Circular Profesional",
            description: "Sierra circular DeWalt 1800W, corte máximo 65mm. Incluye hoja de carburo y maletín.",
            price: 22,
            category: "eléctricas",
            location: "Vitacura",
            rating: 4.9,
            reviews: 42,
            image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2406?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            owner: {
                name: "Ana Torres",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                verified: true
            },
            available: true
        },
        {
            id: 6,
            name: "Aspiradora Industrial 30L",
            description: "Aspiradora industrial para obras, capacidad 30L, potencia 2000W. Incluye kit de accesorios.",
            price: 28,
            category: "limpieza",
            location: "Macul",
            rating: 4.6,
            reviews: 15,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            owner: {
                name: "Luis Martínez",
                avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                verified: true
            },
            available: true
        }
    ];

    // Categorías disponibles
    const categories = [
        { id: 'todas', name: 'Todas las categorías' },
        { id: 'electricas', name: 'Herramientas Eléctricas' },
        { id: 'manuales', name: 'Herramientas Manuales' },
        { id: 'jardineria', name: 'Jardinería' },
        { id: 'construccion', name: 'Construcción' },
        { id: 'pintura', name: 'Pintura' },
        { id: 'limpieza', name: 'Limpieza' },
        { id: 'otros', name: 'Otros' }
    ];

    // Filtros rápidos
    const quickFilters = [
        { id: 'disponible-hoy', label: 'Disponible hoy' },
        { id: 'menos-10', label: 'Menos de $10/día' },
        { id: 'mejor-calificadas', label: 'Mejor calificadas' },
        { id: 'nuevas', label: 'Herramientas nuevas' },
        { id: 'entrega-gratis', label: 'Entrega gratis' }
    ];

    // Ordenar opciones
    const sortOptions = [
        { value: 'relevancia', label: 'Más relevantes' },
        { value: 'precio-bajo', label: 'Precio más bajo' },
        { value: 'precio-alto', label: 'Precio más alto' },
        { value: 'mejor-calificadas', label: 'Mejor calificadas' },
        { value: 'mas-cercanas', label: 'Más cercanas' }
    ];

    // Manejar búsqueda
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando:', { searchTerm, location, selectedCategory });
        // Aquí iría la lógica de búsqueda real
    };

    return (
        <>
        <NavBar/>
        <div className="search-page">
            {/* Header de búsqueda */}
            <div className="search-header">
                <div className="container">
                    <h1>Encuentra la herramienta perfecta</h1>
                    <p className="search-subtitle">Alquila entre miles de herramientas disponibles cerca de ti</p>
                    
                    {/* Formulario de búsqueda */}
                    <form className="search-form" onSubmit={handleSearch}>
                        <div className="search-inputs">
                            <div className="input-group">
                                <i className="fas fa-search"></i>
                                <input
                                    type="text"
                                    placeholder="¿Qué herramienta necesitas? Ej: taladro, cortadora de césped..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            
                            <div className="input-group">
                                <i className="fas fa-map-marker-alt"></i>
                                <input
                                    type="text"
                                    placeholder="Ubicación (barrio, comuna, ciudad)"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            
                            <div className="input-group">
                                <i className="fas fa-tag"></i>
                                <select 
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <button type="submit" className="search-btn">
                                <i className="fas fa-search"></i> Buscar
                            </button>
                        </div>
                    </form>

                    {/* Filtros rápidos */}
                    <div className="quick-filters">
                        <h3>Filtrar por:</h3>
                        <div className="filter-tags">
                            <button className="filter-tag active">Todas</button>
                            {quickFilters.map(filter => (
                                <button 
                                    key={filter.id} 
                                    className="filter-tag"
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <div className="search-results">
                <div className="container">
                    {/* Header de resultados */}
                    <div className="results-header">
                        <div className="results-info">
                            <h2>{tools.length} herramientas disponibles</h2>
                            <p className="results-subtitle">Encuentra lo que necesitas para tu proyecto</p>
                        </div>
                        
                        <div className="sort-options">
                            <label htmlFor="sort">Ordenar por:</label>
                            <select 
                                id="sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Grid de herramientas */}
                    <div className="tools-grid">
                        
                        {toolsBD.map(tool => (
                            <div key={tool.toolID} className="tool-card">
                                <div className="tool-image">
                                    <img src={tool.image} alt={tool.name} />
                                    <div className={`tool-category ${tool.category}`}>
                                        {tool.category}
                                    </div>
                                    {!tool.available && (
                                        <div className="tool-unavailable">
                                            No disponible
                                        </div>
                                    )}
                                </div>
                                
                                <div className="tool-info">
                                    <h3>{tool.name}</h3>
                                    <p className="tool-description">{tool.descripcion}</p>
                                    
                                    <div className="tool-meta">
                                        <div className="tool-price">
                                            ${tool.price} <span>/día</span>
                                        </div>
                                        <div className="tool-location">
                                            <i className="fas fa-map-marker-alt"></i> {tool.location}
                                        </div>
                                    </div>
                                    
                                    <div className="tool-owner">
                                        <img src={tool.image} alt={tool.name} />
                                        <div className="owner-info">
                                            <span className="owner-name">{tool.name}</span>
                                            <div className="owner-rating">
                                                <i className="fas fa-star"></i> {tool.raiting} ({tool.reviews})
                                                {tool.available && (
                                                    <span className="verified-badge">
                                                        <i className="fas fa-check-circle"></i> Verificado
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        to={`/tool/${tool.toolID}`} 
                                        className={`view-details-btn ${!tool.available ? 'disabled' : ''}`}
                                    >
                                        {tool.available ? 'Ver Detalles' : 'No Disponible'}
                                    </Link>
                                </div>
                            </div>
                        ))}
                        
                        {tools.map(tool => (
                            <div key={tool.id} className="tool-card">
                                <div className="tool-image">
                                    <img src={tool.image} alt={tool.name} />
                                    <div className={`tool-category ${tool.category}`}>
                                        {tool.category}
                                    </div>
                                    {!tool.available && (
                                        <div className="tool-unavailable">
                                            No disponible
                                        </div>
                                    )}
                                </div>
                                
                                <div className="tool-info">
                                    <h3>{tool.name}</h3>
                                    <p className="tool-description">{tool.description}</p>
                                    
                                    <div className="tool-meta">
                                        <div className="tool-price">
                                            ${tool.price} <span>/día</span>
                                        </div>
                                        <div className="tool-location">
                                            <i className="fas fa-map-marker-alt"></i> {tool.location}
                                        </div>
                                    </div>
                                    
                                    <div className="tool-owner">
                                        <img src={tool.owner.avatar} alt={tool.owner.name} />
                                        <div className="owner-info">
                                            <span className="owner-name">{tool.owner.name}</span>
                                            <div className="owner-rating">
                                                <i className="fas fa-star"></i> {tool.rating} ({tool.reviews})
                                                {tool.owner.verified && (
                                                    <span className="verified-badge">
                                                        <i className="fas fa-check-circle"></i> Verificado
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        to={`/tool/${tool.id}`} 
                                        className={`view-details-btn ${!tool.available ? 'disabled' : ''}`}
                                    >
                                        {tool.available ? 'Ver Detalles' : 'No Disponible'}
                                    </Link>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    {/* Paginación */}
                    <div className="pagination">
                        <button className="page-btn disabled">
                            <i className="fas fa-chevron-left"></i> Anterior
                        </button>
                        
                        <div className="page-numbers">
                            <button className="page-number active">1</button>
                            <button className="page-number">2</button>
                            <button className="page-number">3</button>
                            <button className="page-number">4</button>
                            <span className="page-dots">...</span>
                            <button className="page-number">10</button>
                        </div>
                        
                        <button className="page-btn">
                            Siguiente <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    {/* CTA para publicar */}
                    <div className="search-cta">
                        <div className="cta-content">
                            <h3>¿No encuentras lo que buscas?</h3>
                            <p>Publica lo que necesitas y recibe ofertas de propietarios cerca de ti</p>
                            <Link to="/post-request" className="cta-btn">
                                <i className="fas fa-bullhorn"></i> Publicar Solicitud
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>

    );
}

export default Search;