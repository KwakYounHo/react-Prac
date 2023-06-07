import React from 'react';

interface TestFC {
  children: React.ReactNode,
  name: string
}
const TestFC = ({children, name}:TestFC): JSX.Element => {
  return (
    <>
      <h1>{name}</h1>
      {children}
    </>
  )
}

export default TestFC;