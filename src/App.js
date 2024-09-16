import './App.css';

function App() {
  return (
      <main id="main">
        <a href="https://en.wikipedia.org/wiki/The_Right_Honourable">The Right Honourable</a>
        <h1>The Countess of Lovelace</h1>
        <figure id="img-div">
          <img id="image"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png/220px-Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png"
               alt="Ada Lovelace"/>
          <figcaption id="img-caption"><a href="https://en.wikipedia.org/wiki/Daguerreotype">
            Daguerreotype</a> by <a href="https://en.wikipedia.org/wiki/Antoine_Claudet">Antoine Claudet</a> (c.
            1843)<sup><a href="https://en.wikipedia.org/wiki/Ada_Lovelace#cite_note-blogbutfromboldian-1">[1]</a></sup>
          </figcaption>
        </figure>

        <article id="tribute-info">
          <h4 id="title">Born</h4>
          <p>Hon.Augusta Ada Byron
            <span>10 December 1815</span>
            <span>London, England</span>
          </p>
        </article>
        <article>
          <h4>Died</h4>
          <p>27 November 1852 (aged 36)
            <span><a id="tribute-link"  href="https://en.wikipedia.org/wiki/Marylebone">Marylebone</a>, London, England</span>
          </p>
        </article>
        <article>
          <h4>Resting place</h4>
          <p>Church of St. Mary Magdalene, Hucknall, Nottingham, England</p>
        </article>
        <article>
          <h4>Known for</h4>
          <p><a href="https://en.wikipedia.org/wiki/Mathematics">Mathematics </a> , <a
              href="https://en.wikipedia.org/wiki/Computing"> computing</a></p>
        </article>
        <article>
          <h4>Spouse</h4>
          <p><a href="https://en.wikipedia.org/wiki/William_King-Noel,_1st_Earl_of_Lovelace"> William King-Noel, 1st
            Earl of Lovelace</a>
            <span>(m. 1835)</span>
          </p>
        </article>
        <article>
          <h4>Children</h4>
          <p><a href="https://en.wikipedia.org/wiki/Byron_King-Noel,_Viscount_Ockham">
            Byron King-Noel, Viscount Ockham</a>
            <a href="https://en.wikipedia.org/wiki/Anne_Blunt,_15th_Baroness_Wentworth">Anne Blunt, 15th Baroness
              Wentworth</a>
            <a href="https://en.wikipedia.org/wiki/Ralph_King-Milbanke,_2nd_Earl_of_Lovelace">
              Ralph King-Milbanke, 2nd Earl of Lovelace</a>
          </p>
        </article>
        <article>
          <h4>Parents</h4>
          <p><a href="https://en.wikipedia.org/wiki/Lord_Byron">George Byron, 6th Baron Byron</a> (father)
            <span><a href="https://en.wikipedia.org/wiki/Lady_Byron">Anne Isabella Milbanke</a> (mother)</span></p>
        </article>
      </main>
  );
}

export default App;
