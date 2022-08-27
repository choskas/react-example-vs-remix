import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErros] = useState({})
    const onSubmit = async (e) => {
        try {
        e.preventDefault()
        let errorObject = {}
        if (!name) errorObject = {...errorObject, name: 'no debe ir vacio'}
        if (!type) errorObject = {...errorObject, type: 'no debe ir vacio'}
        if (!description) errorObject = {...errorObject, description: 'no debe ir vacio'}
        setErros(errorObject)
        if (!name || !type || !description) return;
        // 20,000 lineas mas de codigo para POST
        navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    console.log(errors)
    return (
  <div className="m-6">
    <h2 className="text-xl">Form</h2>
    <form onSubmit={(e) => onSubmit(e)}>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dark Magician"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>
        <div>
          <label
            for="type"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Type
          </label>
          <input
            type="text"
            id="type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Monster"
            onChange={(e) => setType(e.target.value)}
          />
          {errors.type && <small>{errors.type}</small>}
        </div>
        <div>
          <label
            for="Description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Description
          </label>
          <input
            type="text"
            id="The ultimate wizard in terms of attack and defense."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="The ultimate wizard in terms of attack and defense."
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <small>{errors.description}</small>}
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
)};

export default Form;
