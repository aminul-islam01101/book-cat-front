import AddBookForm from './AddBookForm';

// ... (Other imports)

const AddBook = () => (
  <div className="pt-20 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Book</h2>
    </div>
    <AddBookForm />
  </div>
);

export default AddBook;
