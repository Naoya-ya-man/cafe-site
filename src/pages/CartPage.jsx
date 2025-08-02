import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './CartPage.css';


function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, total } = location.state || {};

  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleOrder = () => {
    setOrderCompleted(true);
  };

  const handleBackToMenu = () => {
    navigate('/menu');
  }

  return (
    <div className="cart-page">
      {!orderCompleted ? (
        <>
          <h2>🧾 ご注文確認</h2>
          {cartItems && Object.keys(cartItems).length > 0 ? (
            <>
              {Object.entries(cartItems).map(([title, item]) => (
                <p key={title}>
                  {title} × {item.count}個 = ¥{item.price * item.count}
                </p>
              ))}
              <h3>合計：¥{total}</h3>
              <button className="order" onClick={handleOrder}>注文を送信する</button>
            </>
          ) : (
            <p>カートは空です</p>
          )}
        </>
      ) : (
        <>
          <h2>✅ 注文が完了しました。</h2>
          <button className="order" onClick={handleBackToMenu}>注文画面に戻る</button>
        </>
      )}
    </div>
  );
}

export default CartPage;