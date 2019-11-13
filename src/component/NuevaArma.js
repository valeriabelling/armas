import React ,{Component} from 'react'
import uuid from 'uuid';

const stateInicial = {
    arma:{
        armaFallada: '',
        tipoArma: '',
        dueño: '',
        fecha: '',
        hora: '',
        detalles: ''
    },
    error: false
}


class NuevaArma extends Component {
    
    state = {...stateInicial}

       
     handleChange = e => {
        // colocar lo que el usuario escribe en el state
        this.setState({
            arma : {
                ...this.state.arma,
                [e.target.name] : e.target.value
            }
        })
   
     }
        // cuando el usuario envia el formulario
        handleSubmit = e => {
            e.preventDefault();

        //extraer los valores del state
        const { armaFallada, tipoArma, dueño, fecha,hora,detalles } = this.state.arma

           //validar que todos los campos esten llenos
           if(armaFallada === '' || tipoArma === '' || dueño === '' || fecha === ''|| hora === ''|| detalles === '' )
           {
                this.setState({
                    error: true
                })

                // detener la ejecucion
                return;
           }

           // generar objeto con los datos
           const nuevaArma = {...this.state.arma};
           nuevaArma.id = uuid();


              // agragar la cita al state de App
              this.props.crearNuevaArma(nuevaArma)

              //colocar en el state el stateInicial
              this.setState({
                  ...stateInicial
              })

        }

    render() { 

        /// extrar valor del state
        const {error} = this.state;
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body text-center">
                    <h2 className="card-title text-center mb-5">
                        Llene el formulario para reportar nueva arma fallada
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}

                <form
                onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre de Arma fallada
                        </label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de Arma fallada"
                            name="armaFallada"
                            onChange={this.handleChange}
                            value={this.state.arma.armaFallada}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Tipo de Arma
                        </label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Tipo de Arma"
                            name="tipoArma"
                            onChange={this.handleChange}
                            value={this.state.arma.tipoArma}
                            />
                        </div>
                    </div>
                           
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre del dueño
                        </label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre Dueño"
                            name="dueño"
                            onChange={this.handleChange}
                            value={this.state.arma.dueño}
                            />
                        </div>
                    </div>
                {/*form-group */} 

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                           Fecha de ingreso
                        </label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                            type="date"
                            className="form-control"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.arma.fecha}
                            />
                        </div>
                    </div>
                 {/*form-group */} 


                 <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                           Hora de ingreso
                        </label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                            type="time"
                            className="form-control"
                                name="hora"
                                onChange={this.handleChange}
                                value={this.state.arma.hora}
                            />
                        </div>
                    </div>
                 {/*form-group */} 

             
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Detalles de la falla</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Ingrese detalles de la falla"
                                name="detalles"
                                onChange={this.handleChange}
                                value={this.state.arma.detalles}
                                />
                            </div>
                    </div>

                    <input
                    type="submit"
                    className="py-3 mt-2 btn btn-success btn-block"
                    value="Agregar nueva arma fallada"
                    />
                </form>  {/*form-group */} 
                
                
                
                


                </div>
            </div>
         );
    }
}
 
export default NuevaArma;