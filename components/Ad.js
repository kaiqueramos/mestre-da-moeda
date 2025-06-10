function Ad({ slot }) {
  const adsense = `
    <div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7370891496054049"
       crossorigin="anonymous"></script>
      <ins className="adsbygoogle"
           style={{ display: "block", textAlign: "center" }}
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-7370891496054049"
           data-ad-slot=${slot}></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  `;

  return (
    <div className="my-4" dangerouslySetInnerHTML={{ __html: adsense }} />
  );
}
