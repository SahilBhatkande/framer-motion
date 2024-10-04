import React, { useRef, useState } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null); // You may use this ref for further enhancements

  const info = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fileSize: ".4 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green" }
    },
    {
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fileSize: ".5 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green" }
    },
   
   
  ];

  return (
    <div ref={ref} className='flex flex-wrap gap-5 justify-center'>
      {info.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default Foreground;
