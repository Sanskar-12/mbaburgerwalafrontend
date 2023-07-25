import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";

const Founder = () => {
  return (
    <section className="founder">
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <img
          src={me}
          alt="founder"
          style={{ height: "200px", width: "200px" }}
        />
        <h3>Kamado Tanjiro</h3>

        <p>
          Hey, Everyone I am Kamado Tanjiro, the founder of MBA Burger Wala.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
