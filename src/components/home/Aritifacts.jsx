"use client";
import React from "react";
import Title from "../Title";
const Artifact3 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact 3: Adapting to Challenges — Learning from Biblical Leaders
      </div>

      <div className="font-bold mt-2">Introduction:</div>
      <div>
        This artifact explores the theme of adaptive leadership through the lens
        of biblical figures who faced immense challenges. Their stories reveal
        how faith, courage, and wisdom enable leaders to navigate uncertainty
        and remain steadfast in their mission. Leadership is rarely predictable,
        and these examples show that adaptability is a vital skill rooted in
        both humility and trust in divine guidance.
      </div>

      <div className="font-bold mt-2">
        Biblical Example 1: Moses — Leading Through Uncertainty
      </div>
      <div className="font-bold">Context:</div>
      <div>
        Moses was called to lead the Israelites out of Egypt, facing resistance
        from Pharaoh, fear among his people, and the challenges of the
        wilderness.
      </div>
      <div className="font-bold">Adaptive Leadership in Action:</div>
      <div>
        Moses adapted by continuously seeking God’s direction through prayer and
        obedience. He learned to rely on divine wisdom instead of his own
        strength, showing that true leadership is not about control but about
        responsiveness to God’s guidance.
      </div>
      <div className="font-bold">Lesson:</div>
      <div>
        Adaptability often requires surrender—recognizing that flexibility and
        faith go hand in hand when leading through uncertainty.
      </div>

      <div className="font-bold mt-2">
        Biblical Example 2: Esther — Courage and Strategic Thinking
      </div>
      <div className="font-bold">Context:</div>
      <div>
        As queen, Esther faced a life-threatening decision: remain silent or
        risk her life to save her people from destruction.
      </div>
      <div className="font-bold">Adaptive Leadership in Action:</div>
      <div>
        Esther sought God’s guidance through fasting and prayer, then approached
        the king with both courage and strategy. She demonstrated that faith
        does not mean passivity—it empowers leaders to act boldly and wisely.
      </div>
      <div className="font-bold">Lesson:</div>
      <div>
        Adaptability is not only about reacting to change but also discerning
        the right time and method to act with faith-driven purpose.
      </div>

      <div className="font-bold mt-2">
        Biblical Example 3: Nehemiah — Vision in the Face of Opposition
      </div>
      <div className="font-bold">Context:</div>
      <div>
        Nehemiah was tasked with rebuilding the walls of Jerusalem, encountering
        opposition and discouragement from every side.
      </div>
      <div className="font-bold">Adaptive Leadership in Action:</div>
      <div>
        He reorganized his people, prayed for strength, and adjusted his methods
        while staying committed to the mission. Nehemiah’s resilience and
        flexibility allowed him to lead effectively despite external pressure.
      </div>
      <div className="font-bold">Lesson:</div>
      <div>
        Visionary leaders adapt their strategies without compromising their
        mission. Perseverance and faith enable them to sustain progress amid
        adversity.
      </div>

      <div className="font-bold mt-2">Key Takeaways:</div>
      <div>
        <ul className="list-disc list-inside">
          <li>Adaptive leadership blends faith with practical wisdom.</li>
          <li>
            Flexibility allows leaders to adjust without losing direction.
          </li>
          <li>
            Prayer, reflection, and community support are vital to navigating
            challenges.
          </li>
          <li>
            True adaptability honors both the mission and the process of
            transformation.
          </li>
        </ul>
      </div>

      <div className="font-bold mt-2">Personal Reflection Notes:</div>
      <div className="font-bold">Value Proposition:</div>
      <div>
        This artifact highlights how adaptive leadership grounded in faith helps
        modern leaders face uncertainty with confidence, resilience, and moral
        clarity.
      </div>
      <div className="font-bold">Unique Value:</div>
      <div>
        By drawing parallels between ancient biblical leaders and contemporary
        leadership challenges, it emphasizes timeless principles of adaptability
        that remain relevant today.
      </div>
      <div className="font-bold">Relevance:</div>
      <div>
        These examples inspire leaders to cultivate trust, courage, and
        flexibility in their personal and professional lives—qualities essential
        to guiding teams and communities through change.
      </div>
    </div>
  );
};

const Artifact2 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact 2: Machine Learning and Deep Learning Applications
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
const Artifact4 = () => {
  return (
    <div className="border-white border-2 rounded-xl p-3 mt-4">
      <div className="font-bold text-2xl">
        Artifact 4: Navigating Human Bias in AI/ML – Personal Value & Strategy
        Framework
      </div>

      <div className="font-bold mt-2">Introduction:</div>
      <div>
        This artifact presents my personal value statement and field-specific
        strategies for navigating human bias as an AI/ML-focused leader. It
        highlights how ethical awareness, transparency, and intentional design
        practices shape my approach to responsible innovation.
      </div>

      <div className="font-bold mt-2">Description:</div>
      <div>
        The discussion explores how bias enters data systems and how leadership
        choices influence fairness, transparency, and accountability in
        analytics and machine learning workflows. I articulated my leadership
        values around humility, intentional transparency, and ethical
        responsibility, then developed strategies tailored to data and AI
        environments.
      </div>

      <div className="font-bold mt-2">Objective:</div>
      <div>
        To clarify my ethical leadership stance on human bias in AI/ML systems
        and outline practical, field-specific methods for reducing bias across
        datasets, modeling decisions, and organizational processes.
      </div>

      <div className="font-bold mt-2">Process:</div>
      <div>
        Reflected on personal leadership principles related to fairness and
        bias.
      </div>
      <div>
        Identified how human decisions shape datasets, features, and model
        outcomes.
      </div>
      <div>
        Developed concrete strategies for auditing, documenting, and mitigating
        bias in analytical workflows.
      </div>
      <div>
        Considered organizational culture components such as empathy,
        psychological safety, and reflective practice.
      </div>

      <div className="font-bold mt-2">Tools and Technologies Used:</div>
      <div>Analytics and ML modeling workflows</div>
      <div>Bias audit methods and fairness evaluation techniques</div>
      <div>Team collaboration and documentation practices</div>

      <div className="font-bold mt-2">Value Proposition:</div>
      <div>
        Establishing clear values and structured strategies for navigating bias
        strengthens the integrity of AI/ML systems and fosters trust among
        users, stakeholders, and team members.
      </div>

      <div className="font-bold mt-2">Unique Value:</div>
      <div>
        Emphasizes ethical maturity and intentional transparency rather than
        purely technical fixes, acknowledging that leadership mindset is central
        to mitigating bias.
      </div>

      <div className="font-bold mt-2">Relevance:</div>
      <div>
        Highly relevant to modern data-driven organizations where AI
        increasingly influences decisions impacting individuals, communities,
        and operational outcomes. This artifact demonstrates readiness to lead
        responsibly in complex analytical environments.
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
      <Artifact4 />
      <Artifact3 />
      <Artifact2 />
      <Artifact1 />
    </section>
  );
};

export default Artifacts;
