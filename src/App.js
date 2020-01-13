import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListasCitas from './components/ListasCitas';

class App extends Component {
  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas = [...this.state.citas, datos];

    // agregar el nuevo state
    this.setState({
      citas
    })
  }

  // elimina las citas del state
  eliminaCita = id => {
    // tomar una copia del state
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo="Administrador Pacientes Veterinaria"
        />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListasCitas 
              citas= {this.state.citas}
              eliminaCitaç= {this.eliminaCita}
            />

          </div>
        </div>

      </div>
     );
  }
}

export default App;
