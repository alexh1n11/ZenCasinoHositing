import React from 'react';

const BallSvg = ({ styles, coll }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.6748 15.9888C6.02688 17.1942 7.72187 17.8959 9.5302 18V15.6321C9.5302 12.2676 12.2677 9.5305 15.6318 9.5305H17.9997C17.896 7.72218 17.1939 6.02719 15.9885 4.67511L4.6748 15.9888Z" fill={coll}/>
      <path d="M15.6322 10.4696C12.7855 10.4696 10.4697 12.7854 10.4697 15.6321V18C12.4339 17.8871 14.2643 17.0692 15.6668 15.6667C17.0693 14.2642 17.8872 12.4333 18.0001 10.4696H15.6322Z" fill={coll}/>
      <path d="M15.3249 4.01124C13.9729 2.80583 12.2779 2.10375 10.4695 2V4.3679C10.4695 7.73247 7.73205 10.4695 4.3679 10.4695H2C2.10375 12.2779 2.80583 13.9729 4.01124 15.3249L15.3249 4.01124Z" fill={coll}/>
      <path d="M4.3679 9.53038C7.21456 9.53038 9.53038 7.21456 9.53038 4.3679V2C7.56622 2.11292 5.73581 2.93083 4.33332 4.33332C2.93083 5.73581 2.11292 7.56622 2 9.53038H4.3679Z" fill={coll}/>
    </svg>
  );
};

export default BallSvg;