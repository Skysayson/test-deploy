import { useEffect, useState } from "react";
import axios from "axios";
import './Button.css';

function Counter() {
    const [url, setUrl] = useState("");
    const [count, setCount] = useState(0);
    const [streak, setStreak] = useState("");
    const [flag, setFlag] = useState("");
    const [flagNum, setFlagNum] = useState(0);
    const streakMsg = "YOU'RE A CUMGOD!";

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

    const showStreak = (count) => {
        if(count % 10 === 0) {
            setStreak(streakMsg);
            setFlagNum(flagNum + 1);
            setFlag(`x ${flagNum + 1}`);
        } else {
            setStreak("");
            setFlag("");
        }
    }

        console.log(flagNum);

      return (
        <div className="Display">
                <h1 className="word">~NSFW~</h1>
            <div className="header">
                <img className="size" src={url}></img>
            </div>

        <div className="buttons">
            <button className="botton" onClick={fetchData}> Click for a pic!
            </button>

            <button className="botton3" onClick={fetchData}> Change filters
            </button>
        </div>    
            <div className="fapButton">
                <button type="button" className="botton2" onClick={() => {
                    setCount(count + 1); 
                    showStreak(count + 1);   
                }}> 
                    Fap
                </button>
                <h4 className="text">Fap Counter {count}</h4>
            </div>
            <p className="text2">
                {streak} {flag}
            </p>
                 
        </div>
      )
    }

export default Counter;