// import locationIcon from "../images/location-path.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <section className="card-image">
                <img src={`/images/${props.data.coverImg}`} alt="coverimg" />
            </section>

            <section className="card-details">
                <img className="location-path" src="/images/location-path.png" alt="location" />
                <span>{props.data.location}</span>
                <a href={props.data.googleMap} target="_blank" rel="noopener noreferrer">View On Google Maps</a>
                <p className="place-visited">{props.data.placeVisited}</p>
                <p className="date">{props.data.date.start} - {props.data.date.end}</p>
                <p className="description">{props.data.description}</p>
            </section>
        </div>
    )
}