import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

function Card(props: PropsWithChildren<Props>) {
  return (
    <div
      className={`p-2 m-2 shadow-lg border rounded-lg ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default Card;
