import Card from "./Card";
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { useState } from "react";

function Testimonial({reviews}){

    let len = reviews.length;
    let [track, setTrack] = useState(0);
    let review = reviews[track];

    const leftShiftHandler = () =>{
        if(track===0){
            setTrack(len-1);
        }
        else{
            setTrack(track-1);
        }
    }

    const rightShiftHandler = () => {
        if(track===len-1){
            setTrack(0);
        }
        else{
            setTrack(track+1);
        }
    }

    function surpriceHandler(){
        setTrack(Math.floor(Math.random()*len))
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card  {...review}></Card>
            <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
                <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>
            <div className="mt-6"> 
                <button onClick= {surpriceHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surpice</button>
            </div>
        </div>
    );
};

export default Testimonial;