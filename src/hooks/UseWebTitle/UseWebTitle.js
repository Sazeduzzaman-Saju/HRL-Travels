import { useEffect } from "react";

const UseWebTitle = (title) => {
    useEffect(() => {
        document.title = title
    }, [title])
};

export default UseWebTitle;