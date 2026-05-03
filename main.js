// let user = {
//   name: "Rashidbek",
//   age: 16,
// };
// console.log(user.name);

//<2================================================================

// let product = {
//   title: "BMW",
//   price: 400000,
// };
// console.log(product.price);

//<3================================================================

// let student = {
//   name: "Rashidbek",
//   active: true,
// };
// console.log(student.active);

//<4================================================================

// let car = {
//   brand: "BMW",
//   color: "black",
//   year: 2000,
// };
// console.log(car.color);

//<5================================================================

// let phone = {
//   brend: "samsung",
//   model: "galaxsy A17",
// };
// console.log(["model"]);

//<6================================================================

// let user = {
//   name: "Rashidbek",
//   address: {
//     city: "Farg'ona",
//   },
// };
// console.log(user.address.city);

//<7================================================================

// let users = [
//   {
//     name: "Rashidbek",
//   },
//   {
//     age: 16,
//   },
// ];
// console.log(users[0].name);

//<8================================================================

// let student = {
//   name: "Rashidbek",
//   subjects: ["Matematika", "Dasturlash"],
// };
// console.log(student.subjects[0]);

//<9================================================================

// let company = {
//   name: "Rashidbek",
//   employees: [
//     {
//       name: "ozodbek",
//       role: "Dasturchi",
//     },
//     {
//       name: "jasur",
//       role: "sportchi",
//     },
//   ],
// };
// console.log(company.employees[1].role);

//<10================================================================

// let user = {
//   name: "Rashidbek",
//   hobbies: ["dasturchi"],
//   address: {
//     city: "farg'ona",
//   },
// };
// console.log(user.hobbies[0]);
// console.log(user.address.city);

// <====================================================================
// <====================================================================
// <====================================================================
// <====================================================================
// <51==================================================================

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang

// function a(arr) {
//   return arr.map(function (element) {
//     return element + 1;
//   });
// }
// let sonlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let natija = a(sonlar);
// console.log(natija);

//<=========================================================================

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.

// var ism = "Rashidbek";
// var familiya = "Rasuljonov";
// var natija = `${ism} ${familiya}`;
// console.log(natija);

//<=============================================================

//53-masala

// var holatiYaxshimi = true;
// var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";
// console.log(holati);

//<==============================================================================

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// function funksiya(string) {
//   if (string.length % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(funksiya("rashidbek"));

//<==============================================================================

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.
// function a(son1, son2) {
//   return son1 ** son2;
// }
// console.log(a(10, 10));
