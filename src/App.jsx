import React from  'react';
import './App.css';
import Banner from './component/banner';
import { Latest ,TopRate,Popular} from './component/imagelink';
import Moviecard from './component/Moviecard';
import Navbar from './component/navbar';


function App() {
  return (
    <div className="App">
 <Navbar/>
 <Banner/>
 <Moviecard title="Latest" url={Latest} />
 <Moviecard title="TopRate" url={TopRate}/>
 <Moviecard title="Popular" url={Popular}/>
    </div>
  );
}

export default App;