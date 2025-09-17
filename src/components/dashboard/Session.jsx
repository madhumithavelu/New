
// import React from 'react';

// function App() {
//   const classData = {
//     title: "React Fundamentals",
//     instructor: "Jane Smith",
//     startTime: new Date("2024-01-15T14:30:00"), 
//     endTime: new Date("2024-01-15T15:30:00"),  
//     progress: 65,
//     zoomLink: "https://zoom.us/your-meeting-link"
//   };

//   const currentTime = new Date();


//   const isOngoing =
//     currentTime >= classData.startTime && currentTime < classData.endTime;

//   const statusText = isOngoing ? "Ongoing" : "Completed";

//   const handleJoin = () => {
//     if (isOngoing) {
//       window.open(classData.zoomLink, "_blank");
//     } else {
//       alert("Class completed. You cannot join now.");
//     }
//   };

//   return (
//     <div style={{ padding: '20px', width: '400px', border: '1px solid #ccc' }}>
//       <h3>{classData.title}
//         <span style={{ color: isOngoing ? 'green' : 'gray', marginLeft: '10px' }}>
//           {statusText}
//         </span>
//       </h3>
//       <p><strong>Instructor:</strong> {classData.instructor}</p>
//       <p><strong>Date:</strong> {classData.startTime.toLocaleString()}</p>

//       <p><strong>Progress:</strong></p>
//       <div style={{ background: '#ddd', height: '10px', width: '100%' }}>
//         <div
//           style={{
//             background: 'navy',
//             height: '10px',
//             width: `${classData.progress}%`
//           }}
//         ></div>
//       </div>
//       <p>{classData.progress}%</p>

//       <button
//         onClick={handleJoin}
//         style={{
//           marginTop: '10px',
//           backgroundColor: '#0047AB',
//           color: 'white',
//           padding: '8px 16px',
//           border: 'none',
//           cursor: 'pointer'
//         }}
//       >
//         Join Class
//       </button>
//     </div>
//   );
// }

// export default App;
