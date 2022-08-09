import emailJs from "emailjs-com";

export const sendEmailMessage = (e, config) => {
  const { setIsVisible, setAlert, cleanAlert, setMessageBody, locale } = config;

  const successMenssage =
    locale === "en-US"
      ? "Email has been sent successfully!"
      : "Correo enviado correctamente!";
  const errorMessage =
    locale === "en-US"
      ? "An error has occurred while sending the message!"
      : "Hubo un error al enviar el mensaje!";

  setIsVisible(true);

  try {
    emailJs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    );
    setMessageBody({
      name: "",
      email: "",
      message: "",
    });
    setAlert({
      message: successMenssage,
      error: false,
    });
    cleanAlert();
  } catch (error) {
    console.log(error);
    setAlert({
      message: errorMessage,
      error: true,
    });
  }
};
