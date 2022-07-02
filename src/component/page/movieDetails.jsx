import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../redux/action/homeaction";
import { Link } from "react-router-dom";
import '../page/style.css';



export const MovieDetails = () => {
    const product = useSelector((state) => state.Movie.data)
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        try {
            let res = await fetch(`http://localhost:8080/movies/${productId}`);
            let data = await res.json();

            dispatch(getData(data));
            console.log(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [dispatch])

    return (
        <>

            <div className="hp3" key={product.id}  >

                <div >
                    <img src={product.poster_path} alt="" />
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p >₹{product.release_date}</p>
                    <h3>₹{product.overview}</h3>
                    <p>{product.original_title}</p>
                    <p>{product.popularity}</p>
                    <p>{product.original_title}</p>

                    <button style={{background: "#10847e",width:"150px",height:"40px",borderRadius:"8px",color:"white",marginLeft:"2%",cursor:"pointer"}}>Book Show</button>
                </div>
                <div >
                    <p style={{marginLeft:"8%"}}>Please add item(s) to proceed</p>
                    <Link to={`/cart/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <button style={{width:"250px",height:"40px",backgroundColor:"ActiveBorder",borderRadius:"8px",color:"white",cursor:"pointer",marginLeft:"8%"}}>VIEW Show </button>
                    </Link>
                </div>

            </div>

        </>
    );
}




