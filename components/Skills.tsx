import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Stack = [
  { icon: "atlassian-svgrepo-com", content: "Jira" },
  { icon: "azure-devops-svgrepo-com", content: "Azure DevOps" },
  { icon: "bitbucket-svgrepo-com", content: "Bitbucket" },
  { icon: "bootstrap-svgrepo-com", content: "Bootstrap" },
  { icon: "css-3-svgrepo-com", content: "CSS" },
  { icon: "figma-svgrepo-com", content: "Figma" },
  { icon: "git-merge-svgrepo-com", content: "Git" },
  { icon: "html-5-svgrepo-com", content: "HTML" },
  { icon: "javascript-svgrepo-com", content: "JavaScript" },
  { icon: "next-js-svgrepo-com", content: "Next.js" },
  { icon: "node-js-svgrepo-com", content: "Node.js" },
  {
    icon: "react-javascript-js-framework-facebook-svgrepo-com",
    content: "React",
  },
  { icon: "redux-logo-svgrepo-com", content: "Redux" },
  { icon: "scss2-svgrepo-com", content: "SCSS" },
  { icon: "tailwind-svgrepo-com", content: "Tailwind CSS" },
  { icon: "typescript-svgrepo-com", content: "TypeScript" },
  { icon: "icons8-express-js", content: "Express JS" },
  { icon: "icons8-firebase", content: "Firebase" },
  { icon: "Zustand-icon", content: "Zustand" },
  { icon: "shadcn-ui_dark", content: "ShadCn" },
  { icon: "MongoDB", content: "Mongo Db" },
  { icon: "icons8-chatgpt", content: "ChatGPT" },
];

export default function Skills() {
  return (
    <section className="mt-8 md:mt-12">
      <header>
        <h1 className="text-3xl md:text-[2.5rem] font-semibold">Stack</h1>
      </header>
      <ul className="flex flex-wrap gap-x-6 select-none">
        {Stack.map((item) => (
          <Tooltip key={item.content}>
            <TooltipTrigger asChild>
              <li className="mt-8 flex">
                <Image
                  src={`/assets/icons/${item.icon}.svg`}
                  alt={`${item.content}-icon`}
                  width={40}
                  height={40}
                />
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <span>{item.content}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </section>
  );
}
