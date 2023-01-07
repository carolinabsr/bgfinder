import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const apiURL = 'https://ironrest.cyclic.app/bg_finder'

const EditGroupPage = () => {

    const [groupName, setGroupName] = useState('')
    const [adress, setAdress] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [gameName, setGameName] = useState('')
    const [playersRequired, setPlayersRequired] = useState(['number?*'])
    const [availability, setAvailability] = useState('formato de hora')
    const [groupDescription, setGroupDescription] = useState('')
    const [images, setImages] = useState('input file')
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
                images
            } = response.data 
                setGroupName(groupName)
                setCreatedBy(createdBy)
                setGameName(gameName)
                setPlayersRequired(playersRequired)
                setAvailability(availability)
                setAdress(adress)
                setGroupDescription(groupDescription)
                setImages(images)
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
            images
        }

        axios.put(`${apiURL}/${groupId}`, updateGroup)
        .then(response => {
            navigate('/') 
        })
        .catch(err => console.log(err))
    }



    return ( 

        <div className="EditGroupPage">
            <h1>CARROSSEL</h1>
            <div className="container-fluid">
                <h1>Edite seu grupo</h1>
            </div>

            {!loading && (
                <form onSubmit={ handleSubmit }>

            <div className="container text-center">
                <div class="row">
                    <div class="col-6">

                        <label htmlFor='groupName'>Nome do Grupo</label>
                        <input 
                            type='text'
                            value = {groupName}
                            onChange= {e => setGroupName(e.target.value)}
                        />

                        <label htmlFor='createdBy'>Criado por</label>
                        <input 
                            type='text'
                            value = {createdBy}
                            onChange= {e => setCreatedBy(e.target.value)}
                        />

                        <label htmlFor='gameName'>Nome do Jogo</label>
                        <input 
                            type='text'
                            value = {gameName}
                            onChange= {e => setGameName(e.target.value)}
                        />

                        <label htmlFor='playersRequired'>Jogadores necessários</label>
                        <input 
                            type='number'
                            value = {playersRequired}
                            onChange= {e => setPlayersRequired(e.target.value)}
                        />

                        <label htmlFor='availability'>Disponibilidade</label>
                        <input 
                            type='date-time-local'
                            value = {availability}
                            onChange= {e => setAvailability(e.target.value)}
                        />

                    </div>

                    <div class="col">                     
                                 
                            
                                <label htmlFor='groupDescription'>Descrição: </label>
                                <p>
                                    <textarea 
                                    type='text'
                                    value = {groupDescription}
                                    onChange= {e => setGroupDescription(e.target.value)}
                                    />
                                </p>

                                {/* <label htmlFor='images'>Galeria</label>
                                <input 
                                    type='file'
                                    accept="image/*"
                                    value = {images}
                                    onChange= {e => setImages(e.target.value)}
                                /> */}
                        
                        <p>Imagens:</p>
                        <input 
                        type="file" 
                        accept="image/*" 
                        // value = {images}
                        // onChange= {e => setImages(e.target.value)}
                        />
                        <div className='send-button'>
                            <button type="submit" className="btn btn-light">Enviar</button>
                        </div>
                        

                    </div>
                </div>
            </div>

            </form>
                        )}
        </div>

    );
}
 
export default EditGroupPage;
