export interface ButtonCardProps {
  title: string;
  onClick: (id: string) => void;
  isSelected: boolean;
  id: string;
  testId?: string;
}
