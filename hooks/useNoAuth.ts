import { useRouter } from "next/router";
import { useEffect } from "react";


const useNoAuth = () => {
    const router = useRouter();
    const data = false;

    useEffect(() => {
        if (data) router.replace('/');
      }, [data]);
}

export default useNoAuth;