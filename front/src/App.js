import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./pages/UserContext";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Main from "./pages/Main";
import Navbar from "./Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import LoginHandler from "./LoginHandler";
import MyPage from "./pages/mypage/Mypage";
import Record from "./pages/mypage/Record";
import PlanList from "./pages/mypage/PlanList";
import Bookmark from "./pages/mypage/Bookmark";
import Review from "./pages/mypage/Review";
import QNA from "./pages/mypage/QNA";
import QNADetail from "./pages/mypage/QNADetail";
import Plan_main from "./pages/createPlan/Plan_main";
import Plan from "./pages/createPlan/Plan";
import Choice_lodgment from "./pages/createPlan/Choice_lodgment";
import Choice_sight from "./pages/createPlan/Choice_sight";
import Choice_trans from "./pages/createPlan/Choice_trans";
import QuestionCreate from "./pages/mypage/QuestionCreate";
import QuestionModify from "./pages/mypage/QuestionModify";
import UserinfoModify from "./pages/mypage/UserinfoModify";


function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>} />
              <Route path="/plan" element={<Plan_main />} />
              <Route path="/plan/createplan" element={<Plan />} />
              <Route path="/plan/createplan/choice1" element={<Choice_lodgment />} />
              <Route path="/plan/createplan/choice2" element={<Choice_sight />} />
              <Route path="/plan/createplan/choice3" element={<Choice_trans />} />
              <Route path="/mypage/modify" element={<UserinfoModify />} />
              <Route path="/mypage/planlist" element={<PlanList />} />
              <Route path="/mypage/record" element={<Record />} />
              <Route path="/mypage/bookmark" element={<Bookmark />} />
              <Route path="/mypage/review" element={<Review />} />
              <Route path="/mypage/qna" element={<QNA />} />
              <Route path="/mypage/qna/:id" element={<QNADetail />} />
              <Route path="/mypage/qna/question-create" element={<QuestionCreate />} />
              <Route path="/mypage/qna/question-modify/:id" element={<QuestionModify />} />
              {/* <Route path="login/oauth/callback/kakao" 
                element={<LoginHandler />}  // redirect_url에 맞춰 꾸밀 컴포넌트
                /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
export default App;
