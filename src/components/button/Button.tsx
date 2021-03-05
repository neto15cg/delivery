import React from 'react';
import { BasicLoading, ButtonContainerLoading, StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  const { children, loading, disabled, ...otherProps } = props;
  return (
    <StyledButton disabled={loading || disabled} {...otherProps}>
      <span>{children}</span>
      {loading && (
        <ButtonContainerLoading>
          <BasicLoading />
        </ButtonContainerLoading>
      )}
    </StyledButton>
  );
};

export default Button;
