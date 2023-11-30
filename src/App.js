import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import './App.css';

const MyForm = () => {
  const methods = useForm();
  const { handleSubmit, register, setError, formState: { errors } } = methods;

  const onSubmit = (data) => {
    // Perform form submission logic

    // Example: Manually set an error for a specific field
    setError("inputA", {
      type: "manual",
      message: "This is a custom error message for Input A",
    });

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="inputA">Input A</label>
      <input {...register("inputA", { required: true })} />
      {errors.inputA && <p>{errors.inputA.message}</p>} {/* Display error message */}

      <label htmlFor="inputB">Input B</label>
      <input {...register("inputB", { required: true })} />
      {errors.inputB && <p>{errors.inputB.message}</p>} {/* Display error message */}

      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <MyForm />
    </FormProvider>
  );
};

export default App;
