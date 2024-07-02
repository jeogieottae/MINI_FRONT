import Button from "@/components/Button";
import { ReservationEmptyInfoBox, TitleText, InfoTextBox, ImageBox } from "./ReservationEmpty.styles";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";

const AccomodationEmpty = () => {
  const router = useRouter();

  return (
    <Container>
      <TitleText>예약 내역</TitleText>
      <ReservationEmptyInfoBox>
        <InfoTextBox>
          <div>
            <strong>예정된 여행이 없습니다.</strong>
            <span>지금 새로운 예약을 진행해보세요.</span>
          </div>
          <Button onClick={() => router.replace("/")} $mode="primary">
            여행지 찾아보기
          </Button>
        </InfoTextBox>
        <ImageBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="380"
            height="260"
            fill="none"
            viewBox="0 0 280 200"
            data-v-40cf5603=""
          >
            <g fill="#F5F5F5" fill-rule="evenodd" clip-path="url(#icn_empty_card_svg__a)" clip-rule="evenodd">
              <path d="m97.793 52.894-1.631 6.085-40.569-10.87 1.63-6.086A7 7 0 0 0 43.702 38.4l-1.94 7.24c-8.625.673-16.283 6.674-18.649 15.506l-12.863 48.006c-3.002 11.203 3.646 22.718 14.849 25.72l54.092 14.494c11.203 3.002 22.718-3.647 25.719-14.849l12.864-48.007c2.366-8.832-1.265-17.858-8.397-22.754l1.94-7.24a7 7 0 0 0-13.523-3.622Zm-72.39 53.797 8.333-31.103 67.615 18.117-8.334 31.103c-2.001 7.468-9.678 11.901-17.146 9.899l-40.57-10.87c-7.468-2.001-11.9-9.678-9.899-17.146ZM259.079 9.73c-12.269-21.543-39.447-29.798-61.951-17.046-22.945 13.08-29.058 40.798-17.228 61.9 9.997 17.647 33.147 29.641 68.594 36.235 2.768.424 5.518-1.148 6.401-3.627 12.612-34.312 14.116-59.93 4.184-77.463Zm-29.06 12.61c3.812 6.73 1.449 15.276-5.278 19.087-6.727 3.811-15.272 1.445-19.084-5.285-3.813-6.73-1.45-15.275 5.277-19.087 6.728-3.81 15.272-1.445 19.085 5.285ZM200.322 209.702l-4.141-15.454c-1.144-4.268-5.603-6.782-9.959-5.614-4.357 1.167-6.962 5.573-5.818 9.841l4.141 15.455-31.554 8.454-7.888 2.114-18.635-69.547c-1.144-4.267 1.461-8.673 5.818-9.841l-4.141-15.454c-2.287-8.536 2.922-17.348 11.635-19.683l47.331-12.682c8.713-2.334 17.631 2.692 19.918 11.228l4.141 15.454c4.356-1.167 8.815 1.346 9.959 5.614l18.635 69.547-7.889 2.114v-.001l-31.553 8.455Zm-56.4-84.274 4.141 15.455 15.776-4.227-4.141-15.455-15.776 4.227Zm35.694 7-4.141-15.455 15.777-4.227 4.141 15.455-15.777 4.227Zm-27.412 23.91 4.141 15.455 15.777-4.228-4.141-15.455-15.777 4.228Zm35.694 7-4.141-15.455 15.777-4.227 4.141 15.454-15.777 4.228Z"></path>
            </g>
            <defs>
              <clipPath id="icn_empty_card_svg__a">
                <path fill="#fff" d="M0 0h280v200H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </ImageBox>
      </ReservationEmptyInfoBox>
    </Container>
  );
};

export default AccomodationEmpty;
