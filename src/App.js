import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './graphql/operations';

function App() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  return (
    <>
      {data && data.viewer.repositories.nodes.map(({ name }) => (
        <div key={name}>
          <p>
            {name}
          </p>
        </div>
      ))}
      <div>Hello</div>
    </>
  );
}

export default App;
