import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

const Card = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={`p-4 m-4 shadow-lg border rounded-lg ${
        props.className ? props.className : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
