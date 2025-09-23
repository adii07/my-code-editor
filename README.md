

# My Code Editor

A modern, web-based code editor built with Next.js and TypeScript. This project provides a responsive interface for editing code in multiple languages, with live output and a clean, user-friendly design.

## Live Demo

[my-code-editor-x8eb.vercel.app/javascript](https://my-code-editor-x8eb.vercel.app/javascript)

## Features

- Multi-language code editing
- Live output screen
- Responsive design for desktop and mobile
- Modular component structure
- Custom hooks for device detection

## Project Structure

```
components/
	Editor/           # Main code editor component
	EditorHeader/     # Header for the editor
	Header/           # Main app header
	MobileHeader/     # Header for mobile view
	OutputScreen/     # Displays code output
	Selector/         # Language selector
hooks/
	isDesktop.ts      # Custom hook for device detection
public/             # Static assets (SVGs, icons)
src/app/            # Next.js app directory
	[language]/       # Dynamic language-based pages
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

```bash
npm run build
npm start
```

## Customization
- Add new languages by extending the `Selector` and `[language]` page logic.
- Update styles in the respective `.module.css` files for each component.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
