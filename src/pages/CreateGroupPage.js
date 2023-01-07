import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import CarouselImage from '../components/Carousel'

const apiURL = 'https://ironrest.cyclic.app/bg_finder'

const CreateGroupPage = () => {

    const [groupName, setGroupName] = useState('')
    const [adress, setAdress] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [gameName, setGameName] = useState('')
    const [playersRequired, setPlayersRequired] = useState(2)
    const [availability, setAvailability] = useState([])
    const [groupDescription, setGroupDescription] = useState('')
    const [image, setImage] = useState('https://images.unsplash.com/photo-1637120149073-54319e6f9fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')

    const navigate = useNavigate()
    

    const handleSubmit = e => {
        e.preventDefault()

        const newGroup = {
            groupName,
            createdBy,
            gameName,
            playersRequired,
            availability,
            adress,
            groupDescription,
            image
        }

        axios.post(`${apiURL}`, newGroup)
        .then(response => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return ( 

        <div className="CreateGroupPage">
            <CarouselImage/>
            
            <div className="container-fluid">
                <h1>CRIE SEU GRUPO</h1>
            </div>

            <div className="container text-center">
                <div className="row">
                <form onSubmit={ handleSubmit }>

                    <div className="col-6">

                        <div className="col-md-6">
                            <label htmlFor='groupName' className="form-label">Nome do grupo:</label>

                            <input 
                            type="text" 
                            className="form-control" 
                            id="groupName"
                            value = {groupName}
                            onChange= {e => setGroupName(e.target.value)}
                            />

                        </div>

                       
                        <div className="col-md-6">
                            <label htmlFor='createdBy' className="form-label">Criado por:</label>

                            <input 
                            type="text" 
                            className="form-control" 
                            id="createdBy"
                            value = {createdBy}
                            onChange= {e => setCreatedBy(e.target.value)}
                            />

                        </div>


                        <div className="col-md-6">
                            <label htmlFor='gameName' className="form-label">Nome do jogo:</label>

                            <input 
                            type="text"
                            className="form-control" 
                            id="gameName"
                            value = {gameName}
                            onChange= {e => setGameName(e.target.value)}
                            />

                        </div>

                        <div className="col-md-6">
                            <label htmlFor='playersRequired' className="form-label">Jogadores necessários:</label>

                            <input 
                            type="number"
                            className="form-control" 
                            id="playersRequired"
                            value = {playersRequired}
                            onChange= {e => setPlayersRequired(e.target.value)}
                            />

                        </div>

                        <div className="col-md-6">
                            <label htmlFor='availability' className="form-label">Disponibilidade:</label>
                            
                            <input 
                            type="datetime-local" 
                            className="form-control" 
                            id="availability"
                            value = {availability}
                            onChange= {e => setAvailability(e.target.value)}
                            />

                        </div>


                        <div className="col-md-6">
                            <label htmlFor='adress' className="form-label">Endereço:</label>

                            <input 
                            type="text"
                            className="form-control" 
                            id="adress"
                            value = {adress}
                            onChange= {e => setAdress(e.target.value)}
                            />

                        </div>
   
                    </div>

                    <div className="col">

                        <label htmlFor='groupDescription' className="form-label">Descrição:</label>
                        <div className="input-group">

                            <textarea 
                            className="form-control"
                            id="groupDescription"
                            aria-label="With textarea" 
                            placeholder='Informações adicionais sobre o seu grupo e o jogo' 
                            value = {groupDescription}
                            onChange= {e => setGroupDescription(e.target.value)}
                            />

                        
                        </div>
                                                   
                        
                        <div className="mb-3">
                            <label htmlFor='image' className="form-label">Imagem:</label>

                            <input 
                            className="form-control" 
                            type="text" 
                            id="image" 
                            value = {image}
                            onChange= {e => setImage(e.target.value)}

                            />
                        </div>
                        
                        <div className='send-button'>
                            <button type="submit" className="btn btn-light">Enviar</button>
                        </div>

                    </div>
                </form>
                </div>
            </div>


        </div>

    );
}
 
export default CreateGroupPage;