import React from "react";

const ProjectLayout = ({ layout, media }) => {
  let LayoutComponent;

  if (layout === "List") {
    LayoutComponent = ModeListLayout;
  } else if (layout === "Grid") {
    LayoutComponent = ModeGridLayout;
  } else if (layout === "Square") {
    LayoutComponent = ModeSquareLayout;
  } else {
    LayoutComponent = ModeSingleLayout;
  }

  return (
    <div className="project-layout flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
      <div className="container">
        <LayoutComponent media={media} />
      </div>
    </div>
  );
};

const ModeSingleLayout = ({ media }) => {
  let additionalImages = null;

  if (Array.isArray(media)) {
    // Cas où media est un tableau avec plusieurs images
    additionalImages = <img src={media[0]} alt="Media" />;
  } else {
    // Cas où media est une seule image
    additionalImages = <img src={media} alt="Media" />;
  }

  return (
    <figure className="w-full drop-shadow-xl justify-center">
      {additionalImages}
    </figure>
  );
};

const ModeListLayout = ({ media }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-2 justify-center">
      {media.map((image, index) => (
        <img key={index} src={image} alt={`Media ${index + 1}`} />
      ))}
    </div>
  );
};

const ModeGridLayout = ({ media }) => {
  const additionalImages = media.length === 5 && (
    <>
      <img src={media[3]} alt="Media 4" className="lg:hidden" />
      <img src={media[4]} alt="Media 5" className="lg:hidden" />
    </>
  );

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 justify-center">
      <img src={media[0]} alt="Media 1" />
      <img src={media[1]} alt="Media 2" />
      <div className="aspect-square overflow-hidden col-span-2 hidden lg:block">
        <img src={media[2]} alt="Media 3" className="object-cover" />
      </div>
      {additionalImages}
    </div>
  );
};

const ModeSquareLayout = ({ media }) => {
  return (
    <div className="w-full">
      {Array.isArray(media) && typeof media[0] === "string" ? (
        <figure className="aspect-square overflow-hidden justify-center">
          <img src={media[0]} alt="Media" className="object-cover" />
        </figure>
      ) : (
        <>
          <div className="lg:block hidden" key="media-0">
            {media[0]}
          </div>
          <figure
            className="aspect-square overflow-hidden justify-center lg:hidden"
            key="media-1"
          >
            <img src={media[1]} alt="Media" className="object-cover" />
          </figure>
        </>
      )}
    </div>
  );
};

export default ProjectLayout;
