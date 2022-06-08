import React, { useState } from "react";

function useInput(validates) {

  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsEmpty = validates(inputValue);
  const hasError = ((inputIsEmpty && isTouched));

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
      setInputValue('')
      setIsTouched(false)
  }
  return(
      {
          value: inputValue,
          isEmpty: inputIsEmpty,
          inputChangeHandler,
          inputBlurHandler,
          hasError,
          reset

      }
  );
}

export default useInput;
