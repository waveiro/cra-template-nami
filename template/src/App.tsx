import React from 'react';
import logo from './logo.svg';
import tw from 'twin.macro';

const Paragraph = tw.p`text-2xl font-medium text-white`;
const Link = tw.a`text-base text-blue-200 hover:text-blue-300 font-medium mx-4 cursor-pointer transition-all ease-in duration-300`;

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <Paragraph>
          Edit <code>src/App.tsx</code> and save to reload.
        </Paragraph>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
