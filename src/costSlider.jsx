import React, { useState } from 'react';
import './cost-Grad.css';

function CostGraduation() {
  const initialCosts = {
    cigarette: 0.55,
    joint: 1.10,
    beer: 3,
    pornography: 20,
    cocaine: 60,
    ecstasy: 15,
    mdma: 60,
  };

  const [costs, setCosts] = useState(initialCosts);

  const handleCostChange = (item, value) => {
    setCosts({ ...costs, [item]: value });
  };

  return (
    <div className="cost-graduation">
      <h2>Coûts des Consommables</h2>
      <div className="cost-slider">
        {Object.entries(costs).map(([item, cost]) => (
          <div key={item} className="cost-item">
            <span>{item}</span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={cost}
              onChange={(e) => handleCostChange(item, parseFloat(e.target.value))}
            />
            <span>{cost} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CostGraduation;
