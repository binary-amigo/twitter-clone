import Image from "next/image";
import {FaXTwitter} from 'react-icons/fa6';
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { LuSquareSlash } from "react-icons/lu";
import { IoMdListBox } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"]});

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <IoMdHome/>
  },
  {
    title: 'Explore',
    icon: <IoIosSearch/>
  },
  {
    title: 'Notifications',
    icon: < GoBell/>
  },
  {
    title: 'Messages',
    icon: <CiMail/>
  },
  {
    title: 'Grok',
    icon: <LuSquareSlash/>
  },
  {
    title: 'List',
    icon: <IoMdListBox/>
  },
  {
    title: 'Bookmark',
    icon: <CiBookmark/>
  },
  {
    title: 'Community',
    icon: <BsPeople/>
  },
  {
    title: 'Premium',
    icon: <FaXTwitter/>
  },
  {
    title: 'Profile',
    icon: <IoPersonOutline/>
  },
  {
    title: 'More',
    icon: <CiCircleMore/>
  }
]
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen pl-28">
        <div className="col-span-3 ">
          <div className="text-3xl h-fit hover:bg-gray-600 rounded-full p-4 pb-0 cursor-pointer transition-all w-fit">

          <FaXTwitter />
          </div>
          <div className="mt-4 text-xl font-light pr-4 ">
            <ul >
              {sidebarMenuItems.map(item => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-3 py-2 w-fit cursor-pointer mt-2 " key={item.title}>
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>))}
            </ul>
            <button className="bg-[#1d9bf0] text-lg font-semibold p-4 mt-5 rounded-full w-[70%] ">
              Post
              </button>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px]h-screen  overflow-y-auto no-scrollbar border-gray-600 ">
          <div className="grid grid-cols-4 justify-between pl-5 p-3 ">
          <div className="hover:bg-gray-600">
            For you
          </div>
          <div className="hover:bg-gray-600">
            Following
          </div>
          <div className="hover:bg-gray-600">
            Matching Tech Ideas & People
          </div>
          <div className="text-xl">
          <IoSettingsOutline />
          </div>
          </div>
          
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>


        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
