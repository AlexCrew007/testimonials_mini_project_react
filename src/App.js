
import { reviews } from './testimonial_data';
import Testimonial from './components/Testimonial';
import "./App.css"; 

function App() {
  
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300">
      
      <div className='text-center'>
        
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400 mx-auto w-[200px] h-[4px] mt-2'>
        </div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
      
    </div>
  );
}

export default App;
