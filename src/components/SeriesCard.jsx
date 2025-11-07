import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({data}) =>{
    const {name,img_url, rating, description, cast , genre, watch_url } =data; 
// **every css class written after applying css module(Netflix.module.css) is treated as an object so apply (styles.class)

    const btn_style = {      //normal method to add css by wrapping them in an const
        padding:"1.2rem 2.4rem",
        border:"none",
        fontSize: "1.6rem",
        backgroundColor:`${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color:"var(--btn-color)",
        fontWeight:"bold",      
        cursor:"pointer",
    };

    
 

     const ratingClass = rating >=8.5 ?styles.super_hit: styles.average;  

 return (

           
         //   <li className="card"> without css module class is written this way
            <li className={styles.card}> {/*with css module (Netflix.module.css)class is written this way*/}
              <div >
              <img src={img_url} alt={name} width="40%" height="40%" />
             </div>
            {/* <div className= {styles["card-content"]} >For css module ,Here class is card-content(class name with hyphen) not normal class like card  so we use ["card-content"] */}

            <div className={styles["card-content"]}>
                   <h2>Name: {name}</h2>
                   {/* /* <h3 >Rating:<span className= { `rating  ${rating>=8.5 ? "super_hit" : "average"}`} >
                  //   OR (multipe class name can be added using template lateral) */}

                   {/* <h3 >Rating:<span className= {`${rating} rating ${ratingClass}`} > here ,we have used modules.css */}

                   <h3 >Rating:<span className= {`${styles.rating} ${ratingClass}`} > 
                   {rating} </span> </h3>
                   <p className="text-3xl font-bold underline">
                    summary : {description}</p>
                   <p >Genre: {genre.join(", ")}</p>
                   <p >Cast:{cast.join(" , ")}</p>
                   <a href ={watch_url} target="_blank">
                    {/* <button
                    style={btn_style}
                    >Watch Now</button> */}

                    <button style={btn_style}>Watch Now</button>

                   </a>
                </div>
             </li>
                  );
};