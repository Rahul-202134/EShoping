import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            name: 'John Doe',
            location: 'New York, USA',
            rating: 5,
            comment: 'This product exceeded my expectations! Highly recommended!',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Jane Smith',
            location: 'London, UK',
            rating: 4,
            comment: 'Great quality and fast shipping. I will definitely buy again.',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Alice Johnson',
            location: 'Sydney, Australia',
            rating: 5,
            comment: 'Amazing service and excellent product. 5 stars all the way!',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="testimonial-section container">
            <div className="container-heading text-center mb-5">
                <h2 className="fw-bold">What Our Customers Say</h2>
            </div>
            <div className="row">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="col-12 col-md-4 mb-4">
                        <div className="testimonial-card p-4 border rounded shadow-sm">
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-circle me-3"
                                    style={{ width: '50px', height: '50px' }}
                                />
                                <div>
                                    <h5 className="mb-0">{testimonial.name}</h5>
                                    <small className="text-muted">{testimonial.location}</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                {Array(testimonial.rating)
                                    .fill()
                                    .map((_, i) => (
                                        <span key={i} className="text-warning">&#9733;</span>
                                    ))}
                            </div>
                            <p>{testimonial.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
