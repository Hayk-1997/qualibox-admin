import React from "react";

interface IAccordion {
  title: string;
  item: string;
  children: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({
  title,
  children,
  item,
}): React.JSX.Element => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${item}`}
            aria-expanded="false"
            aria-controls={item}
          >
            {title}
          </button>
        </h2>
        <div
          id={item}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
