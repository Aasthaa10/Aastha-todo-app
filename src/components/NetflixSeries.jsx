import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries= () => {
    
  return (
    <ul className="grid grid-three--cols"> {/*we use ClassName insteas of class in react*/}
        {seriesData.map((currelem) =>(
              <SeriesCard key={currelem.id} data={ currelem }/>
                  ))}
            </ul>
  )
}

export default NetflixSeries;