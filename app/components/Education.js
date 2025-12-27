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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Education</h2>
          <div className="w-16 h-1 bg-blue-600"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-2"></div>

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
                <div className="absolute left-0 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>

                {/* Card */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                  
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 font-medium mb-1">
                      {edu.institution}
                    </p>
                    {edu.university && (
                      <p className="text-sm text-gray-600 mb-1">
                        {edu.university}
                      </p>
                    )}
                    {edu.board && (
                      <p className="text-sm text-gray-600">
                        {edu.board}
                      </p>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
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
                      <span className="font-medium text-gray-900">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {/* Entrance Exam Percentiles (Only for HSC) */}
                  {(edu.jeePercentile || edu.cetPercentile) && (
                    <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-700">
                      {edu.jeePercentile && (
                        <div>
                          <span className="font-medium">JEE:</span>{" "}
                          <span className="text-gray-900">
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
                    <div className="mb-4 text-sm text-gray-600">
                      Expected Graduation:{" "}
                      <span className="font-medium text-gray-900">
                        {edu.expectedGraduation}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-700 mb-4">
                    {edu.description}
                  </p>

                  {/* Courses */}
                  {edu.courses.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">
                        Key Subjects:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="text-sm px-3 py-1 bg-white border border-gray-200 rounded text-gray-700"
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
