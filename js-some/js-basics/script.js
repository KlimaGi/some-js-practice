/* kintamieji */
{
  console.group();
  console.log("labas");
  // 5e6
  // 5*(10**6)

  const persons = [
    {
      id: 1,
      name: "John",
      hobies: ["learn", "yoga", "read"],
      place: ["LT", "Vilnius"],
    },
    {
      id: 2,
      name: "Zoe",
      hobies: ["write", "run", "read"],
      place: ["LT", "Vilnius"],
    },
  ];

  console.log(persons[1].hobies);
  console.groupEnd();
}

/* aritmetika */
{
  console.groupCollapsed("skaiciu aritmetika");
  // aritmetiniai veiksmai
  // x**y laipsnis (3^2=9) 3**2=9, 2**4=2*2*2*2=16
  console.log("3**2=", 3 ** 2);
  //  x**(1/y) - saknis: 16**(1/4)=2
  console.log("16 ** (1 / 4)=", 16 ** (1 / 4));

  console.groupEnd();
}

// Aritmetiniai veiksmai su
{
  console.group("zodziu aritmetika");
  // "25"+50 = 75; fix it --> Number('25')+50 || '25'*1+50
  console.log("25" * 1);
  console.groupEnd();
}

// loginiai operatoriai
console.group("loginiai");
("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13);
console.log("Petras" || "Jonas");
console.log(22 * 5 || 15 - 1 === 13); // pries or jei true, nebetikrina kas po or
console.log(("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13));
console.log("Petras" && 112);
console.log(15 - 1 === 13 || 22 * 6);
console.groupEnd();

alert(5 * "5" === 25);
