import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("User registered:", data);

      alert("Registration successful!");
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
        <h2 className="text-xl font-bold text-center">Register (Formik)</h2>

        <div>
          <Field
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
