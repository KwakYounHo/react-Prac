import React from 'react';

interface Props {
  name : string
}

const component:React.FC<Props> = props => {
  return (
    <>
      {props.name}
    </>
  )
}

export default component;