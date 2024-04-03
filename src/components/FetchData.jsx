import useFetch from "./useFetch";

export default function FetchData() {
    const { date } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      {date?.map((element, key) => (
        <p key={key}>{element.name}</p>
      ))}
    </div>
  );
}