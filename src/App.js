import Index from "./views/website";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/departments' element={<Index/>} />
        <Route exact path='/resources/messages' element={<Index/>} />
        <Route exact path='/resources/gallery' element={<Index/>} />
        <Route exact path='/about' element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
