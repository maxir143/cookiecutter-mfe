import { Checkbox, CheckboxProps } from 'primereact/checkbox';

interface Props extends CheckboxProps {
  id: string;
  labelText: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export const SquareCheckbox: React.FC<Props> = ({
  id,
  labelText,
  labelClassName,
  wrapperClassName,
  ...props
}) => {
  return (
    <div
      className={`d-flex align-items-center square-checkbox ${wrapperClassName}`}
    >
      <Checkbox inputId={id} {...props} />
      <label
        htmlFor={id}
        className={`label text-decision-azul-ultramar ms-2 ${labelClassName}`}
      >
        {labelText}
      </label>
    </div>
  );
};
