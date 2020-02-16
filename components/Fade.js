import { Transition } from "react-transition-group";
import { Box } from '@chakra-ui/core';


const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const Fade = ({ in: inProp, children, ...props }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <Box
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
        {...props}
      >
        {children}
      </Box>
    )}
  </Transition>
);

export default Fade;
