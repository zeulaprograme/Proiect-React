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
                //Trimit request-uri catre GIPHy API sectiunea Trending GIFs cu ajutorul api_key si setez limita numarului de gif-uri afisate la 10
                //Astea sunt gif-urile care apar ca default
                const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "OrZH5YuunBSr2weyl2ZQhdrHQD3VE5P2",
                        limit: 10
                    }
                });


                console.log(results);
                setData(results.data.data);

            } catch (err) { //Eventuale erori de cautare ( din cate am incercat, ii aproape imposibil sa apara o eroare atunci cand cauti efectiv dar am testat fortand o eroare din cod)
                                                                                                                 
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }

            setIsLoading(false)
        }

        fetchData();
    }, []);


    //afisarea efectiva a gif-urilor
    const renderGIFs = () => {

        if (isLoading) {
            return <Loader />; //in caz ca numarul de afisari ar fi fost mai mare de 10, de exemplu 20000 ar fi durat ceva pana s-ar fi afisat gif-urile iar in timpul acela ar fi aparut pe ecran componenta Loader
            //se poate testa schimband valoarea de la limit ( linia 23 , limit : 10 ) cu o valoare mai mare ( exemplu limit : 5000)
        }
        //Dupa ce iese din if-ul de mai sus, programul afiseaza gif-urile default
        return data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url} />
                </div>
            )
        })
    }
    //in caz de eroare se va afisa alerta de mai jos ( eroarea trebuie fortata din cod)
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

    //Apelam la API-ul de la GIPHy cu valoarea introdusa in input-ul de la formular( linia 112 )
    //Similar cu ce avem la useEffect - linia 11
    const handleSubmit = async event => {

        event.preventDefault(); //prevenim reload-ul paginii dupa apasarea butonului Search ( linia 122)
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "OrZH5YuunBSr2weyl2ZQhdrHQD3VE5P2",
                    q: search, // pasam search-ul(valoarea) primit in formular catre API-ul de la GIPHy
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

    //Formularul de la Search
    //Afisarea GIF-urilor in functie de valoarea introdusa in input
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