"use client";

import { useState } from "react";
import TodoModal from "./TodoModal";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

export default function TodoList() {
  const title = "오늘 할 일";
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [modal, setModal] = useState(false);

  const handleCheckedChange = (itemId: number, check: boolean) => {
    setTodos((items) =>
      items.map((item) => (item.id === itemId ? { ...item, isChecked: check } : item))
    );
  };

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const lastTodo = todos.at(-1);
    let newId = 1;

    if (lastTodo) {
      newId = lastTodo.id + 1;
    }

    if (newTodo.trim() !== "") {
      const newTodoObj = {
        id: newId,
        text: newTodo,
        isChecked: false,
      };
      setTodos((prev) => [...prev, newTodoObj]);
      setNewTodo("");
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const deleteTodo = (itemId: number) => {
    setTodos(todos.filter((todo) => todo.id !== itemId));
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className='flex flex-col gap-3'>
      <div className='font-bold text-white text-lg text-center'>{title}</div>
      <form className='flex gap-2'>
        <input
          type='text'
          className='grow px-2'
          placeholder='새로운 할 일 등록'
          onChange={onChangeInput}
        />
        <button className='px-2 bg-white rounded-lg' onClick={addTodo}>
          등록
        </button>
      </form>

      <ul className='bg-white w-[300px] p-3 rounded-xl text-sm flex flex-col gap-3'>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='flex flex-row gap-3 items-center'>
              <input
                type='checkbox'
                onChange={(e) => handleCheckedChange(todo.id, e.target.checked)}
                value={newTodo}
              />
              {!todo.isChecked ? <div>{todo.text}</div> : <del>{todo.text}</del>}

              <button
                onClick={() => deleteTodo(todo.id)}
                className='px-2 py-1 rounded-md text-red-500 border border-red-500 text-xs'>
                삭제
              </button>
              <button
                onClick={openModal}
                className='px-2 py-1 rounded-md text-blue-500 border border-blue-500 text-xs'>
                상세
              </button>
              {modal && <TodoModal setModal={setModal} todo={todo} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
