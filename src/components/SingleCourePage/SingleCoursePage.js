import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SingleCoursePage(props) {
    const location = useLocation();
    const data = location.state;
    console.log(data)

    const displayStars = (rate, full) => {
        const result = [];
        let starCount = 0;
        for (let x = 0; x < Math.floor(rate); x++) {
            result.push(<FontAwesomeIcon key={`star${x + 1}`} className="singleStar" icon="fa-solid fa-star" />)
            starCount++;
        }

        let frac = Number(rate) - Math.floor(rate);
        frac = frac.toPrecision(1);

        if (frac >= 0.3 && frac <= 0.7) { //Half a star from 0.3 to 0.7
            result.push(<FontAwesomeIcon key={`star${Math.floor(rate) + 1}`} className="singleStar" icon="fa-solid fa-star-half-stroke" />)
            starCount++;

        } else if (frac >= 0.8) //full star for 0.8 and 0.9
        {
            result.push(<FontAwesomeIcon key={`star${Math.floor(rate) + 1}`} className="singleStar" icon="fa-solid fa-star" />)
            starCount++;

        }

        if(full)
        {
            for(let x = starCount; x < 5; x++)
            {
                result.push(<FontAwesomeIcon key={`star${x+1}`} className="singleStar" icon="fa-regular fa-star" />)
            }
        }
        return <>{result}</>


    }

    

    return (
        <>
            <div className='single-course-page'>
                <Header data={data} displayStars={displayStars} />
                <Main data={data} displayStars={displayStars} />
            </div>
        </>
    )
}

export default SingleCoursePage