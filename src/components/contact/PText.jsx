import React from 'react';
import styled from 'styled-components';
import './contact.css'
const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2.4rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}