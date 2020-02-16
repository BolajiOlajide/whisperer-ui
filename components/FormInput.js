import {
  FormControl,
  FormLabel,
} from "@chakra-ui/core";

import Input from '../components/Input';

const FormInput = ({ inputId, label, ...props}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={inputId}>{label}</FormLabel>
      <Input
        id={inputId}
        {...props}
      />
    </FormControl>
  );
};

export default FormInput;
