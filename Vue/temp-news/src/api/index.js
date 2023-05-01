import axios from "axios"; // node_modules 에 있는 라이브러리를 들고 옴.

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl : 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList(){
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAsksList(){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAsksList
}