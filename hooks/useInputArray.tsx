import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("aa");
  const [array, setArray] = useState<string[]>([]);
  
  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 10) {
      alert("10文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
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

  return { text, array, handleChange, handleAdd };
}