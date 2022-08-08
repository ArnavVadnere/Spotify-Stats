import React, { useContext } from "react";
import { useRouter } from "next/router"
import { Redirect } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





function Navbar() {

    const navigate = useNavigate();

    return (
        <nav>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="Logo">
                    <img onClick={() => {navigate("/");}} src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200'/%3E%3Cpath d='M64.5 11C71.4036 11 77 16.3726 77 23V179C77 185.627 71.4036 191 64.5 191C57.5964 191 52 185.627 52 179V23C52 16.3726 57.5964 11 64.5 11Z' fill='%239DD1F1'/%3E%3Cpath d='M139.5 29C146.404 29 152 34.3726 152 41V161C152 167.627 146.404 173 139.5 173C132.596 173 127 167.627 127 161V41C127 34.3726 132.596 29 139.5 29Z' fill='%239DD1F1'/%3E%3Cpath d='M26 39C32.6274 39 38 44.4152 38 51.0952V153.905C38 160.585 32.6274 166 26 166C19.3726 166 14 160.585 14 153.905V51.0952C14 44.4152 19.3726 39 26 39Z' fill='%23735290'/%3E%3Cpath d='M178 53C184.627 53 190 58.3726 190 65V140H189.622C188.29 145.176 183.592 149 178 149C172.408 149 167.71 145.176 166.378 140H166V65C166 58.3726 171.373 53 178 53Z' fill='%23735290'/%3E%3Cpath d='M102 45C109.18 45 115 50.4442 115 57.16V146.84C115 153.556 109.18 159 102 159C94.8203 159 89 153.556 89 146.84V57.16C89 50.4442 94.8203 45 102 45Z' fill='%23047857'/%3E%3C/svg%3E"></img>
                <h1>Spotify Stats</h1>
            </div>
        </nav>
    )
}

export default Navbar;