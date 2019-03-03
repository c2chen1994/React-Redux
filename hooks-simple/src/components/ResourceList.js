import React from "react"; // life cycles with use effect
import useResources from "./useResources";

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
