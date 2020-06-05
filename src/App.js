import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <div className="row">
        <h1>Conversor Peso a Dolar</h1>
    </div>
    <div className="container">
        <form onSubmit={e => actions.login(e, props.history)}>
            <div className="row">
                <div className="col-md-4">
                    <label for="monto">Monto</label>
                    <input type="number" name="monto" id="monto" placeholder="1" value={store.email}
                                            onChange={actions.handleChange}/>
                </div>
                <div className="col-md-4">
                    <label for="monto">De</label>
                    <input type="number" name="monto" id="monto" placeholder="$ pesos"/>
                </div>
                <div className="col-md-4">
                    <label for="monto">A</label>
                    <input type="number" name="monto" id="monto" placeholder="US dolar"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-warning btn-block" type="button"><span><b>>></b></span></button>
                </div>
            </div>
        </form>
    </div>
    </>
  );
}

export default App;
