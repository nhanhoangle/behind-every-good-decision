(() => {
  const chapter = Number((location.pathname.match(/chapter(\d)/) || [, 1])[1]);
  const previous = chapter === 1 ? 'index.html' : `chapter${chapter - 1}/index.html`;
  const next = chapter === 3 ? 'index.html' : `chapter${chapter + 1}/index.html`;
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.innerHTML = `<a class="brand" href="../index.html">BEHIND EVERY <b>GOOD</b> DECISION</a><div class="chapter-nav"><a href="../index.html">Home</a><a href="../${previous}">← Previous</a><a href="../${next}">Next →</a></div>`;
})();
