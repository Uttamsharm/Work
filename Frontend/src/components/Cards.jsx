import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Cards() {
    const testimonials = [
        {
            name: "Robert A. Voltaire",
            role: "Store link",
            image: "https://placehold.co/60x60",
            rating: 5,
            text: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!"
        },
        {
            name: "Quinten Barney",
            role: "Etsy Merchant",
            image: "https://placehold.co/60x60",
            rating: 5,
            text: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better."
        },
        {
            name: "Nikki",
            role: "Store link",
            image: "https://placehold.co/60x60",
            rating: 5,
            text: "Printify has been a amazing as we grow our business, for can make for our customer. Customer Service team the whole process a bre"
        },
        {
            name: "John Doe",
            role: "Business Owner",
            image: "https://placehold.co/60x60",
            rating: 4,
            text: "Using Printify has streamlined our print-on-demand business. Great service and quality products!"
        },
        {
            name: "Jane Smith",
            role: "Etsy Seller",
            image: "https://placehold.co/60x60",
            rating: 5,
            text: "Printify's ease of use and integration with Etsy have boosted my sales. I couldn't be happier!"
        }
    ];

    const TestimonialCard = ({ testimonial }) => (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-80">
            <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-green-500">{testimonial.role}</p>
                </div>
            </div>
            <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500"></i>
                ))}
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Show 3 testimonials at a time
        slidesToScroll: 1,  // Scroll 1 slide at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,  // Show 2 testimonials on medium screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,  // Show 1 testimonial on small screens
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mt-10 w-full">
            <div className="ml-10">  
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Cards;




