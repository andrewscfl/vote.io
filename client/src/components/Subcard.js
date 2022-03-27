import React from 'react'

export default function Subcard(props) {
  return (
  // <>
    <div className='vote'>
        <div className ='voteTitleSub'>{props.subtitle}</div>
        <div className ='voteTable voteContent' >
          <table>
              <tr>
                <td>
                  <label for="item1">{props.name1}:</label>
                  <input type="checkbox" name="item1" id="item1"/>
                  {/* <p>Votes: {props.votesP1}</p> */}
                </td>
              </tr>
              <tr>
              <td>
                  <label for="item2">{props.name2}:</label>
                  <input type="checkbox" name="item2" id="item2"/>
                  {/* <p>Votes: {props.votesP2}</p> */}
                </td>
              </tr>
              <tr>
              {/* <td>
                  <label for="item3">{props.name3}:</label>
                  <input type="checkbox" name="item3" id="item3"/>
                </td> */}
              </tr>
          </table>
         </div>
    </div>
  
  // </>  

  )
}