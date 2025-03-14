// import React, { useState, useEffect } from 'react';

// function BowlerTable() {
//   const [bowlers, setBowlers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5033/api/bowlers')
//       .then(response => response.json())
//       .then(data => {
//         setBowlers(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching bowlers:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading bowlers...</p>;

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Team</th>
//           <th>Address</th>
//           <th>City</th>
//           <th>State</th>
//           <th>Zip</th>
//           <th>Phone</th>
//         </tr>
//       </thead>
//       <tbody>
//         {bowlers.map(bowler => (
//           <tr key={bowler.bowlerId}>
//             <td>{`${bowler.bowlerFirstName} ${bowler.bowlerMiddleInit || ''} ${bowler.bowlerLastName}`}</td>
//             <td>{bowler.teamName}</td>
//             <td>{bowler.bowlerAddress}</td>
//             <td>{bowler.bowlerCity}</td>
//             <td>{bowler.bowlerState}</td>
//             <td>{bowler.bowlerZip}</td>
//             <td>{bowler.bowlerPhoneNumber}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default BowlerTable;

import React, { useEffect, useState } from "react";

const BowlerTable = () => {
    const [bowlers, setBowlers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5033/api/bowlers")  // Adjust port if needed
            .then(response => response.json())
            .then(data => setBowlers(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {bowlers.map((bowler, index) => (
                    <tr key={index}>
                        <td>{bowler.name}</td>
                        <td>{bowler.team}</td>
                        <td>{bowler.address}</td>
                        <td>{bowler.city}</td>
                        <td>{bowler.state}</td>
                        <td>{bowler.zip}</td>
                        <td>{bowler.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BowlerTable;
