import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "About Us",
	path: "/about-us",
	icon: <AiIcons.AiFillHome />,
},
{
	title: "View Order Requests",
	path: "/viewsellerorders",

	icon: <IoIcons.IoIosPaper />,
},
{
	title: "Add Plan",
	path: "/addplan",
	icon: <FaIcons.FaEnvelopeOpenText />,
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},

{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
