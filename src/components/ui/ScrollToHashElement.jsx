// ScrollToHashElement.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    const elementId = hash.replace('#', '');

    if (!elementId) {
      return; // No hash, do nothing.
    }

    // Attempt to find the element immediately
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // If the element is not found, set up an observer to wait for it
    const observer = new MutationObserver((mutations, me) => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        me.disconnect(); // Stop observing once the element is found and scrolled to
      }
    });

    // Start observing the entire document body for changes
    observer.observe(document.body, {
      childList: true, // Observe direct children additions/removals
      subtree: true,   // Observe all descendants
    });

    // Cleanup function to disconnect the observer if the component unmounts
    // or if the hash changes before the element is found.
    return () => {
      observer.disconnect();
    };

  }, [location.hash]); // Rerun this effect only when the hash changes

  return null; // This component renders nothing
}

export default ScrollToHashElement;