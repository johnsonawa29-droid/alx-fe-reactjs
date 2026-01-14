import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <WelcomeMessage />

      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
  );
}

export default App;
