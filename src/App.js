import Index from "./views/website";
import About from "./views/website/about"
import { Routes, Route } from 'react-router-dom';
import Gallery from "./views/website/resources/gallery";
import GalleryMore from "./views/website/resources/gallery/gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/departments' element={<Index/>} />
        <Route exact path='/resources/messages' element={<Index/>} />
        <Route exact path='/resources/gallery' element={<Gallery/>} />
        <Route exact path='/resources/gallery/more' element={<GalleryMore/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
