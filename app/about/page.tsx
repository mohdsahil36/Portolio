const aboutMe = {
  description: [
    "Hello World! I’m Mohd Sahil Siddiqui, a frontend dev from India. Currently working at Simplify3x in Bangalore, building user-friendly websites and exploring cool tech.",
    "With 2+ years in the game, I mostly work with Next.js, React, TypeScript, and always experiment with new frameworks to make things faster, smoother, and more fun.",
    "When I’m not coding, I’m working on side projects, reading tech blogs, or diving into YouTube rabbit holes. And yes, doom-watching tech videos for fun!",
  ],
  hobbies: [
    {
      description:
        "Big fan of anime like One Piece, Solo Leveling, Classroom of the Elite, and Blue Lock. The creativity and wild stories always keep me hooked!",
    },

    {
      description:
        "Into bikes, cars that give that adrenaline rush, and exploring new places whenever I get the chance. The thrill and the adventure never get old!",
    },

    {
      description:
        "Always tweaking my tech setup, hunting for the latest gadgets, and figuring out how to make everything run smoothly and look cool!",
    },

    {
      description:
        "I might not game much anymore, but gaming’s still a huge part of me. The nostalgia and fun of it will always hold a place in my heart!",
    },
  ],
};

export default function About() {
  return (
    <section className="mt-8 md:mt-12">
      <header>
        <h1 className="text-3xl md:text-[2.5rem] font-semibold">About Me</h1>
      </header>

      <div className="mt-6 space-y-6 text-gray-400">
        {aboutMe.description.map((para, index) => (
          <p key={index} className="text-md md:text-xl leading-5 md:leading-10">
            {para}
          </p>
        ))}

        <p className="text-md md:text-xl leading-5 md:leading-10">
          Here’s what else I’m into:
        </p>

        <ul className="space-y-4 text-md md:text-xl leading-5 md:leading-10">
          {aboutMe.hobbies.map((hobby, index) => (
            <li key={index}>- {hobby.description}</li>
          ))}
        </ul>

        <p className="text-md md:text-xl leading-5 md:leading-10">
          Wanna chat about tech, anime, or anything else? Hit me up on socials
          or drop me an email. Always down to connect!
        </p>
      </div>
    </section>
  );
}
