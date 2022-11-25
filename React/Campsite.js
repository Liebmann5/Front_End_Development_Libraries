//Review Using Props with Stateless Functional Components
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => (
      <div>
        <h3>We campin</h3>
        <p>{props.name}</p>
      </div>
    )

Camper.defaultProps = { name: 'CamperBot' };

Camper.propTypes = { name: PropTypes.string.isRequired };
