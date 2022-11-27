import { useEffect, useState } from "react"


const useSeller = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {

        fetch(`https://computer-zone-server.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })

    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useSeller;