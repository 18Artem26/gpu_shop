import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; 
import { FaFacebook } from 'react-icons/fa'; 
import { FaApple } from 'react-icons/fa'; 

function ProfileModal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Обработчики для изменения значений полей
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Обработчики для отправки форм
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Авторизация выполнена');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    alert('Регистрация выполнена');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <div className="auth-options">
          <button onClick={() => setIsLogin(true)}>Авторизація</button>
          <button onClick={() => setIsLogin(false)}>Реєстрація</button>
        </div>

        {isLogin ? (
          // Форма авторизации
          <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Увійти</button>
          </form>
        ) : (
          // Форма регистрации
          <form onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Підтвердження пароля:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <button type="submit">Зареєструватися</button>
          </form>
        )}

        <div className="social-login">
          <p>Войти через:</p>
          <button onClick={() => alert('Вход через почту')} className="social-button">
            <FaGoogle size={24} /> {/* Иконка Gmail */}
          </button>
          <button onClick={() => alert('Вход через Facebook')} className="social-button">
            <FaFacebook size={24} /> {/* Иконка Facebook */}
          </button>
          <button onClick={() => alert('Вход через Apple')} className="social-button">
            <FaApple size={24} /> {/* Иконка Apple */}
          </button>
        </div>
        <button className="close-button" onClick={closeModal}>
          Закрить
        </button>
      </div>
    </div>
  );
}

export default ProfileModal;
