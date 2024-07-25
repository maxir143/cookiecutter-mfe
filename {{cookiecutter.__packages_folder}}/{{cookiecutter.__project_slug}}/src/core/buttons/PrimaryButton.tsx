interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  wFull?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  className,
  wFull = true,
  ...props
}) => {
  return (
    <button
      className={`btn primary-button ${wFull ? 'w-100' : ''} p-2 ${
        className ? className : ''
      }`}
      {...props}
    >
      {text}
    </button>
  );
};
