import React, { useState, useEffect } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

const ProjectLayout = ({ layout, media }) => {
  
if (layout === "solitaire" || media.length === 1){
  return (
    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
      <div className='container' >
          <figure className="w-full drop-shadow-xl">
                <img
                className="carousel-image"
                src={media}
                alt=""
              />
              <figcaption><a href={media} target='_blank'  rel="noreferrer" >Voir média <ArrowTopRightOnSquareIcon className='inline-block h-6 w-6'/> </a></figcaption>
              
              
          </figure>
      
      </div>
      
    </div>
  );
}

if (layout === 'vent') {
  return (


    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
    <div className='container' >
        <figure className="w-full ">
          <img src={media[0]} alt="Media 1" />
          <img src={media[1]} alt="Media 2" />
        </figure>
    
    </div>
    
  </div>

  );
}
if (layout === 'froid') {
  let additionalImages = null;

  if (media.length === 5) {
    additionalImages = (
      <>
        <img src={media[3]} alt="Media 4" className='lg:hidden'/>
        <img src={media[4]} alt="Media 5" className='lg:hidden'/>
      </>
    );
  }

  return (
    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
      <div className='container' >
        <figure className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2">
          <img src={media[0]} alt="Media 1" />
          <img src={media[1]} alt="Media 2" />
          <div className="aspect-square overflow-hidden col-span-2 hidden lg:block">
            <img src={media[2]} alt="Media 3" className='object-cover'/>
          </div>
          {additionalImages}
        </figure>
      </div>
    </div>
  );
}



if (layout === 'carrer') {
  return (


    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
    <div className='container' >
        <figure className="w-full">
        <div className="aspect-square overflow-hidden">
  <img src={media} alt="Image" className="object-cover" />
</div>

        </figure>
    
    </div>
    
  </div>

  );
}

if (layout === 'pic') {
  return (


    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
    <div className='container' >
        <figure className="w-full grid grid-cols-4 gap-2">
          {/* <img src={media[0]} alt="Media 1" className='col-span-4'/> */}
          
          <img src={media[2]} alt="Media 2" className='col-span-2'/>
          <img src={media[3]} alt="Media 2" className='col-span-2'/>
          <img src={media[1]} alt="Media 2" className='col-span-4'/>
        </figure>
    
    </div>
    
  </div>

  );
}

return (
  <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
    <div className='container' >
        <figure className="w-full drop-shadow-xl">
          
        </figure>
    
    </div>
    
  </div>
);
};

export default ProjectLayout;