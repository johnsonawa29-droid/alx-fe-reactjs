
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Johnson"
        age={25}
        bio="A passionate React developer learning hooks."
      />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
