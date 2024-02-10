 //import image here
import cafe1 from './Assets/cafe 1.avif'; 
// import cafe2 from './Assets/cafe 2.jpg'; 
import dish1 from './Assets/dish 1.jpg'; 
import dish2 from './Assets/dish 2.jpg';
import dish3 from './Assets/dish 3.jpg';
import dish4 from './Assets/dish 4.jpg';
import dish5 from './Assets/dish 5.jpg';
//import Css file

import './App.css';

function App() {
    return (
        // 
        <div div className="container">
            <div>
                <img id="Mainimg" src={cafe1} alt="Mycafe" />
            </div>
            <div className="maincontent">
                <h1>Cafe Chit Chat!🍳</h1>

                <label for="food"></label>
                <select className="mainbtn" id="food">
                    <option selected disabled> Chit Chat Special😍</option>
                    <option value="food">Mocha</option>
                    <option value="food">Drip Brew</option>
                    <option value="food">Cartado</option>
                    <option value="food">Brownie</option>

                </select>
                <input className="mainbtn" type="text" placeholder="Search for Food" />

            </div>
           <hr/>
            <div className="container-fluid" >
                <h1 >Foods by Chit Chat Cafe🍕</h1>

                <div className="multiimg">
                    {/* <img className="imgkiclass" src={require('./Assets/cafe2.jpg')} alt="Dish" />  */}
                    < img className="imgkiclass" src={dish1} alt="Dish" />
                    <h3>MOCHA</h3>
                    <p>Lorem ipsum dolor, sit amet </p>
                </div>
                <div className="multiimg">
                    <img className="imgkiclass" src={dish2} alt="Dish" />
                    <h3>CARTADO</h3>
                    <p>Lorem ipsum dolor, sit amet </p>
                </div>
                <div className="multiimg">
                    <img className="imgkiclass" src={dish3} alt="Dish" />
                    <h3>COLD BREW</h3>
                    <p>Lorem ipsum dolor, sit amet </p>
                </div>
                <div className="multiimg">
                     < img className="imgkiclass" src={dish5} alt="Dish" />
                    <h3>DRIP BREW</h3>
                    <p>Lorem ipsum dolor, sit amet </p>
                </div>
                <div className="multiimg">
                    <img className="imgkiclass" src={dish1} alt="Dish" />
                    <h3>MOCHA</h3>
                    <p>Lorem ipsum dolor, sit amet </p>
                </div>
                <div className="multiimg">
                    <img className="imgkiclass" src={dish4} alt="Dish" />
                    <h3>COLD LATTLE</h3>
                    <p>Lorem ipsum dolor, sit amet </p>
                </div>
            </div>
            <hr />
            <div className="container" >
                <footer id="mainfooter"> <a href="linkedin.com/in/aniket-potbhare-a98b32245">
                    @2024 All Right Reserved-Aniket Potbhare</a> </footer>
            </div>
        </div>


    );
}
export default App;
