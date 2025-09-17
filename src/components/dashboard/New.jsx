import React, { useState } from 'react';

export default function New() {
  const [showDetails, setShowDetails] = useState(false);
  const [heading, setHeading] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [link, setLink] = useState('');
  const[participant,setParticipant]=useState('');
  const [dataList, setDataList] = useState([]);

  const handleSubmit = () => {
    const newData = {
      heading,
      date,
      time,
      link,
      participant
    };
    setDataList([...dataList, newData]);
    setHeading('');
    setDate('');
    setTime( '');
    setLink('');
    setParticipant('');
  };

  return (
    <div className='container' style={{ padding: '20px' }}>
      <button onClick={() => setShowDetails(true)}>Add Details</button>

      {showDetails && (
        <div style={{ marginTop: '20px' , border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '550px' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
          <h2>Enter Details</h2>
          <input
            type="text"
            placeholder="Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
         required /><br /><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required/><br /><br />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
         required /><br /><br />
          <input
            type="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          required/><br /><br />
          <input
            type="number"
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
         required /><br /><br />
          <button
  onClick={() => {
    handleSubmit();
    setShowDetails(false);
  }}
>
  Submit
</button>
        </div>
      )}
      {dataList.length > 0 && ( 
        <div style={{ marginTop: '30px' }}>
         
          {dataList.map((item, index) => (
            <div style={{marginTop: '20px' , border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '550px' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} key={index}>
              <p><strong>Heading:</strong> {item.heading}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Time:</strong> {item.time}</p>
              <p><strong>Link:</strong> {item.link}</p>
              <p><strong>Participants:</strong> {item.participant}</p>
        
            </div>
          ))}
        </div>
      )}
     
    </div>
  );
}
