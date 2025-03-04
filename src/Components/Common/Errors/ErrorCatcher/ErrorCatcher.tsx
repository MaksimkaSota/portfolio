import { Component, type ReactElement, type ReactNode } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';
import { EventType } from '../../../../utils/types/enums';

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
      UIError: 'Some UI error! We are sorry... We will fix it soon!',
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
      promiseError: 'Some Connection error! We are sorry... We will fix it soon!',
    });
  };

  render(): ReactElement {
    const { UIError, promiseError } = this.state;
    const { children } = this.props;

    if (UIError) {
      return <Error title="Error" message={UIError} isGlobalError />;
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
