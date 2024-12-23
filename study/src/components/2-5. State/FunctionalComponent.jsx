import React, { useEffect, useState } from 'react';

export default function FunctionalComponent() {
    const [date,setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => { //componentDidMount()
        const interval = setInterval(() => tick(), 1000); 

        return () => { // componentWillUnmount
            clearInterval(interval);
        };
    }, []);
    
    return (
        <div>
            <h1>Hello, world! It's Functional</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
