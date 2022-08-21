import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {

            setIsError(false)
            setIsLoading(true);

            try {
                const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "OrZH5YuunBSr2weyl2ZQhdrHQD3VE5P2",
                        limit: 10
                    }
                });


                console.log(results);
                setData(results.data.data);

            } catch (err) {
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }

            setIsLoading(false)
        }

        fetchData();
    }, []);

    const renderGIFs = () => {

        if (isLoading) {
            return <Loader />;
        }
        return data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url} />
                </div>
            )
        })
    }
    const renderError = () => {
        if (isError) {
            return (

                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Oups!</strong> Something went wrong... give it another try!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }


    }
    const handleSearchChange = (event) => {

        setSearch(event.target.value);
    };

    const handleSubmit = async event => {

        event.preventDefault();
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "OrZH5YuunBSr2weyl2ZQhdrHQD3VE5P2",
                    q: search,
                    limit: 10
                }
            });

            setData(result.data.data);
        } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }

        setIsLoading(false);

    };


    return (
        <div className="m-2">
            {renderError()}
            <form className="form-inline justify-content-center m-2">
                <input
                    value={search}
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="search"
                    className="form-control"
                />

                <button onClick={handleSubmit} type="submit" className="btn btn-secondary mx-2">
                    Search
                </button>
            </form>
            <div className="container gifs">{renderGIFs()}</div>;
        </div>
    )


};

export default Giphy;