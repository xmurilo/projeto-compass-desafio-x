import { useReducer } from "react";

interface initialState {
  value: string;
  isTouched: boolean;
}

const initialInputState: initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state: initialState, action: any) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};

const useInput = (validateValue: Function): any => {
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);
  const valueIsValid = validateValue(state.value);

  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event: any): void => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (): void => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
