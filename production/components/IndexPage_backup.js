import styles from '../styles/Index.module.css';
import React from 'react';
import TestBox from './TestBox.js';

export default function IndexPage() {
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        if (likes > 4) {
            setLikes(0);
        } else {
            setLikes(likes + 1);
        }
    }
    
    return (
        <main>
            <div className="HERE">
                <TestBox likes={likes} setLikes={setLikes}/>
                <button onClick={handleClick}>Like: {likes}</button>
            </div>
        </main>
    )
}
