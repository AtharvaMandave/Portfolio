'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering - Computer Engineering",
      institution: "Vishwakarma Institute Of Information Technology",
      university: "Savitribai Phule Pune University",
      location: "Pune, Maharashtra, India",
      score: "8.77 CGPA",
      duration: "2023 - 2027",
      expectedGraduation: "May 2027",
      description:
        "Pursuing comprehensive computer engineering education with strong focus on software development, data structures, and algorithms.",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Machine Learning",
        "Web Technologies"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Pd Shree VasantDada Patil Jr College",
      board: "Maharashtra State Board",
      location: "Pune, Maharashtra, India",
      score: "72.5%",
      duration: "2021 - 2023",
      jeePercentile: "96 Percentile",
      cetPercentile: "98.52 Percentile",
      description:
        "Completed with specialization in Physics, Chemistry, Mathematics & Computer Science.",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Lawrence High School",
      board: "Maharashtra State Board",
      location: "Pune, Maharashtra, India",
      score: "92.4%",
      duration: "2020 - 2021",
      description:
        "Completed secondary education with excellent academic performance.",
      courses: []
    }
  ];

  return (
    <section
      ref={ref}
      id="education"
      className="section-padding relative"
    >
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="accent-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-indigo-500/30 ml-2"></div>

          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-10"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-5 h-5 bg-indigo-500 rounded-full border-4 border-[#0A0B14] shadow-sm"></div>

                {/* Card */}
                <div className="card-pro">

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 font-['Space_Grotesk']">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    {edu.university && (
                      <p className="text-sm text-gray-400 mb-1">
                        {edu.university}
                      </p>
                    )}
                    {edu.board && (
                      <p className="text-sm text-gray-400">
                        {edu.board}
                      </p>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <HiCalendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HiLocationMarker className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HiAcademicCap className="w-4 h-4" />
                      <span className="font-medium text-white">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {/* Entrance Exam Percentiles (Only for HSC) */}
                  {(edu.jeePercentile || edu.cetPercentile) && (
                    <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-300">
                      {edu.jeePercentile && (
                        <div>
                          <span className="font-medium">JEE:</span>{" "}
                          <span className="text-white">
                            {edu.jeePercentile}
                          </span>
                        </div>
                      )}
                      {edu.cetPercentile && (
                        <div>
                          <span className="font-medium">MHT-CET:</span>{" "}
                          <span className="text-gray-900">
                            {edu.cetPercentile}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Expected Graduation */}
                  {edu.expectedGraduation && (
                    <div className="mb-4 text-sm text-gray-400">
                      Expected Graduation:{" "}
                      <span className="font-medium text-gray-900">
                        {edu.expectedGraduation}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-300 mb-4">
                    {edu.description}
                  </p>

                  {/* Courses */}
                  {edu.courses.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-white mb-2">
                        Key Subjects:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="tag text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
