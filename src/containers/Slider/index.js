import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus
    // Ajout d'une condition: si on a data?.focus alors on tri les data, sinon on a un tableau vide.
    // Permet que la byDateDesc existe nomatterwhat. 
    ? data?.focus.sort((evtA, evtB) =>
      // si on a les datas. 
      new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
    )

    :
    // sinon
    [];

  const handleOptionChange = (e) => {
    setIndex(parseInt(e.target.value, 10))  // Transforme la valeur en valeur chiffrée afin de pouvoir l'utilisé dans le state. //
  };

  useEffect(() => {

    // utilisation d'un set interval comme condition d'activation. 
    const transition = setInterval(() => {
      setIndex((current) =>
        // Ajout du -1 pour corriger la slide blanc arrivée en fin de lecture tableau
        current < byDateDesc.length - 1 ? current + 1 : 0
      ); // Incrémentation de l'index ou retour au début s'il atteint la fin
    }, 5000); // Durée de transition
    // réinitialisation de l'interval. 
    return () => clearInterval(transition);
  },
    // reappel de la fonction lors de la modification de l'une des dépendances spécifiées
    [index, byDateDesc.length]);

  return (

    < div className="SlideCardList" >
      {byDateDesc?.map((
        event,
        idx
      ) => (

        <div
          key={event.title}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
            }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      )
      )}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={event.id}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              // Ajout de la prop value afin de pouvoir faire le pont entre les slides et les inputs. 
              value={radioIdx}
              onChange={handleOptionChange}
            />
          )
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
