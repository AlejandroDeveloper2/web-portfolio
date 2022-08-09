import { FormattedMessage } from "react-intl";

import { Visibility } from "@mui/icons-material";
import useFirebase from "../../../hooks/useFirebase";

import Button from "../../shared/button/Button";

import { DetailsContainer, Table, Title } from "./StudyDetails.styles.js";

const StudyDetails = () => {
  const { studiesDetails } = useFirebase();

  const getButtonPropierties = (certificateUrl) => {
    return {
      styles: {
        width: "3em",
        height: "3em",
        backgroundColor: "transparent",
        color: "var(--white)",
        hover:
          studiesDetails[0]?.category === "highSchool"
            ? "var(--blue-2)"
            : studiesDetails[0]?.category === "college"
            ? "var(--orange)"
            : "var(--secondary-color)",
        border: true,
        oneElement: true,
      },
      content: {
        icon: <Visibility />,
        text: null,
      },
      action: () => {
        window.open(certificateUrl, "Certificado", "width=600, height=500");
      },
    };
  };

  return (
    <DetailsContainer>
      <Title>
        {studiesDetails[0]?.category === "highSchool" ? (
          <FormattedMessage
            id="about.highSchool"
            defaultMessage="High School"
          />
        ) : studiesDetails[0]?.category === "college" ? (
          <FormattedMessage
            id="about.college"
            defaultMessage="College education"
          />
        ) : (
          <FormattedMessage
            id="about.extraCourses"
            defaultMessage="Extra courses"
          />
        )}
      </Title>
      <Table category={studiesDetails[0]?.category}>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <FormattedMessage id="about.tableLabel1" defaultMessage="Name" />
            </th>
            <th>
              <FormattedMessage
                id="about.tableLabel2"
                defaultMessage="Status"
              />
            </th>
            <th>
              <FormattedMessage
                id="about.tableLabel3"
                defaultMessage="See certificate"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {studiesDetails?.map((studyDetail, index) => (
            <tr key={index} title={studyDetail.title}>
              <td>{index + 1}</td>
              <td>{studyDetail.title}</td>
              <td>
                {studyDetail.isFinished ? (
                  <FormattedMessage
                    id="about.studyStatus1"
                    defaultMessage="Finished"
                  />
                ) : (
                  <FormattedMessage
                    id="about.studyStatus2"
                    defaultMessage="In progress"
                  />
                )}
              </td>
              <td>
                {studyDetail.isFinished && (
                  <Button
                    propierties={getButtonPropierties(studyDetail.certificate)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DetailsContainer>
  );
};

export default StudyDetails;
