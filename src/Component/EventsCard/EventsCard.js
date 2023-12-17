import './EventsCard.css'
import eventsCardImg0 from '../../Assets/Events-card-0.webp'
import eventsCardImg1 from '../../Assets//events-card-img-1.webp'
import eventsCardImg2 from '../../Assets//events-card-img-02.webp'


function EventsCard() {
    return (
        <div className='evenets-card' >
            <div className="events-card-container">
                <h2 className='events-card-main-heading'>Campaigns and Events</h2>
                <a className='events-card-main-links' href="">See all</a>
                <div className="events-card-main-wrapper">
                    <div className="events-main-card">
                        <img className='events-main-card-img' src={eventsCardImg0} alt="" />
                        <p className='events-main-card-deck'>Upgrating to Incredible</p>
                        <div className="events-main-card-bottom">
                        </div>
                    </div>

                    <div className="events-main-card">
                        <img className='events-main-card-img' src={eventsCardImg1} alt="" />
                        <p className='events-main-card-deck'>Upgrating to Incredible</p>
                        <div className="events-main-card-bottom">
                        </div>
                    </div>

                    <div className="events-main-card">
                        <img className='events-main-card-img' src={eventsCardImg2} alt="" />
                        <p className='events-main-card-deck'>Upgrating to Incredible</p>
                        <div className="events-main-card-bottom">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventsCard