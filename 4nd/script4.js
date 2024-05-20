// 문제1)
// const people = [
//   {
//     name: '철수',
//     age: 19,
//     gender: '남',
//   },
//   {
//     name: '철구',
//     age: 20,
//     gender: '남',
//   },
//   {
//     name: '유리',
//     age: 21,
//     gender: '여',
//   },
// ];

// console.log(people);

// 문제2)
const people = [
  { name: '철수', age: 19, gender: '남' },
  { name: '철구', age: 20, gender: '남' },
  { name: '유리', age: 21, gender: '여' },
];

const peopleContainer = document.querySelector('.people-container');

people.forEach(function (person) {
  let htmlTemplate = `
  <div class="people">
      <h3>이름: ${person.name}</h3>
      <h3>나이: ${person.age}</h3>
      <h3>성별: ${person.gender}</h3>
  </div>
  `;
  peopleContainer.insertAdjacentHTML('beforeend', htmlTemplate);
});

// // 문제3)
// const female = people.find((person) => person.gender === '여');

// console.log(female);

// // 문제4) filter 메소드
// const males = people.filter((person) => person.gender === '남');

// console.log(males);

// 문제5) map
// const plusAge = people.map((person) => {
//   return {
//     ...person,
//     age: person.age + 10,
//   };
// });

// console.log(' 원본데이터:', people);
// console.log('나이 증가된 데이터:', plusAge);

// // 문제6)

// const sortedPeople = [...people].sort((a, b) => b.age - a.age);

// console.log('원본데이터:', people);
// console.log('나이순정렬:', sortedPeople);

// 문제7) destructuring
const user = {
  이름: '병수',
  나이: 20,
  주소: '시골',
};

console.log(user.이름);
console.log(user.나이);
console.log(user.주소);
