export enum RoutePath {
  NotFound = '*',
  Main = '/',
  About = '/about',
  Skills = '/skills',
  Projects = '/projects',
  Contacts = '/contacts',
}

export enum Icon {
  SquareFacebook = 'iconSquareFacebook',
  SquareInstagram = 'iconSquareInstagram',
  SquareTelegram = 'iconSquareTelegram',
  SquareLinkedin = 'iconSquareLinkedin',
  SquareGithub = 'iconSquareGithub',
  RoundGithub = 'iconRoundGithub',
  RoundPhone = 'iconRoundPhone',
  RoundMail = 'iconRoundMail',
  RoundAddress = 'iconRoundAddress',
  RoundLink = 'iconRoundLink',
}

export enum FieldName {
  Name = 'name',
  Email = 'email',
  Message = 'message',
}

export enum ElementName {
  Input = 'input',
  Textarea = 'textarea',
  P = 'p',
  TypeText = 'text',
  TypeButton = 'button',
  TypeSubmit = 'submit',
  TypeReset = 'reset',
}

export enum EmailStatus {
  Initial = 'initial',
  Sending = 'sending',
  Success = 'success',
  Failure = 'failure',
}

export enum KeyboardEventCode {
  Enter = 'Enter',
  Escape = 'Escape',
}

export enum EventType {
  Unhandledrejection = 'unhandledrejection',
  Click = 'click',
  Keydown = 'keydown',
}

export enum Language {
  Key = 'language',
  En = 'en',
  Ru = 'ru',
}

export enum ContentTxtKey {
  MainTitle = 'content.title.main',
  AboutTitle = 'content.title.about',
  SkillsTitle = 'content.title.skills',
  ProjectsTitle = 'content.title.projects',
  ContactsTitle = 'content.title.contacts',
  NotFoundTitle = 'content.title.notFound',

  AboutDescription1 = 'content.description.about1',
  AboutDescription2 = 'content.description.about2',
  SocialNetworkDescription = 'content.description.SocialNetwork',
  EasyChartsDescription = 'content.description.EasyCharts',
  FutureProjectDescription = 'content.description.FutureProject',
  FooterDescription = 'content.description.footer',

  HTMLSkill = 'content.skill.HTML',
  CSSSkill = 'content.skill.CSS',
  LessSkill = 'content.skill.Less',
  SassSkill = 'content.skill.Sass',
  JSSkill = 'content.skill.JS',
  TSSkill = 'content.skill.TS',
  ReactSkill = 'content.skill.React',
  ReduxSkill = 'content.skill.Redux',
  JestSkill = 'content.skill.Jest',
  WebpackSkill = 'content.skill.Webpack',
  ESLintSkill = 'content.skill.ESLint',
  PrettierSkill = 'content.skill.Prettier',
  GHSkill = 'content.skill.GH',
  WSSkill = 'content.skill.WS',
  FigmaSkill = 'content.skill.Figma',

  AboutLink = 'content.link.about',
  SkillsLink = 'content.link.skills',
  ProjectsLink = 'content.link.projects',
  ContactsLink = 'content.link.contacts',
  CodeLink = 'content.link.code',
  PreviewLink = 'content.link.preview',
  GitHubLink = 'content.link.GitHub',
  LinkedInLink = 'content.link.LinkedIn',
  FacebookLink = 'content.link.Facebook',
  InstagramLink = 'content.link.Instagram',
  TelegramLink = 'content.link.Telegram',

  LanguageButton = 'content.button.language',
  DownloadButton = 'content.button.download',
  ResetButton = 'content.button.reset',
  SendButton = 'content.button.send',

  BNTUText = 'content.text.BNTU',
  SpecialityText1 = 'content.text.speciality1',
  STEPText = 'content.text.STEP',
  SpecialityText2 = 'content.text.speciality2',
  RSSText = 'content.text.RSS',
  SpecialityText3 = 'content.text.speciality3',
  SocialNetworkText = 'content.text.SocialNetwork',
  EasyChartsText = 'content.text.EasyCharts',
  FutureProjectText = 'content.text.FutureProject',
  StudySubnameText = 'content.text.studySubname',
  PetSubnameText = 'content.text.petSubname',
  TechnologyText = 'content.text.technology',
  PhoneText = 'content.text.phone',
  MailText = 'content.text.mail',
  AddressText = 'content.text.address',
  LinksText = 'content.text.links',
  LocationText = 'content.text.location',
}

export enum FormHintTxtKey {
  Contact = 'formHint.contact',
  Filling = 'formHint.filling',
  Name = 'formHint.name',
  Mail = 'formHint.mail',
  Message = 'formHint.message',
  InitialStatus = 'formHint.initialStatus',
  Sending = 'formHint.sending',
  SendingSuccess = 'formHint.sendingSuccess',
}

export enum AltTxtKey {
  Error = 'alt.error',
  Photo = 'alt.photo',
  Logo = 'alt.logo',
}

export enum ValidationTxtKey {
  Mail = 'validation.mail',
  Required = 'validation.required',
  Min = 'validation.min',
  Max = 'validation.max',
}

export enum ErrorTxtKey {
  Error = 'error.error',
  UnhandledPromise = 'error.unhandledPromise',
  UnhandledUI = 'error.unhandledUI',
  NotFound = 'error.notFound',
  Sending = 'error.sending',
}
