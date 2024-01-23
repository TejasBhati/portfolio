import React from 'react'
import Image from 'next/image'
const DevloperImage = ({containerStyles,imageSrc}) => {
  return (
    <div className={`${containerStyles}`}>
        <Image src={imageSrc} fill priority alt='' />
    </div>
  )
}

export default DevloperImage