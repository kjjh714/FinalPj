import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

const Side = styled.div`
    display: flex;
    border-right: 1px solid #e0e0e0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
`

const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
`

const Menu = styled.div`
    margin-top: 30px;
    width: 200px;
    display: flex;
    flex-direction: column;
`

function Sidebar() {

    const pathName = useLocation().pathname;

    const menus = [
        {name: "전체 여행 목록", path: "/MyPage"},
        {name: "여행 기록", path: "/Record"},
        {name: "찜", path: "/bookmark"},
        {name: "리뷰", path: "/review"},
        {name: "Q&A", path: "/q&a"},
    ];
    
    return (
        <div className="sidebar">
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem 
                            menu={menu}
                            isActive={pathName === menu.path ? true : false}   // 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
                        />
                    </Link>
                );
            })}
        </div>
    )
    //     <Side>
    //         <Profile src={profile}></Profile>
    //         <Menu>
    //             {menus.map((menu, index))} => {
    //                 return (
    //                     <NavLink
    //                         exact
    //                         style={{color: "gray", textDecoration: "none"}}
    //                         to={menu.path}
    //                         key={index}
    //                         activeStyle={{color:"black"}}
    //                     >
    //                         <SidebarItem menu={menu}/>
    //                     </NavLink>
    //                 )
    //             }
    //         </Menu>
    //     </Side>
    //     <div>사이드바</div>
    // )
}

export default Sidebar;