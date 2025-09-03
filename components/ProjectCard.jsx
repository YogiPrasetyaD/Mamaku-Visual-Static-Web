import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ 
  logo, 
  title, 
  category, 
  location, 
  imgUrl, 
  onClick, 
  size = "small" // default kecil untuk mobile
}) => {

  // Container: mobile kecil, md+ pakai max-w semula
  const containerSize = size === "large"
    ? "flex flex-col items-start w-full max-w-full sm:max-w-[480px] md:max-w-[720px]" 
    : "flex flex-col items-start mb-4 w-[250px] md:w-full"; // mobile 250px, md+ full width

  // Cover Image: proporsi 3:2 untuk semua size
  const imageClass = "w-full aspect-[3/2] relative shadow-md";

  // Logo
  const logoSize = size === "large" ? "w-16 h-16" : "w-8 h-8 md:w-12 md:h-12"; // mobile kecil, md+ default

  // Teks
  const categoryText = size === "large" ? "text-body-sm-14" : "text-body-xxs-10 md:text-body-xs-12"; // mobile 8px, md+ default
  const titleText = size === "large" ? "text-body-md-16" : "text-body-xxs-10 md:text-body-sm-14"; // mobile 8px, md+ default

  return (
    <div onClick={onClick} className={containerSize}>
      {/* Cover Image */}
      <div className={imageClass}>
         <Image
          src={imgUrl}
          alt={`${title} Image`}
          fill={false}
          width={720}
          height={480}
          className="object-cover w-full h-full"
          sizes={size === "large" ? "(max-width: 768px) 100vw, 720px" : "250px"}
          priority={size === "large"}
          placeholder="blur"
        />
      </div>

      {/* Logo + Info */}
      <div className="flex items-center gap-2 mt-2 w-full"> 
        <Image
          src={logo}
          alt={`${title} Logo`}
          width={size === "large" ? 64 : 32} // mobile kecil
          height={size === "large" ? 64 : 32}
          className={`${logoSize} object-contain`}
        />

        <div className="flex flex-col w-full">
          <div className={`flex justify-between text-dev-grey ${categoryText}`}>
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
