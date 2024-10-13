import React from 'react';

const Background = () => {
  return (
    <>
     <div className='relative w-full h-screen bg-zinc-800 font-sans'>
      <div className="absolute w-full top-[6%] font-semibold text-zinc-700  text-2xl flex justify-center py-11" >Documents</div>
     <h1 className='absolute top-[50%] left-[50%] text-[15vw] font-semibold -translate-x-[50%] -translate-y-[50%]'>Docs</h1>
    </div>
    </>
  );
}

export default Background;
