import './Body.css'
import Display from '../Display/Display'
import Cart from '../Cart/Cart'

const Body = () => {
    return (
        <div>
            <h2>FROM BODY</h2>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <Display></Display>
                    </div>
                    <div class="col-4">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;