import AppRoutes from './routes/AppRoutes';
import { ApiProvider } from './context/apiContext';

function App() {
  return (
    <>
      <ApiProvider>
        <AppRoutes />
      </ApiProvider>
    </>
  );
}

export default App;
