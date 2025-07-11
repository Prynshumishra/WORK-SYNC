import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import RepositorySync from "./pages/RepositorySync";

// Apollo Client Setup
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'https://work-sync-1.onrender.com/graphql', // ✅ Set GraphQL endpoint
  cache,
});

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/sync-repos" element={<RepositorySync />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
