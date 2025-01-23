import { FC } from "react";
import scss from "./Skils.module.scss";

const Skils: FC = () => {
  return (
    <section id="skils" className={scss.Skils}>
      <div className="container">
        <div className={scss.content}>Skils</div>
      </div>
    </section>
  );
};

export default Skils;
