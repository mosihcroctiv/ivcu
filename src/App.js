import Index from "./views/website";
import About from "./views/website/about"
import { Routes, Route } from 'react-router-dom';
import Gallery from "./views/website/resources/gallery";
import GalleryMore from "./views/website/resources/gallery/gallery";
import Departments from "./views/website/department";
import Media from "./views/website/resources/media";
import Messages from "./views/website/resources/media/messages";
import Message from "./views/website/resources/media/message";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/departments' element={<Departments/>} />
        <Route exact path='/resources/messages' element={<Media/>} />
        <Route exact path='/resources/messages/more' element={<Messages/>} />
        <Route exact path='/resources/messages/id' element={<Message/>} />
        <Route exact path='/resources/gallery' element={<Gallery/>} />
        <Route exact path='/resources/gallery/more' element={<GalleryMore/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
