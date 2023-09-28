function Choice_trans() {
    return (
        <>
            <div>
                <p>3. 교통수단 선택</p>
                <p>교통수단까지 선택하고 나면 장바구니처럼 선택한 리스트 화면에 표시하고 '저장'버튼 누르면 마이페이지 일정 목록에 저장될 수 있도록?</p>
            </div>
                <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">저장</button>
                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        저장하시겠습니까?
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-primary">확인</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
      
    )
}

export default Choice_trans;