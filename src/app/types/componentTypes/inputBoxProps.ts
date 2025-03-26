export default interface InputBoxProps {
    label: string;
    type: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
  }
  