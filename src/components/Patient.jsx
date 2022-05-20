import PropTypes from 'prop-types';

const Patient = ({ patient, setPatient, removePatient }) => {
  const { petName, ownerName, email, entryDate, symptoms, id } = patient;

  const handleRemovePatient = () => {
    const response = confirm('Are you sure you want to remove this patient?');
    if (response) {
      removePatient(id);
    }
  };

  return (
    <div className="mx-5 my-5 rounded-xl bg-white px-5 py-10 shadow-md">
      <p className="mb-3 font-bold uppercase text-gray-700">
        Name:
        <span className="font-normal normal-case">{petName}</span>
      </p>

      <p className="mb-3 font-bold uppercase text-gray-700">
        Owner:
        <span className="font-normal normal-case">{ownerName}</span>
      </p>

      <p className="mb-3 font-bold uppercase text-gray-700">
        Email:
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="mb-3 font-bold uppercase text-gray-700">
        Entry Date:
        <span className="font-normal normal-case">{entryDate}</span>
      </p>

      <p className="mb-3 font-bold uppercase text-gray-700">
        Symptoms:
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="mt-10 flex justify-between">
        <button
          type="button"
          className="rounded-lg bg-indigo-600 py-2 px-10 font-bold uppercase text-white hover:bg-indigo-700"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded-lg bg-red-600 py-2 px-10 font-bold uppercase text-white hover:bg-red-700"
          onClick={handleRemovePatient}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.shape({
    petName: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    entryDate: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired
  }).isRequired
};

export default Patient;
