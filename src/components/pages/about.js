import React from 'react';

import headshot from "../../../static/assets/aisly-headshot.jpg"

export default function about() {
    return (
        <div className = "about-container">
            <div className = "left-column">
                <img src= {headshot}/>
            </div>
            <div className = "right-column">
                <ul>
                    <li>
                        Who am I?
                    </li>
                    <li>
                        What I do?
                    </li>
                    <li>
                        Why I do what I do?
                    </li>
                    <li>
                        How I got started?
                    </li>
                </ul>
            </div>
        </div>
    )
}