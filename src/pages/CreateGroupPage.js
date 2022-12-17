import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const apiURL = 'https://ironrest.cyclic.app/bg_finder'

const CreateGroupPage = () => {

    const [groups, setGroups] = useState([])



    return ( 

        <div className="CreateGroupPage">
            <h1>CARROSSEL</h1>
            <div className="container-fluid">
                <h1>CRIE SEU GRUPO</h1>
            </div>

            <div class="container text-center">
                <div class="row">
                    <div class="col-6">
                        <p>Nome do grupo:</p>
                        <input type='text'></input>
                        <p>Criado por:</p>
                        <input type='text'></input>
                        <p>Nome do jogo:</p>
                        <input type='text'></input>
                        <p>Jogadores necessários :</p>
                        <input type='number'></input>
                        <p>Disponibilidade:</p>
                        <input type='datetime-local'></input>
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
 
export default CreateGroupPage;