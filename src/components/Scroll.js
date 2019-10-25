import React from 'react';

//Scroll functionality on CardList
const Scroll = (props) => {
  return (
    // jsx; javascript expression within it is an object with jsx styles
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children /* render what <Scroll> wraps aka children */}
    </div>
  );
};

export default Scroll;