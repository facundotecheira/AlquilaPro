import { useState } from "react";
import NavBar from "./navbar";

export default function AddTool() {

    const [formData, setFormData] = useState({
        estado: "Excelente",
        titulo: "",
        precio: "",
        periodo: "Dia",
        ubicacion: "",
        disponibilidad: "Disponible hoy",
        tipoUsuario: "Particular",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        // acá después llamás al backend
    };
    return (
        <>
            <div className="containerGeneral">
                <NavBar />
                <div className="containerAdd">

                    <form onSubmit={handleSubmit} className="tool-form">
                        <div className="containerInfoAdd">
                            {/* Estado */}
                            <div className="section">

                             <label htmlFor="">Estado:</label>
                         
                                <select className="selects" name="estado" value={formData.estado} onChange={handleChange}>
                                    <option value="1">🟢 Excelente</option>
                                    <option value="2">🟡 Bueno</option>
                                    <option value="3">🟠 Regular</option>
                                </select>
                            
                            </div>

                            {/* Título */}
                            <label>
                                Título
                                <input
                                    type="text"
                                    name="titulo"
                                    placeholder="Amoladora Bosch 115mm"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            {/* Precio + período */}
                            <div className="row">
                                <label>
                                    Precio
                                    <input
                                        type="number"
                                        name="precio"
                                        placeholder="8000"
                                        value={formData.precio}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    Período
                                    <select
                                        name="periodo"
                                        value={formData.periodo}
                                        onChange={handleChange}
                                    >
                                        <option value="Dia">Día</option>
                                        <option value="Semana">Semana</option>
                                        <option value="Mes">Mes</option>
                                    </select>
                                </label>
                            </div>

                            {/* Ubicación */}
                            <label>
                                Ubicación
                                <input
                                    type="text"
                                    name="ubicacion"
                                    placeholder="Posadas - Centro"
                                    value={formData.ubicacion}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            {/* Disponibilidad */}
                            <label>
                                Disponibilidad
                                <select
                                    name="disponibilidad"
                                    value={formData.disponibilidad}
                                    onChange={handleChange}
                                >
                                    <option value="Disponible hoy">🟢 Disponible hoy</option>
                                    <option value="No disponible">🔴 No disponible</option>
                                    <option value="Reservado">📅 Reservado</option>
                                </select>
                            </label>

                            {/* Tipo de usuario */}
                            <label>
                                Tipo de usuario
                                <select
                                    name="tipoUsuario"
                                    value={formData.tipoUsuario}
                                    onChange={handleChange}
                                >
                                    <option value="Particular">🧍 Particular</option>
                                    <option value="Negocio">🏢 Negocio</option>
                                </select>
                            </label>

                            <button type="submit">Publicar herramienta</button>
                        </div>
                    </form>

                    <div className="containerimgadd">
                        <p>vista previa</p>
                    </div>

                </div>
            </div>
        </>
    )
}