import Card from '../components/card';
import image from '../images/bank.png'

function Home() {
    return (
       <Card
            txtcolor="black"
            bgcolor="info"
            header="Bad Bank" 
            text="You can move around using the navigation bar."
            width="15rem"
            body={
            
            <div className="landing">
            <img src={image} style={{width: 200}}></img>

            </div>
            
            
            }
       />
    );
}

export default Home;