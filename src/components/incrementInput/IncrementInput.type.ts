export interface IncrementInputProps {
  value: number;
  onChange?: (value: number) => void;
  name?: string;
  id?: string;
  minValue?: number;
  maxValue?: number;
  optional?: boolean;
  disabled?: boolean;
  className?: string;
  testId?: string;
}
