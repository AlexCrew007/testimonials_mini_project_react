import {FaQuoteLeft, FaQuoteRight }  from 'react-icons/fa';

const Card = ({name,job,image,text}) => {
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={image}></img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-5px] z-[-1] left-[5px]'>
                </div>
            </div>
            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>
                    {name}
                </p>
                <p className='mt-5 text-violet-300 uppercase text-sm'>
                    {job}
                </p>
            </div>
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft></FaQuoteLeft>  
            </div>
            <div className='text-center mt-4 text-slate-500'>
                {text}
            </div>
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight></FaQuoteRight>
            </div>
        </div>
    );
};

export default Card