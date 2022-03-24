const Patient = () => (
  <div className="mx-5 my-5 rounded-xl bg-white px-5 py-10 shadow-md">
    <p className="mb-3 font-bold uppercase text-gray-700">
      Name:
      <span className="font-normal normal-case">Rocky</span>
    </p>

    <p className="mb-3 font-bold uppercase text-gray-700">
      Owner:
      <span className="font-normal normal-case">Fabrizio</span>
    </p>

    <p className="mb-3 font-bold uppercase text-gray-700">
      Email:
      <span className="font-normal normal-case">fabgrel10@gmail.com</span>
    </p>

    <p className="mb-3 font-bold uppercase text-gray-700">
      Entry Date:
      <span className="font-normal normal-case">22/03/2022</span>
    </p>

    <p className="mb-3 font-bold uppercase text-gray-700">
      Symptoms:
      <span className="font-normal normal-case">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias facere
        tempore totam itaque harum repellendus magnam quia laborum iure
        veritatis? Eveniet cumque molestiae quisquam. Cupiditate, rerum
        excepturi! Cumque, debitis illo!{' '}
      </span>
    </p>
    <div className="mt-10 flex justify-between">
      <button
        type="button"
        className="rounded-lg bg-indigo-600 py-2 px-10 font-bold uppercase text-white hover:bg-indigo-700"
      >
        Edit
      </button>
      <button
        type="button"
        className="rounded-lg bg-red-600 py-2 px-10 font-bold uppercase text-white hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  </div>
);

export default Patient;
