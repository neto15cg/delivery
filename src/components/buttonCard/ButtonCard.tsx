import React from 'react';
import { StyledButtonCard } from './ButtonCard.styles';
import { ButtonCardProps } from './ButtonCard.types';

const ButtonCard = ({ title, onClick, isSelected, id, testId }: ButtonCardProps) => {
  const handleClick = () => onClick(id);

  return (
    <StyledButtonCard onClick={handleClick} isSelected={isSelected} data-testid={testId}>
      {title}
    </StyledButtonCard>
  );
};

export default ButtonCard;
