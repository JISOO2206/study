/**
 * promise 기초
 */

function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면(성공시) 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  // = 이행상태가 되면 then을 이용하여 결과값을 받을 수 O
  // 이행 = 완료
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});

/*
  실패 결과 받는 promise 로직
*/

new Promise(function(resolve, reject) {
  reject();
});

function rejectGetData() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
// 실패 상태가 되면 실패한 이유룰 catch로 받을 수 있음
rejectGetData().then().catch(function(err) {
  console.log(err); // Error: Request is failed
});

/**
 * 여러 개의 프로미스 연결하기 (promise Chaining)
 */

new Promise(function(resolve, reject){
  setTimeout(function() {
    // 50번째 라인의 resolve가 호출되면 대기 -> 이행 상태로 넘어감
    resolve(1);
  }, 2000);
})
.then(function(result) {
  //resolve가 이행상태로 넘어가면서 1번째 then 실행
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  //1번째 then의 실행 완료하고 그 return 값을 받아 2번째 then 실행
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  //2번째 then의 실행 완료하고 그 return 값을 받아 3번째 then 실행
  console.log(result); // 31
});

/**
 * 프로미스 에러 처리
 * 1. promise의 두 번째 인자를 사용
 * 2. catch를 사용
 * 가급적 catch를 사용해야 한다.(더 효율적)
 */