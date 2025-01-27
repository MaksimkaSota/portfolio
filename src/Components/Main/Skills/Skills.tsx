import type { FC, ReactElement } from 'react';
import classes from './Skills.module.scss';
import { SkillCard } from './SkillCard/SkillCard';
import HTML from '../../../assets/images/logos/HTML.png';
import CSS from '../../../assets/images/logos/CSS.png';
import Less from '../../../assets/images/logos/Less.png';
import Sass from '../../../assets/images/logos/Sass.png';
import JS from '../../../assets/images/logos/JavaScript.png';
import TS from '../../../assets/images/logos/TypeScript.png';
import React from '../../../assets/images/logos/React.png';
import Redux from '../../../assets/images/logos/Redux.png';
import Webpack from '../../../assets/images/logos/Webpack.png';
import ESLint from '../../../assets/images/logos/ESLint.png';
import Prettier from '../../../assets/images/logos/Prettier.png';
import Jest from '../../../assets/images/logos/Jest.png';
import Git from '../../../assets/images/logos/Git.png';
import GH from '../../../assets/images/logos/GitHub.png';
import WS from '../../../assets/images/logos/WebStorm.png';
import Figma from '../../../assets/images/logos/Figma.png';

export const Skills: FC = (): ReactElement => {
  return (
    <div className={classes.skills}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>My skills</h3>
        <div className={classes.skillCards}>
          <SkillCard name="HTML" className={classes.HTML} logo={HTML} />
          <SkillCard name="CSS" className={classes.CSS} logo={CSS} />
          <SkillCard name="Less" className={classes.Less} logo={Less} />
          <SkillCard name="Sass" className={classes.Sass} logo={Sass} />
          <SkillCard name="JavaScript" className={classes.JS} logo={JS} />
          <SkillCard name="TypeScript" className={classes.TS} logo={TS} />
          <SkillCard name="React" className={classes.React} logo={React} />
          <SkillCard name="Redux" className={classes.Redux} logo={Redux} />
          <SkillCard name="Jest" className={classes.Jest} logo={Jest} />
          <SkillCard name="Webpack" className={classes.Webpack} logo={Webpack} />
          <SkillCard name="ESLint" className={classes.ESLint} logo={ESLint} />
          <SkillCard name="Prettier" className={classes.Prettier} logo={Prettier} />
          <SkillCard name="Git" className={classes.Git} logo={Git} />
          <SkillCard name="GitHub" className={classes.GH} logo={GH} />
          <SkillCard name="WebStorm" className={classes.WS} logo={WS} />
          <SkillCard name="Figma" className={classes.Figma} logo={Figma} />
        </div>
      </div>
    </div>
  );
};
