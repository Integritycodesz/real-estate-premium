import React from 'react';
import './DistanceTable.css';

const DistanceTable = () => {
  const data = [
    { landmark: "SGPGI", shivay: "5 min", shivdhara: "5 min", hanumant: "5 min", muralia: "5 min" },
    { landmark: "Mohanlalganj", shivay: "5–7 min", shivdhara: "5–7 min", hanumant: "5–7 min", muralia: "5–7 min" },
    { landmark: "Kisan Path", shivay: "3–4 min", shivdhara: "3–4 min", hanumant: "3–4 min", muralia: "3–4 min" },
    { landmark: "Lulu Mall", shivay: "8–10 min", shivdhara: "8–10 min", hanumant: "8–10 min", muralia: "8–10 min" },
    { landmark: "Medanta", shivay: "8–10 min", shivdhara: "8–10 min", hanumant: "8–10 min", muralia: "8–10 min" },
    { landmark: "Charbagh", shivay: "15–20 min", shivdhara: "15–20 min", hanumant: "15–20 min", muralia: "15–20 min" },
    { landmark: "Phoenix Palassio Mall", shivay: "8–10 min", shivdhara: "8–10 min", hanumant: "8–10 min", muralia: "8–10 min" },
  ];

  return (
    <div className="distance-table-container">
      <div className="table-header-group">
        <span className="pre-title-gold">CONNECTIVITY COMPARISON</span>
        <h2 className="section-title-premium">Distance from Landmarks</h2>
      </div>
      <div className="table-wrapper">
        <table className="distance-table">
          <thead>
            <tr>
              <th>Landmark</th>
              <th>Shivay Residency</th>
              <th>Shivdhara Residency</th>
              <th>Hanumant Dham</th>
              <th>Muralia Garden</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="landmark-cell">{row.landmark}</td>
                <td>{row.shivay}</td>
                <td>{row.shivdhara}</td>
                <td>{row.hanumant}</td>
                <td>{row.muralia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DistanceTable;
