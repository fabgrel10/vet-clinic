import Patient from './Patient';

const PatientList = () => (
  <div className="h-screen overflow-x-scroll md:w-1/2 lg:w-3/5">
    <h2 className="mb-5 text-center text-3xl font-black">
      {' '}
      <span className="font-bold text-indigo-600">Patient</span> List
    </h2>
    <Patient />
    <Patient />
    <Patient />
  </div>
);

export default PatientList;
