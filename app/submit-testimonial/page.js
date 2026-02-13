// app/submit-testimonial/page.js
import TestimonialForm from '../components/TestimonialForm';

export const metadata = {
    title: 'Submit Your Testimonial - Alpine Odyssey',
    description: 'Share your Bhutan travel experience with us',
};

export default function SubmitTestimonialPage() {
    return <TestimonialForm />;
}