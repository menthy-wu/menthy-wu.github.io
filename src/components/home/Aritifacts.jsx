"use client";
import React from "react";
import Title from "../Title";

const Artifacts = () => {
  return (
    <section
      id="Artifacts"
      className="justify-center flex flex-col w-11/12 md:w-6/12 my-10 text-white gap-2"
    >
      <Title text="ARTIFACT">
        <div className="h-6 w-24 absolute bg-custom-theme -left-4 -bottom-1 z-10" />
      </Title>
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
          To understand and articulate my top leadership strengths in
          observable, practical terms.
        </div>
        <div className="font-bold">Process:</div>
        <div className="font-bold">
          Completed the Change Strategists assessment.
        </div>
        <div>
          Reviewed results and mapped each strength to real-world examples from
          my experience.
        </div>
        <div>
          Summarized findings and reflections on how these strengths influence
          my change leadership approach.
        </div>
        <div className="font-bold">Tools and Technologies Used:</div>
        <div>Change Strategists Assessment Tool (online)</div>
        <div className="font-bold">Personal reflection notes</div>
        <div>Value Proposition:</div>
        <div>
          Identifying strengths enables more strategic deployment of skills
          during change initiatives, ensuring greater team alignment and project
          success.
        </div>
        <div className="font-bold">Unique Value:</div>
        <div>
          Focuses on practical, observable skills that can be measured and
          applied immediately in a leadership context.
        </div>
        <div className="font-bold">Relevance:</div>
        <div>
          Relevant for understanding foundational leadership behaviors in both
          academic and professional settings.
        </div>
      </div>
    </section>
  );
};

export default Artifacts;
