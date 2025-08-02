import React from 'react';
import './Access.css';

function Access() {
  return (
    <div className="access-page">
      <h2>アクセス</h2>

      <div className="access-info">
        <h3>店舗情報</h3>
        <p>住所：広島県広島市〇〇区〇〇1-2-3</p>
        <p>営業時間：10:00 ~ 20:00</p>
        <p>定休日：水曜日</p>
        <p>電話番号：082-1234-5678</p>
      </div>

      <div className="access-map">
        <h3>地図</h3>
        <iframe
        title="店舗地図"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52675.00646079968!2d132.3597824!3d34.39656959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1753575240136!5m2!1sja!2sjp"
        width="100%"
        height="300"
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Access;