import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  };

const useCounter = () => {
    const [counter, setCounter] = useLocalStorage('CONT_V1', 0);
    const increase = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return {
        counter, increase, decrement, reset
    }
}

export default function App() {
    const { counter, increase, decrement, reset } = useCounter();
return (
<div>
    <div><h1>{counter}</h1></div>
    <button className="buttonMas" onClick={increase}>+</button>
    <button className="buttonMenos" onClick={decrement}>-</button>
    <button className="buttonCero" onClick={reset}>Reset</button>
</div>
);

};
