import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./layout/Main";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Recipes = lazy(() => import("./pages/Recipes"));
const RecipeDetailsPage = lazy(() => import("./pages/RecipeDetailsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Suspense fallback={<p>Chargement...</p>}><Home /></Suspense> },
      { path: "/about", element: <Suspense fallback={<p>Chargement...</p>}><About /></Suspense> },
      { path: "/recipes", element: <Suspense fallback={<p>Chargement...</p>}><Recipes /></Suspense> },
      { path: "/recipes/:id", element: <Suspense fallback={<p>Chargement...</p>}><RecipeDetailsPage /></Suspense> }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
