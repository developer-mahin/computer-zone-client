import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


export const UserRoleContext = createContext()

const UserRoleProvider = ({ children }) => {
    const [userRole, setUserRole] = useState("")
    const [userRoleLoading, setUserRoleLoading] = useState(false)
    const { user } = useContext(AuthContext)

    // useEffect(() => {
    //     setUserRoleLoading(true)
    //     fetch(`http://localhost:5000/user/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserRole(data.userRole)
    //             setUserRoleLoading(false)
    //         })
    // }, [user?.email])

    const { data: roleUser =[], refetch} = useQuery({
        queryKey: ["userRole", user?.email,],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/${user?.email}`)
            const data = await res.json()
            setUserRole(data.userRole)
            setUserRoleLoading(false)
            return data
        }

    })

    const info = {
        userRole,
        // refetch,
        userRoleLoading
    }

    return (
        <UserRoleContext.Provider value={info}>
            {children}
        </UserRoleContext.Provider>
    );
};

export default UserRoleProvider;