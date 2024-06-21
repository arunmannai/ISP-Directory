import { useState, useEffect } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import axios, { AxiosResponse } from "axios";
import { ApiHitsResponse, Isp, IspResponse } from './types';

function App() {
  const [apihits, setApihits] = useState<number>(0);
  const [isplist, setIsplist] = useState<Isp[]>([]);

  useEffect(() => {
    const url = "https://hot-mackerel-16.hasura.app/api/rest";
    axios(url+"/isp")
      .then((response:AxiosResponse<IspResponse>) => response.data)
      .then((data:IspResponse) => {
        setIsplist(data.isplist);
      });
    axios(url+"/counter?name=apihits")
      .then((response:AxiosResponse<ApiHitsResponse>) => response.data.update_counters.returning[0].value)
      .then((value:number) => {
        setApihits(value);
      });
    }, []);

  if (isplist.length === 0) return <div className="m-3">Loading...</div>;

  return (
    <>
      <Header total={isplist.length} apihits={apihits} />
      <Main isplist={isplist} />
    </>
  );
}

export default App;
