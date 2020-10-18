import Button from './Button';


const styleProps = {
  bg: 'none',
  color: '#2D2F34',
  fontSize: 12,
  m: 0,
  p: 0,
  _hover: {},
  _focus: {}
}

const ButtonLink = ({ children, ...props }) => <Button {...styleProps} {...props}>
  {children}
</Button>;

export default ButtonLink;
