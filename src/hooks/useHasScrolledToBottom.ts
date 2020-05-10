import { useEffect, useState } from 'react';

export const useHasScrolledToBottom = (listRef: HTMLUListElement | null) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Handles the scroll updates inside a useEffect
  useEffect(() => {
    if (!listRef) {
      return;
    }

    /**
     * Tracks the current scroll position so that we can detect if the user has scrolled to bottom.
     */
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom
      if (listRef.offsetHeight + listRef.scrollTop !== listRef.scrollHeight) {
        setIsAtBottom(false);
      } else {
        setIsAtBottom(true);
      }
    };

    // Subscribe to the scroll event
    listRef.addEventListener('scroll', handleScroll);

    // Unsubscribe to the scroll event. Returning a function here tells React to perform a cleanup.
    return () => listRef.removeEventListener('scroll', handleScroll);
  }, [listRef]);

  return isAtBottom;
};
