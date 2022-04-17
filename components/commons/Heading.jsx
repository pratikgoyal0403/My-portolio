import styled from "styled-components";

const BarContainer = styled.div`
  //   position: relative;
  width: 100%;
  display: flex;
  min-height: 5px !important;
  /* align-items: center;
  justify-content: center; */
`;
const Bar1 = styled.div`
  flex: 1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: rgb(48, 176, 199);
`;
const Bar2 = styled.div`
  flex: 1;
  height: 5px;
  background: rgb(64, 200, 224);
`;
const Bar3 = styled.div`
  flex: 1;
  background: rgb(100, 210, 255);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export default function Heading({ title }) {
  return (
    <div className="w-fit">
      <h1 className="text-2xl font-semibold font-motserrat uppercase">
        {title}
      </h1>
      <div className="w-full" style={{ height: "5px" }}>
        {/* <BarContainer>
          <Bar1 />
          <Bar2 />
          <Bar3 />
        </BarContainer> */}
        <div className="w-full flex" style={{ height: "5px" }}>
          <div className="flex-1 bg-border1 h-full rounded-tl-md rounded-bl-md"></div>
          <div className="flex-1 bg-border2 h-full"></div>
          <div className="flex-1 bg-border3 h-full rounded-tr-md rounded-br-md"></div>
        </div>
      </div>
    </div>
  );
}
