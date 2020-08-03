import React from "react";
export const Footer = ({ children }) => (
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Search Movies</strong> by{" "}
        <a href="https://www.linkedin.com/in/didier-c-37a63a114/">{children}</a>
        . The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
      </p>
    </div>
  </footer>
);
