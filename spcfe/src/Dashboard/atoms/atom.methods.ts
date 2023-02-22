import { GET_BIN_LOCATION } from "./atom.key";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { fetchResponseType } from '../dashboardTypes'

// export const taxCodeDataSelector = selector({
//     key: GET_BIN_LOCATION,
//     get: async () => {
//       try {
//         const response = await fetch('apiUrl()');
//         return response as fetchResponseType;
//       } catch (error) {
//         console.error(error);
//         return fetchResponse;
//       }
//     },
//   });
  
  

