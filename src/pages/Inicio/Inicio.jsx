import '../Inicio/Inicio.css'
import { Link } from 'react-router-dom';
const Inicio = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-inner">
                    <h2>Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí. Juan 14:6</h2>
                    <Link to={"/galeria"} className='btn btn-outline-success btn-lg '>Galeria</Link>
                </div>
            </div>
            <main className="container mt-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Evento</strong>
                                <h3 className="mb-0">Convencion</h3>
                                <div className="mb-1 text-muted">Marzo 19 de 2023</div>
                                <p className="card-text mb-auto">
                                    Se les invita a hermanas en cristo a asistir a un evento el cual se estara llevando en la ciudad de tampico
                                </p>
                                <a href="#" className="stretched-link">
                                    Continuar lectura...
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg
                                    className="bd-placeholder-img"
                                    width={200}
                                    height={250}
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                        Thumbnail
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Evento</strong>
                                <h3 className="mb-0">Caravana de autos</h3>
                                <div className="mb-1 text-muted">Abril 8 de 2023</div>
                                <p className="mb-auto">
                                Durante el proximo mes de abril se estara llevando una caravana en nuestro municipio de cardenas.
                                </p>
                                <a href="#" className="stretched-link">
                                    Continuar lectura...
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg
                                    className="bd-placeholder-img"
                                    width={200}
                                    height={250}
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                        Thumbnail
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>
                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">Sample blog post</h2>
                            <p className="blog-post-meta">
                                January 1, 2021 by <a href="#">Mark</a>
                            </p>
                            <p>
                                This blog post shows a few different types of content that’s supported
                                and styled with Bootstrap. Basic typography, lists, tables, images,
                                code, and more are all supported as expected.
                            </p>
                            <hr />
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <h2>Blockquotes</h2>
                            <p>This is an example blockquote in action:</p>
                            <blockquote className="blockquote">
                                <p>Quoted text goes here.</p>
                            </blockquote>
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <h3>Example lists</h3>
                            <p>
                                This is some additional paragraph placeholder content. It's a slightly
                                shorter version of the other highly repetitive body text used
                                throughout. This is an example unordered list:
                            </p>
                            <ul>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ul>
                            <p>And this is an ordered list:</p>
                            <ol>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ol>
                            <p>And this is a definition list:</p>
                            <dl>
                                <dt>HyperText Markup Language (HTML)</dt>
                                <dd>
                                    The language used to describe and define the content of a Web page
                                </dd>
                                <dt>Cascading Style Sheets (CSS)</dt>
                                <dd>Used to describe the appearance of Web content</dd>
                                <dt>JavaScript (JS)</dt>
                                <dd>
                                    The programming language used to build advanced Web sites and
                                    applications
                                </dd>
                            </dl>
                            <h2>Inline HTML elements</h2>
                            <p>
                                HTML defines a long list of available inline tags, a complete list of
                                which can be found on the{" "}
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
                                    Mozilla Developer Network
                                </a>
                                .
                            </p>
                            <ul>
                                <li>
                                    <strong>To bold text</strong>, use{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;strong&gt;
                                    </code>
                                    .
                                </li>
                                <li>
                                    <em>To italicize text</em>, use{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;em&gt;
                                    </code>
                                    .
                                </li>
                                <li>
                                    Abbreviations, like{" "}
                                    <abbr title="HyperText Markup Language">HTML</abbr> should use{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;abbr&gt;
                                    </code>
                                    , with an optional{" "}
                                    <code className="language-plaintext highlighter-rouge">title</code>{" "}
                                    attribute for the full phrase.
                                </li>
                                <li>
                                    Citations, like <cite>— Mark Otto</cite>, should use{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;cite&gt;
                                    </code>
                                    .
                                </li>
                                <li>
                                    <del>Deleted</del> text should use{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;del&gt;
                                    </code>{" "}
                                    and <ins>inserted</ins> text should use{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;ins&gt;
                                    </code>
                                    .
                                </li>
                                <li>
                                    Superscript <sup>text</sup> uses{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;sup&gt;
                                    </code>{" "}
                                    and subscript <sub>text</sub> uses{" "}
                                    <code className="language-plaintext highlighter-rouge">
                                        &lt;sub&gt;
                                    </code>
                                    .
                                </li>
                            </ul>
                            <p>
                                Most of these elements are styled by browsers with few modifications
                                on our part.
                            </p>
                            <h2>Heading</h2>
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <h3>Sub-heading</h3>
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <pre>
                                <code>Example code block</code>
                            </pre>
                            <p>
                                This is some additional paragraph placeholder content. It's a slightly
                                shorter version of the other highly repetitive body text used
                                throughout.
                            </p>
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">Another blog post</h2>
                            <p className="blog-post-meta">
                                December 23, 2020 by <a href="#">Jacob</a>
                            </p>
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <blockquote>
                                <p>
                                    Longer quote goes here, maybe with some{" "}
                                    <strong>emphasized text</strong> in the middle of it.
                                </p>
                            </blockquote>
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <h3>Example table</h3>
                            <p>And don't forget about tables in these posts:</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Upvotes</th>
                                        <th>Downvotes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alice</td>
                                        <td>10</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>Bob</td>
                                        <td>4</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Charlie</td>
                                        <td>7</td>
                                        <td>9</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Totals</td>
                                        <td>21</td>
                                        <td>23</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <p>
                                This is some additional paragraph placeholder content. It's a slightly
                                shorter version of the other highly repetitive body text used
                                throughout.
                            </p>
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">New feature</h2>
                            <p className="blog-post-meta">
                                December 14, 2020 by <a href="#">Chris</a>
                            </p>
                            <p>
                                This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of
                                text affects the surrounding content. We'll repeat it often to keep
                                the demonstration flowing, so be on the lookout for this exact same
                                string of text.
                            </p>
                            <ul>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ul>
                            <p>
                                This is some additional paragraph placeholder content. It's a slightly
                                shorter version of the other highly repetitive body text used
                                throughout.
                            </p>
                        </article>
                        <nav className="blog-pagination" aria-label="Pagination">
                            <a className="btn btn-outline-primary rounded-pill" href="#">
                                Older
                            </a>
                            <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "2rem" }}>
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="fst-italic">Acerca de</h4>
                                <p className="mb-0">
                                    En nuestra pagina encontraras informacion de interes acerca de eventos, asi como material importante que puedes consultar y descargar   .
                                </p>
                            </div>
                            <div className="p-4">
                                <h4 className="fst-italic">Actividades</h4>
                                <ol className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Marzo 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Abril 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Mayo 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Junio 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Julio 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Agosto 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Septiembre 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Octubre 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Noviembre 2023</a>
                                    </li>
                                    <li>
                                        <a href="#">Diciembre 2023</a>
                                    </li>
                                </ol>
                            </div>
                            <div className="p-4">
                                <h4 className="fst-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li>
                                        <a href="#">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Inicio;