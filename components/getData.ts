import { useEffect, useState } from "react";
import links from "./links";

const getData = () => {
    const [data, setData] = useState({} as { string: any });

    const keys = Object.keys(links);
    keys.push("META");

    useEffect(() => {
        const fetchData = async () => {
            keys.forEach(async (key) => {

                fetch(`${key}.json`)
                    .then((response) => response.json())
                    .then((data) => {
                        setData((d) => ({ ...d, [key]: data }));
                    });
            });
        };

        fetchData();
    }, []);

    return data;
}

export default getData;