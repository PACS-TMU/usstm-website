"use client";
import sgcuData from '../../../../public/data/sgcu-db.json';
import { useState } from 'react';

export default function GroupsUnions() {
    const [copiedEmail, setCopiedEmail] = useState([]);

    const copyToClipboard = (email) => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(email);
    };
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            <h1 style={{ fontSize: '2em', textAlign: 'center' }}>Groups And Unions</h1>
        {sgcuData.map((group, index) => (
        <div key={index} style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc' }}>
          <img
            src={`/images/sg-logos/${group['group-logo']}`}
            alt={group['group-name']}
            style={{ width: '100px', height: '100px', marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => copyToClipboard(group['contact-info'][1])}
          />
          <h2
            style={{ margin: '0', cursor: 'pointer' }}
            onClick={() => copyToClipboard(group['contact-info'][1])}
          >
            {group['group-name']}
          </h2>
          {copiedEmail === group['contact-info'][1] && <p style={{ color: 'green' }}>Email Copied!</p>}
        </div>
        ))}
        </div>
            
    )
}