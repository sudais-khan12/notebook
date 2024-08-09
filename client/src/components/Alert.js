import React from 'react'

const Alert = (props) => {
  return (
    <div>
      <div className= {`alert alert-info`} role="alert">
        {props.msg}
      </div>
    </div>
  );
}

export default Alert