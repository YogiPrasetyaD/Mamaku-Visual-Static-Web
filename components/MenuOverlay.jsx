import React from 'react'
import NavLink from './NavLink'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const ProjectCategories = [
  {
    value : "ALL",
    label : "ALL PROJECTS",
    path : "/projects"
  },
  { value: "CULTURE", 
    label: "CULTURE", 
    path: "/projects?category=culture" 
  },
  { value: "RESIDENT", 
    label: "RESIDENT", 
    path: "/projects?category=resident" 
  },
  { 
    value: "INTERIOR", 
    label: "INTERIOR", 
    path: "/projects?category=interior" 
  },
  { 
    value: "INFRASTRUCTURE", 
    label: "INFRASTRUCTURE", 
    path: "/projects?category=infrastructure" 
  },
  { 
    value: "SPACE", 
    label: "SPACE", 
    path: "/projects?category=space" 
  }
]

const MenuOverlay = ({ links }) => {
  const handleCategoryChange = (category) => {
    console.log('Selected category:', category);
  }

  return (
    <div className='bg-white shadow-lg rounded-lg border border-gray-200 md:hidden w-[160px] absolute top-full right-4 mt-1'>
      <div className='p-1'>
        {links.map((link, index) => (
          <div key={index}>
            {link.hasDropdown ? (
              // PROJECTS dengan Submenu
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center justify-center w-full px-2 py-4 text-xs text-gray-700 rounded hover:bg-gray-50 cursor-pointer focus:outline-none focus:bg-gray-50 transition-colors duration-150">
                    {link.title}
                    <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>
                
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="w-[140px] bg-white rounded-lg p-1 shadow-lg border border-gray-200 z-50"
                    sideOffset={2}
                    align="start"
                    side="right"
                    avoidCollisions={true}
                    collisionPadding={16}
                  >
                    {ProjectCategories.map((category) => (
                      <DropdownMenu.Item 
                        key={category.value}
                        className="flex items-center px-2 py-1.5 text-xs text-gray-700 rounded hover:bg-gray-50 cursor-pointer focus:outline-none focus:bg-gray-50 transition-colors duration-150"
                        onClick={() => handleCategoryChange(category)}
                      >
                        <span className="truncate">{category.label}</span>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              // Menu biasa (HOME, ABOUT, CONTACT)
              <div className='px-2 py-1.5 rounded hover:bg-gray-50 transition-colors duration-150'>
                <NavLink href={link.path} title={link.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuOverlay