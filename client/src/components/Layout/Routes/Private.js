import { useState, useEffect } from "react"
import { useAuth } from "../../../Context/Context";
import { Outlet } from "react-router-dom"
import Spinner from "../../Spinner";
import axios from "axios"
function Private() {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.post("http://localhost:8000/api/v1/auth/userauth");
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);
    return ok ? <Outlet /> : <Spinner />
}

export default Private

