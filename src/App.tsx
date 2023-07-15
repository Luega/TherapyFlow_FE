import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";

type Note = {
  id: number;
  title: string;
  text: string;
};

const fetchData = async () => {
  const res = await axios.get("http://localhost:5103/api/notes");
  const data: Note[] = res.data.data;
  return data;
};

function App() {
  const { isLoading, error, data } = useQuery<Note[], Error>("data", fetchData);

  if (isLoading)
    return (
      <>
        <div>
          <h1>Loading...</h1>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div>
          <h1>{`An error has occurred: ${error.message}`}</h1>
        </div>
      </>
    );

  return (
    <>
      <div>
        <h1>NOTES</h1>
        {data &&
          data.map((note) => {
            return (
              <div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
