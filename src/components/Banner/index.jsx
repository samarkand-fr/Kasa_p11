import React from 'react'


const Banner = ({ picture, title }) => {
    return (
      <section >
        <div >
          <img src={picture} alt="arrière-plan paysage" />
        </div>
        {title && <h1>{title}</h1>}
      </section>
    );
}
export default Banner