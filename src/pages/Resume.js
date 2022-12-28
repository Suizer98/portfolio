import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Universiti Teknologi Malaysia</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor Degree in Geomatics Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2018 - July 2022
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">National University of Singapore (NUS)</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Kent Ridge, Singapore
            </code>
            <br />
            <code>Software Engineer</code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2022 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Full Stack GIS Web Development
              <br />• QGIS Plugin 
              <br />• Assist in NUS research projects by providing geomatics knowledges
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            {/* <code className="text-yellow_vs">Work</code> */}
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">JK Land Consultant Sdn. Bhd.</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Johor Bahru, Malaysia
            </code>
            <br />
            <code>Geomatics Engineer</code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2021 - Mar 2022</code>
            <br />
            <code className="text-sm">
              <br />• Involved in settlement monitoring for luxury coastal bungalows located in reclamation area, Forest City.
              <br />• As a data entry clerk, compiled elevation of buildings, computed velocities of subsidence for analysis. 
              <br />• Carried out digitizing, analysis of UAV. Post-processed UAV, hydro, stockpiles, 3D TLS point cloud data.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            {/* <code className="text-yellow_vs">Work</code> */}
          </div>
          <div className="w-3/4">
            <code>Geomatics Trainee</code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2021 - Mar 2022</code>
            <br />
            <code className="text-sm">
              <br />• Carried out various demarcation and land titles, engineering survey jobs, ensure good quality of data.
              <br />• Involved in underground utility engineering survey using PCL and GPR.
              <br />• Out stationed for hydrographic survey. (magnetometer and NORBIT multibeam)
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Software development
              <br />• AutoDesk products
              <br />• ArcGIS products
              <br />• Geospatial data
              <br />• Geographic Information System (GIS)
              <br />• Geomatics Enginnering
              <br />• LiDAR
              <br />• Land surveying
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
