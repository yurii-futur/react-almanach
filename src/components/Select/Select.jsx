import React from 'react';

const Select = ({defaultValue, options, onChange}) => {
  return (
    <div>
      <select onChange={e => onChange(e.target.value)}>
        <option disabled>{defaultValue}</option>
        {options.map( o => {
          return <option key={o.value} value={o.value}>{o.title}</option>
        })}
      </select>
    </div>
  );
};

export default Select;