import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
