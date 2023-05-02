import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
/**
 *  2 component: class component vs 
 *  JSX: code html trong js
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TodoApp with Hoidanit
        </p>

        {/* <MyComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
