import styled from "styled-components";

const EmailIcon = () => (
    <Icon
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.556 6.667H4.444a2.222 2.222 0 0 0-2.222 2.222V31.11a2.222 2.222 0 0 0 2.222 2.222h31.112a2.223 2.223 0 0 0 2.222-2.222V8.89a2.222 2.222 0 0 0-2.222-2.222ZM33.843 31.11H6.29l7.778-8.044-1.6-1.545-8.023 8.3V10.578l13.812 13.744a2.222 2.222 0 0 0 3.133 0l14.167-14.089v19.445L27.378 21.5l-1.567 1.567 8.033 8.044ZM5.9 8.89h27.855L19.822 22.744 5.9 8.89Z"
        fill="#fff"
      />
    </Icon>
)

const Icon = styled.svg`
  transition: all 0.6s ease;
`
  
export default EmailIcon