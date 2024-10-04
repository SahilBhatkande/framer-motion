import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);

  const info = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fileSize: ".4 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green" }
    },
    // Additional card info...
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
