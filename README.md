# week_28

### Вопросы 💎

1. В чём разница между контролируемыми и неконтролируемыми компонентами?

    у контролируемых форм данные хранятся в состоянии React

2. Есть ли смысл использовать метод `shouldComponentUpdate()` в `PureComponent`?

    нет

3. Будет ли перерисовываться данный компонент?   
    
    ```jsx
    class PureComponent extends React.PureComponent {
      state = { 
        item: {
    			count:0
    		},
      }
      
      handleClick= () =>  {
        const item = this.state.item;
        item.count = this.state.item.count ++ ;
        this.setState({item});
      }
      render() {
        return <h2>{this.state.item.count}</h2>
      }
    }
    ```

    нет
    
4. Что будет, если чекбоксу не передать свойство '`checked`'?

   он не будет предварительно выбран

5. В чём главное преимущество использования `PureComponent`?

    React.PureComponent изменяет метод жизненного цикла shouldComponentUpdate, автоматически проверяя, нужно ли заново отрисовывать компонент. При этом PureComponent будет вызывать рендер, только если обнаружит изменения в state или props компонента. Таким образом, сокращается количество рендеров в приложении, а значит и React производит намного меньше операций. Это и даёт плюс производительности.

6. Что будет, если компоненту `input` передать метод `onChange`, но не передать `value`? А что будет, если компоненту `input` передать `value`, но не передать метод `onChange`?

    onChange - метод, который принимает информацию;
    value - "контейнер", который хранит информацию для дальнейшей обработки в onChange;
    без одного из этих пунктов работа с данными инпута в реакте невозможна;

7. Как сделать из обычного `select` список с несколькими выбранными значениями (мультиселект)?
  
   <!-- <select multiple={true} value={['Б', 'В']}> -->

8. Напишите пример валидации текстового поля на React, чтобы оно было не пустым.

    import {useState} from 'react';

    export default function App() {
      const [message, setMessage] = useState('');

      const handleChange = event => {
        setMessage(event.target.value);
      };

      const handleClick = event => {
        event.preventDefault();

        if (message.trim().length !== 0) {
          console.log('input value is NOT empty');
        } else {
          console.log('input value is empty');
        }
      };

      return (
          
          <div>{message}</div>
          <input
            id="message"
            name="message"
            onChange={handleChange}
            autoComplete="off"
          />
          <button onClick={handleClick}>Check if input empty</button>
        </div>
      );
    }


9. Приведите пример простейшей формы логина на сторонних компонентах (Formic, Material или Bootstrap на ваш выбор).

        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">