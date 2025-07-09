import React, { useEffect, useRef } from 'react';

const Comentarios = () => {
  const commentsRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "kaiqueramos/mestre-da-moeda");
    script.setAttribute("data-repo-id", "R_kgDOO41nnA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOO41nnM4CsuqM");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "pt");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (commentsRef.current) {
        commentsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={commentsRef} className="giscus-container">
      {/* Giscus comments will be loaded here */}
    </div>
  );
};

export default Comentarios;
