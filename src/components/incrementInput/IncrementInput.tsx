import React, { forwardRef } from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { EndIconContainer, IncrementContent, IncrementValue, InputContainer, StartIconContainer, StyledFabButton } from './IncrementInput.styles';
import { IncrementInputProps } from './IncrementInput.type';

// @ts-ignore
import IconPlus from '../../../public/assets/icons/plus.svg';
// @ts-ignore
import IconMinus from '../../../public/assets/icons/minus.svg';

const IncrementInput = (props: IncrementInputProps, ref) => {
  const { name, id, value, onChange, className, testId, minValue, maxValue } = props;

  const handleIncrement = () => () => {
    if (!onChange) {
      return undefined;
    }
    if (maxValue !== undefined) {
      return value < maxValue && onChange(value + 1);
    }
    return onChange(value + 1);
  };

  const handleDecrement = () => () => {
    if (!onChange) {
      return undefined;
    }
    if (minValue !== undefined) {
      return value > minValue && onChange(value - 1);
    }
    return onChange(value - 1);
  };

  return (
    <div className={className} data-testid={testId}>
      <InputContainer>
        <StartIconContainer type="button">
          <StyledFabButton backgroundColor="#F64E60" data-testid="decrement-button" disabled={value === minValue} onClick={handleDecrement()}>
            <SvgIcon src={IconMinus} width="9px" height="9px" fill="#fff" />
          </StyledFabButton>
        </StartIconContainer>
        <IncrementContent>
          <IncrementValue>{value}</IncrementValue>
        </IncrementContent>
        <EndIconContainer type="button" onClick={handleIncrement}>
          <StyledFabButton backgroundColor="#0BB7AF" data-testid="increment-button" disabled={value === maxValue} onClick={handleIncrement()}>
            <SvgIcon src={IconPlus} width="9px" height="9px" fill="#fff" />
          </StyledFabButton>
        </EndIconContainer>
      </InputContainer>
      <input type="hidden" id={id} value={value} name={name} ref={ref} />
    </div>
  );
};

export default forwardRef(IncrementInput);
