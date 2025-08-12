import { PropagateLoader } from 'react-spinners';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';


const config = resolveConfig(tailwindConfig);
const themeColor = config.theme.colors.theme.primary.DEFAULT;


// const themeColor = "#DBEAFE"

function Loading({ size=40 }) {
  return (
    <div className="flex justify-center items-center bg-transparent">
      <PropagateLoader color={themeColor} size={size} />
    </div>
  );
}



export {
    Loading,
}