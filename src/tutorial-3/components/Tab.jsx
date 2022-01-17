import React from 'react';

function Tab({ tab, status, tabHandler }) {
  const { id, title, description } = tab;
  return (
    <div className={status === id ? 'tab active' : 'tab'}>
      <input id="tab-two" type="checkbox" name="tabs" />
      <label htmlFor="tab-two" onClick={() => tabHandler(id)}>
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Tab;
