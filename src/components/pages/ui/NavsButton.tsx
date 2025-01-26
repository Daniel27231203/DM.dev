"use client";
import { FC } from "react";
import scss from "./NavsButton.module.scss";

import { useHeaderStore } from "@/stores/HeaderStore";
import { RiMenuFold3Line } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";

const NavsButton: FC = () => {
  const { isOpen, setIsOpen } = useHeaderStore();
  return (
    <div className={scss.NavsButton}>
      {isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <RiMenuFold4Line />
        </button>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)}>
          <RiMenuFold3Line />
        </button>
      )}
    </div>
  );
};

export default NavsButton;
