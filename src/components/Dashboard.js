import React, { useState } from 'react';

function Dashboard() {
  const [visaType, setVisaType] = useState('F-1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [timeline, setTimeline] = useState(null);

  const handleGenerate = () => {
    // Simple logic for now — we’ll improve this later
    const start = new Date(startDate);
    const optStartDate = new Date(start);
    optStartDate.setMonth(start.getMonth() - 3); // OPT can start 90 days before

    const cptStartDate = new Date(start);
    cptStartDate.setMonth(start.getMonth() - 1); // CPT ~1 month before

    setTimeline({
      cpt: cptStartDate.toDateString(),
      opt: optStartDate.toDateString(),
    });
  };

  return (
    <div>
      <h2>CPT/OPT Dashboard</h2>
      <label>
        Visa Type:
        <select value={visaType} onChange={(e) => setVisaType(e.target.value)}>
          <option value="F-1">F-1</option>
          <option value="J-1">J-1</option>
        </select>
      </label>
      <br /><br />
      <label>
        Internship Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br /><br />
      <label>
        Internship End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <br /><br />
      <button onClick={handleGenerate}>Generate Timeline</button>

      {timeline && (
        <div style={{ marginTop: '20px' }}>
          <h3>Suggested Filing Dates</h3>
          <p><strong>CPT Start Filing:</strong> {timeline.cpt}</p>
          <p><strong>OPT Earliest Filing:</strong> {timeline.opt}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
