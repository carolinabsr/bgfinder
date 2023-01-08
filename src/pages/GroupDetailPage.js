import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Carousel from '../components/Carousel';
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
            <Carousel/>

            {

            group ? (
                
                <>
                
                <section className='pb-0'>
                    <div className="container-fluid">
                        
                        <div className='row'>
                            <div className='col-12'>
                                <div className='card bg-light p-0 pb-0'>

                                    <div className='card-body d-flex justify-content-between flex-wrap'>
                                        
                                        <ul className='list-inline mb-0'>
                                            <li className='list-inline-item'>
                                                <h1 className='h3 mt-2 mb-1'>{group.groupName}</h1>                                    
                                                <p className='mb-2 mb-sm-0'> Criado por <span>{group.createdBy}</span></p>
                                                <p className='mb-2 mb-sm-0'> {group.adress}</p>
                                                <p className='mb-2 mb-sm-0'>{group.gameName}</p>                                    
                                                <p className='mb-2 mb-sm-0'> <spam>{group.playersRequired} jogadores necessários </spam></p>
                                                <p className='mb-2 mb-sm-0'> Disponibilidade: <span>{new Date (group.availability).toLocaleDateString('pt-br')}</span></p>                                          
                                                
                                                <li className='list-inline-item'>
                                                    <Link className="btn btn-dark" to={`/group/edit/${group._id}`}>Editar</Link>
                                                </li>

                                                <li className='list-inline-item'>
                                                    <button className="btn btn-danger" onClick={() => deleteGroup(group._id)}>Deletar</button>
                                                </li>
                                                
                                            </li>
                                        </ul>       

                                    </div>
                                </div>
                            </div>
                        </div> 

                    </div>
                </section>  

                <section className='pb-0 pt-0'> 

                    <div className="container-fluid">
                        <div className='tab-content mb-0'>
                            
                            <div className='tab-pane fade active show'>
                                <div className='row g-4 g-lg-5'>
                                    <div className='col-lg-7 col xl-8'>
                                        
                                        
                                        <div className='card bg-transparent mb-4'>
                                            <div className='card header bg-transparent border-bottom px-0 pt-0'>
                                                <h4 className='mb-0'>Descrição</h4>
                                            </div>
                                            <div className='card-body px-0 pb-0'>
                                                <p className='mb-3'>{group.groupDescription}</p>
                                            </div>
                                        </div>

                                        <div className='card bg-transparent'>  
                                            <div className='card-header bg-transparent border-bottom px-0'>
                                                <h4 className='mb-0'>Galeria</h4>
                                            </div>
                                            <div className='card-body px-0 pb-0'>
                                                <div className='rpw g-4'>
                                                    <div className='col-md-4'>
                                                        <img width={400} src= {group.image} className="img-fluid img-thumbnail" alt="imagem do grupo"/>
                                                        {/* <img width={400} src= {group.image} className="img-thumbnail rounded float-start" alt="imagem do grupo"/> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>   

                    <div className="container-fluid">
                        <div className='row'>
                            <div className="col">
                        
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
                        </div>
                    </div>

                </section> 

                </>

            ) : (

                    <p> Ainda estamos aguardando grupos na sua região! </p>
                    
                )
            }
        

        </div>

    
)
}
 
export default GroupDetailPage;
