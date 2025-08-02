import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      <h2>お問い合わせ</h2>

      {!isSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" name="name" placeholder="山田　太郎" required />

          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" name="email" placeholder="example@example.com" required />

          <label htmlFor="message">お問い合わせ内容</label>
          <textarea id="message" name="message" rows="5" placeholder="ご質問やご要望をご記入ください" required></textarea>

          <button type="submit">送信</button>
        </form>
      ) : (
        <div className="contact-complete">
          <p>✅ 送信が完了しました。</p>
          <button className="back" onClick={handleBack}>お問い合わせに戻る</button>
        </div>
      )}
    </div>
  );
}

export default Contact;