import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Road to Knowledge`;
    }, [title])
};

export default useTitle;