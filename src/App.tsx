import React from "react";
import { ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import apolloClient from "./lib/apollo";
class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <main className="">
          <div className="w-[700px] m-[130px_auto] relative shadow-[0_25px_50px_0_rgba(0, 0, 0, 0.1)]">
            <Header />
          </div>
        </main>
      </ApolloProvider>
    );
  }
}

export default App;
