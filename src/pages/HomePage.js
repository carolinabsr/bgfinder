import axios from "axios";
import teste from "../images/teste.png"
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './HomePage.css';
// import SearchGame from "../components/SearchGame.js"
// import { tokTypes } from "@babel/parser";
import Banner from "../components/Banner";

const apiURL = 'https://ironrest.cyclic.app/bg_finder' 

const HomePage = () => {

    const [groups, setGroups] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => { 
        axios.get(apiURL).then(response => {
        setGroups(response.data)
        }).catch(err => console.log(err))
    }, [refresh])

    return ( 

        
        
        
        <div className="HomePage">

            <Banner/>     

            
            <div className="container text-center">
                <div class="row">
                
                    
                    {groups.map(group => {
                            return (
                                <div class="col">
                                    <div className="card" style={{width: '18rem'}}>
                                        
                                        <img src={teste} className="card-img-top" alt="teste"/>

                                        <div className="card-body">
                                            <h5 className="card-title">{group.groupName}</h5>
                                            <p className="card-text">{group.groupDescription}</p>
                                            <Link className="btn btn-primary" to= {`/group/${group._id}`}>Ver mais</Link>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
                   
                
            </div>
    

        </div>
        
     );
}
 
export default HomePage;