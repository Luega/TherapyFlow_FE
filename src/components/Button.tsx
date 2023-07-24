import { PropsWithChildren } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

const Button = (props: PropsWithChildren<Props>) => {
  return (
    <button
      className="p-2 m-2 shadow-lg border rounded-lg"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
