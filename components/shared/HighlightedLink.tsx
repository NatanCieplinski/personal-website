import style from './HighlightedLink.module.css'

const HighlightedLink: React.FC<{ href:string }> = ({ href, children }) => {
  return <a className={style['highlight-link']} href={href}>{ children }</a>
}

export { HighlightedLink }