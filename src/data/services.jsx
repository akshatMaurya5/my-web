import React from "react";
import { MdWeb } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default [
  {
    title: "Leetcode",
    icon: <MdWeb className="w-full h-full" />,
    link: "https://leetcode.com/tirederit_5/",
    description: (
      <ul>
        <li>• Knight Badge with rating of 1900+</li>
        <li>• 1200+ problems solved</li>
      </ul>
    )
  },
  {
    title: "Codeforces",
    icon: <FaHandHoldingHeart className="w-full h-full" />,
    link: "https://codeforces.com/profile/alchemist_5",
    description: (
      <ul>
        <li>• Specialist with raing of 1450+ </li>
        <li>• 800+ problems solved</li>
      </ul>
    )
  },
  {
    title: "Codechef",
    icon: <VscCode className="w-full h-full" />,
    link: "https://www.codechef.com/users/tirederit",
    description: (
      <ul>
        <li>• 3 🌟 at CODECHEF. </li>
        <li>• 100+ problems solved</li>
      </ul>
    )
  }
];
