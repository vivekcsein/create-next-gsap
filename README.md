<h3>Yes, I can create any animation and i dont need JQUERY anymore</h3>

<h2>Author:- <a target="_blank" href="https://github.com/vivekcsein">@vivekcsein</a> </h2>

<h1>Project Key Features</h1>

<li><i>This contains standalone gsap animations which anyone can integrate into the project</i> </li>
<li><i>This contains a basic template 2025 with all the basic components</i> </li>

<p>pnpm add swiper gsap @gsap/react</p>

<h2>Tech Used: </h2>

<li> <i>Language:</i> <b><a target="_blank"href="https://www.typescriptlang.org/">Typescript</a></b></li>

<li> <i>Frontend:</i> <b><a target="_blank"href="https://nextjs.org/">NextJS</a></b></li>

<li> <i>Platform:</i> <b><a target="_blank"href="https://bun.sh/">Bunjs</a></b></li>

<li> <i>Primary CSS:</i> <b><a target="_blank"href="https://tailwindcss.com/">Tailwind CSS</a></b></li>

<li> <i>Secondary CSS:</i> <b><a target="_blank"href="https://sass-lang.com/"> Sass</a></b></li>

<li> <i>Component Library:</i> <b><a target="_blank"href="https://ui.shadcn.com/">Shadcn UI</a></b></li>

<li> <i>Animations:</i> <b><a target="_blank"href="https://gsap.com/">GSAP</a></b></li>

<h3>How to create project from scratch </h3>

<p>

    bun create next-app@latest .

</p>

<p> Setup basic folder structure </p>

<p>To install all packages in one line
</p>

<p>

    bun add dotenv@16.5.0 next-themes axios gsap swiper

</p>

<p>Install dev dependencies </p>

<p>

    bun add --dev sass prettier

</p>

<p>
    sass configuration
</p>
<p>
    Copy paste it propery in nextjs.config
</p>

<p>

       import path from "path";
       import { fileURLToPath } from "url";

       const __filename = fileURLToPath(import.meta.url);
       const __dirname = path.dirname(__filename);

       // inside nextConfig objext copy paste below code
       sassOptions: {
              includePaths: [path.join(__dirname, "styles")],
       },

</p>

<p>
        configure shadcn ui
</p>

<p>

        bun x --bun shadcn@latest init

</p>

<p>Move utils.ts to libs/shadcn

</p>

<p>

        bun x --bun shadcn@latest add

</p>
