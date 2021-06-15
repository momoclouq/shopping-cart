import { findByLabelText } from "@testing-library/dom";
import reactDom from "react-dom";

const values = {
    title: "Hentaimo",
    subTitle: "Welcome to the hentai shopping mall",
    content: "From here you can find the finest hentai suitable for your need",
    mainPicSource: "https://upload.wikimedia.org/wikipedia/vi/d/d0/Dogecoin_Logo.png",
}

const style = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        color: "blue",
        fontSize: "2em",
        fontWeight: "400"
    },
    subTitle: {
        color: "red",
        padding: "20px"
    }
}

const Homepage = () => {
    return (
        <main style={style.main}>
            <h1 style={style.title}>{values.title}</h1>
            <h2 style={style.subTitle}>{values.subTitle}</h2>
            <p>{values.content}</p>
            <div><img src={values.mainPicSource} alt="doge coin icon"></img></div>
        </main>
    );
}

export default Homepage;