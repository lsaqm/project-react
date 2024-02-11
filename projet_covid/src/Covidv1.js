import { useEffect, useState } from 'react';
import axios from 'axios';

function CovidV2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries')
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
        <div className="card">
             <div className="body">
                <img className="card-img-top" src={props.data.countryInfo.flag} 
                   title={props.data.country} 
                   style={{height:'60px' , width:'60px' , borderRadius:'60%'}} />
             </div>
            <div className="card-body">
                <h5>{props.data.country}</h5>
                <h5>{props.data.cases}</h5>
            </div>
       </div>
    )
}
export default CovidV2;