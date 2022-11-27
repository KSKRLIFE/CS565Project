 import * as React from "react";
import "./header.css"

export default function Header() {
return (
 	<header>
        <h1><a href="/">Splashgram</a></h1>
        <ul className="ull">
            <li><a href="/search">Search</a></li>
            <li><a href="/categories">Categories</a></li>
        </ul>
    </header>
 );
}

