import MainLayout from "./components/layout/MainLayout";
import ProtectedRouter from "./components/layout/ProtectedRouter";

function App() {
  return (
    <ProtectedRouter>
      <MainLayout />
    </ProtectedRouter>
  );
}

export default App;
