import Head from 'next/head'
import Main from '../components/Main'
import Header from '../components/Header'
import { useCounter } from '@/hooks/useCounter';
import { useInputArray } from '@/hooks/useInputArray';
import { useBgLightBlue } from '@/hooks/useBgLightBlue';

export default function Home() {
  const {count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAdd} = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

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
