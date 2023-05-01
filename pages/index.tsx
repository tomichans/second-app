import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e:React.MouseEvent) => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <>
      <Head>
        <title>index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
    </>
  )
}
