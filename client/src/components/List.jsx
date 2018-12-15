import React from 'react';
import EntryView from './EntryView.jsx';

const List = (props) => {
 
    return (
      <div className="List">
        {/* <div>{props.repos[1].username}</div> */}
        {
          props.repos.map((singleRepo, index) => { 
            return <EntryView singleRepo={singleRepo} key={index}/>
          })
        }
      </div>
    )
   
}

export default List; 