// 사용자 이름 (저장)관리할 Context 생성

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({children}) {
    const [userName, setUserName] = useState("");   // 사용자 이름 상태

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    );
}