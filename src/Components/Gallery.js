   import React ,{useEffect, useState} from 'react';
   import './style.css';


   function Gallery({url}) {
   
         return (
         <div>
            <div className="responsive">
            <div className="gallery">
          <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Cinque Terre" width="600" height="400"></img></a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>


   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Forest" width="600" height="400"></img></a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>

   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg">
         <img src="Images/new-tiffin-2.jpeg" alt="Northern Lights" width="600" height="400"></img>
      </a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>
   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Forest" width="600" height="400"></img></a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>
   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Forest" width="600" height="400"></img></a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>
   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Forest" width="600" height="400"></img></a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>
   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Forest" width="600" height="400"></img></a>
      <div className="desc" >Add a description of the image here</div>
   </div>
   </div>
   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg"><img src="Images/new-tiffin-2.jpeg" alt="Forest" width="600" height="400"></img></a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>

   <div className="responsive">
   <div className="gallery">
      <a target="_blank" href="Images/new-tiffin-2.jpeg">
         <img src="Images/new-tiffin-2.jpeg" alt="Mountains" width="600" height="400"></img>
      </a>
      <div className="desc">Add a description of the image here</div>
   </div>
   </div>

   <div className="clearfix"></div>

  
      </div>
      );
   }
   
   export default Gallery;