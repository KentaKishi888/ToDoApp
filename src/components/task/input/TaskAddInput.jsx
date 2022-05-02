import React from 'react'
import {v4 as uuid} from "uuid";

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {

  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if(inputText === ""){
      return;
    }
    //カード配列に追加していく
    setTaskList([
      ...taskList,
      {
        text:inputText,
        id:taskId,
        draggableId:`task-${taskId}`
      },
    ]);
    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='add tasks' 
          className='taskAddInput'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}

export default TaskAddInput
