import { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 flex">
        <Form patients={patients} setPatients={setPatients} />
        <PatientList patients={patients}/>
      </div>
    </div>
  );
}

export default App;
