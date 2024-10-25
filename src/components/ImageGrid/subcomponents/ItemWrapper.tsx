import { HTMLAttributes, ReactNode } from "react";

interface ItemWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ItemWrapper = ({ children, ...props }: ItemWrapperProps) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default ItemWrapper;
