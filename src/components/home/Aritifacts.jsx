"use client";
import React from "react";
import Title from "../Title";
const Artifact2 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact: Machine Learning and Deep Learning Applications
      </div>

      <div className="font-bold mt-2">Introduction:</div>
      <div>
        This artifact highlights two practical applications of machine learning
        (ML) and deep learning (DL), illustrating how each approach is suited to
        specific problem types and datasets.
      </div>

      <div className="font-bold mt-2">
        Machine Learning Example: Email Spam Detection
      </div>
      <div className="font-bold">Algorithm:</div>
      <div>Logistic Regression (Simple ML)</div>
      <div className="font-bold">Real-World Application:</div>
      <div>
        Email providers like Gmail or Outlook use ML models to automatically
        classify incoming emails as spam or not spam.
      </div>
      <div className="font-bold">Why This Approach is Suitable:</div>
      <div>
        The data is labeled (emails tagged as spam or not), making it ideal for
        supervised learning. Features such as word frequency, sender address,
        and presence of links can be manually defined and fed into the logistic
        regression model. The dataset size is manageable, making this approach
        efficient and effective.
      </div>
      <div className="font-bold">Why Deep Learning is Not Suitable:</div>
      <div>
        Deep learning would be overkill because the features are
        straightforward, the dataset is moderate, and the computational cost
        would be higher without significant benefit.
      </div>

      <div className="font-bold mt-2">
        Deep Learning Example: Image Recognition
      </div>
      <div className="font-bold">Algorithm:</div>
      <div>Convolutional Neural Network (CNN)</div>
      <div className="font-bold">Real-World Application:</div>
      <div>
        Facial recognition systems in smartphones, airports, or social media
        platforms automatically identify faces from raw images.
      </div>
      <div className="font-bold">Why This Approach is Suitable:</div>
      <div>
        Input data is high-dimensional (raw pixels) and complex; manual feature
        engineering is impractical. CNNs automatically extract hierarchical
        features such as edges, textures, and facial structures through multiple
        layers. This approach is effective with large datasets typical in image
        recognition tasks.
      </div>
      <div className="font-bold">
        Why Simple Machine Learning is Not Suitable:
      </div>
      <div>
        Traditional ML methods like logistic regression or decision trees cannot
        efficiently handle raw pixel data or learn hierarchical features, making
        them ineffective for image recognition.
      </div>

      <div className="font-bold mt-2">Tools and Technologies Used:</div>
      <div>
        Logistic Regression (ML), Convolutional Neural Networks (DL), labeled
        datasets, raw image datasets
      </div>

      <div className="font-bold mt-2">Personal Reflection Notes</div>
      <div className="font-bold">Value Proposition:</div>
      <div>
        Demonstrates how choosing the right machine learning approach based on
        data type and complexity ensures effective and efficient problem-solving
        in real-world applications.
      </div>
      <div className="font-bold">Unique Value:</div>
      <div>
        Illustrates practical distinctions between ML and DL, emphasizing the
        importance of algorithm selection in problem-solving contexts.
      </div>
      <div className="font-bold">Relevance:</div>
      <div>
        Relevant for understanding how ML and DL are applied across industries,
        informing decisions for AI integration in academic, professional, and
        technological settings.
      </div>
    </div>
  );
};

const Artifact1 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact 1: Change Strategists Assessment – Strengths Analysis
      </div>
      <div className="font-bold">Introduction:</div>
      <div>
        This artifact showcases my evaluation of personal strengths using the
        Change Strategists framework, emphasizing communication, planning and
        organization, and resilience.
      </div>
      <div className="font-bold">Description:</div>
      <div>
        The assessment helped identify traits that enable effective leadership
        during organizational change. I analyzed my natural capabilities in
        conveying information clearly, structuring Artifacts efficiently, and
        maintaining focus under pressure.
      </div>
      <div className="font-bold">Objective:</div>
      <div>
        To understand and articulate my top leadership strengths in observable,
        practical terms.
      </div>
      <div className="font-bold">Process:</div>
      <div className="font-bold">
        Completed the Change Strategists assessment.
      </div>
      <div>
        Reviewed results and mapped each strength to real-world examples from my
        experience.
      </div>
      <div>
        Summarized findings and reflections on how these strengths influence my
        change leadership approach.
      </div>
      <div className="font-bold">Tools and Technologies Used:</div>
      <div>Change Strategists Assessment Tool (online)</div>
      <div className="font-bold">Personal reflection notes</div>
      <div>Value Proposition:</div>
      <div>
        Identifying strengths enables more strategic deployment of skills during
        change initiatives, ensuring greater team alignment and project success.
      </div>
      <div className="font-bold">Unique Value:</div>
      <div>
        Focuses on practical, observable skills that can be measured and applied
        immediately in a leadership context.
      </div>
      <div className="font-bold">Relevance:</div>
      <div>
        Relevant for understanding foundational leadership behaviors in both
        academic and professional settings.
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
