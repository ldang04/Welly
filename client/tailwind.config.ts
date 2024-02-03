import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
	  colors: {
        'pink': '#F68D96',
		'beige': '#F1E3D3',
		'lightgray': '#FFF9F9',
		'winered': '#922D50',
		'brown': '#C29E75',
		'gray': '#D9D9D9',
		'orange': '#F2D0A9',
		'darkgray': "#767272",
		'darkbrown': '#887661',
		'darkorange':'#E69008'
      },
    },
  },
  plugins: [],
};
export default config;
