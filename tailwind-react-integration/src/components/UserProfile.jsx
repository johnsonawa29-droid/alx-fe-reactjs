// src/components/UserProfile.jsx
import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      {/* Profile Image with hover effect */}
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-32 h-32 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
      />

      {/* User Info */}
      <h2 className="mt-4 text-2xl font-semibold hover:text-blue-500 transition-colors duration-300 cursor-pointer">
        {user.name}
      </h2>
      <p className="text-gray-500 mb-2">@{user.login}</p>
      <p className="text-gray-700 text-center">{user.bio || "No bio available."}</p>

      {/* Optional links */}
      <div className="flex space-x-4 mt-4">
        {user.html_url && (
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            GitHub
          </a>
        )}
        {user.blog && (
          <a
            href={user.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
          >
            Blog
          </a>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
