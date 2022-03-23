import Form from './components/Form';
import Header from './components/Header';
import PetList from './components/PetList';

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 flex">
        <Form />
        <PetList />
      </div>
    </div>
  );
}

export default App;
