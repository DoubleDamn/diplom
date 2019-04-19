import React from 'react';

const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter(country => {
      return country.title.toLowerCase().includes(value);
    });

    update({
      data: filter,
      active: 0,
      term: value
    });
    
  };

  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={dataSearch}
      />
    </div>
  );
};