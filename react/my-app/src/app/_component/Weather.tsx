interface Props {
  weather: string;
  children: React.ReactNode;
}

export default function Weather({ weather, children }: Props) {
  return (
    <>
      <div>{children} </div>
      <div>오늘의 날씨는 {weather} 입니다.</div>
    </>
  );
}
