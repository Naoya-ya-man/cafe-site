import { Link } from 'react-router-dom';
import './Header.css'; //スタイルも後で追加

function Header() {
  return (
    <header>
      <nav>
        <ul className='nav-list'>
          <li>
            <Link to='/'>ホーム</Link>
          </li>
          <li>
            <Link to='/menu'>メニュー</Link>
          </li>
          <li>
            <Link to='/access'>アクセス</Link>
          </li>
          <li>
            <Link to='/contact'>お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
