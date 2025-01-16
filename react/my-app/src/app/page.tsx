import Clock from "./_component/Clock";
import TodoList from "./_component/TodoList";
import Weather from "./_component/Weather";

export default function Home() {
  return (
    <div className='p-5 bg-blue-600 flex flex-col justify-center items-center text-center gap-3'>
      <TodoList />
      <Clock />
      <Weather weather='맑음'>일기예보</Weather>
    </div>
  );
}
