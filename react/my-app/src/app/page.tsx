import Clock from "./_component/Clock";
import TodoList from "./_component/TodoList";

export default function Home() {
  return (
    <div className='flex flex-col text-center gap-3'>
      <TodoList />
      <Clock />
    </div>
  );
}
