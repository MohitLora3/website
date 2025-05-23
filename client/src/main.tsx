import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Font family setup in CSS to match design reference
const style = document.createElement('style');
style.textContent = `
  :root {
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 0 0% 98%;

    /* Blue colors */
    --primary-50: 217 100% 97%;
    --primary-100: 217 100% 92%;
    --primary-200: 217 100% 86%;
    --primary-300: 217 100% 76%;
    --primary-400: 217 100% 69%;
    --primary-500: 217 100% 58%;
    --primary-600: 217 100% 50%;
    --primary-700: 217 100% 42%;
    --primary-800: 217 100% 34%;
    --primary-900: 217 100% 26%;
    --primary-950: 217 100% 18%;

    /* Purple accent colors */
    --accent-50: 270 100% 98%;
    --accent-100: 270 100% 94%;
    --accent-200: 270 100% 88%;
    --accent-300: 270 100% 80%;
    --accent-400: 270 100% 70%;
    --accent-500: 270 100% 60%;
    --accent-600: 270 100% 50%;
    --accent-700: 270 100% 42%;
    --accent-800: 270 100% 34%;
    --accent-900: 270 100% 26%;
    --accent-950: 270 100% 18%;

    /* Green secondary colors */  
    --secondary-50: 152 100% 96%;
    --secondary-100: 152 100% 90%;
    --secondary-200: 152 100% 82%;
    --secondary-300: 152 100% 70%;
    --secondary-400: 152 100% 60%;
    --secondary-500: 152 100% 45%;
    --secondary-600: 152 100% 38%;
    --secondary-700: 152 100% 30%;
    --secondary-800: 152 100% 24%;
    --secondary-900: 152 100% 18%;
    --secondary-950: 152 100% 10%;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  .gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #3B82F6, #7C3AED);
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .cta-button {
    background-image: linear-gradient(to right, #3B82F6, #7C3AED);
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-image: linear-gradient(to right, #2563EB, #6D28D9);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .hero-bg {
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
  }

  .tab-button.active {
    color: #3B82F6;
    border-color: #3B82F6;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
