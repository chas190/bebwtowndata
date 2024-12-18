import { useEffect } from 'react';

export const useIHOOAStyles = () => {
  useEffect(() => {
    // Add IHOOA-specific styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .ihooa-page {
        background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
        min-height: 100vh;
        padding-top: 5rem;
      }

      .ihooa-hero {
        position: relative;
        height: 70vh;
        background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
      }

      .ihooa-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
      }

      .ihooa-hero-content {
        position: relative;
        max-width: 800px;
        padding: 2rem;
      }

      .ihooa-hero h1 {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }

      .ihooa-hero p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      .ihooa-button {
        display: inline-flex;
        align-items: center;
        padding: 1rem 2rem;
        background: #4299e1;
        color: white;
        border-radius: 9999px;
        font-weight: 600;
        transition: all 0.2s;
      }

      .ihooa-button:hover {
        background: #3182ce;
        transform: translateY(-2px);
      }

      .ihooa-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 1rem;
      }

      .ihooa-features {
        background: white;
      }

      .ihooa-features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .ihooa-feature-card {
        padding: 2rem;
        background: #f7fafc;
        border-radius: 1rem;
        text-align: center;
        transition: all 0.3s;
      }

      .ihooa-feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .ihooa-icon {
        width: 3rem;
        height: 3rem;
        margin: 0 auto 1.5rem;
        color: #4299e1;
      }

      .ihooa-feature-card h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2d3748;
        margin-bottom: 1rem;
      }

      .ihooa-feature-card p {
        color: #4a5568;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .ihooa-hero h1 {
          font-size: 3rem;
        }

        .ihooa-hero p {
          font-size: 1.25rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};