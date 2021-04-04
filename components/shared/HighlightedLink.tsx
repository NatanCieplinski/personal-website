import style from './HighlightedLink.module.css'

const HighlightedLink: React.FC<{ href:string, className?:string }> = ({ className, href, children }) => {
  return (
    <a className={style['highlight-link']} href={href}> 
      <span className={className}>
        { children }
      </span> 
    </a>
  )
}

export { HighlightedLink }