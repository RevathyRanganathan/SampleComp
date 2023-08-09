import ConceptItem from "./ConceptItem";
const Concept = (props) => {
  return (
    <div>
      <ul id="concepts">
        {props.concept.map((item) => (
          <ConceptItem concept={item} />
        ))}
        ;
      </ul>
    </div>
  );
};
export default Concept;
