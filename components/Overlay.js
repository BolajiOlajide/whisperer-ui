import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  position: "absolute",
  height: "100%",
  width: "50%",
  background: 'url("/static/background.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  transform: "translateX(0%)"
};

const transitionStyles = {
  entering: { transform: "translateX(0%)" },
  entered: { transform: "translateX(0%)" },
  exiting: { transform: "translateX(100%)" },
  exited: { transform: "translateX(100%)" }
};

const Overlay = ({ inProp }) => <Transition
  in={inProp}
  timeout={duration}
>
  {state => (
    <div
      style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }} />
  )}
</Transition>;

export default Overlay;
