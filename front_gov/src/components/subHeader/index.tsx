import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export default function SubHeader({ children }: props) {
  return (
    <div
      className="flex flex-col bg-linear-b-to-g items-center justify-center 
    before:bg-smooth-white-top before:w-full before:h-1 before:relative before:top-0
    after:bg-smooth-white-bottom after:w-full after:h-1 after:relative after:bottom-0
    "
    >
      <nav className="flex w-full gap-6 pl-56 py-4">
        <a className="hover:text-zinc-500" href="#">
          Cidadão
        </a>
        <a className="hover:text-zinc-500" href="#">
          Sobre nós
        </a>
      </nav>
      <div className="flex w-full justify-center items-center p-5 text-4xl">
        {children}
      </div>
    </div>
  );
}
