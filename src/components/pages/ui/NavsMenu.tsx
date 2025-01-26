"use client";
import { FC } from "react";
import scss from "./NavsMenu.module.scss";
import { links } from "@/constants/links";
import { Link as ScrollLink } from "react-scroll";
import { useHeaderStore } from "@/stores/HeaderStore";

const NavsMenu: FC = () => {
  const { fixScroll } = useHeaderStore();
  return (
    <div className={scss.NavsMenu}>
      {links.map((el, index) => (
        <ScrollLink
          key={index}
          onClick={fixScroll}
          className={scss.link}
          to={el.to}
          spy={el.spy}
          smooth={el.smooth}
          offset={el.offset}
          duration={el.duration}
          activeClass={scss.active}
        >
          <span>{el.icon}</span> <h1>{el.name}</h1>
        </ScrollLink>
      ))}
    </div>
  );
};

export default NavsMenu;
