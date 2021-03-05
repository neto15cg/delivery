import React, { forwardRef } from 'react';
import SvgIcon from '../svgIcon/SvgIcon';
import { BasicLoading, InputContainer, InputError, InputField, InputIconContainer, InputLoadingContainer, StyledInput, StyledLabel } from './Input.styles';
import { InputProps } from './Input.types';

// @ts-ignore
import MapMarker from '../../../public/assets/icons/map-marker.svg';

const Input = (props: InputProps, ref) => {
  const { label, error, id, testId, type, loading, ...otherProps } = props;
  return (
    <InputField>
      <StyledLabel htmlFor={id} error={error}>
        {label}
      </StyledLabel>
      <InputContainer>
        <InputIconContainer>
          <SvgIcon src={MapMarker} width="24px" height="24px" fill="#C0C9CB" />
        </InputIconContainer>
        <StyledInput data-testid={testId} id={id} type={type ?? 'text'} ref={ref} error={error} {...otherProps} />
        {loading && (
          <InputLoadingContainer>
            <BasicLoading />
          </InputLoadingContainer>
        )}
      </InputContainer>
      {error && <InputError>{error}</InputError>}
    </InputField>
  );
};

export default forwardRef(Input);
