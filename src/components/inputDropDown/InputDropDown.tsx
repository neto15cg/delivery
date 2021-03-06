import React, { forwardRef } from 'react';
import SvgIcon from '../svgIcon/SvgIcon';
import {
  BasicLoading,
  ButtonClearContainer,
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
import { InputDropDownOption, InputProps } from './InputDropDown.types';

// @ts-ignore
import MapMarker from '../../../public/assets/icons/map-marker.svg';
// @ts-ignore
import IconClose from '../../../public/assets/icons/times-circle.svg';

const Input = (props: InputProps, ref) => {
  const { label, error, id, testId, type, loading, options, onClickOption, onChange, onClear, leftIcon, ...otherProps } = props;

  const handleClear = () => {
    // @ts-ignore
    document.getElementById('drop-down').value = '';
    // @ts-ignore
    onChange({ target: { value: '' } });
    onClear([]);
  };

  const handleClickOption = (option: InputDropDownOption) => () => onClickOption && onClickOption(option);

  const hasOptions = options && options.length > 0;
  return (
    <InputField>
      <StyledLabel htmlFor={id} error={error}>
        {label}
      </StyledLabel>
      <InputContainer>
        {leftIcon && (
          <InputIconContainer>
            <SvgIcon src={leftIcon} width="24px" height="24px" fill="#C0C9CB" />
          </InputIconContainer>
        )}
        <StyledInput id="drop-down" onChange={onChange} ref={ref} data-testid={testId} type={type ?? 'text'} error={error} {...otherProps} />
        {loading && (
          <InputLoadingContainer>
            <BasicLoading />
          </InputLoadingContainer>
        )}
        {!loading && hasOptions && (
          <ButtonClearContainer onClick={handleClear} data-testid="input-btn-clear">
            <SvgIcon src={IconClose} width="24px" height="24px" fill="#F64E60" />
          </ButtonClearContainer>
        )}
      </InputContainer>
      {hasOptions && (
        <DropDown>
          <DropDownContainer>
            {options.map((option) => (
              <StyledOption onClick={handleClickOption(option)} key={option.value}>
                <SvgIcon src={MapMarker} width="24px" height="24px" fill="#C0C9CB" />
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
