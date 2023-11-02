import React from 'react'
import styled from 'styled-components'

export default function Capsule() {
  return (
    <DIV>
      
            <h2 className="section__title-center">
            Why We are  <br/> Different  Others
                </h2>
        <div class="container mt-5 mb-5 pt-lg-5">


  <div class="card-left border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://5.imimg.com/data5/WX/YO/LT/SELLER-90188891/house-plants.jpg'/>
    </div>
    <div class="card-text">
        <h5 className='fw-bold'>Wide Plant Variety</h5>
      <p>Diversity in plant species worldwide</p>
    </div>
  </div>


  <div class="card-top border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://img.freepik.com/premium-photo/sustainable-living-photograph-eco-friendly-practices-daily-life_977107-714.jpg'/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Eco-Friendly Practices</h5>
      <p>Sustainable, Earth-conscious actions for a greener future.</p>
    </div>
  </div>


  <div class="card-right border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://secretgardens.co.nz/wp-content/uploads/2023/02/DSC_0475.jpg'/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Local and Hand-Grown</h5>
      <p>Hand-cultivated products for community support.</p>
    </div>
  </div>


  <div class="card-right border" data-aos="fade-up">
    <div class="card-image">
    <img src='https://images.contentstack.io/v3/assets/blt4b058df675b2da42/blta177163d39512cd1/6514569705fa06bd6df4ce5a/060922_JZ_A_0227.jpg'/>
    </div>
    <div class="card-text">
        <h5 className='fw-bold'>Online Plant Care</h5>
      <p>Digital tips for nurturing healthy plants remotely.</p>
    </div>
  </div>

  
  <div class="card-left border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://media.istockphoto.com/id/1367939073/photo/businessman-using-tablet-and-laptop-analyzing-sales-data-and-economic-growth-graph-chart.jpg?s=612x612&w=0&k=20&c=SEELREH2KeXpqMCEMa2WHNrc4IsDQUvlvk8Upz_TtTg='/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Competitive Pricing</h5>
      <p>Competitive and affordable product pricing strategies</p>
    </div>
  </div>
  <div class="card-top border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://www.shutterstock.com/image-photo/delivery-orchid-flowers-singapore-botanic-260nw-90300217.jpg'/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Delivery and Shipping</h5>
      <p>Efficient shipping and delivery services</p>
    </div>
  </div>
  <div class="card-bottom border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://img.freepik.com/free-photo/young-child-with-small-plants-by-window_23-2148831419.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais'/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Plant Health Guarantee</h5>
      <p>Assurance of plant well-being and quality</p>
    </div>
  </div>
  <div class="card-left border" data-aos="fade-up">
    <div class="card-image">
    <img src='https://www.shutterstock.com/image-photo/courier-delivering-gift-box-floral-260nw-650680966.jpg'/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Gift Services</h5>
      <p>Specialized gift-giving and wrapping solutions</p>
    </div>
  </div>
  <div class="card-bottom border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://media.istockphoto.com/id/1364679535/photo/man-teaching-children-about-plants-in-community-garden.jpg?s=612x612&w=0&k=20&c=bV8c4vx4-zYc_kW9PxE94IJ9dA_vT9zP3BmvgKABtyk='/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Plant Community Events</h5>
      <p>Gatherings celebrating plant enthusiasts and greenery</p>
    </div>
  </div>
  <div class="card-right border" data-aos="fade-up">
    <div class="card-image">
      <img src='https://media.istockphoto.com/id/1148009613/photo/environmental-beautification-volunteers-plant-flowers-plants-at-local-park-in-spring.jpg?s=612x612&w=0&k=20&c=e2ocKwtW5sEi6y5M5dlbd2HBtpaTrZpgnFJM5r-pbh4='/>
    </div>
    <div class="card-text">
    <h5 className='fw-bold'>Transparent Sourcing</h5>
      <p>Honesty in product ingredient or material origins</p>
    </div>
  </div>

</div>

    </DIV>
  )
}


const DIV = styled.div`

    body {
	 margin: 23px;
}

 * {
	 box-sizing: border-box;
}
 .container {
	 width: 100%;
	 display: grid;
	 grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
	 grid-auto-rows: 200px;
	 grid-auto-flow: row dense;
	 grid-gap: 23px;
	 justify-content: center;

}
 .card-top, .card-right, .card-bottom, .card-left {
	 display: flex;
	 flex-wrap: nowrap;
	 height: 100%;
	 width: 100%;
	 border-radius: 95.2380952381px;
	 box-shadow: 0px 3px 9px 1px rgba(0, 10, 20, 0.2);
   /* border: 1px solid white; */
}
 .card-top {
	 flex-direction: column;
	 grid-column: auto / span 1;
	 grid-row: auto / span 2;
}
 .card-right {
	 flex-direction: row-reverse;
	 grid-column: auto / span 2;
	 grid-row: auto / span 1;
}
 .card-bottom {
	 flex-direction: column-reverse;
	 grid-column: auto / span 1;
	 grid-row: auto / span 2;
}
 .card-left {
	 flex-direction: row;
	 grid-column: auto / span 2;
	 grid-row: auto / span 1;
}
 .card-image {
	 display: flex;
}
 .card-top .card-image, .card-bottom .card-image {
	 height: 50%;
	 width: 100%;
}
 .card-left .card-image, .card-right .card-image {
	 height: 100%;
	 width: 50%;
}
 .card-image img {
	 width: 100%;
	 object-fit: cover;
}
 .card-top img {
	 border-radius: 95.2380952381px 95.2380952381px 0 0;
}
 .card-right img {
	 border-radius: 0 95.2380952381px 95.2380952381px 0;
}
 .card-bottom img {
	 border-radius: 0 0 95.2380952381px 95.2380952381px;
}
 .card-left img {
	 border-radius: 95.2380952381px 0 0 95.2380952381px;
}
 .card-text {
	 align-self: center;
	 padding: 23px;
}
 .card-top .card-text {
	 height: auto;
	 width: auto;
	 padding-bottom: 36.8px;
}
 .card-right .card-text {
	 height: auto;
	 width: 50%;
	 padding-left: 36.8px;
}
 .card-bottom .card-text {
	 height: auto;
	 width: auto;
	 padding-top: 36.8px;
}
 .card-left .card-text {
	 height: auto;
	 width: 50%;
	 padding-right: 36.8px;
}
 .card-text p {
	 margin: 0;
	 line-height: 1.35em;
	 /* color: #345; */
}
 @media (max-width: 500px) {
	 .card-top {
		 flex-direction: row;
		 grid-column: auto / span 2;
		 grid-row: auto / span 1;
	}
	 .card-bottom {
		 flex-direction: row-reverse;
		 grid-column: auto / span 2;
		 grid-row: auto / span 1;
	}
	 .card-top .card-image, .card-bottom .card-image {
		 height: 100%;
		 width: 50%;
	}
	 .card-top img {
		 border-radius: 95.2380952381px 0 0 95.2380952381px;
	}
	 .card-bottom img {
		 border-radius: 0 95.2380952381px 95.2380952381px 0;
	}
	 .card-top .card-text {
		 height: auto;
		 width: 50%;
		 padding-right: 36.8px;
	}
	 .card-bottom .card-text {
		 height: auto;
		 width: 50%;
		 padding-left: 36.8px;
	}
}
 @media (max-width: 400px) {
	 .card-image {
		 width: 38% !important;
	}
	 .card-text {
		 width: 62% !important;
	}
}
 
`