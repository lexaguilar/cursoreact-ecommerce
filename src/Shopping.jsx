import React, { Component } from 'react'
import Card from './Card';

export default class Shopping extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items : [
                {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'Mouse',
                    precio: 15.5
        
                }, {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'Teclado',
                    precio: 10
                }, {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'Monitor 22 pulg',
                    precio: 124
                }, {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'Cable de red',
                    precio: 5
                }, {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'Procesador Intel I7',
                    precio: 233
                }, {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'HDD 1T ',
                    precio: 68
                }, {
                    id: Math.floor(Math.random() * 1000),
                    nombre: 'Memoria USB 128GB',
                    precio: 19,
                    precioAnterior : 25
                }
            ]
        }

        this.eliminar = this.eliminar.bind(this);
    }

    eliminar( id ){

        this.setState({
            items : this.state.items.filter(x => x.id != id)
        });

    }
    

    render() {
        return (
            <div>
                <h2>Items</h2>
                <div className="row-items">
                    {
                        this.state.items.map(item => <Card 
                                                        item={item} 
                                                        eliminar={this.eliminar}>                                                        
                                                    </Card>)
                    }
                </div>
            </div>
        )
    }
}
