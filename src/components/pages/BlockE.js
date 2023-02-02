import React from 'react';
import './BlockE.css'
import blockA1 from './blockA1.jpeg'
import blockA2 from './blockA2.jpeg'
import blockA3 from './blockA3.jpeg'
import blockA4 from './blockA4.jpeg'
import blockE1 from './blockE1.jpeg'
export default function BlockE(){
    return(
        <>
 
  <div id="slider">
    <figure>
      <img src={blockA1}  alt='Blockimgs'/>
      <img src={blockA2}  alt='Blockimgs'/>
      <img src={blockA3} alt='Blockimgs'/>
      <img src={blockA4}  alt='Blockimgs'/>
      <img src={blockE1}  alt='Blockimgs'/>

    </figure>
  </div>
  <div className="modal-header" >
    <p>
      <h2>Block E: VJTI Girls Hostel</h2>
      <br/>
      This is the most recently built hostel in VJTI. It is entirely reserved
      for girls.
      <br />
  
      There are 7 floors. Each floor accommodates 16 rooms.
      <br />
      <br />
      The ground floor has a huge hall for messes.
      <br />
      One of the most striking feature of this hostel is that, it has a Lift
      service.
      <br />
      The entire floor is equipped with a powerful fire alarm water injection
      systems.
      <br />
      Speaking about connectivity, the college is providing a LAN with a
      Mega-router (CISCO Eight Antenna) facility which has a maximum speed of 6
      Mbps.
      <br />
      The flooring is polished granite.
      <br />
      <br />
      You can see Dadar station, eastern expressway, Monorail, ICT, Kings circle
      station from this block.
      <br/>
       <br/>
        <br/>
         <br/>
          <br/>
           <br/> 
           <br/>
            <br/>
             <br/>
              <br/>
    </p>
  </div>
</>

    );
}