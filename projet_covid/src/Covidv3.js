import { useEffect, useState } from 'react';
import axios from 'axios';

function Covidv3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/API_COVIDS/')
      .then(response => setData(response.data))
  }, []);

  return (
    <div className='container'>
        <div className="row"> 
            { data &&
                data.map(cvd => (
                <Line data={cvd} />
                ))
            }
       </div>     
    </div>
  );
}

function Line(props){
    return(
        <div className="card col-lg-3 col-md-6 col-xs-12">
             <div className="header" style={{backgroundColor:"black"}}>
                <img className="card-img-top" src={props.data.flag} 
                   title={props.data.country} 
                   style={{height:'100px' , width:'100%' , justifyContent:"center"}} />
             </div>
            <div className="card-body" style={props.data.country==="Israel"?{backgroundColor:"back",color:"white"}:{backgroundColor:"white"}}>
                <h5>{props.data.country}</h5>
                <h5>{props.data.cases}</h5>
            </div>
       </div>
    )
}
export default Covidv3;