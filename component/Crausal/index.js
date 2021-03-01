import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Crausal = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


  return(
    <Carousel activeIndex={index} onSelect={handleSelect}>
    
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHN0b3JlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="crausel" style={{color:"black",fontFamily:"Proxima Nova",fontSize:"38px", fontWeight:"bold"}}>Time and Tide wait for none</h3>
        <p className="crausel" style={{color:"black",fontFamily:"Proxima Nova",fontSize:"26px", fontWeight:"medium"}}>“Business opportunities are like buses, there's always another one coming.” – Richard Branson.</p>
      </Carousel.Caption>
    </Carousel.Item>
   
   
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHN0b3JlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Second slide"
      />
     <Carousel.Caption>
        <h3 className="crausel" style={{color:"#22201F" ,fontFamily:"Proxima Nova",fontSize:"38px", fontWeight:"bold"}}>Think Innovative</h3>
        <p className="crausel"  style={{color:"black",fontFamily:"Proxima Nova",fontSize:"26px", fontWeight:"medium"}}>The way to get started is to quit talking and begin doing.</p>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
     <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbmUlMjBzdG9yZSUyMHBpY3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Third slide"
      />
        <Carousel.Caption>
        <h3 className="crausel" style={{color:"#000000DE",fontFamily:"Proxima Nova",fontSize:"38px", fontWeight:"bold"}}>Built Your Empire</h3>
        <p className="crausel" style={{color:"#000000DE",fontFamily:"Proxima Nova",fontSize:"26px", fontWeight:"medium"}}>
          The Credit belongs to the man who is actually in the arena
        </p>
      </Carousel.Caption>
    </Carousel.Item>




  </Carousel>
   )

 }

export default Crausal;
