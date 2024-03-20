import React from 'react';
import './formDetails.css';

const formDetails = () => {
  const titleAndDescription = [
    {
      title: 'SalePrice',
      description:
        'The price at which the property was sold',
    },
    {
      title: 'Building Type',
      description: 'The type of building',
    },
    {
      title: 'Zoning Classification',
      description: 'The type of zoning classification assigned to the property (e.g., residential, commercial, industrial, etc.)',
    },
    {
      title: 'Lot Size',
      description: 'The size of the lot on which the property is built, in square feet',
    },
    {
      title: 'LandSlope',
      description: 'The steepness of the land on which the property is built (e.g., flat, gentle slope, steep slope)',
    },
    {
      title: 'Dwelling Type',
      description: 'The type of dwelling (e.g., single-family house, townhouse, duplex, etc.)',
    },
    {
      title: 'Material and Finish Quality',
      description: 'An overall rating of the quality of the materials and finishes used in the construction of the property',
    },
    {
      title: 'Property Condition',
      description: 'An overall rating of the condition of the property',
    },
    {
      title: 'Roof Type',
      description: 'The style of the roof (e.g., gable, hip, flat)',
    },
    {
      title: 'Number of Bedrooms',
      description: 'The number of bedrooms located above the basement level',
    },
    {
      title: 'Kitchen Quality',
      description: 'An overall rating of the quality of the kitchen',
    },
    {
      title: 'Number of Rooms	',
      description: 'The total number of rooms located above ground level, not including bathrooms',
    },
    {
      title: 'Type of sale',
      description: 'The type of transaction or sale that was made for the property, such as a conventional sale, a foreclosure, a short sale, or a sale between family member',
    },
    {
      title: '1Fam',
      description: 'A house designed for and occupied by one family, typically consisting of one dwelling unit and a yard',
    },
    {
      title: '2FamCon',
      description: 'A building that was originally designed for a different use (e.g., a factory or warehouse) but has been converted into a two-family dwelling',
    },
    {
      title: 'Duplex',
      description: 'A row of identical or nearly identical houses that share walls, but with one of the units located at the end of the row and possibly having a larger yard',
    },
    {
      title: 'Twnhsl',
      description: 'A row of identical or nearly identical houses that share walls, with each unit located in the middle of the row',
    },
    {
      title: 'Gable',
      description: 'A roof with two sloping sides that form a triangle or "A" shape at the top. Gable roofs are very common and provide good ventilation and natural light. They are often seen on traditional or colonial-style houses.',
    },
    {
      title: 'Gambrel',
      description: 'A roof with two sides that each have two pitches, creating a distinctive curved shape. Gambrel roofs are often seen on barns, but they may also be used on houses, especially in Dutch colonial or Victorian styles.',
    },
    {
      title: 'Hip',
      description: 'A  roof with four sloping sides that meet at the top to form a ridge. Hip roofs are very stable and provide good protection against high winds, but they may be more expensive to build than gable roofs. They are often seen on bungalows or ranch-style houses.',
    },
    {
      title: 'Mansard',
      description: 'A roof with two slopes on all four sides, with the lower slope being steeper than the upper one. Mansard roofs are often used in French or Second Empire-style architecture, and they provide extra living space in the attic.',
    },
    {
      title: 'Shed',
      description: 'A roof with a single sloping side that is attached to a taller wall or building. Shed roofs are often used on modern or minimalist buildings, and they may provide a simple and cost-effective way to add an extension or covered outdoor space.',
    },
  ];

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-center">
        <div className="col-md-6 p_form">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {titleAndDescription.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default formDetails;
