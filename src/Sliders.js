import React, { useState } from 'react'
import './Slider.css'
import { FaLessThan,FaGreaterThan,FaQuoteRight } from "react-icons/fa";

function Sliders() {
    const [index,setIndex]=useState(0)
    const[datas,setDatas]=useState([ {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
          'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
          'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
          'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
    ])
    const handleNext=()=>{
            if (index === datas.length-1){
            setIndex(0)
      }
      else{
         setIndex(index + 1)
      }
    }
     const handlePrev=()=>{
      setIndex(index===0?datas.length-1:index-1)
     }

     function timeout(){
         setTimeout(handleNext,2000)
         return;
     }
     
    

  return (
    <div  className='backgroundss'> 
        <div className='text text-center'>
            
            <h1>/  Reviews</h1>
        </div>
        <div className='underline'></div>


<div className='col-md-6 col-11 m-auto'>

        <div className='card text-center mt-5' >
            
                <div className='text-center'>
               
                <card-body>
                <div className='position-relative  text-center alignment mt-5 ' > <FaQuoteRight size='30' className='mt-3 me-5 back position-absolute'/> <img src={datas[index].image} width='150' height='150' className='me-2 rounded-circle'/></div>
               <card-title> 
                   
                   <div className='texts mt-4 text-capitalize '>{datas[index].name}</div><div className='text1 text-capitalize'>{datas[index].job}</div></card-title>
                   <div className='d-flex justify-content-between'>
                  <FaLessThan className='prev btn btn-outline-secondary ms-3' onClick={handlePrev}  size='40'/>
                  <FaGreaterThan className='nex btn btn-outline-secondary me-3' onClick={handleNext} size='40'/>
                </div>
               
                
                <div className='mt-3 px-5 text2'>{datas[index].text}</div>
               

                <div className='p-5'>
                    <FaQuoteRight className='colors' size='50'/>
                </div>
                  
                </card-body>
                </div>
        </div>
        </div>
        
        </div>
  )
}

export default Sliders