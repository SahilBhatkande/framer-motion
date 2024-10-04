import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { motion } from 'framer-motion';

function Card({ data }) {
  return (
    <motion.div 
    drag 
  dragElastic={0.2} // Adjust this for tighter or looser dragging
  dragMomentum={true} // Enable momentum for smoother movement
  transition={{ type: "spring", stiffness: 300, damping: 20 }} // Modify stiffness and damping
  className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }}
    >
      <FaRegFileAlt className='text-3xl' />
      <p className='text-sm leading-tight mt-5 font-semibold'>
        {data.desc}
      </p>
      <div className='absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3'>
          <h5 className='text-sm'>{data.fileSize}</h5>
          <LuDownload className='text-xl' />
        </div>
        {data.tag.isOpen && (
          <div className='w-full py-4 bg-green-600 flex items-center justify-center rounded-b-[50px]'>
            <h3 className='text-sm'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
