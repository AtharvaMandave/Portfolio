'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiJavascript, SiPython, SiReact, SiNextdotjs,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
    SiGithub, SiPostman, SiHtml5, SiCss3, SiTensorflow, SiPytorch
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
                { name: "Python", icon: <SiPython />, color: "text-blue-500" },
                { name: "Java", icon: <FaJava />, color: "text-red-500" },
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
                { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
                { name: "React.js", icon: <SiReact />, color: "text-cyan-500" },
                { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-900" },
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
                { name: "Express.js", icon: <SiExpress />, color: "text-gray-700" },
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
                { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
            ]
        },
        {
            title: "Core CS Concepts",
            skills: [
                { name: "DSA", icon: null, color: "text-purple-600" },
                { name: "OOPS", icon: null, color: "text-indigo-600" },
                { name: "DBMS", icon: null, color: "text-pink-600" },
                { name: "OS", icon: null, color: "text-teal-600" },
                { name: "CN", icon: null, color: "text-orange-600" },
            ]
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "Git", icon: <SiGit />, color: "text-orange-600" },
                { name: "GitHub", icon: <SiGithub />, color: "text-gray-900" },
                { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
                { name: "VS Code", icon: <VscVscode />, color: "text-blue-600" },
            ]
        },
        {
            title: "Machine Learning",
            skills: [
                { name: "Machine Learning", icon: null, color: "text-purple-600" },
                { name: "Supervised Learning", icon: null, color: "text-purple-500" },
                { name: "Unsupervised Learning", icon: null, color: "text-purple-500" },
                { name: "Model Evaluation", icon: null, color: "text-indigo-600" },
                { name: "Feature Engineering", icon: null, color: "text-indigo-500" },
                { name: "Hyperparameter Tuning", icon: null, color: "text-violet-600" },
            ]
        },
        {
            title: "Data Science",
            skills: [
                { name: "Data Analysis", icon: null, color: "text-blue-600" },
                { name: "Data Cleaning", icon: null, color: "text-blue-500" },
                { name: "EDA", icon: null, color: "text-cyan-600" },
                { name: "Statistics & Probability", icon: null, color: "text-teal-600" },
                { name: "Data Visualization", icon: null, color: "text-emerald-600" },
            ]
        },
        {
            title: "Deep Learning",
            skills: [
                { name: "Neural Networks (ANN)", icon: null, color: "text-pink-600" },
                { name: "CNN", icon: null, color: "text-rose-600" },
                { name: "RNN (Basics)", icon: null, color: "text-red-500" },
                { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
                { name: "PyTorch", icon: <SiPytorch />, color: "text-red-600" },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit for building modern applications
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                className="card hover:border-green-500"
                            >
                                <h3 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-green-500 pb-2">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:border-green-500 transition-all"
                                        >
                                            {skill.icon && (
                                                <span className={`text-2xl ${skill.color}`}>
                                                    {skill.icon}
                                                </span>
                                            )}
                                            <span className="font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
