import { Password, PasswordProps } from 'primereact/password';

interface Props extends PasswordProps {
  id: string;
  labelText: string;
  labelClassName?: string;
  wrapperClassName?: string;
  errorMessage?: string;
  isValid: boolean;
}

export const BgInputPassword: React.FC<Props> = ({
  id,
  labelText,
  labelClassName,
  wrapperClassName,
  className,
  inputClassName,
  errorMessage,
  isValid,
  ...props
}) => {
  return (
    <div
      className={`bg-input-password w-100 ${
        wrapperClassName ? wrapperClassName : ''
      }`}
    >
      <label
        className={`label text-decision-azul-ultramar mb-2 ${labelClassName}`}
        htmlFor={id}
      >
        {labelText}
      </label>
      <Password
        id={id}
        className={`input-password-container w-100 ${className}`}
        inputClassName={`w-100 ${!isValid ? 'invalid' : ''} ${
          inputClassName ? inputClassName : ''
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
