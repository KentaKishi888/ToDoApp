import React from 'react'
import { useState } from 'react';

const TaskCardTitle = () => {
  // クリックされたかどうかの状態変数と更新関数を定義する
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  }

  //タイトル編集の状態変数＆更新関数を定義する
  const [inputCardTitle, setInputCardTitle] = useState("Today");
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    //鉄板のreloadを回避
    e.preventDefault();
    setIsClick(false);
  } 

  const handleBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className="taskCardTitlInputArea">
      {isClick ? (
      <form onSubmit={handleSubmit}>
        <input className="taskCardTitleInput" maxLength="10" autoFocus value={inputCardTitle} type="text" onChange={handleChange} onBlur={handleBlur}/>
      </form>
       ):( 
       <h3>{inputCardTitle}</h3>
       )}
    </div>
  )
}

export default TaskCardTitle
