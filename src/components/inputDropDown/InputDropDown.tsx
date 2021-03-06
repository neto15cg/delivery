import React, { forwardRef } from 'react';
import SvgIcon from '../svgIcon/SvgIcon';
import {
  BasicLoading,
  DropDown,
  DropDownContainer,
  InputContainer,
  InputError,
  InputField,
  InputIconContainer,
  InputLoadingContainer,
  StyledInput,
  StyledLabel,
  StyledOption,
} from './InputDropDown.styles';
import { InputProps } from './InputDropDown.types';

// @ts-ignore
import MapMarker from '../../../public/assets/icons/map-marker.svg';

const Input = (props: InputProps, ref) => {
  const { label, error, id, testId, type, loading, options, onClickOption, ...otherProps } = props;

  const handleClickOption = (option) => () => onClickOption && onClickOption(option);
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
      {options && options.length > 0 && (
        <DropDown>
          <DropDownContainer>
            {options.map((option) => (
              <StyledOption onClick={handleClickOption(option)} key={option.value}>
                {option.label}
              </StyledOption>
            ))}
          </DropDownContainer>
        </DropDown>
      )}
      {error && <InputError>{error}</InputError>}
    </InputField>
  );
};

export default forwardRef(Input);
