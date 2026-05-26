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
const Artifact2 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact 2: Neural Network Architecture and Learning Components
      </div>

      <div className="font-bold">Introduction:</div>
      <div>
        This artifact presents a structured overview of neural network
        architecture and the major components involved in machine learning model
        training, including layers, neurons, weights, activation functions, loss
        functions, and optimization algorithms.
      </div>

      <div className="font-bold">Description:</div>
      <div>
        The artifact explains how neural networks process information and learn
        patterns from data through interconnected computational units. It
        combines conceptual explanations with visual architecture design to
        demonstrate how data flows through a neural network during training and
        prediction.
      </div>

      <div className="font-bold">Objective:</div>
      <div>
        To clearly explain the structure and functionality of neural network
        components while demonstrating how machine learning models improve
        performance through iterative learning and optimization.
      </div>

      <div className="font-bold">Process:</div>

      <div>
        Researched foundational neural network concepts including layers,
        neurons, weights, activation functions, loss functions, and optimization
        algorithms.
      </div>

      <div>
        Explored Neural Network Playground experiments to observe how hidden
        layers, feature selection, and noise levels affect model training and
        prediction accuracy.
      </div>

      <div>
        Created a structured neural network architecture diagram illustrating
        data flow from input layers through hidden layers to output predictions.
      </div>

      <div>
        Documented observations about how optimization algorithms minimize loss
        and improve model performance during training iterations.
      </div>

      <div className="font-bold">Tools and Technologies Used:</div>

      <div>TensorFlow Playground for neural network experimentation</div>
      <div>Machine Learning concepts from TensorFlow and AI coursework</div>
      <div>React for portfolio artifact presentation structure</div>

      <div className="font-bold">Key Neural Network Components:</div>

      <div>
        <span className="font-bold">Layers:</span> Groups of neurons that
        process information progressively through the network.
      </div>

      <div>
        <span className="font-bold">Neurons:</span> Computational units that
        receive inputs, perform calculations, and generate outputs.
      </div>

      <div>
        <span className="font-bold">Weights:</span> Parameters that determine
        the influence of inputs on neuron outputs.
      </div>

      <div>
        <span className="font-bold">Activation Functions:</span> Mathematical
        functions such as ReLU and Sigmoid that introduce non-linearity into the
        model.
      </div>

      <div>
        <span className="font-bold">Loss Functions:</span> Metrics used to
        evaluate prediction errors and guide learning improvements.
      </div>

      <div>
        <span className="font-bold">Optimization Algorithms:</span> Methods such
        as Gradient Descent and Adam Optimizer used to minimize errors and
        improve prediction accuracy.
      </div>

      <div className="font-bold">Value Proposition:</div>

      <div>
        This artifact demonstrates the ability to explain complex artificial
        intelligence concepts clearly while connecting theoretical neural
        network structures to practical machine learning behavior and training
        processes.
      </div>

      <div className="font-bold">Unique Value:</div>

      <div>
        Combines technical neural network theory with interactive
        experimentation insights, highlighting how architecture design choices
        directly impact machine learning model performance and prediction
        capability.
      </div>

      <div className="font-bold">Relevance:</div>

      <div>
        Relevant for understanding modern AI systems used in computer vision,
        natural language processing, recommendation systems, predictive
        analytics, and generative artificial intelligence applications.
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
      <Artifact2 />
    </section>
  );
};

export default Artifacts;
