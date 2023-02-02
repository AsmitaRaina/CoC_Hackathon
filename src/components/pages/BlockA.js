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
      <h2>Block A: VJTI Girls Hostel</h2>
      <br/>
      This is the First Girl's hostel in VJTI.
      <br />
      The A block of VJTI was constructed back in the year 1923, thus making it a State Government Heritage site
      <br />
      <br />
      There are total 48 Rooms, and a student has to share it with two other students.
      <br />
      You can see Dadar station, eastern expressway, Monorail, ICT, Kings circle
      station from this block.
    </p>
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
              <br/>
              <br/>
  </div>
</>

    );
}