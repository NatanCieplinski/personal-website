import { HighlightedLink, HighlightedText } from '../shared'

const Bio: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen px-10 md:px-20 lg:px-40 space-y-20 md:space-y-40 text-2xl md:text-4xl lg:text-5xl font-light">
      <div className="flex space-x-4">
        <span>
          Hi there, I&apos;m <span className="font-medium">Natan!</span>
        </span> 
        <img src="/images/wave.gif" className="h-12"/>
      </div>
      <p className="md:pr-10 lg:pr-40">
        I&apos;m a <HighlightedText>frontend software engineer</HighlightedText> located in Italy with a passion for User Experience and Human Computer Interaction. 
      </p>
      <div>Let&apos;s get in touch 👉 <HighlightedLink href="mailto:natan.cieplinski.developer@gmail.com" className="text-lg md:text-3xl lg:text-4xl">natan.cieplinski.developer@gmail.com</HighlightedLink> </div>
    </div>
  )
}

export { Bio }