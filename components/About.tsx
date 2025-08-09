const aboutMe = `Yo! Glad you dropped by. I’m Mohd Sahil Siddiqui, a frontend developer from India, currently based in Bangalore and building some pretty cool stuff at Simplify3x. With over 2 years of experience, I specialize in crafting sleek, high-performance UIs that don’t just work — they flow. React, TypeScript, and the magic of Next.js are my daily tools, and I’m always exploring new tech to level things up.

Outside of work, I spend a lot of time on side projects, skimming through tech blogs, or diving into endless YouTube rabbit holes (yes, doom-scrolling counts as research). I’m also a huge anime fan — shows like One Piece, Solo Leveling, Classroom of the Elite, and Blue Lock fuel my love for wild ideas and great storytelling.

Off the screen, I’m all about speed and adventure — I love bikes, fast cars, spontaneous trips, and tweaking my workspace setup until it’s just right. I’ve slowed down on gaming, but it’ll always be a part of me — those late-night sessions still hit different.

Wanna talk code, gadgets, or geek out over anime fight scenes? Even if you’re just bored or wanna say hi, I’m around — you’ll find my socials chilling on the homepage`;

export default function About() {
  return (
    <section className="mt-8 md:mt-12">
      <header>
        <h1 className="text-3xl md:text-[2.5rem] font-semibold">About Me</h1>
      </header>

      <div className="mt-6 space-y-6 text-gray-300 tracking-wider leading-7  text-lg">
        {aboutMe.split("\n\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
