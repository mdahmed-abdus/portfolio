import React from 'react';
import Icons from '../../../assets/svg/icons.svg';

function Icon(props) {
  let width = props.width;
  let height = props.height;
  let color = props.color;
  let name = props.name;
  let svgStyleClass = props.svgStyleClass;

  return (
    <svg className={svgStyleClass} width={width} height={height} fill={color}>
      <use href={Icons + `#${name}`} />
    </svg>
  );
}

export default Icon;

// export const Icon = ({ name, color, width, height }) => {
//   return (
//     <svg width={width} height={height} fill={color}>
//       <use href={Icons + `#${name}`} />
//     </svg>
//   );
// };
