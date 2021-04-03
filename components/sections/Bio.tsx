import { HighlightedLink, HighlightedText } from '../shared'

const Bio: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-4 md:py-30 lg:py-60 lg:px-40 text-5xl font-light">
      <div className="flex space-x-4">
        <span>
          Hi there, I&apos;m <span className="font-medium">Natan!</span>
        </span> 
        <img src="/images/wave.gif" className="h-12"/>
      </div>
      <p className="pr-40">
        I&apos;m a <HighlightedText>frontend software engineer</HighlightedText> located in Italy with a passion for User Experience and Human Computer Interaction. 
      </p>
      <div className="text-4xl">Let&apos;s get in touch 👉 <HighlightedLink href="mailto:natan.cieplinski.developer@gmail.com">natan.cieplinski.developer@gmail.com</HighlightedLink> </div>
    </div>
  )
}

export { Bio }