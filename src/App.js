import React, {Component} from 'react';
import ListaArmas from './component/ListaArmas';
import NuevaArma from './component/NuevaArma';
import Header from './component/Header';

class App extends Component  {

  state = {
    armas : []
  }

  // Cuando la aplicacion se carga
  componentDidMount(){
    const armasLS = localStorage.getItem('armas');
    if(armasLS){
      this.setState({
        armas: JSON.parse(armasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('armas', JSON.stringify(this.state.armas))
  }
  

  crearNuevaArma = datos => {
    //console.log(datos);
    //copiar el state actual
    const armas = [...this.state.armas, datos]

    // agregar el nuevo state
    this.setState({
      armas
    })
    
  }

  eliminarArma = id =>{
    console.log(id);
    // tomar una copia del state
    const  armasActuales = [...this.state.armas]
    const armas = armasActuales.filter(arma =>  arma.id !==id)  
     
    this.setState({
      armas
    })
  }

  render() {

    return (

      <div className="container">
        <Header titulo="Administrador de Armas Falladas"/>
        <NuevaArma crearNuevaArma={this.crearNuevaArma}/>
        <ListaArmas
          armas = {this.state.armas}
          eliminarArma = {this.eliminarArma}
         />

      </div>
        
    );
  }

}

export default App;