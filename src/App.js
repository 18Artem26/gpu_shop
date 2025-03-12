import './App.css';
import React, { useState } from 'react';
import { Card } from './components/card';
import { Button } from './components/button';
import { ShoppingCart, User } from 'lucide-react';
import ShoppingCartComponent from './components/ShoppingCart';
import ProfileModal from './components/ProfileModal';


const products = [
  // NVIDIA 4000 Series
  { id: 1, name: "RTX 4090", brand: "NVIDIA", price: 1599, imageUrl: "https://images.prom.ua/6310607944_w640_h640_videokarta-asus-rog.jpg" },
  { id: 2, name: "GeForce RTX 4080 SUPER", brand: "NVIDIA", price: 1199, imageUrl: "https://content.rozetka.com.ua/goods/images/big/340992158.jpg" },
  { id: 3, name: "RTX 4070 Ti 16GB GDDR6X", brand: "NVIDIA", price: 899, imageUrl: "https://img.mta.ua/image/cache/data/foto/z869/869196/photos/MSI-Nvidia-GeForce-RTX-4070-GAMING-SLIM-12G-23-Picture-01-600x600.jpg" },
  { id: 4, name: "RTX 4070 12GB GDDR6X", brand: "NVIDIA", price: 599, imageUrl: "https://click.ua/content/shop/products/144090/photos/videokarta-gf-rtx-4070-12gb-gddr6x-ventus-3x-e1-oc-msi-geforce-rtx-4070-ventus-3x-e1-12g-oc-800x800-f0ba.jpg" },
  { id: 5, name: "RTX 4060 Ti 16GB GDDR6", brand: "NVIDIA", price: 499, imageUrl: "https://img.telemart.ua/526407-675389-product_popup/msi-geforce-rtx-4060-ti-gaming-x-slim-16384mb-rtx-4060-ti-gaming-x-slim-16g.png" },
  { id: 6, name: "GeForce RTX 4060 8GB GDDR6", brand: "NVIDIA", price: 399, imageUrl: "https://cdn.comfy.ua/media/catalog/product/cache/4/image/600x/9df78eab33525d08d6e5fb8d27136e95/g/e/geforce_rtx_173_173_4060_gaming_oc_8g-07.jpg" },

  // NVIDIA 5000 Series
  { id: 8, name: "RTX 5090", brand: "NVIDIA", price: 2499, imageUrl: "https://img.telemart.ua/721174-896470-product_popup/asus-rog-astral-geforce-rtx-5090-oc-32768mb-rog-astral-rtx5090-o32g-gaming.jpg" },
  { id: 9, name: "RTX 5080", brand: "NVIDIA", price: 1999, imageUrl: "https://img.telemart.ua/721177-896436/asus-rog-astral-geforce-rtx-5080-oc-16384mb-rog-astral-rtx5080-o16g-gaming.jpg" },
  { id: 10, name: "RTX 5070", brand: "NVIDIA", price: 1399, imageUrl: "https://touch.com.ua/upload/resize_cache/webp/resize_cache/iblock/41e/500_500_1/53bcn03znsyluyoojqrndz45zeki1608.webp" },
  { id: 11, name: "RTX 5060 Ti", brand: "NVIDIA", price: 1099, imageUrl: "https://svichado.com/image/cache/catalog/image/cache/catalog/nema3-240x240.webp" },
  { id: 12, name: "RTX 5060", brand: "NVIDIA", price: 899, imageUrl: "https://svichado.com/image/cache/catalog/image/cache/catalog/nema3-240x240.webp" },

  // AMD Series
  { id: 13, name: "RX 7900 XTX", brand: "AMD", price: 999, imageUrl: "https://img.mta.ua/image/cache/data/foto/z815/815640/photos/SAPPHIRE-NITRO-AMD-Radeon-RX-7900-XT-VaporX-20GB-40-Picture-01-600x600.jpg" },
  { id: 14, name: "RX 7800 XT", brand: "AMD", price: 699, imageUrl: "https://content.rozetka.com.ua/goods/images/big/449094879.jpg" },
  { id: 15, name: "RX 7700 XT", brand: "AMD", price: 649, imageUrl: "https://pg.asrock.com/Graphics-Card/photo/Radeon%20RX%207700%20XT%20Phantom%20Gaming%2012GB%20OC(L1).png" },
  { id: 16, name: "RX 7600 XT", brand: "AMD", price: 599, imageUrl: "https://pcshop.ua/image/cache/webp/catalog/tovar/videokarta-asus-radeon-rx-7600-xt-tuf-gaming-oc-edition-16gb-gddr6-tuf-rx7600xt-o16g-gaming-1024x768.webp" },
  { id: 20, name: "RX 7600", brand: "AMD", price: 349, imageUrl: "https://pcshop.ua/image/cache/webp/catalog/tovar/videokarta-asus-radeon-rx-7600-xt-tuf-gaming-oc-edition-16gb-gddr6-tuf-rx7600xt-o16g-gaming-1024x768.webp" },
  { id: 21, name: "RX 7700", brand: "AMD", price: 499, imageUrl: "https://touch.com.ua/upload/resize_cache/webp/iblock/51c/1o7di204rb2c3r23mm3yd78nptgdtyxz.webp" },
  { id: 22, name: "RX 6700 XT", brand: "AMD", price: 399, imageUrl: "https://content2.rozetka.com.ua/goods/images/big/522731387.jpg" },
  { id: 23, name: "RX 6600", brand: "AMD", price: 349, imageUrl: "https://images.prom.ua/3595118067_w640_h640_videokarta-gigabyte-radeon.jpg" },
];


export default function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); 

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const filteredProducts = filter
    ? products.filter((p) => p.brand === filter)
    : products;

  return (
    <div className="container">
      <header>
        <div className="logo-container">
          <img src="/logo.webp" alt="GPU Store Logo" className="logo" />
          <h1>GPU Store</h1>
        </div>
        <div className="button-group">
          <button onClick={() => setIsProfileOpen(true)}> {/* Открыть модальное окно профиля */}
            <User className="lucide-react" />
            <span>Профиль</span>
          </button>
          <button onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="lucide-react" />
            <span>Кошик ({cart.length})</span>
          </button>
        </div>
      </header>

      {/* Фильтрация товаров */}
      <div className="filter-container">
        <select
          onChange={(e) => setFilter(e.target.value)}
          defaultValue=""
        >
          <option value="">Все</option>
          <option value="NVIDIA">NVIDIA</option>
          <option value="AMD">AMD</option>
        </select>
      </div>

      {/* Сетка товаров */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-content">
              <h2>{product.name}</h2>
              <p>{product.brand}</p>
              <p>${product.price}</p>
              <Button onClick={() => addToCart(product)}>Додати у кошик</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Модальное окно корзины */}
      {isCartOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <ShoppingCartComponent 
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
            <button className="close-button" onClick={() => setIsCartOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}

      {/* Модальное окно профиля */}
      {isProfileOpen && (
        <ProfileModal closeModal={() => setIsProfileOpen(false)} />
      )}
    </div>
  );
}