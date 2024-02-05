import './App.css';
import lake from "./image/lake.JPG";
import GallaryHeader from './components/GallaryHeader';
import GallaryFooter from './components/GallaryFooter';
import Body from './components/GallaryBody';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <GallaryHeader/> 
      <div>
      <Body imageData={imageData} />
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;