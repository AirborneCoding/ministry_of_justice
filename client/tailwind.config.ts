import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			fontFamily: {
				arabicFont: "arabicFont",
			},

			animation: {
				scroll: 'scroll 35s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				scroll: {
					from: {
						transform: 'translateX(100%)'
					},
					to: {
						transform: 'translateX(-100%)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			colors: {
				myBlue: '#10283E',
				myBlue2: '#ebf7ff',
				myBlue3: '#275682',
				// grona: '#92434E',
				grona: 'rgb(234 179 8)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		function ({ addComponents }: { addComponents: Function }) {
			addComponents({
				'.body-container': {
					'margin-left': 'auto',
					'margin-right': 'auto',
					'max-width': '100%',
					'padding-left': '1rem',
					'padding-right': '1rem',
					'transition': 'all 0.3s ease',
				},
				'@media (min-width: 576px)': {
					'.body-container': {
						'max-width': '800px',
					},
				},
				'@media (min-width: 800px)': {
					'.body-container': {
						'max-width': '850px',
					},
				},
				'@media (min-width: 992px)': {
					'.body-container': {
						'max-width': '960px',
					},
				},
				'@media (min-width: 1200px)': {
					'.body-container': {
						'max-width': '1510px',
					},
				},
			});
		},
		require("tailwindcss-animate")
	],

	daisyui: {
		themes: ['winter', 'night'],
	},
};
export default config;
