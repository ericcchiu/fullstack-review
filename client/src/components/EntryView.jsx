import React from 'react';

const EntryView = (props) => {
  
  const style = { 
    backgroundColor: 'lightblue', 
    borderRadius: '4px',
    border: '2px solid black'
  }
  


  return (
    <div className="EntryView" style ={style}>
      <p>Github Handler:{props.singleRepo.username}</p>
      <p>Repo name:{props.singleRepo.repoName}</p>
      <p>Star Count:{props.singleRepo.starCount}</p>
      <p>Watch Count:{props.singleRepo.watchCount}</p>
    </div>
  )
}

export default EntryView;
