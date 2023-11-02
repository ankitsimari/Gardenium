import React from "react";
import {styled} from "styled-components"

export default function Faq() {
  return (
    <DIV>
      <section className=" questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
          Some common questions <br /> were often asked
        </h2>
        <div className="container">
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <h4> Accordion Item #1</h4>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>


</div>
        </div>
      </section>
    </DIV>
  );
}


const DIV = styled.div`
.accordion-item{
  background-color: transparent;
}
.accordion-button{
  background-color:transparent;
}
`