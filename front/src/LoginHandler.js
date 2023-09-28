//LoginHandeler.js

const LoginHandeler = (props) => {

    // 인가코드 백으로 보내는 작업 하는곳
    
      return (
        <div className="LoginHandeler">
          <div className="notice">
            <p>로그인 중입니다.</p>
            <p>잠시만 기다려주세요.</p>
            <div className="spinner"></div>
          </div>
        </div>
      );
    };
    
export default LoginHandeler;