import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Products = () => {
  // in v6, use in useEffect, or after finish http request
  // const navigate = useNavigate();
  // navigate("/welcome"); // push
  // navigate("/welcome", { replace: true }); // replace
  // navigate(-1); // go to previous page
  // navigate(-2); // go to the page before previous page

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
