import './App.css';
import React, {useState} from "react";


function App() {
  let [arr, setValue] = useState([]);
  let [inputValue, setInputValue] = useState('');

  const color = 'color';

  const handleChange = () => {  
      if (inputValue.trim().length !== 0) {
        let copy = Object.assign([], arr);
        copy.push(inputValue.replace(/viagra|xxx/ig, "***"));
        setValue(copy);
        setInputValue('');
      }
      else {
        alert('Невозможно отправить пустое сообщение')
      }
  }

  const handleInput = (e) => {
      setInputValue(e.target.value);
  }
  
  return (
    <>
      <div className='wrapper'>
        <div className="comment-section">
          {
            arr.map((item, index) =>
            <div key={index} className={index===arr.length-1 ? color : ''}>{item}</div>
            )
          }
        </div>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={handleChange}>Отправить комментарий</button>
      </div>
    </>
  );
};

export default App;