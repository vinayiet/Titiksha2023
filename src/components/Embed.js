import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Yt() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#45637d', marginTop: "10px" }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='6'>
              <div className='ratio ratio-16x9'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HE8GLKM11PQ?si=YRkLZOPtZ7yP1CBr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
  );
}