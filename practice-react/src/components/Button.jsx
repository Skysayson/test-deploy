import { useEffect, useState } from "react";
import axios from "axios";
import './Button.css';

function Counter() {
    const [url, setUrl] = useState("");

    const fetchData = () => {
        const apiURL = 'https://api.waifu.im/search';
        const params = {
            is_nsfw: true,
            gif: true
        };

        // Use the URLSearchParams constructor to format the query parameters
        const queryParameters = new URLSearchParams(params);
        const requestURL = `${apiURL}?${queryParameters.toString()}`;

    axios
        .get(requestURL)
        .then((response) => {
            setUrl(response.data.images[0].url);
            console.log(response);
        })
        .catch((error) => {
            console.log("Error fetching data");
        });
    }

      return (
        <div className="Display">
                <h1 className="word">DOG PIC LOL</h1>
            <div className="header">
                <img className="size" src={url}></img>
            </div>

            <button className="botton" onClick={fetchData}> Set pic
            </button>
        </div>
      )
    }

export default Counter;