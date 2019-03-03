import React, { useState, useEffect } from "react"; // life cycles with use effect

import axios from "axios";

const useResources = resource => {
  const [resourceList, setResourceList] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResourceList(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]); // call function when different

  return resourceList;
};

const ResourceList = ({ resource }) => {
  const resourceList = useResources(resource);
  return (
    <ul>
      {resourceList.map(resource => {
        return <li key={resource.id}>{resource.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
