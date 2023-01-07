import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import teste from '../images/teste.png'
import './GroupDetailPage.css';

const apiURL = 'https://ironrest.cyclic.app/bg_finder'


const GroupDetailPage = () => {

    const {groupId} = useParams()

    const [group, setGroup] = useState(null)

    const [refresh, setRefresh] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${apiURL}/${groupId}`)
        .then(response => {
            setGroup(response.data)
        })
        .catch(err => console.log(err))
    }, [groupId])

    const deleteGroup = groupId => {
        axios.delete(`${apiURL}/${groupId}`)
        .then(response => {
            navigate('/')
            setRefresh(!refresh)
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className='GroupDetailPage'>
            <h1>CARROSSEL</h1>

            {

            group ? (
                
                <>

                    <div className="container-fluid">
                        <h1>{group.groupName}</h1>
                        <p>Criado por: <span>{group.createdBy}</span></p>
                        <Link className="btn btn-light" to={`/group/edit/${group._id}`}>Editar</Link>
                        <button className="btn btn-light" onClick={() => deleteGroup(group._id)}>Deletar</button>
                    </div>

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-6">

                                <p>Nome do jogo: {group.gameName}</p>                     
                                <p>Jogadores necessários:{group.playersRequired} </p>                       
                                <p>Disponibilidade: {group.availability}</p>
                                <p>{group.groupDescription}</p>

                                <img width={400} src= {group.image} className="img-thumbnail rounded float-start" alt="imagem do grupo"/>
                            </div>          
                        </div>    
                    </div>   

                    <div className="col">
                
                        <div className="mb-3">
                            <form>
                                <textarea>{group.adress}</textarea>
                            </form>
                        </div>
                                
                    
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">e-mail</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Mensagem</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className='send-button'>
                            <button type="button" className="btn btn-light">Enviar</button>
                        </div>

                    </div>



                </>

            ) : (

                    <p> Ainda estamos aguardando grupos na sua região! </p>
                    
                )
            }
        

        </div>

    
)
}
 
export default GroupDetailPage;
