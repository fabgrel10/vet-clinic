import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Error from './Error';

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setEmail(patient.email);
      setEntryDate(patient.entryDate);
      setSymptoms(patient.symptoms);
    } else {
      setPetName('');
      setOwnerName('');
      setEmail('');
      setEntryDate('');
      setSymptoms('');
    }
  }, [patient]);

  const handleSubmit = event => {
    event.preventDefault();

    if ([petName, ownerName, email, entryDate, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const idGenerator = () => {
      const date = Date.now().toString(36);
      const randomNum = Math.random().toString(36).substring(2, 15);
      return date + randomNum;
    };

    const patientsObj = {
      petName,
      ownerName,
      email,
      entryDate,
      symptoms
    };

    if (patient.id) {
      // Edit patient
      patientsObj.id = patient.id;
      const updatedPatients = patients.map(p =>
        p.id === patient.id ? patientsObj : p
      );
      setPatients(updatedPatients);
      setPatient({});
    } else {
      // Add patient
      patientsObj.id = idGenerator();
      setPatients([...patients, patientsObj]);
    }

    setPetName('');
    setOwnerName('');
    setEmail('');
    setEntryDate('');
    setSymptoms('');
  };

  return (
    <div className=" lg:2/5 md:w-1/2">
      <h2 className="mb-5 text-center text-3xl font-black">
        {' '}
        <span className="font-bold text-indigo-600">Patient</span> Info
      </h2>
      <form
        className="mb-10 rounded-lg bg-white py-10 px-5 shadow-md"
        onSubmit={handleSubmit}
      >
        {error && <Error message="All fields are required." />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block font-bold uppercase text-gray-700"
          >
            Pet Name
            <input
              id="pet"
              type="text"
              placeholder="Buddy"
              className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
              value={petName}
              onChange={e => setPetName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block font-bold uppercase text-gray-700"
          >
            Owner&apos;s Name
            <input
              id="owner"
              type="text"
              placeholder="John Doe"
              className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
              value={ownerName}
              onChange={e => setOwnerName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-bold uppercase text-gray-700"
          >
            Email
            <input
              id="email"
              type="email"
              placeholder="j.dow@email.com"
              className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="entry"
            className="block font-bold uppercase text-gray-700"
          >
            Entry Date
            <input
              id="entry"
              type="date"
              className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
              value={entryDate}
              onChange={e => setEntryDate(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block font-bold uppercase text-gray-700"
          >
            Symptoms
            <textarea
              id="symptoms"
              className="mt-2 w-full rounded-md border-2 p-1 placeholder-gray-400"
              placeholder="Decreased Appetite ..."
              value={symptoms}
              onChange={e => setSymptoms(e.target.value)}
            />
          </label>
        </div>
        <input
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 p-3 font-bold uppercase text-white transition-colors hover:bg-indigo-700"
          value={patient.id ? 'Update Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatients: PropTypes.func.isRequired
};

export default Form;
