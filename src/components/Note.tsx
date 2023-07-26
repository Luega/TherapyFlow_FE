import { INote } from "../utils/types";

interface Props {
  note: INote;
}

const Note = ({ note }: Props) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
    </div>
  );
};

export default Note;
