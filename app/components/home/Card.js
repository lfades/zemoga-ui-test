import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  StyledCard,
  CardBody,
  CardContent,
  CardVotes,
  VoteUp,
  VoteDown
} from './styles';
import { ThumpUp, ThumpDown } from './icons';
import { H2 } from '../globals';

export default class Card extends React.Component {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  handleClick() {}

  render() {
    const { person } = this.props;

    return (
      <StyledCard>
        <img src={person.photoUrl} alt={person.name} />

        <CardBody>
          <CardContent>
            <div className="thumb">
              <div className="thumb-up">
                <ThumpUp width="18px" height="18px" />
              </div>
            </div>

            <H2>{person.name}</H2>
            <p className="small">
              <span>{moment(person.createdAt).fromNow()}</span> in{' '}
              {person.tags.join(', ')}
            </p>
            <p className="description">{person.description}</p>

            <div className="actions">
              <div className="thumb-up active">
                <ThumpUp width="18px" height="18px" />
              </div>
              <div className="thumb-down">
                <ThumpDown width="18px" height="18px" />
              </div>
              <button type="button">Vote now</button>
            </div>
          </CardContent>

          <CardVotes widthUp={64} widthDown={36}>
            <VoteUp>
              <ThumpUp width="28px" height="28px" />
              <span>64%</span>
            </VoteUp>
            <VoteDown>
              <span>36%</span>
              <ThumpDown width="28px" height="28px" />
            </VoteDown>
          </CardVotes>
        </CardBody>
      </StyledCard>
    );
  }
}
