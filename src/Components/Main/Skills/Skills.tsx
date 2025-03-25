import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Skills.module.scss';
import { SkillCard } from './SkillCard/SkillCard';
import HTMLMin from '../../../assets/images/skills/HTML.svg';
import HTMLMax from '../../../assets/images/skills/HTML.png';
import CSSMin from '../../../assets/images/skills/CSS.svg';
import CSSMax from '../../../assets/images/skills/CSS.png';
import LessMin from '../../../assets/images/skills/Less.svg';
import LessMax from '../../../assets/images/skills/Less.png';
import SassMin from '../../../assets/images/skills/Sass.svg';
import SassMax from '../../../assets/images/skills/Sass.png';
import JSMin from '../../../assets/images/skills/JavaScript.svg';
import JSMax from '../../../assets/images/skills/JavaScript.png';
import TSMin from '../../../assets/images/skills/TypeScript.svg';
import TSMax from '../../../assets/images/skills/TypeScript.png';
import ReactMin from '../../../assets/images/skills/React.svg';
import ReactMax from '../../../assets/images/skills/React.png';
import ReduxMin from '../../../assets/images/skills/Redux.svg';
import ReduxMax from '../../../assets/images/skills/Redux.png';
import WebpackMin from '../../../assets/images/skills/Webpack.svg';
import WebpackMax from '../../../assets/images/skills/Webpack.png';
import ESLintMin from '../../../assets/images/skills/ESLint.svg';
import ESLintMax from '../../../assets/images/skills/ESLint.png';
import PrettierMin from '../../../assets/images/skills/Prettier.svg';
import PrettierMax from '../../../assets/images/skills/Prettier.png';
import JestMin from '../../../assets/images/skills/Jest.svg';
import JestMax from '../../../assets/images/skills/Jest.png';
import GitMin from '../../../assets/images/skills/Git.svg';
import GitMax from '../../../assets/images/skills/Git.png';
import GHMin from '../../../assets/images/skills/GitHub.svg';
import GHMax from '../../../assets/images/skills/GitHub.png';
import WSMin from '../../../assets/images/skills/WebStorm.svg';
import WSMax from '../../../assets/images/skills/WebStorm.png';
import FigmaMin from '../../../assets/images/skills/Figma.svg';
import FigmaMax from '../../../assets/images/skills/Figma.png';
import { ContentTxtKey } from '../../../utils/types/enums';

export const Skills: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.skills}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>{t(ContentTxtKey.SkillsTitle)}</h3>
        <div className={classes.skillCards}>
          <SkillCard name={t(ContentTxtKey.HTMLSkill)} className={classes.HTML} LogoMin={HTMLMin} logoMax={HTMLMax} />
          <SkillCard name={t(ContentTxtKey.CSSSkill)} className={classes.CSS} LogoMin={CSSMin} logoMax={CSSMax} />
          <SkillCard name={t(ContentTxtKey.LessSkill)} className={classes.Less} LogoMin={LessMin} logoMax={LessMax} />
          <SkillCard name={t(ContentTxtKey.SassSkill)} className={classes.Sass} LogoMin={SassMin} logoMax={SassMax} />
          <SkillCard name={t(ContentTxtKey.JSSkill)} className={classes.JS} LogoMin={JSMin} logoMax={JSMax} />
          <SkillCard name={t(ContentTxtKey.TSSkill)} className={classes.TS} LogoMin={TSMin} logoMax={TSMax} />
          <SkillCard
            name={t(ContentTxtKey.ReactSkill)}
            className={classes.React}
            LogoMin={ReactMin}
            logoMax={ReactMax}
          />
          <SkillCard
            name={t(ContentTxtKey.ReduxSkill)}
            className={classes.Redux}
            LogoMin={ReduxMin}
            logoMax={ReduxMax}
          />
          <SkillCard name={t(ContentTxtKey.JestSkill)} className={classes.Jest} LogoMin={JestMin} logoMax={JestMax} />
          <SkillCard
            name={t(ContentTxtKey.WebpackSkill)}
            className={classes.Webpack}
            LogoMin={WebpackMin}
            logoMax={WebpackMax}
          />
          <SkillCard
            name={t(ContentTxtKey.ESLintSkill)}
            className={classes.ESLint}
            LogoMin={ESLintMin}
            logoMax={ESLintMax}
          />
          <SkillCard
            name={t(ContentTxtKey.PrettierSkill)}
            className={classes.Prettier}
            LogoMin={PrettierMin}
            logoMax={PrettierMax}
          />
          <SkillCard name={t(ContentTxtKey.GitSkill)} className={classes.Git} LogoMin={GitMin} logoMax={GitMax} />
          <SkillCard name={t(ContentTxtKey.GHSkill)} className={classes.GH} LogoMin={GHMin} logoMax={GHMax} />
          <SkillCard name={t(ContentTxtKey.WSSkill)} className={classes.WS} LogoMin={WSMin} logoMax={WSMax} />
          <SkillCard
            name={t(ContentTxtKey.FigmaSkill)}
            className={classes.Figma}
            LogoMin={FigmaMin}
            logoMax={FigmaMax}
          />
        </div>
      </div>
    </div>
  );
};
