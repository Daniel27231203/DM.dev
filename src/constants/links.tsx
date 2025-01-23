import { GoHomeFill } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { PiProjectorScreenChartFill } from "react-icons/pi";

const optionsScroll = {
  spy: true,
  smooth: true,
  offset: -100,
  duration: 500,
};
export const links: ILinks[] = [
  {
    name: "Home",
    href: "/",
    to: "home",
    icon: <GoHomeFill />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: 0,
    duration: optionsScroll.duration,
  },
  {
    name: "Skils",
    href: "/",
    to: "skils",
    icon: <GiSkills />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: optionsScroll.offset,
    duration: optionsScroll.duration,
  },
  {
    name: "projects",
    href: "/",
    to: "projects",
    icon: <PiProjectorScreenChartFill />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: optionsScroll.offset,
    duration: optionsScroll.duration,
  },
  {
    name: "Contact",
    href: "/",
    to: "contacts",
    icon: <MdContactPhone />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: optionsScroll.offset,
    duration: optionsScroll.duration,
  },
];
