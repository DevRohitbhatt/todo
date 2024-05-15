import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
	return (
		<div className='px-5 w-full flex flex-col items-center'>
			<AddTodo />
			<Todo />
		</div>
	);
}

export default App;
