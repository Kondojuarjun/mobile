import React, { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';
import Topbar from './Topbar';
import Filter from './Filter';
import {BlogData} from './utils/commonData';
function App() {

  const [ blogs,setblogs] = useState([]);
  useEffect(() => {
      setblogs(BlogData)
  })


  return (
    <div className="App">
     <Topbar />
     <Filter />
     <div className="blogs">
     {blogs.length && blogs.map(({id,title,description,authorname,small,posted_on}) => 
               <div key={id} className="blog">
                   <img  src={small}/>
                   <h3 className="title">{title}</h3>
                   <h5 className="name">{authorname} <span>| {moment.utc(posted_on).format("DD MMM YYYY" )}</span></h5>
                   <p className="description">{description}</p>
                   </div>
           )}  
     </div>
    

    </div>);
}

export default App;
