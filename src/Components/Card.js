

const Card=(props)=>{
    return(
        <div className="tc bg-light-red dib br3 pa3 ma3 grow bw2 shadow5">
            <img src={`https://robohash.org/testing${props.id}200x200`} alt="robopic"/>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;