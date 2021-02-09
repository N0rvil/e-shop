import React from 'react';
import { connect } from 'react-redux';

import ProductCard from './../ProductCard/ProductCard';  
import './LandingPage.scss';

class LandingPage extends React.Component {

    filteredByTop(list) {
        if (list.top === true) {
            return true
        } else {
            return false
        }
    }

    topProductsList() {
        let newArr = this.props.products.filter(this.filteredByTop)

        return newArr.map((product, i) => {
            return (
                    <ProductCard key={i} title={product.title} img={product.img} price={product.price} amount={product.amount} />
            );
        });
    }


    render() {
    return (
        <div className='landingpage'>
            <img className='landingpage__img' alt='landing-img' src='/img/landing-img-6.png' />
            <h1 className='landingpage__header'>best products</h1>
            <div className='hr'></div>

            <div className='landingpage__products'>
                {this.topProductsList()}
            </div>
        </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { products: state.products };
}

export default connect(mapStateToProps)(LandingPage);