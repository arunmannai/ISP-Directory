import React, { useState } from 'react';

function LeftComponent(props) {
  const [searchText, setSearchText] = useState('');
  const [orderby, setOrderby] = useState('name');

  let isplist = [...props.isplist];
  if (searchText) {
    if (+searchText <= 5)
      isplist = isplist.filter((item) => item.rating >= +searchText);
    else if (+searchText)
      isplist = isplist.filter((item) => item.lowest_price <= +searchText);
    else
      isplist = isplist.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
  }

  switch (orderby) {
    case 'price':
      isplist.sort((a, b) => a.lowest_price - b.lowest_price);
      break;
    case 'rating':
      isplist.sort((a, b) => b.rating - a.rating);
      break;
    default:
      isplist.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  return (
    <div className="leftcom">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      {isplist.map((item) => (
        <div
          className="ispitem"
          onClick={() => props.setSelectedItem(item)}
          key={item.name}
        >
          <span>{item.name}</span>
          <span>&#x20B9; {item.lowest_price}</span>
        </div>
      ))}
      <input
        type="radio"
        name="orderby"
        id="price"
        value="price"
        checked={orderby === 'price'}
        onChange={() => setOrderby('price')}
      />
      <label htmlFor="price">Price</label>
      <input
        type="radio"
        name="orderby"
        id="rating"
        value="rating"
        checked={orderby === 'rating'}
        onChange={() => setOrderby('rating')}
      />
      <label htmlFor="rating">Rating</label>
    </div>
  );
}

export default LeftComponent;
