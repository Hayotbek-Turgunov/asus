import './ColBannerCard.css'
import colbannercardimg0 from '../../Assets//colbannercard-img.png'
import colbannercardimg1 from '../../Assets/colbannercard-1.webp'
import colbannercardimg2 from '../../Assets/colbannercard-2.webp'
import colbannercardimg4 from '../../Assets/colbannercard-3.webp'
import colbannercardaside0 from '../../Assets/aside-left-bg.webp'
import colbannercardaside1 from '../../Assets/aside-right-bg.webp'


function ColBannerCard() {
    return (
        <div className='colbannercard'>
            <div className="colbannercard-container">
                <div className="colbannercard-wrapper">
                    <div className="colbannercard-item">
                        <img className='colbannercard-img' src={colbannercardaside0} alt="" />
                    </div>
                    <div className="colbannercard-item">
                        <img className='colbannercard-img' src={colbannercardaside1} alt="" />
                    </div>
                    <div className="colbannercard-item">
                        <img className='colbannercard-img' src={colbannercardimg0} alt="" />
                        <h2 className='colbannercard-title'>ASUS Zenbook 14 OLED</h2>
                        <p className='colbannercard-deck'>Power and Elegance, Reimagined</p>
                        <a className='colbannercard-link' href="">Learn More</a>
                    </div>
                    <div className="colbannercard-item">
                        <img className='colbannercard-img' src={colbannercardimg0} alt="" />
                        <h2 className='colbannercard-title'>ASUS Zenbook 14 OLED</h2>
                        <p className='colbannercard-deck'>Power and Elegance, Reimagined</p>
                        <a className='colbannercard-link' href="">Learn More</a>
                    </div>

                    <div className="colbannercard-item">
                        <img className='colbannercard-img' src={colbannercardimg0} alt="" />
                        <h2 className='colbannercard-title'>ASUS Zenbook 14 OLED</h2>
                        <p className='colbannercard-deck'>Power and Elegance, Reimagined</p>
                        <a className='colbannercard-link' href="">Learn More</a>
                    </div>

                    <div className="colbannercard-item">
                        <img className='colbannercard-img' src={colbannercardimg0} alt="" />
                        <h2 className='colbannercard-title'>ASUS Zenbook 14 OLED</h2>
                        <p className='colbannercard-deck'>Power and Elegance, Reimagined</p>
                        <a className='colbannercard-link' href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ColBannerCard