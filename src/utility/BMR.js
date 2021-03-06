//this function is used to calculate daily calory and body mass index
export const bmrData = (weight, height, age, gender, pal) => {
  let palCoef;
  let genderCoef = (gender) => {
    if (gender === "woman") {
      return -161;
    } else {
      return +5;
    }
  };

  switch (pal) {
    case "1":
      palCoef = 1.2;
      break;
    case "2":
      palCoef = 1.375;
      break;
    case "3":
      palCoef = 1.55;
      break;
    case "4":
      palCoef = 1.725;
      break;
    case "5":
      palCoef = 1.9;
      break;
    case "6":
      palCoef = 2.3;
      break;
    default:
      palCoef = 1.2;
      break;
  }

  let bmr = 10 * weight + 6.25 * height - 5 * age + genderCoef(gender);
  let vke = parseInt((weight / (height / 100) ** 2).toFixed());
  const calories = parseInt((bmr * palCoef).toFixed());
  return { calories, vke };
};
