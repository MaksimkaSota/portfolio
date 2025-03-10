import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Skills.module.scss';
import { SkillCard } from './SkillCard/SkillCard';
import HTML from '../../../assets/images/skills/HTML.png';
import CSS from '../../../assets/images/skills/CSS.png';
import Less from '../../../assets/images/skills/Less.png';
import Sass from '../../../assets/images/skills/Sass.png';
import JS from '../../../assets/images/skills/JavaScript.png';
import TS from '../../../assets/images/skills/TypeScript.png';
import React from '../../../assets/images/skills/React.png';
import Redux from '../../../assets/images/skills/Redux.png';
import Webpack from '../../../assets/images/skills/Webpack.png';
import ESLint from '../../../assets/images/skills/ESLint.png';
import Prettier from '../../../assets/images/skills/Prettier.png';
import Jest from '../../../assets/images/skills/Jest.png';
import Git from '../../../assets/images/skills/Git.png';
import GH from '../../../assets/images/skills/GitHub.png';
import WS from '../../../assets/images/skills/WebStorm.png';
import Figma from '../../../assets/images/skills/Figma.png';
import { ContentTxtKey } from '../../../utils/types/enums';

export const Skills: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.skills}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>{t(ContentTxtKey.SkillsTitle)}</h3>
        <div className={classes.skillCards}>
          <SkillCard name={t(ContentTxtKey.HTMLSkill)} className={classes.HTML} logo={HTML} />
          <SkillCard name={t(ContentTxtKey.CSSSkill)} className={classes.CSS} logo={CSS} />
          <SkillCard name={t(ContentTxtKey.LessSkill)} className={classes.Less} logo={Less} />
          <SkillCard name={t(ContentTxtKey.SassSkill)} className={classes.Sass} logo={Sass} />
          <SkillCard name={t(ContentTxtKey.JSSkill)} className={classes.JS} logo={JS} />
          <SkillCard name={t(ContentTxtKey.TSSkill)} className={classes.TS} logo={TS} />
          <SkillCard name={t(ContentTxtKey.ReactSkill)} className={classes.React} logo={React} />
          <SkillCard name={t(ContentTxtKey.ReduxSkill)} className={classes.Redux} logo={Redux} />
          <SkillCard name={t(ContentTxtKey.JestSkill)} className={classes.Jest} logo={Jest} />
          <SkillCard name={t(ContentTxtKey.WebpackSkill)} className={classes.Webpack} logo={Webpack} />
          <SkillCard name={t(ContentTxtKey.ESLintSkill)} className={classes.ESLint} logo={ESLint} />
          <SkillCard name={t(ContentTxtKey.PrettierSkill)} className={classes.Prettier} logo={Prettier} />
          <SkillCard name={t(ContentTxtKey.GitSkill)} className={classes.Git} logo={Git} />
          <SkillCard name={t(ContentTxtKey.GHSkill)} className={classes.GH} logo={GH} />
          <SkillCard name={t(ContentTxtKey.WSSkill)} className={classes.WS} logo={WS} />
          <SkillCard name={t(ContentTxtKey.FigmaSkill)} className={classes.Figma} logo={Figma} />
        </div>
      </div>
    </div>
  );
};
