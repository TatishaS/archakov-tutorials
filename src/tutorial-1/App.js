import Profile from './components/ProfileClass';

function App() {
  return (
    <div>
      <h1>Урок 1</h1>
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
