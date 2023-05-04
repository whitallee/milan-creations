import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselSC() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        centerMode={true}
        infinite={true}
        autoplay={true}
        autoplayDelay={5000}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 0,
            lineHeight: 1,
            textAlign: 'center',
            width: 30
          },
          children: <span>{``}</span>,
          className: 'carousel-button',
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 0,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{``}</span>,
          className: 'carousel-button',
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={800}
        easing="ease"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ height: 420, aspectRatio: 4/3, background: 'none' }}>
          <img className='showcase-img' src='https://cdn.shopify.com/s/files/1/0258/1076/3869/products/2CA2D5F6-1DC5-48E4-B94A-2A88ACB4E863.jpg?v=1638647494'/>
        </div>
        <div style={{ height: 420, aspectRatio: 4/3, background: 'none' }}>
          <img className='showcase-img' src="https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <div style={{ height: 420, aspectRatio: 4/3, background: 'none' }}>
          <img className='showcase-img' src="https://images.pexels.com/photos/6666403/pexels-photo-6666403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselSC;