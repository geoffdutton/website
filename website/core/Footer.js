/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    /**
     * A bug from docusaurus where if I'm at page https://laconiajs.io/docs/introduction/getting-started,
     * the Footer will show https://laconiajs.io/docs/en/introduction/getting-started
     * (notice the /en/ in the URL)
     */
    // const langPart = `${language ? `${language}/` : ""}`;
    const langPart = "";
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a
              href={this.docUrl(
                "introduction/getting-started",
                this.props.language
              )}
            >
              Getting Started
            </a>
            <a
              href={this.docUrl(
                "introduction/core-concepts",
                this.props.language
              )}
            >
              Core Concepts
            </a>
            <a href={this.docUrl("api/intro", this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/* <a href={this.pageUrl("users.html", this.props.language)}>
              User Showcase
            </a> */}
            <a
              href="https://stackoverflow.com/questions/tagged/laconiajs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://gitter.im/laconiajs/laconia">Chat</a>
          </div>
          <div>
            <h5>More</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a
              href="https://twitter.com/laconiajs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/laconiajs/laconia/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
        <section className="copyright">
          Logo designed by&nbsp;
          <a href="https://www.linkedin.com/in/suzie-nam-471980b7/">
            Suzie Nam
          </a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
