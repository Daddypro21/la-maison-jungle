
import '../style/Banner.css'
import logo from '../assets/10259340_4401280.jpg'

function Banner() {
    return (
    <div className="lmj-banner">
        <img src={ logo } alt="la maison jungle" className="lmj-logo"/>
        <h1>La maison jungle @</h1>
        </div>)
}

export default Banner