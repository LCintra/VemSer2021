import React from "react";
interface IProps {
  people: {
    name: string;
    age: number;
    url?: string;
    id: number;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  return (
    <div>
      <p>Testando a Lista</p>
      {people.map((person) => (
        <div key={person.id}>
          <p>{person.name}</p>
          <img src={person.url} />
        </div>
      ))}
    </div>
  );
};

export default List;
