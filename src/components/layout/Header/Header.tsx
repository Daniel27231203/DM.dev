"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { useHeaderStore } from "@/stores/HeaderStore";
import { links } from "@/constants/links";
import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";

const Header: FC = () => {
  const { fixScroll } = useHeaderStore();
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h3>
              MD.<span>dev</span>
            </h3>
            <p>My Journey in Pixels and Code</p>
          </div>
          <div className={scss.rightBlock}>
            <nav>
              {links.map((el) => (
                <ScrollLink
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
            </nav>
            <div className={scss.btnBlock}>
              <button>
                <FiMoon />
              </button>
              <button>
                <CiSun />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
