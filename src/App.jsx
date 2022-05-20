import { useEffect, useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const patientsStorage = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(patientsStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patient, patients]);

  const removePatient = id => {
    const updatedPatients = patients.filter(p => p.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  );
}

export default App;
