export const isAuthenticated = ({ req }: { req?: any }) => {
    // const token = req?.cookies?.get('authToken')?.value; // Access the cookie directly
    // const token = req?.cookies?.get('Authorization')?.value; // Access the cookie directly
    const token = req?.cookies?.get('token')?.value; // Access the cookie directly
    // const token = req.headers.get('Authorization')?.split(' ')[1];
    console.log(`Checking authentication. Token found: ${!!token}`); // Log the token status
    return !!token;
  };








// // utils/auth.ts
// import { parseCookies } from 'nookies';

// export const isAuthenticated = (context?: any) => {
//   const cookies = parseCookies(context);
//   const token = cookies['authToken']; // Replace 'authToken' with your actual token key
//   return !!token; // Return true if token exists, false otherwise
// };