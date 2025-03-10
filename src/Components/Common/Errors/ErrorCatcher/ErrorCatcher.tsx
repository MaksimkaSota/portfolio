import { Component, type ReactElement, type ReactNode } from 'react';
import i18next from '../../../../services/localization/i18n';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';
import { ErrorTxtKey, EventType } from '../../../../utils/types/enums';

type PropsType = {
  children: ReactNode;
};

type StateType = {
  UIError: string | null;
  promiseError: string | null;
};

export class ErrorCatcher extends Component<PropsType, StateType> {
  state: StateType = {
    UIError: null,
    promiseError: null,
  };

  static getDerivedStateFromError() {
    return {
      UIError: i18next.t(ErrorTxtKey.UnhandledUI),
    };
  }

  componentDidMount(): void {
    window.addEventListener(EventType.Unhandledrejection, this.catchUnhandledPromiseErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener(EventType.Unhandledrejection, this.catchUnhandledPromiseErrors);
  }

  catchUnhandledPromiseErrors = (): void => {
    this.setState({
      promiseError: i18next.t(ErrorTxtKey.UnhandledPromise),
    });
  };

  render(): ReactElement {
    const { UIError, promiseError } = this.state;
    const { children } = this.props;

    if (UIError) {
      return <Error title={i18next.t(ErrorTxtKey.Error)} message={UIError} isGlobalError />;
    }

    return (
      <>
        {children}
        {promiseError && (
          <ErrorPopup
            message={promiseError}
            setMessage={(newMessage: string | null): void => {
              this.setState({ promiseError: newMessage });
            }}
          />
        )}
      </>
    );
  }
}
