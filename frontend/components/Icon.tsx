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

export const ChevronLeftIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <Icon {...props}>
      <path d="M10.7071 2.29289C11.0976 2.68342 11.0976 3.31658 10.7071 3.70711L6.41421 8L10.7071 12.2929C11.0976 12.6834 11.0976 13.3166 10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289L9.29289 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289Z" />
    </Icon>
  )
}

export const SpinnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <Icon {...props}>
      <path d="M6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346625 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87104 16 6.41775 16 8C16 8.55229 15.5523 9 15 9C14.4477 9 14 8.55229 14 8C14 6.81332 13.6481 5.65328 12.9888 4.66658C12.3295 3.67989 11.3925 2.91085 10.2961 2.45673C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66558 2.3468 4.59648 2.91825 3.75736 3.75736C2.91825 4.59648 2.3468 5.66558 2.11529 6.82946C1.88378 7.99335 2.0026 9.19975 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888C5.65328 13.6481 6.81332 14 8 14C8.55229 14 9 14.4477 9 15C9 15.5523 8.55229 16 8 16C6.41775 16 4.87104 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346625 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721Z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 8 8"
          to="360 8 8"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </Icon>
  )
}

export default Icon
