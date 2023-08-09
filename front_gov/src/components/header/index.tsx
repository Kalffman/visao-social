import { faArrowLeft, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useContextAuth } from "../../context/auth";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isHiddenDropDownUser, setIsHiddenDropDownUser] = useState(false);
  const { logout, user } = useContextAuth();

  return (
    <header className="flex w-full items-center justify-between px-6 bg-[#FDFDFD] h-16 text-zinc-500">
      <img src="./assets/icons/brasaoLogoDark.png" alt="logo" />
      <button
        className="xl:hidden"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      <nav
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-right="true"
        className={`max-xl:fixed max-xl:right-0 gap-6 max-xl:p-6  top-0 z-[1035] flex max-xl:flex-col max-xl:h-screen max-xl:w-60  max-xl:bg-[#FDFDFD] max-xl:shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]  ease-in-out duration-1000
        ${isSideBarOpen ? "max-xl:translate-x-0" : "max-xl:translate-x-full"}`}
      >
        {isSideBarOpen ? (
          <button
            className="absolute  right-3 top-3"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
            <span>
              <FontAwesomeIcon icon={faX} color="red" />
            </span>
          </button>
        ) : null}
        <a className="text-zinc-500 hover:text-zinc-200" href="#">
          Acesso à informação
        </a>
        <a className="text-zinc-500 hover:text-zinc-200" href="#">
          Governo
        </a>
        <a className="text-zinc-500 hover:text-zinc-200" href="#">
          Ouvidoria
        </a>
        <a className="text-zinc-500 hover:text-zinc-200" href="#">
          Transparência
        </a>
        {user && (
          <>
            <div className="relative inline-block text-left">
              <div
                onClick={() => {
                  setIsHiddenDropDownUser(!isHiddenDropDownUser);
                }}
              >
                <FontAwesomeIcon
                  className="hover:text-zinc-300"
                  icon={faCircleUser}
                  size="xl"
                />
              </div>

              <div
                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                ${isHiddenDropDownUser ? "" : "hidden"}
                `}
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                onClick={() => {
                  setIsHiddenDropDownUser(!isHiddenDropDownUser);
                }}
              >
                <div className="p-1" role="none">
                  <ul onMouseLeave={() => setIsHiddenDropDownUser(!isHiddenDropDownUser) } className="">
                    <li>
                      {" "}
                      <button
                        onClick={logout}
                        className="text-red-600 text-left gap-4 flex items-center w-full justify-between px-4"
                      >
                        <FontAwesomeIcon size="xl" icon={faArrowLeft} />
                        <span className="text-base font-bold">Deslogar-se</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
