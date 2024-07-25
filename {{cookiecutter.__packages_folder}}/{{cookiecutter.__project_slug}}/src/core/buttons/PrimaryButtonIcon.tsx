import * as Icon from '@core/assets/icons';

interface PrimaryButtonIconsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  wFull?: boolean;
  iconName: string;
  iconWidth?: number;
}

export const PrimaryButtonIcons: React.FC<PrimaryButtonIconsProps> = ({
  text,
  className,
  wFull = true,
  iconName,
  iconWidth,
  ...props
}) => {
  const CurrentIcon = Icon[iconName as keyof typeof Icon];

  return (
    <button
      className={`btn primary-button-icon ${
        wFull ? 'w-100' : ''
      } text-center p-2 d-flex align-items-center ${
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
