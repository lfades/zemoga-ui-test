import { Query } from 'react-apollo';
import { StyledCards } from './styles';
import { People } from './queries.graphql';
import Card from './Card';

export default () => (
  <Query query={People}>
    {({ loading, error, data }) => {
      // This should never happen because I'm prefetching the data during SSR,
      // but it should be handled
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Ups!, something went wrong.</p>;

      if (!data || !data.people.length) return <p>Oh no!. There is no one!</p>;

      return (
        <StyledCards>
          {data.people.map(person => (
            <Card key={person.id} person={person} />
          ))}
        </StyledCards>
      );
    }}
  </Query>
);
