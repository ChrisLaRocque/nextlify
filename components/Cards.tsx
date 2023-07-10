"use client";
import { useEffect, useState } from "react";
// const data = [
//   { title: "1", body: "lorem imsup give a dog a bone", id: "data-1" },
//   { title: "2", body: "lorem imsup give a dog a bone", id: "data-2" },
//   { title: "3", body: "lorem imsup give a dog a bone", id: "data-3" },
// ];
type TCard = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt?: Date;
};
export default function Cards() {
  const [cards, setCards] = useState<TCard[] | []>([]);
  const addCard = (e) => {
    const createdAt = new Date();
    // console.log("createdAt", createdAt);
    const placeholder = {
      id: cards.length,
      title: "New card",
      body: "Lorem ipsum yadda yadda",
      createdAt,
    };
    setCards([...cards, placeholder]);
  };
  function Card({ type = null, title, body, i }) {
    const updateCards = (e, type) => {
      const updatedAt = new Date();
      const {
        target: { textContent },
      } = e;
      const newCards = cards;
      // newCards[i][type] = textContent;
      newCards[i]["updatedAt"] = updatedAt;
      //   console.log("newCards", newCards);
      return setCards(newCards);
    };

    return (
      <div className="p-6 shadow-lg w-full">
        <h2
          contentEditable="true"
          onBlur={(e) => updateCards(e, "title")}
          suppressContentEditableWarning={true}
          className="tracking-tight text-xl leading-5 mt-2"
        >
          {title}
        </h2>
        <p
          contentEditable="true"
          onBlur={(e) => updateCards(e, "body")}
          suppressContentEditableWarning={true}
          className="leading-1"
        >
          {body}
        </p>
      </div>
    );
  }
  //   useEffect(() => {
  //     console.log(cards);
  //   }, [cards]);
  return (
    <section className="mx-auto max-w-7xl p-6 lg:px-8">
      <div>Cards</div>
      <button onClick={(e) => addCard(e)}>New card</button>
      <div className="max-w-4xl mx-auto">
        {cards &&
          cards.map((card, i) => {
            const propsWithI = { ...card, i };
            return <Card {...propsWithI} key={i} />;
          })}
      </div>
    </section>
  );
}
