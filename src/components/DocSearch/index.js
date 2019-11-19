import React, { useRef, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

export default function DocSearch({ indexName, apiKey }) {
  const docsearchRef = useRef(null);
  useEffect(() => {
    if (!docsearchRef.current || !docsearchRef.current.id) {
      return;
    }
    console.log(docsearchRef.current.id);
    console.log(docsearchRef.current);
    if (docsearchRef.current.class) {
      console.log(docsearchRef.current.class)
    }

    try {
      import('docsearch.js').then(({ default: docsearch }) => {
        docsearchRef.current.id &&
          docsearch({
            apiKey,
            indexName,
            inputSelector: `#${docsearchRef.current.id}`,
            debug: false, // Set debug to true if you want to inspect the dropdown
          });
      });
    } catch (error) {
      console.error('catched');
      console.error(error);
      // Note - error messages will vary depending on browser
    }
  }, [docsearchRef, indexName, apiKey]);
  return (
    <ErrorBoundary>
      <input id="q" ref={docsearchRef} />
    </ErrorBoundary>
  );
}
