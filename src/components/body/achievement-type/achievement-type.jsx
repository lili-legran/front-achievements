/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import Achievement from '../achievement/achievement';
import Arrow from '../../icons/arrow';
import './achievement-type.scss';

class AchievementType extends React.Component {
  render() {
    const { typeAchievements, type, language } = this.props;
    return (
      <div className='achievement-type'>
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='achievement-type__title'>
                  {type.toUpperCase()}
                  <Arrow />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='accordion-content'>
                {typeAchievements.map((achieve) => (
                  <Achievement
                    key={achieve.id}
                    title={achieve.title}
                    description={achieve.description}
                    mark={achieve.mark}
                    id={achieve.id}
                    language={language}
                    type={type}
                    completed={achieve.completed || false}
                  />
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

AchievementType.propTypes = {
  typeAchievements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      titile: PropTypes.string,
      description: PropTypes.string,
      mark: PropTypes.number
    })
  ).isRequired,
  type: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

export default AchievementType;
