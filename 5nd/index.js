// 1. 로컬스토리지에 데이터 저장
const user = {
  이름: '병수',
  나이: 20,
  주소: '시골',
};

localStorage.setItem('user', JSON.stringify(user));

// 2. 로컬스토리지에서 데이터 조회
console.log(JSON.parse(localStorage.getItem('user')));

// 3. 로컬스토리지에서 데이터 수정
const fixUser = JSON.parse(localStorage.getItem('user'));
const newUser = { ...fixUser, 나이: 30 };
localStorage.setItem('user', JSON.stringify(newUser));

// 4. 로컬스토리지에서 데이터를 삭제
localStorage.removeItem('user');
console.log(localStorage.getItem('user'));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => console.log(posts));
