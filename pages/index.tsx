import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import React, { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("aa");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);

  useEffect(() => {
      document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [count]);

  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 10) {
      alert("10文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)){
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      return [...prevArray, text]
    });
  }, [text])


  return (
    <>
      <Head>
        <title>index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
    </>
  )
}
