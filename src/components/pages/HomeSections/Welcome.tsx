import { FC } from "react";
import scss from "./Welcome.module.scss";

const Welcome: FC = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>Welcome</div>
      </div>
    </section>
  );
};

export default Welcome;
