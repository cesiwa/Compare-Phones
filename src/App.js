
import { useState } from 'react';
import BoxGroup from './components/BoxGroup';
import Compairs from './components/compairs';
import phones from "./data/phones"

function App() {
  const[compairList, setCompairList] =useState([])
  console.log(compairList)
  return (
    <>
      <h3 className='compareTitle'>Compare Products</h3>
      <BoxGroup items={phones} setCompairData={setCompairList} compairs={compairList}/>
     
      {compairList.length >=2 && (<Compairs  compairList={compairList}/>)}
      
      
    </>
  );
}

export default App;
