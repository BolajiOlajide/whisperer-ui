import { useState } from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: ({ target: { type, value } }) => {
        const val = type === 'number' ? parseFloat(value || 0, 10) : value;
        setValue(val);
      }
    }
  };
};

export default useInput;
