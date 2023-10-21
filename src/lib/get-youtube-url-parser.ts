/**
 * 유튜브 주소에서 동영상 ID를 추출하는 함수
 * @param url 유튜브 주소
 */
export default function getYoutubeUrlParser(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
