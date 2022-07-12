import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An Image  showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m max</h1>
      <p>
        I bog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
