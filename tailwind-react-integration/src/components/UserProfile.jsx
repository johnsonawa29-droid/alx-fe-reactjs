// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-sm mx-auto my-12 sm:my-16 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-32 sm:w-36 h-32 sm:h-36 mx-auto"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-3 sm:my-4 text-center font-semibold">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  )
}

export default UserProfile
