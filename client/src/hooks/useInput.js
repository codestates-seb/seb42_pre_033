import { useState, useCallback } from 'react';

function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);
  // change
  const onChange = useCallback((e) => {
    const { value } = e.target;
    setInput(value);
  }, []);
  const reset = useCallback(() => setInput(''));
  return [input, onChange, reset];
}

export default useInput;
