import './Services.css';

function Services(props) {
  return (
    <div className="Services">
      <h2>Here we have listed services we offer</h2>
      <table>
        <thead>
        <tr>
        <th>Interior painting {props.service1}</th>
        <th>Exterior painting {props.service2}</th>
        <th>Deck painting {props.service3}</th>
        <th>Cabinet painting {props.service1}</th>
        <th>Pressure washing {props.service2}</th>
        <th>Mold removal {props.service3}</th>
        <th>Garage floor painting {props.service3}</th>
        <th>Wood staining {props.service1}</th>
        <th>Caulking {props.service2}</th>
        <th>Bathtub painting {props.service3}</th>
        </tr>
        </thead>
        <tr>
          <td>Transform your walls and ceilings with a flawless, professional finish.</td>
          <td>Protect your home and boost curb appeal with durable exterior coatings.</td>
          <td>Refresh and protect your deck with long-lasting, weather-resistant paint.</td>
          <td>Give cabinets a sleek, modern look without the cost of replacement.</td>
          <td>Clean and restore surfaces by removing dirt, mold, and grime.</td>
          <td>Safely eliminate mold to keep your home healthy and safe.</td>
          <td>Strengthen and beautify your garage floor with epoxy coatings.</td>
          <td>Highlight and protect the natural beauty of wood surfaces.</td>
          <td>Seal gaps and cracks to prevent water damage and improve energy efficiency.</td>
          <td>Refinish your bathtub for a fresh, like-new appearance without remodeling.</td>
        </tr>
        <tr>
          <td><img src="src/photos/painting1.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting2.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting3.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting4.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting5.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting6.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting7.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting8.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting9.jpg" className="table-image"></img></td>
          <td><img src="src/photos/painting10.jpg" className="table-image"></img></td>
          
        </tr>
      </table>
    </div>
  );
}

export default Services;