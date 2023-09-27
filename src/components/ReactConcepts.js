import ConceptItem from "./ConceptItem";

const ReactConcepts = (props) => {
  return (
    <ul id="concepts">
      <ConceptItem
        image={props.item[0].image}
        title={props.item[0].title}
        description={props.item[0].description} 
        />
        <ConceptItem
        image={props.item[1].image}
        title={props.item[1].title}
        description={props.item[1].description} 
        />
        <ConceptItem
        image={props.item[2].image}
        title={props.item[2].title}
        description={props.item[2].description} 
        />
    </ul> 
  );
}

export default ReactConcepts;