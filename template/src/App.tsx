import React from 'react';
import tw from 'twin.macro';
import logo from './logo.svg';

const Wrapper = tw.div`text-center`;
const Header = tw.header`bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-lg`;
const Link = tw.a`text-blue-400`;
const Logo = tw.img`pointer-events-none h-80 animate-logo`;

function App() {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Wrapper>
  );
}

export default App;
