import { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>test</div>
      </div>
    </section>
  );
};

export default Footer;
