import Image from 'next/image';
import {useState, useEffect,} from "react";

export default function CloudinaryImage(props) {
    const [error, setError,] = useState(null);
    const [isLoaded, setIsLoaded,] = useState(false);
    const [output, setOutput,] = useState([]);
    const getInfoUrl = 'https://res.cloudinary.com/bachman-io/fl_getinfo/' + props.src;
    useEffect(() => {
        let mounted = true;
        fetch(getInfoUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    if(mounted) {
                        setIsLoaded(true);
                        setOutput(result.output);
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        return function cleanup() {
            mounted = false;
        };
    }, [getInfoUrl,]);
    if(error) {
        return(<p>Error!</p>);
    } else if (!isLoaded || output.length === 0) {
        return(<p>Loading...</p>);
    } else {
        return(
            <figure>
                <Image alt={props.alt} src={props.src} width={output.width} height={1080} />
                <figcaption className="text-gray-400 mb-3 text-sm">{props.alt}</figcaption>
            </figure>
        );
    }
}