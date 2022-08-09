import { useState, createContext, useMemo } from "react";
import * as firestore from "firebase/firestore";

import { database } from "../config/firebase";

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [featureSkills, setFeatureSkills] = useState([]);
  const [skills, setSkills] = useState([]);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [studiesDetails, setStudiesDetails] = useState([]);
  const [projects, setProjects] = useState([]);

  const getFeaturedSkills = async () => {
    const skillCollectionRef = firestore.collection(database, "skills");
    const query = firestore.query(
      skillCollectionRef,
      firestore.where("isFeatured", "==", true)
    );

    try {
      const querySnapshot = await firestore.getDocs(query);
      let featureSkillList = [];
      querySnapshot.docs.forEach((doc) => {
        featureSkillList.push(doc.data());
      });
      setFeatureSkills(featureSkillList);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecentProjects = async () => {
    const projectCollectionRef = firestore.collection(database, "projects");
    const query = firestore.query(
      projectCollectionRef,
      firestore.where("isRecent", "==", true),
      firestore.limit(2)
    );

    try {
      const querySnapshot = await firestore.getDocs(query);
      let projectList = [];
      querySnapshot.docs.forEach((doc) => {
        projectList.push(doc.data());
      });
      setCurrentProjects(projectList);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSkills = async () => {
    const skillCollectionRef = firestore.collection(database, "skills");
    const query = firestore.query(skillCollectionRef);

    try {
      const querySnapshot = await firestore.getDocs(query);
      let skillList = [];
      querySnapshot.docs.forEach((doc) => {
        skillList.push(doc.data());
      });
      setSkills(skillList);
    } catch (error) {
      console.log(error);
    }
  };

  const insertProjectsData = (projects) => {
    try {
      projects.forEach((project) => {
        firestore.setDoc(
          firestore.doc(database, "projects", project.id),
          project,
          { merge: true }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getStudiesPerCategory = async (category) => {
    const studiesCollectionRef = firestore.collection(database, "studies");
    const query = firestore.query(
      studiesCollectionRef,
      firestore.where("category", "==", category)
    );

    try {
      const querySnapshot = await firestore.getDocs(query);
      let studyDetailsList = [];
      querySnapshot.docs.forEach((doc) => {
        studyDetailsList.push(doc.data());
      });
      setStudiesDetails(studyDetailsList);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProjects = async () => {
    const projectCollectionRef = firestore.collection(database, "projects");
    const query = firestore.query(projectCollectionRef);

    try {
      const querySnapshot = await firestore.getDocs(query);
      let projectList = [];
      querySnapshot.docs.forEach((doc) => {
        projectList.push(doc.data());
      });
      setProjects(projectList);
    } catch (error) {
      console.log(error);
    }
  };

  const value = useMemo(
    () => ({
      featureSkills,
      currentProjects,
      skills,
      studiesDetails,
      projects,
      getFeaturedSkills,
      getRecentProjects,
      getAllSkills,
      insertProjectsData,
      getStudiesPerCategory,
      getAllProjects,
    }),
    [
      featureSkills,
      currentProjects,
      skills,
      studiesDetails,
      projects,
      getFeaturedSkills,
      getRecentProjects,
      getAllSkills,
      insertProjectsData,
      getStudiesPerCategory,
      getAllProjects,
    ]
  );

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
export { FirebaseProvider };
export default FirebaseContext;
