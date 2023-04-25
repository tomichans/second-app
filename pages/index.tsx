import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import React, { useCallback, useEffect } from 'react';

export default function Home() {
  const foo = 1;

  // const handleClick = useCallback((e:React.MouseEvent) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"

    return () => {
      document.body.style.backgroundColor = ""
    }
  }, []);

  return (
    <>
      <Head>
        <title>index Page</title>
      </Head>
      <Header />
      {/* <a href='/about' onClick={handleClick}>ボタン</a> */}
      <Main page="index" />
    </>
  )
}
