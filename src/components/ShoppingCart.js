import React from 'react';

export default function ShoppingCart({ cart, updateQuantity, removeFromCart, clearCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Кошик</h2>
      {cart.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} width="50" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.brand}</p>
                  <p>Ціна: {item.price} ₴</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Видалити</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <p>Итого: {calculateTotal()} ₴</p>
            <button onClick={clearCart}>Очистити кошик</button>
            <button>Оформити замовлення</button>
          </div>
        </div>
      )}
    </div>
  );
}
