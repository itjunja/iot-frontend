import axios from 'axios';

// Spring Boot 서버 주소 설정
const API_BASE_URL = "http://localhost:8080/api/control";

// LED 상태 변경 API 호출
export const toggleLed = async (command) => {
    return axios.post(`${API_BASE_URL}/led`, { command });
};

// 현재 스위치 상태 조회 API 호출
export const fetchSwitchStatus = async () => {
    return axios.get(`${API_BASE_URL}/switch`);
};
