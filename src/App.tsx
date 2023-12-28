import ConditionalRendering from "./Question4";
import Question5 from "./Question5";

function App() {
  return (
    <div className="App">
      <ConditionalRendering isLoggedIn={false} />
      <Question5 />
    </div>
  );
}

export default App;
