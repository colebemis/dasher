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

export const ExternalLinkIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <Icon {...props}>
      <path d="M15,1.5V6.29a.5.5,0,0,1-.85.36L12.46,5,8.71,8.71a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L11,3.54,9.35,1.85A.5.5,0,0,1,9.71,1H14.5A.5.5,0,0,1,15,1.5ZM15,12V10a1,1,0,0,0-2,0v2a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H6A1,1,0,0,0,6,1H4A3,3,0,0,0,1,4v8a3,3,0,0,0,3,3h8A3,3,0,0,0,15,12Z" />
    </Icon>
  )
}

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <Icon {...props}>
      <path d="M14 8C14 8.55228 13.5523 9 13 9H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H7V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V7H13C13.5523 7 14 7.44772 14 8Z" />
    </Icon>
  )
}

export default Icon
