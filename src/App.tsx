import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import TodoListContextProvider from './context/TodoListContext';


const App: React.FC = () => {
  return (
    <div className="App"> 
      <TodoListContextProvider>
        <InputField />
        <TodoList />
      </TodoListContextProvider>
    </div>
  );
}

export default App;
