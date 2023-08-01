import { HTMLAttributes } from "react";

interface props extends HTMLAttributes<HTMLDivElement> {
  nameCard: string;
  children: React.ReactNode;
}

function Card({ children, nameCard, ...rest }: props) {
  return (
    <div {...rest}>
      <span className="text-green-600 text-xl font-bold">{nameCard}</span>
      {children}
    </div>
  );
}

export default Card;
