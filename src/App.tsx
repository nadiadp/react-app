import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Mingi from "./components/Mingi";

function App() {
  return (
    <>
      <Alert>DO NOT CLICK THE PHOTO</Alert>
      <Mingi />
      {/* dynamically render ListGroup with different items and headings */}
      <ListGroup
        items={[
          "Takis",
          "Dill Pickles",
          "Churrasco",
          "Anything drowned in lime juice and high in sodium",
        ]}
        heading="My favorite foods"
      />
    </>
  );
}

export default App;
