import { ComponentType } from 'react'
import { CodePen, Discord, GitHub, LinkedIn, Twitter } from '../icons/'
import { IconProps } from '../icons/types'

const SocialLink: React.FC<{href:string, Icon:ComponentType<IconProps>}> = ({href, Icon}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon className="text-primary w-8" />
    </a>
  )
}

const Footer: React.FC = () => {
  return (
    <div className="flex w-full space-x-4 md:space-x-10 justify-center p-8">
      <SocialLink href="https://www.linkedin.com/in/natancieplinski/" Icon={LinkedIn} />
      <SocialLink href="https://github.com/NatanCieplinski" Icon={GitHub} />
      <SocialLink href="https://twitter.com/NatanCieplinski" Icon={Twitter} />
      <SocialLink href="https://codepen.io/natancieplinski" Icon={CodePen} />
      <SocialLink href="https://discordapp.com/users/827988995060531231" Icon={Discord} />
    </div>
  )
}

export { Footer }