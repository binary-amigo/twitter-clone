import React from 'react'
import Image from 'next/image'
import { BiMessageRounded } from "react-icons/bi";
import { FaRegBookmark, FaRegHeart, FaRetweet } from "react-icons/fa6";
import { IoIosStats } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';

const FeedCard: React.FC = () => {
    return (
    <div className='border border-l-0 border-r-0 border-b-0 p-5 border-gray-600 p-4 hover:bg-slate-800 cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image 
                src="https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png"
                alt="user-img"
                height={50}
                width={50}
                />
            </div>
            <div className='col-span-11 '>
                <h5>Imran Khan</h5>
                <p>Day 17 of #100DaysOfCode

                    1. Solved Leetcode POTD ✅
                    2. Dijkstra Algorithm ✅
                </p>
                <div className='flex justify-between text-xl items-center pt-5 '>
                    <div>
                    <BiMessageRounded/>
                    </div>
                    <div>
                        <FaRetweet/>
                    </div>
                    <div>
                        <FaRegHeart />
                    </div>
                    <div>
                        <IoIosStats />
                    </div>
                    <div className='flex gap-2'>
                        <FaRegBookmark />
                        <MdOutlineFileUpload />
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
};



export default FeedCard;