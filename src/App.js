import './App.css';
import { CityProvider } from './context/CityContext';
import { WheatherProvider } from './context/WheatherContext';

function App() {
  return (
    <div className="App">
      <WheatherProvider>
        <CityProvider>
          
        </CityProvider>
      </WheatherProvider>
    </div>
  );
}

export default App;
