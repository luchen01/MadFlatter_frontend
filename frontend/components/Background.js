import React from 'react';

class Background extends React.Component {
    render() {
        return(
      <div className="photo_slider">
        <input type="radio" name="slider" className="slide-radio1" checked id="slider_1"/>
        <input type="radio" name="slider" className="slide-radio2" id="slider_2"/>
   <div className="slider-pagination">
      <label htmlFor="slider_1" className="page1"/>
      <label htmlFor="slider_2" className="page2"/>
       </div>
     <div className="next control">
     <label htmlFor="slider_1" className="numb1">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
 <path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"/>
      </svg>
    </label>
   <label htmlFor="slider_2" className="numb2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
 <path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"/>
      </svg>
 </label>
    </div>
   <div className="previous control">
 <label htmlFor="slider_1" className="numb1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
 <path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z"/>
</svg>
  </label>
  <label htmlFor="slider_2" className="numb2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
 <path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z"/>
</svg>
 </label>
 </div>
    <div className="slider slide_img_01"/>
    <div className="slider slide_img_02"/>
  </div>  );
    }
}

export default Background;
