export default function Card() {
    return (
        <div className="card" style={{ backgroundColor: "white !important;" }}>
            <img style={{ width: "14rem", margin: "0 auto" }} src='https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="card-img-top" alt="..." />
            <div className="card-body backgrounCard" >
                <p className="card-text backgrounCard">Estado: 🟢 Excelente</p>
                <h5 className="card-title backgrounCard">Amoladora Bosch 115mm </h5>
                <p className="card-text backgrounCard">Precio: $8.000 / Dia </p>
                <p className="card-text backgrounCard">📍Posadas - Centro</p>
                <p className="card-text backgrounCard">🟢 Disponible hoy </p>
                <p className="card-text backgrounCard">🧍 Particular</p>
            </div>
        </div>
    )
}