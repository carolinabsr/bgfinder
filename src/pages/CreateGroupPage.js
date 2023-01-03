import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import CarouselImage from '../components/Carousel'

const apiURL = 'https://ironrest.cyclic.app/bg_finder'

const CreateGroupPage = () => {

    const [groups, setGroups] = useState([])



    return ( 

        <div className="CreateGroupPage">
            <CarouselImage/>
            
            <div className="container-fluid">
                <h1>CRIE SEU GRUPO</h1>
            </div>

            <div className="container text-center">
                <div class="row">

                    <div className="col-6">

                        <div className="col-md-6">
                            <label for="formGroupExampleInput" className="form-label">Nome do grupo:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"/>
                        </div>

                        <div className="col-md-6">
                            <label for="formGroupExampleInput" className="form-label">Criado por:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"/>
                        </div>

                        <div className="col-md-6">
                            <label for="formGroupExampleInput" className="form-label">Nome do jogo:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Jogadores:</label>
                            <select id="inputState" class="form-select">

                                <option selected>Selecione</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>

                            </select>
                        </div>

                        <div className="col-md-6">
                            <label for="formGroupExampleInput" className="form-label">Disponibilidade:</label>
                            <input type="datetime-local" className="form-control" id="formGroupExampleInput"/>
                        </div>

                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Bairro</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>Bairro1</option>
                            <option>Bairro2</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label for="formGroupExampleInput" className="form-label">Endereço:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"/>
                        </div>
   
                    </div>

                    <div className="col">

                        <p>Descrição:</p>
                        <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea" placeholder='Informações adicionais sobre o seu grupo e o jogo' ></textarea>
                        </div>
                                                   
                        
                        <div className="mb-3">
                            <label for="formFileMultiple" className="form-label">Imagens:</label>
                            <input className="form-control" type="file" id="formFileMultiple" accept="image/*" multiple/>
                        </div>
                        
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