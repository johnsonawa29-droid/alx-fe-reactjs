import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setError("");

    // Mock API call
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("User registered:", data);

      alert("Registration successful!");

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Register (Controlled)</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
