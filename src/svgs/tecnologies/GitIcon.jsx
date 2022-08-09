import styled from "styled-components";

const GitIcon = () => (
  <Icon
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2.575c-10.092 0-18.262 8.128-18.262 18.138 0 7.35 4.405 13.675 10.745 16.52.664.299 1.312.18 1.819-.2a2.3 2.3 0 0 0 .886-1.845v-.95l-2.261-.306a.827.827 0 0 1-.05-.009c-1.247-.243-2.089-.681-2.705-1.313-.519-.532-.835-1.168-1.104-1.708l-.093-.189a19.406 19.406 0 0 0-.812-1.516c-.225-.357-.4-.54-.573-.655-.44-.292-.863-.787-.863-1.405a1.2 1.2 0 0 1 .433-.934c.258-.204.58-.312.91-.303.37 0 .718.113 1.008.243.297.134.592.31.867.494.67.446 1.33.975 1.888 1.626.582.677.994 1.107 1.614 1.195a7.85 7.85 0 0 0 1.435.057c.056-.32.149-.634.276-.933a13.925 13.925 0 0 1-1.461-.427c-1.09-.387-2.305-.988-3.122-1.9-.897-1.003-1.452-1.898-1.762-2.945-.301-1.02-.351-2.125-.351-3.485 0-2.083.901-3.838 1.578-4.77a14.425 14.425 0 0 1-.558-2.502 5.858 5.858 0 0 1 .001-1.613c.084-.488.292-1.088.84-1.45.529-.352 1.149-.337 1.632-.247.502.095 1.023.304 1.503.542a14.17 14.17 0 0 1 2.14 1.342c1.004-.295 2.779-.675 4.384-.71h.036c1.607.035 3.302.415 4.28.708.584-.437 1.359-.955 2.139-1.34.48-.238 1-.447 1.503-.542.483-.09 1.103-.105 1.633.245.547.364.757.964.839 1.452.085.508.065 1.077 0 1.613a14.438 14.438 0 0 1-.557 2.502c.677.933 1.578 2.688 1.578 4.77 0 1.36-.05 2.465-.35 3.483-.311 1.05-.866 1.944-1.763 2.947-.817.912-2.032 1.513-3.122 1.9-.578.203-1.17.369-1.77.495.205.62.279 1.122.279 1.41v5.15c0 .783.365 1.452.883 1.842.503.381 1.15.5 1.813.21 6.4-2.82 10.857-9.162 10.857-16.55 0-10.009-8.167-18.137-18.26-18.137Zm-4.207 28.608c-.433.062-.001 0-.001 0h-.005l-.014.004-.048.006c-.248.03-.496.05-.745.062a9.638 9.638 0 0 1-1.777-.072c-1.318-.186-2.12-1.12-2.638-1.726l-.05-.057a5.998 5.998 0 0 0-.545-.555c.172.317.35.67.542 1.05l.016.033.085.174c.292.58.484.966.802 1.29.31.316.793.623 1.77.816l2.99.405a.87.87 0 0 1 .753.864v1.711c0 1.334-.625 2.522-1.583 3.242a3.478 3.478 0 0 1-3.572.393C4.837 35.712 0 28.783 0 20.713 0 9.727 8.962.833 20 .833s20 8.894 20 19.88c0 8.112-4.898 15.059-11.895 18.144a3.483 3.483 0 0 1-3.562-.412 4.043 4.043 0 0 1-1.576-3.237v-5.15c0-.116-.082-.79-.537-1.695a.873.873 0 0 1 .68-1.258 11.978 11.978 0 0 0 2.507-.593c.99-.35 1.878-.83 2.406-1.42.785-.877 1.177-1.55 1.392-2.279.223-.755.28-1.633.28-2.988 0-1.902-1-3.5-1.46-4.015a.872.872 0 0 1-.173-.872c.296-.84.505-1.707.625-2.59.053-.458.056-.841.01-1.118a.763.763 0 0 0-.09-.288.808.808 0 0 0-.345.015c-.284.053-.645.186-1.055.39-.817.403-1.667 1-2.194 1.426a.867.867 0 0 1-.841.142A15.513 15.513 0 0 0 20 12.16c-1.678.04-3.615.517-4.277.755a.867.867 0 0 1-.841-.142 12.957 12.957 0 0 0-2.194-1.426 4.345 4.345 0 0 0-1.056-.39.81.81 0 0 0-.344-.015.76.76 0 0 0-.09.288c-.046.277-.043.66.01 1.118.12.883.33 1.75.625 2.59.105.3.04.634-.173.872-.46.515-1.46 2.113-1.46 4.015 0 1.353.057 2.233.28 2.988.217.729.607 1.4 1.39 2.279.53.59 1.417 1.07 2.408 1.42.812.287 1.652.486 2.505.593a.87.87 0 0 1 .41 1.575c-.275.197-.456.55-.558.958-.053.21-.084.425-.093.642v.032a.871.871 0 0 1-.749.871Z"
      fill="#fff"
    />
  </Icon>
)

const Icon = styled.svg`
  transition: all 0.6s ease;
`
export default GitIcon
