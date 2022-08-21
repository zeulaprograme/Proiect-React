import React, {useState} from "react";

export default function useLocalStorage(value){

    let[value,setValue] = useState(val);

    return[value,setValue]
}