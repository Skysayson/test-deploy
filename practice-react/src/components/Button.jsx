import { useEffect, useState } from "react";
import axios from "axios";
import './Button.css';

function Counter() {
    const [url, setUrl] = useState("");
    const [count, setCount] = useState(0);

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

        <div className="buttons">
            <button className="botton" onClick={fetchData}> Click for a pic!
            </button>

            <button className="botton2" onClick={() => setCount(count+ 1)}> Fap
            </button>
        </div>    

        <div className="">
            <h4>Fap Counter {count}</h4>
        </div>
        
        </div>
      )
    }

export default Counter;