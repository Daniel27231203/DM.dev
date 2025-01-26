"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { useHeaderStore } from "@/stores/HeaderStore";
import { links } from "@/constants/links";
import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";
import NavsButton from "@/components/pages/ui/NavsButton";
import NavsMenu from "@/components/pages/ui/NavsMenu";

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { fixScroll, isOpen } = useHeaderStore();

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => window.removeEventListener("resize", changeIsMobile);
  }, []);

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
            {isMobile ? (
              <>
                <div className={scss.btnBlock}>
                  <button>
                    <FiMoon />
                  </button>
                  <button>
                    <CiSun />
                  </button>
                </div>
                <NavsButton />
              </>
            ) : (
              <nav>
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
              </nav>
            )}
            {isMobile ? null : (
              <div className={scss.btnBlock}>
                <button>
                  <FiMoon />
                </button>
                <button>
                  <CiSun />
                </button>
              </div>
            )}
            {isOpen && isMobile ? <NavsMenu /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
