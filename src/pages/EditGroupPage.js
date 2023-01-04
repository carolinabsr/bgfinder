import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
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
    

    const handleSubmit = e => {
        e.preventDefault()
    }



    return ( 

        <div className="EditGroupPage">
            <h1>NAVBAR</h1>
            <h1>CARROSSEL</h1>
            <div className="container-fluid">
                <h1>EDITAR GRUPO</h1>
                <form onSubmit={ handleSubmit }/>
            </div>

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
                        <p>Descrição:</p>
                            <form>
                                <textarea>Informações adicionais sobre o seu grupo e o jogo </textarea>
                            </form>
                        
                        <p>Imagens:</p>
                        <input type="file" accept="image/*" />
                        <div className='send-button'>
                            <button type="button" className="btn btn-light">Enviar</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
}
 
export default EditGroupPage;
