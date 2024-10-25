import { HTMLAttributes, ReactNode } from "react";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <div
      {...props}
      style={{
        padding: "0.5rem",
        width: "33%",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default Item;
