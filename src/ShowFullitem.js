
import React, { Component } from 'react'

export class ShowFullitem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={"img/" + this.props.item.img} alt="Waren" onClick={() => this.props.onShowItem(this.props.item)}/>
            
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desription}</p>
            <b>{this.props.item.price}€</b>
            <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>
   
        </div>
           
      </div>
    )
  }
}

export default ShowFullitem
