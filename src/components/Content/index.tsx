import styled from "styled-components";
import MiddleImage from "../../img/img1.jpg";
import SmaleImage from "../../img/img2.jpg";
import LargeImage from "../../img/img3.jpg";

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 100vh;
`;

const Cards = styled.div`
  font-size: 16px;
  margin-bottom: 70px;
`;

const CardsTitle = styled.h1`
  color: orange;
  margin-bottom: 20px;
`;

const CardsRow = styled.div`
  display: flex;
`;

const Card = styled.div`
  flex: 0 1 33.333%;
  padding: 0px 15px;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
const CardContent = styled.div``;

const ImageContainer = styled.div`
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 58% 0px;
  overflow: hidden;
  position: relative;
`;

interface ContentProps {}

export default function Content(props: ContentProps) {
  return (
    <>
      <ImageBox>
        <Image src={SmaleImage} alt="" />
      </ImageBox>
      <Cards>
        <CardsTitle>Cards in 3</CardsTitle>
        <CardsRow>
          <Card>
            <ImageContainer>
              <CardImage src={MiddleImage} alt="" />
            </ImageContainer>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              a, quasi earum aperiam voluptatibus commodi, blanditiis delectus
              aspernatur necessitatibus fuga consequuntur quas accusamus atque
              nostrum natus itaque reprehenderit beatae maiores.
            </CardContent>
          </Card>
          <Card>
            <ImageContainer>
              <CardImage src={LargeImage} alt="" />
            </ImageContainer>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              a, quasi earum aperiam voluptatibus commodi, blanditiis delectus
              aspernatur necessitatibus fuga consequuntur quas accusamus atque
              nostrum natus itaque reprehenderit beatae maiores. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Voluptates officia
              vitae vero sint adipisci debitis alias odit, cum, error eaque vel
              unde voluptate accusamus quod pariatur nobis at incidunt
              reprehenderit.
            </CardContent>
          </Card>
          <Card>
            <ImageContainer>
              <CardImage src={SmaleImage} alt="" />
            </ImageContainer>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              a, quasi earum aperiam voluptatibus commodi,
            </CardContent>
          </Card>
        </CardsRow>
      </Cards>
    </>
  );
}
