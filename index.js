import Header from "./Header.js"

function Footer() {
  return (
    <footer>
      © 2023 Myxos development. All rights reserved.
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <h1>Welcome to React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Page />
);
