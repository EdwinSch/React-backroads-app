import Title from "./Title";
import { tours } from "../data.js";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subTitle={"tours"} />

      <div className="section-center featured-center">
        {/* // map tours */}
        {tours.map((tour) => {
          // return
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
