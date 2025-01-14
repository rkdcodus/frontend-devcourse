import Image from "next/image";

export default function Home() {
  const str = "{ }을 사용하여 JS 표현식을 사용할 수 있음.";
  const arr = ["Apple", "Banana", "Cherry"];
  return (
    <div className='bg-indigo-600 w-full h-dvh flex flex-col gap-5 pt-5 items-center'>
      <h1 className='text-7xl text-white'>Hello! React</h1>
      <div className='text-white text-3xl'>JSX 문법</div>
      <p className='text-white text-3xl'>{str}</p>
      <p>{true ? "YES" : "NO"}</p>
      <ul>
        {arr.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
