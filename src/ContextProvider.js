import React, { createContext, useContext, useState } from "react";

let myDatas = [
    {
        id: 1,
        name: "Part-1",
        phoneNumber: "hello world",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
    {
        id: 2,
        name: "Part-2",
        phoneNumber: "part2 ph no",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
    {
        id: 3,
        name: "Part-3",
        phoneNumber: "part3 ph no",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
    {
        id: 4,
        name: "Part-4",
        phoneNumber: "part4 ph no",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
    {
        id: 5,
        name: "Part-5",
        phoneNumber: "part5 ph no",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
    {
        id: 6,
        name: "Part-6",
        phoneNumber: "part6 ph no",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
    {
        id: 7,
        name: "Part-7",
        phoneNumber: "part7 ph no",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
];
const initialData = {
    myData: myDatas,
    showMainContent: false,
    showParts: true,
    currentData: {
        id: "",
        name: "",
        phoneNumber: "",
        location: "",
        imageURL: "kebab3.jpg",
        mapURL: "",
    },
};

const Context = createContext(initialData);

export const ContextFunc = () => {
    return useContext(Context);
};

const ContextProvider = ({ children }) => {
    let [data, setData] = useState(initialData.myData);
    let [showMainContent, setShowMainContent] = useState(
        initialData.showMainContent
    );
    let [showParts, setShowParts] = useState(initialData.showParts);
    let [currentData, setCurrentData] = useState(initialData.currentData);

    return (
        <Context.Provider
            value={{
                data,
                setData,
                showMainContent,
                setShowMainContent,
                currentData,
                setCurrentData,
                showParts,
                setShowParts,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
