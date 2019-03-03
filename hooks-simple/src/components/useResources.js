import React, { useState, useEffect } from "react"; // life cycles with use effect
import axios from "axios";

const useResources = resource => {
  const [resourceList, setResourceList] = useState([]);

  // seperate:
  //   const fetchResource = async resource => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${resource}`
  //     );
  //     setResourceList(response.data);
  //   };

  //   useEffect(() => {
  //     fetchResource(resource);
  //   }, [resource]); // call function when different

  // join together:
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResourceList(response.data);
    })(resource);
  }, [resource]);

  return resourceList;
};

export default useResources;
