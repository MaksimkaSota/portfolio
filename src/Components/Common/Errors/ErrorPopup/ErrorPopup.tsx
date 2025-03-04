import { type FC, type KeyboardEvent, type MouseEvent, type ReactElement, useEffect, useRef } from 'react';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import { EventType, KeyboardEventCode } from '../../../../utils/types/enums';

type PropsType = {
  message: string | null;
  setMessage: (newMessage: string | null) => void;
};

export const ErrorPopup: FC<PropsType> = ({ message, setMessage }): ReactElement => {
  const errorPopup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    errorPopup.current?.focus();
  }, [message]);

  const handleInteraction = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): void => {
    if (
      (event.type === EventType.Click &&
        (event.target as HTMLDivElement).className === errorPopup.current?.className) ||
      (event.type === EventType.Keydown && (event as KeyboardEvent).code === KeyboardEventCode.Escape)
    ) {
      setMessage(null);
    }
  };

  return (
    <div
      className={classes.errorPopup}
      ref={errorPopup}
      role="button"
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
    >
      <div className={classes.errorPopupContainer}>
        <Error title="Error" message={message} />
      </div>
    </div>
  );
};
