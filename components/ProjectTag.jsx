import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-dev-black border-b-1 border-dev-black" : "text-dev-grey hover:text-dev-black";
    return (
        <button onClick={() => onClick(name)} className={`text-body-xs-12 font-normal ${buttonStyles} flex items-center justify-center gap-2 py-2 px-4`}>
            {name}
        </button>
    )
}

export default ProjectTag
