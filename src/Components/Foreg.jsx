import React, { useState } from 'react';
import { useRef } from 'react';
import Card from './Card'

const Foreg = () => {
  const ref = useRef(null);
  const data =[
    {
      desc:"Hey this is my react project",
       size:"0.3mb",
       close:false,
       tag:{isopen:true,tagtitle:"Upload",tagcolor:"red"},
        
    },
    {
      desc:"Hii this is very fuuny and dancing project for learnning",
       size:"0.6mb",
       close:true,
       tag:{isopen:false,tagtitle:"Download Now",tagcolor:"green"},
        
    },
    {
      desc:"How is my project Budy like or not ?",
       size:"0.8mb",
       close:true,
       tag:{isopen:true,tagtitle:"Download",tagcolor:"green"},
        
    },
    {
      desc:"Heloo my name is Prakash and iam studies in bppcs at gandhinagar",
       size:"10mb",
       close:false,
       tag:{isopen:true,tagtitle:"Download Now",tagcolor:"green"},
        
    }

  ]
  return (
    <div ref={ref}className='max-[450px]:grid max-[450px]:p-2 max-[750px]:p-4 p-10  absolute z-[3] w-full h-screen bg-zinc-500/50  flex max-[450px]:gap-4 gap-10'>
      {data.map((item,index)=>(
        <Card data={item} refr={ref}/>
      ))}



    </div>
  );
}

export default Foreg;
