import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";

type Card = {
  id: string;
};

const ProjectItems = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleDelete = (cardToDelete: string) => {
    const filteredCards = cards.filter((card) => card.id !== cardToDelete);
    setCards(filteredCards);
  };

  useEffect(() => {
    const newCards: Card[] = [];
    for (let i = 0; i < 10; i++) {
      const id = uuidv4();
      newCards.push({ id });
    }
    setCards(newCards);
  }, []);

  return (
    <>
      {cards.map((card) => (
        <ProjectItem
          key={card.id}
          id={card.id}
          handleDelete={handleDelete}
          path={"path/path/path/path"}
        />
      ))}
    </>
  );
};

export default ProjectItems;
