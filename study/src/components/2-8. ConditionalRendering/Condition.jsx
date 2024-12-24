import React from 'react'

export default function () {
    const isLoggeIn = true;

    const UserGreeting = (props) => {
        return (
            <h1>
                {props.name && `${props.name}, `} Welcome {Boolean(props.count) && `It's ${props.count} times`}
            </h1>
        )
    };
    
    const GuestGreeting = () => {
        return <h1>Please sign up</h1>
    };

    const Greeting = (props) => {
        return props.isLoggeIn ? <UserGreeting name="hyeni" count={2} /> : <GuestGreeting />
    };

    return (
        <div>
            <Greeting isLoggeIn={isLoggeIn} />
        </div>
    )
}
