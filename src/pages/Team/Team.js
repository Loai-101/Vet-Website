import React, { useState, useEffect } from 'react';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Veterinarian",
      experience: "12 years",
      description: "Dr. Sarah specializes in comprehensive veterinary care and preventive treatments. She is known for her gentle approach and pet owner education.",
      skills: ["Health Checkups", "Vaccinations", "Parasite Control", "Pet Exams", "Preventive Care", "Pet Owner Education"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Veterinary Surgeon",
      experience: "15 years",
      description: "Dr. Michael is a leading veterinary surgeon with expertise in complex surgical procedures and advanced medical treatments.",
      skills: ["Spay/Neuter", "Soft Tissue Surgery", "Orthopedic Surgery", "Emergency Surgery", "Tumor Removal", "Trauma Surgery"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pet Dermatologist",
      experience: "10 years",
      description: "Dr. Emily is passionate about pet skin health through modern dermatological techniques and personalized treatment plans.",
      skills: ["Skin Allergies", "Flea Treatment", "Skin Infections", "Ear Care", "Wound Healing", "Dermatological Surgery"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
    },
    {
      id: 4,
      name: "Dr. David Thompson",
      specialty: "Emergency Veterinarian",
      experience: "18 years",
      description: "Dr. David is a highly skilled emergency veterinarian specializing in critical care procedures and emergency pet care.",
      skills: ["Emergency Surgery", "Trauma Care", "Poisoning Treatment", "Critical Care", "Emergency Diagnostics", "Intensive Care"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      specialty: "Pet Behaviorist",
      experience: "8 years",
      description: "Dr. Lisa creates a fun and comfortable environment for pets while providing excellent behavioral care and training.",
      skills: ["Pet Training", "Behavior Modification", "Anxiety Treatment", "Socialization", "Aggression Management", "Pet Psychology"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
    },
    {
      id: 6,
      name: "Dr. Robert Wilson",
      specialty: "Pet Cardiologist",
      experience: "14 years",
      description: "Dr. Robert specializes in heart health and advanced cardiac treatments to maintain optimal pet cardiovascular health.",
      skills: ["Heart Disease Treatment", "Cardiac Surgery", "Echocardiography", "Heart Monitoring", "Cardiac Medications", "Preventive Cardiology"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216191/How-Often-Should-I-See-the-Dentist-scaled_etmpkb.jpg"
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      specialty: "Pet Oncologist",
      experience: "11 years",
      description: "Dr. Amanda is an expert in cancer treatment and oncology procedures, ensuring pets receive the best possible care.",
      skills: ["Cancer Diagnosis", "Chemotherapy", "Radiation Therapy", "Tumor Surgery", "Palliative Care", "Cancer Prevention"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
    },
    {
      id: 8,
      name: "Dr. James Martinez",
      specialty: "Pet Nutritionist",
      experience: "16 years",
      description: "Dr. James specializes in pet nutrition, dietary planning, and complex feeding programs to ensure optimal pet health.",
      skills: ["Diet Planning", "Weight Management", "Nutritional Counseling", "Special Diets", "Feeding Programs", "Health Monitoring"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
    }
  ];

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closePopup = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="team-page">
      <section id="team" className={`team ${isVisible ? 'team-visible' : ''}`}>
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">
              Experienced dental professionals dedicated to your oral health
            </p>
          </div>
          
          <div className="team-content">
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id}
                  className="doctor-card"
                  onClick={() => openPopup(doctor)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="doctor-image">
                    {doctor.image.startsWith('http') ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="doctor-avatar-image"
                      />
                    ) : (
                      <span className="doctor-avatar">{doctor.image}</span>
                    )}
                  </div>
                  
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Popup */}
      {selectedDoctor && (
        <div className="doctor-popup-overlay" onClick={closePopup}>
          <div className="doctor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>×</button>
            
            <div className="popup-content">
                             <div className="popup-header">
                 {selectedDoctor.image.startsWith('http') ? (
                   <img 
                     src={selectedDoctor.image} 
                     alt={selectedDoctor.name}
                     className="popup-avatar-image"
                   />
                 ) : (
                   <span className="popup-avatar">{selectedDoctor.image}</span>
                 )}
                 <h3 className="popup-name">{selectedDoctor.name}</h3>
                 <p className="popup-specialty">{selectedDoctor.specialty}</p>
               </div>
              
              <div className="popup-details">
                <div className="popup-experience">
                  <h4>Experience</h4>
                  <p>{selectedDoctor.experience}</p>
                </div>
                
                <div className="popup-description">
                  <h4>About</h4>
                  <p>{selectedDoctor.description}</p>
                </div>
                
                <div className="popup-skills">
                  <h4>Veterinary Specializations</h4>
                  <div className="skills-grid">
                    {selectedDoctor.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
