// 로그인 버튼을 눌렀을 때 이동해야 할(= 인가코드를 받아와야 할) 주소 작업을 위해 따로 관리
// env파일에 저장되어 있는 값 사용할때는 process.env.변수명; 으로 사용

// const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
// const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;

const CLIENT_ID = "fe2b3966aa26d1d643775c4d8ce3c10e";
const REDIRECT_URI = "http://localhost:3000/login/oauth/callback/kakao";


export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;