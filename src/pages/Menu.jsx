import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Menu.css';


function MenuItem({ title, description, price, image, onCartChange, onOpenPopup}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);




    // −ボタン押下時（0未満にならないように制御）
  const handleDecrease = () => {
    if (cartCount > 0) {
      const newCount = cartCount -1;
      setCartCount(newCount);
      onCartChange (title, price, -1); //減らすときはマイナス
    }
  };

  // ＋ボタン押下時
  const handleIncrease = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    onCartChange(title, price, 1);//増やすときはプラス
  };


return(
  <div className='menu-item'>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>¥{price}</p>

    <button className='favorite' onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? '❤ お気に入り済み' : '💛 お気に入り追加'}
    </button>

      <button className='buy' onClick={() => {
        setCartCount(cartCount + 1);
        onCartChange(title, price, 1);
        onOpenPopup(); // ✅カートに追加時にポップアップ開く
      }}>
        カートに追加({cartCount})
      </button>

    <div className='cart-controls'>
      <button className='mainan' onClick={handleDecrease}>-</button>
      <span style={{margin: '0 10px'}}>数量: {cartCount}</span>
      <button className='purasuru' onClick={handleIncrease}>+</button>
    </div>
  </div>
);
}

//Menu全体
function Menu() {

  const [total, setTotal] = useState(0); //合計金額の状態
    const [cartItems, setCartItems] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCartChange = (title, price, change) => {
    setCartItems(prev => {
      const currentCount = prev[title]?.count || 0;
      const newCount = currentCount + change;
      if (newCount <= 0) {
        const copy = { ...prev };
        delete copy[title];
        return copy;
      }
      return {
        ...prev,
        [title]: { price, count: newCount }
      };
    });
    setTotal(prev => prev + price * change);
  };


  const items=[
    {
      title: 'スペシャルブレンドコーヒー',
      description: '当店オリジナルブレンドのコーヒーです。香りをお楽しみください。',
      price: 450,
      image: '/coffee.jpg'
    },
    {
      title: '季節の手作りケーキ',
      description: '季節によってケーキの種類を変えています。ぜひお召し上がりください。',
      price: 500,
      image: '/cake.jpg'
    },
        {
      title: 'オーガニックティー',
      description: '当店オリジナルの紅茶です。葉の香りを楽しみながらぜひお召し上がりください。',
      price: 400,
      image: '/tea.jpg'
    },
    {
      title: '自家製サンドイッチ',
      description: 'ふわふわのパンにとれたて野菜を挟みました。トーストとそのままを選べます。',
      price: 550,
      image: '/sandwich.jpg'
    },
    {
      title: 'カフェラテ',
      description: '北海道産のミルクを使用したまろやかなラテです。砂糖で甘さを調整してください。',
      price: 500,
      image: '/latte.jpg'
    },
    {
      title: '手作りクッキー',
      description: '当店で焼いている特製クッキーです。飲み物とご一緒にどうぞ。',
      price: 300,
      image: '/cookie.jpg'
    }

    
  ];

  return(
    <div className='menu-page'>
      <h2>メニュー</h2>

      <div className='menu-grid'>
        {items.map((item, index) =>(
          <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          onCartChange={handleCartChange}//合計金額を更新する関数
           onOpenPopup={() => setShowPopup(true)}
          />
        ))}
      </div>

        <div
        className="cart-total-fixed"
        onClick={() => {
          const isCartEmpty = Object.keys(cartItems).length === 0;
          if (isCartEmpty) {
            alert('カートに入れてください');
          }else{
            setShowPopup(true);
          }
        }}
        >
          🛒 合計金額 ¥{total}
          レジへ進む
        </div>

           {showPopup && (
        <div className="cart-popup">
          <h4>🧾 カートの中身</h4>
          {Object.entries(cartItems).map(([title, item]) => (
            <p key={title}>
              {title} × {item.count}個 = ¥{item.price * item.count}
            </p>
          ))}
          <button className="close" onClick={() => setShowPopup(false)}>閉じる</button>
          <button className="go" onClick={() => navigate('/cart', { state: { cartItems, total } })}>
            確認画面へ進む
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;





// function Menu() {
//   return (
//     <div className='menu-page'>
//       <h2>メニュー</h2>

//       <div className='menu-grid'>
//         <div className='menu-item'>
//           <img src='/coffee.jpg' alt='コーヒー' />
//           <h3>スペシャルブレンド<br></br>コーヒー</h3>
//           <p>当店オリジナルブレンドのコーヒーです。香りをお楽しみください。</p>
//           <p>¥450</p>
//         </div>
//         <div className='menu-item'>
//           <img src='/cake.jpg' alt='ケーキ' />
//           <h3>季節の手作りケーキ</h3>
//           <p>季節によってケーキの種類を変えています。ぜひお召し上がりください。</p>
//           <p>¥500</p>
//         </div>
//         <div className='menu-item'>
//           <img src='/tea.jpg' alt='紅茶' />
//           <h3>オーガニックティー</h3>
//           <p>当店オリジナルの紅茶です。葉の香りを楽しみながらぜひお召し上がりください。</p>
//           <p>¥400</p>
//         </div>
//         <div className='menu-item'>
//           <img src='/sandwich.jpg' alt='サンドイッチ' />
//           <h3>自家製サンドイッチ</h3>
//           <p>ふわふわのパンにとれたて野菜を挟みました。<br />トーストとそのままを選べるのでご注文時にお選びください。</p>
//           <p>¥550</p>
//         </div>
//         <div className='menu-item'>
//           <img src='/latte.jpg' alt='ラテ' />
//           <h3>カフェラテ</h3>
//           <p>北海道産のミルクを使用したまろやかなラテになっています。砂糖で甘さを調整してお召し上がりください。</p>
//           <p>¥500</p>
//         </div>
//         <div className='menu-item'>
//           <img src='/cookie.jpg' alt='クッキー' />
//           <h3>手作りクッキー</h3>
//           <p>当店で焼いている特製クッキーです。飲み物とご一緒にどうぞ</p>
//           <p>¥300</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu;
