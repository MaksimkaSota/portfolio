import type { FC, ReactElement } from 'react';
import classes from './Contacts.module.scss';
import { ContactFormContainer } from './ContactForm/ContactFormContainer';
import { Contact } from './Contact/Contact';
import { Link } from '../../Common/Link/Link';
import { Icon } from '../../../utils/enums';
import { requestString } from '../../../utils/endpoints';

export const Contacts: FC = (): ReactElement => {
  return (
    <div className={classes.contacts}>
      <div className={classes.wrapper}>
        <ContactFormContainer />
        <div className={classes.content}>
          <h3 className={classes.title}>My contacts</h3>
          <Contact icon={Icon.RoundPhone} name="Phone:" text="+375-(29)-637-06-10" />
          <Contact icon={Icon.RoundMail} name="E-mail:" link={requestString.mail} />
          <Contact icon={Icon.RoundAddress} name="Address:" text="Republic of Belarus, Minsk" />
          <Contact icon={Icon.RoundLink} name="Links:">
            <div className={classes.links}>
              <Link link={requestString.facebook} icon={Icon.SquareFacebook} text="Facebook" iconBeforeName />
              <Link link={requestString.instagram} icon={Icon.SquareInstagram} text="Instagram" iconBeforeName />
              <Link link={requestString.telegram} icon={Icon.SquareTelegram} text="Telegram" iconBeforeName />
            </div>
          </Contact>
        </div>
      </div>
    </div>
  );
};
