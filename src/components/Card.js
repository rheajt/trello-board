import React from 'react';

export default ({content}) => {
  return(
    <div className="card">
      <span>{"<"}</span>
      {content}
      <span>{">"}</span>
    </div>
  );
}