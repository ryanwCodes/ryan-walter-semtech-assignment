import { CSSProperties, forwardRef, HTMLAttributes, ReactNode } from "react";
interface ListProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
  children?: ReactNode;
}

const List = forwardRef<HTMLDivElement, ListProps>(
  ({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={{
        display: "flex",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {children}
    </div>
  ),
);

export default List;
