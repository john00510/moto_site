import React from 'react';

const makes = [
  ["cars/acura", "Acura"],
  ["cars/audi", "Audi"],
  ["cars/bmw", "BMW"],
  ["cars/buick", "Buick"],
  ["cars/cadillac", "Cadillac"],
  ["cars/chevrolet", "Chevrolet"],
  ["cars/chrysler", "Chrysler"],
  ["cars/dodge", "Dodge"],
  ["cars/fiat", "Fiat"],
  ["cars/ford", "Ford"],
  ["cars/genesis", "Genesis"],
  ["cars/gmc", "GMC"],
  ["cars/honda", "Honda"],
  ["cars/hummer", "Hummer"],
  ["cars/hyundai", "Hyundai"],
  ["cars/infiniti", "Infiniti"],
  ["cars/jaguar", "Jaguar"],
  ["cars/jeep", "Jeep"],
  ["cars/kia", "Kia"],
  ["cars/land-rover", "Land Rover"],
  ["cars/lexus", "Lexus"],
  ["cars/lincoln", "Lincoln"],
  ["cars/mazda", "Mazda"],
  ["cars/mercedes-benz", "Mercedes-Benz"],
  ["cars/mercury", "Mercury"],
  ["cars/mini", "Mini"],
  ["cars/mitsubishi", "Mitsubishi"],
  ["cars/nissan", "Nissan"],
  ["cars/pontiac", "Pontiac"],
  ["cars/porsche", "Porsche"],
  ["cars/saturn", "Saturn"],
  ["cars/scion", "Scion"],
  ["cars/smart", "Smart"],
  ["cars/subaru", "Subaru"],
  ["cars/toyota", "Toyota"],
  ["cars/volkswagen", "Volkswagen"],
  ["cars/volvo", "Volvo"]
]

const makesList = makes.map(
  (make, i) => <li><a href={ make[0] } key={ 'make_' + i }>{ make[1] }</a></li>
);

class AllMakes extends React.Component {
  render() {
    return(
      <div className="link-section--makes">
        <h2>Shop by all Makes</h2>
        <ul>
          { makesList }
        </ul>
        <a href="cars" className="link-section-all--link">Shop For All Makes and Models</a>
      </div>
    );
  }
}

export default AllMakes;
