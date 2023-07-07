// import { Navigate, useLocation } from 'react-router-dom';

// import { useSelector } from 'react-redux';

// const PrivateRoute = ({children}) => {
//     const userinformation = useSelector((state) => state?.userData?.userinfo  );
//     //  console.log(userinformation)
//     const location = useLocation()

//     //   if(isLoading){
//     //       return <p>loading.........</p>
//     //   }

//       if(!userinformation){
//           return <Navigate to="/login" state={{from:location}} replace></Navigate>
//       }
//     return children
// };

// export default PrivateRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const userInformation = useSelector(state => state?.userData?.userinfo);
  const location = useLocation();

  if (!userInformation) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }} // Wrap the `from` property in an object
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;



