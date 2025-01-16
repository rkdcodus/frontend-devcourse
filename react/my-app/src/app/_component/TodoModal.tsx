import { SetStateAction } from "react";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

interface Props {
  setModal: (value: SetStateAction<boolean>) => void;
  todo: Todo;
}

export default function TodoModal({ setModal, todo }: Props) {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className='absolute w-full h-dvh top-0 left-0 bg-[rgba(0,0,0,0.3)] '>
      <div className='flex justify-center mt-10'>
        <div className='w-[500px] max-h-[400px] bg-white p-4 rounded-lg flex flex-col '>
          <div className='flex border-b-2'>
            <span className='grow'>Todo 상세 정보</span>
            <button onClick={closeModal} className='text-left pb-2'>
              X
            </button>
          </div>
          <div className='py-2'>{todo.text}</div>
        </div>
      </div>
    </div>
  );
}
