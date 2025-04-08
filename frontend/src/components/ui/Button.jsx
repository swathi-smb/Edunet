import React from 'react';
import styled from 'styled-components';

const Button = ({ label, onClick }) => {
  return (
    <StyledWrapper>
      <button className="custom-button" onClick={onClick}>{label}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .custom-button {
    cursor: pointer;
    position: relative;
    padding: 6px 16px; /* Reduced size */
    font-size: 14px; /* Reduced font size */
    color: rgb(193, 163, 98);
    border: 2px solid rgb(193, 163, 98);
    border-radius: 24px; /* Slightly smaller */
    background-color: transparent;
    font-weight: 500; /* Lighter weight */
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
  }

  .custom-button::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 40px; 
    height: 40px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: rgb(193, 163, 98);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .custom-button:hover::before {
    scale: 2.5; /* Slightly smaller hover effect */
  }

  .custom-button:hover {
    color: #212121;
    scale: 1.05;
    box-shadow: 0 0px 15px rgba(193, 163, 98, 0.3);
  }

  .custom-button:active {
    scale: 1;
  }
`;

export default Button;
