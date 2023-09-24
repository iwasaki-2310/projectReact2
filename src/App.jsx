import React, { useEffect, useState } from "react";
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {//numのインクリメント関数
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {//true/falseの切り替え関数
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {
    if(num > 0) {
      if(num % 3 === 0) {
        //numが3の倍数の場合かつfaceShowFlagがfalseの場合は、trueに
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //numが3の倍数の場合ではない、かつ、faceShowFlagがtrueの場合は、falseにする
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);


  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ＾∀＾)</p>}
    </>
  );
};

export default App;
