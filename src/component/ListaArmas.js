import React from 'react';
import Arma from './Arma'

const ListaArmas = ({ armas, eliminarArma }) => (
    <div className="card mt-2 py-5 right-align">
        <div className="card-body">
            <h2 className="card-title text-center">
                Administra las armas falladas aquí
            </h2>
            <div className="lista-armas">
                {armas.map(arma => (
                    <Arma
                    key={arma.id}
                    arma={arma}
                    eliminarArma = {eliminarArma}
                    />
                ))}

            </div>
        </div>

    </div>
)

export default ListaArmas;