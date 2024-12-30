import { MdHome } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";


export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionSimpleFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiMovie />,
  },
];

export const mobileNavigation = [
  {
    label: "home",
    href: "/",
    icon: <MdHome />,
  },
  ...navigation,
  {
    label: 'search',
    href: '/search',
    icon: <IoSearch/>
  }
];
