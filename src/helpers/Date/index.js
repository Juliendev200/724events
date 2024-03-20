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

// La variable date commence a 0 avec le mois de janvier, et termine a 11 avec le mois de décembre, il a donc fallut
// ajouter un +1 au date.getMonth().
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
