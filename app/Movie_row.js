import Action_row from "./Action_row.js"
import Delete from './delete.js'
export default function Movie_rows(props)  {
    return (
        <div className="movie_row1">
            <div className="image_col1">
                <img src={props.data.img} />
            </div>
            <div className="detail_col1">
            <div className="All_details">
                <h1> {props.data.name} </h1>
                <p> {props.data.year} | {props.data.duration} | {props.data.genre} </p>
                <p> {props.data.description} </p>
            </div>
            <Action_row/>
            <div className="delete_col">
                <Delete
                    {...props}
                />
            </div>                   
            </div>
        </div>
    );
};


