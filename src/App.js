import { useQuery } from '@apollo/client';
import { GET_EXCHANGE_RATES } from './graphql/operations';

function App() {
  const { loading, error, data } = useQuery(GET_EXCHANGE_RATES);

  return (
    <>
      {data && data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
      <div>Hello</div>
    </>
  );
}

export default App;
