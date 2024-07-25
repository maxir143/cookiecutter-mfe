import { Dropdown, DropdownProps } from 'primereact/dropdown';

interface Props extends DropdownProps {
  id: string;
  labelText: string;
  labelClassName?: string;
  wrapperClassName?: string;
  errorMessage?: string;
  isValid: boolean;
  onTouched: () => void;
  touched: boolean;
}

export const BgDropdown: React.FC<Props> = ({
  id,
  labelText,
  labelClassName,
  wrapperClassName,
  className,
  panelClassName,
  errorMessage,
  isValid,
  onTouched,
  touched,
  ...props
}) => {
  return (
    <div className={`bg-dropdown w-100 d-flex flex-column ${wrapperClassName}`}>
      <label
        className={`label text-decision-azul-ultramar mb-2 ${labelClassName}`}
        htmlFor={id}
      >
        {labelText}
      </label>
      <Dropdown
        inputId={id}
        optionLabel="label"
        className={`${className} ${!isValid ? 'invalid' : ''}`}
        panelClassName={`dropdown-panel ${panelClassName}`}
        onBlur={() => {
          !touched && onTouched();
        }}
        {...props}
      />
      {!isValid && errorMessage && (
        <p className="error-message text-decision-carnation-red mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
