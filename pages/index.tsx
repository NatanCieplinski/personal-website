import { GlobalMeta, Bio, Footer } from '../components/sections'

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <GlobalMeta />
      <Bio /> 
      <Footer />
    </div>
  )
}

export default Home