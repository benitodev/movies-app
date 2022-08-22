// import { Video } from "../types";

// function objectsContainingKey(object: Video[], key: string) {
//     let results: Video[] = [];
//     Object.keys(object).forEach(k => {
//       if (k === key) results.push(object);
//       if (object[k] && typeof object[k] === 'object')
//         results = results.concat(objectsContainingKey(object[k], key));
//     });
//     return results;

// export const parseNewVideoEntry =  