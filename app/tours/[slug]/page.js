import TourDetailsPage from "@/tours/TourDetailsPage";
import toursData from "@/data/data";

export default async function Page({ params }) {
    const { slug } = await params;

    const tour = toursData.find((t) => t.slug === slug);

    return <TourDetailsPage tour={tour} />;
}
