import React from 'react';
import { StyledButtonCard } from './ButtonCard.styles';
import { ButtonCardProps } from './ButtonCard.types';

const ButtonCard = ({ title, onClick, isSelected, id }: ButtonCardProps) => {
  const handleClick = () => onClick(id);

  return (
    <StyledButtonCard onClick={handleClick} isSelected={isSelected}>
      {title}
    </StyledButtonCard>
  );
};

export default ButtonCard;
