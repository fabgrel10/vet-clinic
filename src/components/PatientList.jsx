import PropTypes from 'prop-types';

import Patient from './Patient';

const PatientList = ({ patients, setPatient, removePatient }) => (
  <div className="h-screen overflow-x-scroll md:w-1/2 lg:w-3/5">
    {patients && patients.length ? (
      <>
        <h2 className="mb-5 text-center text-3xl font-black">
          {' '}
          <span className="font-bold text-indigo-600">Patient</span> List
        </h2>
        {patients.map(patient => (
          <Patient
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            removePatient={removePatient}
          />
        ))}
      </>
    ) : (
      <h2 className="mb-5 text-center text-3xl font-black">
        {' '}
        <span className="font-bold text-indigo-600">No</span> Patients
      </h2>
    )}
  </div>
);

PatientList.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      petName: PropTypes.string.isRequired,
      ownerName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      entryDate: PropTypes.string.isRequired,
      symptoms: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default PatientList;
