import { Dispatch, useState } from 'react';
import { Isp } from './types';

function LeftComponent(props:{isplist:Isp[], setSelectedItem:Dispatch<React.SetStateAction<Isp>>}) {
  const [searchText, setSearchText] = useState<string>('');
  const [orderby, setOrderby] = useState<string>('name');

  function gohome() {
    setSearchText('');
    setOrderby('name');
  }

  let isplist:Isp[] = [...props.isplist];
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
    <div className="col-sm-7 p-3">
      <div className="left-header">
      <h3 onClick={gohome} className="homebutton py-2">Home</h3>
        <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search (by ISP name, price, rating)"
        className="form-control searchbox"></input>
      </div>
      {isplist.map((item) => (
        <div
          className="ispitem my-2 p-2"
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
        className="form-check-input mx-2"
        />
      <label htmlFor="price" className="form-check-label">Price</label>
      <input
        type="radio"
        name="orderby"
        id="rating"
        value="rating"
        checked={orderby === 'rating'}
        onChange={() => setOrderby('rating')}
        className="form-check-input mx-2"
        />
      <label htmlFor="rating" className="form-check-label">Rating</label>
    </div>
  );
}

export default LeftComponent;
