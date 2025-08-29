import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Mingi from "./components/Mingi";

function App() {
  return (
    <>
      <Alert>THIS IS MY ALERT</Alert>

      <Mingi />

      <ListGroup
        items={["New York", "San Francisco", "Tokyo", "London"]}
        heading="Cities"
      />
    </>
  );
}

export default App;
