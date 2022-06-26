// #2-j1
// Reactの雛形（returnの中にHTMLを書く←JSX記法）
import Link from 'next/link';
import * as style from '../styles/index.module.css';

const Index = () => {
  // return <h1 style={{ color: 'red', letterSpacing: '20px' }}>こんにちは</h1>;
  return (
    <div>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link href='/contacts'>
        <a>Contactページへ移動</a>
      </Link>
      <br />
      <a href='/blog'>ブログページへ移動</a>
    </div>
  );
};

export default Index;
