import { Link } from "react-router-dom"
import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemoveToy, user }) {

    return (
        <ul className="toy-list clean-list">
            {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />

                    {
                        user && user.isAdmin && <div>
                            <button className="btn" onClick={() => onRemoveToy(toy._id)}>x</button>
                            <Link to={`/toy/edit/${toy._id}`}> Edit </Link>
                        </div>
                    }

                    <Link to={`/toy/${toy._id}`}><button className="btn">Details</button></Link>
                    <button className="buy btn">
                        Add to Cart
                    </button>
                </li>)}
        </ul>
    )
}