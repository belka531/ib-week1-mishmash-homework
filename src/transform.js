module.exports = { groupAdultsByAgeRange };

function groupAdultsByAgeRange(people) {
  const under20 = people.filter(person => person.age >= 18 && person.age <= 20);
  const under30 = people.filter(person => person.age >= 21 && person.age <= 30);
  const under40 = people.filter(person => person.age >= 31 && person.age <= 40);
  const under50 = people.filter(person => person.age >= 41 && person.age <= 50);
  const over50 = people.filter(person => person.age >= 51);

  const ageGroups = {};

  if (under20.length > 0) {
    ageGroups['20 and younger'] = under20;
  }
  if (under30.length > 0) {
    ageGroups[`21-30`] = under30;
  }
  if (under40.length > 0) {
    ageGroups[`31-40`] = under40;
  }
  if (under50.length > 0) {
    ageGroups[`41-50`] = under50;
  }
  if (over50.length > 0) {
    ageGroups[`51 and older`] = over50;
  }

  return ageGroups;
}