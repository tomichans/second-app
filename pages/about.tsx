import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import { useBgLightBlue } from '@/hooks/useBgLightBlue';
import React from 'react';

export type Props = {
  count: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
}

export default function About(props: Props) {
  const {count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>about Page</title>
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
      <Main page="about" />
    </>
  )
}