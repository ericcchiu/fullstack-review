import React from 'react';

const EntryView = (props) => {
  
  
  const thStyle ={ 
    padding: '20px',
    textAlign: 'center',
    alignContent: 'center',
    margin: '10px'
  }


  const tableStyle ={
    fontFamily: 'Trebuchet MS, Arial, Helvetica, sans-serif',
    borderCollapse: 'collapse',
    width: '100%',
    color: 'navyblue', 
    backgroundColor: 'lightblue', 
    borderRadius: '4px',
    border: '2px solid black',
  }
  


  return (
    <div className="EntryView">
      {/* <p>Github Handler:{props.singleRepo.username}</p>
      <p>Repo name:{props.singleRepo.repoName}</p>
      <p>Star Count:{props.singleRepo.starCount}</p>
      <p>Watch Count:{props.singleRepo.watchCount}</p> */}

      <table style={tableStyle}>
        <thead>
          <tr style={thStyle}>
            <th style={thStyle}>GitHub Handler</th>
            <th style={thStyle}>Repo Name</th>
            <th style={thStyle}>Star Count</th>
            <th style={thStyle}>Watch Count</th>
          </tr>
          
        </thead>
        <tbody>
          <tr style={thStyle}>
            <td style={thStyle}>{props.singleRepo.username}</td>
            <td style={thStyle}>{props.singleRepo.repoName}</td>
            <td style={thStyle}>{props.singleRepo.starCount}</td>
            <td style={thStyle}>{props.singleRepo.watchCount}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default EntryView;
