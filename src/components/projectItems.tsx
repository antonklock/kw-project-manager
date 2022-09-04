import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";

const ProjectItems = () => {
  const [cards, setCards] = useState<React.ReactElement[]>([]);

  const handleDelete = (cardToDelete: string) => {
    console.log("cards: ", cards);
    const newCards = cards.filter((card) => card.props.id !== cardToDelete);
    console.log("newCards: ", newCards);
    setCards(newCards);
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const id = uuidv4();
      console.log("Created card with key: ", id);
      cards.push(<ProjectItem id={id} key={id} handleDelete={handleDelete} />);
    }
  }, []);

  useEffect(() => {
    console.log("cards: ", cards);
  }, [cards]);

  return <>{cards}</>;
};

export default ProjectItems;
