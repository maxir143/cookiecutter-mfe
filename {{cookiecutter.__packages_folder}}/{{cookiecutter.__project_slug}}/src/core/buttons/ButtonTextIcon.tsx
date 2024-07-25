import * as Icon from '@core/assets/icons';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  iconName: string;
  iconWidth?: number;
}

export const ButtonTextIcon: React.FC<PrimaryButtonProps> = ({
  text,
  className,
  iconName,
  iconWidth,
  ...props
}) => {
  const CurrentIcon = Icon[iconName as keyof typeof Icon];

  return (
    <button
      className={`btn button-icon w-100 d-flex align-items-center m-0 p-0 ${
        className ? className : ''
      }`}
      {...props}
    >
      <h3 style={{ fontWeight: 500 }} className="text me-2 text-nowrap">
        {text}
      </h3>
      <div style={{ width: iconWidth ? `${iconWidth}px` : '24px' }}>
        <CurrentIcon />
      </div>
    </button>
  );
};
