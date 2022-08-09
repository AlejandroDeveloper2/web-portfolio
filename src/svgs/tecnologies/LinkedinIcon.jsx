import styled from "styled-components" 

const LinkedinIcon = () => (
    <Icon
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18.75v8.75a1.875 1.875 0 1 1-3.75 0v-8.75a1.875 1.875 0 1 1 3.75 0Zm4.375 10.625A1.875 1.875 0 0 0 21.25 27.5v-4.375a2.5 2.5 0 0 1 5 0V27.5a1.875 1.875 0 1 0 3.75 0v-4.375a6.25 6.25 0 0 0-9.156-5.531A1.875 1.875 0 0 0 17.5 18.75v8.75a1.875 1.875 0 0 0 1.875 1.875Zm16.875-22.5v26.25a3.141 3.141 0 0 1-3.125 3.125H6.875a3.14 3.14 0 0 1-3.125-3.125V6.875A3.14 3.14 0 0 1 6.875 3.75h26.25a3.14 3.14 0 0 1 3.125 3.125ZM32.5 7.5h-25v25h25v-25ZM13.125 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="#fff"
      />
    </Icon>
)

const Icon = styled.svg`
  transition: all 0.6s ease;
`
export default LinkedinIcon