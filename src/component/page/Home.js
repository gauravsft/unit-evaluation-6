import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../redux/action/homeaction";
import { Link } from "react-router-dom";
import '../page/style.css';



export const Home = () => {
    const product = useSelector((state) => state.Movie.data)
    const dispatch = useDispatch();

    console.log(product)

    const fetchProduct = async () => {
        try {
            let res = await fetch(`http://localhost:8080/movies`);
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
        <div className="hp2"  >
            {
                product.map((product) => (
                    <Link to={`/home/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <div key={product.id} className="hp22">
                            <img src={product.poster_path} alt="" />
                            <h3>{product.title}</h3>
                            <p >{product.release_date}</p>
                        </div>
                    </Link>

                ))
            }
        </div>
            
        </>
    );
}
