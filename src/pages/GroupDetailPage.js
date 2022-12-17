import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import teste from '../images/teste.png'
import './GroupDetailPage.css';

const apiURL = 'https://ironrest.cyclic.app/bg_finder'


const GroupDetailPage = () => {
    return ( 
        <div className='GroupDetailPage'>
            <h1>CARROSSEL</h1>

            <div className="container-fluid">
                <h1>NOME DO GRUPO</h1>
                <p>Criado por: <span>nome</span></p>
            </div>

            <div class="container text-center">
                <div class="row">

                    <div class="col-6">
                        <p>Nome do jogo:</p>                        
                        <p>Jogadores necessários :</p>                       
                        <p>Disponibilidade:</p>
                        <p>DESCRIÇÃO DETALHADA DO JOGO</p>

                        <img src= {teste} className="img-thumbnail rounded float-start" alt="teste"/>
                        <img src= {teste} className="img-thumbnail rounded float-end" alt="teste"/>
                    </div>

                    
                    
                

                    <div class="col">
                            <form>
                                <textarea>MAPA </textarea>
                            </form>
                        
                        <p>Local</p>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">e-mail</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
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

        </div>

       
     
)
}
 
export default GroupDetailPage;