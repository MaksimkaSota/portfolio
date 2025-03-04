import { type FC, type KeyboardEvent, type MouseEvent, type ReactElement, useEffect, useRef } from 'react';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import { KeyboardEventCode } from '../../../../utils/types/enums';

type PropsType = {
  message: string | null;
  setMessage: (newMessage: string | null) => void;
};

export const ErrorPopup: FC<PropsType> = ({ message, setMessage }): ReactElement => {
  const errorPopup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    errorPopup.current?.focus();
  }, [message]);

  const onPopupMouseClick = (event: MouseEvent<HTMLDivElement>): void => {
    if ((event.target as Element).className === errorPopup.current?.className) {
      setMessage(null);
    }
  };

  const onKeyboardPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.code === KeyboardEventCode.Escape) {
      setMessage(null);
    }
  };

  return (
    <div
      className={classes.errorPopup}
      ref={errorPopup}
      role="button"
      tabIndex={0}
      onClick={onPopupMouseClick}
      onKeyDown={onKeyboardPress}
    >
      <div className={classes.errorPopupContainer}>
        <Error title="Error" message={message} />
      </div>
    </div>
  );
};
