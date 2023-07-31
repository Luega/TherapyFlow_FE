import { INote } from "../utils/types";

interface Props {
  note: INote;
}

const NotePreview = ({ note }: Props) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
    </div>
  );
};

export default NotePreview;
