import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import useJsonFetch from './useJsonFetch';

function Comp1 () {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/", 
    "data"
  );
  return (
    <Fragment>
      {data && <div>{data.status}</div>}
      {loading && <p>Loading...</p>}
      {error && <p>Ups... something wrong:(</p>}
    </Fragment>
  )
}

function Comp2 () {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/", 
    "error"
  );
  return (
    <Fragment>
      {data && <div>{data.status}</div>}
      {loading && <p>Loading...</p>}
      {error && <p>Ups... something wrong:(</p>}
    </Fragment>
  )
}

function Comp3 () {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/", 
    "loading"
  );
  return (
    <Fragment>
      {data && <div>{data.status}</div>}
      {loading && <p>Loading...</p>}
      {error && <p>Ups... something wrong:(</p>}
    </Fragment>
  )
}

function App() {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

export default App;
