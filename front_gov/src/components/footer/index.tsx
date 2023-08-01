export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="flex p-1 flex-col  h-52 bottom-0 w-full">
        <div className="relative top-6">
          <img
            className="absolute w-36 h-20 max-xl:hidden"
            src="./src/assets/icons/brasaoLogo.png"
            alt="brasão"
          />
        </div>
        <nav className="flex w-full pt-3 justify-center h-full xl:gap-48 gap-6">
          <ul>
            <span>Acesso</span>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Acesso à informação</a>
            </li>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Governo</a>
            </li>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Ouvidoria</a>
            </li>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Transparência</a>
            </li>
          </ul>
          <ul>
            <span>Midias Sociais</span>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Facebook</a>
            </li>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Instagram</a>
            </li>
            <li className="text-zinc-500 hover:text-zinc-200">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </nav>
      </div>
      <h2 className="flex py-2 border-t w-full justify-center items-center text-center">
        Copyright 2023 © Todos os direitos reservados. Governo Digital{" "}
      </h2>
    </div>
  );
}
