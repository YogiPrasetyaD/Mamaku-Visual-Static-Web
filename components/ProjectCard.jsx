import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ 
  logo, 
  title, 
  category, 
  location, 
  imgUrl, 
  onClick, 
  size = "small" // default kecil untuk grid
}) => {
  // Atur style sesuai size
  const imageSize = size === "large" 
    ? "w-full h-auto object-contain" 
    : "w-112 h-75";

  const containerSize = size === "large" 
    ? "flex flex-col items-start w-full max-w-full sm:max-w-[480px] md:max-w-[720px]" 
    : "flex flex-col items-start mb-1";

  // Style untuk teks dan logo
  const logoSize = size === "large" ? "w-16 h-16" : "w-12 h-12";
  const categoryText = size === "large" ? "text-body-sm-14" : "text-body-xs-12";
  const titleText = size === "large" ? "text-body-md-16" : "text-body-sm-14";

  return (
    <div onClick={onClick} className={containerSize}>
      {/* Cover Image */}
      <Image
        src={imgUrl}
        alt={`${title} Image`}
        width={size === "large" ? 720 : 400}
        height={size === "large" ? 500 : 300}
        className={imageSize}
      />

      {/* Logo + Info */}
      <div className="flex items-center gap-4 mt-2 w-full">
        {/* Logo */}
        <Image
          src={logo}
          alt={`${title} Logo`}
          width={size === "large" ? 64 : 50}
          height={size === "large" ? 64 : 50}
          className={`${logoSize} object-contain`}
        />

        {/* Info */}
        <div className="flex flex-col w-full">
          <div className={`flex flex-row justify-between text-dev-grey ${categoryText}`}>
            <span>{category}</span>
            <span>{location}</span>
          </div>
          <h5 className={`font-medium text-dev-black truncate mt-1 ${titleText}`}>
            {title}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
