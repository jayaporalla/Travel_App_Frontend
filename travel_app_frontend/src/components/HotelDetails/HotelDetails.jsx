import "./HotelDetails.css";

export const HotelDetails = ({singleHotel}) => {

    const { 
        hostName, 
        hostJoinedOn, 
        numberOfBathrooms, 
        numberOfBeds,
        numberOfguest,
        numberOfBedrooms,
        ameneties
    } = singleHotel;

    return (
        <div className="hotel-details-container">
            <div className="host-details">
                <p className="host-name para">Hosted by {hostName}, Joined on {hostJoinedOn}</p>
                <span className="span">{numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds}{" "} beds. {numberOfBathrooms} bathrooms.</span>
            </div>
            <div className="key-features host-details">
                <div className="gutter-bottom-small">
                    <p className="p d-flex align-center gap">
                        <span class="apps material-icons-outlined">apps</span>
                        Dedicated Workspace
                    </p>
                    <span className="span">
                        A common area with wifi that is well suited for working
                    </span>
                </div>
                <div className="gutter-bottom-small">
                    <p className="p d-flex align-center gap">
                        <span class="apps material-icons-outlined">apps</span>Great Location
                    </p>
                    <span className="span">
                        80% of recent guests gave the location a 5-star rating
                    </span>
                </div>
                <p className="p d-flex align-center gap">
                    <span class="apps material-icons-outlined">
                        apps
                    </span>
                    Free cancellation before 7 days of booking
                </p>
            </div>
            <div className="amenities-container">
                <p className="p amenities">What this place offers</p>
                <div className="gap-xxl amenities-grid">
                    {
                        ameneties && ameneties.map((amenity, index) => (
                            <div key={index} className="d-flex align-center amenity-item">
                                <span className="apps material-icons-outlined">apps</span>
                                <span>{amenity}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};