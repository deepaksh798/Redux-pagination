import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteItem } from './features/dataSlice';

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const state = useSelector((state) => state.cardData);
  console.log('state', state.data);

  const fetchDataFunc = () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('here');
      fetchDataFunc();
    }, 3000);
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(state.data.length / 10) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  }

  return (
    <>
      <div>
        {state.data ? (
          <div>
            <h1 className="mb-6 text-3xl font-semibold bg-slate-400">React Pagination</h1>
            <div className="grid md:grid-cols-3 gap-4">
              {state.data.slice(page * 10 - 10, page * 10).map((data, index) => (
                <a
                  key={index}
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{data.body}</p>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                    onClick={() => handleDelete(index)}
                    >Delete</button>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}

            {state.data.length > 0 && (
              <div className="pt-8">
                <ul href='/' className="inline-flex -space-x-px text-base h-10">
                  <li>
                    <a
                      className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default"
                      onClick={() => selectPageHandler(page - 1)}
                    >
                      Previous
                    </a>
                  </li>

                  {[...Array(Math.ceil(state.data.length / 10))].map((_, i) => (
                    <a
                      className={
                        page === i + 1
                          ? 'flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white cursor-default'
                          : 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default'
                      }
                      onClick={() => selectPageHandler(i + 1)}
                      key={i}
                    >
                      {i + 1}
                    </a>
                  ))}
                  <a
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default"
                    onClick={() => selectPageHandler(page + 1)}
                  >
                    Next
                  </a>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <h1 className="text-5xl">Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
