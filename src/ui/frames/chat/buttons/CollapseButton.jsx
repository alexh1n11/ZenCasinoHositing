import React, { useState } from 'react';

const MySVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.8656 15.9064C13.1479 16.1645 13.6021 16.1645 13.8844 15.9064C14.1719 15.6436 14.1719 15.2135 13.8844 14.9507L10.6571 12L13.8844 9.04929C14.1719 8.78649 14.1719 8.35637 13.8844 8.09356C13.6021 7.83548 13.1479 7.83548 12.8656 8.09356L9.11558 11.5221C8.82814 11.7849 8.82814 12.2151 9.11558 12.4779L12.8656 15.9064Z" fill="white" stroke="white" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
const MySVGHoverd = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.8656 15.9064C13.1479 16.1645 13.6021 16.1645 13.8844 15.9064C14.1719 15.6436 14.1719 15.2135 13.8844 14.9507L10.6571 12L13.8844 9.04929C14.1719 8.78649 14.1719 8.35637 13.8844 8.09356C13.6021 7.83548 13.1479 7.83548 12.8656 8.09356L9.11558 11.5221C8.82814 11.7849 8.82814 12.2151 9.11558 12.4779L12.8656 15.9064Z" fill="#533877" stroke="#533877" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};


const CollapseButton = ({onClick, collapseVisible}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    if (onClick) {
      onClick(event);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={{
        display: 'flex',
        width: '28px',
        height: '28px',
        padding: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '16px',
        background: '#1E2644',
        color: 'white',
        transform: isClicked ? 'rotate(0deg)' : 'rotate(180deg)',
        opacity: collapseVisible || (isHovered && !collapseVisible) ? '1' : '0.4'
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? <MySVGHoverd /> : <MySVG />}

    </button>
  );
};

export default CollapseButton;
