
import React from 'react';

export default function Meme() {

    const [allMemeData, setAllMemeData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(res => setAllMemeData(res.data.memes));
        
    }, []);

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    function generateMeme(e) {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemeData.length);
        const {url} = allMemeData[randomNumber];

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            } 
        });

    }

    function handleChange(event) {
        const {name, value} = event.target
        console.log(name, value)

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        console.log(meme)
    }

    return (
        <div className="form--cont">
            <form onSubmit={generateMeme} encType="multi-part/form">
                <div className="inputs">
                    <input 
                        type="text" placeholder="Enter First Part" 
                        name="topText" onChange={handleChange}
                        value={meme.topText}
                    />

                    <input 
                        type="text" placeholder="Enter Second Part" 
                        name="bottomText" onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button className="get--button">Get A new Meme Image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    );
}