import {useState} from 'react'

const SearchGame = (props) => {

    const {searchGames} = props

    const [search, setSearch] = useState("")

    const handleSearch = e => {
        setSearch(e.target.value)
        searchGames(e.target.value)
    }

    return (
        
        <div className='SearchGame'>
            
            <form className="d-flex" role="search">
                
            <input 
                className="form-control me-2" 
                type="text" 
                placeholder="Buscar jogo e encontrar seu grupo" 
                aria-label="Search"
                value={search}
                onChange={handleSearch}
                />

                <button className="btn btn-outline-success" type="submit">Pesquisar</button>
            
            </form>

        </div>
    )

}

export default SearchGame