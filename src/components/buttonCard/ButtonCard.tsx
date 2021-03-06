import React from 'react';
import { StyledButtonCard } from './ButtonCard.styles';

const ButtonCard = ({ title, onClick, isSelected, id }) => {
  const handleClick = () => onClick(id);

  return (
    <StyledButtonCard onClick={handleClick} isSelected={isSelected}>
      {title}
    </StyledButtonCard>
  );
};

export default ButtonCard;
