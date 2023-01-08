import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CarouselImage from '../components/Carousel' 



const apiURL = 'https://ironrest.cyclic.app/bg_finder'

const EditGroupPage = () => {

    const [groupName, setGroupName] = useState('')
    const [adress, setAdress] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [gameName, setGameName] = useState('')
    const [playersRequired, setPlayersRequired] = useState(['number?*'])
    const [availability, setAvailability] = useState('formato de hora')
    const [groupDescription, setGroupDescription] = useState('')
    const [image, setImage] = useState('input file')
    const [loading, setLoading] = useState(true)
    
    const { groupId } = useParams()
    const navigate = useNavigate()
    
    useEffect (() => {
        axios.get(`${apiURL}/${groupId}`)
        .then(response => {
            let {
                groupName,
                createdBy,
                gameName,
                playersRequired,
                availability,
                adress,
                groupDescription,
                image
            } = response.data 
                setGroupName(groupName)
                setCreatedBy(createdBy)
                setGameName(gameName)
                setPlayersRequired(playersRequired)
                setAvailability(availability)
                setAdress(adress)
                setGroupDescription(groupDescription)
                setImage(image)
                setLoading(false)
        })
    }, [groupId])

    const handleSubmit = e => {
        e.preventDefault()

        const updateGroup = {
            groupName,
            createdBy,
            gameName,
            playersRequired,
            availability,
            adress,
            groupDescription,
            image
        }

        axios.put(`${apiURL}/${groupId}`, updateGroup)
        .then(response => {
            navigate('/') 
        })
        .catch(err => console.log(err))
    }



    return ( 

        <div className="EditGroupPage">
            <CarouselImage/>

            <div className="container-fluid">
                <h1 className='h3 mt-2 mb-1'>Edite seu grupo</h1>
                
            </div>

            {!loading && (
                

            <div className="container text-center">
                <div className="row">
                <form onSubmit={ handleSubmit }>

                    <div class="col-6">

                        <div className='col-md-6'>
                        <label htmlFor='groupName' className="form-label">Nome do grupo:</label>

                            <input 
                                type='text'
                                className="form-control"
                                value = {groupName}
                                onChange= {e => setGroupName(e.target.value)}
                            />

                        </div>

                        <div className='col-md-6'>
                            <label htmlFor='createdBy' className="form-label">Criado por:</label>

                            <input 
                                type='text'
                                className="form-control"
                                value = {createdBy}
                                onChange= {e => setCreatedBy(e.target.value)}
                            />

                        </div>

                        <div className='col-md-6'>
                        <label htmlFor='gameName' className="form-label">Nome do jogo:</label>
                                <input 
                                    type='text'
                                    className="form-control"
                                    value = {gameName}
                                    onChange= {e => setGameName(e.target.value)}
                                />
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor='playersRequired' className="form-label">Jogadores necessários:</label>
                                <input 
                                    type='number'
                                    className="form-control"
                                    value = {playersRequired}
                                    onChange= {e => setPlayersRequired(e.target.value)}
                                />
                        </div>

                        <div className='col-md-6'>
                                <label htmlFor='availability' className="form-label">Disponibilidade:</label>
                                <input 
                                    type='date-time-local'
                                    className="form-control" 
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

            
                        )}
        </div>

    );
}
 
export default EditGroupPage;
