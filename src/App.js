import Provider from './context/provider'
import ConsumeData from "./context/ConsumeData";

function App() {
  return (
    <div>
      <Provider>
        <ConsumeData/>
      </Provider>
    </div>
  );
}

export default App;
