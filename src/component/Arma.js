import React from 'react';

const Arma = ({ arma, eliminarArma }) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{arma.armaFallada}</h3>
            <p className="card-text">
                <span>Tipo de arma: </span> {arma.tipoArma}</p>
            <p className="card-text">
                <span>Nombre del dueño: </span> {arma.dueño}</p>
            <p><span>Fecha de ingreso: </span> {arma.fecha}</p>
            <p><span>Hora de ingreso: </span> {arma.hora}</p>
            <p><span>Detalle de la falla: </span> {arma.detalles}</p>

            <button className="btn btn-danger"
                onClick = { ()=> eliminarArma(arma.id) }>
                Borrar &times;
            </button>
        </div>

    </div>
)

export default Arma;