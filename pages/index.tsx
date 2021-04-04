import { GlobalMeta, Bio } from '../components/sections'

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <GlobalMeta />
      <Bio /> 
    </div>
  )
}

export default Home