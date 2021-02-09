import { combineReducers } from 'redux';

const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text';


// title, description, weight, flavors, price, category, undercategory
const productsReducer = () => {
    return [
        { title:'protein CFM 80%', description: description, weight: '1000g', flavors: ['chocolate', 'vanila', 'strawberry'], price: 450, category: 'supplement', undercategory: 'protein', img:'/img/protein-icon.png', top: true, amount: 1},
        { title:'protein Hydro 80%', description: description, weight: '1000g', flavors: ['chocolate', 'vanila', 'strawberry'], price: 650, category: 'supplement', undercategory: 'protein' },
        { title:'Bcaa 2:1:1', description: description, weight: '500g', flavors: ['strawberry', 'green apple', 'orange'], price: 400, category: 'supplement', undercategory: 'amino acids',  img:'/img/bcaa-icon.png', top: true, amount: 1},
        { title:'L-glutamin', description: description, weight: '500g', flavors: ['no flavour'], price: 280, category: 'supplement', undercategory: 'amino acids', img:'/img/glutamine-icon.png', top: true, amount: 1},
        { title:'Ultra-pre', description: description, weight: '600g', flavors: ['peach', 'mango'], price: 680, category: 'supplement', undercategory: 'preworkout', img:'/img/preworkout-icon.png', top: true, amount: 1},
        { title:'T-shirt black', description: description, price: 450, category: 'clothes', undercategory: 't-shirts'},
        { title:'T-shirt white', description: description, price: 450, category: 'clothes', undercategory: 't-shirts'},
        { title:'T-shirt green', description: description, price: 450, category: 'clothes', undercategory: 't-shirts'},
        { title:'Shorts grey', description: description, price: 500, category: 'clothes', undercategory: 'shorts'},
        { title:'Shorts black', description: description, price: 500, category: 'clothes', undercategory: 'shorts'},
    ];
}

const cartReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':   
            let exists = false; 
            const newCart = state.map(product => {
                if (product.title === action.payload.title) {
                    exists = true;
                    return {...product, amount: product.amount + 1 };
                } 
                return product;
            })
            if (exists) {
                return newCart;
            } else {
                return [...state, action.payload];
            };
        case 'REMOVE_FROM_CART':
            //const newState = [state.splice(action.payload, 1)]
            return state.filter((item, i) => {
                return action.payload !== i
            })
        case 'REMOVE_ALL_FROM_CART':
            return []
        default:
            return state
    };
};

export default combineReducers ({
    products: productsReducer,
    cartProduct: cartReducer
})