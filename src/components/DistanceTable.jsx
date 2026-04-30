import React from 'react';
import './DistanceTable.css';

const DistanceTable = () => {
  const data = [
    { landmark: "SGPGI", shivay: "15 min", shivdhara: "8–10 min", hanumant: "10 min", muralia: "15 min" },
    { landmark: "Mohanlalganj", shivay: "5–7 min", shivdhara: "8–10 min", hanumant: "5 min", muralia: "2 min (walk)" },
    { landmark: "Kisan Path", shivay: "10–12 min", shivdhara: "10 min", hanumant: "10–12 min", muralia: "12–15 min" },
    { landmark: "Lulu Mall", shivay: "15–18 min", shivdhara: "12 min", hanumant: "10 min", muralia: "10 min" },
    { landmark: "Medanta", shivay: "15 min", shivdhara: "12 min", hanumant: "10 min", muralia: "10 min" },
    { landmark: "Charbagh", shivay: "25 min", shivdhara: "20 min", hanumant: "20 min", muralia: "20–25 min" },
    { landmark: "Expressway Link", shivay: "2–3 min", shivdhara: "20 min", hanumant: "20 min", muralia: "20 min" },
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
