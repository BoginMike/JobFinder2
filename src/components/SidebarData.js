import React from "react";
// import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import * as SiIcons from "react-icons/si";
// import * as GrIcons from "react-icons/gr";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
// function WhiteIcon() {
//   return (
//     <IconContext.Provider value={{ color: "red" }}>
//       <div>
//         <GrIcons.GrUserWorker />
//       </div>
//     </IconContext.Provider>
//   );
// }

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "JobTypes",
    path: "/jobtypes",
    icon: <FaIcons.FaPeopleCarry />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <FaIcons.FaPeopleCarry />,
    cName: "nav-text",
  },
  {
    title: "Location",
    path: "/location",
    icon: <FaIcons.FaLocationArrow />,
    cName: "nav-text",
  },
  {
    title: "Qualifications",
    path: "/qualifications",
    icon: <FaIcons.FaQuestion />,
    cName: "nav-text",
  },
  {
    title: "ExperienceLevel",
    path: "/experiencelevel",
    icon: <GiIcons.GiStairsGoal />,
    cName: "nav-text",
  },
  {
    title: "Education",
    path: "/education",
    icon: <IoIcons.IoIosSchool />,
    cName: "nav-text",
  },
  {
    title: "DatePosted",
    path: "/dateposted",
    icon: <BsIcons.BsCalendar />,
    cName: "nav-text",
  },
  {
    title: "SalaryRange",
    path: "/salaryrange",
    icon: <MdIcons.MdAttachMoney />,
    cName: "nav-text",
  },
  {
    title: "Searches",
    path: "/searches",
    icon: <MdIcons.MdSearch />,
    cName: "nav-text",
  },
  {
    title: "Zip",
    path: "/zips",
    icon: <MdIcons.MdZoomIn />,
    cName: "nav-text",
  }
  // {
  //   title: 'AIEngine',
  //   path: "/aiengine",
  //   icon: <TbIcons. />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Reports',
  //   path: '/reports',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
