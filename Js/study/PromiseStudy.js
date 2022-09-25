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
rejectGetData().then().catch(function(err) {
  console.log(err); // Error: Request is failed
});