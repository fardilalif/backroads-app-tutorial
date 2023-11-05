import { services } from "./../data";
import Service from "./Service.js";
import Title from "./Title.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service service={service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
