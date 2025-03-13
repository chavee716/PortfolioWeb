// about.js
import Head from 'next/head';

export default function About({ isDarkMode }) {
  const skills = {
    programming: ["Python", "Java", "C++", "JavaScript", "TypeScript", "C#"],
    webDevelopment: ["HTML", "CSS", "React", "NextJs", "NodeJs", "ExpressJs", "Tailwind CSS", "React Native"],
    devOps: ["Docker", "AWS", "Linux", "CI/CD"],
    versionControl: ["Git", "GitHub"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Figma", "Visual Studio", "IntelliJ IDEA", "Postman", "Jupyter", "Jira"],
    soft: ["Project Management", "Problem Solving", "Teamwork", "Time Management", "Leadership", "Presentation Skills", "Critical Thinking", "Public Relations"]
  };

  const education = [
    {
      degree: "BSc Hons. Computer Engineering (UG)",
      institution: "Faculty of Engineering, University of Ruhuna",
      period: "2022 - present",
      details: "Current GPA: 3.49 / 4.0"
    },
    {
      degree: "G.C.E. Advanced Level in Physical Science",
      institution: "Richmond College, Galle",
      period: "2007-2020",
      details: "AAA"
    }
  ];

  const certifications = [
    "Docker For Beginners - KodeKloud",
    "Supervised Machine Learning - Stanford University - Coursera",
    "Unsupervised Machine Learning - Stanford University - Coursera",
    "Advanced Learning Algorithms - Stanford University – Coursera",
    "Data Science Tools - IBM",
    "Python Intermediate - University of Moratuwa",
    "Data Science 101 - IBM",
    "Object-Oriented Programming - Udemy",
    "SQL Intermediate - SoloLearn"
  ];

  const volunteering = [
    "Volunteered at Eminence 4.0 as a Logistics Team member in the organizing committee.",
    "Volunteered at Mehewara, conducting Mathematics seminars for rural O/L students."
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>About | Chaveen Dias</title>
        <meta name="description" content="About Chaveen Dias, Computer Engineering Undergraduate" />
      </Head>

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-semibold mb-10 text-center">About Me</h2>

        {/* Profile and Education Section (Wider) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Profile</h3>
              <p>
                An enthusiastic Computer Engineering undergraduate passionate about DevOps, Machine Learning, 
                and Software Engineering. Aims to apply technical skills and innovative thinking to cutting-edge projects 
                while eagerly learning new technologies in a collaborative and forward-thinking team.
              </p>
            </div>

            <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{edu.institution}</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>{edu.period}</p>
                  <p>{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering Section (Remains Narrow) */}
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Volunteering</h3>
              <ul className="list-disc pl-5 space-y-2">
                {volunteering.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Soft Skills Below Profile & Education */}
        <div className="mt-8">
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <span key={index} className="bg-blue-600 px-3 py-1 rounded text-white">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills and Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Technical Skills</h3>
            {Object.entries(skills).slice(0, 6).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-lg font-semibold mb-2">{category.replace(/([A-Z])/g, ' $1')}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className={`px-3 py-1 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Certifications</h3>
            <ul className="list-disc pl-5 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
