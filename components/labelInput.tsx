import { Label } from './ui/label';
import { Input } from './ui/input';

type LabelProps = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  htmlFor?: string;
  inputId?: string;
} & React.ComponentProps<'input'>;
export function LabelInput({
  label,
  type,
  htmlFor,
  inputId,
  ...props
}: LabelProps) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input placeholder="Input Here" id={inputId} type={type} {...props} />
    </div>
  );
}
