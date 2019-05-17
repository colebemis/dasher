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

export const IssueIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <Icon {...props}>
      <path
        d="M8,16A8,8,0,1,0,0,8,8,8,0,0,0,8,16Zm0-2A6,6,0,1,0,2,8,6,6,0,0,0,8,14ZM7,5A1,1,0,0,1,9,5V8A1,1,0,0,1,7,8Zm0,6a1,1,0,1,1,1,1A1,1,0,0,1,7,11Z"
        fillRule="evenodd"
      />
    </Icon>
  )
}

export const PullRequestIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <Icon {...props}>
      <path d="M4.85,4.65l3.3-3.3A.5.5,0,0,1,9,1.71V4h3a3,3,0,0,1,3,3v7a1,1,0,0,1-2,0V7a1,1,0,0,0-1-1H9V8.29a.5.5,0,0,1-.85.36l-3.3-3.3A.5.5,0,0,1,4.85,4.65ZM3,14V2A1,1,0,0,0,1,2V14a1,1,0,0,0,2,0Z" />
    </Icon>
  )
}

export const MergeIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <Icon {...props}>
      <path d="M5.71,11.29a1,1,0,0,1,0,1.42l-2,2a1,1,0,0,1-1.42-1.42l2-2A1,1,0,0,1,5.71,11.29Zm8,2L9,8.59V5h2.29a.5.5,0,0,0,.36-.85L8.35.85a.5.5,0,0,0-.7,0l-3.3,3.3A.5.5,0,0,0,4.71,5H7V9a1,1,0,0,0,.29.71l5,5a1,1,0,0,0,1.42-1.42Z" />
    </Icon>
  )
}

export default Icon
