import { tours } from "../data.js";
import Title from "./Title.js";
import Tour from "./Tour.js";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
