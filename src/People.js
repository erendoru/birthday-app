
import './people.scss';

function People(props){
    return(
        <div className="people">
           <img src={props.image} alt="people photo"/>
           <div className="infos">
           <h4>{props.name}</h4>
           <p>{props.age}</p>
           </div>
           
        </div>
    );
}

export default People;