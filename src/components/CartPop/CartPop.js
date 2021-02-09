import React from 'react';
import { removeProduct, removeAllProducts } from '../../actions';
import { connect } from 'react-redux';

import './CartPop.scss';

class CartPop extends React.Component {

    cartControl() {
        if(this.props.cartProduct.length === 0) {
            return <div className='cartpop__empty'>Nothing in your cart</div>
        } else {
            return(
                <button className='cartpop__btn-all' onClick={() => this.props.removeAllProducts()}>Remove all</button>
            )
        }
    }

    renderedList() {
    return this.props.cartProduct.map((product, i) => {
            return (
                <div key={i} className='cartpop__product'>           
                        <img className='cartpop__img' alt='product' src={product.img} />
                        <h2>{product.amount}</h2>
                        <div className='cartpop__box'>
                            <h1 className='cartpop__title'>{product.title}</h1>
                            <h2 className='cartpop__price'>{product.price  + ' Kč'}</h2>
                        </div>
                        <button className='cartpop__btn' onClick={() => this.props.removeProduct(i)}>X</button>
                </div>
            );
        });
    }

    

    render() {
        
            return (
                    <div className='cartpop'>
                        <h1 className='cartpop__header'>Your cart</h1>
                        {this.renderedList()}
                        <div className='cartpop__content'>{this.cartControl()}</div>
                    </div>
                )
        }
    }


const mapStateToProps = (state) => {
    return { cartProduct: state.cartProduct };
}

export default connect(mapStateToProps, { removeProduct, removeAllProducts })(CartPop);
