import {Link} from 'react-router-dom';
// import {useState} from 'react'
import '../pages/HomePage.css';
// import SearchGame from './SearchGame';


const Banner = () => {

    // const Banner = ({groups}) => {

    // const [groupsData, setGroupsFiltered] = useState(groups)
    
    // const searchGames = str => {
    //     let filteredGroup 
        
    //     filteredGroup= groupsData.filter(group => {
    //         return group.gameName.toLowerCase().includes(str.toLowerCase())
    //     })   
        
    //     setGroupsFiltered(filteredGroup)
    // }


    return ( 

            <div className="jumbotron jumbotron-fluid">
                <div className='bg-image vw-100 vw-100'
                style={{backgroundImage: `url("https://images.unsplash.com/photo-1650024520252-14bdf7a3f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`}} alt='imagem de dados'>                
                
                    <div className="mask"style={{backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.6})`}}>
                            
                            <div className='container'>
                                <h1 className="display-4">Olá jogadores!</h1>
                                <p className="lead">Conecte-se com jogadores de Board Games</p>
                                <p>Crie seu próprio grupo e entre para comunidade boadrgamer.</p>
                                <p className="lead">
                                <Link to='/group/create' className="btn btn-outline-light">Criar grupo</Link>
                                {/* <SearchGame searchGames={searchGames}/> */}
                                </p>
                            </div> 

                    </div>    
                </div>
                
            </div>




    );
}
 
export default Banner;