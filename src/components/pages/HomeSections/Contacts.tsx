import { FC } from "react";
import scss from "./Contacts.module.scss";

const Contacts: FC = () => {
  return (
    <section id="contacts" className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>Contacts</div>
      </div>
    </section>
  );
};

export default Contacts;
