export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// La méthode getMonth() retourne le mois de la date renseignée d'après l'heure locale. 
// La numérotation démarre à 0 (c'est-à-dire que 0 correspond au premier mois de l'année).
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
