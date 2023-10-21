import SearchInput from './Search/SearchInput'
import Navigation from './Navigation/Navigation'
import './../../css/Nav.css'

function Nav() {
   
    return (
        <div className='navbar navbar-expand-lg bg-body-tertiary d-flex flex-column mb-3 '>
            <SearchInput />
            <Navigation />
        </div>
    )
}
export default Nav