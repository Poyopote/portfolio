import React from 'react';

const ProjectLayout = ({ layout, media }) => {
  
if (layout === "solitary"){

  let additionalImages = null;

  if (Array.isArray(media)) {
    // Cas où media est un tableau avec plusieurs images
    additionalImages = (
      <img src={media[0]} alt="Media" />
    );
  } else {
    // Cas où media est une seule image
    additionalImages = (
      <img src={media} alt="Media" />
    );
  }
  

  return (
    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
      <div className='container' >
          <figure className="w-full drop-shadow-xl">
          {additionalImages}
              
          </figure>
      
      </div>
      
    </div>
  );
}

if (layout === 'list') {

  return (

    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
    <div className='container' >
        <figure className="w-full grid grid-cols-1 gap-2">
        {media.map((image, index) => (
          <img key={index} src={image} alt={`Media ${index + 1}`} />
        ))}
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
  let additionalImages = null;

  if (Array.isArray(media)) {
    // Cas où media est un tableau avec plusieurs images
    additionalImages = (
      <figure className="w-full grid grid-cols-2 gap-2">
        {media.map((image, index) => (
          <img key={index} src={image} alt={`Media ${index + 1}`} />
        ))}
      </figure>
    );
  } else {
    // Cas où media est une seule image
    additionalImages = (
      <figure className="w-full">
        <div className="aspect-square overflow-hidden">
          <img src={media} alt="Image" className="object-cover" />
        </div>
      </figure>
    );
  }

  return (
    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
      <div className="container">{additionalImages}</div>
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