"use client"
import {useState} from 'react';
import Header from './Header.js';
import Movie_rows from './Movie_row.js';
import Footer from './Footer.js';
import './globals.css'

const Movies_data =[{
    id:0,
    img:'Dear_Zindagi.png',
    name: 'Dear Zindagi',
    year:2016,
    duration:'2h 21m',
    genre:'Drama, Romance',
    description: "Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections"
}, {
    id:1,
    img:'Brave.png',
    name: 'Brave',
    year:2012,
    duration:'1h 33m',
    genre:'Adventurous, comedy',
    description: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse"
}, {
    id:2,
    img:'Moana.png',
    name: 'Moana',
    year:2016,
    duration:'1h 47m',
    genre:'Adventurous, comedy',
    description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."

}, {
    id:3,
    img:'Mulan.png',
    name: 'Mulan',
    year:1998,
    duration:'1h 27m',
    genre:'Adventurous, Comedy',
    description: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process."
}, {
    id:4,
    img:'malala.png',
    name:'He Named Me Malala',
    year:2015,
    duration:'1h 28m',
    genre:'Biography, Documentary',
    description: "A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations."
}, {
    id:5,
    img:'soul_surfer.png',
    name: 'Soul Surfer',
    year:2011,
    duration:'1h 52m',
    genre:'Drama, Biography, Family',
    description: "Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack"
}, {
    id:6,
    img:'Bend_it_ like_beckham.png',
    name:'Bend it like beckham',
    year:2002,
    duration:'1h 52m',
    genre:'Comedy, Drama & Romance ',
    description: "Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football."
}, {
    id:7,
    img:'Into_the_wild.png',
    name: 'Into the wild',
    year:2007,
    duration:'2h 28m',
    genre:'Adventure, Biography, Drama',
    description: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life."
}, {
    id:8,
    img:'The_Pursuit_of_Happyness.png',
    name: 'The Pursuit of Happyness',
    year:2006,
    duration:'1h 57m',
    genre:'Drama, Biography',
    description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career"
}, {
    id:9,
    img:'The_Intouchables.png',
    name: 'The Intouchables',
    year:2011,
    duration:'1h 52m',
    genre:'Drama, Biography, Drama',
    description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career."
}];
 

const page=() =>{
    const [movie,setMovie] = useState(Movies_data);
    function handleDelete(id){
        const newMovieslist=movie.filter((items)=>id !==items.id);
        setMovie(newMovieslist)
    };
    return (
        <>
            <div className="row">
                <Header/>
                {movie.map((item)=>(
                   <Movie_rows
                    key={item.id}
                    data={item}
                    onDelete={()=>handleDelete(item.id)}
                    />
                ))}
                <Footer/>
            </div>            
        </>
    );
};
export default page;
