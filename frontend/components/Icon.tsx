import React from 'react'

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden={true}
      css={{ verticalAlign: 'text-bottom' }}
      {...props}
    />
  )
}

export const EllipsesIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <Icon {...props}>
      <circle cx="1.5" cy="7.5" r="1.5" />
      <circle cx="7.5" cy="7.5" r="1.5" />
      <circle cx="13.5" cy="7.5" r="1.5" />
    </Icon>
  )
}

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <Icon {...props}>
      <path d="M15,3a1,1,0,0,1-1,1H2A1,1,0,0,1,2,2H5V1A1,1,0,0,1,6,0h4a1,1,0,0,1,1,1V2h3A1,1,0,0,1,15,3Zm-1.76,9.42L14,7.14a1,1,0,1,0-2-.28l-.76,5.28a1,1,0,0,1-1,.86H5.73a1,1,0,0,1-1-.86L4,6.86a1,1,0,0,0-2,.28l.76,5.28a3,3,0,0,0,3,2.58h4.54A3,3,0,0,0,13.24,12.42Z" />
    </Icon>
  )
}

export default Icon
