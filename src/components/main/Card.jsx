import {data} from "../../helper/data"

const Card = () => {
    console.log(data);
  return (
    <div className="cards">
        {data.map(({id,title,date,desc,image})=>(
        <div key={id} className="card">
            <img src={image} alt="image" />
            <div>
            <h2>{title}</h2>
            </div>
            <div>
            <p className="date">{date}</p>
            </div>
            <div>
            <p className="desc">{desc}</p>    
            </div>
           
            



        </div>
        ))}

    </div>
  )
}

export default Card