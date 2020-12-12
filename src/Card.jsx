import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        const { item, eliminar } = this.props;

        return (
            <div className="card">
                <b>{item.id}</b>
                <p className="item">
                    {item.nombre}
                </p>
                <p>
                    Precio : 
                    <span className="item">
                        $ {item.precio}
                    </span>
                </p>
                <button className="item-button">Modificar</button>
                <button className="item-button" 
                    onClick={() =>eliminar(item.id)}
                >Eliminar</button>
                
            </div>
        )
    }
}
    