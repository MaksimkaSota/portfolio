import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Contacts.module.scss';
import { ContactFormContainer } from './ContactForm/ContactFormContainer';
import { Contact } from './Contact/Contact';
import { Link } from '../../Common/Link/Link';
import { ContentTxtKey, Icon } from '../../../utils/types/enums';
import { requestString } from '../../../services/api/endpoints';

export const Contacts: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.contacts}>
      <div className={classes.wrapper}>
        <ContactFormContainer />
        <div className={classes.content}>
          <h3 className={classes.title}>{t(ContentTxtKey.ContactsTitle)}</h3>
          <Contact icon={Icon.RoundPhone} name={t(ContentTxtKey.PhoneText)} phone="+375296370610" />
          <Contact icon={Icon.RoundMail} name={t(ContentTxtKey.MailText)} link={requestString.mail} />
          <Contact icon={Icon.RoundAddress} name={t(ContentTxtKey.AddressText)} text={t(ContentTxtKey.LocationText)} />
          <Contact icon={Icon.RoundLink} name={t(ContentTxtKey.LinksText)}>
            <div className={classes.links}>
              <Link
                link={requestString.facebook}
                icon={Icon.SquareFacebook}
                text={t(ContentTxtKey.FacebookLink)}
                iconBeforeName
              />
              <Link
                link={requestString.instagram}
                icon={Icon.SquareInstagram}
                text={t(ContentTxtKey.InstagramLink)}
                iconBeforeName
              />
              <Link
                link={requestString.telegram}
                icon={Icon.SquareTelegram}
                text={t(ContentTxtKey.TelegramLink)}
                iconBeforeName
              />
            </div>
          </Contact>
        </div>
      </div>
    </div>
  );
};
