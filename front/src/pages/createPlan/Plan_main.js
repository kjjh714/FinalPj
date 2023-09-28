import { useNavigate } from 'react-router-dom';

function Mypage() {
    const navigate = useNavigate();
    
    async function Click() {
        navigate('/plan/createplan');
    }

    // async function yesClick() {
    //     navigate('/plan/createplan');
    // }

    // async function noClick() {
    //     navigate('/plan/createplan');
    // }


    return(
        <div>
            <p>메인 페이지에서 네비바(일정 만들기) 클릭시</p>
            <p>비로그인 경우 → 로그인이 필요합니다 알림창 및 로그인 페이지 이동</p>
            <p>로그인한 경우 → 해당 페이지 화면</p>
            <hr/>

            <div className='text-center'>
                <h2><b>Do you want recommend?</b></h2>
                <br/>
                <div>
                    <button onClick={Click} className='btn btn-outline-secondary' style={{margin:'10px'}}>No</button>
                    <button onClick={Click} className='btn btn-outline-secondary' style={{margin:'10px'}}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;