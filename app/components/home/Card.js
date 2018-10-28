import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Mutation } from 'react-apollo';
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
import { SendVote } from './queries.graphql';

/**
 * Returns the percent of a in (a + b)
 */
function getPercent(a, b) {
  const total = a + b;

  if (!total || !a) return 0;

  return Math.round((a / total) * 100);
}

export default class Card extends React.Component {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  state = {
    thumb: null
  };

  handleThumb = thumb => () => {
    this.setState({ thumb });
  };

  handleVote = sendVote => e => {
    e.preventDefault();

    const { person } = this.props;
    const { thumb } = this.state;

    sendVote({
      variables: { personId: person.id, up: thumb === 'up' }
    })
      .then(() => {
        console.log('Vote sent!');
      })
      .catch(() => {
        console.log('Oh no!, something went wrong.');
      });
  };

  render() {
    const { person } = this.props;
    const { thumb } = this.state;
    const widthUp = getPercent(person.votesUp, person.votesDown);
    const widthDown = getPercent(person.votesDown, person.votesUp);

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
              <div
                className={`thumb-up${thumb === 'up' ? ' active' : ''}`}
                onClick={this.handleThumb('up')}
              >
                <ThumpUp width="18px" height="18px" />
              </div>
              <div
                className={`thumb-down${thumb === 'down' ? ' active' : ''}`}
                onClick={this.handleThumb('down')}
              >
                <ThumpDown width="18px" height="18px" />
              </div>

              <Mutation mutation={SendVote}>
                {(sendVote, { loading, error }) => (
                  <button
                    type="button"
                    onClick={this.handleVote(sendVote)}
                    disabled={!thumb}
                  >
                    {error && 'Error.'}
                    {loading && !error ? 'Sending vote...' : 'Vote now'}
                  </button>
                )}
              </Mutation>
            </div>
          </CardContent>

          <CardVotes widthUp={widthUp} widthDown={widthDown}>
            <VoteUp>
              <ThumpUp width="28px" height="28px" />
              <span>{widthUp}%</span>
            </VoteUp>
            <VoteDown>
              <span>{widthDown}%</span>
              <ThumpDown width="28px" height="28px" />
            </VoteDown>
          </CardVotes>
        </CardBody>
      </StyledCard>
    );
  }
}
