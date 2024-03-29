export default function Ceaser() {
  return (
    <section className="second_page">
      <div className="navigation">
        <img
          src="./assets/images/pc.gif"
          alt="wikipedia picture"
          className="logo"
        />

        <div className="wikiBar">
          <input className="searchWiki" type="text" placeholder="Search" />
        </div>
        <div className="nav">
          <p className="account">Create account</p>
          <p className="log">Log in</p>
        </div>
      </div>
      <div className="articleSection">
        <div className="contents">
          <div className="contentTi">
            <h3 className="contentHeader">Contents</h3>
          </div>

          <ul className="contentTitles">
            <a className="titleLink" href="#">
              <p className="pageTitle">Example</p>
            </a>
            <a className="titleLink" href="#">
              <p className="pageTitle">History and usage</p>
            </a>
            <a className="titleLink" href="#">
              <p className="pageTitle">Breaking the cipher</p>
            </a>
            <a className="titleLink" href="#">
              <p className="pageTitle">See also</p>
            </a>
            <a className="titleLink" href="#">
              <p className="pageTitle">Notes</p>
            </a>
          </ul>
        </div>
        <div className="article">
          <div className="articleHeader">
            <p className="headerAr">Caesar cipher</p>
          </div>
          <div className="artImg">
            <p className="articleBody">
              In cryptography, a Caesar cipher, is one of the simplest and most
              widely known encryption techniques. It is a type of substitution
              cipher in which each letter in the plaintext is replaced by a
              letter some fixed number of positions down the alphabet. For
              example, with a left shift of 3, D would be replaced by A, E would
              become B, and so on.
            </p>
            <div className="arImg">
              <img
                className="articleImg"
                src="./assets/images/cez.png"
                alt="Caesar cipher image"
              />
            </div>
          </div>

          <div className="Examples">
            <p className="artExp">Examples</p>
          </div>
          <div className="ex">
            <p className="exText">
              Here's an example of the Caesar cipher with a shift of 3:
              <br />
              Original alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X
              Y Z <br />
              Shifted alphabet: D E F G H I J K L M N O P Q R S T U V W X Y Z A
              B C <br />
              Using this shifted alphabet, you can encrypt a message by
              replacing each letter with the one that is three positions to the
              right. For example, the word "HELLO" would be encrypted as
              "KHOOR."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
