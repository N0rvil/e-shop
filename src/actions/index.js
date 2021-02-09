export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    };
};

export const removeProduct = (i) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: i
    };
};

export const removeAllProducts = (product) => {
    return {
        type: 'REMOVE_ALL_FROM_CART',
        payload: product
    };
};