import React from 'react'
import "./contact.css"
import { MdPlace} from 'react-icons/md'
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`



cursor: pointer;
  padding: 1rem;
  background-color: var(--primaryBackground);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--primaryBackground);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: scale(1.5);
  }
  .
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({

icon = <MdPlace />,
text = 'I need text ',

}) {
 
  
return (
  <ItemStyles>
    <div className="icon" >{icon}</div>
    <div className="info">
      <PText>{text}</PText>
    </div>
  </ItemStyles>
);
}