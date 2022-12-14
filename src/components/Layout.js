import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'
export function Layout({errorText}) {
    const [search, setSearch] = useState('')
    return (
<div class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex justify-between">
<a href="/" class="flex items-center">
      <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Yugi App</span>
  </a>
      <form style={{ margin: "12px" }}>
          <label>
            Search by card name:
            <input
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={(e) => {
                    e.preventDefault()
                }}
              className="mx-[12px] shadow appearance-none border rounded w-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
            />
          </label>
          <Link to={`/card/${search}`}>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
            name="action"
            value="getName"
          >
            Search
          </button>
          </Link>
          {errorText && <p className="text-right text-red-800 mt-[12px]">{errorText}</p>}
        </form>
      </div>
    );
  }
