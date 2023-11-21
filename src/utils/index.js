export const totalPrice = (cartProducts) => {
    const total = cartProducts.reduce((sum, product) => sum + product.price, 0);
    return total;
}

