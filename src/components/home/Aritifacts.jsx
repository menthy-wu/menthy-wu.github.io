"use client";
import React from "react";
import Title from "../Title";
const Artifact1 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact 1: Machine Learning Algorithm Portfolio – Classification
        Framework
      </div>

      <div className="font-bold">Introduction:</div>
      <div>
        This artifact presents a structured overview of key machine learning
        algorithms and their application domains, including supervised learning,
        unsupervised learning, computer vision, natural language processing, and
        generative AI.
      </div>

      <div className="font-bold">Description:</div>
      <div>
        The framework organizes common machine learning algorithms and explains
        how they are used in real-world applications. It connects theoretical
        models such as decision trees, clustering methods, neural networks, and
        transformer-based models to practical use cases across multiple domains.
      </div>

      <div className="font-bold">Objective:</div>
      <div>
        To clearly categorize machine learning algorithms and demonstrate their
        relationship to different application areas such as tabular data
        analysis, image recognition, language processing, and generative
        systems.
      </div>

      <div className="font-bold">Process:</div>
      <div className="font-bold">
        Identified major machine learning categories including supervised and
        unsupervised learning.
      </div>
      <div>
        Selected representative algorithms such as linear regression, decision
        trees, K-means clustering, CNNs, transformers, GPT models, and diffusion
        models.
      </div>
      <div>
        Mapped each algorithm to its primary domain and documented real-world
        use cases and functional explanations.
      </div>
      <div>
        Organized the information into a structured visual framework suitable
        for a portfolio artifact.
      </div>

      <div className="font-bold">Tools and Technologies Used:</div>
      <div>Python (conceptual understanding and implementation reference)</div>
      <div>Machine Learning libraries (scikit-learn, TensorFlow concepts)</div>
      <div>React for portfolio artifact structure</div>

      <div className="font-bold">Value Proposition:</div>
      <div>
        This artifact demonstrates the ability to interpret, categorize, and
        communicate machine learning concepts in a structured and
        application-focused way, which is essential for real-world AI system
        design and evaluation.
      </div>

      <div className="font-bold">Unique Value:</div>
      <div>
        Bridges theoretical machine learning knowledge with practical
        applications across multiple AI domains, highlighting both classical and
        modern AI approaches including generative AI systems.
      </div>

      <div className="font-bold">Relevance:</div>
      <div>
        Relevant for understanding foundational and advanced machine learning
        systems used in industry applications such as healthcare, finance,
        computer vision, and natural language processing.
      </div>
    </div>
  );
};
const Artifacts = () => {
  return (
    <section
      id="Artifacts"
      className="justify-center flex flex-col w-11/12 md:w-6/12 my-10 text-white gap-2"
    >
      <Title text="ARTIFACT">
        <div className="h-6 w-24 absolute bg-custom-theme -left-4 -bottom-1 z-10" />
      </Title>
      <Artifact1 />
    </section>
  );
};

export default Artifacts;
