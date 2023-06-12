import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const EvolveFunTitle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("We Are Evolve Global Solutions");
  const [index, setIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setText("W");
      setIndex(1);
      setIsHovered(false);
    }, 3000);
    
  };

  useEffect(() => {
    if (isHovered && index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index, isHovered]);

  return (
    <Container
      className="text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? (
        <h1 style={{ fontWeight: "bold", fontSize: "4rem" }}>
          We Are Evolve Global Solutions
        </h1>
      ) : (
        <h1 style={{ color: "#6B9ECA", fontWeight: "bold", fontSize: "4rem" }}>
          {text}
        </h1>
      )}
    </Container>
  );
};

export default EvolveFunTitle;
