// #2-j1
// Reactの雛形（returnの中にHTMLを書く←JSX記法）
import Link from 'next/link';
// import * as style from '../styles/index.module.css';
import Image from 'next/image';

const Index = () => {
  // return <h1 style={{ color: 'red', letterSpacing: '20px' }}>こんにちは</h1>;
  // return (
  //   <div>
  //     <h1 className={style.h1Text}>こんにちは</h1>
  //     <Link href='/contact'>
  //       <a>Contactページへ移動</a>
  //     </Link>
  //     <br />
  //     <a href='/blog'>ブログページへ移動</a>
  //   </div>
  // );

  return (
    <>
      <div>
        <Image
          src='/images/index-hero.jpg'
          alt='hero'
          layout='fill'
          objectFit='cover'
          quality='90'
        />
        <div>
          <h1>I'm Abe Hiroki!</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              voluptate praesentium cupiditate? Quos vitae voluptatum dicta
              unde. Error amet enim ratione tenetur, corrupti excepturi
              recusandae, iste ab aperiam sit libero.
            </p>
          </div>
          <Image
            src='/images/profile.jpg'
            alt='hero'
            height={1195}
            width={1000}
            quality={90}
          />
        </div>
        <div>
          <h2>Skills</h2>
          <div>
            <div>
              <img src='/images/javascript.svg' alt='javascript' />
              <span>JavaScript / 10 years</span>
            </div>
            <div>
              <img src='/images/react.svg' alt='react' />
              <span>React / 5 years</span>
            </div>
            <div>
              <img src='/images/gatsby.svg' alt='gatsby' />
              <span>Gatsby / 3 years</span>
            </div>
            <div>
              <img src='/images/next.svg' alt='next' />
              <span>Next.js / 3 years</span>
            </div>
          </div>
        </div>
        <div>
          <Link href='/contact'>
            <a>make It Happen!</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
