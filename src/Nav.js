import React from 'react'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" style={{fontWeight:"700"}} href="#">Webdevvision||Loction Tracker</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://webdevvision.netlify.com">Official Website</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://leafletjs.com/">Leaflet Maps</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://ipapi.co/">Location Api</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>)
}
