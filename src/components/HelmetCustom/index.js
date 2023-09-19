import { Helmet } from "react-helmet-async";
import logo from "../../assets/my-image.jpg";
import PropTypes from "prop-types";
function HelmetCustom({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/png" href={logo} />
    </Helmet>
  );
}

export default HelmetCustom;

HelmetCustom.propTypes = {
  title: PropTypes.string,
};
