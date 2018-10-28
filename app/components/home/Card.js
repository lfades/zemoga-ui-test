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

  return Number(((a / total) * 100).toFixed(1));
}

export default class Card extends React.Component {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  state = {
    thumb: null,
    hasVoted: false
  };

  handleThumb = thumb => () => {
    this.setState({ thumb });
  };

  handleVote = sendVote => e => {
    e.preventDefault();

    const { person } = this.props;
    const { thumb } = this.state;
    const up = thumb === 'up';

    sendVote({
      variables: { personId: person.id, up },
      // Update the cache locally before receiving the server's response
      // to make it feel blazing fast
      optimisticResponse: {
        __typename: 'Mutation',
        vote: {
          __typename: 'Person',
          id: person.id,
          votesUp: person.votesUp + (up ? 1 : 0),
          votesDown: person.votesDown + (up ? 0 : 1)
        }
      }
    })
      .then(() => {
        this.setState({ hasVoted: true });
      })
      .catch(() => {
        console.log('Oh no!, something went wrong.');
      });
  };

  handleNewVote = () => {
    this.setState({ hasVoted: false });
  };

  render() {
    const { person } = this.props;
    const { thumb, hasVoted } = this.state;
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
            <p className="description">
              {hasVoted ? 'Thank you for voting!' : person.description}
            </p>

            <div className="actions">
              {hasVoted ? (
                <button type="button" onClick={this.handleNewVote}>
                  Vote again
                </button>
              ) : (
                <>
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
                        disabled={!thumb || loading}
                      >
                        {error ? 'Error.' : 'Vote now'}
                      </button>
                    )}
                  </Mutation>
                </>
              )}
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
