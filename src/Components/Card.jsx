import React from 'react';
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import {IoClose} from "react-icons/io5"
// React
import { motion } from "framer-motion"



const Card = ({data,refr}) => {
 let a = data.tag.tagcolor
 
  return (
    <motion.div drag dragConstraints={refr} whileDrag={{scale:1.1}} dragElastic={1.2} dragTransition={{bounceStiffness:100,bounceDamping:10}} className=' duration-[0.5s]  max-[650px]:w-[10rem] max-[650px]:h-[14rem]  max-[450px]:w-[11rem] max-[450px]:h-[15rem] relative w-60 h-[19rem] max-[450px]:py-3 bg-zinc-900/90 text-white rounded-[20px] px-4 py-10 overflow-hidden'>
      <FaFileLines />
      <p className='h-[80px] overflow-hidden max-[650px]:text-[0.8rem] max-[450px]:text-[1rem] text-xl mt-2 font-semibold '>{data.desc}</p>
      <div className='absolute h-[3rem] w-full  bottom-0 left-0 mb-[16px] '>
        <div className=' flex justify-between items-center px-3 py-1'>
          <h4>{data.size}</h4>
          <span className='w-7 h-7 bg-zinc-300 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose/>:<LuDownload />}
          </span>
        </div>{data.tag.isopen && <div className="tag w-full h-[20vw] bg-green-400 px-3 flex justify-center text-center">
          <h2 className='font-bold text-white'>{data.tag.tagtitle}</h2>
        </div>}
        
      </div>
    </motion.div>
  );
}

export default Card;
