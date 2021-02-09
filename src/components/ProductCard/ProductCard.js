import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

import './ProductCard.scss';

class ProductCard extends React.Component {


    state = { content: '', count: 0 }

    itemAdded = () => {
        if (this.state.content.length === 0) {
            //this.setState({ count: this.state.count + 1 })
            //console.log(this.state.count)
            this.setState({ content: 'item added to cart' })
            setTimeout(() => {
                this.setState({ content: '' })
            }, 1000) 
        } else {
            this.setState({ content: '' })
        }
    }
    
    render() {
    return (
        <div className='productcard'>
            <div className='productcard__title'>{this.props.title}</div>
            <img className='productcard__img' alt='product-img' src={this.props.img} />
            <div className='productcard__alert'>{this.state.content}</div>
            <div className='productcard__box'>
                <div className='productcard__price'>{this.props.price + ' Kč'}</div>
                <div className='productcard__cart' onClick={() => {this.props.addToCart(this.props); this.itemAdded()}}>
                    <img className='productcard__cart-icon' alt='cart-icon' src='/img/cart-icon-white.png'/>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, { addToCart })(ProductCard);