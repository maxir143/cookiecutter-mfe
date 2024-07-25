import { ButtonHTMLAttributes, ImgHTMLAttributes } from 'react';

type ImageProps =
  | { element: JSX.Element; props?: null }
  | {
      element?: null;
      props: {
        src: string;
      } & ImgHTMLAttributes<HTMLImageElement>;
    };

type ButtonProps =
  | { element: JSX.Element; onClick?: null; text?: null }
  | {
      element?: null;
      text: string;
      props?: ButtonHTMLAttributes<HTMLButtonElement>;
    };

type CopyProps =
  | { element: JSX.Element; description?: null }
  | { element?: null; description?: string };

type WelcomeProps = {
  image: ImageProps;
  button: ButtonProps;
  copy: CopyProps;
};

export function Welcome(props: WelcomeProps): JSX.Element {
  const { button, image, copy } = props;
  return (
    <div>
      <div
        className="container d-flex flex-row justify-content-center align-items-center flex-wrap-reverse flex-xl-nowrap py-5 gap-5"
        style={{
          minHeight: '80vh',
        }}
      >
        {image.element || (
          <img
            style={{ maxWidth: '800px' }}
            className="pe-5"
            {...image.props}
          />
        )}
        <div className="d-flex flex-column align-items-start pb-5 pb-xl-0 ps-xl-5 gap-2">
          {copy?.element || <h3 className="text-start">{copy.description}</h3>}
          <small className="mt-4" style={{ fontSize: '.75rem' }}>
            <b>SOLO HAS CLICK AQUÍ</b>
          </small>
          {button.element || (
            <button
              className="btn primary-button p-2 bg-decision-azul-neutro-s50 text-white"
              {...button.props}
            >
              {button.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
