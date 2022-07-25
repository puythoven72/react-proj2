
import logo from "../images/Poweredby_100px-Black_VertLogo.png";
import Card from "./Card";
function GiphyDisplay(props) {



    // if (props.gifData != "") {
    //     console.log(props.gifData);
    //     props.gifData.forEach(function (arrayItem) {
    //         var x = arrayItem.id;
    //         console.log(x);
    //     });

    // };
    return (
        <div className="main">

            <div className="container ">

                <div id="giph-display-content" className=" d-flex justify-content-center">
                    {
                        props.gifData ?
                            props.gifData.map(
                                function (item, index) {
                                   
                                    return <Card title={item.title} img={item.images.downsized.url} key={index}/>
                                }
                            )
                            : null
                    }


                </div>
                <footer className="footer">
                    <div className="d-flex justify-content-center">
                        <img src={logo}  alt = "powered by Giphy"/>
                    </div>
                </footer>

            </div>

        </div>

    )

}

export default GiphyDisplay;