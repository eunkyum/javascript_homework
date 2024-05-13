// 문제1,2)
document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector('.btn');
    button.addEventListener('click', function(){
        const title = document.querySelector('.title');
        title.textContent = '제목아니다'
    });
});

// 문제3)
function sum(num1, num2){
    console.log(num1 + num2)
};


// 문제4)
function isEvenOrOdd(num){
    if(num % 2 === 0){
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}

isEvenOrOdd(7);

// 문제5)
let personName = "병수";
let personAge = 20;
console.log(`이름: ${personName} \n나이: ${personAge}`);

