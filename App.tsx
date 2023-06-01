import React from 'react';
import Test from './test';

const component:React.FC = ()=>{
  return (
    <div>
      <h1>First Page</h1>
      <Test name={"이 문구가 나오면 성공입니다."}/>
    </div>
  )
}

export default component