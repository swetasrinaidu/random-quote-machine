import React,{useState} from "react";
import '../App.css';
import { Quotes } from "../Quotes";

function Card(){

   const [color,setColor]=useState('quote-box');
   const [count,setCount]=useState(0);
   const [quote,setQuote]=useState(Quotes[0].text);
   const [author,setAuthor]=useState(Quotes[0].author);

   function updateQuote(){
      if(color=='quote-box') setColor('quote-box1');
      else if(color=='quote-box1') setColor('quote-box2');
      else if(color=='quote-box2') setColor('quote-box3');
      else setColor('quote-box');

      setCount(count=>{
        if(count<Quotes.length-1) return count+1;
        else return count=0;
      });
      setQuote(Quotes[count].text);
      setAuthor(Quotes[count].author);

   }
    return(
        <div className={color} >
           <div className="text">{quote}</div>
           <div className="author">-{author}</div>
           <button className="new-quote" onClick={updateQuote}>New Quote</button>
           <button className="tweet-quote" onClick="location.href='https://google.com';">Tweet Quote</button>
        </div>
    );

}
export default Card;