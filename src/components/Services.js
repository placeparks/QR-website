import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpg';

export default function Services() {
  const cardTitles = ['Employees Training', 'Custom Dashboards', 'Custom Packages'];
  const cardDescriptions = [
    ' Our expert team provides thorough training for your employees, ensuring they are well-versed in the use of our QR Tracker app. We equip your workforce with the knowledge and skills to handle emergency situations effectively, enhancing overall safety within your organization. ',
    ' We understand that every organization has unique needs. That is why we offer custom dashboards, designed to align with your specific organizational requirements. Our dashboards provide real-time insights and analytics, enabling you to monitor and manage emergency situations efficiently. ',
    ' To cater to the diverse needs of your organization, we offer custom packages. Whether you are a small business or a large corporation, we can tailor our services to fit your specific needs and budget. '
  ];

  return (
    <div style={{ backgroundColor: "#1c1f1f", padding: "8%", lineHeight: "2rem", fontFamily:"Inria Serif" }}>
      <h1 style={{ color: "#c19957" }}>Services</h1>
      <h5 style={{ color: "white", paddingBottom: "2%", lineHeight: "2rem" }}>
        Experience real-time assistance with QR Tracker's 24/7 live call center. Our team of trained professionals is dedicated to providing immediate guidance and support when you need it the most.
      </h5>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[image1, image2, image3].map((image, index) => (
          <div className="col" key={index}>
            <div 
              className="card h-100" 
              style={{ 
                backgroundColor: "#121414", 
                color: "white", 
                transition: "transform 0.3s", 
                overflow: "hidden" ,
                 fontFamily:"Inria Serif" 
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                const title = e.currentTarget.querySelector('.card-title');
                title.style.color = '#c19957';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                const title = e.currentTarget.querySelector('.card-title');
                title.style.color = 'white';
              }}
            >
              <img src={image} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">{cardTitles[index]}</h5>
                <p className="card-text">{cardDescriptions[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
