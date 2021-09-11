import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Filter = ({filter, setFilter, options}) => {
    return (
        <div>
            <Input value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} placeholder="Search..." />
            <Select value={filter.sort} onChange={sort => setFilter({...filter, sort: sort})} defaultValue='Сортировка по' options={options} />
        </div>
    );
};

export default Filter;