import { InputText, InputTextProps } from 'primereact/inputtext';

interface Props extends InputTextProps {
  id: string;
  labelText: string;
  labelClassName?: string;
  wrapperClassName?: string;
  errorMessage?: string;
  isValid: boolean;
}

export const BgInputText: React.FC<Props> = ({
  labelText,
  labelClassName,
  id,
  className,
  wrapperClassName,
  errorMessage,
  isValid,
  ...props
}) => {
  return (
    <div
      className={`bg-input-text w-100 ${
        wrapperClassName ? wrapperClassName : ''
      }`}
    >
      <label
        className={`label text-decision-azul-ultramar mb-2 ${labelClassName}`}
        htmlFor={id}
      >
        {labelText}
      </label>
      <InputText
        id={id}
        className={`w-100 ${!isValid ? 'invalid' : ''} ${
          className ? className : ''
        }`}
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
