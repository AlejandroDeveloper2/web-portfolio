import { Container, Photo } from "./ProfileAvatar.styles";

const ProfileAvatar = ({ photoPath }) => {
  return (
    <Container>
      <Photo src={photoPath} alt="Profile photo" />
    </Container>
  );
};

export default ProfileAvatar;
