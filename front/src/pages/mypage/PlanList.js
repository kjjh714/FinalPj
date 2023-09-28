import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function PlanList() {

    const navigate = useNavigate();

    // 가상의 게시글 목록 데이터
    const [posts, setPosts] = useState([
        {id: 1, title: '일정1', content: '게시글1'},
        {id: 2, title: '일정2', content:' 게시글2'},
    ]);

    async function handlePostclick(postId) {
        navigate(`/post/${postId}`);
    }
    
    return(
        <div>
            <h4><b>일정 목록</b></h4>
            <table className="table table-hover text-center my-3">
                <thead className="table-dark">
                    <tr>
                        <th>No</th>
                        <th>일정</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>
                                    <Link style={{textDecoration:'none'}} to={`/post/${post.id}`}>{post.title}</Link>
                                </td>
                                <div>
                                <div>
                                    <td><button type="button" className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">삭제</button></td>

                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                삭제하시겠습니까?
                                            </div>
                                            <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                            <button type="button" class="btn btn-primary">확인</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
    )
}

export default PlanList;