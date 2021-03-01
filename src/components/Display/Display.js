import './Display.css'

const Display = (props) => {
    // console.log(props.user.id);
    // destructuring the props.user object
    const {id, name, age, nationality, position, club, price, picture} = props.user;
    // console.log(id);

    function numToMil (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? Math.abs(Number(labelValue)) / 1.0e+9 + ".00B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? Math.abs(Number(labelValue)) / 1.0e+6 + ".00M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? Math.abs(Number(labelValue)) / 1.0e+3 + ".00K"
    
        : Math.abs(Number(labelValue));
    
    }

    return (
        <div>
            <div className="row display">
                <div className="col-8 display-text">
                    <div className="card border-primary mb-3">
                        <div className="card-header">Player # {id}</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">{name}</h5>
                            <h6 className="card-text">Age : {age}</h6>
                            <h6 className="card-text">Nationality : {nationality}</h6>
                            <h6 className="card-text">Position : {position}</h6>
                            <h6 className="card-text">Club : {club}</h6>
                            <h5 className="card-title">Price : ${numToMil(price)}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col-4 display-pic">
                    <img src={picture} all='image'></img>
                    <h6>Price : ${price}</h6>
                    <button className="btn btn-success" onClick={() => props.handleAddedUsers(props.user)}>Click to Add Me</button>
                </div>
            </div>
        </div>
    );
};
// Data Reference and Credit : https://www.transfermarkt.com/
export default Display;