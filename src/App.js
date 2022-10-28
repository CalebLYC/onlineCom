import './App.scss';
import Navigation from './components/Navigation';
import CardProductsContextProvider from './contexts/CardProductsContext';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className='container'>
      <UserContextProvider>
        <CardProductsContextProvider>
          <Navigation />
        </CardProductsContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;