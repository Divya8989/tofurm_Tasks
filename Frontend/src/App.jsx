
import React, { useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  Normal1: Yup.string().required("This field is required"),
  Normal2: Yup.string().required("This field is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: Yup.string().required("Please provide a valid email address"),
  focus: Yup.string().required("This field is required"),
  autocomplete: Yup.string().required("This field is required"),
  active: Yup.string().required("This field is required"),
  date: Yup.date().required("Please select a date"),
  value: Yup.number().required("This field is required").min(0, "Value cannot be negative"),
  normal: Yup.string().required("This field is required"),
});

const App = () => {
  const focusRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the form loads
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8 border border-gray-200 rounded-xl shadow-md">
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        Enhanced Form with Shadows
      </h2>
      <Formik
        initialValues={{
          Normal1: "",
          Normal2: "",
          password: "",
          email: "",
          focus: "",
          autocomplete: "",
          active: "",
          date: "",
          value: 0,
          normal: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(
            "Form submitted successfully with values: " +
              JSON.stringify(values, null, 2)
          );
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-5">
                <label htmlFor="Normal1" className="block text-sm font-medium text-gray-700">
                  Normal
                </label>
                <Field
                  id="Normal1"
                  name="Normal1"
                  type="text"
                  placeholder="Placeholder text"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="Normal1" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="Normal2" className="block text-sm font-medium text-gray-700">
                  Normal
                </label>
                <Field
                  id="Normal2"
                  name="Normal2"
                  type="text"
                  placeholder="Placeholder text"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="Normal2" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="************"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="focus" className="block text-sm font-medium text-gray-700">
                  Focus
                </label>
                <Field
                  id="focus"
                  name="focus"
                  type="text"
                  placeholder="Focus on load"
                  ref={focusRef}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="focus" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="autocomplete" className="block text-sm font-medium text-gray-700">
                  Autocomplete
                </label>
                <Field
                  id="autocomplete"
                  name="autocomplete"
                  list="autocompleteOptions"
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <datalist id="autocompleteOptions">
                  <option value="UI design" />
                  <option value="UI design practice" />
                  <option value="UI pattern" />
                  <option value="Daily UI" />
                </datalist>
                <ErrorMessage name="autocomplete" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="active" className="block text-sm font-medium text-gray-700">
                  Active
                </label>
                <Field
                  id="active"
                  name="active"
                  type="text"
                  value="UI"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="active" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <Field
                  id="date"
                  name="date"
                  type="date"
                  placeholder="Select a date"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="date" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="value" className="block text-sm font-medium text-gray-700">
                  Value
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue("value", Math.max(0, values.value - 1))
                    }
                    className="p-2 bg-gray-200 border border-gray-300 rounded-md cursor-pointer mr-2"
                  >
                    -
                  </button>
                  <Field
                    id="value"
                    name="value"
                    type="number"
                    placeholder="0"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                    value={values.value || 0}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue("value", (values.value || 0) + 1)
                    }
                    className="p-2 bg-gray-200 border border-gray-300 rounded-md cursor-pointer ml-2"
                  >
                    +
                  </button>
                </div>
                <ErrorMessage name="value" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="normal" className="block text-sm font-medium text-gray-700">
                  Normal
                </label>
                <Field
                  id="normal"
                  name="normal"
                  type="text"
                  placeholder="Placeholder text"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm text-base"
                />
                <ErrorMessage name="normal" component="div" className="text-red-500 text-xs mt-1" />
                <small className="block mt-1 text-xs text-gray-500">
                  Write any text that might help the user to fill the input.
                </small>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg shadow-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
