import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/passport.jpeg"
          alt="An Image  showing Emmanuel"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi, I&apos;m Emmanuel</h1>
      <p>
        I bog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
