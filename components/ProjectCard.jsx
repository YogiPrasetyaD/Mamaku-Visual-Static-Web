import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ logo, title, category, location, imgUrl, onClick, images, descriptions, map }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-start rounded-lg mb-1">
      {/* Gambar di atas */}
      <Image
        src={imgUrl}
        alt={`${title} Image`}
        width={400}
        height={200}
      />

      {/* Logo + Info */}
      <div className="flex items-center gap-4 mt-2 w-full">
        {/* Logo */}
        <Image
          src={logo}
          alt={`${title} Logo`}
          width={50}
          height={50}
          className="w-12 h-12 object-contain"
        />

        {/* Info: Title, Category, Location */}
        <div className="flex flex-col w-full">
          {/* Category & Location sejajar */}
          <div className="flex flex-row justify-between text-dev-grey text-body-xs-12">
            <span>{category}</span>
            <span>{location}</span>
          </div>

          {/* Title */}
          <h5 className="font-medium text-body-sm-14 text-dev-black truncate mt-1">
            {title}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
